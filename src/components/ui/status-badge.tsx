import React from "react";
import { ProductStatus } from "@/types/product";
import { Activity, FileText, Cpu, Archive } from "lucide-react";

interface StatusBadgeProps {
  status: ProductStatus;
  label: string;
  className?: string;
}

export function StatusBadge({ status, label, className = "" }: StatusBadgeProps) {
  const config = {
    "live-demo": {
      icon: Activity,
      textColor: "text-[#059669]",
      bgColor: "bg-[#ECFDF5]",
      borderColor: "border-[#A7F3D0]",
    },
    "case-study": {
      icon: FileText,
      textColor: "text-[#0284C7]",
      bgColor: "bg-[#F0F9FF]",
      borderColor: "border-[#BAE6FD]",
    },
    "internal-project": {
      icon: Cpu,
      textColor: "text-[#0284C7]",
      bgColor: "bg-[#E0F2FE]",
      borderColor: "border-[#BAE6FD]",
    },
    archived: {
      icon: Archive,
      textColor: "text-[#64748B]",
      bgColor: "bg-[#F1F5F9]",
      borderColor: "border-[#CBD5E1]",
    },
  }[status];

  const IconComponent = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border-2 border-white shadow-[0_4px_10px_-2px_rgba(0,0,0,0.08),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(0,0,0,0.04)] ${config.bgColor} ${config.textColor} ${className}`}
    >
      <IconComponent className="w-3.5 h-3.5 shrink-0" />
      <span>{label}</span>
    </span>
  );
}
