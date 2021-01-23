<template lang="pug">
  main
    header.w-full.bg-white.dark_bg-gray-900.z-20.sticky.top-0
      app-nav
    .bg-gray-100.dark_bg-gray-800.flex-auto.relative(style='min-height: calc(100vh - 144px); margin-bottom: 72px')
      app-overlay(v-model='$store.state.menu.open')
      nuxt
    footer.bg-gray-200.dark_bg-gray-900.fixed.bottom-0.w-full(style='z-index: -1; height: 72px')
      nav.w-full.flex.items-center.p-4.mx-auto.space-x-4(style='max-width: 1440px')
        //- (class='w-1/3')
        nuxt-link.flex.items-center.p-1.rounded-lg.outline-none(
          to='/',
          aria-label='Home button',
          :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
        )
          svg-icon(set='brands', name='icons', size='2rem', variant='solid')
        .flex-auto
        //- a.flex.items-center.p-1.rounded-lg.outline-none.cursor-pointer(
        //-   :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
        //- )
        //-   svg-icon.text-yellow-500(set='core', name='bell', size='1.75rem', variant='bold')
        //- a.flex.items-center.p-1.rounded-lg.outline-none.cursor-pointer(
        //-   :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
        //- )
        //-   svg-icon.text-red-500(set='core', name='heart1', size='2rem', variant='bold')
        a.flex.items-center.p-1.rounded-lg.outline-none(
          href='https://www.figma.com/file/2TsY9yqFso1zrvF8LNcVE7',
          aria-label='Figma file',
          target='_blank',
          rel='noreferrer noopener',
          :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
        )
          svg-icon(set='brands', name='figma', size='1.75rem', variant='solid')
        a.flex.items-center.p-1.rounded-lg.outline-none(
          href='https://github.com/gorango/glyphs',
          aria-label='Github repository',
          target='_blank',
          rel='noreferrer noopener',
          :class='$colorMode.value === "dark" ? "hover_bg-gray-800 focus_bg-gray-800" : "hover_bg-gray-200 focus_bg-gray-200"'
        )
          svg-icon(set='brands', name='github', size='2rem', variant='solid')
</template>

<script>
export default {
  head () {
    return {
      title: 'Glyphs - The Complete Icon Design System',
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
