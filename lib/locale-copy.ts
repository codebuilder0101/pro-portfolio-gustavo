import type { Locale } from "@/lib/translations";

export type { Locale };

export type LocalizedString = { pt: string; en: string; es?: string; fr?: string };

/** Use the same label in both languages (e.g. product names, “React”). */
export const both = (s: string): LocalizedString => ({ pt: s, en: s });

export function str(locale: Locale, value: LocalizedString | string): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.en ?? value.pt;
}
