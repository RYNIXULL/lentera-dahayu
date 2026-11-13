import React from "react";
import { Dictionary } from "@/types/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { TEAM_MEMBERS } from "@/config/team";
import { TeamIdCard } from "./team-id-card";

interface TeamSectionProps {
  dict: Dictionary;
  className?: string;
}

export function TeamSection({ dict, className = "" }: TeamSectionProps) {
  const eyebrow = dict.about.teamEyebrow || "Kolektif Rekayasa";
  const title = dict.about.teamTitle || "Tim di Balik R21F_webdev";
  const description =
    dict.about.teamDescription ||
    "Tiga pengembang dan perancang sistem yang mendedikasikan presisi teknis untuk mewujudkan produk digital Anda.";

  return (
    <section
      id="tim-rekayasa"
      aria-labelledby="team-heading"
      className={`py-12 md:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        {/* 3 ID Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto pt-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamIdCard key={member.id} member={member} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}

