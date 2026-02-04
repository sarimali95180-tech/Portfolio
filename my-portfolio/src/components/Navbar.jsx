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

  // Highlight active link while scrolling
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
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow-xl backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer">
          Sarim Ali
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`relative text-lg font-medium cursor-pointer transition-all
                ${active === link.name ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"}
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-1 rounded-full transition-all
                  ${active === link.name ? "w-full bg-indigo-600 dark:bg-indigo-400" : "w-0 bg-indigo-600 dark:bg-indigo-400"}`
                }
              ></span>
            </motion.a>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>

          <button onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded"></span>
              <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded"></span>
              <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white rounded"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center py-6 md:hidden shadow-lg"
          >
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`mb-4 text-lg font-medium cursor-pointer transition-all
                  ${active === link.name ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"}
                `}
                whileHover={{ scale: 1.05 }}
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
