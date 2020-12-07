<template lang="pug">
  section
    .flex.items-center
      h2.font-bold Arrange Selection
      QuestionCircle.ml-3.text-xl.text-gray-300
    .mt-3
      .flex.items-center
        label.flex-1.flex.items-center.space-x-2
          span.text-gray-400 Columns
          input.border-0.w-8.focus_outline-none.text-sm.font-medium(
            type='number',
            v-model='cols'
          )
        label.flex-1.flex.items-center.space-x-2
          span.text-gray-400 Gutter
          input.border-0.w-8.focus_outline-none.text-sm.font-medium(
            type='number',
            v-model='gutter'
          )
        Button.border.border-gray-300(
          :disabled='!$store.state.selection',
          @click.native='$store.dispatch("post", { type: "arrange", value: { cols, gutter } })'
        ) Arrange
</template>

<script>
import QuestionCircle from '../components/icons/QuestionCircle'
import Button from '../components/global/Button'

export default {
  components: {
    QuestionCircle,
    Button
  },

  data: () => ({
    cols: 24,
    gutter: 80
  })
}
</script>
