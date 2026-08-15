import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Basit Adekunle Azeez | Operations and Delivery Leader",
  description:
    "I build the systems that let organisations scale, and then I get people to use them. Seven countries, twenty people, four enterprise migrations, and a platform taken from requirements to production.",
  keywords: [
    "operations leader",
    "delivery manager",
    "business transformation",
    "process improvement",
    "enterprise systems migration",
    "AI automation",
    "London",
  ],
  openGraph: {
    title: "Basit Adekunle Azeez | Operations and Delivery Leader",
    description:
      "I build the systems that let organisations scale, and then I get people to use them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
