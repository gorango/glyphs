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
    '@/assets/css/scrollbar.css'
  ],
  plugins: [
    '@/plugins/init.js',
    '@/plugins/clipboard.client.js',
    '@/plugins/click-outside.js'
    // '@/plugins/icons.client.js',
    // '@/plugins/router-sync.client.js'
  ],
  components: true,
  modules: [
    '@nuxt/content'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg',
    '@nuxtjs/pwa',
    'nuxt-ackee'
  ],
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
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  googleFonts: {
    families: {
      Inter: [300, 500, 700, 900]
    }
  },
  ackee: {
    server: 'https://ackee-icons-fyi.herokuapp.com',
    domainId: '994f4a89-2291-449c-82b9-4c50fa1cb856',
    detailed: true
  },
  pwa: {
    manifest: {
      name: 'Glyphs'
    }
  },
  tailwindcss: {
    config: tailwindConfig
  }
}
