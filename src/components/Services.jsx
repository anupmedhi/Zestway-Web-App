import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiCamera, FiBriefcase, FiMonitor, FiFeather } from "react-icons/fi";

function Services() {
  const services = [
    {
      title: "Sales Growth",
      icon: <FiTrendingUp size={24} />,
      items: [
        "We charge on your sales",
        "Sales execution",
        "ROI-focused growth",
      ],
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Brand Development",
      icon: <FiFeather size={24} />,
      items: [
        "Brand identity creation",
        "Packaging & menu design",
        "Brand positioning",
        "Restaurant concept building",
      ],
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Marketing & Growth",
      icon: <FiTrendingUp size={24} />,
      items: [
        "Social media marketing",
        "Content creation",
        "Performance advertising",
        "Influencer & PR campaigns",
        "Event promotions",
      ],
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Creative Production",
      icon: <FiCamera size={24} />,
      items: [
        "Food photography",
        "Videography",
        "Reels production",
        "Campaign shoots",
      ],
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Business Consulting",
      icon: <FiBriefcase size={24} />,
      items: [
        "Launch planning",
        "Sales growth strategy",
        "Customer engagement systems",
        "Expansion planning",
      ],
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Technology & Operations",
      icon: <FiMonitor size={24} />,
      items: [
        "POS software solutions",
        "Billing & inventory systems",
        "Staff management",
        "Analytics & reporting",
      ],
      color: "bg-gray-800 text-white", // Dark distinct card for Tech
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zest-black leading-tight">
            End-To-End Solutions For Food & Beverage Businesses
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-zest-black mb-4">{service.title}</h4>
              <ul className="space-y-3 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600 font-medium text-sm">
                    <span className="mr-2 text-blue-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
