import React, { useState, useEffect } from "react";
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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Prime POS", href: "#pos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
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
        >
          <FiMenu size={24} />
        </button>

      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-zest-black md:hidden flex flex-col px-5 pt-5 pb-6 text-white"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 rounded-full bg-white px-3 py-2">
                <img src="/images/zestway-logo.png" alt="Zestway" className="h-10 object-contain" />
                <span className="block text-base font-extrabold text-zest-black tracking-normal leading-none">
                  Zestway
                </span>
              </div>
              <button
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="mt-10 mb-7">
              <p className="text-sm font-bold uppercase tracking-widest text-zest-yellow">
                Menu
              </p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight">
                What would you like to explore?
              </h2>
            </div>
            
            <nav className="flex flex-col gap-3 flex-grow">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white transition-colors hover:border-zest-yellow hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-sm font-bold text-zest-yellow">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-2xl font-extrabold">{link.name}</span>
                  </span>
                  <FiArrowRight className="text-white/40 transition-colors group-hover:text-zest-yellow" size={22} />
                </a>
              ))}
            </nav>

            <div className="pt-5">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-14 bg-zest-yellow text-zest-black rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 shadow-lg shadow-black/20"
              >
                Contact Us
                <FiArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
