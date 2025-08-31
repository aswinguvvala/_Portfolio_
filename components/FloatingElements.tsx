"use client";

import { motion } from "framer-motion";
import { FaReact, FaPython } from "react-icons/fa";

const FloatingElements = () => {
  const icons = [
    { Icon: FaReact, color: "#61DAFB", delay: 0 },
    { Icon: FaPython, color: "#FFD43B", delay: 2 },
  ];

  const geometricShapes = [
    { shape: "circle", size: 20, delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Tech Icons */}
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${10 + (index % 3) * 30}%`,
            top: `${20 + (index % 4) * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            y: [-10, 10, -10],
          }}
          transition={{
            delay,
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon size={24} color={color} className="drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Floating Geometric Shapes */}
      {geometricShapes.map(({ shape, size, delay }, index) => {
        const positions = [
          { right: "10%", top: "20%" },
          { right: "20%", top: "60%" },
        ];

        return (
          <motion.div
            key={`shape-${index}`}
            className="absolute"
            style={positions[index]}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              y: [-8, 8, -8],
            }}
            transition={{
              delay,
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {shape === "circle" && (
              <div
                className="rounded-full bg-gradient-to-br from-purple/30 to-cyan-500/30 border border-purple/50"
                style={{ width: size, height: size }}
              />
            )}
            {shape === "square" && (
              <div
                className="bg-gradient-to-br from-blue-500/30 to-purple/30 border border-blue-500/50"
                style={{ width: size, height: size }}
              />
            )}
            {shape === "triangle" && (
              <div
                className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[18px] border-l-transparent border-r-transparent border-b-cyan-500/50"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.3))' }}
              />
            )}
            {shape === "diamond" && (
              <div
                className="transform rotate-45 bg-gradient-to-br from-purple/30 to-pink-500/30 border border-purple/50"
                style={{ width: size, height: size }}
              />
            )}
            {shape === "hexagon" && (
              <div
                className="hexagon bg-gradient-to-br from-green-500/30 to-blue-500/30"
                style={{
                  width: size,
                  height: size * 0.866,
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                  border: '1px solid rgba(34, 197, 94, 0.5)',
                }}
              />
            )}
          </motion.div>
        );
      })}

      {/* Static Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple/5 rounded-full blur-xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl opacity-20" />
    </div>
  );
};

export default FloatingElements;