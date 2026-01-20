import { ImageResponse } from "next/og";
import { SITE_NAME, DEFAULT_TITLE } from "./seo";

export const runtime = "edge";
export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

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
          alignItems: "center",
          background: "#ffffff",
          color: "#111111",
          padding: 72,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            border: "10px solid #f5f5f5",
            borderRadius: 28,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            zIndex: 1,
            textAlign: "center",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              width: 74,
              height: 74,
              borderRadius: 18,
              border: "2px solid #eaeaea",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            F
          </div>

          <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -1.5, lineHeight: 1.05 }}>
            {DEFAULT_TITLE}
          </div>

          <div style={{ fontSize: 22, color: "#6b7280", fontWeight: 500 }}>
            {SITE_NAME}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
