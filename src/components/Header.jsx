import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 bg-zest-black text-white py-4 px-6 transition-all ${
        shadow ? "shadow-xl" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <h1 className="text-3xl font-extrabold tracking-tight cursor-pointer text-zest-yellow">
          Zestway
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {["Home", "About Us", "Join Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-zest-yellow transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zest-black text-center py-6 space-y-4">
          <a href="#hero" className="block hover:text-zest-yellow">Home</a>
          <a href="#about" className="block hover:text-zest-yellow">About Us</a>
          <a href="#join" className="block hover:text-zest-yellow">Join Us</a>
        </div>
      )}
    </header>
  );
}

export default Header;
