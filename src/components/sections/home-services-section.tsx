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
      className="py-20 md:py-28 border-t border-[#2A3545]/60 bg-[#090D14] scroll-mt-20"
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
                className="glass-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center mb-6">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#F3F6FA] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A5B0C0] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A3545]">
                  <ul className="flex flex-wrap gap-1.5">
                    {service.platforms.map((platform) => (
                      <li
                        key={platform}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#172232] text-[#A5B0C0] border border-[#2A3545]"
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

        <p className="text-xs text-[#A5B0C0] max-w-xl">{services.note}</p>
      </div>
    </section>
  );
}
