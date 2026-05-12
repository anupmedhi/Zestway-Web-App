import React, { useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/zestwayindia?igsh=MXY2Mm51enJ2dXNxdw==",
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1Fzuv9fiZs/?mibextid=wwXIfr",
      icon: FaFacebookF,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@zestway?si=PxWe-tsP5AAIaMEN",
      icon: FaYoutube,
    },
    {
      name: "X",
      href: "https://x.com/zestwayindia?s=21",
      icon: FaXTwitter,
    },
  ];

  return (
    <footer className="bg-zest-black pt-14 pb-8 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 rounded-lg border border-zinc-800 bg-zinc-950 px-6 py-8 md:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zest-yellow">
                Stay Updated
              </p>
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                Get fresh F&B growth ideas in your inbox.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                Practical marketing, cafe operations, and digital growth notes from the Zestway team.
              </p>
            </div>

            {newsletterSubmitted ? (
              <div className="rounded-3xl border border-zest-yellow/40 bg-zest-yellow/10 px-6 py-5 text-white">
                <p className="text-xl font-extrabold">Thanks for reaching out.</p>
                <p className="mt-2 text-zinc-300">
                  We will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault();
                  setNewsletterSubmitted(true);
                }}
              >
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-h-14 flex-1 rounded-full border border-zinc-700 bg-zest-black px-5 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-zest-yellow"
                />
                <button
                  type="submit"
                  className="min-h-14 rounded-full bg-zest-yellow px-6 font-bold text-zest-black transition-colors hover:bg-yellow-300 inline-flex items-center justify-center gap-2"
                >
                  Subscribe
                  <FaArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mb-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">

          <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-6 md:p-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zest-yellow">
              Contact
            </p>
            <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h4 className="text-2xl font-extrabold text-white">Talk to Zestway</h4>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
                Reach us for cafe launches, brand growth, and POS support.
              </p>
            </div>

            <ul className="grid gap-4 md:grid-cols-3 text-zinc-400">
              <li className="rounded-lg border border-zinc-800 bg-zest-black p-4">
                <span className="mb-4 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zest-yellow">
                  <FaEnvelope size={15} />
                </span>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">Email</p>
                <a href="mailto:hello@zestway.in" className="break-words hover:text-zest-yellow transition-colors">
                  hello@zestway.in
                </a>
              </li>
              <li className="rounded-lg border border-zinc-800 bg-zest-black p-4">
                <span className="mb-4 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zest-yellow">
                  <FaPhone size={15} />
                </span>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">Phone</p>
                <a href="tel:+919101028103" className="hover:text-zest-yellow transition-colors">
                  +91 91010 28103
                </a>
              </li>
              <li className="rounded-lg border border-zinc-800 bg-zest-black p-4">
                <span className="mb-4 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zest-yellow">
                  <FaLocationDot size={15} />
                </span>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">Location</p>
                <span>Bangalore, India</span>
              </li>
              <li className="rounded-lg border border-zinc-800 bg-zest-black p-4 flex items-center justify-center md:min-h-32" aria-hidden="true">
                <img
                  src="/images/zestway-logo.png"
                  alt=""
                  className="h-20 object-contain"
                />
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-6 md:p-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zest-yellow">
              Social
            </p>
            <h4 className="mb-6 text-2xl font-extrabold text-white">Follow Us</h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={`Visit Zestway on ${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-14 items-center gap-3 rounded-full border border-zinc-800 bg-zest-black px-3 text-zinc-300 transition-colors hover:border-zest-yellow hover:text-white"
                >
                  <span className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:bg-zest-yellow group-hover:text-zest-black transition-colors">
                    <Icon size={18} />
                  </span>
                  <span className="font-semibold">{name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-7 border-t border-zinc-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>&copy; {currentYear} Zestway India. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
