import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  const portfolios = [
    {
      title: "Restaurant & Café Marketing",
      tags: ["Social media campaigns", "Reels & content strategy", "Food photography", "Influencer campaigns"],
      imageSrc: "/images/coffee-cover.jpg",
    },
    {
      title: "Event Promotions",
      tags: ["IPL screening campaigns", "Theme nights", "Live music promotions", "Seasonal event marketing"],
      imageSrc: "/images/reels-1.jpg",
    },
    {
      title: "Brand Launches",
      tags: ["New café launches", "Packaging design", "Menu branding", "Digital campaigns"],
      imageSrc: "/images/hero-bg.jpg",
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Work Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-zest-black leading-tight mb-4">
              Brands We’ve Worked With
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Over the years, we’ve helped restaurants, cafés, lounges, and food brands improve their branding, marketing presence, customer engagement, and revenue growth.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <button className="px-6 py-3 border-2 border-gray-200 rounded-xl font-bold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className={`w-full aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center bg-gray-100 shadow-sm`}>
                 <img src={portfolio.imageSrc} alt={portfolio.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                 <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
              </div>
              <h4 className="text-2xl font-bold text-zest-black mb-4 group-hover:text-blue-600 transition-colors">
                {portfolio.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {portfolio.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
