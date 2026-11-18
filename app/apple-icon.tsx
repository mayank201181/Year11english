// iOS home-screen icon: full-bleed royal indigo-violet square with Y11 badge.
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "linear-gradient(135deg, #4338ca 0%, #7e22ce 100%)",
        }}
      >
        <svg width={96} height={96} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 26 C38 18 22 18 14 24 V76 C22 70 38 70 50 78 C62 70 78 70 86 76 V24 C78 18 62 18 50 26 Z" />
            <path d="M50 26 V78" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#4338ca",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          Y11
        </div>
      </div>
    ),
    { ...size },
  );
}
