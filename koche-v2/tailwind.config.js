/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: false,

  theme: {
    extend: {
      colors: {
        kocheGreen: "#12B76A",
        kocheblack: "#101828",
        kocheGray: "#344054",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
