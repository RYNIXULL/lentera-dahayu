import { Metadata } from "next";
import { Locale } from "@/types/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lenteradahayu.com";

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

  const fullTitle = `${title} | LENTERA DAHAYU`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
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
      siteName: "LENTERA DAHAYU",
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
