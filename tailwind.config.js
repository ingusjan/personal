/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const fontName = "Switzer";

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [`${fontName}`, ...defaultTheme.fontFamily.sans],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
