import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],

  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        body_bg: "url('/assets/images/food-texture.png')",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", scale: "0" },
          "100%": { opacity: "1", scale: "1" },
        },
      },
      animation: {
        appear: "appear .15s ease-out",
      },
      screens: {
        "3xs": "280px",
        "2xs": "340px",
        xs: "475px",
        "600px": "600px",
        "3xl": "1770px",

        ...defaultTheme.screens,
      },
    },
  },

  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
export default config;
