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
      className="py-20 md:py-28 border-t border-[#E2E8F0] bg-[#F0F5FA]"
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
                className="clay-card rounded-[32px] p-7 flex flex-col justify-between border-[2.5px] border-white"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F9FF] border-2 border-[#BAE6FD] text-[#0284C7] flex items-center justify-center mb-6 shadow-[inset_1px_1px_2px_rgba(255,255,255,1),0_6px_14px_rgba(14,165,233,0.15)]">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#1E293B] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-white text-[#64748B] border border-[#E2E8F0] shadow-[inset_1px_1px_2px_rgba(255,255,255,1)]"
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_8px_20px_-4px_rgba(14,165,233,0.08),inset_1px_1px_2px_rgba(255,255,255,1)]">
          <p className="text-xs text-[#64748B] max-w-xl">
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
