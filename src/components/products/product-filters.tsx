"use client";

import React from "react";
import { Dictionary } from "@/types/i18n";
import { ProductStatus } from "@/types/product";
import { Search, X, Filter } from "lucide-react";

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  categories: string[];
  dict: Dictionary;
  onReset: () => void;
  isFiltered: boolean;
}

export function ProductFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  categories,
  dict,
  onReset,
  isFiltered,
}: ProductFiltersProps) {
  const statuses: Array<{ value: ProductStatus | "all"; label: string }> = [
    { value: "all", label: dict.common.allStatuses },
    { value: "live-demo", label: dict.common.statusLabels["live-demo"] },
    { value: "case-study", label: dict.common.statusLabels["case-study"] },
    { value: "internal-project", label: dict.common.statusLabels["internal-project"] },
    { value: "archived", label: dict.common.statusLabels["archived"] },
  ];

  return (
    <div className="glass-card rounded-2xl p-4 sm:p-6 mb-10 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
        {/* Search Input */}
        <div className="lg:col-span-6 relative">
          <label htmlFor="catalog-search" className="sr-only">
            {dict.common.searchPlaceholder}
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A5B0C0]">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="catalog-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={dict.common.searchPlaceholder}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#090D14]/70 border border-[#2A3545] text-sm text-[#F3F6FA] placeholder-[#A5B0C0]/60 focus:outline-none focus:border-[#8BE5FF] focus:ring-1 focus:ring-[#8BE5FF] transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Bersihkan pencarian"
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A5B0C0] hover:text-[#F3F6FA]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="lg:col-span-3">
          <label htmlFor="category-select" className="sr-only">
            {dict.catalog.filterByCategory}
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D14]/70 border border-[#2A3545] text-sm text-[#F3F6FA] focus:outline-none focus:border-[#8BE5FF] focus:ring-1 focus:ring-[#8BE5FF] transition-all"
          >
            <option value="all">{dict.common.allCategories}</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="lg:col-span-3">
          <label htmlFor="status-select" className="sr-only">
            {dict.catalog.filterByStatus}
          </label>
          <select
            id="status-select"
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D14]/70 border border-[#2A3545] text-sm text-[#F3F6FA] focus:outline-none focus:border-[#8BE5FF] focus:ring-1 focus:ring-[#8BE5FF] transition-all"
          >
            {statuses.map((st) => (
              <option key={st.value} value={st.value}>
                {st.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter Active State & Reset */}
      {isFiltered && (
        <div className="pt-2 flex items-center justify-between text-xs text-[#A5B0C0] border-t border-[#2A3545]/60">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#8BE5FF]" />
            <span>Filter aktif</span>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="text-[#8BE5FF] hover:underline font-medium focus:outline-none"
          >
            {dict.common.resetFilters}
          </button>
        </div>
      )}
    </div>
  );
}
