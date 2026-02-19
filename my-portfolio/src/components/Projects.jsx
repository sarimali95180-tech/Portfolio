import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

// Example project data with logos
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my work",
    Ldescription: "A sleek and modern portfolio website showcasing my projects and skills, built using React for a dynamic user experience and Tailwind CSS for responsive and visually appealing design.",
    link: "#",
    logo: "/public/portfolio logo.jpg",
    img: "/public/portfolio logo.jpg",
  },
  {
    title: "E-Commerce App",
    description: "Full-featured e-commerce application",
    Ldescription: "A comprehensive e-commerce application featuring a dynamic shopping cart, product listings, and user authentication, built using React for the frontend, Tailwind CSS for styling, and Redux for state management.",
    link: "#",
    logo: "/public/realestate logo.png",
    img: "/public/realestate logo.png",
  },
  {
    title: "Builder Brick",
    description: "Construction project management platform",
    Ldescription: "Builder Brick is a full-stack construction project management platform that helps organizations track materials, manpower, and finances efficiently. Built with HTML, CSS, and JavaScript for a responsive, modern UI, and powered by PHP and MySQL on the backend, it supports secure form submissions and data storage. Key features include a dynamic contact form, policy pages, and a mobile-friendly navigation system.",
    link: "#",
    logo: "/public/BuilderBlick logo.png",
    img: "/public/builderbrick ss.png",

  },
  {
    title: "AI-Call-Bot",
    description: "AI-powered call bot for automated customer interactions",
    Ldescription: "An AI-powered call bot designed to automate customer interactions, providing efficient and natural communication through advanced speech recognition and response generation technologies.",
    link: "#",
    logo: "/public/AI-Call-Bot logo.png",
    img: "/public/ai-bot-dashboard ss1c.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

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
      {/* Background decorative circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
              className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg h-full flex flex-col items-center card-lift smooth-border"
              whileHover={{
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              {/* Logo */}
              <div className="w-20 h-20 mb-4 flex-shrink-0">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className="w-full h-full object-contain rounded-full shadow-md"
                />
              </div>

              {/* Project content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <motion.button
                  onClick={() => handleViewProject(project)}
                  className="inline-block text-blue-500 dark:text-blue-400 font-semibold animated-underline bg-none border-none cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ x: -2 }}
                >
                  View Project →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Projects;



