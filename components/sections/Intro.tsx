"use client";
import React from "react";
import { motion } from "framer-motion";
import StyledPic from "../Styledpic";
import { useScrollSection } from "@/hooks/use-scroll-section";
import { useLanguage } from "@/contexts/LanguageContext";

const Intro: React.FC = () => {
  const { ref, isVisible } = useScrollSection();
  const { t } = useLanguage();

  return (
    <div
      ref={ref}
      className="relative w-full flex flex-col sm:flex-row items-center justify-center gap-8 py-10"
    >
      <motion.div
        className="w-full sm:w-1/3 max-w-xs flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <StyledPic />
      </motion.div>

      <motion.div
        className="w-full sm:flex-1 space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <blockquote className="text-lg sm:text-xl italic font-semibold text-primary border-l-4 border-primary pl-4">
          “{t.intro.quote}”
        </blockquote>
        <div className="text-sm sm:text-base text-foreground space-y-4 text-justify">
          {t.intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
