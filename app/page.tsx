"use client";

// import ParticleBackground from "../components/ParticleBackground";
import GradientBackground from "../components/GradientBackground";
import EnhancedNavigation from "../components/EnhancedNavigation";
import TypewriterText from "../components/TypewriterText";
import FloatingElements from "../components/FloatingElements";
import EnhancedProjects from "../components/EnhancedProjects";
import SkillsVisualization from "../components/SkillsVisualization";
// import ContactForm from "../components/ContactForm";
import MagneticButton from "../components/MagneticButton";
import SmoothScroll from "../components/SmoothScroll";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        {/* Background Effects */}
        <GradientBackground />
        {/* <ParticleBackground /> */}
        
        <div className="max-w-7xl w-full relative z-10">
          {/* Enhanced Navigation */}
          <EnhancedNavigation />

          {/* Hero Section */}
          <section id="about" className="min-h-screen flex items-center justify-center relative px-5 sm:px-10">
            <FloatingElements />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="uppercase tracking-widest text-xs text-center text-blue-100 mb-8"
              >
                Data Scientist & AI/ML Engineer
              </motion.p>
              
              <TypewriterText
                text="Transforming Data into Intelligent Solutions"
                className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                delay={0.5}
                speed={0.08}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Hi! I&apos;m Aswin Kumar Guvvala, a passionate Data Scientist specializing in 
                Generative AI, NLP, and Large Language Models.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <MagneticButton href="#projects">
                  View My Work
                </MagneticButton>
              </motion.div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <SkillsVisualization />

          {/* Projects Section */}
          <section id="projects" className="px-5 sm:px-10">
            <EnhancedProjects />
          </section>

          {/* Footer */}
          <footer className="py-10 px-5 sm:px-10 text-center border-t border-white/[0.1] mt-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              Data Science & AI Portfolio
            </motion.p>
          </footer>
        </div>
      </main>
    </>
  );
}
