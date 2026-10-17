import { ImageResponse } from "next/og";
import { LOGO_URL } from "@/lib/brand";

export const alt = "Multilegal Consultancy — Corporate & Taxation Law Firm, Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview shown when the site is shared on WhatsApp, Facebook, LinkedIn, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#2d1c0d",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_URL} alt="" width={540} height={100} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#c57b57",
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            A Corporate & Taxation Law Firm
          </div>
          <div
            style={{
              display: "flex",
              color: "#fff9f4",
              fontSize: 76,
              lineHeight: 1.1,
            }}
          >
            Where you can put your trust.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(255, 249, 244, 0.7)",
            fontSize: 26,
            borderTop: "2px solid #c57b57",
            paddingTop: 24,
          }}
        >
          Dhaka, Bangladesh · Supreme Court of Bangladesh
        </div>
      </div>
    ),
    { ...size },
  );
}
