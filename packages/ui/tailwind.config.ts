import type { Config } from "tailwindcss";

import svgToDataUri from "mini-svg-data-uri";
import { PluginCreator } from "tailwindcss/types/config";

const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

const brandColors = {
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
};

const config = {
  darkMode: ["class"],
  content: [
    "./{app,pages,components,src}/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ...brandColors,
        primary: {
          ...brandColors.blue,
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        chillin: "chillin 10s cubic-bezier(.5,0,.5,1) infinite",
        aurora: "aurora 60s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    // Add variables for colours
    ({ addBase, theme }: Parameters<PluginCreator>[0]) => {
      addBase({
        ":root": Object.fromEntries(
          Object.entries(flattenColorPalette(theme("colors"))).map(
            ([key, val]) => [`--${key}`, val],
          ),
        ) as Record<string, string>,
      });
    },

    function ({ matchUtilities, theme }: Parameters<PluginCreator>[0]) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
} satisfies Config;

export default config;
