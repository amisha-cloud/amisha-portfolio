import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const Education = () => {
  const cards = [
    {
      title: "Master of Computer Applications (MCA)",
      subtitle: "Amity University, Mumbai",
      detail: "Deepened my programming, problem-solving, and project management skills.",
      icon: <FaGraduationCap size={30} className="text-[#FFD700]" />,
      highlight: "CGPA 9.63",
    },
    {
      title: "Bachelor of Science (B.Sc.)",
      subtitle: "Mathematics",
      detail: "Strengthened analytical thinking and logical reasoning.",
      icon: <FaUniversity size={30} className="text-[#FFD700]" />,
      highlight: "CGPA 7.21",
    },
    {
      title: "Freedom Employability Academy (FEA)",
      subtitle: "FEA Graduate",
      detail: "Successfully completed the program with hands-on workshops and projects, enhancing employability, leadership, and communication skills.",
      icon: <FaLightbulb size={30} className="text-[#FF7F50]" />,
    },
    {
      title: "National Service Scheme (NSS)",
      subtitle: "Community volunteering",
      detail: "Engaged in social initiatives promoting teamwork, leadership, and social awareness.",
      icon: <FaHandsHelping size={30} className="text-[#FF7F50]" />,
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-gradient-to-br from-[#0f1c2e] via-[#162740] to-[#0a101c] py-20 min-h-screen"
    >
      {/* Header */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00FFC2]">
          Education
        </h2>
        <p className="mt-3 text-white/60 max-w-xl mx-auto">
          My learning journey so far—academics, skill development, and volunteering.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-start gap-4 shadow-md hover:shadow-lg hover:shadow-[#FFD700]/30"
          >
            <div className="flex items-center gap-3">
              {card.icon}
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {card.title}
              </h3>
            </div>
            <p className="text-sm text-white/60">{card.subtitle}</p>
            <p className="text-sm text-white/70 mt-2">{card.detail}</p>
            {card.highlight && (
              <span className="mt-auto text-[#00FFC2] font-semibold text-sm">
                {card.highlight}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
