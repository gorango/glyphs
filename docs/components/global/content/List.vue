<template lang="pug">
  div
    template(v-for='item in items')
      .flex.items-center
        svg-icon.mr-3.text-2xl.text-green-500(set='rounded', name='check-circle', stroke-width='6')
        | {{ item }}
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
