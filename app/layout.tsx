import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

const [ownerFromEnv, repoFromEnv] = (process.env.GITHUB_REPOSITORY || "huayuankou9-arch/WebCompass").split("/");
const owner = ownerFromEnv || "huayuankou9-arch";
const repo = repoFromEnv || "WebCompass";
const productionUrl = `https://${owner}.github.io/${repo}/`;
const siteUrl = process.env.NODE_ENV === "production" ? productionUrl : "http://localhost:3000/";
const ogImagePath = "og-image.svg";
const faviconPath = "favicon.svg";

export const metadata: Metadata = {
  title: "WebCompass | A Unified Multimodal Benchmark for Web Coding",
  description:
    "WebCompass: A unified multimodal benchmark and evaluation framework for web coding across generation, editing, and repair.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "WebCompass",
    description: "A Unified Multimodal Benchmark and Evaluation Framework for Web Coding",
    url: siteUrl,
    siteName: "WebCompass",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "WebCompass Project Page"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCompass",
    description: "A Unified Multimodal Benchmark and Evaluation Framework for Web Coding",
    images: [ogImagePath]
  },
  icons: {
    icon: faviconPath
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
