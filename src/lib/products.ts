import { PRODUCTS_DATA } from "@/content/products";
import { Locale, Product, ProductFilterOptions } from "@/types/product";

/**
 * Returns all verified, published products.
 * Unpublished/draft items are strictly excluded from public consumption.
 */
export function getPublishedProducts(): Product[] {
  return PRODUCTS_DATA.filter((product) => product.published === true);
}

/**
 * Returns published products marked as featured for homepage showcase.
 */
export function getFeaturedProducts(): Product[] {
  return getPublishedProducts().filter((product) => product.featured === true);
}

/**
 * Look up a published product by its unique URL slug.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return getPublishedProducts().find((product) => product.slug === slug);
}

/**
 * Get distinct categories present among published products.
 */
export function getAvailableCategories(): string[] {
  const published = getPublishedProducts();
  const categories = new Set<string>();
  published.forEach((product) => {
    if (product.category) {
      categories.add(product.category);
    }
  });
  return Array.from(categories);
}

/**
 * Search and filter published products based on query, category, and status.
 */
export function filterProducts(
  products: Product[],
  options: ProductFilterOptions,
  locale: Locale
): Product[] {
  const { query, category, status } = options;
  const cleanQuery = query?.trim().toLowerCase();

  return products.filter((product) => {
    const content = product.content[locale] || product.content.id;

    if (category && category !== "all" && product.category !== category) {
      return false;
    }

    if (status && status !== "all" && product.status !== status) {
      return false;
    }

    if (cleanQuery) {
      const matchName = content?.name?.toLowerCase().includes(cleanQuery);
      const matchSummary = content?.summary?.toLowerCase().includes(cleanQuery);
      const matchTech = content?.technologies?.some((t) =>
        t.toLowerCase().includes(cleanQuery)
      );
      if (!matchName && !matchSummary && !matchTech) {
        return false;
      }
    }

    return true;
  });
}
