const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      blue: {
        DEFAULT: "#54C8E8",
        50: "#F6FCFE",
        100: "#E4F6FB",
        200: "#C0EBF7",
        300: "#9CDFF2",
        400: "#78D4ED",
        500: "#54C8E8",
        600: "#23B8E1",
        700: "#1892B4",
        800: "#126A82",
        900: "#0B4251",
      },
      pink: {
        DEFAULT: "#FF40B4",
        50: "#FFF8FC",
        100: "#FFE3F4",
        200: "#FFBAE4",
        300: "#FF92D4",
        400: "#FF69C4",
        500: "#FF40B4",
        600: "#FF089E",
        700: "#CF007E",
        800: "#97005C",
        900: "#5F0039",
      },
      yellow: {
        DEFAULT: "#FFCD02",
        50: "#FFF1BA",
        100: "#FFEDA5",
        200: "#FFE57C",
        300: "#FFDD54",
        400: "#FFD52B",
        500: "#FFCD02",
        600: "#C9A100",
        700: "#917400",
        800: "#594700",
        900: "#211A00",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        chillin: {
          "0%, 100%": { transform: "translateY(0) rotate(0) scale(1)" },
          "50%": { transform: "translateY(-12vw) rotate(-10deg) scale(1.2)" },
        },
      },
      animation: {
        chillin: "chillin 8s cubic-bezier(.5,0,.5,1) infinite",
      },
    },
  },
  plugins: [],
};
