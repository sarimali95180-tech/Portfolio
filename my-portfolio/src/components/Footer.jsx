import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/dashboard",
      label: "GitHub",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sarim-ali-691530397/",
      label: "LinkedIn",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/sarimg",
      label: "Twitter",
      color: "from-sky-400 to-sky-600",
    },
    {
      icon: Mail,
      href: "mailto:sarimali95180@gmail.com",
      label: "Email",
      color: "from-red-500 to-red-700",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 py-12 px-6 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      />

      <motion.div
        animate={{
          y: [0, -50, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8"
        >
          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-center md:text-left font-semibold text-gray-800 dark:text-white"
          >
            © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Sarim Ali</span>. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-xl transition smooth-border`}
                  title={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-300 dark:border-gray-700"
        >
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className="animated-underline"
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Skills</h4>
            <ul className="space-y-2">
              {["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"].map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition cursor-default"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                <a href="mailto:sarimali95180@gmail.com">sarimali95180@gmail.com</a>
              </li>
              <li className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                <a href="tel:+923143104551">+92 3143104551</a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">Based in Pakistan 🇵🇰</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center pt-6 border-t border-gray-300 dark:border-gray-700"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Designed & Built with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span> by Sarim Ali
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;




