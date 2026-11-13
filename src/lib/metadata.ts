import { Metadata } from "next";
import { Locale } from "@/types/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://r21fwebdev.com";

interface MetadataOptions {
  title: string;
  description: string;
  locale: Locale;
  path?: string;
  ogType?: "website" | "article";
}

export function constructMetadata({
  title,
  description,
  locale,
  path = "",
  ogType = "website",
}: MetadataOptions): Metadata {
  const currentPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${currentPath === "/" ? "" : currentPath}`;
  const alternateId = `${SITE_URL}/id${currentPath === "/" ? "" : currentPath}`;
  const alternateEn = `${SITE_URL}/en${currentPath === "/" ? "" : currentPath}`;

  const fullTitle = `${title} | R21F_webdev`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        id: alternateId,
        en: alternateEn,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "R21F_webdev",
      locale: locale === "id" ? "id_ID" : "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
