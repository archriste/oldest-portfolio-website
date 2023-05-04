/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "**/*.{html,js}",
    "src/**/*.{html,js}",
    "src/*.{html,js}",
  ],
  theme: {
    extend: {
      height: {
        '50': "50px",
      },
      spacing: {
        '50': "50px",
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
    },
    plugins: [],
  },
};
