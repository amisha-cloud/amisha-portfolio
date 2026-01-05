import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Mentee",
    org: "Pragati: Path to Future – Cohort 6",
    duration: "Jul 2025 ",
    description:
      "Enhanced problem-solving & analytical skills through structured mentorship in Python & Data Science."
  },
  {
    role: "Full Stack Developer Intern",
    org: "IISPPR",
    duration: "Jul 2025 – Sep 2025",
    description:
      "Built and deployed a responsive global front-end platform using React.js, optimized for performance."
  },
  {
    role: "In-Plant Trainee",
    org: "Bombay Dyeing",
    duration: "Jun 2025 – Jul 2025",
    description:
      "Developed an AI-powered employee chatbot using React.js & FastAPI, integrating real-time API responses."
  }
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut" }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-br
                 from-[#0f1c2e] via-[#162740] to-[#0a101c]
                 py-20 min-h-screen"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00FFC2]">
          Experience
        </h2>
        <p className="mt-3 text-white/60 max-w-xl mx-auto">
          Selected internships, mentorships, and hands-on professional learning.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="relative rounded-2xl p-6
                       bg-white/5 backdrop-blur-md
                       border border-white/10
                       shadow-md hover:shadow-[#00FFC2]/30"
          >
            <h3 className="text-xl font-semibold text-[#00FFC2]">
              {exp.role}
            </h3>
            <p className="text-white/80 mt-1">{exp.org}</p>
            <p className="text-sm text-white/50 mt-1">{exp.duration}</p>

            <p className="text-white/70 mt-4 leading-snug line-clamp-2">
              {exp.description}
            </p>

            <span className="absolute left-[-12px] top-8 w-3 h-3 rounded-full bg-[#00FFC2]" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
