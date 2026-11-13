/**
 * Kanal komunikasi R21F_webdev (dipakai di beranda).
 *
 * CARA MENGAKTIFKAN KANAL:
 * Isi field `href` dengan URL resmi. Selama `href` kosong (undefined),
 * kanal tampil dengan label "Segera tersedia" dan tidak dapat diklik.
 *
 * Contoh nilai `href`:
 * - whatsapp  : "https://wa.me/62xxxxxxxxxxx"
 * - email     : "mailto:nama@domain.com"
 * - instagram : "https://www.instagram.com/akun"
 * - tiktok    : "https://www.tiktok.com/@akun"
 * - linkedin  : "https://www.linkedin.com/company/akun"
 * - threads   : "https://www.threads.net/@akun"
 */
export type ContactChannelId =
  | "whatsapp"
  | "email"
  | "instagram"
  | "tiktok"
  | "linkedin"
  | "threads";

export interface ContactChannel {
  id: ContactChannelId;
  label: string;
  href?: string;
}

export const PRIMARY_CHANNELS: ContactChannel[] = [
  { id: "whatsapp", label: "WhatsApp", href: undefined },
  { id: "email", label: "Email", href: undefined },
];

export const SOCIAL_CHANNELS: ContactChannel[] = [
  { id: "instagram", label: "Instagram", href: undefined },
  { id: "tiktok", label: "TikTok", href: undefined },
  { id: "linkedin", label: "LinkedIn", href: undefined },
  { id: "threads", label: "Threads", href: undefined },
];
