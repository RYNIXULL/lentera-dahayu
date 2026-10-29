import React from "react";
import { Locale, Dictionary } from "@/types/i18n";
import { Product } from "@/types/product";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";

interface FeaturedProductsProps {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
}

export function FeaturedProducts({
  products,
  locale,
  dict,
}: FeaturedProductsProps) {
  return (
    <section
      aria-labelledby="featured-heading"
      className="py-20 md:py-28 border-t border-[#2A3545]/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow={dict.featured.eyebrow}
            title={dict.featured.title}
            description={dict.featured.description}
            className="mb-0"
          />

          <Button
            variant="outline"
            size="md"
            href={`/${locale}/products`}
            className="self-start md:self-end shrink-0"
          >
            <span>{dict.common.viewAllProducts}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {products.length > 0 ? (
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
        ) : (
          <div className="glass-card rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#F3F6FA] mb-2">
              {dict.featured.title}
            </h3>
            <p className="text-sm text-[#A5B0C0] leading-relaxed max-w-lg mx-auto mb-6">
              {dict.featured.emptyNotice}
            </p>
            <div className="flex justify-center">
              <Button
                variant="secondary"
                size="md"
                href={`/${locale}/products`}
              >
                <Layers className="w-4 h-4" />
                <span>{dict.common.exploreProducts}</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
