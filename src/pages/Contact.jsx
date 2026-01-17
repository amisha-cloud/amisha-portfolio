import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  const container = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-[#0a1222] via-[#0f1c33] to-[#090f1c]
                 px-6 py-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#00FFC2]/25 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get in <span className="text-[#00FFC2]">Touch</span>
          </h2>
          <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
            Have a question, opportunity, or idea to discuss? I’d love to hear
            from you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#0f1c2e]/90 backdrop-blur-xl border border-white/15
                     rounded-3xl p-8 md:p-10 shadow-2xl space-y-6"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            variants={item}
            className="w-full p-4 rounded-xl bg-[#12203a] text-white/90
                       placeholder:text-white/50
                       border border-white/15
                       focus:outline-none focus:border-[#00FFC2]
                       focus:ring-2 focus:ring-[#00FFC2]/30"
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            variants={item}
            className="w-full p-4 rounded-xl bg-[#12203a] text-white/90
                       placeholder:text-white/50
                       border border-white/15
                       focus:outline-none focus:border-[#00FFC2]
                       focus:ring-2 focus:ring-[#00FFC2]/30"
          />

          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            variants={item}
            className="w-full p-4 rounded-xl bg-[#12203a] text-white/90
                       placeholder:text-white/50
                       border border-white/15
                       focus:outline-none focus:border-[#00FFC2]
                       focus:ring-2 focus:ring-[#00FFC2]/30
                       resize-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            variants={item}
            className="w-full py-3.5 rounded-xl font-semibold text-black
                       bg-gradient-to-r from-[#00FFC2] to-[#00D4FF]
                       shadow-lg shadow-[#00FFC2]/30
                       hover:shadow-[#00FFC2]/50 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
