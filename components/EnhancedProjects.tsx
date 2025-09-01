"use client";

import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/data";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group cursor-pointer"
    >
      <div className="relative bg-gradient-to-br from-black-100 to-black-200 border border-white/[0.1] rounded-2xl p-6 overflow-hidden hover:border-purple/30 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative mb-6 overflow-hidden rounded-xl">
          <div className="relative">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              {project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple"
                >
                  Preview Project
                </a>
              ) : (
                <div className="bg-gray-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-not-allowed">
                  In Development
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl text-white group-hover:text-purple transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm">
            {project.des}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.iconLists.map((icon: string, iconIndex: number) => {
                // Convert icon path to technology name
                const techName = icon.split('/')[1]?.split('.')[0] || '';
                const displayName = {
                  'python': 'Python',
                  'openai': 'OpenAI',
                  'aws': 'AWS',
                  'fastapi': 'FastAPI',
                  'vector-db': 'Vector DB',
                  'streamlit': 'Streamlit',
                  'ai': 'AI',
                  'gemini': 'Gemini',
                  'pandas': 'Pandas',
                  'plotly': 'Plotly',
                  'docker': 'Docker'
                }[techName] || techName;
                
                return (
                  <span
                    key={iconIndex}
                    className="px-2 py-1 text-xs bg-black border border-white/[0.2] rounded-md text-gray-300 group-hover:border-purple/50 group-hover:text-white transition-colors duration-300"
                  >
                    {displayName}
                  </span>
                );
              })}
            </div>


          </div>
        </div>

      </div>
    </motion.div>
  );
};

const EnhancedProjects = () => {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple via-cyan-500 to-purple bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my AI/ML projects and see how I transform data into intelligent solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EnhancedProjects;