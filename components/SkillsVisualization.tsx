"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPython, FaAws, FaDatabase, FaChartBar, FaChartLine } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiTableau, SiKeras, SiOpencv, SiOpenai, SiStreamlit, SiPlotly } from "react-icons/si";
import { TbMathFunction } from "react-icons/tb";

// Define emoji-based skill icons
const EmojiIcon = ({ emoji, size = 32 }: { emoji: string; size?: number }) => (
  <span style={{ fontSize: size }} className="select-none">{emoji}</span>
);

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: FaPython, color: "#FFD43B" },
      { name: "SQL", icon: FaDatabase, color: "#336791" },
      { name: "R", icon: FaChartBar, color: "#276DC3" },
    ]
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
    ]
  },
  {
    title: "Natural Language Processing",
    skills: [
      { name: "Hugging Face", icon: () => <EmojiIcon emoji="🤗" />, color: "#FFD21E" },
      { name: "BERT", icon: () => <EmojiIcon emoji="🇬" />, color: "#4285F4" },
      { name: "Transformers", icon: () => <EmojiIcon emoji="🇬" />, color: "#FF6B6B" },
      { name: "NLTK", icon: () => <EmojiIcon emoji="📝" />, color: "#2E8B57" },
      { name: "spaCy", icon: () => <EmojiIcon emoji="🌌" />, color: "#09A3D5" },
    ]
  },
  {
    title: "Generative AI",
    skills: [
      { name: "OpenAI GPT-4", icon: SiOpenai, color: "#412991" },
      { name: "LLaMA", icon: () => <EmojiIcon emoji="∞" />, color: "#FF4081" },
      { name: "RAG Systems", icon: () => <EmojiIcon emoji="🦜" />, color: "#9C27B0" },
      { name: "Prompt Engineering", icon: () => <EmojiIcon emoji="💬" />, color: "#FF5722" },
      { name: "Fine-tuning", icon: TbMathFunction, color: "#607D8B" },
    ]
  },
  {
    title: "Data Processing & Analysis",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Statistical Modeling", icon: TbMathFunction, color: "#795548" },
      { name: "A/B Testing", icon: () => <EmojiIcon emoji="⚖️" />, color: "#FF9800" },
      { name: "Time Series", icon: FaChartLine, color: "#3F51B5" },
    ]
  },
  {
    title: "Data Visualization & Cloud",
    skills: [
      { name: "Plotly", icon: SiPlotly, color: "#3F4F75" },
      { name: "Tableau", icon: SiTableau, color: "#E97627" },
      { name: "Seaborn", icon: FaChartBar, color: "#4C72B0" },
      { name: "AWS SageMaker", icon: FaAws, color: "#FF9900" },
      { name: "Vector DBs", icon: FaDatabase, color: "#00C851" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    ]
  }
];

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }> | (() => JSX.Element);
  color: string;
}

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative"
    >
      <div className="bg-gradient-to-br from-black-100 to-black-200 border border-white/[0.1] rounded-xl p-6 hover:border-purple/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple/25 h-full">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
          {typeof skill.icon === 'function' && skill.icon.name === '' ? (
            <skill.icon />
          ) : (
            React.createElement(skill.icon as React.ComponentType<{size: number; color: string}>, { size: 32, color: skill.color })
          )}
        </div>

        {/* Skill Name */}
        <h3 className="text-base font-semibold text-white text-center group-hover:text-purple transition-colors duration-300">
          {skill.name}
        </h3>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
    </motion.div>
  );
};

const SkillsVisualization = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4">
          Technical{" "}
          <span className="bg-gradient-to-r from-purple via-cyan-500 to-purple bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Data Science, Machine Learning, and AI technologies I use to build intelligent systems and transform data into actionable insights
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              {category.title}
            </h3>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={categoryIndex * 10 + skillIndex} 
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Static Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-purple/10 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-cyan-500/10 rounded-full" />
      </div>
    </section>
  );
};

export default SkillsVisualization;