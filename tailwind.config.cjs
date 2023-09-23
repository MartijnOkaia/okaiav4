/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1200px',
        xl: '1380px',
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FBFAF5",
      grey: "#F1EFED",
      green: "#C8FB50",
      pink: "#F2B3F9",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["18px", "30px"],
      md: ["26px", "33px"],
      lg: ["40px", "26px"],
      xl: ["50px", "56px"],
      xxl: ["80px", "78px"],
    },
    borderRadius: {
      DEFAULT: "10px",
      lg: "20px",
    },
    fontFamily: {
      'sans': ['Okaia', 'Verdana Neue', 'Verdana', 'Arial'],
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-white",
    "grid-cols-2",
    "grid-cols-3"
  ],
};
