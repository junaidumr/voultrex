import { ImageResponse } from "next/og";

export const alt = "Voultrex — Engineering Scalable Digital Futures";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(160deg, #020208 0%, #0a0a18 45%, #030308 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(62,200,232,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(124,108,240,0.1) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #3ec8e8 0%, #7c6cf0 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "white",
            }}
          >
            V
          </div>
          <span
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "-0.02em",
            }}
          >
            Voultrex
          </span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Engineering Scalable Digital Futures
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Enterprise web apps, mobile, SaaS & AI systems — built in Islamabad,
          shipped worldwide.
        </div>
      </div>
    ),
    { ...size }
  );
}
