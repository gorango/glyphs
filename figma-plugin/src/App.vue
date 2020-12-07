<template lang="pug">
  div
    Search.p-4
    hr.block.border-gray-200
    Target.p-4
    hr.block.border-gray-200
    Actions.p-4
    hr.block.border-gray-200
    Arrange.p-4
</template>

<script>
import Search from './components/Search'
import Target from './components/Target'
import Actions from './components/Actions'
import Arrange from './components/Arrange'
import { post } from './utils/figma'

export default {
  components: {
    Search,
    Target,
    Actions,
    Arrange
  },
  
  mounted () {
    window.addEventListener('keyup', event => {
      switch (event.key) {
        case 'Escape':
          post('cancel')
          break;
      }
    })

    onmessage = ({ data: { pluginId, pluginMessage: { type, value } } }) => {
      switch (type) {
        case 'selection':
          this.$store.commit('setSelection', value)
          break
        case 'loading':
          this.$store.commit('setLoading', value)
          break
      }
    }
  }
}
</script>

<style>
svg path {
  stroke-width: 4
}
</style>
