<template lang="pug">
  main
    header.w-full.bg-white.dark_bg-gray-900.z-20.sticky.top-0
      app-nav
    .bg-gray-100.dark_bg-gray-800.flex-auto.relative(style='min-height: calc(100vh - 140px); margin-bottom: 67px')
      app-overlay(v-model='$store.state.menu.open')
      nuxt
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
  head () {
    return {
      titleTemplate: str => str ? `${str} | Glyphs` : 'Glyphs',
      bodyAttrs: {
        class: [...this.bodyClass, 'antialiased leading-normal bg-gray-100 dark_bg-gray-800 text-gray-700 dark_text-gray-300']
      },
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: 'icons/favicon-128x128.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'icons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'icons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/ico', href: 'favicon.ico' }

      ]
    }
  },

  computed: {
    bodyClass () {
      return this.$store.state.menu.open ? ['h-screen lg_h-auto overflow-y-hidden lg_overflow-y-auto'] : []
    }
  }
}
</script>
