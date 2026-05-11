import React from "react";
import { FiInstagram, FiFacebook, FiMessageCircle } from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zest-black pt-20 pb-10 text-white border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <img src="/images/zestway-logo.png" alt="Zestway" className="h-10 mb-6 object-contain" />
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">
              "Let’s build the future of food & beverage businesses together."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-colors">
                <FiMessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-zinc-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-zinc-400 hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#pos" className="text-zinc-400 hover:text-orange-500 transition-colors">POS Software</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>hello@zestway.in</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>&copy; {currentYear} Zestway India. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
