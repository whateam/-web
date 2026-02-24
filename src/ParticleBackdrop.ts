type BackdropParticle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  speed: number;
  size: number;
  twinkle: number;
  seed: number;
};
type PerfLevel = "high" | "low";

export class ParticleBackdrop {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly particles: BackdropParticle[] = [];
  private readonly isMobileLike: boolean;
  private width = 1;
  private height = 1;
  private dpr = 1;
  private timeSeconds = 0;
  private lastFrameMs = performance.now();
  private performanceLevel: PerfLevel = "high";
  private backgroundLinear: CanvasGradient | null = null;
  private backgroundRadial: CanvasGradient | null = null;
  private readonly onResize = () => this.resize();

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Particle backdrop canvas 2D context unavailable.");
    }
    this.ctx = ctx;
    this.isMobileLike =
      window.matchMedia("(max-width: 980px), (pointer: coarse)").matches ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    this.resize();
    window.addEventListener("resize", this.onResize);
  }

  dispose() {
    window.removeEventListener("resize", this.onResize);
  }

  setPerformanceLevel(level: PerfLevel) {
    if (this.performanceLevel === level) return;
    this.performanceLevel = level;
    this.resize();
  }

  update() {
    this.ensureSize();

    const nowMs = performance.now();
    const minFrameDeltaMs =
      this.performanceLevel === "low" ? 50 : this.isMobileLike ? 33 : 0;
    if (minFrameDeltaMs > 0 && nowMs - this.lastFrameMs < minFrameDeltaMs) {
      return;
    }
    const dt = Math.min(Math.max((nowMs - this.lastFrameMs) / 1000, 0), 0.05);
    this.lastFrameMs = nowMs;
    this.timeSeconds += dt;

    this.stepParticles(dt);
    this.render();
  }

  private ensureSize() {
    const nextWidth = Math.max(this.canvas.clientWidth, 1);
    const nextHeight = Math.max(this.canvas.clientHeight, 1);
    const nextDpr = Math.min(window.devicePixelRatio || 1, this.getDprCap());

    if (nextWidth !== this.width || nextHeight !== this.height || Math.abs(nextDpr - this.dpr) > 0.01) {
      this.resize();
    }
  }

  private resize() {
    this.width = Math.max(this.canvas.clientWidth, 1);
    this.height = Math.max(this.canvas.clientHeight, 1);
    this.dpr = Math.min(window.devicePixelRatio || 1, this.getDprCap());

    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    this.rebuildBackgroundGradients();
    this.ensureParticleCount();
  }

  private ensureParticleCount() {
    const targetCount =
      this.performanceLevel === "low"
        ? Math.min(90, Math.max(34, Math.round((this.width * this.height) / 28000)))
        : this.isMobileLike
          ? Math.min(130, Math.max(56, Math.round((this.width * this.height) / 20000)))
          : Math.min(260, Math.max(100, Math.round((this.width * this.height) / 12000)));
    while (this.particles.length < targetCount) {
      this.particles.push(this.createParticle(true));
    }
    while (this.particles.length > targetCount) {
      this.particles.pop();
    }
  }

  private createParticle(initial: boolean): BackdropParticle {
    const farDepth = initial ? Math.random() * 1.2 : 0.92 + Math.random() * 0.34;
    return {
      x: (Math.random() * 2 - 1) * 1.15,
      y: Math.random() * 1.25 - 0.22,
      z: farDepth,
      vx: (Math.random() * 2 - 1) * 0.02,
      vy: (Math.random() * 2 - 1) * 0.016,
      speed: 0.16 + Math.random() * 0.24,
      size: 0.6 + Math.random() * 1.4,
      twinkle: 0.6 + Math.random() * 1.9,
      seed: Math.random() * 9999
    };
  }

  private resetParticle(particle: BackdropParticle) {
    const next = this.createParticle(false);
    particle.x = next.x;
    particle.y = next.y;
    particle.z = next.z;
    particle.vx = next.vx;
    particle.vy = next.vy;
    particle.speed = next.speed;
    particle.size = next.size;
    particle.twinkle = next.twinkle;
  }

  private stepParticles(dt: number) {
    for (const particle of this.particles) {
      const windPhase = this.timeSeconds * 0.62 + particle.seed * 0.013;
      const gustMix =
        0.5 +
        0.5 *
          Math.sin(
            windPhase * 1.18 +
              Math.sin(windPhase * 0.46 + particle.seed * 0.004) +
              Math.cos(windPhase * 0.3 + particle.seed * 0.002)
          );

      const windX = Math.sin(windPhase) * (0.048 + gustMix * 0.038);
      const windY = Math.cos(windPhase * 1.3 + particle.seed * 0.001) * 0.018;
      particle.vx += windX * dt;
      particle.vy += windY * dt;

      const brownian = 0.021;
      particle.vx += (Math.random() * 2 - 1) * brownian * dt;
      particle.vy += (Math.random() * 2 - 1) * brownian * 0.65 * dt;
      particle.vy += Math.sin(this.timeSeconds * 1.9 + particle.seed * 0.008) * 0.006 * dt;

      const damping = Math.exp(-dt * 2.05);
      particle.vx *= damping;
      particle.vy *= damping;

      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.z -= particle.speed * dt;

      if (particle.z <= 0.02 || Math.abs(particle.x) > 1.5 || particle.y < -0.45 || particle.y > 1.45) {
        this.resetParticle(particle);
      }
    }
  }

  private render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.renderBackgroundGlow();
    this.renderPerspectiveGrid();
    this.renderParticles();
  }

  private renderBackgroundGlow() {
    if (!this.backgroundLinear || !this.backgroundRadial) {
      this.rebuildBackgroundGradients();
    }
    this.ctx.fillStyle = this.backgroundLinear as CanvasGradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = this.backgroundRadial as CanvasGradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  private renderPerspectiveGrid() {
    const vpX = this.width * 0.5;
    const vpY = this.height * 0.34;
    const floorBottom = this.height + 4;
    const spokeCount =
      this.performanceLevel === "low" ? 6 : this.isMobileLike ? 8 : 12;
    const laneCount =
      this.performanceLevel === "low" ? 8 : this.isMobileLike ? 12 : 22;

    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "rgba(132, 194, 255, 0.12)";
    for (let i = -spokeCount; i <= spokeCount; i += 1) {
      const ratio = i / spokeCount;
      const xTop = vpX + ratio * this.width * 0.09;
      const xBottom = vpX + ratio * this.width * 1.03;
      this.ctx.beginPath();
      this.ctx.moveTo(xTop, vpY + 2);
      this.ctx.lineTo(xBottom, floorBottom);
      this.ctx.stroke();
    }

    this.ctx.strokeStyle = "rgba(164, 216, 255, 0.1)";
    const travel = (this.timeSeconds * 0.32) % 1;
    for (let i = 0; i < laneCount; i += 1) {
      const t = (i + travel) / laneCount;
      const curved = Math.pow(Math.min(t, 1), 1.78);
      const y = vpY + curved * (floorBottom - vpY);
      const span = this.width * (0.05 + curved * 0.98);
      this.ctx.beginPath();
      this.ctx.moveTo(vpX - span * 0.5, y);
      this.ctx.lineTo(vpX + span * 0.5, y);
      this.ctx.stroke();
    }
  }

  private renderParticles() {
    const vpX = this.width * 0.5;
    const vpY = this.height * 0.32;

    for (const particle of this.particles) {
      const depth = 1 - Math.min(Math.max(particle.z, 0), 1.25) / 1.25;
      const perspective = 0.18 + depth * 1.6;
      const screenX = vpX + particle.x * this.width * 0.46 * perspective;
      const screenY = vpY + particle.y * this.height * 0.58 * perspective;

      if (screenX < -20 || screenX > this.width + 20 || screenY < -20 || screenY > this.height + 20) {
        continue;
      }

      const twinkle = 0.68 + 0.32 * Math.sin(this.timeSeconds * particle.twinkle + particle.seed * 0.003);
      const alpha = Math.min(0.9, Math.max(0.06, depth * 0.86 * twinkle));
      const radius = particle.size * (0.55 + perspective * 0.95);
      const red = Math.round(122 + 70 * (0.5 + 0.5 * Math.sin(this.timeSeconds * 0.28 + particle.seed * 0.002)));
      const green = Math.round(185 + 34 * (0.5 + 0.5 * Math.cos(this.timeSeconds * 0.22 + particle.seed * 0.0015)));
      const blue = 255;

      this.ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(3)})`;
      this.ctx.beginPath();
      this.ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${(alpha * 0.34).toFixed(3)})`;
      this.ctx.lineWidth = Math.max(0.6, radius * 0.35);
      this.ctx.beginPath();
      this.ctx.moveTo(screenX, screenY);
      this.ctx.lineTo(screenX - particle.vx * 780, screenY - particle.vy * 780);
      this.ctx.stroke();
    }
  }

  private getDprCap() {
    if (this.performanceLevel === "low") {
      return this.isMobileLike ? 1 : 1.15;
    }
    return this.isMobileLike ? 1.25 : 2;
  }

  private rebuildBackgroundGradients() {
    const linear = this.ctx.createLinearGradient(0, 0, 0, this.height);
    linear.addColorStop(0, "rgba(7, 16, 32, 0.68)");
    linear.addColorStop(0.34, "rgba(6, 13, 28, 0.52)");
    linear.addColorStop(1, "rgba(3, 8, 18, 0.84)");
    this.backgroundLinear = linear;

    const radial = this.ctx.createRadialGradient(
      this.width * 0.52,
      this.height * 0.2,
      this.height * 0.04,
      this.width * 0.5,
      this.height * 0.42,
      this.height * 0.85
    );
    radial.addColorStop(0, "rgba(58, 126, 178, 0.22)");
    radial.addColorStop(0.38, "rgba(34, 76, 132, 0.14)");
    radial.addColorStop(1, "rgba(0, 0, 0, 0)");
    this.backgroundRadial = radial;
  }

}
