const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4582ec',
        light: '#828282',
        dark: '#333333',
      },
      fontFamily: {
        mono: ['"Inconsolata"', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        glitch: 'glitch 2s steps(100) infinite;',
      },
    },
  },
  plugins: [],
};
