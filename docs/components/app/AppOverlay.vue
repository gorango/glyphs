<template lang="pug">
  div.bg-white.dark_bg-gray-900.p-4.fixed.inset-0.z-30.overflow-auto(v-if='show', style='margin-top: 72px')
    nav.flex.items-center
      nuxt-link.text-lg.rounded-lg.px-2.py-1.ml-1.outline-none(
        :class=`{
          'text-gray-500 hover_text-gray-400 focus_text-gray-400': $colorMode.value === 'dark',
          'text-gray-600 hover_text-gray-700 focus_text-gray-700': $colorMode.value === 'light'
        }`,
        :exact-active-class='`bg-gray-200 dark_bg-gray-800 text-gray-700 dark_text-gray-400`'
        @click.native='$store.commit("menu/toggle", false)',
        to='/'
      ) Home
      .flex-auto
      template(v-for='{path, label} in nav')
        nuxt-link.text-lg.rounded-lg.px-2.py-1.ml-1.outline-none(
          :class=`{
            'text-gray-500 hover_text-gray-400 focus_text-gray-400': $colorMode.value === 'dark' && !$route.path.includes(path),
            'text-gray-600 hover_text-gray-700 focus_text-gray-700': $colorMode.value === 'light' && !$route.path.includes(path)
          }`,
          @click.native='$store.commit("menu/toggle", false)',
          :active-class='`bg-gray-200 dark_bg-gray-800 text-gray-700 dark_text-gray-400`'
          :to='path'
        ) {{ label }}
    template(v-if='$route.fullPath.startsWith("/docs")')
      docs-nav.relative.mt-4
</template>

<script>
import DocsNav from './DocsNav'

export default {
  components: {
    DocsNav
  },

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    show: false,
    nav: [{
      path: '/dir',
      label: 'Icons'
    }, {
      path: '/docs',
      label: 'Docs'
    }]
  }),

  watch: {
    value: {
      handler (val) {
        this.show = val
      },
      immediate: true
    }
  }
}
</script>
