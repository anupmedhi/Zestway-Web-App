// Footer.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "", "success", "error"

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <footer className="bg-zest-black text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            <a href="/" aria-label="Zestway home" className="inline-block group">
              <h3 className="text-3xl font-extrabold tracking-tight group-hover:text-zest-yellow transition-colors">
                Zestway <span className="text-zest-yellow group-hover:text-white">India</span>
              </h3>
            </a>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Playful F&B campaigns, creator-first activations and community events.
              We help brands grow with big, bold ideas.
            </p>
            <div className="flex items-center gap-5">
              {[
                { icon: <FaInstagram />, href: "https://www.instagram.com/zestwayindia/?hl=en", label: "Instagram" },
                { icon: <FaFacebookF />, href: "https://www.facebook.com/zestwayindia/", label: "Facebook" },
                { icon: <FaTwitter />, href: "https://x.com/zestwayindia", label: "Twitter" },
                { icon: <FaWhatsapp />, href: "https://chat.whatsapp.com/E0h8BKWwc5RAJTHPTNyfgB", label: "WhatsApp" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl hover:bg-zest-yellow hover:text-zest-black transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zest-yellow">Explore</h4>
            <ul className="space-y-4 text-lg font-medium text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#join" className="hover:text-white transition-colors">Join Community</a></li>
              <li><a href="mailto:zestwayindia@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-6 space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zest-yellow">Stay in the loop</h4>
            <p className="text-gray-400 text-lg">Subscribe to get the latest updates and F&B trends.</p>

            <form onSubmit={handleSubscribe} className="relative max-w-lg group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 pr-16 text-lg focus:outline-none focus:ring-2 focus:ring-zest-yellow/50 transition-all placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-6 bg-zest-yellow text-zest-black rounded-xl font-bold hover:bg-white transition-colors"
                aria-label="Subscribe"
              >
                Go
              </button>
            </form>

            {status === "success" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 font-medium">
                Awesome! You're on the list. ✨
              </motion.p>
            )}
            {status === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rose-400 font-medium">
                Please enter a valid email.
              </motion.p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 font-medium text-sm">
          <p>© {new Date().getFullYear()} Zestway India. Crafted with passion.</p>
          <div className="flex items-center gap-10">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
