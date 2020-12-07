<template lang="pug">
  section
    .flex.items-center
      h2.font-bold Target Layers
      QuestionCircle.ml-3.text-xl.text-gray-300
    .mt-3.flex.space-x-3
      template(v-for='{ type, icon } in list')
        Button.border.border-gray-300.text-lg(
          class='px-1.5',
          :disabled='!$store.state.selection',
          @click.native='$store.dispatch("post", { type })'
        )
          template(v-if='icon === "eye"')
            Eye
          template(v-if='icon === "eye-slash"')
            EyeSlash
          template(v-if='icon === "seek-step"')
            SeekStep
          template(v-if='icon === "arrow-line-end"')
            ArrowLineEnd
</template>

<script>
import Button from '../components/global/Button'
import QuestionCircle from '../components/icons/QuestionCircle'
import Eye from '../components/icons/Eye'
import EyeSlash from '../components/icons/EyeSlash'
import SeekStep from '../components/icons/SeekStep'
import ArrowLineEnd from '../components/icons/ArrowLineEnd'

export default {
  components: {
    Button,
    QuestionCircle,
    Eye,
    EyeSlash,
    SeekStep,
    ArrowLineEnd,
    Button,
  },

  data: () => ({
    list: [{
      type: 'selectVisible',
      icon: 'eye'
    }, {
      type: 'selectHidden',
      icon: 'eye-slash'
    }, {
      type: 'selectNext',
      icon: 'seek-step'
    }, {
      type: 'selectParent',
      icon: 'arrow-line-end'
    }]
  })
}
</script>
