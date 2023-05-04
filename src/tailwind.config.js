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
        slide: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        slide: 'slide 2s linear',
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
