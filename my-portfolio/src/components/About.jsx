import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "React.js", level: 92 },
    { name: "Tailwind CSS", level: 96 },
    { name: "JavaScript", level: 88 },
    { name: "Framer Motion", level: 84 },
    { name: "Accessibility", level: 80 },
];

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-900"
        >
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mb-10 md:mb-0"
            >
                {/* <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                <p className="text-indigo-600 font-semibold mb-3">Frontend Developer • UI Enthusiast • Motion Lover</p> */}

                <h3 className="text-5xl font-bold text-gray-800 dark:text-white">
                    Hi, I’m <span className="text-indigo-600">Sarim Ali</span>
                </h3>
                <h4 className="text-4xl font-bold mt-3 mb-3 text-indigo-600">Frontend Developer</h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    I build modern, accessible, delightfully animated interfaces and responsive user-friendly websites.I focus on fast, responsive experiences with attention to details.
                </p>

                <div className="flex gap-3 mb-5">
                    {/* <a href="/Sarim_CV.pdf" className="cta-button bg-indigo-600 text-white">Download CV</a>
                    <a href="#contact" className="cta-button bg-white dark:bg-gray-800">Contact Me</a> */}
                    <motion.a
                        href="/Sarim_CV.pdf"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="px-6 py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                    >
                        Download CV
                    </motion.a>
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="px-6 py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                    >
                        Contact Me
                    </motion.a>
                    <motion.a
                        href="#projects"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="px-6 py-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                    >
                        See My Projects
                    </motion.a>
                </div>

                {/* <div className="mb-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-gray-900 dark:text-white">{skill.name}</span>
                                <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
                                <div
                                    className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2 rounded"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div> */}
                {/* 
                <div className="flex gap-3">
                    <span className="skill-badge">React</span>
                    <span className="skill-badge">Tailwind</span>
                    <span className="skill-badge">Framer Motion</span>
                    <span className="skill-badge">TypeScript</span>
                </div> */}
            </motion.div>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:w-1/2 flex justify-center"
            >
                <div className="about-img-wrap">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-[500px] h-[500px] md:w-[80px ]md:h-[80px] rounded-xl shadow-2xl border-4  object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default About;
