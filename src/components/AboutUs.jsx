// AboutUs.jsx
import React from "react";
import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUs() {

  return (
    <section id="about" className="bg-zest-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zest-yellow/10 text-zest-yellow text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-zest-yellow animate-pulse" />
            Our Story
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-zest-black mb-6 tracking-tight">
            About <span className="text-zest-yellow">Zestway India</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            At Zestway, we believe food is more than what’s on the plate—it’s a
            story waiting to be shared. Born out of a passion for creative
            marketing, we celebrate flavor, culture, and collaboration.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              id: "mission",
              icon: <FaBullseye className="text-3xl" />,
              title: "Our Mission",
              desc: "Empower F&B brands to shine online with viral campaigns, influencer collaborations, and innovative content marketing.",
              color: "bg-zest-yellow/10 text-zest-yellow"
            },
            {
              id: "vision",
              icon: <FaLightbulb className="text-3xl" />,
              title: "Our Vision",
              desc: "Make every F&B brand stand out with creative campaigns that attract customers, boost engagement, and drive growth.",
              color: "bg-orange-50 text-orange-600"
            },
            {
              id: "journey",
              icon: <FaUsers className="text-3xl" />,
              title: "Our Journey",
              desc: "With 100+ clients onboard, our journey spans from festive feasts in Guwahati to coffee culture in Bengaluru.",
              color: "bg-zinc-100 text-zest-black"
            }
          ].map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-10 rounded-3xl flex flex-col items-center text-center"
            >
              <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center mb-8 shadow-sm`}>
                {item.icon}
              </div>

              <h3 id={item.id} className="text-2xl font-bold text-zest-black mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Closing paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-10 border-t border-gray-200"
        >
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium italic">
            "From viral reels to live coffee raves, Zestway turns food, culture, and creativity
            into campaigns that excite, engage, and grow your brand."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
