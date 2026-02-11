/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4488FC",   // main brand
          hover: "#2C5EB4",
          light: "#EAF1FF",
        },
      },
    },
  },
  plugins: [],
}

