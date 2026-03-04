import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActive(link.name);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 dark:bg-gray-900/80 shadow-xl backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90 transition-all">
      {/* Animated background border */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-4 relative z-10">
        {/* Logo with glow effect */}
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Sarim Ali
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`relative text-lg font-medium cursor-pointer transition-all ${active === link.name
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              <motion.span
                className={`absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ${active === link.name ? "w-full" : "w-0"
                  }`}
                animate={{
                  width: active === link.name ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg glow-button"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>

          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="p-2"
          >
            <motion.div
              animate={open ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-1"
            >
              <motion.span
                className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded transition"
                animate={open ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded transition"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded transition"
                animate={open ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center py-6 md:hidden shadow-lg backdrop-blur-md"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`mb-4 text-lg font-medium cursor-pointer transition-all ${active === link.name
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                  }`}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
