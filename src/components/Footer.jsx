// Footer.jsx
import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
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
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Mobile: stacked; Desktop (md+): 4-column grid */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
          {/* Brand / Column 1 */}
          <div className="space-y-4">
            <a href="/" aria-label="Zestway home" className="inline-block">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Zestway <span className="text-zest-yellow">India</span>
              </h3>
            </a>

            <p className="text-sm text-gray-300 max-w-md">
              Playful F&B campaigns, creator-first activations and community events — we help small brands grow with big ideas.
            </p>

            {/* Desktop: full Join Community button; Mobile: hidden (icon exists in social row) */}
            <div className="hidden md:block mt-3">
              <a
                href="https://chat.whatsapp.com/E0h8BKWwc5RAJTHPTNyfgB"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                aria-label="Join WhatsApp Community"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden /> <span>Join Community</span>
              </a>
            </div>
          </div>

          {/* Quick links / Column 2 */}
          <nav aria-label="Footer navigation" className="text-sm">
            <h4 className="text-sm font-semibold text-gray-100 mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-white transition focus:outline-none focus:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition focus:outline-none focus:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-white transition focus:outline-none focus:underline">
                  Join Community
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition focus:outline-none focus:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact / Column 3 */}
          <div className="text-sm">
            <h4 className="text-sm font-semibold text-gray-100 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-zest-yellow" aria-hidden />
                <a href="mailto:zestwaysupport@gmail.com" className="hover:text-white transition">
                  zestwaysupport@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-zest-yellow" aria-hidden />
                <a href="tel:+91910128103" className="hover:text-white transition">
                  +91 91012 8103
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-400">
                Open to collaborations & local events — DM us or send an email.
              </li>
            </ul>
          </div>

          {/* Newsletter + Social / Column 4 */}
          <div className="text-sm">
            <h4 className="text-sm font-semibold text-gray-100 mb-4">Stay in the loop</h4>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3" aria-label="Subscribe to newsletter">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-3 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zest-yellow"
                aria-invalid={status === "error" ? "true" : "false"}
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-zest-yellow text-black px-4 py-3 rounded-lg font-semibold shadow-sm hover:bg-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-zest-yellow"
              >
                Subscribe
              </button>
            </form>

            {status === "error" && (
              <p className="mt-2 text-xs text-rose-400">Please enter a valid email address.</p>
            )}
            {status === "success" && (
              <p className="mt-2 text-xs text-emerald-400">Thanks — you’re on the list!</p>
            )}

            {/* Social icons + small WhatsApp icon for mobile */}
            <div className="mt-6 flex items-center gap-4">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/zestwayindia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition focus:outline-none text-2xl"
              >
                <FaInstagram />
              </a>

              <a
                aria-label="Facebook"
                href="https://www.facebook.com/zestwayindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition focus:outline-none text-2xl"
              >
                <FaFacebookF />
              </a>

              <a
                aria-label="Twitter"
                href="https://x.com/zestwayindia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition focus:outline-none text-2xl"
              >
                <FaTwitter />
              </a>

              {/* Small WhatsApp icon available on all sizes; desktop also has full button above */}
              <a
                aria-label="Join WhatsApp Community"
                href="https://chat.whatsapp.com/E0h8BKWwc5RAJTHPTNyfgB"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center justify-center bg-green-600 text-white p-2 rounded-full shadow-sm hover:bg-green-700 transition focus:outline-none"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Zestway India. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-xs text-gray-400 hover:text-white transition focus:outline-none">Privacy</a>
            <a href="/terms" className="text-xs text-gray-400 hover:text-white transition focus:outline-none">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
