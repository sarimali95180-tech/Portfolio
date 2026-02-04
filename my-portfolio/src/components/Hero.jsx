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
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100 dark:bg-gray-900"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
      >
        Hi, I’m Sarim Ali
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6"
      >
        <span className="text-blue-500 font-semibold">{text}</span>
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="px-6 py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
      >
        See My Projects
      </motion.a>
    </section>
  );
};

export default Hero;
