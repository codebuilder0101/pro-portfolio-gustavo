"use client";

import React from "react";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <motion.button
      type="button"
      onClick={toggleLocale}
      aria-label={t.language.switchTo}
      title={t.language.switchTo}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <FaGlobe className="h-4 w-4 shrink-0" aria-hidden />
      <span>{locale === "pt" ? "PT" : "EN"}</span>
    </motion.button>
  );
}
