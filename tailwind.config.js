/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        storm: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a4bbfd",
          400: "#8197fa",
          500: "#6473f5",
          600: "#4f53ea",
          700: "#4240cf",
          800: "#3736a7",
          900: "#313384",
          950: "#1e1d4f",
        },
        danger: {
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
        },
        warning: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        safe: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-gentle": "bounce 2s infinite",
        "radar-sweep": "radar-sweep 4s linear infinite",
        "alert-flash": "alert-flash 1.5s ease-in-out infinite",
      },
      keyframes: {
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "alert-flash": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      backgroundImage: {
        "ocean-gradient":
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f4c75 100%)",
        "storm-gradient":
          "linear-gradient(135deg, #1a0533 0%, #2d1057 50%, #4a1572 100%)",
        "safe-gradient":
          "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
        "danger-gradient":
          "linear-gradient(135deg, #450a0a 0%, #7f1d1d 50%, #991b1b 100%)",
      },
    },
  },
  plugins: [],
};
