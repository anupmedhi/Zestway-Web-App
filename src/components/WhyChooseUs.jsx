import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

function WhyChooseUs() {
  const points = [
    "Industry-focused expertise in food & beverage",
    "Complete growth ecosystem under one roof",
    "Creative + technology-driven solutions",
    "Strong understanding of customer behavior",
    "Dedicated support and strategic planning",
    "Proven experience with local and regional brands",
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center border border-gray-100">
          
          <div className="lg:w-1/3">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Why Zestway</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-zest-black leading-tight mb-6">
              Why Businesses Choose Us
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We bring specialized knowledge and a complete toolkit to ensure your food and beverage brand stands out and scales up efficiently.
            </p>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiCheck strokeWidth={3} />
                </div>
                <p className="text-gray-800 font-semibold">{point}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
