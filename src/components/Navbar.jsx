import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },   // ✅ Education + Experience merged
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Auto-close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50
                 backdrop-blur-xl bg-black/30
                 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-[#00FFC2]"
        >
          AS
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition
                 ${
                   isActive
                     ? "text-[#00FFC2]"
                     : "text-gray-300 hover:text-[#00FFC2]"
                 }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px]
                                 bg-[#00FFC2] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* RESUME BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/resume/Amisha_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl
                       bg-gradient-to-r from-[#00FFC2] to-[#00D4FF]
                       text-black font-semibold shadow-lg"
          >
            View Resume
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl
                       border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 space-y-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition
                     ${
                       isActive
                         ? "text-[#00FFC2]"
                         : "text-gray-300 hover:text-[#00FFC2]"
                     }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="/resume/Amisha_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center px-5 py-3 rounded-xl
                           bg-gradient-to-r from-[#00FFC2] to-[#00D4FF]
                           text-black font-semibold"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
