import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Viewer } from "@mkkellogg/gaussian-splats-3d";

type AnimMode = "none" | "zwave" | "swirl" | "noise" | "breath" | "explode";
type PerfLevel = "high" | "low";

type CustomUniformRefs = {
  time: { value: number };
  mode: { value: number };
  morph: { value: number };
  colorGain: { value: number };
  strength: { value: number };
  radius: { value: number };
};

type FloatingBubbleEntry = {
  element: HTMLButtonElement;
  kind: "text" | "plain";
  position: any;
  velocity: any;
  outwardDir: any;
  outwardAccel: number;
  driftRadius: number;
  seed: number;
  spawnMs: number;
  lastUpdateMs: number;
  lifeMs: number;
  revealUntilMs: number;
  startScale: number;
  endScale: number;
  maxAlpha: number;
  colorRgb: [number, number, number];
  screenX: number;
  screenY: number;
  overModel: boolean;
  lastOverlapCheckMs: number;
};

export class SplatViewer {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderer: any;
  private readonly camera: any;
  private readonly controls: any;
  private readonly threeScene: any;
  private readonly isMobileLike: boolean;
  private viewer: any = null;
  private customUniforms: CustomUniformRefs | null = null;
  private animationMode: AnimMode = "none";
  private animationStartTime = performance.now();
  private readonly morphLoopSeconds = 3.2;
  private readonly pointCloudEnterMorph = 0.38;
  private readonly pointCloudExitMorph = 0.02;
  private readonly modelRevealStartMorph = 0.34;
  private readonly modelRevealStartGain = 0.62;
  private readonly modelRevealStartScale = 0.84;
  private pointCloudEnabled = false;
  private readonly luminanceBridgeDurationSeconds = 0.32;
  private luminanceBridgeActive = false;
  private luminanceBridgeFrom = 1;
  private luminanceBridgeElapsed = 0;
  private readonly scaleBridgeDurationSeconds = 0.28;
  private scaleBridgeActive = false;
  private scaleBridgeFrom = 1;
  private scaleBridgeElapsed = 0;
  private colorGainApplied = 1;
  private scaleApplied = 1;
  private readonly colorRisePerSecond = 0.35;
  private readonly colorFallPerSecond = 1.8;
  private lastUniformUpdateTimeMs = performance.now();
  private sceneCenter = new THREE.Vector3();
  private sceneRadius = 1;
  private loadVersion = 0;
  private disposed = false;
  private readonly onResize = () => this.resize();
  private readonly flipQuaternion = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(Math.PI, 0, 0)
  );
  private bubbleLayer: HTMLElement | null = null;
  private bubbleMessages: string[] = [];
  private readonly floatingBubbles: FloatingBubbleEntry[] = [];
  private nextBubbleSpawnMs = Number.POSITIVE_INFINITY;
  private readonly maxFloatingBubbles = 18;
  private readonly bubbleLifeMinMs = 3400;
  private readonly bubbleLifeMaxMs = 5600;
  private readonly bubbleSpawnMinGapMs = 230;
  private readonly bubbleSpawnMaxGapMs = 520;
  private readonly textBubbleSpawnProbability = 0.42;
  private readonly maxTextBubbles = 6;
  private readonly edgeDisappearMarginPx = 56;
  private readonly bubbleEdgeSpawnRadiusFactor = 1.02;
  private readonly bubbleEdgeSpawnJitterFactor = 0.012;
  private readonly bubbleNoOverlapSampleRadiusPx = 14;
  private readonly bubbleNoOverlapPushStepFactor = 0.04;
  private readonly bubbleNoOverlapPushMaxTries = 12;
  private readonly bubbleOverlapCheckIntervalDesktopMs = 36;
  private readonly bubbleOverlapCheckIntervalMobileMs = 120;
  private readonly mobileMaxFloatingBubbles = 11;
  private readonly lowMobileMaxFloatingBubbles = 7;
  private readonly lowDesktopMaxFloatingBubbles = 12;
  private readonly lowBubbleTickIntervalMs = 28;
  private readonly highDprCapDesktop = 2;
  private readonly highDprCapMobile = 1.75;
  private readonly lowDprCapDesktop = 1.35;
  private readonly lowDprCapMobile = 1.05;
  private readonly bubbleProjection = new THREE.Vector3();
  private readonly bubbleWorldPos = new THREE.Vector3();
  private readonly bubbleOffsetTemp = new THREE.Vector3();
  private readonly bubbleTangentATemp = new THREE.Vector3();
  private readonly bubbleTangentBTemp = new THREE.Vector3();
  private readonly bubbleSamplePixel = new Uint8Array(4);
  private performanceLevel: PerfLevel = "high";
  private lastBubbleTickMs = 0;
  private bubblesEnabledForModel = false;
  private activeTextBubble: FloatingBubbleEntry | null = null;
  private orbitPointerReleaseTimer: number | null = null;
  private readonly onOrbitStart = () => {
    if (this.bubbleLayer) {
      this.bubbleLayer.classList.add("is-orbiting");
    }
    if (this.orbitPointerReleaseTimer !== null) {
      window.clearTimeout(this.orbitPointerReleaseTimer);
      this.orbitPointerReleaseTimer = null;
    }
  };
  private readonly onOrbitEnd = () => {
    if (this.orbitPointerReleaseTimer !== null) {
      window.clearTimeout(this.orbitPointerReleaseTimer);
    }
    this.orbitPointerReleaseTimer = window.setTimeout(() => {
      this.orbitPointerReleaseTimer = null;
      this.bubbleLayer?.classList.remove("is-orbiting");
    }, 120);
  };
  private readonly onDocumentPointerDown = (event: PointerEvent) => {
    const active = this.activeTextBubble;
    if (!active) {
      return;
    }

    const targetNode = event.target instanceof Node ? event.target : null;
    if (targetNode && active.element.contains(targetNode)) {
      return;
    }

    this.dismissActiveTextBubble();
  };

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.threeScene = new THREE.Scene();
    this.isMobileLike =
      window.matchMedia("(max-width: 980px), (pointer: coarse)").matches ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

    this.camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / Math.max(canvas.clientHeight, 1),
      0.01,
      10000
    );
    this.camera.up.set(0, 1, 0);
    this.camera.position.set(0, 0, 3);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    this.applyRendererPixelRatio();
    this.renderer.setClearColor(0x000000, 0);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableRotate = true;
    this.controls.enablePan = true;
    this.controls.enableZoom = true;
    this.controls.screenSpacePanning = true;
    this.controls.rotateSpeed = this.isMobileLike ? 0.78 : 1;
    this.controls.zoomSpeed = this.isMobileLike ? 0.9 : 1;
    this.controls.panSpeed = this.isMobileLike ? 0.72 : 1;
    this.controls.minDistance = 0.0001;
    this.controls.maxDistance = Number.POSITIVE_INFINITY;
    this.controls.target.set(0, 0, 0);
    this.controls.update();
    this.controls.addEventListener("start", this.onOrbitStart);
    this.controls.addEventListener("end", this.onOrbitEnd);

    window.addEventListener("resize", this.onResize);
    window.addEventListener("pointerdown", this.onDocumentPointerDown);
  }

  async load(url: string) {
    if (this.disposed) {
      throw new Error("SplatViewer already disposed");
    }

    this.loadVersion += 1;
    const currentLoadVersion = this.loadVersion;
    this.customUniforms = null;
    this.bubblesEnabledForModel = false;
    this.resetFloatingBubbles(false);
    const isKsplatAsset = /\.ksplat(?:\?|$)/i.test(url);

    const previousViewer = this.viewer;
    this.viewer = null;
    if (previousViewer) {
      await previousViewer.dispose();
    }

    const nextViewer = new Viewer({
      selfDrivenMode: false,
      renderer: this.renderer,
      camera: this.camera,
      threeScene: this.threeScene,
      useBuiltInControls: false,
      sharedMemoryForWorkers: false,
      gpuAcceleratedSort: false,
      enableSIMDInSort: false,
      integerBasedSort: !this.isMobileLike,
      splatSortDistanceMapPrecision: this.isMobileLike ? 24 : 20
    });

    try {
      await nextViewer.addSplatScene(url, {
        rotation: [
          this.flipQuaternion.x,
          this.flipQuaternion.y,
          this.flipQuaternion.z,
          this.flipQuaternion.w
        ],
        splatAlphaRemovalThreshold: this.isMobileLike && !isKsplatAsset ? 1 : 0,
        showLoadingUI: true,
        progressiveLoad: this.isMobileLike && !isKsplatAsset
      });

      if (this.disposed || currentLoadVersion !== this.loadVersion) {
        await nextViewer.dispose();
        return;
      }

      this.viewer = nextViewer;
      this.installCustomAnimationKernel(nextViewer);
      this.frameCameraFromSplatMesh(nextViewer.splatMesh);
      this.bubblesEnabledForModel = true;
      this.resetFloatingBubbles(true);
      this.animationStartTime = performance.now();
      this.lastUniformUpdateTimeMs = performance.now();
      this.colorGainApplied = 1;
      this.scaleApplied = 1;
      this.luminanceBridgeActive = false;
      this.scaleBridgeActive = false;
      this.applyAnimationStyle(true);
      this.updateAnimationUniforms();
    } catch (error) {
      await nextViewer.dispose();
      throw error;
    }
  }

  setAnimation(mode: string) {
    const normalized = String(mode || "none").toLowerCase().trim();
    const map: Record<string, AnimMode> = {
      none: "none",
      off: "none",
      "z wave": "zwave",
      z_wave: "zwave",
      "z-wave": "zwave",
      zwave: "zwave",
      swirl: "swirl",
      noise: "noise",
      breath: "breath",
      breathe: "breath",
      explode: "explode"
    };

    this.animationMode = map[normalized] || "none";
    this.animationStartTime = performance.now();
    this.lastUniformUpdateTimeMs = performance.now();
    if (this.animationMode === "none") {
      this.colorGainApplied = 1;
      this.scaleApplied = 1;
      this.luminanceBridgeActive = false;
      this.scaleBridgeActive = false;
    }
    this.applyAnimationStyle(true);
    this.updateAnimationUniforms();
  }

  setFloatingBubbles(layer: HTMLElement | null, messages: readonly string[]) {
    this.resetFloatingBubbles(false);
    this.bubbleLayer = layer;
    this.bubbleMessages = messages
      .map((message) => message.trim())
      .filter((message) => message.length > 0);

    if (this.bubbleLayer) {
      this.bubbleLayer.replaceChildren();
    }

    this.nextBubbleSpawnMs =
      this.bubbleLayer && this.bubblesEnabledForModel
        ? performance.now() + 320
        : Number.POSITIVE_INFINITY;
  }

  setPerformanceLevel(level: PerfLevel) {
    if (this.performanceLevel === level) {
      return;
    }
    this.performanceLevel = level;
    this.applyRendererPixelRatio();

    const limit = this.getActiveMaxFloatingBubbles();
    while (this.floatingBubbles.length > limit) {
      const bubble = this.floatingBubbles.shift();
      bubble?.element.remove();
    }
  }

  update() {
    if (this.disposed) return;

    this.controls.update();
    this.updateAnimationUniforms();

    if (this.viewer) {
      this.viewer.update();
      this.viewer.render();
    } else {
      this.renderer.render(this.threeScene, this.camera);
    }

    this.updateFloatingBubbles();
  }

  async dispose() {
    if (this.disposed) return;

    this.disposed = true;
    window.removeEventListener("resize", this.onResize);
    this.controls.dispose();
    this.controls.removeEventListener("start", this.onOrbitStart);
    this.controls.removeEventListener("end", this.onOrbitEnd);
    window.removeEventListener("pointerdown", this.onDocumentPointerDown);
    if (this.orbitPointerReleaseTimer !== null) {
      window.clearTimeout(this.orbitPointerReleaseTimer);
      this.orbitPointerReleaseTimer = null;
    }
    this.resetFloatingBubbles(false);
    this.bubbleLayer = null;
    this.bubbleMessages = [];

    if (this.viewer) {
      await this.viewer.dispose();
      this.viewer = null;
    }
  }

  private installCustomAnimationKernel(viewer: any) {
    const material = viewer?.splatMesh?.material;
    if (!material || typeof material.vertexShader !== "string") {
      return;
    }

    if (!material.uniforms.uCustomAnimTime) {
      material.uniforms.uCustomAnimTime = { value: 0 };
      material.uniforms.uCustomAnimMode = { value: 0 };
      material.uniforms.uCustomAnimMorph = { value: 0 };
      material.uniforms.uCustomColorGain = { value: 1 };
      material.uniforms.uCustomAnimStrength = { value: 1 };
      material.uniforms.uCustomAnimRadius = { value: 1 };
    }

    if (!material.userData) {
      material.userData = {};
    }

    if (!material.userData.customAnimKernelInstalled) {
      const uniformAnchor = "uniform float currentTime;";
      const centerAnchor = "vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));";

      let vertexShader = material.vertexShader as string;
      if (!vertexShader.includes(uniformAnchor) || !vertexShader.includes(centerAnchor)) {
        throw new Error("Gaussian shader layout changed; custom kernel patch failed.");
      }

      vertexShader = vertexShader.replace(
        uniformAnchor,
        `${uniformAnchor}
        uniform float uCustomAnimTime;
        uniform int uCustomAnimMode;
        uniform float uCustomAnimMorph;
        uniform float uCustomColorGain;
        uniform float uCustomAnimStrength;
        uniform float uCustomAnimRadius;`
      );

      const colorAnchor = "vColor = uintToRGBAVec(sampledCenterColor.r);";
      if (!vertexShader.includes(colorAnchor)) {
        throw new Error("Gaussian shader color anchor not found; custom kernel patch failed.");
      }
      vertexShader = vertexShader.replace(
        colorAnchor,
        `${colorAnchor}
            vColor.rgb *= uCustomColorGain;`
      );

      vertexShader = vertexShader.replace(
        centerAnchor,
        `${centerAnchor}
            vec3 baseCenter = splatCenter;
            if (uCustomAnimMode > 0) {
                float id = float(splatIndex);
                float seed = fract(sin(id * 12.9898) * 43758.5453);
                float morph = clamp(uCustomAnimMorph, 0.0, 1.0);
                vec3 fromCenter = baseCenter - sceneCenter;
                float radiusNorm = clamp(length(fromCenter) / max(uCustomAnimRadius, 0.0001), 0.0, 1.0);
                float t = uCustomAnimTime;
                float phase = t * 1.2 + seed * 6.2831853;
                float motionGate = smoothstep(0.12, 0.35, morph);
                float strength = uCustomAnimStrength * morph * motionGate;
                vec3 animatedCenter = baseCenter;

                vec3 grainDir = normalize(vec3(
                    sin(seed * 31.4) - 0.5,
                    cos(seed * 47.1) - 0.5,
                    sin(seed * 59.9) - 0.5
                ) + vec3(0.0001));
                float breakup = smoothstep(0.05, 0.85, morph);
                animatedCenter += grainDir * breakup * mix(0.01, 0.09, radiusNorm) * uCustomAnimRadius;

                if (uCustomAnimMode == 1) {
                    float wave = sin(phase + dot(fromCenter, vec3(0.11, 0.07, 0.13)) * 3.0);
                    animatedCenter.z += wave * strength * mix(0.03, 0.16, radiusNorm) * uCustomAnimRadius;
                    animatedCenter.y += cos(phase * 0.8 + radiusNorm * 5.0) * strength * 0.02 * uCustomAnimRadius;
                } else if (uCustomAnimMode == 2) {
                    float angle = atan(fromCenter.z, fromCenter.x);
                    float radial = length(fromCenter.xz);
                    angle += sin(phase + fromCenter.y * 0.08) * 1.15 * strength;
                    animatedCenter.x = sceneCenter.x + cos(angle) * radial;
                    animatedCenter.z = sceneCenter.z + sin(angle) * radial;
                    animatedCenter.y += sin(phase * 0.9 + radial * 0.06) * 0.03 * strength * uCustomAnimRadius;
                } else if (uCustomAnimMode == 3) {
                    vec3 wobble = vec3(
                        sin(phase * 2.1 + fromCenter.y * 0.13) + cos(phase * 0.7 + fromCenter.z * 0.09),
                        cos(phase * 1.7 + fromCenter.x * 0.11) + sin(phase * 0.9 + fromCenter.z * 0.05),
                        sin(phase * 1.3 + fromCenter.x * 0.07) + cos(phase * 1.6 + fromCenter.y * 0.12)
                    );
                    animatedCenter += wobble * 0.03 * strength * uCustomAnimRadius;
                } else if (uCustomAnimMode == 4) {
                    float scalePulse = 1.0 + sin(phase * 0.9) * 0.12 * strength;
                    animatedCenter = sceneCenter + fromCenter * scalePulse;
                } else if (uCustomAnimMode == 5) {
                    float burst = pow(max(sin(phase * 0.8), 0.0), 2.0);
                    vec3 explodeDir = normalize(fromCenter + vec3(0.0001, 0.0001, 0.0001));
                    animatedCenter += explodeDir * burst * strength * 0.28 * uCustomAnimRadius;
                }

                splatCenter = mix(baseCenter, animatedCenter, morph);
            }`
      );

      material.vertexShader = vertexShader;
      material.userData.customAnimKernelInstalled = true;
      material.needsUpdate = true;
    }

    this.customUniforms = {
      time: material.uniforms.uCustomAnimTime,
      mode: material.uniforms.uCustomAnimMode,
      morph: material.uniforms.uCustomAnimMorph,
      colorGain: material.uniforms.uCustomColorGain,
      strength: material.uniforms.uCustomAnimStrength,
      radius: material.uniforms.uCustomAnimRadius
    };
  }

  private applyAnimationStyle(resetForTransition = false) {
    if (!this.viewer?.splatMesh) return;

    const splatMesh = this.viewer.splatMesh;
    if (this.animationMode === "none" || resetForTransition) {
      if (typeof splatMesh.setPointCloudModeEnabled === "function") {
        splatMesh.setPointCloudModeEnabled(false);
      }
      if (typeof splatMesh.setSplatScale === "function") {
        splatMesh.setSplatScale(1.0);
      }
      this.pointCloudEnabled = false;
    }
  }

  private updateAnimationUniforms() {
    if (!this.customUniforms) return;

    const nowMs = performance.now();
    const elapsedSeconds = (nowMs - this.animationStartTime) / 1000;
    const dt = Math.min(Math.max((nowMs - this.lastUniformUpdateTimeMs) / 1000, 0), 0.05);
    this.lastUniformUpdateTimeMs = nowMs;
    let morph = 0;
    let dispersing = false;
    if (this.animationMode !== "none") {
      const phase = (elapsedSeconds % this.morphLoopSeconds) / this.morphLoopSeconds;
      dispersing = phase < 0.5;
      const triangle = phase < 0.5 ? phase * 2 : (1 - phase) * 2;
      morph = this.easeInOutCubic(triangle);
    }

    let targetPointCloud = this.pointCloudEnabled;
    if (this.animationMode === "none") {
      targetPointCloud = false;
    } else if (dispersing && morph >= this.pointCloudEnterMorph) {
      targetPointCloud = true;
    } else if (!dispersing && morph <= this.pointCloudExitMorph) {
      targetPointCloud = false;
    }

    const inModelRevealWindow =
      this.animationMode !== "none" && !dispersing && morph <= this.modelRevealStartMorph;
    const modelRevealBlend = inModelRevealWindow
      ? 1 - this.smoothstep(0, this.modelRevealStartMorph, morph)
      : 0;

    const morphForScale = this.easeInOutCubic(morph);
    const scaleGate = this.smoothstep(0.03, 0.18, morph);
    const reassemblyFill = !dispersing ? 1 - this.smoothstep(0.0, 0.28, morph) : 0;
    const targetScaleRaw =
      this.animationMode === "none"
        ? 1.0
        : 1.0 + 0.22 * morphForScale * scaleGate + 0.26 * reassemblyFill;

    let pointCloudBlend = 0;
    if (this.animationMode !== "none") {
      if (dispersing) {
        pointCloudBlend = this.smoothstep(
          this.pointCloudEnterMorph - 0.14,
          this.pointCloudEnterMorph + 0.04,
          morph
        );
      } else {
        pointCloudBlend = this.smoothstep(0.0, 0.16, morph);
      }
    }

    const convergence = 1 - this.smoothstep(0.0, 0.24, morph);
    const modelGain = 1.0 - 0.08 * convergence;
    const particleGain = 1.2 + 0.14 * convergence;
    const colorGainRaw =
      this.animationMode === "none"
        ? 1.0
        : this.mix(modelGain, particleGain, pointCloudBlend);

    // In the last reassembly frames, force a soft landing to model-state params
    // before switching out of point-cloud mode to avoid a single rough transition frame.
    const handoffToModel =
      this.animationMode === "none"
        ? 1
        : 1 - this.smoothstep(this.pointCloudExitMorph + 0.02, this.pointCloudExitMorph + 0.14, morph);

    const targetScaleBase = this.mix(targetScaleRaw, 1.0, handoffToModel);
    const targetScale =
      this.isMobileLike && targetPointCloud ? targetScaleBase * 1.18 : targetScaleBase;
    const colorGainTarget = colorGainRaw;

    const splatMesh = this.viewer?.splatMesh;
    if (splatMesh) {
      if (inModelRevealWindow) {
        targetPointCloud = false;
      } else if (!dispersing && morph <= this.pointCloudExitMorph + 0.03) {
        targetPointCloud = false;
      }

      const switchingFromPointCloudToModel = this.pointCloudEnabled && !targetPointCloud;
      if (switchingFromPointCloudToModel) {
        this.luminanceBridgeActive = true;
        this.luminanceBridgeFrom = this.colorGainApplied;
        this.luminanceBridgeElapsed = 0;

        this.scaleBridgeActive = true;
        this.scaleBridgeFrom = Math.min(this.scaleApplied, 0.9);
        this.scaleBridgeElapsed = 0;
      }

      if (this.pointCloudEnabled !== targetPointCloud) {
        if (typeof splatMesh.setPointCloudModeEnabled === "function") {
          splatMesh.setPointCloudModeEnabled(targetPointCloud);
        }
        this.pointCloudEnabled = targetPointCloud;
      }
    }

    let desiredScale = targetScale;
    if (inModelRevealWindow) {
      this.scaleBridgeActive = false;
      desiredScale = this.mix(this.modelRevealStartScale, 1.0, modelRevealBlend);
    } else if (this.animationMode === "none") {
      this.scaleBridgeActive = false;
      desiredScale = 1.0;
    } else if (this.scaleBridgeActive) {
      this.scaleBridgeElapsed += dt;
      const pScale = this.smoothstep(0, this.scaleBridgeDurationSeconds, this.scaleBridgeElapsed);
      desiredScale = this.mix(this.scaleBridgeFrom, 1.0, pScale);
      if (pScale >= 1) {
        this.scaleBridgeActive = false;
      }
    }

    let desiredColorGain = colorGainTarget;
    if (inModelRevealWindow) {
      this.luminanceBridgeActive = false;
      const revealEase = this.easeOutCubic(modelRevealBlend);
      desiredColorGain = this.mix(this.modelRevealStartGain, 1.0, revealEase);
    } else if (this.animationMode === "none") {
      this.luminanceBridgeActive = false;
      desiredColorGain = 1.0;
    } else if (this.luminanceBridgeActive) {
      this.luminanceBridgeElapsed += dt;
      const p = this.easeOutCubic(
        this.smoothstep(0, this.luminanceBridgeDurationSeconds, this.luminanceBridgeElapsed)
      );
      desiredColorGain = this.mix(this.luminanceBridgeFrom, 1.0, p);
      if (p >= 1) {
        this.luminanceBridgeActive = false;
      }
    }

    const colorFollow = 1 - Math.exp(-dt / 0.18);
    const scaleFollow = 1 - Math.exp(-dt / 0.1);
    const colorFollowTarget = this.colorGainApplied + (desiredColorGain - this.colorGainApplied) * colorFollow;
    const colorStep = colorFollowTarget - this.colorGainApplied;
    const maxRiseStep = this.colorRisePerSecond * dt;
    const maxFallStep = this.colorFallPerSecond * dt;
    if (colorStep > maxRiseStep) {
      this.colorGainApplied += maxRiseStep;
    } else if (colorStep < -maxFallStep) {
      this.colorGainApplied -= maxFallStep;
    } else {
      this.colorGainApplied = colorFollowTarget;
    }
    this.scaleApplied += (desiredScale - this.scaleApplied) * scaleFollow;

    if (splatMesh && typeof splatMesh.setSplatScale === "function") {
      splatMesh.setSplatScale(this.scaleApplied);
    }

    this.customUniforms.time.value = elapsedSeconds;
    this.customUniforms.mode.value = this.animationModeToInt(this.animationMode);
    this.customUniforms.morph.value = morph;
    this.customUniforms.colorGain.value = this.colorGainApplied;
    this.customUniforms.strength.value = this.animationMode === "none" ? 0 : 0.35 + 0.65 * morph;
    this.customUniforms.radius.value = Math.max(this.sceneRadius, 0.25);
  }

  private easeInOutCubic(t: number) {
    const x = Math.max(0, Math.min(1, t));
    if (x < 0.5) return 4 * x * x * x;
    return 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  private smoothstep(edge0: number, edge1: number, x: number) {
    if (edge0 === edge1) return x < edge0 ? 0 : 1;
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  private mix(a: number, b: number, t: number) {
    const x = Math.max(0, Math.min(1, t));
    return a * (1 - x) + b * x;
  }

  private easeOutCubic(t: number) {
    const x = Math.max(0, Math.min(1, t));
    return 1 - Math.pow(1 - x, 3);
  }

  private frameCameraFromSplatMesh(splatMesh: any) {
    const center = splatMesh?.calculatedSceneCenter;
    const radius = splatMesh?.maxSplatDistanceFromSceneCenter;

    if (center && Number.isFinite(center.x) && Number.isFinite(center.y) && Number.isFinite(center.z)) {
      this.sceneCenter.set(center.x, center.y, center.z);
    } else {
      this.sceneCenter.set(0, 0, 0);
    }

    this.sceneRadius = Number.isFinite(radius) && radius > 0 ? radius : 1;

    const fov = (this.camera.fov * Math.PI) / 180;
    const distance = this.sceneRadius / Math.tan(fov / 2);
    const safeDistance = Math.max(distance * 1.35, this.sceneRadius * 1.8);

    this.camera.position.set(
      this.sceneCenter.x + safeDistance * 0.14,
      this.sceneCenter.y + safeDistance * 0.08,
      this.sceneCenter.z + safeDistance
    );
    this.camera.near = Math.max(0.001, safeDistance / 5000);
    this.camera.far = Math.max(1000, safeDistance * 3000);
    this.camera.updateProjectionMatrix();

    this.controls.target.copy(this.sceneCenter);
    this.controls.minDistance = Math.max(this.sceneRadius * 0.001, 0.0001);
    this.controls.maxDistance = Number.POSITIVE_INFINITY;
    this.controls.update();
  }

  private animationModeToInt(mode: AnimMode) {
    if (mode === "zwave") return 1;
    if (mode === "swirl") return 2;
    if (mode === "noise") return 3;
    if (mode === "breath") return 4;
    if (mode === "explode") return 5;
    return 0;
  }

  private resetFloatingBubbles(scheduleNext: boolean) {
    this.activeTextBubble = null;
    while (this.floatingBubbles.length > 0) {
      const bubble = this.floatingBubbles.pop();
      bubble?.element.remove();
    }

    this.nextBubbleSpawnMs =
      scheduleNext && this.bubbleLayer
        ? performance.now() + 320
        : Number.POSITIVE_INFINITY;
  }

  private scheduleNextBubble(nowMs: number) {
    const perfGapFactor = this.performanceLevel === "low" ? 1.28 : 1;
    const mobileGapFactor = this.isMobileLike ? 1.2 : 1;
    const minGap = this.bubbleSpawnMinGapMs * mobileGapFactor * perfGapFactor;
    const maxGap = this.bubbleSpawnMaxGapMs * (this.isMobileLike ? 1.3 : 1) * perfGapFactor;
    const gap =
      minGap +
      Math.random() * Math.max(maxGap - minGap, 1);
    this.nextBubbleSpawnMs = nowMs + gap;
  }

  private dissipateBubble(bubble: FloatingBubbleEntry, nowMs = performance.now()) {
    this.spawnDustBurst(bubble.screenX, bubble.screenY, bubble.colorRgb);
    bubble.element.classList.remove("is-open");
    bubble.element.style.opacity = "0";
    bubble.element.style.pointerEvents = "none";
    bubble.spawnMs = nowMs - bubble.lifeMs - 1;
    if (this.activeTextBubble === bubble) {
      this.activeTextBubble = null;
    }
  }

  private dismissActiveTextBubble() {
    const active = this.activeTextBubble;
    if (!active) {
      return;
    }

    this.dissipateBubble(active);
    this.activeTextBubble = null;
    if (this.bubbleLayer && this.bubblesEnabledForModel) {
      this.scheduleNextBubble(performance.now());
    }
  }

  private activateTextBubble(bubble: FloatingBubbleEntry) {
    const nowMs = performance.now();
    if (this.activeTextBubble && this.activeTextBubble !== bubble) {
      this.dissipateBubble(this.activeTextBubble, nowMs);
      this.activeTextBubble = null;
    }

    this.activeTextBubble = bubble;
    bubble.revealUntilMs = Number.POSITIVE_INFINITY;
    bubble.element.classList.add("is-open");

    for (const other of this.floatingBubbles) {
      if (other !== bubble) {
        this.dissipateBubble(other, nowMs);
      }
    }
    this.nextBubbleSpawnMs = Number.POSITIVE_INFINITY;
  }

  private spawnFloatingBubble(nowMs: number) {
    if (!this.bubbleLayer) {
      return;
    }

    const activeTextCount = this.floatingBubbles.reduce(
      (count, bubble) => count + (bubble.kind === "text" ? 1 : 0),
      0
    );
    const canSpawnText =
      this.bubbleMessages.length > 0 &&
      activeTextCount < this.maxTextBubbles &&
      Math.random() < this.textBubbleSpawnProbability;
    const kind: FloatingBubbleEntry["kind"] = canSpawnText ? "text" : "plain";
    const text =
      kind === "text"
        ? this.bubbleMessages[Math.floor(Math.random() * this.bubbleMessages.length)] || ""
        : "";

    const seed = Math.random();
    const bubbleElement = document.createElement("button");
    bubbleElement.type = "button";
    bubbleElement.className = `story-bubble story-bubble--${kind}`;
    bubbleElement.setAttribute(
      "aria-label",
      kind === "text" ? `Show note: ${text}` : "Trigger particle burst"
    );

    const bubbleCore = document.createElement("span");
    bubbleCore.className = "story-bubble__core";
    bubbleElement.append(bubbleCore);
    if (kind === "text") {
      const bubbleLabel = document.createElement("span");
      bubbleLabel.className = "story-bubble__label";
      bubbleLabel.textContent = text;
      bubbleElement.appendChild(bubbleLabel);
    }

    const colorRgb =
      this.performanceLevel === "low"
        ? this.fallbackBubbleColor(seed)
        : this.resolveBubbleColor(seed);
    bubbleElement.style.setProperty("--bubble-rgb", `${colorRgb[0]} ${colorRgb[1]} ${colorRgb[2]}`);
    bubbleElement.style.setProperty("--bubble-phase", `${(-Math.random() * 6).toFixed(2)}s`);

    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const outwardDir = new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.sin(theta)
    ).normalize();
    const shellRadius = this.sceneRadius * this.bubbleEdgeSpawnRadiusFactor;

    this.bubbleTangentATemp.set(outwardDir.y, -outwardDir.x, 0);
    if (this.bubbleTangentATemp.lengthSq() < 0.00001) {
      this.bubbleTangentATemp.set(0, outwardDir.z, -outwardDir.y);
    }
    this.bubbleTangentATemp.normalize();
    this.bubbleTangentBTemp.crossVectors(outwardDir, this.bubbleTangentATemp).normalize();

    const shellJitter = Math.max(this.sceneRadius * this.bubbleEdgeSpawnJitterFactor, 0.003);
    const position = this.sceneCenter
      .clone()
      .addScaledVector(outwardDir, shellRadius)
      .addScaledVector(this.bubbleTangentATemp, (Math.random() * 2 - 1) * shellJitter)
      .addScaledVector(this.bubbleTangentBTemp, (Math.random() * 2 - 1) * shellJitter);

    this.pushBubbleOutsideModel(position, outwardDir);

    const launchSpeed = Math.max(this.sceneRadius * (0.05 + Math.random() * 0.04), 0.02);
    const tangentSpeed = launchSpeed * (0.14 + Math.random() * 0.2);
    const velocity = outwardDir
      .clone()
      .multiplyScalar(launchSpeed)
      .addScaledVector(this.bubbleTangentATemp, (Math.random() * 2 - 1) * tangentSpeed)
      .addScaledVector(this.bubbleTangentBTemp, (Math.random() * 2 - 1) * tangentSpeed);

    const bubble: FloatingBubbleEntry = {
      element: bubbleElement,
      kind,
      position,
      velocity,
      outwardDir,
      outwardAccel: Math.max(this.sceneRadius * (0.09 + Math.random() * 0.06), 0.03),
      driftRadius: this.sceneRadius * (1.24 + Math.random() * 0.56),
      seed,
      spawnMs: nowMs,
      lastUpdateMs: nowMs,
      lifeMs: this.bubbleLifeMinMs + Math.random() * (this.bubbleLifeMaxMs - this.bubbleLifeMinMs),
      revealUntilMs: 0,
      startScale: kind === "text" ? 0.42 + Math.random() * 0.2 : 2.05 + Math.random() * 1.0,
      endScale: kind === "text" ? 1.82 + Math.random() * 1.18 : 0.55 + Math.random() * 0.45,
      maxAlpha: 0.56,
      colorRgb,
      screenX: this.canvas.clientWidth * 0.5,
      screenY: this.canvas.clientHeight * 0.5,
      overModel: false,
      lastOverlapCheckMs: 0
    };

    bubbleElement.addEventListener("click", () => {
      if (bubble.kind === "text") {
        this.activateTextBubble(bubble);
        return;
      }

      this.dissipateBubble(bubble);
    });

    this.bubbleLayer.appendChild(bubbleElement);
    this.floatingBubbles.push(bubble);

    if (this.floatingBubbles.length > this.getActiveMaxFloatingBubbles()) {
      const oldest = this.floatingBubbles.shift();
      oldest?.element.remove();
    }
  }

  private updateFloatingBubbles() {
    if (!this.bubbleLayer || !this.bubblesEnabledForModel) {
      return;
    }

    const nowMs = performance.now();
    if (
      this.performanceLevel === "low" &&
      nowMs - this.lastBubbleTickMs < this.lowBubbleTickIntervalMs
    ) {
      return;
    }
    this.lastBubbleTickMs = nowMs;

    if (
      this.activeTextBubble === null &&
      this.floatingBubbles.length < this.getActiveMaxFloatingBubbles() &&
      nowMs >= this.nextBubbleSpawnMs
    ) {
      this.spawnFloatingBubble(nowMs);
      this.scheduleNextBubble(nowMs);
    }

    if (this.floatingBubbles.length === 0) {
      return;
    }

    const width = Math.max(this.canvas.clientWidth, 1);
    const height = Math.max(this.canvas.clientHeight, 1);

    for (let i = this.floatingBubbles.length - 1; i >= 0; i -= 1) {
      const bubble = this.floatingBubbles[i];
      const ageMs = nowMs - bubble.spawnMs;
      const lifeRatio = ageMs / bubble.lifeMs;
      if (lifeRatio >= 1 && bubble !== this.activeTextBubble) {
        bubble.element.remove();
        this.floatingBubbles.splice(i, 1);
        continue;
      }

      const dt = Math.min(Math.max((nowMs - bubble.lastUpdateMs) / 1000, 0), 0.05);
      bubble.lastUpdateMs = nowMs;

      // Keep a short initial radial push, then let wind-like Brownian drift dominate.
      const outwardPush = 1 - this.smoothstep(0.3, 0.78, lifeRatio);
      bubble.velocity.addScaledVector(bubble.outwardDir, bubble.outwardAccel * 0.28 * outwardPush * dt);

      const time = nowMs * 0.001;
      const windPhase = time * 0.65 + bubble.seed * 9.7;
      const gust =
        0.45 +
        0.55 *
          (0.5 +
            0.5 *
              Math.sin(
                windPhase * 1.17 +
                  Math.sin(windPhase * 0.43 + bubble.seed * 6.1) +
                  Math.cos(windPhase * 0.31 + bubble.seed * 11.4)
              ));

      // Time-varying wind direction: smooth, irregular, and slightly anisotropic.
      this.bubbleTangentATemp.set(
        Math.sin(windPhase + bubble.seed * 1.9) + 0.36 * Math.sin(windPhase * 1.91 + bubble.seed * 7.6),
        0.22 * Math.sin(windPhase * 1.37 + bubble.seed * 4.8),
        Math.cos(windPhase * 0.83 + bubble.seed * 2.7) + 0.34 * Math.cos(windPhase * 1.73 + bubble.seed * 8.3)
      );
      if (this.bubbleTangentATemp.lengthSq() > 0.000001) {
        this.bubbleTangentATemp.normalize();
      } else {
        this.bubbleTangentATemp.set(1, 0, 0);
      }
      const windAccel = Math.max(this.sceneRadius * (0.07 + 0.09 * gust), 0.02);
      bubble.velocity.addScaledVector(this.bubbleTangentATemp, windAccel * dt);

      const brownianAccel = Math.max(this.sceneRadius * 0.028, 0.006);
      bubble.velocity.x += (Math.random() * 2 - 1) * brownianAccel * dt;
      bubble.velocity.y += (Math.random() * 2 - 1) * brownianAccel * 0.58 * dt;
      bubble.velocity.z += (Math.random() * 2 - 1) * brownianAccel * dt;

      // Vertical flutter gives a "breeze lifting" feeling.
      bubble.velocity.y +=
        Math.sin(time * 2.1 + bubble.seed * 17.2) * Math.max(this.sceneRadius * 0.012, 0.0035) * dt;

      const damping = Math.exp(-dt * 2.05);
      bubble.velocity.multiplyScalar(damping);
      bubble.position.addScaledVector(bubble.velocity, dt);

      this.bubbleOffsetTemp.copy(bubble.position).sub(this.sceneCenter);
      const fromCenter = this.bubbleOffsetTemp.length();
      const innerShell = this.sceneRadius * 0.78;
      if (fromCenter > 0.0001 && fromCenter < innerShell) {
        this.bubbleOffsetTemp.multiplyScalar(1 / fromCenter);
        const pressure = (innerShell - fromCenter) / innerShell;
        bubble.velocity.addScaledVector(this.bubbleOffsetTemp, pressure * this.sceneRadius * 0.5 * dt);
      }
      if (fromCenter > bubble.driftRadius) {
        this.bubbleOffsetTemp.multiplyScalar(1 / Math.max(fromCenter, 0.0001));
        const overflow = fromCenter - bubble.driftRadius;
        bubble.velocity.addScaledVector(this.bubbleOffsetTemp, -overflow * 0.45 * dt);
      }

      this.bubbleWorldPos.copy(bubble.position);
      this.bubbleProjection.copy(this.bubbleWorldPos).project(this.camera);

      const alpha = bubble.maxAlpha * this.smoothstep(0, 0.78, lifeRatio);
      const scale = this.mix(bubble.startScale, bubble.endScale, this.easeOutCubic(lifeRatio));

      const inViewport =
        this.bubbleProjection.z > -1 &&
        this.bubbleProjection.z < 1 &&
        this.bubbleProjection.x > -1.2 &&
        this.bubbleProjection.x < 1.2 &&
        this.bubbleProjection.y > -1.2 &&
        this.bubbleProjection.y < 1.2;

      if (!inViewport || alpha <= 0.02) {
        bubble.element.style.opacity = "0";
        bubble.element.style.pointerEvents = "none";
      } else {
        const px = (this.bubbleProjection.x * 0.5 + 0.5) * width;
        const py = (-this.bubbleProjection.y * 0.5 + 0.5) * height;
        bubble.screenX = px;
        bubble.screenY = py;
        const overlapCheckInterval = this.isMobileLike
          ? this.bubbleOverlapCheckIntervalMobileMs
          : this.bubbleOverlapCheckIntervalDesktopMs;
        const activeOverlapCheckInterval =
          this.performanceLevel === "low" ? overlapCheckInterval * 1.9 : overlapCheckInterval;
        if (nowMs - bubble.lastOverlapCheckMs >= activeOverlapCheckInterval) {
          bubble.overModel = this.isModelPixelCovered(px, py, this.getActiveNoOverlapSampleRadiusPx());
          bubble.lastOverlapCheckMs = nowMs;
        }
        const overModel = bubble.overModel;
        const edgeDistance = Math.min(px, width - px, py, height - py);
        const edgeFade = this.smoothstep(
          this.edgeDisappearMarginPx,
          this.edgeDisappearMarginPx + 36,
          edgeDistance
        );
        const finalAlpha = alpha * edgeFade;

        if (overModel || finalAlpha <= 0.02) {
          bubble.element.style.opacity = "0";
          bubble.element.style.pointerEvents = "none";
          continue;
        }

        bubble.element.style.opacity = finalAlpha.toFixed(3);
        bubble.element.style.pointerEvents = finalAlpha > 0.08 ? "auto" : "none";
        bubble.element.style.transform = `translate3d(${px.toFixed(1)}px, ${py.toFixed(
          1
        )}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
      }

      if (bubble !== this.activeTextBubble && nowMs > bubble.revealUntilMs) {
        bubble.element.classList.remove("is-open");
      }
    }
  }

  private spawnDustBurst(screenX: number, screenY: number, colorRgb: [number, number, number]) {
    if (!this.bubbleLayer) return;

    const burst = document.createElement("div");
    burst.className = "bubble-dust";
    burst.style.left = `${screenX.toFixed(1)}px`;
    burst.style.top = `${screenY.toFixed(1)}px`;
    burst.style.setProperty("--dust-rgb", `${colorRgb[0]} ${colorRgb[1]} ${colorRgb[2]}`);
    burst.style.setProperty("--dust-duration", `${(0.96 + Math.random() * 0.28).toFixed(2)}s`);

    const flash = document.createElement("span");
    flash.className = "bubble-dust__flash";
    burst.appendChild(flash);

    const ring = document.createElement("span");
    ring.className = "bubble-dust__ring";
    burst.appendChild(ring);

    const particleCount = 24 + Math.floor(Math.random() * 12);
    for (let i = 0; i < particleCount; i += 1) {
      const p = document.createElement("span");
      p.className = "bubble-dust__p";
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 2 - 1) * 0.4;
      const distance = 28 + Math.random() * 78;
      const size = 1.8 + Math.random() * 4.6;
      p.style.setProperty("--dx", `${(Math.cos(angle) * distance).toFixed(1)}px`);
      p.style.setProperty("--dy", `${(Math.sin(angle) * distance).toFixed(1)}px`);
      p.style.setProperty("--size", `${size.toFixed(2)}px`);
      p.style.setProperty("--life", `${(0.74 + Math.random() * 0.42).toFixed(2)}s`);
      p.style.animationDelay = `${(Math.random() * 0.12).toFixed(3)}s`;
      burst.appendChild(p);
    }

    this.bubbleLayer.appendChild(burst);
    const remove = () => burst.remove();
    burst.addEventListener("animationend", remove, { once: true });
    window.setTimeout(remove, 1400);
  }

  private pushBubbleOutsideModel(position: any, outwardDir: any) {
    const width = Math.max(this.canvas.clientWidth, 1);
    const height = Math.max(this.canvas.clientHeight, 1);
    const pushStep = Math.max(this.sceneRadius * this.bubbleNoOverlapPushStepFactor, 0.005);

    const maxPushTries = this.isMobileLike
      ? Math.min(this.bubbleNoOverlapPushMaxTries, 6)
      : this.bubbleNoOverlapPushMaxTries;
    const activeMaxPushTries =
      this.performanceLevel === "low" ? Math.min(maxPushTries, 4) : maxPushTries;
    for (let i = 0; i < activeMaxPushTries; i += 1) {
      this.bubbleProjection.copy(position).project(this.camera);
      const p = this.bubbleProjection;
      if (
        !Number.isFinite(p.x) ||
        !Number.isFinite(p.y) ||
        p.z <= -1 ||
        p.z >= 1 ||
        p.x <= -1.1 ||
        p.x >= 1.1 ||
        p.y <= -1.1 ||
        p.y >= 1.1
      ) {
        return;
      }

      const px = (p.x * 0.5 + 0.5) * width;
      const py = (-p.y * 0.5 + 0.5) * height;
      if (!this.isModelPixelCovered(px, py, this.getActiveNoOverlapSampleRadiusPx())) {
        return;
      }

      position.addScaledVector(outwardDir, pushStep);
    }

    // Hard-stop fallback: force one extra outward push after max retries.
    position.addScaledVector(outwardDir, pushStep * 1.5);
  }

  private isModelPixelCovered(screenX: number, screenY: number, sampleRadiusPx = 0) {
    const gl = this.renderer?.getContext?.();
    if (!gl || typeof gl.readPixels !== "function") {
      return false;
    }

    const drawWidth = Number(gl.drawingBufferWidth) || 0;
    const drawHeight = Number(gl.drawingBufferHeight) || 0;
    if (drawWidth < 2 || drawHeight < 2) {
      return false;
    }

    const clientWidth = Math.max(this.canvas.clientWidth, 1);
    const clientHeight = Math.max(this.canvas.clientHeight, 1);
    const baseX = (screenX / clientWidth) * drawWidth;
    const baseY = (screenY / clientHeight) * drawHeight;
    const r = Math.max(1, sampleRadiusPx * (drawWidth / clientWidth));

    const offsets: Array<[number, number]> = this.performanceLevel === "low"
      ? [
          [0, 0],
          [r, 0],
          [-r, 0],
          [0, r],
          [0, -r]
        ]
      : this.isMobileLike
      ? [
          [0, 0],
          [r, 0],
          [-r, 0],
          [0, r],
          [0, -r]
        ]
      : [
          [0, 0],
          [r, 0],
          [-r, 0],
          [0, r],
          [0, -r],
          [r * 0.72, r * 0.72],
          [r * 0.72, -r * 0.72],
          [-r * 0.72, r * 0.72],
          [-r * 0.72, -r * 0.72]
        ];

    for (const [dx, dy] of offsets) {
      const alpha = this.readRenderAlpha(gl, baseX + dx, baseY + dy);
      if (alpha > 14) {
        return true;
      }
    }

    return false;
  }

  private readRenderAlpha(gl: any, screenX: number, screenY: number) {
    const drawWidth = Number(gl.drawingBufferWidth) || 0;
    const drawHeight = Number(gl.drawingBufferHeight) || 0;
    if (drawWidth < 2 || drawHeight < 2) {
      return 0;
    }

    const clampedX = Math.max(0, Math.min(drawWidth - 1, Math.round(screenX)));
    const clampedYTopLeft = Math.max(0, Math.min(drawHeight - 1, Math.round(screenY)));
    const clampedYBottomLeft = drawHeight - 1 - clampedYTopLeft;

    try {
      gl.readPixels(
        clampedX,
        clampedYBottomLeft,
        1,
        1,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        this.bubbleSamplePixel
      );
    } catch {
      return 0;
    }

    return this.bubbleSamplePixel[3];
  }

  private resolveBubbleColor(seed: number): [number, number, number] {
    const fallback = this.fallbackBubbleColor(seed);
    const gl = this.renderer?.getContext?.();
    if (!gl || typeof gl.readPixels !== "function") {
      return fallback;
    }

    const drawWidth = Number(gl.drawingBufferWidth) || 0;
    const drawHeight = Number(gl.drawingBufferHeight) || 0;
    if (drawWidth < 2 || drawHeight < 2) {
      return fallback;
    }

    this.bubbleProjection.copy(this.sceneCenter).project(this.camera);
    if (
      !Number.isFinite(this.bubbleProjection.x) ||
      !Number.isFinite(this.bubbleProjection.y) ||
      this.bubbleProjection.z <= -1 ||
      this.bubbleProjection.z >= 1
    ) {
      return fallback;
    }

    const baseX = (this.bubbleProjection.x * 0.5 + 0.5) * drawWidth;
    const baseY = (-this.bubbleProjection.y * 0.5 + 0.5) * drawHeight;
    const sampleRadius = Math.max(5, Math.min(drawWidth, drawHeight) * 0.009);
    const candidateOffsets: Array<[number, number]> = [
      [0, 0],
      [Math.cos(seed * 6.283) * sampleRadius, Math.sin(seed * 6.283) * sampleRadius],
      [Math.cos((seed + 0.33) * 6.283) * sampleRadius * 1.45, Math.sin((seed + 0.33) * 6.283) * sampleRadius * 1.45],
      [Math.cos((seed + 0.66) * 6.283) * sampleRadius * 0.72, Math.sin((seed + 0.66) * 6.283) * sampleRadius * 0.72]
    ];

    let best: [number, number, number] | null = null;
    let bestScore = -1;
    for (const [offsetX, offsetY] of candidateOffsets) {
      const sampled = this.readFramePixel(gl, baseX + offsetX, baseY + offsetY);
      if (!sampled) continue;
      const minChannel = Math.min(sampled[0], sampled[1], sampled[2]);
      const maxChannel = Math.max(sampled[0], sampled[1], sampled[2]);
      const luma = sampled[0] * 0.2126 + sampled[1] * 0.7152 + sampled[2] * 0.0722;
      const score = luma + (maxChannel - minChannel) * 0.7;
      if (score > bestScore) {
        best = sampled;
        bestScore = score;
      }
    }

    if (!best) {
      return fallback;
    }

    const gain = this.colorGainApplied;
    return [
      Math.min(255, Math.round(best[0] * (0.82 + gain * 0.26))),
      Math.min(255, Math.round(best[1] * (0.82 + gain * 0.26))),
      Math.min(255, Math.round(best[2] * (0.82 + gain * 0.26)))
    ];
  }

  private readFramePixel(
    gl: any,
    screenX: number,
    screenY: number
  ): [number, number, number] | null {
    const drawWidth = Number(gl.drawingBufferWidth) || 0;
    const drawHeight = Number(gl.drawingBufferHeight) || 0;
    if (drawWidth < 2 || drawHeight < 2) {
      return null;
    }

    const clampedX = Math.max(0, Math.min(drawWidth - 1, Math.round(screenX)));
    const clampedYTopLeft = Math.max(0, Math.min(drawHeight - 1, Math.round(screenY)));
    const clampedYBottomLeft = drawHeight - 1 - clampedYTopLeft;

    try {
      gl.readPixels(
        clampedX,
        clampedYBottomLeft,
        1,
        1,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        this.bubbleSamplePixel
      );
    } catch {
      return null;
    }

    const a = this.bubbleSamplePixel[3];
    const r = this.bubbleSamplePixel[0];
    const g = this.bubbleSamplePixel[1];
    const b = this.bubbleSamplePixel[2];

    if (a < 14) return null;
    if (r + g + b < 32) return null;

    return [r, g, b];
  }

  private fallbackBubbleColor(seed: number): [number, number, number] {
    let base: [number, number, number] = [130, 186, 245];
    if (this.animationMode === "zwave") base = [120, 201, 255];
    if (this.animationMode === "swirl") base = [132, 220, 246];
    if (this.animationMode === "noise") base = [172, 188, 255];
    if (this.animationMode === "breath") base = [168, 223, 255];
    if (this.animationMode === "explode") base = [255, 172, 128];

    const jitter = (seed - 0.5) * 36;
    return [
      Math.max(0, Math.min(255, Math.round(base[0] + jitter))),
      Math.max(0, Math.min(255, Math.round(base[1] + jitter * 0.7))),
      Math.max(0, Math.min(255, Math.round(base[2] + jitter * 0.4)))
    ];
  }

  private resize() {
    const width = Math.max(this.canvas.clientWidth, 1);
    const height = Math.max(this.canvas.clientHeight, 1);
    this.renderer.setSize(width, height, false);
    this.applyRendererPixelRatio();
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  private getActiveMaxFloatingBubbles() {
    if (this.performanceLevel === "low") {
      return this.isMobileLike
        ? this.lowMobileMaxFloatingBubbles
        : this.lowDesktopMaxFloatingBubbles;
    }
    return this.isMobileLike ? this.mobileMaxFloatingBubbles : this.maxFloatingBubbles;
  }

  private getActiveNoOverlapSampleRadiusPx() {
    if (this.performanceLevel === "low") {
      return this.isMobileLike
        ? Math.max(7, this.bubbleNoOverlapSampleRadiusPx - 6)
        : Math.max(8, this.bubbleNoOverlapSampleRadiusPx - 4);
    }
    return this.isMobileLike
      ? Math.max(8, this.bubbleNoOverlapSampleRadiusPx - 4)
      : this.bubbleNoOverlapSampleRadiusPx;
  }

  private applyRendererPixelRatio() {
    const cap =
      this.performanceLevel === "low"
        ? this.isMobileLike
          ? this.lowDprCapMobile
          : this.lowDprCapDesktop
        : this.isMobileLike
          ? this.highDprCapMobile
          : this.highDprCapDesktop;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));
  }
}
