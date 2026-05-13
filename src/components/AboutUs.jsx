import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

function AboutUs() {
  const focuses = [
    "Increase visibility",
    "Improve customer engagement",
    "Build stronger brand positioning",
    "Generate higher revenue",
    "Simplify operations"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
          
          {/* Left Side: Overlapping Images Collage */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto lg:max-w-none">
              
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2rem] overflow-hidden shadow-premium border-[6px] md:border-8 border-white z-10">
                <img src="/images/cafe-interior.png" alt="Cafe Interior" className="w-full h-full object-cover" />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-[2rem] overflow-hidden shadow-premium border-[6px] md:border-8 border-white z-20">
                <img src="/images/chef-plating.png" alt="Chef Plating" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 text-white">
                  <div className="font-bold text-3xl md:text-4xl mb-1 text-zest-yellow leading-none">100+</div>
                  <div className="font-semibold text-xs md:text-sm tracking-wide text-gray-200">F&B Businesses</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-[-10%] w-32 h-32 bg-zest-yellow/30 rounded-full blur-2xl -z-10" />
              <div className="absolute bottom-1/4 right-[-10%] w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10" />

            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold tracking-widest uppercase text-xs mb-6">
                About Zestway
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zest-black mb-6 leading-tight tracking-tight">
                Your Strategic Support Partner For F&B Growth
              </h3>
              
              <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                At Zestway India, we work closely with restaurants, cafés, lounges, bars, cloud kitchens, and food brands to help them grow through strategy, marketing, operations, and technology.
              </p>
              
              <p className="text-zest-black mb-8 font-bold text-base sm:text-lg">
                With experience working alongside 100+ food and beverage businesses, our focus is simple:
              </p>

              {/* Improved 1-column list for better alignment on mobile and desktop */}
              <ul className="flex flex-col gap-4 mb-10">
                {focuses.map((focus, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                      <FiCheckCircle size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-gray-700 font-medium text-base sm:text-lg leading-snug">{focus}</span>
                  </li>
                ))}
              </ul>

              {/* Redesigned Premium Quote Block */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm">
                <div className="absolute top-4 left-4 text-blue-200 opacity-50 text-6xl font-serif leading-none">"</div>
                <p className="relative z-10 text-blue-900 font-semibold text-xl md:text-2xl leading-relaxed pl-6">
                  Zestway is your growth partner.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
