const plugin = require('tailwindcss/plugin')
module.exports = {
  mode:'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
