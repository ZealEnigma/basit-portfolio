import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basit Adekunle Azeez | Operations & Digital Transformation Consultant",
  description:
    "I help growing businesses build the operations that match their ambitions — through process mapping, workflow design, AI integration, and digital transformation.",
  keywords: [
    "operations consultant",
    "digital transformation",
    "AI automation",
    "business process",
    "workflow design",
    "London consultant",
  ],
  openGraph: {
    title: "Basit Adekunle Azeez | Operations & Digital Transformation Consultant",
    description:
      "Helping growing businesses scale through smarter operations, AI-powered workflows, and digital transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
