<template lang="pug">
  div.text-center.py-16
    h3.text-3xl {{ ($route.params.icon) }}
    .p-8
      svg-icon(
        :set='$route.query.s',
        :name='$route.params.icon',
        :variant='$route.query.v',
        size='10rem'
      )
</template>

<script>
import kebabCase from 'lodash.kebabcase'

const components = {
  rounded: require('@glyphs/rounded'),
  brands: require('@glyphs/brands'),
  flags: require('@glyphs/flags')
}

export default {
  computed: {
    icon () {
      if (!this.$route.query) {
        return
      }
      const { s, v } = this.$route.query
      const { icon } = this.$route.params
      if (!s || !v || !icon) {
        return
      }
      return components[s][icon].variants[v]
    }
  },

  methods: {
    kebabCase
  }
}
</script>
