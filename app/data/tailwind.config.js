/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ THIS IS CRUCIAL
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
