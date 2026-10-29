import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export default function RootStoryPage() {
  redirect(`/${DEFAULT_LOCALE}/story`);
}
