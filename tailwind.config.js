const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'media',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '16rem',
      },
    },
    extend: {},
    // colors are setup to have lightness 90 to 10 going from 50 to 900 with the middle/default of 500 having lightness 54
    // https://www.tailwindshades.com/
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      primary: {
        DEFAULT: '#E2A132',
        '50': '#F9EBD2',
        '100': '#F6E2C1',
        '200': '#F1D29D',
        '300': '#ECC279',
        '400': '#E7B155',
        '500': '#E2A132',
        '600': '#C0841B',
        '700': '#8F6214',
        '800': '#5E400D',
        '900': '#2D1F06'
      },
      secondary: {
        DEFAULT: '#3232E2',
        '50': '#D2D2F9',
        '100': '#C1C1F6',
        '200': '#9D9DF1',
        '300': '#7979EC',
        '400': '#5555E7',
        '500': '#3232E2',
        '600': '#1B1BC0',
        '700': '#14148F',
        '800': '#0D0D5E',
        '900': '#06062D'
      },
      'neutral': {
        DEFAULT: '#8A8A8A',
        '50': '#E6E6E6',
        '100': '#DBDBDB',
        '200': '#C7C7C7',
        '300': '#B3B3B3',
        '400': '#9E9E9E',
        '500': '#8A8A8A',
        '600': '#6E6E6E',
        '700': '#525252',
        '800': '#363636',
        '900': '#1A1A1A'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],

  // whitelist colors to avoid tree shaking (some classes are generated dynamically)
  safelist: [
    'colors',
    {
      pattern: /(bg|text|border)-(primary|secondary|neutral)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ]
}
