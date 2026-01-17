import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-[#0b1426] via-[#12203a] to-[#0a101c] py-28 overflow-hidden"
    >
      {/* Soft glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#00FFC2]/25 via-transparent to-transparent opacity-40" />

      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Skills & <span className="text-[#00FFC2]">Technical Expertise</span>
        </h2>
        <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
          Core software engineering skills developed through hands-on projects
          and real-world problem solving.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Core Skills */}
        <motion.div
          variants={item}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="bg-[#0f1c2e]/90 backdrop-blur-xl border border-white/15
                     rounded-3xl p-9 shadow-xl hover:shadow-[#00FFC2]/30"
        >
          <h3 className="text-xl font-semibold text-white text-center">
            Core Skills
          </h3>
          <p className="text-sm text-white/70 text-center mt-3 mb-8">
            Primary software engineering strengths
          </p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            variants={container}
          >
            {[
              "Java Programming",
              "Object-Oriented Programming",
              "Data Structures & Algorithms",
              "Backend Development",
              "RESTful APIs",
              "SQL & Database Design",
              "Problem Solving",
              "System Fundamentals",
            ].map((skill, index) => (
              <motion.span
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#00FFC2",
                  color: "#0a101c",
                }}
                className="px-4 py-2 rounded-full text-sm font-medium
                           bg-[#00FFC2]/15 text-[#00FFC2]
                           border border-[#00FFC2]/40
                           transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={item}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="bg-[#0f1c2e]/90 backdrop-blur-xl border border-white/15
                     rounded-3xl p-9 shadow-xl hover:shadow-[#00FFC2]/30"
        >
          <h3 className="text-xl font-semibold text-white text-center">
            Tools & Technologies
          </h3>
          <p className="text-sm text-white/70 text-center mt-3 mb-8">
            Technologies I work with regularly
          </p>

          <motion.div className="grid grid-cols-2 gap-4" variants={container}>
            {[
              "Java",
              "Spring Boot",
              "MySQL",
              "REST APIs",
              "Git & GitHub",
              "HTML & CSS",
              "JavaScript",
              "Linux Basics",
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00FFC2",
                  color: "#0a101c",
                }}
                className="py-3 rounded-xl text-sm font-medium
                           text-white/85 text-center
                           bg-[#12203a]
                           border border-white/15
                           transition-all duration-300"
              >
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Engineering Approach */}
        <motion.div
          variants={item}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="bg-[#0f1c2e]/90 backdrop-blur-xl border border-white/15
                     rounded-3xl p-9 shadow-xl hover:shadow-[#00FFC2]/30"
        >
          <h3 className="text-xl font-semibold text-white text-center">
            Engineering Approach
          </h3>
          <p className="text-sm text-white/70 text-center mt-3 mb-8">
            How I design and build solutions
          </p>

          <motion.div className="space-y-4" variants={container}>
            {[
              "Problem Decomposition",
              "Clean & Maintainable Code",
              "Algorithmic Thinking",
              "Debugging & Optimization",
              "Code Readability & Reusability",
              "Scalable Solution Design",
            ].map((itemText, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#00FFC2",
                  color: "#0a101c",
                }}
                className="px-4 py-3 rounded-xl text-sm font-medium
                           text-white/85
                           bg-[#12203a]
                           border border-white/15
                           transition-all duration-300"
              >
                {itemText}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
