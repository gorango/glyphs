<template lang="pug">
  section
    .flex.items-center
      h2.font-bold Selection Actions
      QuestionCircle.ml-3.text-xl.text-gray-300
    .mt-3
      template(v-for='{ type, label } in list')
        .flex.items-center.space-x-3.mt-2
          Button.border.border-gray-200(
            class='px-1.5',
            @click.native='$store.dispatch("post", { type })'
            :disabled='!$store.state.selection'
          )
            Play.text-md
          span(:class='!$store.state.selection && "opacity-50"') {{ label }}
</template>

<script>
import QuestionCircle from '../components/icons/QuestionCircle'
import Play from '../components/icons/Play'
import Button from '../components/global/Button'

export default {
  components: {
    QuestionCircle,
    Play,
    Button,
  },

  data: () => ({
    list: [{
      type: 'removeSelected',
      label: 'Remove selected layers'
    }, {
      type: 'toggleVisibility',
      label: 'Toggle visibility of hidden child nodes'
    }, {
      type: 'flattenChildren',
      label: 'Flatten child layers & preserve original'
    }, {
      type: 'frameChildren',
      label: 'Frame selected children'
    }, {
      type: 'variantsComponentSet',
      label: 'Create component set from variants'
    }, {
      type: 'newComponentSet',
      label: 'Create new component set from main'
    }, {
      type: 'unionSelected',
      label: 'Union selected layers'
    }, {
      type: 'centerChildren',
      label: 'Align children to parents’ centers'
    }, {
      type: 'sortSelected',
      label: 'Sort panel layers to match visual order '
    }]
  })
}
</script>
