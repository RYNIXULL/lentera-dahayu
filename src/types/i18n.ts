import { Locale } from "./product";

export interface NavLink {
  href: string;
  label: string;
}

export interface Dictionary {
  common: {
    brandName: string;
    brandTagline: string;
    brandDomain: string;
    exploreProducts: string;
    discussProject: string;
    viewAllProducts: string;
    contactUs: string;
    backToCatalog: string;
    allCategories: string;
    allStatuses: string;
    searchPlaceholder: string;
    resetFilters: string;
    statusLabels: {
      "live-demo": string;
      "case-study": string;
      "internal-project": string;
      "archived": string;
    };
    emptyCatalogTitle: string;
    emptyCatalogDesc: string;
    emptyFilterTitle: string;
    emptyFilterDesc: string;
    skipToContent: string;
    language: string;
    switchLanguage: string;
    privacy: string;
    allRightsReserved: string;
  };
  nav: {
    home: string;
    products: string;
    capabilities: string;
    about: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    ctaCatalog: string;
    ctaContact: string;
    badge: string;
    interactiveNotice: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    emptyNotice: string;
  };
  catalog: {
    eyebrow: string;
    title: string;
    description: string;
    filterByCategory: string;
    filterByStatus: string;
    showingResults: string;
    noResults: string;
  };
  productDetail: {
    overview: string;
    problem: string;
    solution: string;
    features: string;
    roleScope: string;
    platform: string;
    technologies: string;
    launchDemo: string;
    viewRepository: string;
    inquireSimilar: string;
    notFoundTitle: string;
    notFoundDesc: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    disclaimer: string;
    services: Array<{
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    positioningTitle: string;
    positioningText: string;
    principlesTitle: string;
    principles: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    directChannels: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    emailLabel: string;
    scopeLabel: string;
    messageLabel: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    privacyNotice: string;
    channelStatusPending: string;
    configurationNote: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    intro: string;
    dataCollectedTitle: string;
    dataCollectedText: string;
    usageTitle: string;
    usageText: string;
    securityTitle: string;
    securityText: string;
  };
}

export type { Locale };
