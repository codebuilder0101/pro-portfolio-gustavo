"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGlobe, FaCheck, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { localeLabels, type Locale } from "@/lib/translations";

const LOCALES: Locale[] = ["pt", "en", "es", "fr"];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = localeLabels[locale];

  return (
    <div ref={ref} className="relative">
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.language.switchTo}
        aria-haspopup="listbox"
        aria-expanded={open}
        title={t.language.switchTo}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 rounded-lg border border-[burlywood]/40 bg-black/60 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-[color:var(--title-color)] shadow-sm backdrop-blur-sm transition-colors hover:border-[burlywood] hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[burlywood]"
      >
        <FaGlobe className="h-4 w-4 shrink-0" aria-hidden />
        <span>{current.flag}</span>
        <span>{current.code}</span>
        <FaChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 min-w-[11rem] overflow-hidden rounded-lg border border-[burlywood]/40 bg-black/90 shadow-lg backdrop-blur-md"
          >
            {LOCALES.map((l) => {
              const info = localeLabels[l];
              const active = l === locale;
              return (
                <li key={l}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setLocale(l);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors ${
                      active
                        ? "bg-[burlywood]/15 text-[color:var(--title-color)]"
                        : "text-[color:var(--title-color)]/80 hover:bg-[burlywood]/10"
                    }`}
                  >
                    <span className="text-base leading-none">{info.flag}</span>
                    <span className="flex-1">{info.name}</span>
                    <span className="text-xs opacity-70">{info.code}</span>
                    {active && <FaCheck className="h-3 w-3" aria-hidden />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
