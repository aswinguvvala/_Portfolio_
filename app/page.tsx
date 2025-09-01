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
                text="Exploring Space Through AI & Machine Learning"
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
                Generative AI, NLP, and Large Language Models. I love exploring space-related phenomena
                and using ML/DL as my core toolkit to understand the universe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="flex flex-col gap-6 justify-center items-center"
              >
                <MagneticButton href="#projects">
                  View My Work
                </MagneticButton>

                {/* Contact Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <a
                    href="https://www.linkedin.com/in/aswinguvvala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0077b5_0%,#00a0dc_50%,#0077b5_100%)]"></span>
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 group-hover:bg-blue-600/10">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href="mailto:aswinabd17@gmail.com"
                    className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#34d399_50%,#10b981_100%)]"></span>
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 group-hover:bg-green-600/10">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      Email Me
                    </span>
                  </a>
                </motion.div>
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
