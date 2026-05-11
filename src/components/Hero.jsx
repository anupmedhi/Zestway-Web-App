import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-8 bg-gray-50 pt-20"
      aria-label="Zestway India Hero Section"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-zest-yellow/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[40%] rounded-full bg-blue-100/40 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left pt-10 lg:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-semibold text-gray-700"
          >
            Your Growth Partner for Food & Beverage Businesses
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zest-black tracking-tight leading-[1.15] mb-6">
            Grow Your Food & Beverage Business With The <span className="text-blue-600">Right Partner</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            From branding and marketing to operations and technology, Zestway India helps food & beverage businesses scale smarter, attract more customers, and increase profitability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-zest-yellow text-zest-black rounded-xl font-bold text-lg shadow-premium hover:bg-yellow-400 transition-all text-center"
            >
              Let’s Grow Your Business
            </motion.a>
            
            <motion.a
              href="#consultation"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-zest-black border border-gray-200 rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all text-center"
            >
              Book A Consultation
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image/Graphics Using Provided Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2.5rem] bg-white shadow-premium border border-gray-100 overflow-hidden flex items-center justify-center">
             <img src="/images/vibrant-hero.png" alt="Zestway Hero" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zest-yellow rounded-full blur-2xl opacity-60 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
