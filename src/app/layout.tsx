import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Milan Shrestha — Product & Visual Designer",
    template: "%s · Milan Shrestha",
  },
  description:
    "Milan Shrestha is a product and visual designer working between craft and thinking — typography, branding, and interfaces, shipped and reflected on honestly.",
  metadataBase: new URL("https://milanshrestha.me"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout; this rule targets the old Pages Router only */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=IBM+Plex+Mono:wght@500;600&display=swap"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
