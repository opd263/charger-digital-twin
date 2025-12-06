/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: "#050b16",
        pageBgSoft: "#07111d",
        topbarFrom: "#050b16",
        topbarTo: "#0a2340",
        sidebar: "#0D1829",
        panel: "#050f1b",

        card: "#07111d",
        cardSoft: "#0d141c",
        cardBorder: "rgba(255,255,255,0.04)",

        subtle: "#8f94a6",
        muted: "rgba(255,255,255,0.6)",

        accentGreen: "#B2F14A",
        accentYellow: "#F5B544",
        accentRed: "#FF5A5A",
      },

      borderRadius: {
        card: "14px",
      },

      boxShadow: {
        topbar: "0 12px 30px rgba(0,0,0,0.55)",
        card: "0 10px 25px rgba(0,0,0,0.55)",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
