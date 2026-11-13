export interface TeamMember {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  badgeId: string;
  department: string;
  portfolioUrl: string;
  isPortfolioReady: boolean;
  avatarInitials: string;
  photoUrl?: string; // Isi path foto jika sudah ada (contoh: '/team/rayhan.jpg')
  bio: string;
  skills: string[];
}

/**
 * DAFTAR ANGGOTA TIM R21F_webdev
 * 
 * Catatan Penggunaan:
 * Jika portofolio atau foto anggota tim sudah siap, Anda cukup mengganti:
 * - portfolioUrl: Masukkan URL lengkap (misal: 'https://rayhanzulkarnain.dev')
 * - isPortfolioReady: Ubah menjadi `true`
 * - photoUrl: (Opsional) Masukkan file foto ke folder public/team/ dan isi path-nya disini
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "rayhan",
    name: "M Rayhan Zulkarnain",
    nickname: "Rayhan",
    role: "Lead Software Engineer & Fullstack Architect",
    badgeId: "R21F-ENG-001",
    department: "Core Architecture & Web Systems",
    portfolioUrl: "https://rayhanzulkarnain.dev",
    isPortfolioReady: true,
    avatarInitials: "RZ",
    bio: "Merancang arsitektur sistem web skalabel, optimasi performa tinggi, dan rekayasa antarmuka digital presisi.",
    skills: ["System Architecture", "Next.js", "TypeScript", "Performance"],
  },
  {
    id: "fahmi",
    name: "Fahmi Ghozali",
    nickname: "Fahmi",
    role: "Frontend Engineer & Creative Developer",
    badgeId: "R21F-ENG-002",
    department: "UI/UX & Interactive Design",
    portfolioUrl: "https://github.com/fahmigh16", // Ganti dengan link web portofolio jika sudah selesai
    isPortfolioReady: false,
    avatarInitials: "FG",
    bio: "Fokus pada pengembangan antarmuka visual responsif, mikro-interaksi taktil, dan integrasi komponen interaktif.",
    skills: ["Frontend Engineering", "React / Next.js", "Creative UI", "Tailwind CSS"],
  },
  {
    id: "rafi",
    name: "Rafi Diandra Ardi Agusta",
    nickname: "Rafi",
    role: "Backend & Systems Infrastructure Engineer",
    badgeId: "R21F-ENG-003",
    department: "Backend APIs & Distributed Systems",
    portfolioUrl: "#", // Ganti dengan link web portofolio jika sudah selesai
    isPortfolioReady: false,
    avatarInitials: "RA",
    bio: "Spesialisasi keandalan backend, desain kontrak API yang aman, serta pemodelan dan optimasi alur data.",
    skills: ["Backend APIs", "Cloud Infrastructure", "System Security", "Data Modeling"],
  },
];

