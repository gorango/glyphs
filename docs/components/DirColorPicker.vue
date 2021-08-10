<template lang="pug">
  div.hidden.sm_block.mr-6(v-click-outside='hideColor')
    div.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Color
    .relative
      button.p-1.bg-gray-200.hover_bg-gray-300.dark_bg-gray-800.dark_hover_bg-gray-700.rounded-lg.border-2.border-gray-300.dark_border-gray-700.flex.items-center.outline-none(
        @click='showColor = !showColor',
      )
        svg-icon.text-3xl(name='palette')
        svg-icon(name='caret', rotate='s', size='1.25rem', stroke-width='5')

      template(v-if='showColor')
        .absolute.p-4.left-0.z-20.mt-2.rounded-lg.bg-gray-200.dark_bg-gray-800.border-2.border-gray-300.dark_border-gray-700(
          style='top: 100%; left: 50%; transform: translateX(-50%)'
        )
          .flex.space-x-2
            template(v-for="color in ['pink', 'purple', 'indigo', 'blue', 'teal', 'green', 'orange', 'red', null]")
              a.rounded-full.p-3.overflow-hidden.cursor-pointer(
                @mouseenter='changeColor(color)',
                @click='showColor = false',
                :class='color ? `bg-${color}-500 hover_bg-${color}-700` : `bg-gray-800 dark_bg-gray-300`'
              )
</template>

<script>
export default {
  methods: {
    changeColor (color) {
      this.activeColor = color
      // document.documentElement.style.setProperty('--color-primary-500', color)
    },

    hideColor () {
      this.showColor = false
    }
  }
}
</script>
