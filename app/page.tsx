"use client";

// import ParticleBackground from "../components/ParticleBackground";
import GradientBackground from "../components/GradientBackground";
import EnhancedNavigation from "../components/EnhancedNavigation";
import TypewriterText from "../components/TypewriterText";
import FloatingElements from "../components/FloatingElements";
import EnhancedProjects from "../components/EnhancedProjects";
import SkillsVisualization from "../components/SkillsVisualization";
import MagneticButton from "../components/MagneticButton";
import SmoothScroll from "../components/SmoothScroll";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

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
                Hi! I&apos;m Aswin Kumar Guvvala, a passionate Data Scientist specializing in Large Language Models, 
                Computer Vision, Natural Language Processing, Deep Learning, and Traditional Machine Learning. 
                I love building intelligent systems that can understand, see, and learn from complex data.
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

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold mb-4">
                  Let&apos;s{" "}
                  <span className="bg-gradient-to-r from-purple via-cyan-500 to-purple bg-clip-text text-transparent">
                    Connect
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                      I strongly believe AI could be the key to groundbreaking discoveries we haven&apos;t even imagined yet. 
                      How could it be that powerful? That&apos;s exactly what I want to research—how artificial intelligence 
                      can push the boundaries of human knowledge and uncover new frontiers. Recently, I&apos;ve been fascinated 
                      by space and extraterrestrial life, wondering if AI might even help us find answers to some of the universe&apos;s biggest questions.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Find me on</h4>
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        href="https://www.linkedin.com/in/aswinguvvala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-12 h-12 bg-gradient-to-br from-black-100 to-black-200 border border-white/[0.1] rounded-full flex items-center justify-center hover:border-purple/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        data-cursor="pointer"
                        data-cursor-text="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5 text-gray-400 group-hover:text-purple transition-colors duration-300" />
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                      </motion.a>
                      
                      <motion.a
                        href="mailto:aswinabd17@gmail.com"
                        className="group relative w-12 h-12 bg-gradient-to-br from-black-100 to-black-200 border border-white/[0.1] rounded-full flex items-center justify-center hover:border-purple/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        data-cursor="pointer"
                        data-cursor-text="Email"
                      >
                        <FaEnvelope className="w-5 h-5 text-gray-400 group-hover:text-purple transition-colors duration-300" />
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full bg-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>


        </div>
      </main>
    </>
  );
}
