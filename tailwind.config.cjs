/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        basic: "#FFFFFF",
        primary: "#000813",
        secondary: "#EAF5FF",
        button: "#CD8B42",
        footer: "#B1B1B1",
        manage: "#0B3948",
      },

      fontFamily: {
        lato: ["Lato"],
        neue: ["NeueMontreal", "cursive"],
      },
    },
  },
  plugins: [],
};
