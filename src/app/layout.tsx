import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/lib/toast-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LENTERA DAHAYU | Software Engineering & Digital Solutions",
  description:
    "Studio rekayasa perangkat lunak independen. Mengubah kompleksitas teknis menjadi arsitektur sistem digital yang kokoh, performan, dan berkarakter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full dark`}>
      <body className="min-h-full flex flex-col bg-[#090D14] text-[#F3F6FA] antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
