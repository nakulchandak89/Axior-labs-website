import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Axior Labs — Operational Intelligence for Physical Systems",
  description:
    "Axior Labs builds the intelligence layer that makes physical operations observable, measurable, and data-driven. RFID, IoT, AI-powered operational platforms.",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
  openGraph: {
    title: "Axior Labs — Operational Intelligence for Physical Systems",
    description:
      "Axior Labs builds the intelligence layer that makes physical operations observable, measurable, and data-driven.",
    type: "website",
    siteName: "Axior Labs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-slate-900 bg-white antialiased selection:bg-indigo-600/30 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
