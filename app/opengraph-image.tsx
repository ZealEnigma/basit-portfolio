import { ImageResponse } from "next/og";

// Edge runtime — see app/icon.tsx for why. Fetching the font from Google's
// CDN (rather than reading the local .ttf via new URL(..., import.meta.url))
// sidesteps the same local-file-URL resolution bug entirely.
export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_URL =
  "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zI.ttf";

export default async function Image() {
  const fontData = await fetch(FONT_URL).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#fafaf7", border: "16px solid #111110",
          padding: "0 96px",
        }}
      >
        <div
          style={{
            fontFamily: "Instrument Serif",
            fontSize: 96,
            color: "#111110",
            lineHeight: 1.05,
          }}
        >
          Basit Azeez
        </div>
        <div
          style={{
            fontFamily: "Instrument Serif",
            fontSize: 40,
            color: "#b21e17",
            marginTop: 28,
          }}
        >
          Operations, Business Systems and Transformation
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
