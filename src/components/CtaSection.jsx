import React from "react";
import { motion } from "framer-motion";

function CtaSection() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfcDlDbhVI5XV_ZOdidchhgLFBvMyCtmyBh1PVzN3WZB5O1Eg/viewform";

  return (
    <section id="contact" className="py-14 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[3rem] bg-gradient-to-br from-zest-black via-gray-900 to-zest-black px-5 py-8 sm:p-10 md:p-16 lg:p-24 text-center shadow-premium overflow-hidden border border-gray-800"
        >
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-zest-yellow/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block max-w-full px-4 sm:px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-zest-yellow font-bold tracking-widest text-xs sm:text-sm uppercase mb-5 sm:mb-8"
            >
              Start Your Journey
            </motion.div>

            <h2 className="text-[2.35rem] sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-8 leading-[1.08] sm:leading-[1.15] tracking-tight">
              Ready To Grow Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zest-yellow to-orange-400">F&B Business?</span>
            </h2>
            
            <p className="text-gray-300/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium">
              Whether you are launching a new brand, scaling an existing restaurant, or looking for smarter operations — Zestway India is here to help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <motion.a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto min-h-14 px-6 sm:px-10 py-4 sm:py-5 bg-zest-yellow text-zest-black rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-[0_0_40px_-10px_rgba(255,216,77,0.5)] hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
              >
                Schedule A Meeting
              </motion.a>
              <motion.a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto min-h-14 px-6 sm:px-10 py-4 sm:py-5 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all"
              >
                Get A Free Consultation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaSection;
