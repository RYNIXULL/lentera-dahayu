import React from "react";
import { Locale, Dictionary } from "@/types/i18n";
import { Product } from "@/types/product";
import { ProductCard } from "./product-card";
import { Button } from "@/components/ui/button";
import { PackageOpen, RotateCcw, ArrowRight } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
  isFiltered?: boolean;
  onResetFilters?: () => void;
}

export function ProductGrid({
  products,
  locale,
  dict,
  isFiltered = false,
  onResetFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-[#2A3545] bg-[#111824]/50 backdrop-blur-md p-8 sm:p-12 text-center max-w-2xl mx-auto my-8">
        <div className="w-14 h-14 rounded-2xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] mx-auto flex items-center justify-center mb-5">
          <PackageOpen className="w-7 h-7" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F3F6FA] mb-3">
          {isFiltered ? dict.common.emptyFilterTitle : dict.common.emptyCatalogTitle}
        </h3>
        <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed max-w-lg mx-auto mb-8">
          {isFiltered ? dict.common.emptyFilterDesc : dict.common.emptyCatalogDesc}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {isFiltered && onResetFilters && (
            <Button variant="secondary" size="md" onClick={onResetFilters}>
              <RotateCcw className="w-4 h-4" />
              <span>{dict.common.resetFilters}</span>
            </Button>
          )}
          <Button variant="primary" size="md" href={`/${locale}/contact`}>
            <span>{dict.common.discussProject}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          locale={locale}
          statusLabel={dict.common.statusLabels[product.status]}
        />
      ))}
    </div>
  );
}
