/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark1: "#333333",
        green1: "#31A05F",
        gray1: "#555555",
      },
    },
  },
  plugins: [],
};
