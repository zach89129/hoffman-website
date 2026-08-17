"use client";

import { useEffect, type RefObject } from "react";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCompactViewport(): boolean {
  return window.matchMedia("(max-width: 768px)").matches;
}

export function useHeroParallax(
  heroRef: RefObject<HTMLElement | null>,
  layerRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const hero = heroRef.current;
    const layer = layerRef.current;
    if (!hero || !layer) return;

    if (prefersReducedMotion()) {
      layer.style.transform = "";
      return;
    }

    let rafId = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const compact = isCompactViewport();
      const translateFactor = compact ? 0.12 : 0.22;
      const scaleExtra = compact ? 0.03 : 0.06;
      const height = hero.offsetHeight || 1;
      const progress = Math.min(Math.max(window.scrollY / height, 0), 1);
      const translateY = window.scrollY * translateFactor;
      const scale = 1 + progress * scaleExtra;
      layer.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [heroRef, layerRef]);
}
