import React from "react";
import { notFound } from "next/navigation";
import { LOCALES, isValidLocale, getDictionary } from "@/lib/i18n";
import { Locale } from "@/types/i18n";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/ui/skip-link";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#8BE5FF]/20 selection:text-white">
      <SkipLink label={dict.common.skipToContent} targetId="main-content" />
      <SiteHeader locale={locale} dict={dict} />
      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
