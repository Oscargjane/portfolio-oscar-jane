const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.jsx', './pages/api/*.jsx', './components/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-spaceGrotesk)', ...fontFamily.sans],
      },
    },
  },
  future: {
    // adds hover effects only on supported devices
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
};
