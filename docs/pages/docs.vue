<template lang="pug">
  .w-full
    .flex.relative.mx-auto(style='max-width: 1440px')
      docs-nav.hidden.md_flex
      nuxt
</template>

<script>
export default {
  scrollToTop: true,

  head: {
    title: 'Docs'
  },

  computed: {
    categories () {
      return this.$store.state.docs.categories
    }
  },

  watch: {
    '$route.params.pathMatch': {
      handler (val) {
        if (!val) { this.redirect() }
      }
    }
  },

  mounted () {
    if (!this.$route.params.pathMatch) { this.redirect() }
  },

  methods: {
    redirect () {
      this.$router.replace('/docs/introduction')
    }
  }
}
</script>
