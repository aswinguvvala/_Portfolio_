"use client";

import { projects } from "@/data";

const SimpleProjects = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center mb-4">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4">
        {projects.map((item) => (
          <div
            key={item.id}
            className="bg-black-100 border border-white/[0.1] rounded-xl p-6 hover:border-purple/50 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-6">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg bg-gray-800"
              />
            </div>

            <h3 className="font-bold text-xl mb-3 text-white">
              {item.title}
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {item.des}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
                  >
                    <img src={icon} alt="tech-icon" className="p-2" />
                  </div>
                ))}
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple hover:text-purple/80 transition-colors"
              >
                <span className="text-sm font-medium">View Live Site</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleProjects;