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
        xl: '1600px',
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      beige: "#FBFAF5",
      black: "#212529",
      lightGrey: "#F1F0E9",
      darkGrey: "#D9D9D9",
      green: "#C8FB50",
      pink: "#F2B3F9",
      blue: "#0057FF"
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["20px", "130%"],
      md: ["26px", "33px"],
      lg: ["40px", "100%"],
      xl: ["50px", "100%"],
      xxl: ["60px", "100%"],
      xxxl: ["80px", "78px"],
      xxxxl: ["120px", "100%"],
    },
    borderRadius: {
      DEFAULT: "10px",
      lg: "20px",
      xl: "40px",
      xxl: "50px",
      full: "50%"
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
