import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "React.js", level: 92 },
    { name: "Tailwind CSS", level: 96 },
    { name: "JavaScript", level: 88 },
    { name: "Framer Motion", level: 84 },
    { name: "Accessibility", level: 80 },
];

const roles = ["Frontend Developer", "React.js Developer", "UI/UX Enthusiast"];

const About = () => {
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
            transition: { duration: 0.6 },
        },
    };

    const handleDownload = () => {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const imgPath = "/Sarim Ali CV.png";

            const img = new Image();
            img.src = imgPath;
            img.onload = () => {
                const pdfWidth = doc.internal.pageSize.getWidth();
                const pdfHeight = (img.height * pdfWidth) / img.width;

                doc.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
                doc.save("Sarim_Ali_CV.pdf");
            };
        } catch (error) {
            console.error("jsPDF not loaded yet:", error);
            alert("The download feature is still initializing. Please try again in a few seconds.");
        }
    };

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-900 relative overflow-hidden"
        >
            {/* Animated background decorations */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                    y: [0, 50, 0],
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            />

            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mb-10 md:mb-0 relative z-10"
            >
                <motion.h3
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-gray-800 dark:text-white mb-2"
                >
                    Hi, I'm <motion.span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                        animate={{
                            backgroundPosition: ["0%", "100%", "0%"],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Sarim Ali
                    </motion.span>
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mt-3 mb-3 h-12"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                        {text}
                    </span>
                    <span className="text-blue-500 blink">|</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
                >
                    I build modern, accessible, delightfully animated interfaces and responsive user-friendly websites. I focus on fast, responsive experiences with attention to details.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 mb-8"
                >
                    <motion.button
                        onClick={handleDownload}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg glow-button cursor-pointer"
                    >
                        Download CV
                    </motion.button>
                    <motion.a
                        href="#contact"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold shadow-lg glow-button"
                    >
                        Contact Me
                    </motion.a>
                    {/* <motion.a
                        href="#projects"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold shadow-lg glow-button"
                    >
                        See My Projects
                    </motion.a> */}
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                >
                    <p className="text-gray-600 dark:text-gray-400 font-semibold mb-4">Key Skills:</p>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-center gap-3 group"
                        >
                            <motion.div
                                className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                />
                            </motion.div>
                            <span className="text-gray-700 dark:text-gray-300 font-semibold min-w-[100px] group-hover:text-blue-500 transition">
                                {skill.name} ({skill.level}%)
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:w-1/2 flex justify-center relative z-10"
            >
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {/* Glowing border effect */}
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(59, 130, 246, 0.5)",
                                "0 0 40px rgba(139, 92, 246, 0.8)",
                                "0 0 20px rgba(59, 130, 246, 0.5)",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                    />

                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-blue-500/30 object-cover relative z-10"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
