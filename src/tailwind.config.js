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
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slowfade: {
          '0%, 50%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fade: 'fade 2s linear forwards',
        slowfade: 'slowfade 4s linear forwards'
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
      maxWidth: {
        '7/8': '87.5%',
      }
    },
    plugins: [],
  },
};
