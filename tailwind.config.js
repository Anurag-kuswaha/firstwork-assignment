/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#00D095",
        "custom-secondary": "#1D5E6D",
      }
    },
  },
  plugins: [],
}