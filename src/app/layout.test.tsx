import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import RootLayout from "./layout";

vi.mock("next/font/google", () => ({
  Bitter: () => ({ className: "font-mock" }),
}));

describe("RootLayout", () => {
  it("includes JSON-LD for clinic and physician", () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <main>child</main>
      </RootLayout>,
    );
    expect(html).toContain('type="application/ld+json"');
    expect(html).toContain("MedicalClinic");
    expect(html).toContain("Physician");
    expect(html).toContain("702");
    expect(html).toContain("8350");
  });
});
