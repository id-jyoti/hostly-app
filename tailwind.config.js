// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"DM Sans"',
          '"Inter"',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          ...defaultTheme.fontFamily.sans,
        ],
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
