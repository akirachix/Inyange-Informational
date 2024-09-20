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
      screens: {
        'is': {'min': '0px', 'max': '481px'},
        'sd': {'min': '481px', 'max': '767px'},
        'im': {'min': '768px', 'max': '999px'},
        'nh': {'min': '1000px', 'max': '1279px'},
        'nhm':{'min': '1280px', 'max':'1300px'},
        'ipad-mini': '768px',
        'ipad-pro': '1024px',
        'ipad-air': '820px', 
        'zenbook': '1200px', 
      },
    },
  },
  plugins: [],
};
export default config;
