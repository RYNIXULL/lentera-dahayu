import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types/i18n";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { constructMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Compass, Target, Zap, Shield, ArrowRight } from "lucide-react";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return constructMetadata({
    title: dict.about.title,
    description: dict.about.description,
    locale,
    path: "/about",
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const principleIcons = [Target, Zap, Shield];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <SectionHeading
        eyebrow={dict.about.eyebrow}
        title={dict.about.title}
        description={dict.about.description}
      />

      {/* Positioning Section */}
      <div className="glass-card rounded-2xl p-8 sm:p-12 mb-16 border border-[#2A3545]">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8BE5FF] uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Fokus Studio & Filosofi Desain</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F6FA]">
            {dict.about.positioningTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#A5B0C0] leading-relaxed">
            {dict.about.positioningText}
          </p>

          <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
            Nama <strong className="text-[#F3F6FA]">LENTERA DAHAYU</strong> melambangkan pencarian akan kejelasan di tengah kegelapan kompleksitas teknis. Kami meyakini bahwa teknologi terbaik adalah teknologi yang tidak membebani, bekerja secara sunyi dengan reliabilitas tinggi, dan memberikan keleluasaan bagi bisnis untuk berkembang tanpa terhambat rapuhnya infrastruktur.
          </p>
        </div>
      </div>

      {/* Principles Section */}
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F3F6FA] mb-8">
          {dict.about.principlesTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {dict.about.principles.map((principle, idx) => {
            const IconComp = principleIcons[idx] || Target;

            return (
              <div
                key={principle.title}
                className="glass-card rounded-2xl p-7 border border-[#2A3545]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center mb-5">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-[#F3F6FA] mb-3">
                  {principle.title}
                </h3>

                <p className="text-sm text-[#A5B0C0] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Banner */}
      <div className="rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-[#172232] to-[#111824] border border-[#8BE5FF]/20">
        <h3 className="text-2xl font-bold text-[#F3F6FA] mb-3">
          {dict.common.discussProject}
        </h3>
        <p className="text-sm text-[#A5B0C0] leading-relaxed max-w-xl mx-auto mb-8">
          Konsultasikan tantangan engineering perangkat lunak dan arsitektur produk Anda bersama tim kami.
        </p>
        <Button variant="primary" size="lg" href={`/${locale}/contact`}>
          <span>{dict.common.discussProject}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
