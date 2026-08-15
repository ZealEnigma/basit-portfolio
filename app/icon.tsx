import { ImageResponse } from "next/og";

// Edge runtime, not Node — @vercel/og's Node-runtime code path resolves its
// own internal asset URLs via fileURLToPath(import.meta.url), which breaks
// under this repo's OneDrive path (contains " - ", the same class of bug
// that breaks the `next` binary's own PATH resolution here). Edge runtime
// uses a different loader that doesn't hit that code path.
export const runtime = "edge";

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
          background: "#101e33",
          color: "#d98b6a",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
