const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const selectorParser = require('postcss-selector-parser')

/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  // important: true,
  separator: '_',
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'hover'],
    opacity: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus'],
    borderWidth: ['responsive', 'first', 'last'],
    typography: ['responsive', 'dark']
  },
  plugins: [
    plugin(function ({ addVariant, prefix, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              sel.value = `dark${separator}${sel.value}`
              sel.parent.insertBefore(sel, selectorParser().astSync(prefix('.dark-mode ')))
            })
          }).processSync(selector)
        })
      })

      addVariant('dark-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-mode .${e(`dark-hover${separator}${className}`)}:hover`
        })
      })

      addVariant('dark-focus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-mode .${e(`dark-focus${separator}${className}`)}:focus`
        })
      })
    }),
    require('@tailwindcss/typography')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: [
        'dark-mode',
        'bg-pink-500',
        'text-pink-500',
        'dark_text-pink-400',
        'hover_bg-pink-700',
        'bg-purple-500',
        'text-purple-500',
        'dark_text-purple-400',
        'hover_bg-purple-700',
        'bg-indigo-500',
        'text-indigo-500',
        'dark_text-indigo-400',
        'hover_bg-indigo-700',
        'bg-blue-500',
        'text-blue-500',
        'dark_text-blue-400',
        'hover_bg-blue-700',
        'bg-teal-500',
        'text-teal-500',
        'dark_text-teal-400',
        'hover_bg-teal-700',
        'bg-green-500',
        'text-green-500',
        'dark_text-green-400',
        'hover_bg-green-700',
        'bg-orange-500',
        'text-orange-500',
        'dark_text-orange-400',
        'hover_bg-orange-700',
        'bg-red-500',
        'text-red-500',
        'dark_text-red-400',
        'hover_bg-red-700'
      ]
    }
  },
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '960px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        tiny: '.625rem'
      },
      colors: {
        primary: {
          100: 'var(--color-primary-100, #EBF8FF)',
          200: 'var(--color-primary-200, #BEE3F8)',
          300: 'var(--color-primary-300, #90CDF4)',
          400: 'var(--color-primary-400, #63B3ED)',
          500: 'var(--color-primary-500, #4299E1)',
          600: 'var(--color-primary-600, #3182CE)',
          700: 'var(--color-primary-700, #2B6CB0)',
          800: 'var(--color-primary-800, #2C5282)',
          900: 'var(--color-primary-900, #2A4365)'
        },
        gray: {
          ...defaultTheme.colors.gray,
          900: '#232b3a',
          1000: '#1A202C'
        }
      },
      maxHeight: {
        '(screen-16)': 'calc(100vh - 72px)'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))'
      },
      gridRow: {
        'span-7': 'span 7 / span 7'
      },
      gridRowStart: {
        7: '7',
        8: '8',
        9: '9'
      },
      width: {
        11: '2.75rem',
        72: '18rem',
        80: '20rem'
      },
      height: {
        11: '2.75rem',
        72: '18rem',
        80: '20rem'
      }
    },
    typography: theme => ({
      default: {
        css: {
          a: {
            color: theme('colors.blue.500')
          },
          h2: {
            paddingBottom: theme('padding.2'),
            borderBottomWidth: '1px',
            borderBottomColor: theme('colors.gray.400')
          },
          h3: {
            paddingBottom: theme('padding.2'),
            borderBottomWidth: '1px',
            borderBottomColor: theme('colors.gray.400')
          },
          blockquote: {
            fontWeight: '400',
            color: theme('colors.gray.600'),
            fontStyle: 'normal',
            quotes: '"\\201C""\\201D""\\2018""\\2019"'
          },
          'blockquote p:first-of-type::before': {
            content: ''
          },
          'blockquote p:last-of-type::after': {
            content: ''
          },
          code: {
            fontWeight: '400',
            backgroundColor: theme('colors.gray.200'),
            padding: theme('padding.1'),
            borderWidth: 1,
            borderColor: theme('colors.gray.300'),
            borderRadius: theme('borderRadius.lg')
          },
          'code::before': {
            content: ''
          },
          'code::after': {
            content: ''
          },
          'h3 code': {
            fontWeight: '600'
          },
          'pre code': {
            // fontFamily: 'DM Mono'
          }
        }
      },
      dark: {
        css: {
          color: theme('colors.gray.300'),
          '[class~="lead"]': {
            color: theme('colors.gray.300')
          },
          a: {
            color: theme('colors.blue.300')
          },
          strong: {
            color: theme('colors.gray.100')
          },
          'ol > li::before': {
            color: theme('colors.gray.400')
          },
          'ul > li::before': {
            backgroundColor: theme('colors.gray.600')
          },
          hr: {
            borderColor: theme('colors.gray.700')
          },
          blockquote: {
            color: theme('colors.gray.400'),
            borderLeftColor: theme('colors.gray.700')
          },
          h1: {
            color: theme('colors.gray.100')
          },
          h2: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.700')
          },
          h3: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.700')
          },
          h4: {
            color: theme('colors.gray.100')
          },
          'figure figcaption': {
            color: theme('colors.gray.400')
          },
          code: {
            color: theme('colors.gray.100'),
            backgroundColor: theme('colors.gray.900'),
            borderColor: theme('colors.gray.1000'),
            borderWidth: 0
          },
          thead: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.600')
          },
          'tbody tr': {
            borderBottomColor: theme('colors.gray.700')
          }
        }
      }
    })
  }
}
