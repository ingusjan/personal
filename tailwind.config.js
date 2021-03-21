const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Work Sans", ...fontFamily.sans],
        body: ["Work Sans", ...fontFamily.sans],
        sans: ["Work Sans", ...fontFamily.sans],
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
