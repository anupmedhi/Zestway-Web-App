import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

function Portfolio() {
  const portfolios = [
    {
      title: "Restaurant & Cafe Marketing",
      description: "Growth campaigns for restaurants, cafes, lounges, and food-first brands.",
      imageSrc: "/images/vibrant-hero.png",
      accent: "from-amber-500 to-orange-500",
      meta: "Campaigns",
    },
    {
      title: "Event Promotions",
      description: "Campaigns built around footfall, bookings, live events, and seasonal moments.",
      imageSrc: "/images/join-bg.jpg",
      accent: "from-blue-500 to-cyan-400",
      meta: "Events",
    },
    {
      title: "Brand Launches",
      description: "Launch support for new cafes, menus, packaging, and digital brand rollouts.",
      imageSrc: "/images/chef-plating.png",
      accent: "from-purple-500 to-pink-500",
      meta: "Launches",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">
              Work Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-zest-black leading-tight mb-4">
              Brands We’ve Worked With
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Explore the core types of work we do across marketing, events, and brand launches.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-800 font-extrabold text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              See All Projects
              <FiArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <motion.article
              key={portfolio.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.35)] transition-shadow duration-300 hover:shadow-[0_35px_90px_-35px_rgba(15,23,42,0.5)]"
            >
              <div className={`absolute inset-x-8 -top-px h-1 bg-gradient-to-r ${portfolio.accent}`} />
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={portfolio.imageSrc}
                  alt={portfolio.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-zest-black backdrop-blur-sm">
                    {portfolio.meta}
                  </span>
                </div>
                <div className="absolute left-5 right-5 bottom-5">
                  <p className="text-white/65 text-xs font-bold uppercase tracking-widest mb-3">
                    Category {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {portfolio.title}
                  </h4>
                </div>
              </div>

              <div className="p-7">
                <p className="text-gray-600 text-lg leading-relaxed mb-7">
                  {portfolio.description}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400">
                    View work
                  </span>
                  <span className={`w-11 h-11 rounded-full bg-gradient-to-r ${portfolio.accent} text-white flex items-center justify-center shadow-lg shadow-gray-200 group-hover:translate-x-1 transition-transform`}>
                    <FiArrowRight size={19} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
