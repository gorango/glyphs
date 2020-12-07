const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  separator: '_',
  purge: {
    enabled: true, // process.env.NODE_ENV === 'production',
    content: [
      './src/App.vue',
      './src/ui.js',
      './src/**/*.vue',
      './src/components/**/*.vue',
      './src/**/*.js',
      './src/**/*.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        blue: '#18A0FB'
      },
      borderRadius: {
        DEFAULT: '6px'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textColor: ['checked'],
      opacity: ['disabled']
    },
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        body: { fontSize: '12px' }
      })
    })
  ],
}
