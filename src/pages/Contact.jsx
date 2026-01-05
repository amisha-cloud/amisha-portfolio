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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 min-h-screen bg-[#0b0f1a] flex flex-col items-center justify-center px-6 py-12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4 border-b-2 border-[#00FFC2] pb-2">
          Contact Me
        </h2>
        <p className="text-white/60 max-w-xl mx-auto">
          Have a question or want to collaborate? Send me a message below.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#0a0f1b] p-8 rounded-xl shadow-lg flex flex-col space-y-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          variants={item}
          className="p-4 rounded-md bg-[#1a1f2b] text-white border border-gray-700 focus:outline-none focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2]"
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          variants={item}
          className="p-4 rounded-md bg-[#1a1f2b] text-white border border-gray-700 focus:outline-none focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2]"
        />

        <motion.textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          variants={item}
          className="p-4 rounded-md bg-[#1a1f2b] text-white border border-gray-700 focus:outline-none focus:border-[#00FFC2] focus:ring-1 focus:ring-[#00FFC2] resize-none"
        ></motion.textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          variants={item}
          className="bg-[#00FFC2] hover:bg-[#00BFA5] text-black font-semibold py-3 rounded-md transition-transform"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
