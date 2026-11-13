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
    <article className="group relative flex flex-col justify-between rounded-[32px] clay-card p-7 sm:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2">
      <div>
        {/* Header with Category and Status */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] flex items-center gap-1.5 font-bold">
            <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
            {product.category}
          </span>
          <StatusBadge status={product.status} label={statusLabel} />
        </div>

        {/* Product Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E293B] group-hover:text-[#0284C7] transition-colors mb-3">
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="focus:outline-none focus:underline"
          >
            {content.name}
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3 mb-6">
          {content.summary}
        </p>

        {/* Tech / Platform Tags */}
        {content.technologies && content.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {content.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-full bg-gradient-to-br from-white to-[#F0F9FF] text-[#64748B] border-2 border-white shadow-[0_2px_6px_rgba(14,165,233,0.08),inset_1px_1px_2px_#FFFFFF]"
              >
                {tech}
              </span>
            ))}
            {content.technologies.length > 3 && (
              <span className="text-[11px] font-mono font-bold px-2.5 py-1.5 rounded-full bg-[#F0F9FF] text-[#64748B]/80 border border-sky-200/60">
                +{content.technologies.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer Link */}
      <div className="pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-sky-200/70 shadow-[0_4px_10px_-2px_rgba(14,165,233,0.1),inset_1px_1px_2px_#FFFFFF] text-xs font-mono font-bold text-[#0284C7] group-hover:translate-x-1 transition-all">
          <span>{locale === "en" ? "Inspect details" : "Lihat rincian"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
}
