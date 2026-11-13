import React from "react";
import { Dictionary } from "@/types/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { Globe, Smartphone, Monitor } from "lucide-react";

interface HomeServicesSectionProps {
  dict: Dictionary;
}

export function HomeServicesSection({ dict }: HomeServicesSectionProps) {
  const icons = [Globe, Smartphone, Monitor];
  const { services } = dict.home;

  return (
    <section
      id="layanan"
      aria-labelledby="services-heading"
      className="py-20 md:py-28 border-t border-[#E2E8F0] bg-[#F0F5FA] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {services.items.map((service, idx) => {
            const IconComponent = icons[idx] || Globe;

            return (
              <div
                key={service.title}
                className="clay-card rounded-[32px] p-8 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F9FF] border-2 border-white text-[#0284C7] flex items-center justify-center mb-6 shadow-[0_10px_22px_-4px_rgba(14,165,233,0.18),-3px_-3px_10px_#FFFFFF,inset_3px_3px_6px_#FFFFFF,inset_-3px_-3px_8px_rgba(14,165,233,0.1)]">
                    <IconComponent className="w-7 h-7" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E293B] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E2E8F0]">
                  <ul className="flex flex-wrap gap-2">
                    {service.platforms.map((platform) => (
                      <li
                        key={platform}
                        className="text-[11px] font-mono font-bold px-3.5 py-1.5 rounded-full bg-[#F0F9FF] text-[#64748B] border border-sky-200/70 shadow-[inset_1px_1px_2px_#FFFFFF,0_2px_4px_rgba(14,165,233,0.04)]"
                      >
                        {platform}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-[#64748B] max-w-xl">{services.note}</p>
      </div>
    </section>
  );
}
