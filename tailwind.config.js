/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      antonio: ["Antonio", "sans-serif"],
    },
    fontSize: {
      2.75: "0.688rem",
      7: "1.75rem",
    },
    extend: {},
  },
  plugins: [],
};
