<template lang="pug">
  main
    header.w-full.bg-white.dark_bg-gray-900.z-20.sticky.top-0
      nav.w-full.flex.items-center.p-4.mx-auto(style='max-width: 1440px')
        //- (class='w-1/3')
        div.flex.items-center.justify-start.mr-3
          nuxt-link.flex.items-center.text-lg.p-1.rounded-lg.outline-none(
            to='/',
            :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
          )
            svg-icon(set='brands', name='icons', :variant='"path"', size='2rem', :stroke-width='3')
        //- (class='w-1/3')
        div.flex.items-center.justify-center(class='w-1/3')
          client-only
            form.w-full.relative(@submit.prevent='')
              input.w-full.pl-12.pr-2.py-2.bg-gray-200.dark_bg-gray-800.rounded-lg(
                placeholder='Search Icons (Press "/" to focus)',
                @input='handleInput($event)',
                ref='search'
              )
              .absolute.left-0.inset-y-0.pl-2.flex.items-center
                svg-icon.text-gray-600(name='search', :variant='"path"', size='1.75rem', :stroke-width='5')
              template(v-if='$route.query.q')
                .absolute.right-0.inset-y-0.pr-2.flex.items-center
                  nuxt-link.flex.items-center.cursor-pointer(:to='{ query: Object.entries($route.query).filter(([key]) => !["q"].includes(key)).reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {}) }')
                    svg-icon.text-gray-600(name='times', :variant='"path"', size='1.75rem', :stroke-width='5')
          button.flex.items-center.ml-3.p-1.rounded-lg.cursor-pointer.hover_bg-gray-200.focus_bg-gray-200.focus_outline-none(
            @click='$colorMode.preference = $colorMode.value === "dark" ? "light" : "dark"'
            :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"',
            tabindex='0'
          )
            client-only
              svg-icon(v-if='$colorMode.value === "light"' name='sun-1', :variant='"path"', size='2rem')
              svg-icon(v-else, name='moon', rotate='-45', :variant='"path"', size='2rem')
        //- (class='w-1/3')
        .flex-auto
        div.flex.items-center.justify-end
          template(v-for='{path, label} in nav')
            nuxt-link.text-lg.rounded-lg.px-4.py-1.ml-1.outline-none(
              :class=`{
                'text-gray-500 hover_text-gray-400 focus_text-gray-400': $colorMode.value === 'dark' && !$route.path === path,
                'text-gray-600 hover_text-gray-700 focus_text-gray-700': $colorMode.value === 'light' && !$route.path === path
              }`,
              :active-class='`bg-gray-200 dark_bg-gray-800 ${$colorMode.value === "light" ? "text-gray-700" : "text-gray-400"}`'
              :to='path'
            ) {{ label }}
    nuxt.bg-gray-100.dark_bg-gray-800.flex-auto(style='min-height: calc(100vh - 140px); margin-bottom: 67px')
    footer.bg-gray-200.dark_bg-gray-900.fixed.bottom-0.w-full(style='z-index: -1;')
      nav.w-full.flex.items-center.p-4.mx-auto(style='max-width: 1440px')
        //- (class='w-1/3')
        nuxt-link.flex.items-center.p-1.rounded-lg.outline-none(
          to='/',
          :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
        )
          svg-icon(set='brands', name='icons', size='2rem', variant='bold')
        .flex-auto
        //- a.ml-3.flex.items-center.p-1.rounded-lg.outline-none(
        //-   href='mailto:hi5@glyphs.fyi',
        //-   target='_blank',
        //-   ret='noreferrer noopener',
        //-   :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
        //- )
        //-   svg-icon(set='rounded', name='envelope', size='2rem', variant='bold')
        a.ml-3.flex.items-center.p-1.rounded-lg.outline-none(
          href='https://github.com/gorango/glyphs',
          target='_blank',
          ret='noreferrer noopener',
          :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
        )
          svg-icon(set='brands', name='github', size='2rem', variant='bold')
</template>

<script>
export default {
  data: () => ({
    nav: [{
      path: '/dir',
      label: 'Icons'
    }, {
      path: '/docs',
      label: 'Docs'
    }]
  }),

  watch: {
    '$route.query': {
      // eslint-disable-next-line
      handler: function (val) { this.handleQuery(val) },
      deep: true
    }
  },

  mounted () {
    window && window.addEventListener('keydown', this.handleKeydown)
    this.handleQuery(this.$route.query)
  },

  methods: {
    handleKeydown (event) {
      switch (event.key) {
        case '/':
          event.preventDefault()
          if (this.$refs.search) {
            this.$refs.search.focus()
          }
          break
        case 'Escape':
          event.preventDefault()
          this.$router.push({
            query: Object.entries(this.$route.query)
              .filter(([key]) => !['q'].includes(key))
              .reduce(
                (obj, [key, val]) => ({ ...obj, [key]: val }),
                {}
              )
          })
      }
    },

    handleInput ({ target: { value } }) {
      const path = '/dir'

      if (value.trim().length) {
        const query = Object.entries(this.$route.query)
          .filter(([key]) => !['c', 'q'].includes(key))
          .reduce(
            (obj, [key, val]) => ({ ...obj, [key]: val }),
            { q: value }
          )
        const newRoute = { path, query }
        window.scrollTo(0, 0)
        if (this.$route.query.q) {
          this.$router.replace(newRoute)
        } else {
          this.$router.push(newRoute)
        }
      } else {
        const query = Object.entries(this.$route.query)
          .filter(([key]) => key !== 'q')
          .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {})
        this.$router.push({ path, query })
      }
    },

    async handleQuery (val) {
      if (!this.$refs.search) {
        await this.$nextTick()
      }
      if (val.q) {
        this.$refs.search.value = val.q
      } else {
        this.$refs.search.value = ''
      }
    }
  },

  head () {
    return {
      titleTemplate: str => str ? `${str} | Glyphs` : 'Glyphs',
      bodyAttrs: {
        class: ['antialiased leading-normal bg-gray-100 dark_bg-gray-800 text-gray-700 dark_text-gray-300']
      },
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=0.325' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: 'icons/favicon-128x128.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'icons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'icons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/ico', href: 'favicon.ico' }

      ]
    }
  }
}
</script>
