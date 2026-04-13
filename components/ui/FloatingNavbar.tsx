"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(
    () => [
      { name: t.nav.about, link: "#about", icon: <FaUser /> },
      { name: t.nav.work, link: "#work", icon: <FaBriefcase /> },
      { name: t.nav.contact, link: "#contact", icon: <FaEnvelope /> },
    ],
    [t.nav]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = navItems.map((item) => item.link.slice(1)).filter(Boolean);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-primary/10",
        "floating-navbar",
        className
      )}
    >
      <nav className="flex flex-col sm:flex-row items-center justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-20 py-3 sm:py-0 sm:h-20 gap-3 sm:gap-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-1 flex-1 w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:justify-end gap-y-1 space-x-1">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.link + item.name}>
                {idx > 0 && (
                  <li className="self-stretch flex items-center">
                    <div className="h-4 w-px bg-primary" />
                  </li>
                )}
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.link.startsWith("/pdf/") || item.link.endsWith(".pdf") ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm sm:text-base font-semibold transition-all duration-200 ease-in-out",
                        activeSection === item.link.slice(1)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      <motion.span
                        className="mr-2 inline-block"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link
                      href={item.link}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm sm:text-base font-semibold transition-all duration-200 ease-in-out",
                        activeSection === item.link.slice(1)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      <motion.span
                        className="mr-2 inline-block"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </motion.li>
              </React.Fragment>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </motion.div>
  );
};
