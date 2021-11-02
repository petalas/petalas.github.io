const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      primary: {
        '50': '#fcf6f4',
        '100': '#f9ede9',
        '200': '#f0d3c9',
        '300': '#e7b8a9',
        '400': '#d58268',
        '500': '#c34d27',
        '600': '#b04523',
        '700': '#923a1d',
        '800': '#752e17',
        '900': '#602613'
      },
      secondary: {
        '50': '#f5f6f6',
        '100': '#ebeced',
        '200': '#cdd1d3',
        '300': '#afb5b9',
        '400': '#727d84',
        '500': '#36454f',
        '600': '#313e47',
        '700': '#29343b',
        '800': '#20292f',
        '900': '#1a2227'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
