// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans], // now starts with Arial
      },
      colors: {
        primary: '#2563eb',
        dark: '#1e293b',
        light: '#f8fafc',
      },
    },
  },
  plugins: [],
};
