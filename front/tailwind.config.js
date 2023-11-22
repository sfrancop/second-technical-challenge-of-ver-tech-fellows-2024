/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#726EFF',
        'secondary': '#212B38',
        'white': '#E5E7EB',
        'black': '#374151',
      },
      fontFamily: {
        'Comfortaa': ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}