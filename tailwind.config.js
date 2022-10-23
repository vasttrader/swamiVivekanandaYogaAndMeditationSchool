/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#566a66',
        'primary-contrast': '#227179',
        'primary-light': '#69938a',
        'primary-dark': '#404b48',
        'primary-highlight': '#3cc3a9',
        secondary: '#f1615a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
