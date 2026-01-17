import React from "react";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-[#0a1222] via-[#0f1c33] to-[#090f1c]
                 py-32 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#00FFC2]/25 via-transparent to-transparent opacity-50" />

      {/* About Intro */}
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center mb-28"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          About <span className="text-[#00FFC2]">Me</span>
        </h2>

        <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          I am a motivated{" "}
          <span className="text-[#00FFC2] font-semibold">
            Software Engineer
          </span>{" "}
          with a strong foundation in{" "}
          <span className="text-[#00FFC2] font-semibold">Java</span> and full
          stack development. I enjoy building scalable and reliable applications,
          writing clean and maintainable code, and continuously improving my
          problem-solving skills through hands-on projects and real-world
          challenges.
        </p>
      </motion.div>

      {/* Experience Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-28">
          <Experience />
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-28" />

        {/* Education Section */}
        <Education />
      </div>
    </section>
  );
};

export default About;
