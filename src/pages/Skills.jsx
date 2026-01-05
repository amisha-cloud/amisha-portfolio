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
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-[#0f1c2e] via-[#162740] to-[#0a101c] py-28 overflow-hidden"
    >
      {/* Soft glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#00FFC2]/20 via-transparent to-transparent opacity-30" />

      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Skills & <span className="text-[#00FFC2]">Expertise</span>
        </h2>
        <p className="mt-5 text-white/65 text-lg max-w-2xl mx-auto">
          Technical and analytical skills built through hands-on projects and real-world problem solving.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Core Skills */}
        <motion.div
          variants={item}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-[#00FFC2]/40"
        >
          <h3 className="text-xl font-semibold text-white text-center">Core Skills</h3>
          <p className="text-sm text-white/60 text-center mt-2 mb-8">Primary technical strengths</p>

          <motion.div className="flex flex-wrap gap-3 justify-center" variants={container}>
            {[
              "Python Programming",
              "Data Analysis & EDA",
              "SQL & Databases",
              "Data Visualization",
              "Pandas & NumPy",
              "Statistical Thinking",
              "Machine Learning (Basics)",
              "Excel & Reporting",
            ].map((skill, index) => (
              <motion.span
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#00BFA5",
                  color: "#0a101c",
                }}
                className="px-4 py-2 rounded-full text-sm font-medium
                           bg-[#00FFC2]/10 text-[#00FFC2]
                           border border-[#00FFC2]/30
                           cursor-pointer
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
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-[#00FFC2]/40"
        >
          <h3 className="text-xl font-semibold text-white text-center">Tools & Technologies</h3>
          <p className="text-sm text-white/60 text-center mt-2 mb-8">Tools I work with regularly</p>

          <motion.div className="grid grid-cols-2 gap-4" variants={container}>
            {[
              "Python",
              "SQL",
              "Pandas",
              "NumPy",
              "Matplotlib",
              "Seaborn",
              "Excel",
              "Power BI",
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00BFA5",
                  color: "#0a101c",
                }}
                className="py-3 rounded-xl text-sm text-white/75 text-center
                           bg-white/5 border border-white/10
                           cursor-pointer
                           transition-all duration-300"
              >
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Analytical Approach */}
        <motion.div
          variants={item}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-[#00FFC2]/40"
        >
          <h3 className="text-xl font-semibold text-white text-center">Analytical Approach</h3>
          <p className="text-sm text-white/60 text-center mt-2 mb-8">How I think and solve problems</p>

          <motion.div className="space-y-4" variants={container}>
            {[
              "Problem Framing & Scoping",
              "Data Cleaning & Validation",
              "Pattern & Trend Discovery",
              "Statistical Reasoning",
              "Insight Communication",
              "Business-Oriented Thinking",
            ].map((strength, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#00BFA5",
                  color: "#0a101c",
                }}
                className="px-4 py-3 rounded-xl text-sm text-white/75
                           bg-white/5 border border-white/10
                           cursor-pointer
                           transition-all duration-300"
              >
                {strength}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
