import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types/i18n";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { getPublishedProducts, getAvailableCategories } from "@/lib/products";
import { constructMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { CatalogView } from "@/components/products/catalog-view";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return constructMetadata({
    title: dict.catalog.title,
    description: dict.catalog.description,
    locale,
    path: "/products",
  });
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const products = getPublishedProducts();
  const categories = getAvailableCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <SectionHeading
        eyebrow={dict.catalog.eyebrow}
        title={dict.catalog.title}
        description={dict.catalog.description}
      />

      <CatalogView
        initialProducts={products}
        categories={categories}
        locale={locale}
        dict={dict}
      />
    </div>
  );
}
