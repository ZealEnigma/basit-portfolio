import type { Metadata } from "next";
// Self-hosted fonts: Archivo with its width axis (display type at 125% width,
// body at 100%) and IBM Plex Mono for drawing labels.
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";

const TITLE = "Basit Azeez | Operations, Business Systems and Transformation Leader";
const DESCRIPTION =
  "I build the systems that let organisations scale, then stay until people use them. Seven countries, a team of twenty, four enterprise migrations, and GSP, a platform taken from ideation to the system of record.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.basitazeez.com"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.basitazeez.com",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
