const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.lightBlue,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.emerald,
      blue: colors.blue,
      pink: colors.pink,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
