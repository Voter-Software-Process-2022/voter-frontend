const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/*.{ts, tsx}'],
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      navbar: '#191d3d',
      video: '#042443',
    },
    fontFamily: {
      thai: ['Noto Sans Thai', 'sans-serif'],
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
}
