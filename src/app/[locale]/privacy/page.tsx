import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types/i18n";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { constructMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return constructMetadata({
    title: dict.privacy.title,
    description: dict.privacy.intro,
    locale,
    path: "/privacy",
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <SectionHeading
        eyebrow="Tata Kelola Data"
        title={dict.privacy.title}
        description={dict.privacy.lastUpdated}
      />

      <div className="glass-card rounded-2xl p-8 sm:p-10 border border-[#2A3545] space-y-8">
        <div>
          <p className="text-base text-[#A5B0C0] leading-relaxed">
            {dict.privacy.intro}
          </p>
        </div>

        <section className="space-y-3 pt-4 border-t border-[#2A3545]">
          <div className="flex items-center gap-2 text-base font-bold text-[#F3F6FA]">
            <EyeOff className="w-5 h-5 text-[#8BE5FF]" />
            <h2>{dict.privacy.dataCollectedTitle}</h2>
          </div>
          <p className="text-sm text-[#A5B0C0] leading-relaxed">
            {dict.privacy.dataCollectedText}
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-[#2A3545]">
          <div className="flex items-center gap-2 text-base font-bold text-[#F3F6FA]">
            <Lock className="w-5 h-5 text-[#8BE5FF]" />
            <h2>{dict.privacy.usageTitle}</h2>
          </div>
          <p className="text-sm text-[#A5B0C0] leading-relaxed">
            {dict.privacy.usageText}
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-[#2A3545]">
          <div className="flex items-center gap-2 text-base font-bold text-[#F3F6FA]">
            <ShieldCheck className="w-5 h-5 text-[#86D6AD]" />
            <h2>{dict.privacy.securityTitle}</h2>
          </div>
          <p className="text-sm text-[#A5B0C0] leading-relaxed">
            {dict.privacy.securityText}
          </p>
        </section>
      </div>
    </div>
  );
}
