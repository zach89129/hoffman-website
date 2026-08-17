import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Services from "./Services";

describe("Services", () => {
  it("renders the peptides and longevity section with examples", () => {
    render(<Services urlHash="" />);

    const section = document.getElementById("peptides-and-longevity");
    expect(section).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: /Peptides and Longevity/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("BPC 157")).toBeInTheDocument();
    expect(screen.getByText("TB500")).toBeInTheDocument();
    expect(screen.getByText("MOTS-c")).toBeInTheDocument();
    expect(
      screen.getByText(/Please contact for additional details/i),
    ).toBeInTheDocument();
  });
});
