import "./style.css";
import { SplatViewer } from "./SplatViewer";
import { ParticleBackdrop } from "./ParticleBackdrop";

type ScrollAnimStop = {
  mode: string;
  element: HTMLElement;
  title: string;
};
type PerfLevel = "high" | "low";

const canvas = document.getElementById("canvas");
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("鏈壘鍒扮敾甯冨厓绱?#canvas");
}

const modelUrlInput = document.getElementById("modelUrl");
const reloadButton = document.getElementById("reload");
const displayToggle = document.getElementById("displayToggle");
const showcaseToggle = document.getElementById("showcaseToggle");
const statusText = document.getElementById("status");
const narrativeScroll = document.getElementById("narrativeScroll");
const appRoot = document.getElementById("app");
const splitter = document.getElementById("splitter");
const stageWrap = document.querySelector(".stage-wrap");
const backdropCanvas = document.getElementById("backdropCanvas");
const bubbleLayer = document.getElementById("bubbleLayer");
const mobileQr = document.getElementById("mobileQr");
const mobileLink = document.getElementById("mobileLink");
const mobileHint = document.getElementById("mobileHint");

const stopElements = Array.from(document.querySelectorAll<HTMLElement>(".narrative-block[data-mode]"));
const animStops: ScrollAnimStop[] = stopElements.map((element, index) => {
  const mode = (element.dataset.mode || "none").trim();
  const heading = element.querySelector("h2");
  const title = heading?.textContent?.trim() || `娈佃惤 ${index + 1}`;
  return { mode, element, title };
});

if (animStops.length === 0) {
  throw new Error("鏈壘鍒?.narrative-block[data-mode] 鍔ㄧ敾閿氱偣");
}

const viewer = new SplatViewer(canvas);
const backdrop =
  backdropCanvas instanceof HTMLCanvasElement ? new ParticleBackdrop(backdropCanvas) : null;
const defaultModelUrl = "/models/tower/tower_mobile.ksplat";
const bubbleTexts = ["铺沟石窟"];
if (modelUrlInput instanceof HTMLInputElement && !modelUrlInput.value.trim()) {
  modelUrlInput.value = defaultModelUrl;
}
viewer.setFloatingBubbles(bubbleLayer instanceof HTMLElement ? bubbleLayer : null, bubbleTexts);

const mobileQuery = window.matchMedia("(max-width: 980px)");
const mobileCycleModes = ["zwave", "swirl", "breath", "explode"] as const;
let isMobileLayout = mobileQuery.matches;
let performanceLevel: PerfLevel = "high";
let isModelLoading = false;
let activeAnimIndex = -1;
let isShowcaseMode = false;
let mobileCycleModeIndex = 0;
let isNarrativeScrolling = false;
let narrativePerfRestoreLevel: PerfLevel | null = null;
let narrativeScrollRaf = 0;
let narrativeScrollIdleTimer: number | null = null;
const narrativeScrollIdleMs = 140;
let splitResizeRaf = 0;
let isSplitDragging = false;
let splitPointerId: number | null = null;
let desktopSidebarWidthPx: number | null = null;
const splitterWidthPx = 10;
const minPaneWidthPx = 340;

const applyPerformanceLevel = (nextLevel: PerfLevel) => {
  if (performanceLevel === nextLevel) return;
  performanceLevel = nextLevel;
  viewer.setPerformanceLevel(nextLevel);
  backdrop?.setPerformanceLevel(nextLevel);
  document.documentElement.classList.toggle("perf-low", nextLevel === "low");
};

const setStatus = (text: string) => {
  if (statusText) {
    statusText.textContent = text;
  }
};

const syncDisplayToggleUi = () => {
  if (displayToggle instanceof HTMLButtonElement) {
    displayToggle.classList.remove("is-active");
    displayToggle.setAttribute("aria-pressed", "false");
    displayToggle.textContent = "动画";
  }

  if (showcaseToggle instanceof HTMLButtonElement) {
    showcaseToggle.classList.toggle("is-active", isShowcaseMode);
    showcaseToggle.setAttribute("aria-pressed", isShowcaseMode ? "true" : "false");
    showcaseToggle.textContent = isShowcaseMode ? "返回" : "展示";
  }
};

const setupMobileQr = () => {
  if (!(mobileQr instanceof HTMLImageElement) || !(mobileLink instanceof HTMLAnchorElement)) {
    return;
  }

  const url = new URL(window.location.href);
  url.searchParams.delete("qr");
  const mobileUrl = url.toString();
  const qrSrc =
    "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
    encodeURIComponent(mobileUrl);

  mobileQr.src = qrSrc;
  mobileLink.href = mobileUrl;
  mobileLink.textContent = mobileUrl;

  if (mobileHint) {
    const isLocalhost =
      window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    mobileHint.textContent = isLocalhost
      ? "若手机无法打开，请把 localhost 替换为电脑局域网 IP。"
      : "扫码可在手机端打开同一页面。";
  }
};

const syncNarrativeUi = () => {
  animStops.forEach((stop, index) => {
    stop.element.classList.toggle("active", index === activeAnimIndex);
  });
};

const resolveAnimIndexFromScroll = () => {
  if (!(narrativeScroll instanceof HTMLElement) || animStops.length === 0) {
    return 0;
  }

  const maxScroll = Math.max(narrativeScroll.scrollHeight - narrativeScroll.clientHeight, 0);
  if (maxScroll <= 0) {
    return 0;
  }

  if (narrativeScroll.scrollTop <= 1) {
    return 0;
  }

  if (narrativeScroll.scrollTop >= maxScroll - 1) {
    return animStops.length - 1;
  }

  const markerY = narrativeScroll.scrollTop + narrativeScroll.clientHeight * 0.18;
  let index = 0;
  for (let i = 1; i < animStops.length; i += 1) {
    const prevTop = animStops[i - 1].element.offsetTop;
    const currTop = animStops[i].element.offsetTop;
    const switchY = prevTop + (currTop - prevTop) * 0.5;
    if (markerY >= switchY) {
      index = i;
    } else {
      break;
    }
  }
  return index;
};

const startNarrativeScrollBoost = () => {
  if (isNarrativeScrolling) {
    return;
  }
  isNarrativeScrolling = true;
  lowFpsWindows = 0;
  highFpsWindows = 0;
  narrativePerfRestoreLevel = performanceLevel;
  if (performanceLevel !== "low") {
    applyPerformanceLevel("low");
  }
};

const stopNarrativeScrollBoost = () => {
  if (!isNarrativeScrolling) {
    return;
  }
  isNarrativeScrolling = false;
  lowFpsWindows = 0;
  highFpsWindows = 0;
  if (narrativePerfRestoreLevel && performanceLevel !== narrativePerfRestoreLevel) {
    applyPerformanceLevel(narrativePerfRestoreLevel);
  }
  narrativePerfRestoreLevel = null;
};

const queueNarrativeSync = () => {
  if (narrativeScrollRaf !== 0) {
    return;
  }
  narrativeScrollRaf = window.requestAnimationFrame(() => {
    narrativeScrollRaf = 0;
    applyAnimIndex(resolveAnimIndexFromScroll());
  });
};

const queueViewportResizeSync = () => {
  if (splitResizeRaf !== 0) {
    return;
  }
  splitResizeRaf = window.requestAnimationFrame(() => {
    splitResizeRaf = 0;
    window.dispatchEvent(new Event("resize"));
  });
};

const placeStageForCurrentLayout = () => {
  if (!(stageWrap instanceof HTMLElement) || !(appRoot instanceof HTMLElement)) return;

  if (stageWrap.parentElement !== appRoot) {
    appRoot.appendChild(stageWrap);
  }

  window.dispatchEvent(new Event("resize"));
};

const applyDesktopSidebarWidth = (sidebarWidthPx: number) => {
  if (!(appRoot instanceof HTMLElement)) return;
  const totalWidth = appRoot.clientWidth;
  if (totalWidth <= 0) return;

  const minSidebar = minPaneWidthPx;
  const maxSidebar = Math.max(minSidebar, totalWidth - minPaneWidthPx - splitterWidthPx);
  const clampedWidth = Math.max(minSidebar, Math.min(maxSidebar, sidebarWidthPx));

  desktopSidebarWidthPx = clampedWidth;
  appRoot.style.setProperty("--sidebar-width", `${clampedWidth}px`);
};

const endSplitDrag = () => {
  if (!isSplitDragging) return;
  isSplitDragging = false;
  if (splitter instanceof HTMLElement && splitPointerId !== null) {
    try {
      splitter.releasePointerCapture(splitPointerId);
    } catch {
      // Pointer may already be released.
    }
  }
  splitPointerId = null;
  appRoot?.classList.remove("is-resizing");
  queueViewportResizeSync();
};

const updateSplitDrag = (clientX: number) => {
  if (!isSplitDragging || !(appRoot instanceof HTMLElement) || isMobileLayout) return;
  const rect = appRoot.getBoundingClientRect();
  const nextSidebarWidth = clientX - rect.left - splitterWidthPx * 0.5;
  applyDesktopSidebarWidth(nextSidebarWidth);
  queueViewportResizeSync();
};

const updateLayoutMode = () => {
  isMobileLayout = mobileQuery.matches;
  if (isMobileLayout) {
    endSplitDrag();
    if (isShowcaseMode) {
      isShowcaseMode = false;
    }
    if (narrativeScrollIdleTimer !== null) {
      window.clearTimeout(narrativeScrollIdleTimer);
      narrativeScrollIdleTimer = null;
    }
    if (narrativeScrollRaf !== 0) {
      window.cancelAnimationFrame(narrativeScrollRaf);
      narrativeScrollRaf = 0;
    }
    stopNarrativeScrollBoost();
    if (activeAnimIndex >= 0) {
      const currentMode = animStops[activeAnimIndex]?.mode || "";
      const currentMobileModeIndex = mobileCycleModes.indexOf(
        currentMode as (typeof mobileCycleModes)[number]
      );
      if (currentMobileModeIndex >= 0) {
        mobileCycleModeIndex = currentMobileModeIndex;
      }
    }
  } else if (desktopSidebarWidthPx !== null) {
    applyDesktopSidebarWidth(desktopSidebarWidthPx);
  }
  if (isMobileLayout && performanceLevel !== "low") {
    applyPerformanceLevel("low");
  }
  syncDisplayToggleUi();
  placeStageForCurrentLayout();
  if (isMobileLayout) {
    applyMobileCycleMode(mobileCycleModeIndex);
  } else if (isShowcaseMode) {
    viewer.setAnimation("none");
    setStatus("展示模式 | 原色静态");
  } else {
    const targetIndex = resolveAnimIndexFromScroll();
    applyAnimIndex(targetIndex);
  }
};

const applyAnimIndex = (nextIndex: number) => {
  const normalized = ((nextIndex % animStops.length) + animStops.length) % animStops.length;
  if (normalized === activeAnimIndex) {
    return;
  }

  activeAnimIndex = normalized;
  const stop = animStops[activeAnimIndex];
  viewer.setAnimation(stop.mode);
  syncNarrativeUi();
  setStatus(`宸插垏鎹?| ${stop.title} | ${stop.mode}`);
};

const resolveStopIndexByMode = (mode: string) => {
  const idx = animStops.findIndex((stop) => stop.mode === mode);
  return idx >= 0 ? idx : 0;
};

const applyMobileCycleMode = (nextModeIndex: number) => {
  const normalized =
    ((nextModeIndex % mobileCycleModes.length) + mobileCycleModes.length) % mobileCycleModes.length;
  mobileCycleModeIndex = normalized;
  const mode = mobileCycleModes[mobileCycleModeIndex];
  applyAnimIndex(resolveStopIndexByMode(mode));
};

const setShowcaseMode = (enabled: boolean) => {
  if (isShowcaseMode === enabled) {
    return;
  }
  isShowcaseMode = enabled;
  syncDisplayToggleUi();

  if (isShowcaseMode) {
    if (narrativeScrollIdleTimer !== null) {
      window.clearTimeout(narrativeScrollIdleTimer);
      narrativeScrollIdleTimer = null;
    }
    if (narrativeScrollRaf !== 0) {
      window.cancelAnimationFrame(narrativeScrollRaf);
      narrativeScrollRaf = 0;
    }
    stopNarrativeScrollBoost();
    viewer.setAnimation("none");
    setStatus("展示模式 | 原色静态");
    return;
  }

  if (isMobileLayout) {
    applyMobileCycleMode(mobileCycleModeIndex);
  } else {
    applyAnimIndex(resolveAnimIndexFromScroll());
  }
};

const getModelUrl = () => {
  if (!(modelUrlInput instanceof HTMLInputElement)) {
    return defaultModelUrl;
  }
  const value = modelUrlInput.value.trim();
  return value || defaultModelUrl;
};

const loadCurrentModel = async () => {
  const modelUrl = getModelUrl();
  isModelLoading = true;
  setStatus(`鍔犺浇涓細${modelUrl}`);

  try {
    await viewer.load(modelUrl);
    if (isMobileLayout) {
      applyMobileCycleMode(mobileCycleModeIndex);
    } else if (isShowcaseMode) {
      viewer.setAnimation("none");
      setStatus("展示模式 | 原色静态");
    } else {
      applyAnimIndex(resolveAnimIndexFromScroll());
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`加载失败：${message}`);
    console.error(error);
  } finally {
    isModelLoading = false;
  }
};

if (narrativeScroll instanceof HTMLElement) {
  narrativeScroll.addEventListener("scroll", () => {
    if (isShowcaseMode || isMobileLayout) {
      return;
    }
    startNarrativeScrollBoost();
    queueNarrativeSync();
    if (narrativeScrollIdleTimer !== null) {
      window.clearTimeout(narrativeScrollIdleTimer);
    }
    narrativeScrollIdleTimer = window.setTimeout(() => {
      narrativeScrollIdleTimer = null;
      queueNarrativeSync();
      stopNarrativeScrollBoost();
    }, narrativeScrollIdleMs);
  });
}

if (displayToggle instanceof HTMLButtonElement) {
  displayToggle.addEventListener("click", () => {
    if (isShowcaseMode) {
      setShowcaseMode(false);
    }
    if (isMobileLayout) {
      applyMobileCycleMode(mobileCycleModeIndex + 1);
      return;
    }
    const nextIndex = activeAnimIndex >= 0 ? activeAnimIndex + 1 : resolveAnimIndexFromScroll();
    applyAnimIndex(nextIndex);
  });
}

if (showcaseToggle instanceof HTMLButtonElement) {
  showcaseToggle.addEventListener("click", () => {
    setShowcaseMode(!isShowcaseMode);
  });
}

if (reloadButton instanceof HTMLButtonElement) {
  reloadButton.addEventListener("click", () => {
    void loadCurrentModel();
  });
}

if (splitter instanceof HTMLElement) {
  splitter.addEventListener("pointerdown", (event) => {
    if (!(appRoot instanceof HTMLElement) || isMobileLayout) return;
    isSplitDragging = true;
    splitPointerId = event.pointerId;
    splitter.setPointerCapture(event.pointerId);
    appRoot.classList.add("is-resizing");
    updateSplitDrag(event.clientX);
    event.preventDefault();
  });

  splitter.addEventListener("pointermove", (event) => {
    updateSplitDrag(event.clientX);
  });

  splitter.addEventListener("pointerup", endSplitDrag);
  splitter.addEventListener("pointercancel", endSplitDrag);
}

window.addEventListener("pointermove", (event) => {
  updateSplitDrag(event.clientX);
});
window.addEventListener("pointerup", endSplitDrag);
window.addEventListener("pointercancel", endSplitDrag);

syncNarrativeUi();
syncDisplayToggleUi();
setupMobileQr();
applyPerformanceLevel(isMobileLayout ? "low" : "high");
updateLayoutMode();
void loadCurrentModel();

if (typeof mobileQuery.addEventListener === "function") {
  mobileQuery.addEventListener("change", updateLayoutMode);
} else if (typeof (mobileQuery as any).addListener === "function") {
  (mobileQuery as any).addListener(updateLayoutMode);
}

const animate = () => {
  requestAnimationFrame(animate);
  const nowMs = performance.now();
  fpsFrameCount += 1;
  const fpsWindowElapsedMs = nowMs - fpsWindowStartMs;
  if (fpsWindowElapsedMs >= 1000) {
    const fps = (fpsFrameCount * 1000) / fpsWindowElapsedMs;
    fpsFrameCount = 0;
    fpsWindowStartMs = nowMs;

    if (isNarrativeScrolling) {
      lowFpsWindows = 0;
      highFpsWindows = 0;
    } else {
      if (fps < 42) {
        lowFpsWindows += 1;
        highFpsWindows = 0;
      } else if (fps > 55) {
        highFpsWindows += 1;
        lowFpsWindows = 0;
      } else {
        lowFpsWindows = 0;
        highFpsWindows = 0;
      }

      if (performanceLevel === "high" && lowFpsWindows >= 2) {
        applyPerformanceLevel("low");
      } else if (performanceLevel === "low" && highFpsWindows >= 3 && !isMobileLayout) {
        applyPerformanceLevel("high");
      }
    }
  }
  if (!isModelLoading) {
    backdrop?.update();
  }
  viewer.update();
};
let fpsFrameCount = 0;
let fpsWindowStartMs = performance.now();
let lowFpsWindows = 0;
let highFpsWindows = 0;
animate();

window.addEventListener("beforeunload", () => {
  if (narrativeScrollIdleTimer !== null) {
    window.clearTimeout(narrativeScrollIdleTimer);
    narrativeScrollIdleTimer = null;
  }
  if (narrativeScrollRaf !== 0) {
    window.cancelAnimationFrame(narrativeScrollRaf);
    narrativeScrollRaf = 0;
  }
  if (splitResizeRaf !== 0) {
    window.cancelAnimationFrame(splitResizeRaf);
    splitResizeRaf = 0;
  }
  backdrop?.dispose();
  void viewer.dispose();
});

