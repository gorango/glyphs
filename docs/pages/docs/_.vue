<template lang="pug">
  .flex.min-w-0.w-full.flex-col.lg_flex-row
    .order-2.lg_order-1.flex-1.min-w-0.px-4.lg_px-8.py-8
      h1.mt-2.mb-8.text-4xl.font-bold {{ document.title }}
      nuxt-content.prose.dark_prose-dark.docs.pb-16(:document='document')
      div.flex.justify-between.mt-8.text-blue-500.dark_text-blue-300.border-t.border-gray-100.dark_border-gray-700.pt-8
        div.flex.items-center.space-x-3(v-if='prev')
          svg-icon(name='arrow', rotate='w', stroke-width='7')
          nuxt-link(:to='prev.path')
            span.opacity-50.mr-2 {{ prev.category }}
            br.sm_hidden
            span {{ prev.title }}
        .flex-auto
        div.flex.items-center.space-x-3(v-if='next')
          nuxt-link(:to='next.path')
            span.opacity-50.mr-2 {{ next.category }}
            br.sm_hidden
            span {{ next.title }}
          svg-icon(name='arrow', rotate='e', stroke-width='7')

    template(v-if='document.toc && document.toc.length')
      div.toc.order-1.lg_order-2.flex.flex-col.px-4.block.lg_sticky.self-start.lg_w-64.w-full.py-4.my-6.sm_my-0.h-auto(style='top: 72px; min-width: 16rem')
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
        .flex-auto
        a.mt-6.mb-4.flex.items-center.space-x-3.text-gray-600.dark_text-gray-500(
          :href='`https://github.com/gorango/glyphs/edit/main/docs/content${document.path}.md`',
          target='_blank',
          ref='noreferrer noopener',
        )
          svg-icon.text-2xl(name='edit-1', stroke-width='4')
          span Suggest an edit
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
      .where({ disabled: { $ne: true }, position: { $gt: 0 } })
      .only(['title', 'category', 'slug', 'path'])
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
@media (min-width: theme('screens.lg')) {
  .toc {
    height: calc(100vh - 72px)
  }
}
</style>
