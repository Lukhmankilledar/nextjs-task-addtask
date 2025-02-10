/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1959AC',
        secondary: '#0546D2',
        typography: '#222222'
      },
      fontFamily: {
        heading: ['"Roboto Condensed"', 'sans-serif'],
        subheading: ['"nter"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

