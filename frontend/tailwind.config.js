module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: 'rgba(236, 253, 245, 1)',
        secondary: "#5865f2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
