
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    :width="size"
    :height="size"
    :transform="transform"
  >
    <slot></slot>
    <g>      
      <template v-if="variant === 'path'">
        <path
          d="M38.2635 15.039C39.0313 13.6953 40.9687 13.6953 41.7364 15.039L70.2901 65.0078C71.052 66.3412 70.0892 68.0001 68.5536 68.0001H11.4463C9.91067 68.0001 8.94794 66.3412 9.70983 65.0078L38.2635 15.039Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M39.9678 28.4746V50.8746"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M39.9678 58.0745V59.6745"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M38.2635 15.039C39.0313 13.6953 40.9687 13.6953 41.7364 15.039L70.2901 65.0078C71.052 66.3412 70.0892 68.0001 68.5536 68.0001H11.4463C9.91067 68.0001 8.94794 66.3412 9.70983 65.0078L38.2635 15.039ZM39.9677 25.9747C41.3484 25.9747 42.4677 27.094 42.4677 28.4747V50.8747C42.4677 52.2554 41.3484 53.3747 39.9677 53.3747C38.587 53.3747 37.4677 52.2554 37.4677 50.8747V28.4747C37.4677 27.094 38.587 25.9747 39.9677 25.9747ZM42.4677 58.0746C42.4677 56.6939 41.3484 55.5746 39.9677 55.5746C38.587 55.5746 37.4677 56.6939 37.4677 58.0746V59.6746C37.4677 61.0553 38.587 62.1746 39.9677 62.1746C41.3484 62.1746 42.4677 61.0553 42.4677 59.6746V58.0746Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M38.2635 15.0389C39.0313 13.6952 40.9687 13.6952 41.7365 15.0389L70.2901 65.0077C71.052 66.341 70.0893 68 68.5536 68H11.4464C9.91071 68 8.94798 66.341 9.70987 65.0077L38.2635 15.0389Z"
          fill="#EB5757"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M39.9678 50.8746V28.4746"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M39.9678 58.0747L39.9678 59.6747"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M38.2635 15.039C39.0313 13.6953 40.9687 13.6953 41.7364 15.039L70.2901 65.0078C71.052 66.3412 70.0892 68.0001 68.5536 68.0001H11.4463C9.91067 68.0001 8.94794 66.3412 9.70983 65.0078L38.2635 15.039Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M39.9677 28.4747V50.8747M39.9677 58.0746V59.6746M11.4463 68.0001H68.5536C70.0892 68.0001 71.052 66.3412 70.2901 65.0078L41.7364 15.039C40.9687 13.6953 39.0313 13.6953 38.2635 15.039L9.70983 65.0078C8.94794 66.3412 9.91067 68.0001 11.4463 68.0001Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M39.9678 26.4747C41.0723 26.4747 41.9678 27.3702 41.9678 28.4747V50.8747C41.9678 51.9793 41.0723 52.8747 39.9678 52.8747C38.8632 52.8747 37.9678 51.9793 37.9678 50.8747V28.4747C37.9678 27.3702 38.8632 26.4747 39.9678 26.4747Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M41.9678 58.0746C41.9678 56.97 41.0723 56.0746 39.9678 56.0746C38.8632 56.0746 37.9678 56.97 37.9678 58.0746V59.6746C37.9678 60.7792 38.8632 61.6746 39.9678 61.6746C41.0723 61.6746 41.9678 60.7792 41.9678 59.6746V58.0746Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.527 14.0467C38.0626 11.3594 41.9374 11.3594 43.473 14.0467L72.0266 64.0156C73.5504 66.6822 71.6249 70.0001 68.5536 70.0001H11.4463C8.37505 70.0001 6.44958 66.6822 7.97337 64.0156L36.527 14.0467ZM68.5536 66.0001L40 16.0313L11.4463 66.0001H68.5536Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
    </g>
  </svg>
</template>

<script>
import Vue from 'vue'
import { transform } from '../utils'

export default {
  name: 'node_modules/@glyphs/core',

  props: {
    size: { type: String, default: '40', },
    color: { type: String, default: 'currentColor', },
    variant: { type: String, default: '', },
    colors: { type: [String], default: ['#000000', '#C4C4C4'], },
    strokeWidth: { type: String, default: '3', },
    strokeLinecap: { type: String, default: 'round', },
    strokeLinejoin: { type: String, default: 'round', },
    rotate: { type: String, default: '0', },
    flip: { type: String, default: '' }
  },

  computed: {
    transform () {
      return transform(this.rotate, this.flip)
    }
  }
}
</script>
