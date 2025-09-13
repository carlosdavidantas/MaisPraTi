/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        dark: {
          bg: "#0f172a",
          card: "#334155",
          text: "#f1f5f9",
        }
      },
      animation: {
        skeleton: "skeleton 1.5s infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        skeleton: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        spin: {
          "to": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};