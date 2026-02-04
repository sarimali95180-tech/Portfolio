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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-64 h-64 border-2 border-blue-400 rounded-full opacity-10"
      />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 relative z-10"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 dark:text-gray-400 mb-12 relative z-10"
      >
        Explore my latest work and projects
      </motion.p>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            
            <motion.div
              className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg h-full card-lift smooth-border"
              whileHover={{
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  className="inline-block text-blue-500 dark:text-blue-400 font-semibold animated-underline"
                  whileHover={{ x: 5 }}
                  whileTap={{ x: -2 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
