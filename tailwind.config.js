const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        'silvana': {
          'pink': '#D6448F',
          'navbar-item': '#000000',
          'text-primary': '#000000',
          'text-secondary': '#283039',
          'text-tertiary': '#414852',
          'text-quaternary': '#777e8c',
          'text-black': '#000000',
          'white': '#ffffff',
          'gray-100': '#f0f2f5',
          'gray-200': '#e4e6eb',
          'gray-300': '#959dad',
          'gray-400': '#414852',
          'gray-500': '#777e8c',
          'gray-600': '#283039',
          'gray-700': '#101720',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'whyte': ['Whyte', 'sans-serif'],
        'whyte-medium': ['Whyte Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
};
