/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D6A4F",
        secondary: "#52B788",
        accent: "#D4A373",
      },
    },
  },
  plugins: [],
}