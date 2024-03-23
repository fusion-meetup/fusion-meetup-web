const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
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
          600: "#F00A95",
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
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        chillin: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8vw)" },
        },
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
      animation: {
        chillin: "chillin 10s cubic-bezier(.5,0,.5,1) infinite",
        aurora: "aurora 60s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // Add variables for colours
    ({ addBase, theme }) => {
      addBase({
        ":root": Object.fromEntries(
          Object.entries(flattenColorPalette(theme("colors"))).map(
            ([key, val]) => [`--${key}`, val]
          )
        ),
      });
    },
  ],
};
