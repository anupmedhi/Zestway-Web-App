// AboutUs.jsx
import React from "react";
import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutUs() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.04 } }),
  };

  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <motion.div
          initial={reduce ? {} : "hidden"}
          whileInView={reduce ? {} : "show"}
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center"
        >
          {/* overline */}
          <div className="mx-auto mb-6 w-20 h-0.5 bg-zest-yellow rounded-sm" />

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-black mb-4"
            variants={item}
          >
            About <span className="text-zest-yellow font-bold">Zestway India</span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed"
            variants={item}
          >
            At Zestway, we believe food is more than what’s on the plate—it’s a
            story waiting to be shared. Born out of a passion for creative
            marketing in the F&B industry, we’ve built a community where brands,
            creators, and food lovers come together to celebrate flavor, culture,
            and collaboration.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12"
          initial={reduce ? {} : "hidden"}
          whileInView={reduce ? {} : "show"}
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.article
            variants={item}
            className="card-surface p-6 sm:p-8 text-center"
            aria-labelledby="mission"
          >
            <div className="w-14 h-14 rounded-xl bg-zest-yellow/10 text-zest-yellow flex items-center justify-center mx-auto mb-4">
              <FaBullseye className="text-2xl" />
            </div>

            <h3 id="mission" className="text-lg sm:text-xl font-semibold text-black mb-2">
              Our Mission
            </h3>

            <p className="text-sm text-gray-700">
              Empower F&B brands to shine online with viral campaigns, influencer collaborations, and innovative content marketing.
            </p>
          </motion.article>

          <motion.article
            variants={item}
            className="card-surface p-6 sm:p-8 text-center"
            aria-labelledby="vision"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <FaLightbulb className="text-2xl" />
            </div>

            <h3 id="vision" className="text-lg sm:text-xl font-semibold text-black mb-2">
              Our Vision
            </h3>

            <p className="text-sm text-gray-700">
              Make every F&B brand stand out with creative campaigns that attract customers, boost engagement, and drive growth.
            </p>
          </motion.article>

          <motion.article
            variants={item}
            className="card-surface p-6 sm:p-8 text-center"
            aria-labelledby="journey"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-50 text-black flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-2xl" />
            </div>

            <h3 id="journey" className="text-lg sm:text-xl font-semibold text-black mb-2">
              Our Journey
            </h3>

            <p className="text-sm text-gray-700">
              With 100+ clients onboard, our journey spans from festive feasts in Guwahati to coffee culture in Bengaluru—and we’re just getting started.
            </p>
          </motion.article>
        </motion.div>

        {/* Closing paragraph + subtle divider */}
        <motion.div
          initial={reduce ? {} : "hidden"}
          whileInView={reduce ? {} : "show"}
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-12 text-center"
        >
          <motion.p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-6" variants={item}>
            From viral reels to live coffee raves, Zestway turns food, culture, and creativity
            into campaigns that excite, engage, and grow your brand.
          </motion.p>

          <div className="mx-auto w-full max-w-xl border-t border-gray-100" />
        </motion.div>
      </div>
    </section>
  );
}
