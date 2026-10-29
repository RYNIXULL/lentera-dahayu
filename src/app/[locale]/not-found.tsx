import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function LocaleNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md w-full glass-card rounded-2xl p-8 sm:p-10 border border-[#2A3545]">
        <div className="w-12 h-12 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-6 h-6" />
        </div>
        <p className="text-4xl font-mono font-bold text-[#8BE5FF] mb-2">404</p>
        <h1 className="text-xl font-bold text-[#F3F6FA] mb-3">
          Halaman Tidak Ditemukan / Page Not Found
        </h1>
        <p className="text-sm text-[#A5B0C0] mb-8 leading-relaxed">
          Konten yang Anda tuju belum dipublikasikan atau URL tidak sesuai.
        </p>
        <Link
          href="/id"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-[#8BE5FF] text-[#090D14] font-semibold hover:bg-[#43BFEA] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda / Return Home</span>
        </Link>
      </div>
    </div>
  );
}
