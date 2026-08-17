import { render } from "@testing-library/react";
import { useRef } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useHeroParallax } from "./useHeroParallax";

function ParallaxProbe() {
  const heroRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  useHeroParallax(heroRef, layerRef);

  return (
    <div>
      <div ref={heroRef} data-testid="hero" style={{ height: 400 }} />
      <div ref={layerRef} data-testid="layer" />
    </div>
  );
}

function stubMatchMedia(reducedMotion: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches:
        query === "(prefers-reduced-motion: reduce)" ? reducedMotion : false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
}

async function flushFrames() {
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

describe("useHeroParallax", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 0,
    });
  });

  it("does not transform the layer when reduced motion is preferred", async () => {
    stubMatchMedia(true);
    const { getByTestId } = render(<ParallaxProbe />);
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 120,
    });
    window.dispatchEvent(new Event("scroll"));
    await flushFrames();
    expect(getByTestId("layer").style.transform).toBe("");
  });

  it("applies translate and scale on scroll", async () => {
    stubMatchMedia(false);
    const { getByTestId } = render(<ParallaxProbe />);
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 100,
    });
    window.dispatchEvent(new Event("scroll"));
    await flushFrames();
    expect(getByTestId("layer").style.transform).toContain("translate3d");
    expect(getByTestId("layer").style.transform).toContain("scale(");
  });
});
