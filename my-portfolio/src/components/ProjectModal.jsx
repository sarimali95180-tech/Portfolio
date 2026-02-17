import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg"
                  />
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col justify-center"
                >
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h1>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.Ldescription}
                  </p>

                  {project.technologies && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Project
                    </motion.a>
                    <motion.button
                      onClick={onClose}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
