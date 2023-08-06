/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        customGreen: "rgb(0, 161, 82)",
        customDarkMode: "#242424",
      },
    },
  },
  plugins: [],
};
