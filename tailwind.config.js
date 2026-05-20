/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1c1b17",
        secondary: "#282723",
        accent: "#eb4604",
        foreground: "#ffffff",
        muted: "#dddddd",
      },
      fontFamily: {
        display: ["var(--font-league-gothic)", "sans-serif"],
        mono: ["var(--font-vt323)", "monospace"],
        body: ["var(--font-inter)", "sans-serif"],
        quote: ["var(--font-biz)", "sans-serif"],
      },
      boxShadow: {
        accent: "0 20px 40px -10px rgba(235, 70, 4, 0.3)",
        accentLg: "0 15px 30px -5px rgba(235, 70, 4, 0.4)",
      },
      animation: {
        typing: "typing 3s steps(40, end) forwards, blink-caret 0.75s step-end infinite",
        lightPulse: "lightPulse 4s ease-in-out infinite",
        loadingProgress: "loadingProgress 3s ease-in-out forwards",
        pulseSlow: "pulse 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        fadeLeft: "fadeLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        fadeRight: "fadeRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        shimmer: "shimmer 0.5s ease",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#eb4604" },
        },
        lightPulse: {
          "0%, 100%": {
            opacity: "0.7",
            transform: "rotate(45deg) scale(1)",
          },
          "50%": {
            opacity: "0.9",
            transform: "rotate(45deg) scale(1.1)",
          },
        },
        loadingProgress: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.7",
            transform: "scale(1.05)",
          },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(36px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          from: { opacity: "0", transform: "translateX(-36px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          from: { opacity: "0", transform: "translateX(36px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          from: { left: "-100%" },
          to: { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};
