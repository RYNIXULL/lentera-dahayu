import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F5FA] text-[#1E293B] p-6 text-center">
      <div className="max-w-md w-full clay-card rounded-[32px] p-8 sm:p-10 border-[2.5px] border-white shadow-[0_20px_45px_-8px_rgba(14,165,233,0.18)]">
        <div className="w-16 h-16 rounded-2xl bg-[#F0F9FF] border-2 border-[#BAE6FD] text-[#0284C7] flex items-center justify-center mx-auto mb-6 shadow-[inset_1px_1px_2px_rgba(255,255,255,1),0_6px_14px_rgba(14,165,233,0.15)]">
          <Compass className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-mono font-bold text-[#0284C7] mb-2">404</h1>
        <h2 className="text-xl font-bold mb-3 text-[#1E293B]">Halaman Tidak Ditemukan</h2>
        <p className="text-sm text-[#64748B] mb-8 leading-relaxed">
          Alamat yang Anda tuju tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          href="/id"
          className="clay-btn-primary inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-2xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
