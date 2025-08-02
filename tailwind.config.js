const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans,],
      },
      colors: {
        primary: '#2563eb',
        dark: '#1e293b',
        light: '#f8fafc',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.will-change-transform': {
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        },
      });
    },
  ],
};
