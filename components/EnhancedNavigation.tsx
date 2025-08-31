"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { navItems } from "@/data";

const EnhancedNavigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { scrollY } = useScroll();
  
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
  const blur = useTransform(scrollY, [0, 100], [8, 12]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.link.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center space-x-1 px-6 py-3 rounded-full border border-white/[0.2] shadow-lg"
        style={{
          backdropFilter: `blur(${blur}px)`,
          backgroundColor: `rgba(0, 3, 25, ${backgroundOpacity})`,
        }}
      >
        {navItems.map((item, index) => {
          const sectionId = item.link.substring(1);
          const isActive = activeSection === sectionId;
          
          return (
            <motion.button
              key={index}
              onClick={() => scrollToSection(sectionId)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                isActive 
                  ? "text-white" 
                  : "text-neutral-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
              data-cursor-text={item.name}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-purple to-cyan-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default EnhancedNavigation;