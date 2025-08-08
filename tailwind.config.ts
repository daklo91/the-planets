import type { Config } from "tailwindcss";

const planetColors = {
  mercury: "#419EBB",
  venus: "#EDA249",
  earth: "#6F2ED6",
  mars: "#D14C32",
  jupiter: "#D83A34",
  saturn: "#CD5120",
  uranus: "#1EC2A4",
  neptune: "#2D68F0",
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    ...Object.keys(planetColors).map(color => `bg-${color}`)
  ],
  theme: {
    fontFamily: {
      "spartan-regular": ["var(--spartan-regular), sans-serif"],
      "spartan-medium": ["var(--spartan-medium), sans-serif"],
      "spartan-bold": ["var(--spartan-bold), sans-serif"],
      "spartan-semiBold": ["var(--spartan-semiBold), sans-serif"],
      "antonio-medium": ["var(--antonio-medium), sans-serif"],
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#838391",
      accent: "#38384F",
      background: "#070724",
      hover: "#313148",
      ...planetColors
    },
  }
};
export default config;
