import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

function Testimonials() {
  const testimonials = [
    {
      quote: "Zestway helped us completely transform our brand visibility and customer engagement.",
      name: "Restaurant Owner",
      role: "Fine Dining Lounge",
    },
    {
      quote: "Their marketing campaigns and event planning significantly improved our footfall and sales.",
      name: "Café Founder",
      role: "Artisan Coffee House",
    },
    {
      quote: "The team understands the F&B business beyond just marketing. Highly recommended.",
      name: "Brand Manager",
      role: "Cloud Kitchen Chain",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zest-black leading-tight">
            What Businesses Say About Us
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 text-zest-yellow mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current" size={18} />
                ))}
              </div>
              <p className="text-gray-700 text-lg font-medium italic mb-8 flex-grow">
                "{testi.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-zest-black">{testi.name}</h5>
                  <p className="text-sm text-gray-500">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
