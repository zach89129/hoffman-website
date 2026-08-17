import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, afterEach } from "vitest";
import { revealClassName, useInViewOnce } from "./useInViewOnce";

function Probe() {
  const [ref, isVisible] = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} data-testid="target" className={revealClassName(isVisible)}>
      {isVisible ? "visible" : "hidden"}
    </div>
  );
}

describe("revealClassName", () => {
  it("toggles the visible class", () => {
    expect(revealClassName(false)).toBe("reveal");
    expect(revealClassName(true)).toBe("reveal is-visible");
  });
});

describe("useInViewOnce", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("becomes visible the first time the node intersects", () => {
    const observe = vi.fn();
    const disconnect = vi.fn();

    vi.stubGlobal(
      "IntersectionObserver",
      class {
        callback: IntersectionObserverCallback;
        constructor(callback: IntersectionObserverCallback) {
          this.callback = callback;
        }
        observe = (element: Element) => {
          observe(element);
          this.callback(
            [
              {
                isIntersecting: true,
                target: element,
              } as IntersectionObserverEntry,
            ],
            this as unknown as IntersectionObserver,
          );
        };
        disconnect = disconnect;
        unobserve = vi.fn();
        takeRecords = vi.fn();
        root = null;
        rootMargin = "";
        thresholds = [];
      },
    );

    render(<Probe />);
    expect(screen.getByTestId("target")).toHaveClass("is-visible");
    expect(screen.getByText("visible")).toBeInTheDocument();
    expect(observe).toHaveBeenCalledTimes(1);
    expect(disconnect).toHaveBeenCalled();
  });

  it("stays hidden until the node intersects", () => {
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe = vi.fn();
        disconnect = vi.fn();
        unobserve = vi.fn();
        takeRecords = vi.fn();
        root = null;
        rootMargin = "";
        thresholds = [];
      },
    );

    render(<Probe />);
    expect(screen.getByTestId("target")).not.toHaveClass("is-visible");
    expect(screen.getByText("hidden")).toBeInTheDocument();
  });
});
