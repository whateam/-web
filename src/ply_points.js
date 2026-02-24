import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function fract(x) {
  return x - Math.floor(x);
}

export class PlyPointsViewer {
  constructor(canvas) {
    this.canvas = canvas;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.01,
      1e8
    );

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: false,
    });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 透明背景
    this.renderer.setClearColor(0x000000, 0);

    // Orbit controls（自由控制）
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;

    this.controls.enableRotate = true;
    this.controls.enablePan = true;
    this.controls.enableZoom = true;

    this.controls.screenSpacePanning = true;

    // OrbitControls polarAngle 必须在 [0, Math.PI]
    this.controls.minPolarAngle = 0.0;
    this.controls.maxPolarAngle = Math.PI;

    this.controls.minDistance = 0.0001;
    this.controls.maxDistance = Infinity;

    this.points = null;

    // base shape
    this.basePos = null; // Float32Array
    this.baseCenter = new THREE.Vector3();
    this.baseRadius = 1;

    // per-point randomness for noise
    this.rnd = null; // Float32Array(len = count)

    // explode caches
    this.explodeVel = null; // Float32Array(len = basePos.length)
    this.explodeOff = null; // Float32Array(len = basePos.length)

    // anim params
    this.anim = "none"; // none | zwave | breathe | swirl | float | noise | explode
    this.amp = 0.6;
    this.freq = 2.0;
    this.speed = 1.0;

    // ✅ explode loop params（你要的：爆炸+间隔）
    this.explodeDuration = 1.6; // 爆炸“运动段”持续时间（秒）
    this.explodeGap = 0.5;      // 你要的：循环之间间隔 1 秒
    this.explodePeriod = this.explodeDuration + this.explodeGap;

    this.explodeKick = 1.0;     // 点火强度倍数（随 amp）
    this.explodeLastKickT = -1; // 上次点火时间（秒）

    // ✅ 保证回到原形：强回缩 + 硬归零阈值
    this.explodeSpring = 3.2;    // 越大回缩越快
    this.explodeVelDamp = 0.92;  // 速度阻尼（越小越快停）
    this.explodeOffDamp = 0.86;  // offset 额外衰减（强制归零）
    this.explodeSnap = 1e-4;     // 归零阈值（相对 baseRadius）

    this.startTime = performance.now();

    // flip
    this.flipMode = "x180"; // "none" | "x180" | "y180" | "z180"

    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  setFlipMode(mode) {
    const m = String(mode || "none").toLowerCase().trim();
    this.flipMode = ["none", "x180", "y180", "z180"].includes(m) ? m : "none";
    this._applyFlipToPointsObject(this.points);
  }

  // ✅ 命名兼容
  setAnim(a) {
    const v = String(a || "none").toLowerCase().trim();
    const map = {
      none: "none",
      off: "none",

      zwave: "zwave",
      z: "zwave",
      z_wave: "zwave",
      "z-wave": "zwave",

      breathe: "breathe",
      breath: "breathe",
      pulse: "breathe",
      breathing: "breathe",

      swirl: "swirl",
      twist: "swirl",
      vortex: "swirl",

      float: "float",
      drift: "float",

      noise: "noise",
      jitter: "noise",
      wobble: "noise",
      random: "noise",

      explode: "explode",
      boom: "explode",
      blast: "explode",
    };

    this.anim = map[v] || "none";

    if (this.anim === "explode" && this.basePos) {
      this.explodeLastKickT = -1; // 强制下一帧点火
      this._initExplode(true);
    }
  }

  setParams(a, f, s) {
    if (Number.isFinite(a)) this.amp = a;
    if (Number.isFinite(f)) this.freq = f;
    if (Number.isFinite(s)) this.speed = s;
  }

  _applyFlipToPointsObject(obj) {
    if (!obj) return;
    obj.rotation.set(0, 0, 0);
    if (this.flipMode === "x180") obj.rotateX(Math.PI);
    if (this.flipMode === "y180") obj.rotateY(Math.PI);
    if (this.flipMode === "z180") obj.rotateZ(Math.PI);
  }

  _frameCamera(center, radius) {
    const fov = (this.camera.fov * Math.PI) / 180;
    const dist = radius / Math.tan(fov / 2);
    const safe = dist * 1.35;

    this.camera.position.set(
      center.x + safe * 0.15,
      center.y + safe * 0.10,
      center.z + safe
    );

    this.camera.near = Math.max(0.001, safe / 2000);
    this.camera.far = safe * 5000;
    this.camera.updateProjectionMatrix();

    this.controls.target.copy(center);
    this.controls.minDistance = Math.max(radius * 0.02, 0.0001);
    this.controls.maxDistance = radius * 2000;
    this.controls.update();
  }

  // ✅ 初始化爆炸：生成速度；resetOffset=true 时把偏移强制清零
  _initExplode(resetOffset = true) {
    if (!this.basePos) return;

    if (!this.explodeVel || this.explodeVel.length !== this.basePos.length) {
      this.explodeVel = new Float32Array(this.basePos.length);
    }
    if (!this.explodeOff || this.explodeOff.length !== this.basePos.length) {
      this.explodeOff = new Float32Array(this.basePos.length);
    }
    if (resetOffset) this.explodeOff.fill(0);

    const cx = this.baseCenter.x;
    const cy = this.baseCenter.y;
    const cz = this.baseCenter.z;

    const count = this.basePos.length / 3;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const bx = this.basePos[ix];
      const by = this.basePos[ix + 1];
      const bz = this.basePos[ix + 2];

      const dx = bx - cx;
      const dy = by - cy;
      const dz = bz - cz;
      const len = Math.sqrt(dx * dx + dy * dy + dz * dz) + 1e-6;

      const nx = dx / len;
      const ny = dy / len;
      const nz = dz / len;

      const baseV = this.baseRadius * 0.85;

      const r = this.rnd
        ? this.rnd[i]
        : fract(Math.sin(i * 12.9898) * 43758.5453123);

      const jitter = r * 0.7 + 0.65; // 0.65~1.35
      const v = baseV * jitter * this.explodeKick;

      this.explodeVel[ix] = nx * v;
      this.explodeVel[ix + 1] = ny * v;
      this.explodeVel[ix + 2] = nz * v;
    }
  }

  async loadFromUrl(url) {
    if (this.points) {
      this.scene.remove(this.points);
      this.points.geometry.dispose();
      this.points.material.dispose?.();
      this.points = null;
    }

    this.basePos = null;
    this.rnd = null;
    this.explodeVel = null;
    this.explodeOff = null;
    this.explodeLastKickT = -1;

    const loader = new PLYLoader();
    const geometry = await new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });

    if (!geometry || !geometry.hasAttribute("position")) {
      throw new Error("PLY 没有 position 顶点坐标，无法作为点云渲染");
    }

    const pos = geometry.getAttribute("position");
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i),
        y = pos.getY(i),
        z = pos.getZ(i);
      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
        pos.setXYZ(i, 0, 0, 0);
      }
    }
    pos.needsUpdate = true;

    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    const bbox = geometry.boundingBox;
    const bs = geometry.boundingSphere;

    const center = bbox
      ? bbox.getCenter(new THREE.Vector3())
      : bs?.center ?? new THREE.Vector3();

    const radius = bs?.radius && Number.isFinite(bs.radius) ? bs.radius : 1;

    this.baseCenter.copy(center);
    this.baseRadius = Math.max(radius, 1e-6);

    this.basePos = new Float32Array(pos.array.length);
    this.basePos.set(pos.array);

    this.rnd = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      this.rnd[i] = fract(Math.sin(i * 12.9898) * 43758.5453123);
    }

    const hasColor = geometry.hasAttribute("color");
    const material = new THREE.PointsMaterial({
      size: Math.max(this.baseRadius / 900, 0.01),
      sizeAttenuation: true,
      vertexColors: hasColor,
      color: hasColor ? undefined : 0xffffff,
      transparent: true,
      opacity: 1.0,
    });

    this.points = new THREE.Points(geometry, material);
    this._applyFlipToPointsObject(this.points);
    this.scene.add(this.points);

    this._frameCamera(this.baseCenter, this.baseRadius);

    if (this.anim === "explode") {
      this.explodeKick = Math.max(0.15, this.amp);
      this._initExplode(true);
    }

    this.startTime = performance.now();
  }

  update() {
    this.controls.update();

    if (!this.points || !this.basePos) {
      this.renderer.render(this.scene, this.camera);
      return;
    }

    const geom = this.points.geometry;
    const pos = geom.getAttribute("position");

    const t = ((performance.now() - this.startTime) / 1000) * this.speed;
    const amp = this.amp;
    const freq = this.freq;

    const cx = this.baseCenter.x;
    const cy = this.baseCenter.y;
    const cz = this.baseCenter.z;

    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const bx = this.basePos[ix];
      const by = this.basePos[ix + 1];
      const bz = this.basePos[ix + 2];

      let x = bx,
        y = by,
        z = bz;

      if (this.anim === "zwave") {
        const phase = (bx - cx) * freq + (by - cy) * freq + t;
        z = bz + Math.sin(phase) * amp * this.baseRadius * 0.06;

      } else if (this.anim === "breathe") {
        const dx = bx - cx, dy = by - cy, dz = bz - cz;
        const k = 1.0 + Math.sin(t * 1.2) * amp * 0.6;
        x = cx + dx * k;
        y = cy + dy * k;
        z = cz + dz * k;

      } else if (this.anim === "swirl") {
        const dx = bx - cx, dz = bz - cz;
        const ang = Math.atan2(dz, dx);
        const r = Math.sqrt(dx * dx + dz * dz);
        const twist = Math.sin(t + (by - cy) * freq) * amp * 2.4;
        const a2 = ang + twist;
        x = cx + Math.cos(a2) * r;
        z = cz + Math.sin(a2) * r;

      } else if (this.anim === "float") {
        const phase = (bx - cx) * freq * 0.3 + (by - cy) * freq * 0.6 + t;
        y = by + Math.sin(phase) * amp * this.baseRadius * 0.04;

      } else if (this.anim === "noise") {
        const r = this.rnd ? this.rnd[i] : 0.5;
        const p = t * 2.2 + r * 30.0;

        const s1 = Math.sin(p + (bx - cx) * 0.02 * freq);
        const s2 = Math.sin(p * 1.37 + (by - cy) * 0.02 * freq);
        const s3 = Math.sin(p * 1.91 + (bz - cz) * 0.02 * freq);

        const m = amp * this.baseRadius * 0.03;
        x = bx + s1 * m;
        y = by + s2 * m;
        z = bz + s3 * m;

      } else if (this.anim === "explode") {
        // ✅ 周期 = 爆炸段 + 间隔段（你要间隔 1 秒）
        const duration = Math.max(0.15, this.explodeDuration);
        const gap = Math.max(0.0, this.explodeGap);
        const period = Math.max(0.2, duration + gap);

        // 当前处于周期内的时间
        const local = t % period;
        const phaseIndex = Math.floor(t / period);
        const kickT = phaseIndex * period;

        // ✅ 每个周期开始“点火一次”
        if (kickT !== this.explodeLastKickT) {
          this.explodeLastKickT = kickT;

          // amp 作为强度
          this.explodeKick = Math.max(0.15, amp);

          // 每次循环开始：强制归零后再爆（保证回到原形）
          this._initExplode(true);
        }

        // ✅ 间隔段：强制回原始形态（100% 无漂移）
        if (local >= duration) {
          x = bx; y = by; z = bz;

          // 额外保险：把 offset 慢慢拉到 0，避免下一轮残留
          if (this.explodeOff) {
            this.explodeOff[ix] *= 0.5;
            this.explodeOff[ix + 1] *= 0.5;
            this.explodeOff[ix + 2] *= 0.5;
            if (this.explodeVel) {
              this.explodeVel[ix] *= 0.5;
              this.explodeVel[ix + 1] *= 0.5;
              this.explodeVel[ix + 2] *= 0.5;
            }
          }
        } else {
          // ✅ 爆炸段：物理更新（稳定回缩 + 硬归零）
          if (!this.explodeVel || !this.explodeOff) {
            this._initExplode(true);
          }

          const dt = 1 / 60;
          const a = Math.max(0.05, amp);

          // offset += vel * dt
          this.explodeOff[ix] += this.explodeVel[ix] * dt * a;
          this.explodeOff[ix + 1] += this.explodeVel[ix + 1] * dt * a;
          this.explodeOff[ix + 2] += this.explodeVel[ix + 2] * dt * a;

          // vel damping
          const vd = this.explodeVelDamp;
          this.explodeVel[ix] *= vd;
          this.explodeVel[ix + 1] *= vd;
          this.explodeVel[ix + 2] *= vd;

          // spring back to zero-offset
          const spring = this.explodeSpring;
          this.explodeVel[ix] += (-this.explodeOff[ix]) * spring * dt;
          this.explodeVel[ix + 1] += (-this.explodeOff[ix + 1]) * spring * dt;
          this.explodeVel[ix + 2] += (-this.explodeOff[ix + 2]) * spring * dt;

          // extra offset damping (forces convergence)
          const od = this.explodeOffDamp;
          this.explodeOff[ix] *= od;
          this.explodeOff[ix + 1] *= od;
          this.explodeOff[ix + 2] *= od;

          // hard snap to exact original shape
          const snap = this.explodeSnap * this.baseRadius;
          if (
            Math.abs(this.explodeOff[ix]) < snap &&
            Math.abs(this.explodeOff[ix + 1]) < snap &&
            Math.abs(this.explodeOff[ix + 2]) < snap
          ) {
            this.explodeOff[ix] = 0;
            this.explodeOff[ix + 1] = 0;
            this.explodeOff[ix + 2] = 0;
            this.explodeVel[ix] = 0;
            this.explodeVel[ix + 1] = 0;
            this.explodeVel[ix + 2] = 0;
          }

          x = bx + this.explodeOff[ix];
          y = by + this.explodeOff[ix + 1];
          z = bz + this.explodeOff[ix + 2];
        }
      }

      pos.setXYZ(i, x, y, z);
    }

    pos.needsUpdate = true;
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    if (this.points) {
      this.scene.remove(this.points);
      this.points.geometry.dispose();
      this.points.material.dispose?.();
      this.points = null;
    }
    this.basePos = null;
    this.rnd = null;
    this.explodeVel = null;
    this.explodeOff = null;
  }
}
