const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4582ec",
        light: "#828282",
        medium: "#F5F5F5",
        dark: "#333333",
      },
      fontFamily: {
        mono: ['"Inconsolata"', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        glitch: "glitch 3s steps(100) infinite;",
      },
    },
  },
  plugins: [],
};
