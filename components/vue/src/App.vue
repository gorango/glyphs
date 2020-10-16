<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <glyph-icon name="heart" style="font-size: 3rem" rotate="45" :transition="true" offset="0" />
  </div>
</template>

<script>
import GlyphIcon from '../GlyphIcon.vue'

export default {
  name: 'App',
  components: {
    GlyphIcon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
