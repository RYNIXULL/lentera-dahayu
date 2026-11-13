import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/lib/toast-context";

// Strictly 2 font families across the entire application:
// 1. Primary Sans-serif for body, UI, and headings
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 2. Monospace for codes, metrics, technical tags
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R21F_webdev | Software Developer Studio",
  description:
    "Software developer studio. Mengubah kompleksitas teknis menjadi arsitektur sistem digital yang kokoh, performan, dan berkarakter.",
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#F0F5FA] text-[#1E293B] antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
