import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "PHP", level: 70 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Bootstrap", level: 80 },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="bg-gray-100 dark:bg-gray-900 py-20 px-4 relative overflow-hidden"
      id="skills"
      ref={sectionRef}
    >
      {/* Animated background */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-96 h-96 border-2 border-purple-400 rounded-full opacity-10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12"
        >
          Technologies and tools I use to build modern, responsive web applications.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 smooth-border overflow-hidden">
                {/* Animated glow background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-600/0 opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between mb-3 items-center">
                    <motion.span
                      className="font-semibold text-gray-800 dark:text-gray-100 text-lg"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      {skill.name}
                    </motion.span>
                    <motion.span
                      className="text-blue-500 font-bold"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                      initial={{ width: "0%" }}
                      animate={visible ? { width: `${skill.level}%` } : { width: "0%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                    />
                  </div>

                  {/* Skill percentage with animation */}
                  <motion.div
                    className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Proficiency: <span className="font-semibold text-blue-500">{skill.level}%</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
