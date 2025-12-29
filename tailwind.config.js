/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        zest: {
          yellow: "#FFD84D",
          black: "#0A0A0A",
          white: "#FFFFFF",
          accent: "#FF4D4D",
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            600: "#4B5563",
            800: "#1F2937",
            900: "#111827",
          }
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "ui-sans-serif", "system-ui"],
        display: ["'Plus Jakarta Sans'", "Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.05)",
        premium: "0 20px 50px -12px rgba(0,0,0,0.1)",
      },
      backdropBlur: {
        xs: "2px",
      }
    }
  },
  plugins: [],
}

