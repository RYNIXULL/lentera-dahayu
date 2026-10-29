import { Dictionary } from "@/types/i18n";

export const messagesEn: Dictionary = {
  common: {
    brandName: "LENTERA DAHAYU",
    brandTagline: "The light, made useful",
    brandDomain: "Software Engineering & Digital Solutions",
    exploreProducts: "Explore Products",
    discussProject: "Discuss a Project",
    viewAllProducts: "View All Products",
    contactUs: "Contact Us",
    backToCatalog: "Back to Catalog",
    allCategories: "All Categories",
    allStatuses: "All Statuses",
    searchPlaceholder: "Search products by name or keywords...",
    resetFilters: "Reset Filters",
    statusLabels: {
      "live-demo": "Live Demo",
      "case-study": "Case Study",
      "internal-project": "Internal Initiative",
      "archived": "Archived",
    },
    emptyCatalogTitle: "Catalog Under Technical Validation",
    emptyCatalogDesc:
      "The product showcase is currently undergoing architectural curation and technical review prior to public release. Connect with our team to discuss tailored system capabilities.",
    emptyFilterTitle: "No Matching Products Found",
    emptyFilterDesc:
      "No products match your selected search terms or filter criteria. Please try adjusting your filters.",
    skipToContent: "Skip to main content",
    language: "Language",
    switchLanguage: "Change Language",
    privacy: "Privacy Policy",
    allRightsReserved: "All rights reserved.",
  },
  nav: {
    home: "Home",
    products: "Product Catalog",
    capabilities: "Capabilities",
    about: "About",
    contact: "Contact",
  },
  hero: {
    badge: "Software Engineering Studio",
    headline: "Ideas, engineered into systems.",
    subheadline: "LENTERA DAHAYU — software engineering & digital solutions.",
    description:
      "Architecting resilient, performant, and purposeful software. We translate complex operational problems into reliable digital instruments for businesses and users alike.",
    ctaCatalog: "Explore Products",
    ctaContact: "Discuss a Project",
    interactiveNotice: "Interactive 3D experience — move cursor or touch to interact",
  },
  featured: {
    eyebrow: "Curated Work",
    title: "Featured Systems",
    description:
      "Selected engineering initiatives and systems that have completed architectural validation.",
    emptyNotice:
      "The featured products showcase will be updated as soon as verification and clearance stages conclude.",
  },
  catalog: {
    eyebrow: "Showcase & Repository",
    title: "Complete Product Catalog",
    description:
      "Explore software solutions, system architectures, and digital platforms built with modern engineering craftsmanship.",
    filterByCategory: "Category",
    filterByStatus: "Readiness Status",
    showingResults: "Displaying verified products",
    noResults: "No products matched the given criteria.",
  },
  productDetail: {
    overview: "Product Overview",
    problem: "Context & Problem Space",
    solution: "Engineered Solution",
    features: "Core Capabilities & Features",
    roleScope: "Scope & Engineering Contribution",
    platform: "Target Platforms",
    technologies: "Technology Foundation",
    launchDemo: "Launch Live Demo",
    viewRepository: "Inspect Repository",
    inquireSimilar: "Inquire About Similar Architecture",
    notFoundTitle: "Product Not Found",
    notFoundDesc:
      "The product page you requested has not yet been published or is undergoing architectural review.",
  },
  capabilities: {
    eyebrow: "Engineering Spectrum",
    title: "Core Capabilities",
    description:
      "Disciplined engineering expertise focused on building durable digital foundations for business systems.",
    disclaimer:
      "Service scope is evaluated based on specific project requirements and verified technical discovery.",
    services: [
      {
        title: "Web Application Engineering",
        description:
          "High-performance web applications built on modern architectures, optimized rendering pipelines, and accessible UI systems.",
        tags: ["Next.js", "React", "TypeScript", "Performance"],
      },
      {
        title: "System Integration & Backend APIs",
        description:
          "Structured API design, resilient service integration, and secure data handling with high concurrency resilience.",
        tags: ["REST / GraphQL", "Microservices", "Data Pipelines"],
      },
      {
        title: "Technical Prototyping & Architecture",
        description:
          "Rigorous Proofs of Concept, system blueprinting, and architectural feasibility audits prior to full production investment.",
        tags: ["System Design", "Feasibility Analysis", "Code Quality"],
      },
    ],
  },
  about: {
    eyebrow: "Profile & Philosophy",
    title: "About LENTERA DAHAYU",
    description:
      "An independent software engineering studio dedicated to precision, clarity, and dependable digital systems.",
    positioningTitle: "Positioning & Character",
    positioningText:
      "LENTERA DAHAYU was formed with a steadfast belief in clear thinking and sound execution. We view software not as a transient novelty, but as foundational infrastructure that must remain robust, maintainable, and deeply functional.",
    principlesTitle: "Our Engineering Principles",
    principles: [
      {
        title: "Precision & Technical Candor",
        description:
          "We never design on unverified hype. Every system architecture is grounded in real constraints, clear user needs, and measured outcomes.",
      },
      {
        title: "Uncompromising Performance",
        description:
          "Visual depth must never hinder efficiency. We demand fast initial loads, minimal resource overhead, and effortless accessibility.",
      },
      {
        title: "Durable Software Architecture",
        description:
          "Prioritizing modularity, thorough documentation, and minimal dependencies to ensure codebases thrive over long-term evolution.",
      },
    ],
  },
  contact: {
    eyebrow: "Initiate Collaboration",
    title: "Discuss Your System Requirements",
    description:
      "Submit an outline of your technical challenges, architectural inquiries, or system plans for an expert review.",
    directChannels: "Communication Channels",
    formTitle: "Technical Inquiry Form",
    formDesc:
      "Provide your contact details below. Your information is solely utilized to address your project inquiry.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    scopeLabel: "Project Category",
    messageLabel: "Project Scope / Technical Inquiries",
    submitButton: "Send Inquiry",
    submitting: "Processing Inquiry...",
    successMessage:
      "Your inquiry has been received. Our engineering team will review and reply within 1-2 business days.",
    errorMessage:
      "We encountered an issue submitting your inquiry. Please try again or reach out through alternate channels.",
    privacyNotice:
      "Your contact information is strictly handled in accordance with privacy ethics and never shared with commercial third parties.",
    channelStatusPending: "Direct communication channels are currently being configured under the official domain.",
    configurationNote:
      "Channel setup: Configure environment variables in .env to connect an automated webhook notification receptor.",
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: October 2026",
    intro:
      "LENTERA DAHAYU respects the privacy and integrity of every visitor and organization engaging with this website.",
    dataCollectedTitle: "Information We Collect",
    dataCollectedText:
      "We solely collect information you explicitly submit through our technical inquiry forms, such as your name, corporate email address, and project summary.",
    usageTitle: "How Information Is Utilized",
    usageText:
      "All submitted information is strictly used to evaluate and reply to your engineering inquiries and business collaboration requests.",
    securityTitle: "Data Security Standards",
    securityText:
      "We implement strict technical security measures and strictly prohibit committing credentials, API keys, or private client details into repositories.",
  },
};
