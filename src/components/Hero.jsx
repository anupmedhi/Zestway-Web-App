import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-8"
      aria-label="Zestway hero section"
    >
      {/* Modern Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-zest-yellow/30 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-orange-200/40 blur-[100px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-yellow-100/50 blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Emojis row */}
          <div className="mb-6 flex justify-center gap-4 text-2xl sm:text-3xl opacity-80" aria-hidden>
            <span>🍟</span>
            <span>🍕</span>
            <span>🥤</span>
            <span>🍔</span>
            <span>🧋</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-zest-black leading-[1.1]">
            Step into the <br className="hidden md:block" /> future of F&B with{" "}
            <span className="relative inline-block text-zest-yellow">
              Zestway
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-zest-yellow/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the revolution in Food & Beverage campaigns, viral content, community
            events and an awesome experience.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <motion.a
              href="https://docs.google.com/forms/d/1uHEwnk5S4F3FGiT0VLz4SyFnkpPc24qKbYIhTWiVMLg/edit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full sm:w-auto px-10 py-5 bg-zest-black text-white rounded-2xl font-bold text-lg shadow-premium hover:bg-zinc-800 transition-all overflow-hidden"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zest-yellow/0 via-zest-yellow/10 to-zest-yellow/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.a>

            <a
              href="#about"
              className="text-zest-black font-semibold hover:text-zest-yellow transition-colors flex items-center gap-2 px-6 py-3"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
