# LENTERA DAHAYU — Website Resmi

Website perusahaan dan katalog produk untuk **LENTERA DAHAYU** (*Software Engineering & Digital Solutions*), dibangun dengan prinsip **Premium Editorial Design**, integrasi **Hero 3D Light Engine**, dukungan penuh **Bilingual (Indonesia & Inggris)**, dan kepatuhan ketat terhadap standar keamanan, aksesibilitas, serta etika publikasi data.

---

## Karakter & Spesifikasi Arsitektur

- **Framework**: [Next.js](https://nextjs.org) (App Router, Server Components & Client Islands)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org) dengan skema konten bertipe ketat
- **Styling**: [Tailwind CSS](https://tailwindcss.com) dengan token *midnight navy* (`#090D14`), surface (`#111824`), aksen cyan (`#8BE5FF`), dan efek **Glassmorphism Frosted Glass** (`backdrop-blur-md`, `border-white/10`, `shadow-sm`)
- **Interaksi 3D**: [Three.js](https://threejs.org) & [React Three Fiber](https://r3f.docs.pmnd.rs) (*Light Engine* scene dengan parallax halus, idle motion terkontrol, pembersihan resource GPU, dan dukungan `prefers-reduced-motion`)
- **Fallback Statis**: Komposisi poster visual SVG/CSS yang tampil seketika sebelum WebGL dimuat atau saat WebGL tidak didukung
- **Notifikasi Kustom**: Menggantikan seluruh `alert()` bawaan browser dengan sistem **Custom Toast Notification & Modal UI** bertema frosted glass
- **Ikonografi Modern**: Menggunakan Lucide Icons murni (tanpa emotikon/emoji pada UI antarmuka dan tanpa ikon sparkles)
- **Bilingual Terstruktur**: Prefix rute eksplisit `/id` dan `/en` yang mempertahankan konteks halaman saat berganti bahasa

---

## Struktur Direktori

```text
src/
├── app/
│   ├── layout.tsx                # Root layout dengan Geist Sans/Mono & ToastProvider
│   ├── globals.css               # Design system tokens, glassmorphism, & a11y overrides
│   ├── page.tsx                  # Redirect otomatis root (/) ke (/id)
│   ├── sitemap.ts                # Sitemap XML dinamis untuk seluruh rute terpublikasi
│   ├── robots.ts                 # Konfigurasi robots.txt
│   ├── not-found.tsx             # Halaman 404 global
│   ├── api/
│   │   └── contact/route.ts      # Endpoint penerima formulir konsultasi teknis
│   └── [locale]/
│       ├── layout.tsx            # Validasi locale, Header frosted glass, & Footer
│       ├── page.tsx              # Homepage editorial & showcase 3D
│       ├── products/
│       │   ├── page.tsx          # Katalog produk dengan pencarian & filter
│       │   └── [slug]/page.tsx   # Detail produk (masalah, solusi, fitur, tech stack)
│       ├── capabilities/page.tsx # Ringkasan domain kapabilitas rekayasa
│       ├── about/page.tsx        # Profil studio & prinsip engineering
│       ├── contact/page.tsx      # Formulir konsultasi & triage teknis
│       ├── privacy/page.tsx      # Kebijakan privasi & etika perlindungan data
│       ├── story/page.tsx        # Pengalaman 3D Scroll-Driven Storytelling (VESSEL-01)
│       └── not-found.tsx         # 404 bilingual
├── components/
│   ├── 3d/
│   │   ├── hero-scene-loader.tsx # Dynamic client loader (SSR-safe, zero FCP impact)
│   │   ├── light-engine-scene.tsx# Scene Three.js inti cahaya & orbit
│   │   ├── scene-fallback.tsx    # Poster statis cadangan WebGL
│   │   └── scene-error-boundary.tsx # Error boundary penangkap kendala rendering
│   ├── layout/
│   │   ├── site-header.tsx       # Navbar navigasi dengan efek frosted glass
│   │   ├── mobile-navigation.tsx # Drawer navigasi seluler
│   │   └── site-footer.tsx       # Footer editorial jujur & terverifikasi
│   ├── products/
│   │   ├── product-card.tsx      # Kartu produk dengan status badge & kategori
│   │   ├── product-grid.tsx      # Grid responsif dengan empty state profesional
│   │   ├── product-filters.tsx   # Input pencarian, filter kategori, status, & reset
│   │   ├── catalog-view.tsx      # Orkestrasi filter client-side
│   │   └── product-detail-content.tsx # Komposisi halaman rincian produk
│   ├── sections/
│   │   ├── hero-section.tsx      # Hero editorial + 3D Light Engine
│   │   ├── featured-products.tsx # Showcase kurasi produk unggulan
│   │   ├── capabilities-section.tsx # Ringkasan 3 domain rekayasa utama
│   │   ├── approach-section.tsx  # Prinsip kerja engineering
│   │   ├── contact-section.tsx   # Formulir konsultasi dengan Toast Feedback
│   │   └── story/                # 14 seksi 3D storytelling naratif VESSEL-01
│   ├── story/
│   │   └── StoryApp.tsx          # Orkestrator WebGL, GSAP ScrollTrigger & Lenis
│   └── ui/
│       ├── button.tsx            # Komponen tombol aksesibel & variasi varian
│       ├── section-heading.tsx   # Tipografi heading editorial & glass badge
│       ├── language-switcher.tsx # Pengalih bahasa ID/EN fleksibel
│       ├── skip-link.tsx         # Skip link aksesibilitas WCAG 2.2 AA
│       ├── status-badge.tsx      # Badge status produk berbasis ikon
│       └── modal.tsx             # Modal dialog frosted glass
├── content/
│   ├── id/messages.ts            # Kamus konten Bahasa Indonesia
│   ├── en/messages.ts            # Kamus konten Bahasa Inggris
│   └── products.ts               # Registry basis data produk bertipe (published filter)
├── lib/
│   ├── i18n.ts                   # Resolusi locale & helper switch path
│   ├── products.ts               # Query & filter produk terverifikasi
│   ├── metadata.ts               # Generator SEO & Open Graph bilingual
│   └── toast-context.tsx         # Provider Custom Toast Notification
└── types/
    ├── i18n.ts                   # Tipe kamus bilingual
    └── product.ts                # Skema data produk & status
```

---

## Panduan Menjalankan Proyek Secara Lokal

### Prasyarat
- Node.js versi 18+ (direkomendasikan Node.js 20 atau 22)
- npm versi 9+

### Langkah Menjalankan
1. Pasang dependensi proyek:
   ```bash
   npm install
   ```

2. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```

3. Buka peramban (browser) di alamat:
   ```
   http://localhost:3000
   ```
   *(Sistem akan secara otomatis mengarahkan ke `http://localhost:3000/id`)*

### Menjalankan Pengujian & Verifikasi Kualitas
- Pemeriksaan Linting:
  ```bash
  npm run lint
  ```
- Pemeriksaan Tipe TypeScript:
  ```bash
  npx tsc --noEmit
  ```
- Uji Kompilasi Build Produksi:
  ```bash
  npm run build
  ```

---

## Panduan Pengelolaan Konten & Katalog Produk

Data produk dikelola secara terpusat pada file:
`src/content/products.ts`

### Aturan Publikasi Produk
1. **Atribut `published`**: Hanya produk yang memiliki `published: true` yang akan muncul di antarmuka publik (homepage showcase, katalog, dan sitemap).
2. **Ketiadaan Data**: Apabila data produk belum diverifikasi atau belum mengantongi izin rilis publik, setel `published: false`. Antarmuka katalog secara otomatis akan menyajikan **Empty State** editorial yang elegan dan informatif.
3. **Tautan Demo & Repositori**: Hanya cantumkan `demoUrl` atau `repositoryUrl` bila tautan tersebut benar-benar aktif dan aman untuk diakses publik. Tombol tautan tidak akan dirender jika field bernilai kosong (`undefined`).
4. **Keamanan Data**: Dilarang keras menaruh kredensial, kunci API privat, atau data pribadi klien ke dalam repositori.

---

## Konfigurasi Notifikasi Formulir Kontak

Formulir konsultasi teknis pada rute `/contact` telah dilengkapi dengan validasi input, pencegahan spam, dan umpan balik **Custom Toast Notification**.

Untuk menyambungkan formulir ke webhook notifikasi (seperti Discord webhook, Slack webhook, atau automasi email internal):
1. Salin `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
2. Isi URL webhook pada variabel:
   ```env
   CONTACT_NOTIFICATION_WEBHOOK_URL="https://your-webhook-endpoint.com/api/notify"
   ```
*(Catatan: File `.env` dijaga agar tidak pernah ter-commit ke repositori git).*

---

## Hal yang Perlu Dilengkapi Pemilik Usaha

Sebelum peluncuran ke publik (*Production Launch*), pemilik LENTERA DAHAYU perlu menyediakan informasi resmi berikut:
1. **Identitas Legal & Logo Resmi**: Desain logo resmi SVG jika ingin menggantikan wordmark teks tipografis saat ini.
2. **Daftar Produk Terverifikasi**: Menambahkan entri produk nyata pada `src/content/products.ts` dan menyetel `published: true`.
3. **Kanal Komunikasi Resmi**: Menetapkan alamat email korporat atau nomor WhatsApp bisnis resmi pada domain utama.
4. **Domain Produksi**: Mengonfigurasi `NEXT_PUBLIC_SITE_URL` pada berkas lingkungan produksi.
