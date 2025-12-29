// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

function Header() {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const reduce = useReducedMotion();

  const logoSrc = `${process.env.PUBLIC_URL || ""}/images/zestway-logo.png`;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shadow ? "glass-header py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#hero" className="flex items-center gap-3 group no-underline" aria-label="Zestway home">
          {!imgError ? (
            <div className="relative">
              <motion.img
                src={logoSrc}
                alt="Zestway India"
                draggable="false"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-110"
                onError={(e) => {
                  console.warn("Logo not found at:", logoSrc);
                  setImgError(true);
                  e.currentTarget.style.display = "none";
                }}
                animate={reduce ? {} : { rotate: 360 }}
                transition={reduce ? {} : { repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-zest-yellow/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ) : (
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-zest-yellow transition-colors">
              Zestway <span className="text-zest-yellow group-hover:text-white">India</span>
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 font-medium whitespace-nowrap">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm tracking-wide transition-colors duration-200 ${shadow ? "text-zest-black hover:text-zest-yellow" : "text-white/90 hover:text-white"
                }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zest-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#join"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${shadow
                ? "bg-zest-black text-white hover:bg-zest-yellow hover:text-zest-black shadow-lg shadow-zest-black/10"
                : "bg-white text-zest-black hover:bg-zest-yellow shadow-lg shadow-white/5"
              }`}
          >
            Join Community
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-2xl focus:outline-none transition-colors ${shadow || menuOpen ? "text-zest-black" : "text-white"
            }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          height: menuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl"
        aria-hidden={!menuOpen}
      >
        <div className="px-8 py-10 flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-2xl font-semibold text-zest-black hover:text-zest-yellow transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#join"
            className="inline-flex items-center justify-center bg-zest-black text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-zest-black/10 active:scale-95 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Join Community
          </a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
