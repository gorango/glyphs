<template lang="pug">
  div.flex.flex-col.px-4.sticky.self-start(class='w-64', style='top: 72px')
    template(v-for='(docs, category, index) in categories')
      //- pre {{category, docs}}
      h3.text-grey-900.uppercase.text-xs.tracking-wider.mt-4.mb-2 {{ category }}
      template(v-for='child in docs')
        nuxt-link.px-2.py-1.rounded-lg.capitalize.transform.transition-all.duration-200.hover_text-gray-900(
          :to='child.path',
          :class='$route.path === child.path ? "bg-gray-200 text-gray-900" : "text-gray-600"'
         ) {{ child.title }}
</template>

<script>
export default {
  computed: {
    categories () {
      return this.$store.state.docs.categories
    }
  }
}
</script>
