import tailwindConfig from './tailwind.config'

export default {
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/scrollbar.css',
    '@/assets/fonts/fonts.css'
  ],
  plugins: [
    '@/plugins/init.js',
    '@/plugins/clipboard.client.js',
    '@/plugins/click-outside.js',
    '@/plugins/router-sync.client.js',
    '@/plugins/icons.client.js'
  ],
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/gtm'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    '@nuxtjs/pwa'
  ],
  router: {
    prefetchLinks: false
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = (await $content({ deep: true }).fetch()).map(({ path }) => path)
      return files
    }
  },
  build: {
    bable: {
      // Skip modules folder to avoid size errors (The code generator has deoptimised the styling...)
      presets ({ isServer }, [preset, options]) {
        return [
          [
            preset, {
              loaders: [
                {
                  test: /\.js$/,
                  loader: 'babel',
                  include: 'modules/**/*',
                  query: { compact: false }
                }
              ]
            }
          ]
        ]
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Glyphs'
    }
  },
  tailwindcss: {
    config: tailwindConfig
  },
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: '@/assets/css/prism-material-oceanic.css'
      }
    }
  },
  gtm: {
    enabled: process.env.NODE_ENV === 'production',
    debug: false,

    id: 'GTM-KTNCTWB',
    layer: 'dataLayer',
    variables: {},

    pageTracking: false,
    pageViewEventName: 'nuxtRoute'
  }
}
