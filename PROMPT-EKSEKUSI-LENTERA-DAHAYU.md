# prompt eksekusi — website LENTERA DAHAYU

salin seluruh prompt di bawah ini ke antigravity, codex, atau coding agent yang bekerja langsung di repository proyek.

---

## PERAN DAN TUJUAN

bertindak sebagai senior product designer, senior frontend engineer, dan technical lead. bangun website production-minded untuk **LENTERA DAHAYU**, usaha di bidang **software engineering & digital solutions**.

website harus menggabungkan:
- **premium editorial art direction** — bukan template landing page generik.
- pengalaman 3d yang khas menggunakan **three.js melalui react three fiber**, tetapi terukur dan tidak mengorbankan performa.
- homepage yang menonjolkan showcase produk, katalog produk lengkap, dan halaman detail produk.
- bahasa indonesia dan inggris, dengan route `/id` dan `/en`.
- dua audiens utama: calon klien bisnis dan developer.

dokumen kebutuhan utama adalah `PRD-LENTERA-DAHAYU.md`. baca seluruh dokumen itu sebelum mengubah kode. jika file tersebut tidak ditemukan, periksa file proyek dan konteks repository; jangan mengarang detail PRD yang tidak tersedia. spesifikasi di prompt ini menjelaskan prioritas eksekusi.

## CARA KERJA — WAJIB

1. **periksa keadaan repository terlebih dahulu.** baca struktur folder, `package.json`, lockfile, konfigurasi, aset, komponen, dan implementasi yang sudah ada. identifikasi apakah proyek sudah berjalan atau masih kosong.
2. bila proyek sudah ada, lanjutkan arsitektur yang kompatibel dan pertahankan fitur yang bekerja. jangan menghapus atau menimpa pekerjaan lama tanpa alasan teknis yang jelas.
3. susun rencana implementasi singkat berdasarkan temuan, lalu **langsung kerjakan**. jangan berhenti setelah memberi rencana, wireframe, atau daftar rekomendasi.
4. implementasikan fitur dalam urutan: fondasi dan design system → routing bilingual → layout dan homepage → katalog dan detail produk → interaksi 3d → SEO/accessibility → pengujian.
5. jalankan pemeriksaan yang tersedia: lint, typecheck, build, serta test bila dikonfigurasi. perbaiki error yang disebabkan perubahan ini sebelum selesai.
6. jangan mengklaim fitur, test, build, atau deployment berhasil jika belum benar-benar dijalankan. bila suatu langkah terhalang, jelaskan kondisi dan sisa pekerjaan secara spesifik.
7. gunakan dependency secukupnya. periksa versi dan dokumentasi resmi yang sesuai dengan proyek; jangan memasang library hanya karena tren atau menggandakan fungsi library yang sudah ada.

## ATURAN AKURASI KONTEN

informasi faktual yang sudah dikonfirmasi:
- nama merek: **LENTERA DAHAYU**.
- bidang: **software engineering & digital solutions**.
- website ditujukan bagi calon klien bisnis dan developer.
- bahasa: indonesia dan inggris.
- arah visual: premium editorial dengan satu pengalaman 3d utama.
- produk yang pernah dibuat akan ditampilkan sebagai showcase dan katalog.

informasi yang **belum dikonfirmasi** mencakup daftar/nama produk, layanan final, logo resmi, pendiri atau struktur usaha, alamat, nomor telepon, email, akun sosial, klien, testimoni, statistik pencapaian, teknologi tiap produk, status demo, repository, serta domain. jangan mengarang atau menyajikannya seolah fakta.

jika data produk/aset/kontak belum ditemukan di repository:
- buat schema dan struktur konten typed yang siap diisi, serta dokumentasikan field yang dibutuhkan.
- jangan memublikasikan data dummy, testimoni palsu, statistik rekaan, logo klien palsu, atau tautan demo/repository fiktif.
- jangan tampilkan placeholder internal seperti `[nama produk]` di UI produksi.
- jangan membuat kartu proyek fiktif demi memenuhi layout.
- rancang empty state yang tetap terlihat disengaja, ringkas, dan jujur sampai konten nyata dimasukkan.
- jangan membuat CTA dengan `href="#"`, email palsu, nomor WhatsApp palsu, atau tombol yang tidak bekerja. jika kanal kontak belum tersedia, jangan menyamarkannya sebagai kontak aktif; tandai di dokumentasi sebagai konfigurasi yang harus dilengkapi.
- jangan mengasumsikan layanan selain bidang yang telah dikonfirmasi. kategori layanan kandidat hanya boleh ditampilkan jika memang sudah tersedia/ditetapkan di konten repository.

copy kreatif boleh digunakan sebagai draft, bukan klaim faktual. arah copy awal yang diperbolehkan untuk disesuaikan:
- id headline: “ide yang dirancang menjadi sistem.”
- en headline: “ideas, engineered into systems.”
- deskriptor merek: “software engineering & digital solutions.”
- CTA navigasi: “jelajahi produk” / “explore products”.
- CTA kontak hanya tampil sebagai aksi aktif jika kanal tujuan yang benar sudah dikonfigurasi.

## ARAH ART DIRECTION

buat visual seperti studio engineering independen yang teliti, tenang, berkarakter, dan berorientasi pada hasil kerja. hindari tampilan template startup, dashboard admin, landing page SaaS generik, atau sci-fi yang terlalu ramai.

konsep visual: **“the light, made useful”** — interpretasi kreatif dari kata “lentera”, bukan klaim filosofi resmi perusahaan.

karakter:
- editorial typography yang kuat, whitespace luas, grid rapi, hierarki konten jelas, dan komposisi asimetris secukupnya.
- latar midnight navy/charcoal dingin, aksen cyan/ice blue hemat untuk cahaya 3d, focus state, atau link aktif.
- batas/pemisah tipis; gunakan blur, glass, glow, grain, dan shadow dengan restraint.
- visual produk nyata menjadi bukti utama; render 3d abstrak tidak boleh menggantikan screenshot produk.
- tidak memakai emoji sebagai ikon antarmuka. gunakan ikon konsisten atau SVG ringan jika diperlukan.
- desain harus terasa premium dan unik, tetapi keterbacaan, navigasi, dan katalog tetap menjadi prioritas.

mulai dari token berikut, lalu sesuaikan lewat implementasi dan cek kontras:
- background: `#090D14`
- surface: `#111824`
- raised surface: `#172232`
- text: `#F3F6FA`
- muted text: `#A5B0C0`
- border: `#2A3545`
- accent: `#8BE5FF`
- accent strong: `#43BFEA`
- focus: `#C1F1FF`

font boleh menggunakan Geist atau Inter sesuai stack dan lisensi. utamakan font yang dimuat efisien; hindari font eksternal yang tidak perlu. gunakan `clamp()` untuk display typography, skala yang nyaman untuk body, dan jarak responsif konsisten.

## STACK DAN ARSITEKTUR

jika repository belum menetapkan stack yang berbeda, gunakan:
- next.js app router.
- react + typescript/tsx.
- tailwind css.
- three.js + react three fiber; gunakan drei hanya jika membantu kebutuhan yang benar-benar ada.
- CSS transitions atau satu library motion yang kompatibel untuk interaksi DOM; jangan gunakan beberapa library untuk fungsi yang sama.
- data produk statis bertipe di file lokal untuk MVP; backend, database, autentikasi, CMS, checkout, dan analytics tidak termasuk kecuali PRD atau repository menunjukkan kebutuhan nyata.

prinsip implementasi:
- gunakan server components secara default; hanya bagian interaktif yang menjadi client components.
- scene canvas 3d harus terisolasi dari teks hero dan konten SEO.
- jangan mengubah seluruh aplikasi menjadi client component hanya untuk animasi hero.
- hindari `any` sebisa mungkin; definisikan tipe data yang jelas.
- gunakan semantic HTML, komponen yang dapat digunakan ulang, dan pola error/loading/empty state yang jelas.
- jangan membuat abstraksi berlebihan, folder kosong, atau komponen yang tidak dipakai.

struktur direktori boleh disesuaikan dengan konvensi repo, tetapi pisahkan dengan jelas:
- `app/[locale]/` untuk halaman bahasa.
- `components/layout/` untuk header, mobile nav, footer.
- `components/sections/` untuk hero, featured products, dan section homepage.
- `components/products/` untuk product card, grid, filters, dan detail.
- `components/3d/` untuk scene loader, scene utama, fallback, serta error handling.
- `components/ui/` untuk button, section heading, language switcher, skip link, dan label.
- `content/id/` dan `content/en/` untuk copy/produk per bahasa.
- `types/` dan `lib/` untuk schema, query, locale, metadata, dan helper.
- `public/images/` dan folder aset relevan untuk media yang sah digunakan.

jangan memaksakan struktur ini jika repository sudah memiliki konvensi yang baik. adaptasikan dan hindari duplikasi.

## ROUTING DAN BAHASA

buat route bilingual dengan prefix eksplisit:
- `/id` dan `/en` — home.
- `/id/products` dan `/en/products` — katalog.
- `/id/products/[slug]` dan `/en/products/[slug]` — detail produk.
- `/id/capabilities` dan `/en/capabilities` — kapabilitas, hanya untuk layanan yang telah disetujui.
- `/id/about` dan `/en/about` — profil, hanya dengan data yang tersedia.
- `/id/contact` dan `/en/contact` — kontak.

bahasa default awal adalah indonesia kecuali konfigurasi/repository menyatakan lain. implementasikan switch bahasa agar mempertahankan halaman padanan yang tersedia, bukan selalu kembali ke home. jika padanan produk belum tersedia, fallback harus jelas dan tidak membuat halaman kosong. semua UI utama, metadata, status, validasi, empty state, serta label navigasi harus diterjemahkan konsisten.

## KEBUTUHAN HOMEPAGE

buat urutan dan prioritas visual berikut:
1. **navigation** — wordmark teks sementara yang elegan jika logo resmi belum ada; link katalog/kapabilitas/about/contact sesuai data; switch bahasa jelas.
2. **hero editorial + light engine 3d** — headline, deskriptor, CTA katalog dan CTA kontak yang hanya aktif jika tujuannya valid. teks harus tampil sebelum scene 3d selesai dimuat.
3. **featured work/products** — render hanya produk terverifikasi dengan `published: true` dan `featured: true`.
4. **selected work / catalogue preview** — jelaskan jalur eksplorasi katalog dan tampilkan produk nyata jika ada.
5. **capabilities** — hanya kategori layanan yang telah disetujui, jangan mengasumsikan semua kategori kandidat adalah layanan resmi.
6. **approach/about** — hanya copy yang aman dan tidak menyiratkan struktur tim atau metode kerja fiktif.
7. **closing CTA** — gunakan kontak tervalidasi saja.
8. **footer** — link valid dan switch bahasa; jangan menciptakan alamat atau sosial media.

jangan membuat section panjang penuh slogan. setiap section harus menjawab kebutuhan pengguna dan menjaga alur: mengenal perusahaan → melihat karya → memahami relevansi → mengambil aksi.

## KATALOG DAN DETAIL PRODUK

katalog harus mendukung:
- grid responsif yang kuat secara visual.
- pencarian nama dan ringkasan.
- filter kategori/status/platform hanya jika field tersebut tersedia dan nilainya terverifikasi.
- reset filter dan empty state yang bermanfaat.
- akses keyboard; card link punya nama aksesibel.
- produk unpublished tidak boleh tampil di public listing, home, sitemap, atau hasil pencarian internal.

minimum schema produk bertipe, sesuaikan jika sudah ada schema pada repository:
- `id`, `slug`, `category`, `status`, `featured`, `published`, `coverImage`.
- konten per locale: `name`, `summary`, optional `problem`, `solution`, `features`, `roleAndScope`, `platform`, `technologies`, `demoUrl`, `repositoryUrl`, `screenshots`, serta bahasa konten.
- gunakan field opsional jika informasi tidak relevan/belum dikonfirmasi; jangan memaksa semua section muncul di halaman.
- periksa format link dan jangan mengungkap repository privat, data klien, credential, atau informasi internal.

halaman detail produk: judul/ringkasan, preview, problem/context, solusi, fitur, kontribusi nyata, platform/teknologi yang dikonfirmasi, status, demo/repository bila valid, CTA kontak valid, serta produk terkait bila ada. hilangkan section yang tidak punya data; jangan menggantinya dengan klaim atau metrik fiktif.

## SPESIFIKASI THREE.JS

implementasikan satu scene utama bernama **Light Engine** di hero:
- bentuk abstrak geometris dengan inti cahaya, beberapa orbit tipis, depth, dan material terkontrol.
- karakter visual elegan, bukan objek sci-fi berlebihan.
- animasi idle pelan; pointer parallax/rotasi desktop kecil dan dibatasi; scroll response halus jika benar-benar memperkuat narasi.
- jangan memblokir pointer event pada CTA atau navigasi; canvas tidak boleh menangkap input yang diperlukan elemen HTML.
- pada touch/mobile, jangan mensyaratkan hover; sederhanakan animasi dan interaksi.
- dukung `prefers-reduced-motion`: nonaktifkan pointer-follow dan idle motion atau tampilkan pose statis.
- siapkan poster/fallback statis yang tampak disengaja sebelum scene dimuat, saat WebGL tidak tersedia, atau jika scene melempar error.
- lakukan dynamic/lazy loading untuk bundle scene; hindari menunda headline/CTA atau konten utama.
- batasi pixel ratio/resolusi render; gunakan geometri/material secukupnya; reuse resource.
- evaluasi on-demand rendering jika scene tidak harus bergerak terus-menerus. bila memakai continuous animation, pastikan ada alasan dan hentikan/kurangi kerja ketika scene di luar viewport atau tab tidak aktif sejauh praktis.
- bersihkan listeners, geometries, materials, textures, dan resource GPU sesuai lifecycle.
- jangan menambahkan post-processing, model eksternal besar, physics, audio autoplay, atau banyak canvas tanpa justifikasi dan pengujian.
- jangan gunakan scroll hijacking.

3d bersifat dekoratif dan tidak boleh menjadi satu-satunya tempat informasi penting. heading, deskripsi, link, produk, dan CTA wajib berupa HTML semantik.

## SEO, ACCESSIBILITY, DAN RESPONSIVENESS

SEO:
- metadata title/description sesuai locale di setiap halaman.
- canonical serta alternate-language/hreflang hanya untuk route locale yang benar-benar punya padanan.
- Open Graph metadata/image dengan aset yang tersedia dan hak penggunaan jelas.
- sitemap hanya menyertakan halaman publik yang valid dan produk published.
- jangan memasukkan draft/unpublished data atau mengarang data structured organization.

accessibility:
- targetkan WCAG 2.2 AA sebagai pedoman.
- semantic HTML, satu H1 per halaman bila sesuai struktur, heading berurutan, skip link, alt text, label form, dan focus state terlihat.
- seluruh navigasi, switch bahasa, pencarian, filter, dan CTA dapat digunakan melalui keyboard dan touch.
- jangan mengandalkan hover, warna, atau gerakan saja untuk menyampaikan informasi.
- hormati reduced motion dan cek kontras teks terhadap latar.

responsive:
- uji layout ponsel, tablet, laptop, dan layar besar.
- hindari horizontal overflow yang tidak disengaja, teks terlalu kecil, target sentuh sempit, dan hero yang menghabiskan seluruh layar tanpa CTA yang mudah ditemukan.
- pastikan katalog tetap mudah digunakan pada mobile.

## STRATEGI PERFORMA

- konten HTML utama harus dapat dibaca tanpa menunggu WebGL.
- gambar pakai ukuran yang sesuai, optimasi format dan loading; tentukan dimensi/aspect ratio untuk mengurangi layout shift.
- pisahkan bundle 3d dari halaman katalog sejauh tooling memungkinkan.
- jangan render canvas pada halaman yang tidak memerlukannya.
- hindari layout thrashing, animasi layout yang tidak perlu, efek blur penuh layar dan bayangan dinamis berat.
- jangan mengasumsikan target performa sudah tercapai; jalankan Lighthouse atau alat yang tersedia dan catat hasil aktual bila memungkinkan.
- target awal Core Web Vitals untuk diuji: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 pada persentil ke-75 saat data lapangan tersedia. hasil laboratorium tidak boleh disebut sebagai data lapangan.

## KONTAK DAN PRIVASI

implementasikan CTA kontak hanya setelah kanal yang benar tersedia. bila belum, siapkan konfigurasi bertipe dan tulis kebutuhan yang belum dilengkapi di README/daftar handoff; jangan membuat kontak palsu. jika formulir dibuat, input harus divalidasi, ada state loading/sukses/gagal, penjelasan penggunaan data, proteksi server-side yang sesuai, dan endpoint nyata. jangan berpura-pura mengirim formulir jika belum terhubung ke backend/kanal pengiriman.

jangan menambahkan analytics, tracker, database, auth, CMS, atau server contact endpoint tanpa kebutuhan/konfigurasi yang jelas.

## PENGUJIAN DAN DEFINITION OF DONE

sebelum menyatakan selesai, verifikasi:

**fungsional**
- [ ] route `/id` dan `/en` bisa dibuka langsung.
- [ ] switch bahasa mempertahankan konteks jika padanan tersedia.
- [ ] navigasi desktop/mobile berfungsi.
- [ ] katalog search/filter/reset dan empty state bekerja.
- [ ] hanya produk published muncul di UI publik dan sitemap.
- [ ] setiap halaman detail produk punya route stabil dan metadata.
- [ ] tidak ada href kosong, tombol mati, atau form palsu.
- [ ] link demo/repository yang ada sudah tervalidasi.

**visual dan interaksi**
- [ ] brand terasa premium editorial, bukan template generik.
- [ ] hierarchy heading/CTA jelas dan katalog mudah ditemukan.
- [ ] scene Light Engine mengikuti art direction dan tidak membajak interaksi.
- [ ] fallback terlihat saat loading/error/WebGL unavailable.
- [ ] reduced motion dan pengalaman touch diterapkan.
- [ ] layout konsisten di beberapa ukuran viewport.

**kualitas teknis**
- [ ] lint/typecheck/build dijalankan dan error baru diperbaiki.
- [ ] tidak ada error console yang menghalangi flow inti.
- [ ] alt text, focus state, contrast, dan keyboard navigation diperiksa.
- [ ] metadata, canonical/alternate, sitemap, dan OG diuji.
- [ ] tidak ada informasi perusahaan, produk, teknologi, klien, testimoni, statistik, alamat atau kontak yang direkayasa.
- [ ] secret/credential tidak dimasukkan ke source atau frontend.

## HASIL AKHIR YANG HARUS DILAPORKAN

setelah implementasi, berikan ringkasan yang konkret:
1. fitur dan halaman yang benar-benar selesai.
2. struktur penting dan keputusan arsitektur.
3. daftar file utama yang dibuat/diubah.
4. dependency baru dan alasannya.
5. perintah pengujian yang dijalankan beserta hasil aktual.
6. data/aset yang masih harus diberikan oleh pemilik perusahaan.
7. keterbatasan atau blocker yang tersisa.
8. cara menjalankan proyek secara lokal.

**jangan hanya membuat mockup atau menjelaskan cara membuatnya. implementasikan website yang berjalan di repository aktif, lakukan pengecekan, lalu laporkan hasil secara jujur.**
