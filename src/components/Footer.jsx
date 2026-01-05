import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0f1c2e] via-[#162740] to-[#0a101c] text-white w-full py-12 px-6 border-t border-gray-800">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Footer Text */}
        <div className="text-center md:text-left">
          <p className="text-white/70 text-sm">
            Developed with ❤️ by Amisha Singh
          </p>
          <p className="text-white/50 text-xs mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/amisha-singh12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00FFC2] transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/amisha-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00FFC2] transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:amishasingh8429@gmail.com"
            className="hover:text-[#00FFC2] transition-colors duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
