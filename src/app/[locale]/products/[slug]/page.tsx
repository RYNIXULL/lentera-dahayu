import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types/i18n";
import { LOCALES, isValidLocale, getDictionary } from "@/lib/i18n";
import { getProductBySlug, getPublishedProducts } from "@/lib/products";
import { constructMetadata } from "@/lib/metadata";
import { ProductDetailContent } from "@/components/products/product-detail-content";

interface ProductDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const published = getPublishedProducts();
  if (published.length === 0) {
    return [
      { locale: "id", slug: "placeholder" },
      { locale: "en", slug: "placeholder" },
    ];
  }

  const paths: Array<{ locale: string; slug: string }> = [];
  for (const locale of LOCALES) {
    for (const product of published) {
      paths.push({
        locale,
        slug: product.slug,
      });
    }
  }

  return paths;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isValidLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | LENTERA DAHAYU",
    };
  }

  const content = product.content[locale] || product.content.id;

  return constructMetadata({
    title: content.name,
    description: content.summary,
    locale,
    path: `/products/${slug}`,
    ogType: "article",
  });
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="pt-28 pb-24">
      <ProductDetailContent product={product} locale={locale} dict={dict} />
    </div>
  );
}
