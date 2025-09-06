import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/images/hero-bg')" }}
      aria-label="Zestway hero section"
    >
      {/* Dark overlay + subtle radial for better contrast on mobile */}
      <div className="absolute inset-0 bg-black/65 sm:bg-black/55"></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 10% 10%, rgba(255,255,255,0.02), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-white px-2">
        {/* Emojis row */}
        <div className="mb-3 flex justify-center gap-2 text-xl sm:text-2xl" aria-hidden>
          <span>🍟</span>
          <span>🍕</span>
          <span>🥤</span>
          <span>🍔</span>
          <span>🧋</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal mb-3 sm:mb-4 leading-snug sm:leading-tight">
          Step into the future of F&B with{" "}
          <motion.span
            className="text-zest-yellow font-bold inline-block"
            aria-label="Zestway India"
            animate={{
              scale: [1, 1.04, 1],
              rotate: [0, 1.5, -1.5, 0],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Zestway India.
          </motion.span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-12 sm:mb-16 max-w-xl mx-auto">
          Join the revolution in Food & Beverage campaigns, viral content, community
          events and an awesome experience.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/1uHEwnk5S4F3FGiT0VLz4SyFnkpPc24qKbYIhTWiVMLg/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:min-w-[260px] bg-zest-yellow text-black px-6 py-4 rounded-full font-semibold text-base sm:px-12 sm:py-4 sm:text-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition text-center"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
