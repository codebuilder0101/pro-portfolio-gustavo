"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroTitle = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mt-12 mb-8"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">{t.hero.name}</h1>
      <h2 className="text-base sm:text-lg md:text-xl text-foreground max-w-4xl mx-auto leading-snug px-2">
        {t.hero.title}
      </h2>
    </motion.div>
  );
};

export default HeroTitle;
