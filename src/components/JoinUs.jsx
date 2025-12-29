// JoinUs.jsx
import React from "react";
import { motion } from "framer-motion";

export default function JoinUs() {

  return (
    <section
      id="join"
      className="relative py-24 sm:py-32 px-6 lg:px-8 overflow-hidden bg-white"
      aria-label="Join Zestway community"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zest-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto glass-card p-12 sm:p-20 rounded-[40px] text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-8">
          Community First
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-zest-black mb-6 tracking-tight leading-[1.1]">
          Join Bengaluru’s <br className="hidden sm:block" /> No.1 Coffee Community ☕️
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          At Zestway, coffee is more than just a drink—it’s a culture. We’re building
          the biggest coffee-loving community in Bengaluru. Be a part of the movement.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.a
            href="https://chat.whatsapp.com/E0h8BKWwc5RAJTHPTNyfgB"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-12 py-5 bg-green-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-green-200 hover:bg-green-700 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.03L0 24l6.123-1.605a11.805 11.805 0 005.925 1.603h.005c6.635 0 12.05-5.414 12.05-12.05a11.813 11.813 0 00-3.639-8.413z" />
            </svg>
            Join WhatsApp Group
          </motion.a>
        </div>

        <p className="mt-8 text-sm text-gray-400 font-medium">
          Trusted by 500+ coffee enthusiasts across Bengaluru
        </p>
      </motion.div>
    </section>
  );
}
