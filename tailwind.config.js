/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lotus-red': '#e44650',
      },
      fontFamily: {
        'FamiljenGbi' : ['FamiljenGbi']
      }
    },
  },
  plugins: [],
}
