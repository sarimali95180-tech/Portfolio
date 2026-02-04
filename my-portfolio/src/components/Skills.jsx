// src/components/Skills.jsx
import React, { useEffect, useRef, useState } from "react";

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

  // Intersection Observer to trigger animation when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className="bg-gray-100 dark:bg-gray-900 py-12 px-4"
      id="skills"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          My Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Technologies and tools I use to build modern, responsive web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {skill.name}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transition: "width 1.5s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
