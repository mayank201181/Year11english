// Browser-tab icon: royal indigo-violet square with an open book & nib.
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
          background: "linear-gradient(135deg, #4338ca 0%, #7e22ce 100%)",
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 1 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 26 C38 18 22 18 14 24 V76 C22 70 38 70 50 78 C62 70 78 70 86 76 V24 C78 18 62 18 50 26 Z" />
            <path d="M50 26 V78" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
