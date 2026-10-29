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
      className="py-20 md:py-28 border-t border-[#2A3545]/60 relative overflow-hidden"
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
                className="glass-card rounded-2xl p-7 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center mb-5">
                  <IconComponent className="w-5 h-5" />
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
    </section>
  );
}
