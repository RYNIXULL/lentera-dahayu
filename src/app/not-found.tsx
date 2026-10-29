import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090D14] text-[#F3F6FA] p-6 text-center">
      <div className="max-w-md w-full glass-card rounded-2xl p-8 sm:p-10 border border-[#2A3545]">
        <div className="w-12 h-12 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-mono font-bold text-[#8BE5FF] mb-2">404</h1>
        <h2 className="text-xl font-bold mb-3">Halaman Tidak Ditemukan</h2>
        <p className="text-sm text-[#A5B0C0] mb-8 leading-relaxed">
          Alamat yang Anda tuju tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          href="/id"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-[#8BE5FF] text-[#090D14] font-semibold hover:bg-[#43BFEA] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
