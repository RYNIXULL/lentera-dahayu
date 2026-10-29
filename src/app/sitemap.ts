import { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { getPublishedProducts } from "@/lib/products";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lenteradahayu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/story",
    "/capabilities",
    "/about",
    "/contact",
    "/privacy",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  const lastModified = new Date("2026-10-28T00:00:00.000Z");

  // Static locale routes
  for (const locale of LOCALES) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/products" ? 0.9 : 0.7,
      });
    }
  }

  // Published product routes strictly
  const publishedProducts = getPublishedProducts();
  for (const product of publishedProducts) {
    for (const locale of LOCALES) {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}/products/${product.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return sitemapEntries;
}
