/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'solaiman': ['Solaiman Lipi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};