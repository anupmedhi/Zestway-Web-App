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
            accent: "#FF4D4D"
          }
        },
        fontFamily: {
          display: ["Inter", "ui-sans-serif", "system-ui"],
          body: ["Inter", "ui-sans-serif", "system-ui"]
        },
        boxShadow: {
          soft: "0 10px 30px rgba(0,0,0,0.08)"
        }
      }
    },
    plugins: [],
  }

  