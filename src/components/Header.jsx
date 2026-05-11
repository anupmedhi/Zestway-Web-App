import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <a href="#" className="flex items-center group">
          <motion.img 
            src="/images/zestway-logo.png" 
            alt="Zestway" 
            className="h-8 md:h-10 object-contain origin-left"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
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
            href="#contact"
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
            className="fixed inset-0 z-50 bg-white md:hidden flex flex-col px-6 pt-6 pb-8"
          >
            <div className="flex justify-between items-center mb-12">
              <img src="/images/zestway-logo.png" alt="Zestway" className="h-8 object-contain" />
              <button
                className="text-gray-500 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiX size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 flex-grow">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-zest-black"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold text-lg text-center shadow-md"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
