import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3ec8e8 0%, #7c6cf0 100%)",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "white",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          V
        </span>
      </div>
    ),
    { ...size }
  );
}
