/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand"],
      },
      backgroundImage: {
        wtbgradiant: ["linear-gradient(to right, white 50%, transparent 0)"],
        hbgrradiant: [
          "linear-gradient(270deg, #00ffbd, #00ffbd, #ff0000, #fd00ff, #00ff2b, #ff0000, #fd00ff, #ffffff, #5500ff, #00ffbd)",
        ],
      },
      animation: {
        hbg: "gradient 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "100%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
