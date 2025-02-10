import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // museo: ["museo-sans", "Century Gothic", "sans-serif"],
        // garamond: ["garamond-premier-pro", "Times New Roman", "Times", "serif"],
      },
      colors: {
        greyDarker: "#807f7d",
        grey: "#6e6a64",
        greyDark: "#b3b3ad",
        greyMidDark: "#c0c0c0",
        greyMid: "#cacaca",
        greyLight: "#d6d6d6",
        greigeLight: "#e9e6df",
        greyLighter2: "#e2e2e2",
        greyLighter: "#eaeaea",
        greyLightest: "#f7f6f3",
        red: "#FF5C00",
        green: "#8e9782",
        greenLight: "#abc091",
        neon: "#E5FF00",
        army: "#787765",
        brown: "#a86632",
      },
    },
  },
  plugins: [],
} satisfies Config;

// FONT - ROLLERCOASTER-SERIF
