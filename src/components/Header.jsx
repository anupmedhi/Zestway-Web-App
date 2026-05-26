import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfcDlDbhVI5XV_ZOdidchhgLFBvMyCtmyBh1PVzN3WZB5O1Eg/viewform";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Prime POS", href: "#pos" },
  ];

  const mobileMenu = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] h-dvh overflow-y-auto overscroll-contain bg-zest-black px-5 py-5 text-white md:hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 flex min-h-full flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-lg shadow-black/30">
                <img src="/images/zestway-logo.png" alt="Zestway" className="h-10 object-contain" />
                <span className="block text-base font-extrabold text-zest-black tracking-normal leading-none">
                  Zestway
                </span>
              </div>
              <button
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center shadow-sm shadow-black/30"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="mt-8 mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zest-yellow">
                Menu
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                What would you like to explore?
              </h2>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex min-h-[4.25rem] items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-white shadow-sm shadow-black/20 transition-colors hover:border-zest-yellow hover:bg-white/[0.1]"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="w-7 text-sm font-bold text-zest-yellow">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate text-xl font-extrabold">{link.name}</span>
                  </span>
                  <FiArrowRight className="shrink-0 text-white/45 transition-colors group-hover:text-zest-yellow" size={22} />
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-5">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-14 bg-zest-yellow text-zest-black rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 shadow-lg shadow-black/25"
              >
                Contact Us
                <FiArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <motion.img 
              src="/images/zestway-logo.png" 
              alt="Zestway" 
              className="h-12 md:h-14 object-contain origin-left"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="text-lg md:text-xl font-extrabold text-zest-black tracking-normal">
              Zestway
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-zest-yellow text-zest-black rounded-full font-bold text-sm shadow-sm hover:bg-yellow-400 hover:shadow-md transition-all"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zest-black p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>

        </div>
      </header>

      {typeof document !== "undefined" ? createPortal(mobileMenu, document.body) : mobileMenu}
    </>
  );
}

export default Header;
