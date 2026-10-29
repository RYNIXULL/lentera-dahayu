export type Locale = "id" | "en";

export type ProductStatus =
  | "live-demo"
  | "case-study"
  | "internal-project"
  | "archived";

export interface ProductContent {
  name: string;
  summary: string;
  problem?: string;
  solution?: string;
  features?: string[];
  roleAndScope?: string;
  platform?: string[];
  technologies?: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  screenshots?: string[];
  contentLocale: Locale;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  status: ProductStatus;
  featured: boolean;
  published: boolean;
  coverImage?: string;
  content: Record<Locale, ProductContent>;
}

export interface ProductFilterOptions {
  query?: string;
  category?: string;
  status?: ProductStatus | "all";
  platform?: string;
}
