"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';
import { useLanguage } from '@/contexts/LanguageContext';


const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();
  const { t } = useLanguage();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row align-center justify-center scroll-mt-20 py-8" ref={ref}>
      <motion.div 
      className="w-full sm:w-[85%] pr-0 sm:pr-6 mb-8 sm:mb-0 sm:ml-[-20px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              {t.about.heading}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default AboutMe
