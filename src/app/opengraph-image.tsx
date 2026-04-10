import { ImageResponse } from "next/og";

export const alt = "Hoffman Medical — Las Vegas concierge family medicine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)",
          color: "white",
          fontSize: 64,
          fontWeight: 700,
          padding: 48,
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 24 }}>Hoffman Medical</div>
        <div style={{ fontSize: 32, fontWeight: 400, opacity: 0.95 }}>
          Las Vegas · Concierge family medicine
        </div>
      </div>
    ),
    { ...size },
  );
}
