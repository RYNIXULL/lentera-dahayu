import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types/i18n";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { getFeaturedProducts } from "@/lib/products";
import { constructMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { ContactSection } from "@/components/sections/contact-section";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return constructMetadata({
    title: dict.hero.headline,
    description: dict.hero.description,
    locale,
    path: "",
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <FeaturedProducts
        products={featuredProducts}
        locale={locale}
        dict={dict}
      />
      <CapabilitiesSection locale={locale} dict={dict} />
      <ApproachSection dict={dict} />
      <ContactSection dict={dict} />
    </>
  );
}
