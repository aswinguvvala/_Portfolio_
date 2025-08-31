"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SmoothScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-cyan-500 to-purple z-50"
      style={{
        scaleX: scrollProgress,
        transformOrigin: "0%",
      }}
    />
  );
};

export default SmoothScroll;