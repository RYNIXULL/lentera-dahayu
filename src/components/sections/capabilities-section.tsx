import React from "react";
import { Locale, Dictionary } from "@/types/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Code2, Network, Cpu, ArrowRight } from "lucide-react";

interface CapabilitiesSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function CapabilitiesSection({
  locale,
  dict,
}: CapabilitiesSectionProps) {
  const icons = [Code2, Network, Cpu];

  return (
    <section
      aria-labelledby="capabilities-heading"
      className="py-20 md:py-28 border-t border-[#2A3545]/60 bg-[#090D14]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.capabilities.eyebrow}
          title={dict.capabilities.title}
          description={dict.capabilities.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {dict.capabilities.services.map((service, idx) => {
            const IconComponent = icons[idx] || Code2;

            return (
              <div
                key={service.title}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#F3F6FA] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A5B0C0] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A3545]">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#172232] text-[#A5B0C0] border border-[#2A3545]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer & Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#111824]/40 border border-[#2A3545]">
          <p className="text-xs text-[#A5B0C0] max-w-xl">
            {dict.capabilities.disclaimer}
          </p>
          <Button
            variant="secondary"
            size="sm"
            href={`/${locale}/contact`}
            className="shrink-0"
          >
            <span>{dict.common.discussProject}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
