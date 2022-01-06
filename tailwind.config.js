const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  content: ['./app/**/*.{js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {},
    colors: {
      brand: '#8454E3',
      accent: '#475569',
      dark: '#1B1F26',
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
    },
    fontFamily: {
      sans: ['GothamRndSSm-Book_Web', 'sans-serif'],
      display: ['GothamCondSSm-Book_Web', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
