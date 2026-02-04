import React from "react";
import { motion } from "framer-motion";

// Example project data
const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with React and Tailwind CSS",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description: "React + Tailwind + Redux project with live cart",
    link: "#",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page with animations and smooth scroll",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 dark:text-blue-400 font-semibold hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
