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
    <div className="clay-card rounded-[32px] p-6 sm:p-8 mb-10 space-y-4 border-[2.5px] border-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
        {/* Search Input */}
        <div className="lg:col-span-6 relative">
          <label htmlFor="catalog-search" className="sr-only">
            {dict.common.searchPlaceholder}
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="catalog-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={dict.common.searchPlaceholder}
            className="w-full pl-10 pr-10 py-3.5 rounded-2xl clay-inset text-sm text-[#1E293B] placeholder-[#64748B]/60 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Bersihkan pencarian"
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#64748B] hover:text-[#1E293B]"
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
            className="w-full px-4 py-3.5 rounded-2xl clay-inset text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 transition-all cursor-pointer"
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
            className="w-full px-4 py-3.5 rounded-2xl clay-inset text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 transition-all cursor-pointer"
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
        <div className="pt-2 flex items-center justify-between text-xs text-[#64748B] border-t border-[#E2E8F0]">
          <div className="flex items-center gap-1.5 font-medium">
            <Filter className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Filter aktif</span>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="text-[#0284C7] hover:underline font-bold focus:outline-none cursor-pointer"
          >
            {dict.common.resetFilters}
          </button>
        </div>
      )}
    </div>
  );
}
