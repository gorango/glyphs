<template lang="pug">
  button.text-center.rounded.px-5.font-normal.focus_outline-none.focus_ring-2.focus_ring-gray-800.focus_ring-opacity-20.disabled_opacity-50(
    v-bind='$props'
    class='py-1.5'
  )
    slot
</template>

<script>
export default {
  name: 'Button'
}
</script>
