import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomeShell from "./HomeShell";

describe("HomeShell", () => {
  it("renders hero heading and contact phone", () => {
    render(<HomeShell />);
    expect(
      screen.getByRole("heading", { level: 1, name: /Hoffman Medical/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/\(702\)\s*243-8100/)).toBeInTheDocument();
  });
});
