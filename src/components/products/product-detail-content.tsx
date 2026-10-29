import React from "react";
import Link from "next/link";
import { Locale, Dictionary } from "@/types/i18n";
import { Product } from "@/types/product";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface ProductDetailContentProps {
  product: Product;
  locale: Locale;
  dict: Dictionary;
}

export function ProductDetailContent({
  product,
  locale,
  dict,
}: ProductDetailContentProps) {
  const content = product.content[locale] || product.content.id;

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Back to Catalog link */}
      <div className="mb-8">
        <Link
          href={`/${locale}/products`}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A5B0C0] hover:text-[#8BE5FF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#8BE5FF] rounded-md px-2 py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{dict.common.backToCatalog}</span>
        </Link>
      </div>

      {/* Main Header */}
      <header className="mb-12 pb-8 border-b border-[#2A3545]">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#A5B0C0] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172232] border border-[#2A3545]">
            <Layers className="w-3.5 h-3.5 text-[#8BE5FF]" />
            {product.category}
          </span>
          <StatusBadge
            status={product.status}
            label={dict.common.statusLabels[product.status]}
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F6FA] leading-[1.15] mb-6">
          {content.name}
        </h1>

        <p className="text-lg sm:text-xl text-[#A5B0C0] leading-relaxed max-w-3xl">
          {content.summary}
        </p>

        {/* Action Links if available */}
        <div className="mt-8 flex flex-wrap gap-4">
          {content.demoUrl && (
            <Button
              variant="primary"
              size="md"
              href={content.demoUrl}
              external
            >
              <span>{dict.productDetail.launchDemo}</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}

          {content.repositoryUrl && (
            <Button
              variant="secondary"
              size="md"
              href={content.repositoryUrl}
              external
            >
              <span>{dict.productDetail.viewRepository}</span>
              <Code2 className="w-4 h-4" />
            </Button>
          )}

          <Button
            variant="outline"
            size="md"
            href={`/${locale}/contact`}
          >
            <span>{dict.productDetail.inquireSimilar}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main 2-column description */}
        <div className="lg:col-span-2 space-y-10">
          {/* Problem & Context */}
          {content.problem && (
            <section className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#F3F6FA] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8BE5FF]" />
                {dict.productDetail.problem}
              </h2>
              <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
                {content.problem}
              </p>
            </section>
          )}

          {/* Solution */}
          {content.solution && (
            <section className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#F3F6FA] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#43BFEA]" />
                {dict.productDetail.solution}
              </h2>
              <p className="text-sm sm:text-base text-[#A5B0C0] leading-relaxed">
                {content.solution}
              </p>
            </section>
          )}

          {/* Features */}
          {content.features && content.features.length > 0 && (
            <section className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#F3F6FA] mb-4">
                {dict.productDetail.features}
              </h2>
              <ul className="space-y-3">
                {content.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-[#A5B0C0]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8BE5FF] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Scope & Role */}
          {content.roleAndScope && (
            <section className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#F3F6FA] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#86D6AD]" />
                {dict.productDetail.roleScope}
              </h2>
              <p className="text-sm text-[#A5B0C0] leading-relaxed">
                {content.roleAndScope}
              </p>
            </section>
          )}
        </div>

        {/* Sidebar Metadata */}
        <aside className="space-y-6">
          {/* Platform */}
          {content.platform && content.platform.length > 0 && (
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#A5B0C0] mb-3 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#8BE5FF]" />
                {dict.productDetail.platform}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.platform.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#172232] text-[#F3F6FA] border border-[#2A3545]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {content.technologies && content.technologies.length > 0 && (
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#A5B0C0] mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#8BE5FF]" />
                {dict.productDetail.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#172232] text-[#8BE5FF] border border-[#2A3545]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical Consultation CTA Card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#172232] to-[#111824] border border-[#8BE5FF]/20">
            <h3 className="text-base font-bold text-[#F3F6FA] mb-2">
              {dict.productDetail.inquireSimilar}
            </h3>
            <p className="text-xs text-[#A5B0C0] leading-relaxed mb-4">
              Diskusikan implementasi arsitektur serupa yang disesuaikan dengan infrastruktur dan kebutuhan organisasi Anda.
            </p>
            <Button
              variant="primary"
              size="sm"
              href={`/${locale}/contact`}
              className="w-full justify-between"
            >
              <span>{dict.common.discussProject}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </aside>
      </div>
    </article>
  );
}
