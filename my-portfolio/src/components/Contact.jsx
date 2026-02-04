import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarimali95180@gmail.com",
      href: "mailto:sarimali95180@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3143104551",
      href: "tel:+923143104551",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rizwan441",
      href: "https://github.com/rizwan441",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rizwan-zafar",
      href: "https://linkedin.com/in/rizwan-zafar",
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-800">
      
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 hover:scale-105 transition-transform"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{item.label}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message subject"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
