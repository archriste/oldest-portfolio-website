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
      keyframes: {
        fade: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        fade: 'fade 1s linear',
      },
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
