import React from "react";
import { motion } from "framer-motion";

import chatbotImg from "../assets/chatbot.png";
import chatImg from "../assets/chat.png";
import honestGigImg from "../assets/honestgig.png";
import honestGigPreview from "../assets/honestgig2.png";

const projects = [
  {
    title: "Internal Employee Chatbot",
    tag: "Bombay Dyeing",
    tech: "React · FastAPI · Ollama",
    live: "https://bombay-dyeing-chatbot.vercel.app/",
    source: "https://github.com/amisha-cloud/Bombay_Dyeing_Chatbot.git",
    images: [chatbotImg, chatImg],
    description:
      "An AI-powered internal chatbot enabling employees to quickly access organizational knowledge through a secure and intuitive interface."
  },
  {
    title: "HonestGig",
    tag: "Decentralized Gig Platform",
    tech: "React · Solidity · MetaMask",
    live: "https://honestgig.vercel.app/",
    source: "https://github.com/amisha-cloud/Honestgig.git",
    images: [honestGigImg, honestGigPreview],
    description:
      "A decentralized gig marketplace enabling trustless hiring and blockchain-based payments using smart contracts."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-[#0f1c2e] via-[#162740] to-[#0a101c]
                 py-24 min-h-screen overflow-hidden"
    >
      {/* Soft glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial
                      from-[#00FFC2]/20 via-transparent to-transparent opacity-30" />

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Projects
        </h2>
        <p className="mt-4 text-white/65 max-w-xl">
          A curated selection of projects demonstrating real-world problem solving,
          scalability, and clean system design.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl overflow-hidden
                       bg-white/5 backdrop-blur-xl
                       border border-white/10
                       hover:border-[#00FFC2]/40
                       transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              {/* Base image */}
              <img
                src={project.images[0]}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover
                           scale-105 group-hover:scale-110
                           transition-transform duration-700"
              />

              {/* Hover image */}
              {project.images[1] && (
                <img
                  src={project.images[1]}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 w-full h-full object-cover
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t
                              from-[#050b18]/90 via-[#050b18]/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl font-medium text-[#00FFC2]">
                {project.title}
              </h3>

              <p className="text-sm text-white/55 mt-1">
                {project.tag}
              </p>

              <p className="text-sm text-white/70 mt-4 leading-relaxed">
                {project.description}
              </p>

              <span className="block text-xs text-[#00FFC2] mt-5">
                {project.tech}
              </span>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-sm font-medium
                             bg-[#00FFC2] text-black
                             hover:bg-[#1FFFD5] transition"
                >
                  Live →
                </a>

                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-white
                             border border-white/30
                             hover:border-[#00FFC2] hover:text-[#00FFC2]
                             transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
