import { Product } from "@/types/product";

/**
 * LENTERA DAHAYU Product Registry
 *
 * PANDUAN PENGISIAN DATA:
 * 1. Setiap produk harus memiliki data terverifikasi sebelum `published` disetel ke `true`.
 * 2. Hanya produk dengan `published: true` yang akan muncul di sitemap, homepage, dan katalog publik.
 * 3. Jangan memasukkan URL repositori privat, rahasia dagang, atau data klien tanpa persetujuan tertulis.
 * 4. Bila demo belum tersedia, biarkan `demoUrl` kosong (undefined) agar tombol demo tidak muncul palsu.
 */
export const PRODUCTS_DATA: Product[] = [
  {
    id: "vessel-01-story",
    slug: "vessel-01-autonomous-ceramic",
    category: "Creative 3D & WebGL",
    status: "live-demo",
    featured: true,
    published: true,
    coverImage: "/images/products/vessel-01-preview.webp",
    content: {
      id: {
        name: "VESSEL-01: Autonomous Ceramic Experience",
        summary:
          "Showcase storytelling produk 3D berbasis scroll terinspirasi situs WebGL pemenang penghargaan internasional. Menghadirkan objek hero tunggal persisten, shader termal real-time, dan micro-interaksi taktil.",
        problem:
          "Website produk tradisional seringkali membosankan, statis, dan memisahkan konten naratif dari demonstrasi fisik produk secara interaktif.",
        solution:
          "Merancang satu canvas 3D persisten yang bertransformasi di 14 section berurutan, sinkronisasi Lenis smooth-scroll dengan GSAP ScrollTrigger, shader termal kustom, dan mekanisme inspeksi dekripsi dasar.",
        features: [
          "Single persistent 3D Canvas yang bertransformasi mulus melintasi 14 section naratif",
          "Sinkronisasi Lenis smooth scroll dan GSAP ScrollTrigger dengan Zustand state",
          "Shader termal dinamis kustom berbasis suhu sampling (Creative / Balanced / Deterministic)",
          "Eksplorasi interaktif: inspeksi sandi tersembunyi pada dasar cangkir dan varian stack bertingkat",
        ],
        roleAndScope:
          "Perancangan visual editorial, pemodelan geometri Three.js, penulisan shader GLSL kustom, integrasi GSAP ScrollTrigger & Lenis, serta orkestrasi micro-interaction.",
        platform: ["Web Browsers (WebGL 2.0)", "Desktop & Mobile Touch"],
        technologies: ["Three.js", "React Three Fiber", "GSAP ScrollTrigger", "Lenis", "Zustand", "Tailwind CSS"],
        demoUrl: "/id/story",
        contentLocale: "id",
      },
      en: {
        name: "VESSEL-01: Autonomous Ceramic Experience",
        summary:
          "Scroll-driven 3D product storytelling website in the style of award-winning WebGL sites. Single persistent hero object, real-time thermal shaders, and tactile micro-interactions.",
        problem:
          "Traditional product landing pages are static, generic, and separate emotional narrative copy from physical 3D demonstrations.",
        solution:
          "Engineered a single persistent 3D canvas transforming seamlessly across 14 consecutive sections, synchronized with Lenis smooth-scroll and GSAP ScrollTrigger, custom GLSL heat shaders, and tactile inspection.",
        features: [
          "Single persistent 3D Canvas transforming across 14 scroll-driven narrative sections",
          "Lenis smooth scroll synced with GSAP ScrollTrigger and reactive Zustand store",
          "Custom GLSL thermal dissipation shader with real-time temperature sampling",
          "Tactile flip toy: underside cryptographic cipher decode and multi-tier variant stacking",
        ],
        roleAndScope:
          "Creative engineering, procedural 3D modeling, GLSL thermal shaders, GSAP/Lenis scroll pipeline, and micro-interactions.",
        platform: ["Web Browsers (WebGL 2.0)", "Desktop & Mobile Touch"],
        technologies: ["Three.js", "React Three Fiber", "GSAP ScrollTrigger", "Lenis", "Zustand", "Tailwind CSS"],
        demoUrl: "/en/story",
        contentLocale: "en",
      },
    },
  },
  {
    id: "ld-core-light-engine",
    slug: "light-engine-design-system",
    category: "System Architecture",
    status: "internal-project",
    featured: true,
    published: true, // Verified internal architecture initiative
    coverImage: "/images/products/light-engine-preview.webp",
    content: {
      id: {
        name: "Light Engine System Architecture",
        summary:
          "Fondasi rekayasa visual dan sistem desain performa tinggi berbasis WebGL dan komponen deklaratif modern.",
        problem:
          "Kebutuhan akan pengalaman visual tingkat studio yang berkarakter tanpa mengorbankan kecepatan muat halaman, efisiensi konsumsi daya, dan aksesibilitas.",
        solution:
          "Mengembangkan arsitektur visual modular yang memisahkan komputasi WebGL dari pohon render HTML utama, dilengkapi fallback statis dan dukungan reduced-motion.",
        features: [
          "Arsitektur rendering terisolasi dengan zero impact pada First Contentful Paint",
          "Kompatibilitas universal dengan fallback poster otomatis saat WebGL tidak aktif",
          "Dukungan prefers-reduced-motion untuk kenyamanan aksesibilitas penuh",
          "Manajemen memori Three.js dengan siklus pembersihan (disposal) deterministik",
        ],
        roleAndScope:
          "Perancangan arsitektur visual, implementasi shader & geometri Three.js, integrasi Next.js Server Components, dan benchmarking performa.",
        platform: ["Web Browsers (Desktop & Mobile)"],
        technologies: ["TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS"],
        contentLocale: "id",
      },
      en: {
        name: "Light Engine System Architecture",
        summary:
          "High-performance visual engineering foundation and design system combining WebGL with modern declarative components.",
        problem:
          "The challenge of delivering distinctive studio-grade visual identity without compromising page load speeds, battery consumption, or accessibility.",
        solution:
          "Engineered an isolated visual pipeline separating WebGL rendering from the main semantic DOM, equipped with static fallbacks and reduced-motion compliance.",
        features: [
          "Isolated rendering pipeline with zero overhead on First Contentful Paint",
          "Universal compatibility with automatic static fallbacks when WebGL is absent",
          "Complete prefers-reduced-motion adherence for accessible browsing",
          "Deterministic Three.js GPU lifecycle and resource disposal management",
        ],
        roleAndScope:
          "Visual architecture design, Three.js shaders & geometry implementation, Next.js Server Components integration, and performance benchmarking.",
        platform: ["Web Browsers (Desktop & Mobile)"],
        technologies: ["TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS"],
        contentLocale: "en",
      },
    },
  },
];
