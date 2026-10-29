"use client";

import React, { useState, useMemo } from "react";
import { Locale, Dictionary } from "@/types/i18n";
import { Product, ProductStatus } from "@/types/product";
import { ProductFilters } from "./product-filters";
import { ProductGrid } from "./product-grid";
import { filterProducts } from "@/lib/products";

interface CatalogViewProps {
  initialProducts: Product[];
  categories: string[];
  locale: Locale;
  dict: Dictionary;
}

export function CatalogView({
  initialProducts,
  categories,
  locale,
  dict,
}: CatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const isFiltered =
    Boolean(searchQuery.trim()) ||
    selectedCategory !== "all" ||
    selectedStatus !== "all";

  const filteredProducts = useMemo(() => {
    return filterProducts(
      initialProducts,
      {
        query: searchQuery,
        category: selectedCategory,
        status: selectedStatus as ProductStatus | "all",
      },
      locale
    );
  }, [initialProducts, searchQuery, selectedCategory, selectedStatus, locale]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedStatus("all");
  };

  return (
    <div>
      {/* Search and Filters - only render controls if catalog has items or active search */}
      <ProductFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        categories={categories}
        dict={dict}
        onReset={handleReset}
        isFiltered={isFiltered}
      />

      {/* Product Grid / Empty State */}
      <ProductGrid
        products={filteredProducts}
        locale={locale}
        dict={dict}
        isFiltered={isFiltered}
        onResetFilters={handleReset}
      />
    </div>
  );
}
