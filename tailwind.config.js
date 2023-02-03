const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.jsx', './components/**/*.jsx', './layouts/**/*.jsx'],
  theme: {
    colors: {
      primary: {
        50: '#E9F8FF',
        100: '#BDE9FE',
        200: '#91DAFE',
        300: '#4FC3FD',
        400: '#0DADFD',
        500: '#0284C7',
        600: '#0271A9',
        700: '#01557F',
        800: '#014262',
        900: '#012F46',
      },
      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-spaceGrotesk)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
