"use client";

import React from "react";
import Image from "next/image";
import { TeamMember } from "@/config/team";
import { Dictionary } from "@/types/i18n";
import { LanyardBadge } from "@/components/ui/lanyard-badge";
import { ExternalLink, ShieldCheck, ArrowUpRight, Cpu } from "lucide-react";

interface TeamIdCardProps {
  member: TeamMember;
  dict: Dictionary;
}

export function TeamIdCard({ member, dict }: TeamIdCardProps) {
  const isLinkActive = Boolean(member.portfolioUrl && member.portfolioUrl !== "#");
  const viewLabel = dict.about?.viewPortfolio || "Buka Portofolio";
  const pendingLabel = dict.about?.portfolioComingSoon || "Segera Hadir";

  const handleOpenPortfolio = (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
    if (isLinkActive) {
      window.open(member.portfolioUrl, "_blank", "noopener,noreferrer");
    }
  };

  // 1. FRONT FACE OF THE LANYARD CARD (3:2 vertical ratio @ 240px width -> 360px height)
  const cardFront = (
    <div className="relative w-full h-full bg-white text-[#1E293B] p-5 flex flex-col justify-between select-none">
      {/* Top Header: Brand & Security Chip */}
      <div className="flex items-center justify-between gap-2 pt-4 pb-2 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center p-0.5 shrink-0">
            <Image
              src="/logo.svg"
              alt="R21F"
              width={22}
              height={18}
              style={{ width: "auto", height: "auto" }}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div>
            <span className="block text-[9px] font-mono uppercase tracking-widest text-[#64748B] font-bold">
              {dict.common.brandName}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#0284C7]">
              <Cpu className="w-3 h-3" />
              <span>{member.badgeId}</span>
            </span>
          </div>
        </div>

        {/* Physical Smart Card Chip Simulation */}
        <div
          aria-label="Security Chip"
          className="w-8 h-6 rounded-md bg-gradient-to-br from-[#BAE6FD] via-[#7DD3FC] to-[#38BDF8] border border-[#0284C7]/40 shadow-[inset_1px_1px_2px_#FFFFFF,0_1px_3px_rgba(14,165,233,0.2)] flex flex-col justify-between p-1"
        >
          <div className="w-full h-[1px] bg-[#0369A1]/40 rounded-full" />
          <div className="flex justify-between w-full">
            <div className="w-2 h-[1px] bg-[#0369A1]/40 rounded-full" />
            <div className="w-2 h-[1px] bg-[#0369A1]/40 rounded-full" />
          </div>
          <div className="w-full h-[1px] bg-[#0369A1]/40 rounded-full" />
        </div>
      </div>

      {/* Middle: Avatar & Monogram */}
      <div className="my-auto text-center py-2">
        <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center border-2 border-white shadow-[0_8px_20px_-4px_rgba(14,165,233,0.18),inset_2px_2px_4px_#FFFFFF] bg-gradient-to-br from-white to-[#F0F9FF] overflow-hidden">
          {member.photoUrl ? (
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <span className="font-mono font-black text-2xl text-[#0284C7] tracking-wider">
              {member.avatarInitials}
            </span>
          )}
        </div>

        {/* Verified Indicator */}
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-emerald-200 text-emerald-600 text-[9px] font-mono font-bold shadow-[0_2px_4px_rgba(16,185,129,0.15)] -mt-2.5 relative z-10">
          <ShieldCheck className="w-3 h-3 text-[#059669]" />
          <span>VERIFIED</span>
        </div>

        <h3 className="text-base font-black text-[#1E293B] tracking-tight mt-2 leading-snug">
          {member.name}
        </h3>
        <p className="text-[11px] font-semibold text-[#0284C7] font-mono mt-0.5 line-clamp-2 leading-tight min-h-[28px] flex items-center justify-center">
          {member.role}
        </p>
      </div>

      {/* Bottom Footer hint & direct portfolio link */}
      <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[9px] font-mono text-[#64748B]">
        {isLinkActive ? (
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={handleOpenPortfolio}
            className="inline-flex items-center gap-1 text-[#0284C7] font-bold hover:underline cursor-pointer"
          >
            <span>PORTOFOLIO</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </button>
        ) : (
          <span>TAP TO FLIP</span>
        )}
        <span className="text-[#64748B] font-bold">DRAG OR FLIP</span>
      </div>
    </div>
  );

  // 2. BACK FACE OF THE LANYARD CARD
  const cardBack = (
    <div className="relative w-full h-full bg-white text-[#1E293B] p-5 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="pt-4 pb-2 border-b border-[#E2E8F0] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center p-0.5 shrink-0">
            <Image
              src="/logo.svg"
              alt="R21F"
              width={16}
              height={13}
              style={{ width: "auto", height: "auto" }}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7]">
            ENGINEERING DOSSIER
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#64748B]">
          {member.nickname}
        </span>
      </div>

      {/* Bio & Skills */}
      <div className="my-auto space-y-2 py-1">
        <p className="text-[11px] text-[#64748B] leading-relaxed line-clamp-3">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-1 pt-1">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F0F9FF] text-[#0284C7] border border-sky-200/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action CTA & Barcode */}
      <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
        {/* Barcode representation */}
        <div
          className="flex items-center justify-center gap-[2px] opacity-40 select-none py-0.5"
          aria-hidden="true"
        >
          <span className="w-1 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-0.5 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-1.5 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-0.5 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-2 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-0.5 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-1 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-1.5 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-0.5 h-3 bg-[#1E293B] rounded-xs" />
          <span className="w-2 h-3 bg-[#1E293B] rounded-xs" />
        </div>

        {/* Clickable Portfolio Link on Back Face */}
        {isLinkActive ? (
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={handleOpenPortfolio}
            className="clay-btn-primary w-full flex items-center justify-center gap-1.5 py-2 text-[11px] font-mono font-bold tracking-wider rounded-xl cursor-pointer"
          >
            <span>{viewLabel}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        ) : (
          <div
            aria-disabled="true"
            className="clay-inset w-full flex items-center justify-center gap-1.5 py-2 text-[10px] font-mono font-bold text-[#64748B] rounded-xl opacity-80"
          >
            <span>{pendingLabel}</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </div>
        )}
      </div>
    </div>
  );

  // Responsive and distinct organic sway polarity for each team card
  const swayFactor =
    member.id === "rayhan" ? -0.85 : member.id === "fahmi" ? 0.6 : 0.95;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Interactive Hanging Lanyard Badge Simulation */}
      <div className="w-full relative h-[580px] flex items-center justify-center overflow-visible">
        <LanyardBadge
          cardWidth={240}
          height="580px"
          strapColor="#0284C7"
          inkColor="#38BDF8"
          strapText="R21F_webdev · software studio"
          strapLabel={member.department.toUpperCase()}
          front={cardFront}
          back={cardBack}
          flipButton={false}
          swayFactor={swayFactor}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default TeamIdCard;
