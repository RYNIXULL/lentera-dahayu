import { Locale, Dictionary } from "@/types/i18n";
import { messagesId } from "@/content/id/messages";
import { messagesEn } from "@/content/en/messages";

export const LOCALES: Locale[] = ["id", "en"];
export const DEFAULT_LOCALE: Locale = "id";

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? messagesEn : messagesId;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "id" ? "en" : "id";
}

/**
 * Replaces the locale prefix in a pathname, preserving route parameters
 */
export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  if (!pathname || pathname === "/") {
    return `/${targetLocale}`;
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  if (LOCALES.includes(segments[0] as Locale)) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  return `/${targetLocale}/${segments.join("/")}`;
}
