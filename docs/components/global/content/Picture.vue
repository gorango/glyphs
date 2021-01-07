<template lang="pug">
  div
    img(:src='src', :alt='name')
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    }
  },

  data: () => ({
    src: null
  }),

  mounted () {
    const theme = 'dark'
    const name = this.toggle
      ? `${this.name
        .split('.')
        .reduce((str, seg, i) =>
          !i ? seg : `${str}-${theme}.${seg}`, '')}`
      : this.name
    // this.src = require(`@/assets/content/${name}`)
  }
}
</script>
