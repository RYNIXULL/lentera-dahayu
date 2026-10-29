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
      textColor: "text-[#86D6AD]",
      bgColor: "bg-[#86D6AD]/10",
      borderColor: "border-[#86D6AD]/25",
    },
    "case-study": {
      icon: FileText,
      textColor: "text-[#8BE5FF]",
      bgColor: "bg-[#8BE5FF]/10",
      borderColor: "border-[#8BE5FF]/25",
    },
    "internal-project": {
      icon: Cpu,
      textColor: "text-[#C1F1FF]",
      bgColor: "bg-[#C1F1FF]/10",
      borderColor: "border-[#C1F1FF]/25",
    },
    archived: {
      icon: Archive,
      textColor: "text-[#A5B0C0]",
      bgColor: "bg-[#A5B0C0]/10",
      borderColor: "border-[#A5B0C0]/25",
    },
  }[status];

  const IconComponent = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${config.bgColor} ${config.borderColor} ${config.textColor} ${className}`}
    >
      <IconComponent className="w-3.5 h-3.5 shrink-0" />
      <span>{label}</span>
    </span>
  );
}
