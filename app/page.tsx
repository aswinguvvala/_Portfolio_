"use client";

import EnhancedProjects from "../components/EnhancedProjects";
import SkillsVisualization from "../components/SkillsVisualization";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center py-20">
            <div className="text-center max-w-4xl mx-auto">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  Exploring Space Through
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    AI & Machine Learning
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <p className="text-xl md:text-2xl text-slate-300 mb-2">
                  Data Scientist & AI/ML Engineer
                </p>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Hi! I&apos;m Aswin Kumar Guvvala, passionate about using AI and machine learning
                  to explore space-related phenomena and solve complex data challenges.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View My Work
                </a>

                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/aswinguvvala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg transition-all duration-300 hover:scale-105"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  <a
                    href="mailto:aswinabd17@gmail.com"
                    className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg transition-all duration-300 hover:scale-105"
                    title="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-20">
            <SkillsVisualization />
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Featured Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-400 max-w-2xl mx-auto"
              >
                Explore my AI/ML projects and see how I transform data into intelligent solutions
              </motion.p>
            </div>
            <EnhancedProjects />
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-slate-700 mt-20">
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-400 text-lg"
              >
                Data Science & AI Portfolio
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-sm mt-2"
              >
                Built with Next.js and Tailwind CSS
              </motion.p>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
