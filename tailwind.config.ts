import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      spartan: ["var(--font-spartan)", "sans-serif"],
      antonio: ["var(--font-antonio)", "sans-serif"],
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#838391",
      accent: "#38384F",
      background: "#070724",
      hover: "#313148",
    },
  }
};
export default config;
