import React from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiPackage, FiUsers, FiPieChart, FiMapPin, FiHeart, FiArrowRight } from "react-icons/fi";

function PosTeaser() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfcDlDbhVI5XV_ZOdidchhgLFBvMyCtmyBh1PVzN3WZB5O1Eg/viewform";

  const features = [
    {
      title: "Smart Billing",
      desc: "Fast, efficient billing for dine-in & delivery.",
      icon: <FiMonitor size={20} />,
    },
    {
      title: "Inventory Sync",
      desc: "Track stock and reduce kitchen wastage.",
      icon: <FiPackage size={20} />,
    },
    {
      title: "Staff & Tables",
      desc: "Manage floor operations seamlessly.",
      icon: <FiUsers size={20} />,
    },
    {
      title: "Live Analytics",
      desc: "Real-time insights for smarter decisions.",
      icon: <FiPieChart size={20} />,
    },
    {
      title: "Multi-Outlet",
      desc: "Centralized monitoring for all branches.",
      icon: <FiMapPin size={20} />,
    },
    {
      title: "Customer CRM",
      desc: "Integrated loyalty and retention tools.",
      icon: <FiHeart size={20} />,
    },
  ];

  return (
    <section id="pos" className="py-24 bg-[#050505] text-white relative overflow-hidden border-y border-zinc-900">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-zest-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              In Development
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.15] tracking-tight">
              Technology That Simplifies Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Restaurant Operations.</span>
            </h3>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              We are building <strong className="text-white">Prime POS</strong>, a complete Point of Sale ecosystem designed specifically for restaurants, cafés, lounges, and cloud kitchens.
            </p>

            <motion.a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-zest-yellow font-bold text-lg hover:text-yellow-400 transition-colors group"
            >
              Get early access <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Dashboard Mockup / Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mock Dashboard Window */}
            <div className="w-full bg-zinc-950 border border-zinc-800 rounded-3xl shadow-[0_0_50px_-12px_rgba(37,99,235,0.2)] overflow-hidden flex flex-col">
              {/* Window Header */}
              <div className="h-12 bg-zinc-900 border-b border-zinc-800 flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="ml-4 text-xs font-semibold text-zinc-500 tracking-widest uppercase">Prime POS Preview</div>
              </div>
              
              {/* Window Body (Feature Grid) */}
              <div className="p-6 md:p-8 grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="bg-zinc-900/50 hover:bg-zinc-800/80 transition-colors p-5 rounded-2xl border border-zinc-800/50">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-zinc-500 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Brand Name Banner */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-gradient-to-br from-zest-yellow to-orange-400 p-1 rounded-2xl shadow-2xl rotate-[-2deg]">
              <div className="bg-zest-black px-6 py-4 rounded-xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zest-yellow to-orange-400 font-black tracking-widest text-lg uppercase">
                  Prime POS
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default PosTeaser;
