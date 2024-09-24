import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F8B612",
        secondary: "#263C5A",
      },
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'], // Add Work Sans font
      },
    },
  },
  plugins: [],
};
export default config;
