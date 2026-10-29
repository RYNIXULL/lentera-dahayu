import React from "react";

interface SkipLinkProps {
  label?: string;
  targetId?: string;
}

export function SkipLink({
  label = "Lompat ke konten utama",
  targetId = "main-content",
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#8BE5FF] focus:text-[#090D14] focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C1F1FF]"
    >
      {label}
    </a>
  );
}
