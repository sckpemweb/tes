/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        indigo: '#1e1b4b',
        pink: '#e879f9',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
};
