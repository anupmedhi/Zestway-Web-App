// JoinUs.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function JoinUs() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.04 } }),
  };

  return (
    <section
      id="join"
      className="relative bg-cover bg-center py-20 sm:py-28 px-4 sm:px-6 text-center"
      style={{ backgroundImage: "url('/images/coffee-cover.jpg')" }}
      aria-label="Join Zestway community"
    >
      {/* Dark overlay (slightly stronger for readability) */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/60"></div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 360px at 50% 22%, rgba(0,0,0,0.25), rgba(0,0,0,0.1) 40%, transparent 65%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-white px-4"
        initial={reduce ? {} : "hidden"}
        whileInView={reduce ? {} : "show"}
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {/* Overline */}
        <motion.div className="overline text-zest-yellow mb-3" variants={item}>
          Join Community
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight"
          variants={item}
        >
          Join the Bengaluru’s No.1 Coffee Community ♥️
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          variants={item}
        >
          At Zestway, coffee is more than just a drink—it’s a culture. We’re building the biggest coffee-loving community in Bengaluru, be a part of it.
        </motion.p>

        <motion.div className="flex justify-center" variants={item}>
          <a
            href="https://chat.whatsapp.com/E0h8BKWwc5RAJTHPTNyfgB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join WhatsApp Community"
            className="w-full sm:w-auto sm:min-w-[300px] bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-base sm:px-14 sm:py-4 shadow-lg hover:bg-green-700 transform hover:scale-105 transition text-center"
          >
            WhatsApp Community
          </a>
        </motion.div>

        <div className="mt-8 sm:mt-12" />
      </motion.div>
    </section>
  );
}
