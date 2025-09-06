// Header.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

function Header() {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Join Us", href: "#join" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-zest-black/95 text-white backdrop-blur-sm transition-all ${
        shadow ? "shadow-xl py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo with infinite rotation */}
        <a href="#hero" className="flex items-center gap-3" aria-label="Zestway home">
          <motion.img
            src="/images/zestway-logo.png"
            alt="Zestway India"
            draggable="false"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            animate={reduce ? {} : { rotate: 360 }}
            transition={reduce ? {} : { repeat: Infinity, duration: 12, ease: "linear" }}
          />
          <span className="sr-only">Zestway India</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group text-sm sm:text-base hover:text-zest-yellow transition"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-zest-yellow transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden origin-top transform transition-all bg-zest-black/95 ${
          menuOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-6 flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-lg text-white w-full text-center py-2 rounded hover:text-zest-yellow transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#join"
            className="w-full max-w-xs inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Join Community
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
