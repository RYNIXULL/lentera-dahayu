import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/types/i18n";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { constructMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Code2, Network, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

interface CapabilitiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CapabilitiesPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return constructMetadata({
    title: dict.capabilities.title,
    description: dict.capabilities.description,
    locale,
    path: "/capabilities",
  });
}

export default async function CapabilitiesPage({
  params,
}: CapabilitiesPageProps) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const capabilitiesDetails = [
    {
      icon: Code2,
      title: dict.capabilities.services[0].title,
      description: dict.capabilities.services[0].description,
      tags: dict.capabilities.services[0].tags,
      points: [
        "Server Components & Isomorphic Web Architecture",
        "Zero-latency interaction & Core Web Vitals optimization",
        "WCAG 2.2 AA accessible design systems",
        "Tailored state management and telemetry",
      ],
    },
    {
      icon: Network,
      title: dict.capabilities.services[1].title,
      description: dict.capabilities.services[1].description,
      tags: dict.capabilities.services[1].tags,
      points: [
        "Idempotent API design & schema contracts",
        "Resilient microservices communication pipelines",
        "High-throughput transactional integrity",
        "Secure credential isolation and OAuth flows",
      ],
    },
    {
      icon: Cpu,
      title: dict.capabilities.services[2].title,
      description: dict.capabilities.services[2].description,
      tags: dict.capabilities.services[2].tags,
      points: [
        "Rapid architectural feasibility stress testing",
        "Data pipeline modeling & query optimization",
        "Independent code quality & security posture audits",
        "Graceful degradation blueprints for critical paths",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <SectionHeading
        eyebrow={dict.capabilities.eyebrow}
        title={dict.capabilities.title}
        description={dict.capabilities.description}
      />

      <div className="space-y-8 mb-16">
        {capabilitiesDetails.map((cap, idx) => {
          const IconComponent = cap.icon;

          return (
            <div
              key={cap.title}
              className="glass-card rounded-2xl p-6 sm:p-10 border border-[#2A3545] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[#8BE5FF]">
                    0{idx + 1} / DOMAIN
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-[#F3F6FA]">
                  {cap.title}
                </h2>

                <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
                  {cap.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-[#172232] text-[#A5B0C0] border border-[#2A3545]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#090D14]/60 rounded-xl p-6 border border-[#2A3545]/60 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#F3F6FA] mb-4">
                  Standar Eksekusi & Ruang Lingkup
                </h3>
                <ul className="space-y-2.5">
                  {cap.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A5B0C0]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8BE5FF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Box */}
      <div className="glass-card rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto border border-[#8BE5FF]/20">
        <h3 className="text-2xl font-bold text-[#F3F6FA] mb-3">
          {dict.common.discussProject}
        </h3>
        <p className="text-sm text-[#A5B0C0] leading-relaxed max-w-xl mx-auto mb-8">
          {dict.capabilities.disclaimer}
        </p>
        <Button variant="primary" size="lg" href={`/${locale}/contact`}>
          <span>{dict.common.discussProject}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
