import React from "react";
import { Dictionary } from "@/types/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { Target, Zap, Shield } from "lucide-react";

interface ApproachSectionProps {
  dict: Dictionary;
}

export function ApproachSection({ dict }: ApproachSectionProps) {
  const icons = [Target, Zap, Shield];

  return (
    <section
      aria-labelledby="approach-heading"
      className="py-20 md:py-28 border-t border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={dict.about.principlesTitle}
          description={dict.about.positioningText}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {dict.about.principles.map((principle, idx) => {
            const IconComponent = icons[idx] || Target;

            return (
              <div
                key={principle.title}
                className="clay-card rounded-[32px] p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                <div className="clay-icon-box w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#1E293B] mb-3">
                  {principle.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
