"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const cursorXSpringLag = useSpring(cursorX, { damping: 20, stiffness: 150 });
  const cursorYSpringLag = useSpring(cursorY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-full h-full rounded-full bg-white/80"
        />
      </motion.div>

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40"
        style={{
          translateX: cursorXSpringLag,
          translateY: cursorYSpringLag,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? "rgba(203, 172, 249, 0.8)" : "rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-full rounded-full border border-white/30"
        />
      </motion.div>

      {/* Cursor Text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 bg-purple text-white px-3 py-1 rounded-full text-sm font-medium"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;