import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    colors: {
        beige: "#C9BFAE",
        black: "#282828",
        purple: "#AC77B0",
      },
    fontFamily: {
      'accent': ['var(--font-accent)', 'cursive'],
      'primary': ['var(--font-primary)', 'sans-serif'],
  },
    extend: { 
  },
  plugins: [
    require('preline/plugin'),
  ],
  }
};

export default config;
