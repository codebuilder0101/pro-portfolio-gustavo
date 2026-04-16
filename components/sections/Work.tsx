// components/sections/Work.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { workExperiences } from '@/data/workExperience';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { useLanguage } from '@/contexts/LanguageContext';
import { str } from '@/lib/locale-copy';

const Work: React.FC = () => {
  const { ref, isVisible } = useScrollSection();
  const { t, locale } = useLanguage();

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t.work.heading}
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <div className="relative pl-10 sm:pl-14">
          {/* Vertical timeline line */}
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-[26px] sm:-left-[38px] top-5 w-4 h-4 rounded-full border-2 border-primary bg-background"
                  aria-hidden
                />

                {/* Card */}
                <div className="bg-card rounded-xl border border-border p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {str(locale, experience.position)}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    {str(locale, experience.company)} | {str(locale, experience.duration)}
                  </p>
                  <div className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <p key={i} className="text-sm text-foreground/85 leading-relaxed text-justify">
                        {str(locale, item)}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
