<template lang="pug">
  .flex.min-w-0.w-full.flex-col.lg_flex-row
    .order-2.lg_order-1.flex-1.min-w-0.px-4.lg_px-8.pt-6.pb-16
      h1.mb-8.text-4xl.font-bold {{ document.title }}
      nuxt-content.prose.dark_prose-dark.docs(:document='document')
    template(v-if='document.toc && document.toc.length')
      div.order-1.lg_order-2.flex.flex-col.px-4.block.lg_sticky.self-start(style='top: 72px; width: 16rem; min-width: 16rem')
        h3.text-grey-900.uppercase.text-xs.tracking-wider.mt-4.mb-3 On this page
        template(v-for='link, i in document.toc')
          hr.border-gray-400.dark_border-gray-700.my-1(v-if='i && link.depth === 2')
          a(
            :href='`#${link.id}`',
            :class=`{
              'text-gray-600 hover_text-gray-800 focus_text-gray-800': $colorMode.value === 'light',
              'text-gray-500 hover_text-gray-400 focus_text-gray-400': $colorMode.value === 'dark',
              'py-2': link.depth === 2,
              'ml-2 mb-2': link.depth === 3
            }`
          ) {{ link.text }}
</template>

<script>
export default {
  scrollToTop: true,

  async asyncData ({ $content, store, app, params, error }) {
    const path = `/docs/${params.pathMatch || ''}`
    // const path = route.path
    const [document] = await $content({ deep: true }).where({ path }).fetch()
    if (!document) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content({ deep: true })
      .only(['title', 'slug', 'to'])
      .sortBy('position', 'asc')
      .surround(document.slug, { before: 1, after: 1 })
      .fetch()

    return {
      document,
      prev,
      next
    }
  },

  head () {
    return {
      title: this.document.title,
      meta: [
        { hid: 'description', name: 'description', content: this.document.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.document.title },
        { hid: 'og:description', property: 'og:description', content: this.document.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.document.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.document.description }
      ]
    }
  },

  computed: {
    categories () {
      return this.$store.state.docs.categories
    }
  },

  watchQuery: true
}
</script>

<style>
.prose {
  @apply max-w-none;
}
</style>
