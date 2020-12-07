<template lang="pug">
  section(:class='$store.state.loading && "cursor-wait"',)
    .flex.items-center
      h2.font-bold Multi Select
      QuestionCircle.ml-3.text-xl.text-gray-300
    form.flex.space-x-3.mt-3(
      @submit.prevent='$store.dispatch("post", { type: "search", value: { query, append, children, variants } })'
    )
      input.rounded.px-2.w-full.border.border-gray-300.focus_outline-none.focus_ring-2.focus_ring-gray-800.focus_ring-opacity-20(
        class='py-1.5',
        v-model='query',
        placeholder='Match (optional)'
      )
      Button.bg-blue.text-white(
        type='sumbit'
      ) Search
    .mt-4
      h3.text-gray-400 Advanced
      form.mt-2
        label.flex.items-center.space-x-3.mt-2
          input.appearance-none.h-3.w-3.rounded-sm.border.border-gray-400.checked_border-transparent.checked_bg-blue.focus_outline-none.disabled_opacity-50(
            type='checkbox',
            v-model='append',
            :disabled='!$store.state.selection'
          )
          span(:class='!$store.state.selection && "opacity-50"') Append to selection
        label.flex.items-center.space-x-3.mt-2
          input.appearance-none.h-3.w-3.rounded-sm.border.border-gray-400.checked_border-transparent.checked_bg-blue.focus_outline-none.disabled_opacity-50(
            type='checkbox',
            v-model='children',
            :disabled='!$store.state.selection'
          )
          span(:class='!$store.state.selection && "opacity-50"') Select children in current selection
        label.flex.items-center.space-x-3.mt-2
          input.appearance-none.h-3.w-3.rounded-sm.border.border-gray-400.checked_border-transparent.checked_bg-blue.focus_outline-none.disabled_opacity-50(
            type='checkbox',
            v-model='variants'
          )
          span Select variants
</template>

<style>
input[type=checkbox]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e") !important;
  background-size: 150% 150%;
  background-position: 50% center;
  background-repeat: no-repeat;
}

section.cursor-wait * {
  cursor: wait;
}
</style>

<script>
import Button from '../components/global/Button'
import QuestionCircle from '../components/icons/QuestionCircle'

export default {
  components: {
    Button,
    QuestionCircle,
  },

  data: () => ({
    query: '',
    append: false,
    children: false,
    variants: false
  }),

  watch: {
    '$store.state.loading' (loading, prevLoading) {
    },
    '$store.state.selection' (selection, prevSelection) {
      if (!selection) {
        this.append = false
        this.children = false
      }
    }
  }
}
</script>
