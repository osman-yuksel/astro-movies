/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand"],
      },
      backgroundImage: {
        wtbradiant: ["linear-gradient(to right, white 50%, transparent 0)"]
      }
    },
  },
  plugins: [],
};
