<template lang="pug">
  nav.w-full.flex.items-center.p-4.mx-auto(style='max-width: 1440px')
    div.flex.items-center.justify-start.mr-3
      nuxt-link.flex.items-center.text-lg.p-1.rounded-lg.outline-none(
        aria-label='Home button'
        to='/',
        :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
      )
        svg-icon(set='brands', name='icons', :variant='"path"', size='2rem', stroke-width='4')
    div.flex.items-center.justify-center
      client-only
        form.w-full.relative(@submit.prevent='')
          input.w-full.pl-12.pr-2.py-2.bg-gray-200.dark_bg-gray-800.rounded-lg(
            placeholder='Search Icons',
            @input='handleInput($event)',
            ref='search',
            aria-label='Search',
            name='search'
          )
          .absolute.left-0.inset-y-0.pl-2.flex.items-center.cursor-text(@click='$refs.search && $refs.search.focus()')
            svg-icon.text-gray-600(name='search', :variant='"path"', size='1.75rem', :stroke-width='5')
          template(v-if='!$route.query.q')
            .absolute.right-0.inset-y-0.pr-2.flex.items-center.cursor-text(@click='$refs.search && $refs.search.focus()')
              span.flex.items-center.p-2.border-2.rounded-lg.border-gray-100.dark_border-gray-900.h-8
                span.text-gray-500.dark_text-gray-500 /
          template(v-else)
            .absolute.right-0.inset-y-0.pr-2.flex.items-center
              nuxt-link.flex.items-center.cursor-pointer(:to='{ query: Object.entries($route.query).filter(([key]) => !["q"].includes(key)).reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {}) }')
                svg-icon.text-gray-600(name='times', :variant='"path"', size='1.75rem', :stroke-width='5')
      button.flex.items-center.mx-3.p-1.rounded-lg.cursor-pointer.hover_bg-gray-200.focus_bg-gray-200.focus_outline-none(
        aria-label='Toggle dark mode',
        @click='$colorMode.preference = $colorMode.value === "dark" ? "light" : "dark"'
        :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"',
        tabindex='0'
      )
        client-only
          svg-icon(v-if='$colorMode.value === "light"' name='sun-1', :variant='"path"', size='2rem')
          svg-icon(v-else, name='moon', rotate='-45', :variant='"path"', size='2rem')
    //- (class='w-1/3')
    div.hidden.md_flex.items-center.justify-end
      template(v-for='{path, label} in nav')
        nuxt-link.text-lg.rounded-lg.px-4.py-1.ml-1.outline-none(
          :class=`{
            'text-gray-500 hover_text-gray-400 focus_text-gray-400': $colorMode.value === 'dark' && !$route.path.includes(path),
            'text-gray-600 hover_text-gray-700 focus_text-gray-700': $colorMode.value === 'light' && !$route.path.includes(path)
          }`,
          :active-class='`bg-gray-200 dark_bg-gray-800 text-gray-700 dark_text-gray-400`'
          :to='path'
        ) {{ label }}
    .flex-auto
    a.flex.items-center.p-1.rounded-lg.outline-none.ml-2(
      href='https://www.figma.com/community/file/899031264835768805',
      aria-label='Figma file',
      target='_blank',
      rel='noreferrer noopener',
      :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
    )
      svg-icon(set='brands', name='figma', size='1.75rem', variant='solid')
    a.flex.items-center.p-1.rounded-lg.outline-none.ml-2(
      href='https://github.com/gorango/glyphs',
      aria-label='Github repository',
      target='_blank',
      rel='noreferrer noopener',
      :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
    )
      svg-icon(set='brands', name='github', size='2rem', variant='solid')
    div.md_hidden.ml-2
      a.flex.items-center.justify-end.cursor-pointer.p-1(@click='menu = !menu')
        svg-icon.text-3xl(:name='menu ? "times" : "bars-offset-2"', stroke-width='4')
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

  computed: {
    menu: {
      get () {
        return this.$store.state.menu.open
      },
      set (val) {
        this.$store.commit('menu/toggle', val)
      }
    }
  },

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
        this.$refs.search.value = val.q.toLowerCase()
      } else {
        this.$refs.search.value = ''
      }
    }
  }
}
</script>
