import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["Frontend Developer", "React.js Developer", "UI/UX Enthusiast"];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const role = roles[index % roles.length];
    let i = 0;
    const interval = setInterval(() => {
      setText(role.slice(0, i + 1));
      i++;
      if (i === role.length) {
        setTimeout(() => setIndex((prev) => prev + 1), 1000);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 relative z-10"
      >
        Hi, I'm{" "}
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Sarim Ali
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 relative z-10"
      >
        <span className="text-blue-500 font-semibold animate-pulse">{text}</span>
        <span className="text-blue-500 blink">|</span>
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transition relative z-10 glow-button"
      >
        See My Projects
      </motion.a>
    </section>
  );
};

export default Hero;
