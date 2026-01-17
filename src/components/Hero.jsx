import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile.jpeg";
import profilePic2 from "../assets/profile2.jpeg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [init, setInit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#0f1c2e] via-[#162740] to-[#0a101c] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#00FFC2]/20 via-transparent to-transparent opacity-30" />

      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0 pointer-events-none"
          options={{
            fpsLimit: 80,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" }, resize: true },
              modes: { push: { quantity: 3 }, grab: { distance: 140, links: { opacity: 0.4 } } },
            },
            particles: {
              color: { value: "#00FFC2" },
              links: { color: "#00FFC2", distance: 150, enable: true, opacity: 0.4, width: 1 },
              move: { enable: true, speed: 0.8, outModes: { default: "out" } },
              number: { value: 60, density: { enable: true, area: 800 } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 2, max: 4 } },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center w-full">
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Turning <span className="text-[#00FFC2]">Ideas</span> into <br />
            <span className="text-[#FFD700]">Scalable Software</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
          <Typewriter
          words={["Aspiring Software Engineer", "Java Developer", "Full-Stack Developer", "Problem Solver"]}
          loop={0}
          cursor = {false}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
          />
</p>


          <motion.p
      className="text-gray-400 max-w-xl text-xl leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      I aim to build meaningful technology that helps people solve real problems. My goal is to use technology thoughtfully, turning ideas into reliable tools that create real value and contribute positively to society.
    </motion.p>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/projects")}
              className="px-7 py-3 bg-gradient-to-r from-[#00FFC2] to-[#00D4FF] text-black rounded-xl font-semibold shadow-lg"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/contact")}
              className="px-7 py-3 border border-gray-400 text-gray-200 rounded-xl hover:bg-white/10"
            >
              Contact Me
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="inline-block mt-8 px-6 py-3.5 rounded-2xl
             bg-gradient-to-r from-white/5 to-white/10
             border border-white/20
             backdrop-blur-xl
             shadow-lg shadow-black/20
             hover:border-[#00FFC2]/50
             transition-all duration-300"
>
            <p className="text-sm md:text-base font-medium
               text-white/80
               hover:text-[#00FFC2]
               transition-colors duration-300">
            Turning curiosity into clarity, and effort into impact
            </p>
            </motion.div> 
        </motion.div>


        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <div className="relative w-[300px] h-[420px] md:w-[360px] md:h-[480px]
                          rounded-3xl bg-gradient-to-br 
                          from-[#00FFC2]/20 via-[#0f1c2e] to-[#FFD700]/20
                          p-3 shadow-2xl backdrop-blur-xl">
            <motion.img
              src={profilePic}
              alt="Professional Portrait"
              className="absolute top-5 left-5 w-[80%] h-[80%] object-cover rounded-2xl border border-white/10 shadow-xl"
              whileHover={{ scale: 1.02 }}
            />

            <motion.img
              src={profilePic2}
              alt="Presentation"
              className="absolute bottom-5 right-5 w-[80%] h-[50%] object-cover rounded-2xl border border-white/10 shadow-lg"
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
