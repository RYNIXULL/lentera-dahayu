import React from "react";
import Link from "next/link";
import { Locale } from "@/types/i18n";
import { Product } from "@/types/product";
import { StatusBadge } from "@/components/ui/status-badge";
import { ArrowRight, Layers } from "lucide-react";

interface ProductCardProps {
  product: Product;
  locale: Locale;
  statusLabel: string;
}

export function ProductCard({ product, locale, statusLabel }: ProductCardProps) {
  const content = product.content[locale] || product.content.id;

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl glass-card p-6 sm:p-7 overflow-hidden">
      <div>
        {/* Header with Category and Status */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="text-xs font-mono uppercase tracking-wider text-[#A5B0C0] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#8BE5FF]" />
            {product.category}
          </span>
          <StatusBadge status={product.status} label={statusLabel} />
        </div>

        {/* Product Title */}
        <h3 className="text-xl font-bold tracking-tight text-[#F3F6FA] group-hover:text-[#8BE5FF] transition-colors mb-3">
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="focus:outline-none focus:underline"
          >
            {content.name}
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-sm text-[#A5B0C0] leading-relaxed line-clamp-3 mb-6">
          {content.summary}
        </p>

        {/* Tech / Platform Tags */}
        {content.technologies && content.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {content.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#172232] text-[#A5B0C0] border border-[#2A3545]"
              >
                {tech}
              </span>
            ))}
            {content.technologies.length > 3 && (
              <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-[#172232] text-[#A5B0C0]/70">
                +{content.technologies.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-[#2A3545] flex items-center justify-between">
        <span className="text-xs font-medium text-[#8BE5FF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
          <span>{locale === "en" ? "Inspect details" : "Lihat rincian"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
}
