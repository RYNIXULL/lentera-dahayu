# prd & design direction — LENTERA DAHAYU

**kategori:** company profile, portfolio showcase, product catalog  
**bidang:** software engineering & digital solutions  
**arah visual:** premium editorial dengan interaksi 3d yang terukur  
**audiens:** calon klien bisnis dan developer  
**bahasa:** indonesia dan inggris  
**status dokumen:** spesifikasi awal untuk discovery dan implementasi MVP  
**versi:** 1.0  
**tanggal:** 28 oktober 2026

> **batasan akurasi:** dokumen ini hanya menetapkan arah produk dan kebutuhan website berdasarkan brief yang tersedia. nama produk, deskripsi usaha yang lebih lengkap, daftar layanan final, alamat, kontak, logo, identitas legal, testimoni, statistik, klien, pencapaian, dan teknologi pada setiap produk belum dikonfirmasi. semua bagian tersebut harus dilengkapi dari data nyata sebelum dipublikasikan. jangan mengisi kekosongan dengan klaim rekaan.

---

## 1. ringkasan produk

LENTERA DAHAYU membutuhkan website perusahaan yang memperkenalkan identitas usaha di bidang **software engineering & digital solutions**, serta menampilkan produk-produk yang pernah dibuat sebagai bukti kemampuan. website harus terasa khas dan memorable melalui art direction premium editorial serta satu pengalaman 3d utama, tetapi konten produk harus tetap mudah dibaca, ditemukan, dan dinilai oleh calon klien bisnis maupun developer.

website bukan toko online pada MVP. tujuan utamanya adalah membangun kepercayaan melalui karya nyata, menjelaskan konteks dan kapabilitas tiap produk, lalu mengarahkan pengunjung ke demo atau kanal kontak yang sudah diverifikasi.

### proposisi produk

- **untuk calon klien bisnis:** pahami masalah yang dapat diselesaikan, lihat bukti pekerjaan, kemudian mulai percakapan proyek.
- **untuk developer:** telusuri detail produk, platform, teknologi yang benar-benar digunakan, serta tautan demo atau repository yang memang boleh dibagikan.
- **untuk LENTERA DAHAYU:** punya pusat identitas digital yang konsisten, mudah dibagikan, bilingual, dan bisa dikembangkan tanpa membangun backend terlalu awal.

### prinsip utama

1. karya nyata lebih penting daripada klaim besar.
2. interaksi 3d memperkuat pesan, bukan menghalangi membaca atau navigasi.
3. konten dan navigasi tetap berfungsi tanpa WebGL.
4. setiap produk punya halaman yang menjawab: apa produknya, masalah apa yang ditangani, bagaimana solusi bekerja, dan apa yang bisa dicoba atau dihubungi.
5. struktur konten disiapkan bilingual sejak awal, bukan diterjemahkan secara manual setelah situs selesai.
6. MVP dibuat sesederhana mungkin; CMS dan backend ditambahkan saat kebutuhan editorial benar-benar muncul.

## 2. tujuan, indikator, dan bukan tujuan

### 2.1 tujuan MVP

- memperkenalkan LENTERA DAHAYU dengan positioning yang jelas.
- menampilkan pilihan produk dalam format showcase di halaman utama dan katalog lengkap.
- menyediakan halaman detail yang dapat ditautkan secara langsung untuk setiap produk yang dipublikasikan.
- mendukung bahasa indonesia dan inggris dengan URL per bahasa.
- memberikan cara yang jelas untuk menghubungi perusahaan.
- menunjukkan karakter visual melalui satu pengalaman 3d yang relevan dan responsif.
- memastikan halaman inti tetap usable di ponsel, keyboard, reduced motion, dan perangkat tanpa dukungan WebGL.

### 2.2 indikator keberhasilan yang bisa diuji

indikator berikut merupakan target produk, bukan klaim performa yang sudah tercapai.

- pengunjung bisa menemukan katalog dari navigasi utama tanpa harus melewati animasi.
- pengunjung bisa membuka detail produk dari halaman utama dan katalog.
- setiap produk yang aktif dipublikasikan memiliki nama, ringkasan, kategori, status, gambar/preview yang sah digunakan, serta CTA yang valid.
- switch bahasa mempertahankan halaman yang setara jika terjemahannya tersedia; bila belum tersedia, pengguna diarahkan dengan jelas ke versi bahasa yang ada.
- formulir atau tautan kontak dapat diuji dari perangkat desktop dan mobile.
- konten inti tetap tersedia ketika scene 3d gagal dimuat.
- tidak ada angka pencapaian, testimoni, logo klien, teknologi, atau status produk yang ditampilkan tanpa dasar yang dapat diverifikasi.

### 2.3 bukan tujuan MVP

- tidak membangun checkout, pembayaran, cart, atau marketplace.
- tidak membangun login pengunjung.
- tidak membangun CMS admin sebelum kebutuhan pengelolaan konten dikonfirmasi.
- tidak membangun chatbot AI hanya untuk mengikuti tren.
- tidak menjanjikan animasi 3d berat di setiap section.
- tidak menampilkan dashboard statistik, jumlah klien, revenue, atau metrik bisnis tanpa data nyata.
- tidak mengklaim sertifikasi, kemitraan resmi, SLA, atau cakupan layanan yang belum dikonfirmasi.

## 3. brand direction

### 3.1 karakter brand

**kata kunci:** thoughtful, precise, quietly ambitious, crafted, clear, technical.

LENTERA DAHAYU sebaiknya terlihat seperti studio engineering yang mengutamakan kualitas berpikir dan implementasi. visual harus memiliki karakter, tetapi tidak seperti landing page template startup atau situs game sci-fi.

### 3.2 arah visual: premium editorial

- layout editorial dengan hierarki teks tegas, whitespace luas, grid konsisten, dan komposisi asimetris secukupnya.
- latar utama gelap: midnight navy atau charcoal berwarna dingin; jangan menggunakan hitam pekat di seluruh halaman jika menyebabkan tampilan terlalu keras.
- aksen cyan/ice blue hanya untuk cahaya 3d, tautan interaktif, fokus, atau status penting. jangan menjadikan setiap elemen menyala.
- bidang terang/kontras dapat digunakan pada screenshot produk atau section tertentu agar variasi halaman terasa terarah.
- gunakan border tipis, noise atau grain sangat halus bila dibutuhkan, dan bayangan yang dikendalikan. hindari blur/transparansi berlebihan pada semua kartu.
- gunakan visual produk nyata sebagai bukti utama. render abstrak adalah penguat identitas, bukan pengganti screenshot produk.
- hindari ikon emoji sebagai ikon antarmuka. gunakan ikon vektor konsisten jika diperlukan.

### 3.3 konsep visual inti: “the light, made useful”

konsep ini adalah usulan kreatif yang terinspirasi nama “LENTERA”, bukan klaim tentang sejarah atau filosofi resmi perusahaan.

- **light source:** satu inti cahaya abstrak melambangkan ide yang mulai terbentuk.
- **orbit / path:** garis dan cincin tipis menggambarkan hubungan antara ide, sistem, dan pengguna.
- **structured forms:** panel, garis grid, atau bentuk geometris menunjukkan presisi engineering.
- **reveal:** scroll dan interaksi membuat elemen tertentu terbuka secara terukur, bukan ledakan efek.

jangan menjadikan simbol lentera literal yang terlalu dekoratif bila bentuk abstrak sudah lebih kuat. keputusan bentuk logo harus dikonfirmasi sebagai pekerjaan identitas merek terpisah.

### 3.4 arahan copywriting

- spesifik, tenang, dan percaya diri.
- utamakan hasil kerja, konteks, fungsi, dan batasan.
- hindari “revolusioner”, “nomor satu”, “terdepan”, “terbaik”, atau “mengubah dunia” kecuali bisa dibuktikan dan memang dibutuhkan.
- hindari bahasa teknis berlebihan pada halaman utama; detail engineering dipindahkan ke halaman produk.
- jangan menyebut “kami” sebagai tim besar atau agensi dengan struktur tertentu sebelum informasi organisasi dikonfirmasi.

### 3.5 draft headline bilingual

teks berikut adalah opsi copy kreatif, bukan fakta perusahaan yang sudah disahkan.

**indonesia**
- headline: “ide yang dirancang menjadi sistem.”
- subheadline: “LENTERA DAHAYU — software engineering & digital solutions.”
- CTA utama: “jelajahi produk”
- CTA sekunder: “diskusikan proyek”

**english**
- headline: “ideas, engineered into systems.”
- subheadline: “LENTERA DAHAYU — software engineering & digital solutions.”
- primary CTA: “explore products”
- secondary CTA: “discuss a project”

copy harus ditinjau ulang setelah positioning, layanan aktif, dan gaya komunikasi final dikonfirmasi.

## 4. audiens dan kebutuhan

### 4.1 calon klien bisnis

**pertanyaan utama:** apakah perusahaan ini bisa memahami kebutuhan saya dan membangun solusi yang relevan?

**informasi yang dibutuhkan:**
- apa yang dikerjakan LENTERA DAHAYU.
- contoh produk atau proyek yang relevan.
- masalah, batasan, fitur utama, dan hasil yang dapat diverifikasi.
- proses memulai percakapan dan kanal kontak yang jelas.

**jalan utama:** home → featured work → detail produk → contact.

### 4.2 developer / komunitas teknologi

**pertanyaan utama:** bagaimana solusi ini dibuat, apa fitur dan platformnya, dan adakah demo atau repository yang dapat ditinjau?

**informasi yang dibutuhkan:**
- kategori dan platform produk.
- peran/ruang lingkup yang benar-benar dikerjakan.
- tech stack hanya jika dikonfirmasi.
- demo, dokumentasi, atau repository publik jika tersedia dan aman dibagikan.

**jalan utama:** home → katalog → filter/detail produk → demo atau repository.

### 4.3 kebutuhan bersama

- navigasi yang jelas.
- tampilan mobile yang nyaman.
- halaman produk yang bisa dibagikan sebagai URL.
- kecepatan muat yang baik.
- opsi bahasa yang mudah ditemukan.
- kontak yang tidak tersembunyi di balik efek visual.

## 5. sitemap dan routing

gunakan URL dengan prefix bahasa agar link, SEO, dan pergantian bahasa dapat dikelola konsisten.

| halaman | indonesia | english | prioritas |
|---|---|---|---|
| beranda | `/id` | `/en` | p0 |
| katalog produk | `/id/products` | `/en/products` | p0 |
| detail produk | `/id/products/[slug]` | `/en/products/[slug]` | p0 |
| kapabilitas/layanan | `/id/capabilities` | `/en/capabilities` | p1 |
| tentang perusahaan | `/id/about` | `/en/about` | p1 |
| kontak | `/id/contact` | `/en/contact` | p0 |
| kebijakan privasi | `/id/privacy` | `/en/privacy` | p2, bila formulir/analitik memerlukannya |
| halaman tidak ditemukan | locale-aware 404 | locale-aware 404 | p1 |

`p0` = wajib MVP, `p1` = penting jika konten tersedia, `p2` = bergantung pada kebutuhan dan data yang dikumpulkan.

### aturan routing bilingual

- tetapkan bahasa default: **indonesia (`id`)** sebagai usulan awal; konfirmasi sebelum implementasi.
- gunakan route prefix eksplisit `/id` dan `/en`.
- switch bahasa harus mencoba membuka halaman padanan pada locale lain, bukan selalu kembali ke homepage.
- simpan slug produk yang sama antarbahasa bila memungkinkan; teks detail dan metadata dapat berbeda.
- jika sebuah produk belum memiliki terjemahan, jangan tampilkan halaman kosong. tandai ketersediaan bahasa dan berikan pilihan kembali ke versi yang ada.
- lakukan escape/validasi pada data dari query jika nantinya ada pencarian atau filter berbasis URL.
- implementasi routing mengikuti pola App Router dan route segment locale. referensi: [next.js internationalization guide](https://nextjs.org/docs/app/guides/internationalization).

## 6. struktur dan konten halaman

### 6.1 home

urutan section yang direkomendasikan:

1. **navigation** — wordmark, links, switch bahasa, CTA kontak.
2. **hero editorial + 3d** — headline, subheadline, dua CTA, visual inti cahaya.
3. **featured products** — pilihan produk yang disetujui untuk ditonjolkan; jangan mengisi dengan proyek fiktif.
4. **what we build / capabilities** — ringkasan kategori layanan yang sudah dikonfirmasi.
5. **selected work / product preview** — showcase visual, konteks dan tautan detail.
6. **approach** — cara kerja tingkat tinggi hanya jika proses ini sesuai praktik nyata perusahaan.
7. **closing CTA** — ajakan membuka percakapan.
8. **footer** — navigasi ringkas, pilihan bahasa, kontak dan legal link yang valid.

jika data produk belum siap saat pengembangan, gunakan placeholder internal yang tidak bisa dipublikasikan sebagai konten final. jangan menampilkan kartu “coming soon” berulang sebagai pengganti katalog.

### 6.2 katalog produk

fitur:
- grid produk responsif.
- pencarian berdasarkan nama dan ringkasan.
- filter kategori/platform hanya untuk taxonomy yang telah ditetapkan.
- pilihan urutan, minimal: featured (jika ditentukan manual) dan alfabetis; jangan membuat sorting berdasarkan popularitas tanpa data.
- indikator status produk yang maknanya jelas, misalnya `live demo`, `case study`, atau `internal project`, hanya bila status itu akurat.
- empty state informatif ketika hasil filter tidak ada.
- kartu tetap dapat dibuka dengan keyboard dan screen reader.

**kartu produk memuat:**
- thumbnail/screenshot atau preview yang disetujui.
- nama produk.
- deskripsi satu atau dua kalimat.
- kategori.
- status atau platform jika relevan dan terverifikasi.
- tautan detail yang jelas.

### 6.3 detail produk

susunan minimum:
1. nama produk, kategori, dan ringkasan.
2. preview utama.
3. konteks / masalah yang ingin ditangani.
4. solusi dan cara kerja.
5. fitur utama.
6. kontribusi/ruang lingkup pekerjaan yang benar-benar dilakukan.
7. platform dan teknologi yang dikonfirmasi.
8. status serta tautan demo/repository bila tersedia.
9. CTA kontak untuk kebutuhan serupa.
10. produk terkait, jika ada.

section yang tidak memiliki data jangan dipaksakan. contoh: bila belum ada metrik hasil, hilangkan metrik; jangan membuat persentase atau klaim manfaat numerik.

### 6.4 capabilities

halaman ini hanya menampilkan kategori layanan yang benar-benar dipilih perusahaan. kategori kandidat untuk dipertimbangkan, bukan daftar layanan resmi:
- web application engineering.
- desktop application engineering.
- mobile application development.
- backend, API, dan integrasi sistem.
- otomasi atau solusi perangkat terhubung.
- konsultasi teknis / prototyping.

hapus kategori yang tidak ingin dijual atau belum siap dikerjakan. hindari menyiratkan kapasitas tim, dukungan 24/7, atau layanan pemeliharaan jika belum ditetapkan.

### 6.5 about

konten yang perlu disediakan oleh pemilik:
- deskripsi resmi LENTERA DAHAYU.
- alasan/arah perusahaan yang telah disepakati.
- struktur usaha atau nama pendiri hanya jika ingin dipublikasikan.
- lokasi operasi, bila memang ingin dicantumkan.
- prinsip kerja yang mencerminkan praktik nyata.

### 6.6 contact

minimum:
- CTA untuk membahas proyek.
- kanal kontak terverifikasi: email, WhatsApp bisnis, atau formulir.
- penjelasan data apa yang dikumpulkan jika form dipakai.
- feedback state: loading, sukses, gagal, dan validasi input.

sebelum endpoint server-side tersedia, CTA dapat menuju kanal langsung yang sudah diverifikasi. jangan membuat alamat email, nomor telepon, atau akun media sosial fiktif.

## 7. user journey

### journey a — calon klien bisnis

1. pengunjung masuk dari link, pencarian, atau referensi.
2. membaca headline dan memahami fokus usaha dalam beberapa detik.
3. membuka produk unggulan yang tampak relevan.
4. melihat detail masalah, solusi, screenshot, dan batasan proyek.
5. menemukan CTA diskusi proyek.
6. membuka kanal kontak dan mengirim pesan dengan konteks yang cukup.

**risiko:** hero 3d terlalu dominan sehingga pengunjung tidak melihat produk atau CTA.  
**mitigasi:** headline dan CTA selalu berupa HTML, terlihat tanpa menunggu WebGL, dengan kontras memadai.

### journey b — developer

1. masuk langsung ke `/id/products` atau `/en/products`.
2. menggunakan pencarian atau filter.
3. membuka detail produk.
4. memeriksa fitur, platform, kontribusi, dan teknologi yang tersedia.
5. membuka demo/repository jika memang publik.

**risiko:** katalog tampak cantik tetapi tidak memberikan informasi teknis.  
**mitigasi:** tetapkan schema detail produk dan content checklist sebelum produk dapat dipublikasikan.

### journey c — pergantian bahasa

1. pengunjung membaca halaman dalam bahasa indonesia.
2. memilih `EN`.
3. aplikasi menavigasikan ke halaman padanan jika tersedia.
4. jika halaman padanan tidak tersedia, aplikasi menjelaskan atau memilih fallback yang dapat diprediksi, tanpa kehilangan konteks secara diam-diam.

### journey d — pengalaman tanpa 3d

1. WebGL tidak didukung, gagal diinisialisasi, atau pengguna memilih reduced motion.
2. poster/fallback statis muncul.
3. headline, katalog, CTA dan navigasi tetap bekerja.
4. tidak ada kontrol penting yang hanya bisa digunakan melalui objek 3d.

## 8. design system

nilai berikut adalah token awal untuk prototype. lakukan pengujian kontras dan evaluasi visual sebelum dianggap final.

### 8.1 warna

| token | nilai awal | penggunaan |
|---|---|---|
| `--color-bg` | `#090D14` | latar halaman utama |
| `--color-surface` | `#111824` | panel/kartu |
| `--color-surface-raised` | `#172232` | panel aktif atau hover |
| `--color-text` | `#F3F6FA` | teks utama |
| `--color-text-muted` | `#A5B0C0` | teks sekunder |
| `--color-line` | `#2A3545` | border/divider |
| `--color-accent` | `#8BE5FF` | aksen cahaya dan link interaktif |
| `--color-accent-strong` | `#43BFEA` | hover/fokus pada permukaan gelap |
| `--color-focus` | `#C1F1FF` | focus ring |
| `--color-error` | `#FF7777` | error, setelah lolos uji kontras |
| `--color-success` | `#86D6AD` | sukses, setelah lolos uji kontras |

aturan:
- aksen cyan digunakan hemat; teks panjang tetap putih/off-white.
- warna status tidak boleh hanya dibedakan lewat warna, sertakan label/icon/teks.
- hindari transparansi rendah yang membuat teks sulit dibaca di atas animasi.
- jangan menetapkan warna sebagai final sebelum logo dan brand asset dikonfirmasi.

### 8.2 tipografi

- pilih satu sans-serif modern untuk UI dan display, atau kombinasi display + body jika perbedaan peran benar-benar diperlukan.
- kandidat: Geist atau Inter; keputusan akhir berdasarkan lisensi, konsistensi rendering, dan kebutuhan visual.
- gunakan font lokal/next font bila cocok agar layout stabil dan ketergantungan eksternal berkurang.
- judul besar editorial boleh rapat, tetapi body copy harus nyaman dibaca.
- hindari semua teks dalam uppercase; gunakan uppercase untuk label pendek saja.

skala awal desktop:
- display: `clamp(3rem, 7vw, 6.5rem)`.
- h1 halaman dalam: `clamp(2.5rem, 5vw, 4.5rem)`.
- h2 section: `clamp(1.8rem, 3vw, 3rem)`.
- body besar: `1.125rem`.
- body: `1rem`.
- caption/metadata: minimal `0.8125rem` jika keterbacaan masih memadai.

### 8.3 layout dan spacing

- desktop: grid 12 kolom; content width maksimum sekitar 1200–1360 px sebagai titik awal.
- mobile: grid 4 kolom atau layout single-column dengan gutter konsisten.
- gutter: 20–24 px mobile, 32–48 px desktop, disesuaikan dengan ukuran viewport.
- section spacing: besar dan konsisten, bukan setiap blok memiliki jarak acak.
- kartu produk memiliki ratio preview yang konsisten atau ditetapkan berdasarkan tipe media.
- gunakan `min-height` dengan hati-hati; hindari mengunci ukuran konten berdasarkan satu viewport.

### 8.4 radius, border, dan motion

- radius kartu: 12–20 px; panel besar dapat menggunakan radius lebih tinggi bila konsisten.
- border: tipis dan redup; jangan memberi glow pada semua komponen.
- hover: perubahan kontras/posisi kecil, bukan zoom besar yang menggeser layout.
- durasi UI umum: 160–260 ms.
- transisi section: 300–700 ms bila membantu hierarki.
- animasi besar harus interruptible dan mendukung reduced motion.

### 8.5 komponen UI inti

- `Button`: primary, secondary, text/link.
- `NavigationBar`: desktop dan mobile, dengan menu yang bisa diakses keyboard.
- `LanguageSwitcher`: id/en, memiliki label yang dapat dibaca screen reader.
- `ProductCard`: thumbnail, nama, deskripsi singkat, metadata, link.
- `ProductGrid`: grid responsive.
- `ProductFilters`: search, filter, reset.
- `ProductStatus`: label teks yang dibakukan.
- `SectionHeader`: label pendek, heading, deskripsi opsional.
- `ContactCTA`: ajakan kontak.
- `Footer`: informasi dan link tervalidasi.
- `SceneFallback`: poster/fallback ketika 3d tidak dapat digunakan.
- `SkipLink`: lompat ke konten utama.
- `LocaleMessage`: struktur konten per bahasa.

## 9. spesifikasi interaksi three.js

### 9.1 peran 3d

scene 3d digunakan untuk memperkuat konsep merek pada hero, bukan untuk menampilkan semua informasi penting. scene awal yang diusulkan adalah “light engine”: inti geometris bercahaya dengan orbit tipis, depth/parallax halus, dan pergerakan berdasarkan pointer.

### 9.2 spesifikasi hero scene

**elemen:**
- bentuk inti geometris abstrak, dibuat dari geometri sederhana atau model yang telah dioptimalkan.
- maksimal beberapa orbit tipis; jumlah akhir ditetapkan lewat prototype dan pengukuran.
- satu sumber cahaya utama dan pencahayaan tambahan minimal.
- background yang tidak mengganggu keterbacaan headline.
- poster statis dengan komposisi visual serupa sebagai fallback.

**interaksi:**
- idle motion sangat pelan, tidak menyerupai loading spinner.
- desktop: rotasi/parallax sedikit mengikuti posisi pointer; gerakan dibatasi agar tidak mengganggu.
- scroll: perpindahan/rotasi terkontrol, tanpa memaksa pengguna menunggu animasi untuk melanjutkan.
- touch: jangan mensyaratkan hover; gunakan gerak idle minimal atau interaksi sentuh non-esensial.
- reduced motion: nonaktifkan pointer-follow dan idle animation; tampilkan pose statis atau rotasi yang sangat terbatas.
- scene tidak boleh menangkap klik yang seharusnya menuju CTA atau navigasi.

### 9.3 perilaku teknis

- implementasikan canvas sebagai client-only island/component; konten SEO/heading tetap dirender sebagai HTML di luar canvas.
- load scene secara lazy setelah halaman utama dapat dibaca; poster harus terlihat lebih dahulu.
- gunakan `Canvas` dengan error/fallback UI bila WebGL tidak tersedia. dokumentasi R3F menyediakan dukungan `fallback` pada Canvas: [r3f canvas](https://r3f.docs.pmnd.rs/api/canvas).
- atur pixel ratio secara konservatif; jangan selalu merender pada resolusi device maksimum.
- untuk scene yang bisa diam, uji `frameloop="demand"`; animasi yang terus bergerak hanya digunakan jika benar-benar dibutuhkan. [r3f scaling performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance).
- gunakan kembali geometry/material ketika memungkinkan.
- bersihkan event listener dan resource GPU yang tidak digunakan. Three.js menegaskan bahwa geometry, material, texture, dan render target dapat membutuhkan `dispose()` sesuai masa pakainya: [three.js disposal guide](https://threejs.org/manual/pages/how-to-dispose-of-objects.html).
- jangan menambahkan post-processing sampai scene dasar telah diuji dan perbaikan visualnya terbukti sepadan dengan biaya performa.
- jangan gunakan model eksternal atau font 3d tanpa hak penggunaan dan kebutuhan yang jelas.

### 9.4 batasan MVP

- satu scene 3d utama pada halaman home.
- tidak ada interaksi 3d wajib untuk memahami katalog.
- tidak ada scene 3d terpisah pada setiap kartu produk.
- tidak ada audio autoplay.
- tidak ada video background berat secara default.
- tidak ada efek scroll hijacking atau mencegah pengguna menggulir halaman.

## 10. rekomendasi stack dan arsitektur

### 10.1 stack utama

| lapisan | pilihan awal | alasan |
|---|---|---|
| framework | Next.js App Router | routing, metadata, dan rendering halaman terintegrasi |
| bahasa | TypeScript + TSX | tipe data untuk konten dan komponen |
| styling | Tailwind CSS | implementasi token dan layout konsisten |
| 3d | Three.js + React Three Fiber | scene 3d deklaratif di dalam ekosistem React |
| helpers 3d | Drei, bila dibutuhkan | helper kamera, kontrol, dan utilitas scene |
| motion UI | Motion for React, atau CSS transitions untuk hal sederhana | animasi UI di luar scene 3d |
| data MVP | file TypeScript/JSON lokal | mudah diaudit, tidak memerlukan server database |
| deployment | Vercel atau hosting Next.js yang kompatibel | dipilih setelah kebutuhan deployment dan biaya diperiksa |

**catatan:** jangan gunakan beberapa library animasi untuk hal yang sama tanpa alasan. motion library hanya untuk transisi DOM; animasi objek 3d dikelola dalam scene R3F/Three.js.

### 10.2 prinsip rendering

- gunakan Server Components untuk halaman dan konten yang tidak memerlukan interaksi browser.
- tandai Client Components hanya di area yang memerlukan state, pointer, filter interaktif, atau canvas.
- `Canvas`, pointer tracking, dan akses browser harus berada di sisi client.
- pisahkan scene 3d dari hero copy, sehingga kegagalan inisialisasi WebGL tidak merusak layout utama.
- jangan mengubah seluruh halaman menjadi client component hanya untuk menggerakkan satu objek 3d.

### 10.3 usulan struktur direktori

```text
src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # home
│   │   ├── products/
│   │   │   ├── page.tsx                # catalog
│   │   │   └── [slug]/page.tsx         # product detail
│   │   ├── capabilities/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── privacy/page.tsx
│   ├── not-found.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── mobile-navigation.tsx
│   │   └── site-footer.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── featured-products.tsx
│   │   ├── capabilities-section.tsx
│   │   └── contact-section.tsx
│   ├── products/
│   │   ├── product-card.tsx
│   │   ├── product-grid.tsx
│   │   ├── product-filters.tsx
│   │   └── product-detail-content.tsx
│   ├── 3d/
│   │   ├── hero-scene-loader.tsx
│   │   ├── light-engine-scene.tsx
│   │   ├── scene-fallback.tsx
│   │   └── scene-error-boundary.tsx
│   └── ui/
│       ├── button.tsx
│       ├── section-heading.tsx
│       ├── language-switcher.tsx
│       ├── skip-link.tsx
│       └── status-label.tsx
├── content/
│   ├── id/
│   │   ├── messages.ts
│   │   └── products.ts
│   └── en/
│       ├── messages.ts
│       └── products.ts
├── lib/
│   ├── i18n.ts
│   ├── products.ts
│   ├── metadata.ts
│   └── contact.ts
├── types/
│   └── product.ts
└── public/
    ├── images/
    ├── models/
    ├── icons/
    └── og/
```

struktur di atas bersifat usulan. jika library i18n memerlukan format file atau struktur tambahan, sesuaikan dengan dokumentasi library yang dipilih. hindari menambah folder kosong yang tidak dipakai.

### 10.4 schema data produk

setiap produk sebaiknya memiliki schema yang konsisten. field berikut dapat dibuat opsional bila tidak selalu relevan.

```ts
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
  coverImage: string;
  content: Record<Locale, ProductContent | null>;
}
```

**aturan data:**
- `published` hanya `true` jika isi dan semua tautannya sudah ditinjau.
- status harus mencerminkan kondisi nyata; jangan menandai demo live bila demo tidak dapat dibuka.
- `technologies`, `platform`, dan `roleAndScope` tidak boleh disimpulkan hanya dari screenshot atau nama proyek.
- jangan masukkan credential, secret, URL preview privat, data klien, atau detail internal yang tidak mendapat izin untuk dipublikasikan.
- validasi URL demo/repository dan gunakan rel keamanan untuk link eksternal bila membuka tab baru.
- `coverImage` harus mengacu pada aset yang dimiliki atau diizinkan untuk digunakan.
- satu produk yang belum diterjemahkan tidak boleh menghasilkan halaman bahasa kosong.

## 11. kebutuhan fungsional

| id | kebutuhan | prioritas | kriteria penerimaan |
|---|---|---|---|
| fr-01 | navigasi utama | p0 | seluruh item navigasi mengarah ke route yang benar; menu mobile bisa digunakan dengan keyboard dan sentuhan |
| fr-02 | bahasa indonesia/inggris | p0 | switch bahasa bekerja, route locale konsisten, konten yang belum diterjemahkan memiliki fallback yang jelas |
| fr-03 | featured products | p0 | hanya produk dengan `published=true` dan dipilih sebagai featured tampil di home |
| fr-04 | katalog lengkap | p0 | katalog memuat seluruh produk published, search/filter berjalan sesuai data yang tersedia |
| fr-05 | detail produk | p0 | tiap produk published mempunyai halaman unik, metadata dan konten dasar yang valid |
| fr-06 | 3d hero | p0 | scene dapat dimuat dan gagal dengan graceful fallback tanpa menyembunyikan headline/CTA |
| fr-07 | contact CTA | p0 | setiap CTA menuju kanal terverifikasi; tidak ada href kosong atau placeholder yang tampak final |
| fr-08 | responsive layout | p0 | layout dapat dipakai pada lebar mobile, tablet, dan desktop tanpa horizontal overflow yang tidak disengaja |
| fr-09 | SEO metadata | p1 | tiap halaman memiliki title/description sesuai locale serta URL canonical dan alternate locale yang benar |
| fr-10 | sitemap/robots | p1 | halaman publik yang layak diindeks disertakan; halaman privat atau draft tidak masuk sitemap |
| fr-11 | formulir kontak | p1 | hanya jika kanal ini dipilih; validasi, loading, sukses, gagal dan proteksi spam tersedia |
| fr-12 | analytics | p2 | hanya setelah tujuan metrik, privasi, dan provider diputuskan |

## 12. kebutuhan nonfungsional

### 12.1 performa

target awal untuk diuji, bukan jaminan:
- Core Web Vitals pada persentil ke-75 ketika data lapangan tersedia: LCP ≤ 2,5 detik, INP ≤ 200 ms, CLS ≤ 0,1.
- headline, CTA, dan struktur halaman utama dapat terlihat sebelum scene 3d selesai dimuat.
- tidak ada layout shift besar saat font, screenshot, atau canvas dimuat.
- bundle 3d dipisahkan dari bagian katalog statis jika strategi bundling memungkinkan.
- gambar produk disediakan dalam ukuran yang sesuai dengan kebutuhan tampilan; gunakan image optimization dan format modern bila cocok.
- animasi tidak memicu kerja GPU terus-menerus saat tidak terlihat atau tidak diperlukan.

Google menjelaskan ambang Core Web Vitals tersebut sebagai target pengalaman pengguna yang baik: [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=id). React Three Fiber juga menyarankan on-demand rendering untuk scene yang dapat diam, penggunaan ulang resource, dan perhatian terhadap biaya WebGL: [scaling performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance).

### 12.2 aksesibilitas

- targetkan WCAG 2.2 level AA sebagai pedoman implementasi.
- seluruh aksi penting dapat dijalankan dengan keyboard.
- focus state harus terlihat dan tidak bergantung pada perubahan warna yang samar.
- gunakan heading berurutan, landmark semantik, label input, alt text bermakna, dan nama link yang jelas.
- jangan menyampaikan informasi hanya lewat warna atau gerakan.
- dukung `prefers-reduced-motion` untuk transisi UI dan scene 3d.
- hindari teks yang diletakkan langsung di atas area animasi dengan kontras berubah-ubah.
- matikan atau sederhanakan efek pointer di perangkat touch.

### 12.3 keamanan dan privasi

- jangan pernah menaruh API key, token, credential, secret, atau data sensitif di frontend atau repository.
- validasi dan sanitasi data dari formulir di server jika formulir menggunakan backend.
- jika ada form, jelaskan tujuan penggunaan data dan kumpulkan hanya data yang diperlukan.
- jangan menambahkan analytics atau tracker non-esensial sebelum pilihan privasi ditinjau.
- validasi semua link eksternal dan cegah URL berbahaya.
- jangan mengunggah screenshot, logo, atau informasi proyek klien tanpa izin yang sesuai.

### 12.4 kompatibilitas dan degradasi

- mendukung browser modern desktop dan mobile yang menjadi target setelah ditetapkan.
- konten utama tidak boleh bergantung pada WebGL.
- jika WebGL tidak tersedia atau scene error, gunakan poster statis, sembunyikan kontrol scene yang tidak lagi berguna, dan pertahankan CTA.
- menu, search/filter dan form harus dapat dijalankan tanpa hover.

## 13. SEO dan discoverability

- metadata title dan description unik untuk home, katalog, dan tiap detail produk.
- canonical URL serta alternate locale/hreflang untuk halaman yang benar-benar memiliki padanan terjemahan.
- Open Graph image yang konsisten untuk identitas perusahaan dan dapat dikustomisasi per produk.
- sitemap memuat hanya route yang dipublikasikan.
- gunakan nama produk dan deskripsi yang akurat; hindari keyword stuffing.
- tambahkan structured data organisasi hanya jika informasi resmi yang diperlukan tersedia dan valid.
- alt text menjelaskan fungsi/gambar, bukan mengulang kata kunci secara berlebihan.
- gunakan slug singkat, stabil, dan mudah dibaca.
- metadata Next.js dapat diatur melalui `metadata` atau `generateMetadata` di Server Components: [metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

## 14. konten yang wajib dikumpulkan sebelum publikasi

### identitas perusahaan
- nama resmi dan cara penulisan merek yang final.
- deskripsi perusahaan yang disetujui.
- logo utama, icon, serta aturan penggunaan jika tersedia.
- daftar layanan yang memang ditawarkan.
- kontak resmi dan lokasi bila akan ditampilkan.
- akun sosial resmi bila ada.

### data setiap produk
- nama dan slug.
- ringkasan 1–2 kalimat dalam kedua bahasa.
- kategori dan status terkini.
- screenshot/video/demo yang boleh dipublikasikan.
- masalah dan solusi yang dapat dijelaskan dengan jujur.
- fitur utama.
- ruang lingkup yang dikerjakan dan peran yang benar-benar dijalankan.
- platform dan teknologi yang dikonfirmasi.
- tautan demo, dokumentasi, atau repository jika publik.
- batasan atau status pengembangan jika relevan.
- izin pemilik data/klien jika konten bersifat sensitif.

### aturan publikasi

- buat checklist review sebelum mengubah sebuah produk menjadi published.
- label internal seperti `[isi nama produk]` atau `[masukkan kontak]` tidak boleh terlihat di versi produksi.
- jangan membuat testimoni dummy, logo klien palsu, review palsu, statistik, atau hasil kuantitatif tanpa bukti.
- jangan menampilkan repository privat sebagai tautan publik.
- bila belum ada produk yang siap dipublikasikan, rilis halaman perusahaan dengan copy jujur dan beri tahu bahwa showcase akan diperbarui; jangan memalsukan katalog.

## 15. tahapan implementasi

### fase 0 — discovery dan content inventory

**output:**
- daftar produk nyata beserta status publikasi.
- identitas dan kontak resmi.
- daftar layanan final.
- aset yang boleh digunakan.
- keputusan default language dan domain.

**exit criteria:** tidak ada field penting yang dianggap fakta tanpa konfirmasi pemilik.

### fase 1 — design foundation

**pekerjaan:**
- tetapkan token warna, tipografi, grid, spacing, radius, dan motion.
- wireframe home, katalog, detail produk, about, capabilities, dan contact.
- rancang state mobile, loading, empty, error, dan fallback.

**output:** mini design system dan prototype navigasi responsif.

### fase 2 — technical foundation

**pekerjaan:**
- setup Next.js App Router + TypeScript + Tailwind.
- konfigurasi locale routing `/id` dan `/en`.
- definisikan product schema dan data dummy khusus development yang tidak bisa ikut publikasi.
- bangun komponen layout, metadata, dan sistem konten.

**exit criteria:** halaman dapat dirender per locale, data produk tervalidasi, dan server/client component boundary jelas.

### fase 3 — katalog dan halaman inti

**pekerjaan:**
- implementasi home editorial, featured products, katalog, detail produk, about/capabilities, dan contact.
- implementasi search/filter dan empty state.
- lengkapi responsive layout, keyboard navigation, serta metadata per route.

**exit criteria:** seluruh alur utama berfungsi tanpa 3d.

### fase 4 — prototype dan integrasi 3d

**pekerjaan:**
- buat satu “light engine” scene.
- tambahkan pointer-follow/parallax yang dibatasi.
- implementasikan lazy loading, poster fallback, reduced motion, dan error boundary.
- ukur biaya render sebelum menambahkan efek lebih lanjut.

**exit criteria:** kegagalan WebGL tidak menghalangi penggunaan halaman; mobile tetap responsif.

### fase 5 — QA, SEO, dan deployment

**pekerjaan:**
- uji link, locale switching, responsive, keyboard, reduced motion, missing images, serta fallback scene.
- cek metadata, canonical, alternate locale, sitemap, robots, dan OG image.
- jalankan pemeriksaan aksesibilitas dan performa.
- verifikasi semua konten/kontak sebelum rilis.

**exit criteria:** tidak ada blocker fungsional, konten placeholder tidak terlihat, dan semua tautan publik telah diverifikasi.

### fase 6 — iterasi setelah rilis

pertimbangkan hanya berdasarkan kebutuhan nyata:
- CMS untuk mengelola katalog.
- formulir dengan endpoint server-side dan notifikasi.
- analytics minimal yang telah ditinjau dari sisi privasi.
- case study yang lebih mendalam.
- konten artikel/insight jika ada kapasitas editorial konsisten.

## 16. acceptance checklist sebelum rilis

### brand dan konten
- [ ] penulisan nama LENTERA DAHAYU dan positioning telah disetujui.
- [ ] seluruh copy tersedia dalam id/en atau memiliki fallback yang jelas.
- [ ] setiap produk published memiliki data minimum dan visual yang berizin.
- [ ] tidak ada pencapaian, testimoni, klien, stack, atau statistik yang tidak diverifikasi.
- [ ] kontak dan CTA mengarah ke kanal yang benar.

### fungsi
- [ ] navigasi desktop dan mobile bekerja.
- [ ] switch bahasa mempertahankan konteks halaman jika padanan tersedia.
- [ ] katalog search/filter berfungsi dan memiliki empty state.
- [ ] semua detail produk dapat dibuka melalui URL langsung.
- [ ] link demo/repository telah dites.
- [ ] tidak ada placeholder atau tombol tanpa fungsi di produksi.

### 3d dan motion
- [ ] scene dimuat secara terpisah dari konten penting.
- [ ] poster fallback terlihat saat scene belum siap.
- [ ] fallback bekerja saat WebGL gagal.
- [ ] reduced motion dipatuhi.
- [ ] scene tidak menghalangi CTA, scroll, atau navigasi.
- [ ] resource dan event listener dibersihkan pada lifecycle yang tepat.

### kualitas
- [ ] layout diuji pada mobile, tablet, dan desktop.
- [ ] tidak ada horizontal overflow yang tidak disengaja.
- [ ] keyboard focus jelas dan semua aksi penting dapat dijalankan tanpa pointer.
- [ ] kontras teks dan alt text diperiksa.
- [ ] metadata, canonical, locale alternates, sitemap, dan OG preview benar.
- [ ] Core Web Vitals/performance diuji; hasil dicatat, bukan diasumsikan.
- [ ] console dan network bebas dari error yang menghalangi alur utama.

## 17. risiko dan mitigasi

| risiko | dampak | mitigasi |
|---|---|---|
| terlalu fokus pada 3d | produk dan CTA sulit ditemukan | prioritaskan hierarchy editorial, HTML content, dan satu scene utama |
| scene berat di mobile | scrolling tersendat dan baterai terkuras | batasi geometri/efek, adaptasi DPR, lazy-load, on-demand rendering bila cocok, dan fallback statis |
| data katalog belum lengkap | showcase terlihat kosong atau tidak kredibel | lakukan content inventory sebelum desain final; rilis hanya data yang disetujui |
| bilingual tidak konsisten | terjemahan tertinggal dan SEO kacau | schema konten per locale, checklist review, route padanan, metadata per bahasa |
| semua halaman dibuat client-side | bundle besar dan konten lambat terlihat | gunakan Server Components secara default dan client island untuk interaksi |
| informasi klien bocor | risiko reputasi dan kontrak | cek izin publikasi, hilangkan data sensitif, gunakan link yang memang boleh dibuka |
| terlalu banyak dependency | maintenance dan bundle lebih besar | tambahkan library hanya saat kebutuhan jelas; pilih satu sistem animasi DOM |

## 18. keputusan yang masih perlu dikonfirmasi

hal berikut sengaja dibiarkan terbuka karena belum tersedia dalam brief:

1. nama legal, struktur usaha, dan deskripsi resmi LENTERA DAHAYU.
2. logo final atau kebutuhan perancangan logo.
3. daftar produk yang akan ditampilkan, status saat ini, dan produk mana yang boleh ditonjolkan.
4. daftar layanan yang benar-benar dijual.
5. kanal kontak resmi, domain, akun sosial, dan lokasi yang hendak dipublikasikan.
6. apakah setiap produk memiliki demo publik, repository, screenshot, atau studi kasus.
7. apakah situs perlu formulir kontak atau cukup tautan ke kanal yang sudah ada.
8. apakah katalog akan dikelola lewat kode pada tahap awal atau perlu CMS.
9. bahasa default final dan preferensi istilah teknis pada versi inggris.
10. hosting, anggaran operasional, analitik, dan persyaratan privasi.

## 19. ringkasan keputusan implementasi

- **produk:** website profil perusahaan + showcase + katalog detail.
- **visual:** premium editorial dengan 3d sinematik minimal sebagai aksen utama.
- **audiens:** calon klien bisnis dan developer.
- **bahasa:** indonesia dan inggris dengan route `/id` dan `/en`.
- **framework:** Next.js App Router + TypeScript + Tailwind CSS.
- **3d:** Three.js melalui React Three Fiber; Drei hanya jika membantu kebutuhan nyata.
- **konten MVP:** file lokal bertipe, tanpa database/CMS sampai dibutuhkan.
- **MVP 3d:** satu scene hero, poster fallback, reduced motion, lazy-load, dan tanpa scroll hijacking.
- **prioritas nomor satu:** produk nyata, detail yang informatif, CTA valid, aksesibilitas, dan performa.
- **aturan konten:** tidak ada informasi perusahaan atau pencapaian yang direkayasa.

---

## referensi teknis

1. [next.js — app router](https://nextjs.org/docs/app) — routing, server/client components, metadata, dan struktur aplikasi.
2. [next.js — internationalization](https://nextjs.org/docs/app/guides/internationalization) — pola route locale dan strategi bahasa.
3. [next.js — metadata and open graph images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) — metadata per halaman dan social preview.
4. [react three fiber — canvas](https://r3f.docs.pmnd.rs/api/canvas) — canvas, fallback, pixel ratio, dan render loop.
5. [react three fiber — scaling performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance) — on-demand rendering dan optimasi scene.
6. [three.js — disposing of objects](https://threejs.org/manual/pages/how-to-dispose-of-objects.html) — lifecycle resource GPU.
7. [google search central — core web vitals](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=id) — target LCP, INP, dan CLS.
