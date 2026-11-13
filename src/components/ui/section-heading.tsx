import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#0284C7] clay-badge mb-5 border-2 border-white ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse shadow-[0_0_8px_#38BDF8]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
