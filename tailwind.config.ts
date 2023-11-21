import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react")

const config: Config = {
  darkMode: "class",
  highContrast: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        typography: 'var(--color-typography)',
        description: 'var(--color-description)',
        border: 'var(--color-border)',
        shadow: 'var(--shadow)',
        'blue': '#5e8eec',
      },
      screens: {
        '3xl': '1850px'
      },
      display: {
        linv: "var(--linv)",
        lvis: "var(--lvis)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    nextui(),
  ],
};
export default config;
