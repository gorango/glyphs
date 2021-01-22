import tailwindConfig from './tailwind.config'

const getContent = async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).fetch()
  return files.map(({ path }) => path)
}

export default {
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'A dynamic design system for creating icon sets in Figma and using them on the web.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { async: true, defer: true, 'data-domain': 'glyphs.fyi', src: 'https://stats.glyphs.fyi/js/index.js' }
    ]
  },
  css: [
    '@/assets/fonts/fonts.css',
    '@/assets/css/main.css',
    '@/assets/css/scrollbar.css'
  ],
  plugins: [
    '@/plugins/init.js',
    '@/plugins/clipboard.client.js',
    '@/plugins/clarity.client.js',
    '@/plugins/click-outside.js',
    '@/plugins/icons.client.js'
  ],
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
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
    routes: getContent,
    subFolders: false
  },
  sitemap: {
    hostname: 'https://glyphs.fyi',
    routes: getContent
  },
  build: {
    parallel: true,
    extractCSS: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
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
        theme: '@/assets/css/prism.css'
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
