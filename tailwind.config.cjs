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

      menu: ["18px", "100%"],

      h1xl: ["120px", "100%"],
      h1: ["80px", "78px"],
      h2: ["60px", "100%"],
      h3: ["50px", "100%"],
      h4: ["40px", "100%"],
      h5: ["30px", "100%"],
      h6: ["20px", "100%"],

    },
    fontWeight: {
      base: '350',
      medium: '460',
    },
    borderRadius: {
      DEFAULT: "10px",
      lg: "20px",
      xl: "40px",
      h3: "50px",
      full: "50%"
    },
    fontFamily: {
      'sans': ['Okaia', 'Verdana Neue', 'Verdana', 'Arial'],
    },
    typography: {
      DEFAULT: {
        css: {
          'p + p': {
            marginTop: '1rem'
          },
        },
      },
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  safelist: [
    "bg-white",
    "grid-cols-2",
    "grid-cols-3",
    "lg:text-h1",
    "lg:text-h2",
    "lg:text-h3",
  ],
};
