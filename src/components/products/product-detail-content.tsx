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
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#64748B] hover:text-[#0284C7] transition-all focus:outline-none rounded-2xl px-4 py-2 bg-white border-2 border-white shadow-[0_4px_12px_rgba(14,165,233,0.08),inset_2px_2px_4px_#FFFFFF] hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{dict.common.backToCatalog}</span>
        </Link>
      </div>

      {/* Main Header */}
      <header className="mb-12 pb-8 border-b border-[#E2E8F0]">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border-2 border-white font-bold shadow-[0_4px_10px_-2px_rgba(14,165,233,0.1),inset_2px_2px_4px_#FFFFFF]">
            <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
            {product.category}
          </span>
          <StatusBadge
            status={product.status}
            label={dict.common.statusLabels[product.status]}
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1E293B] leading-[1.15] mb-6">
          {content.name}
        </h1>

        <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed max-w-3xl">
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
            <section className="clay-card rounded-[32px] p-6 sm:p-8 border-[2.5px] border-white">
              <h2 className="text-lg font-bold text-[#1E293B] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />
                {dict.productDetail.problem}
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {content.problem}
              </p>
            </section>
          )}

          {/* Solution */}
          {content.solution && (
            <section className="clay-card rounded-[32px] p-6 sm:p-8 border-[2.5px] border-white">
              <h2 className="text-lg font-bold text-[#1E293B] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                {dict.productDetail.solution}
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {content.solution}
              </p>
            </section>
          )}

          {/* Features */}
          {content.features && content.features.length > 0 && (
            <section className="clay-card rounded-[32px] p-6 sm:p-8 border-[2.5px] border-white">
              <h2 className="text-lg font-bold text-[#1E293B] mb-4">
                {dict.productDetail.features}
              </h2>
              <ul className="space-y-3">
                {content.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-[#64748B]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Scope & Role */}
          {content.roleAndScope && (
            <section className="clay-card rounded-[32px] p-6 sm:p-8 border-[2.5px] border-white">
              <h2 className="text-lg font-bold text-[#1E293B] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                {dict.productDetail.roleScope}
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {content.roleAndScope}
              </p>
            </section>
          )}
        </div>

        {/* Sidebar Metadata */}
        <aside className="space-y-6">
          {/* Platform */}
          {content.platform && content.platform.length > 0 && (
            <div className="clay-card rounded-[30px] p-6 border-[2.5px] border-white">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3 flex items-center gap-1.5 font-bold">
                <Cpu className="w-3.5 h-3.5 text-[#0284C7]" />
                {dict.productDetail.platform}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.platform.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-gradient-to-br from-white to-[#F0F9FF] text-[#1E293B] border-2 border-white shadow-[0_2px_6px_rgba(14,165,233,0.08),inset_1px_1px_2px_#FFFFFF]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {content.technologies && content.technologies.length > 0 && (
            <div className="clay-card rounded-[30px] p-6 border-[2.5px] border-white">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3 flex items-center gap-1.5 font-bold">
                <Code2 className="w-3.5 h-3.5 text-[#0284C7]" />
                {dict.productDetail.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-gradient-to-br from-white to-[#F0F9FF] text-[#0284C7] border-2 border-white shadow-[0_2px_6px_rgba(14,165,233,0.08),inset_1px_1px_2px_#FFFFFF]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical Consultation CTA Card */}
          <div className="clay-card rounded-[30px] p-6 bg-gradient-to-br from-white to-[#F0F9FF] border-[2.5px] border-white shadow-[0_16px_36px_-6px_rgba(14,165,233,0.14)]">
            <h3 className="text-base font-bold text-[#1E293B] mb-2">
              {dict.productDetail.inquireSimilar}
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed mb-4">
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
