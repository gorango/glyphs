
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
          d="M9.25 47.5648H18.1083C18.4993 47.5648 18.8545 47.337 19.0174 46.9815L23.191 37.8753C23.5695 37.0497 24.7637 37.1153 25.0494 37.9774L32.9133 61.7122C33.2112 62.6113 34.4758 62.631 34.8015 61.7416L49.3839 21.9295C49.6952 21.0796 50.8855 21.0476 51.242 21.8795L61.9902 46.9588C62.1478 47.3264 62.5094 47.5648 62.9094 47.5648H70.75"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M9 48H17.8583C18.2493 48 18.6045 47.7721 18.7674 47.4167L21.25 42L22.941 38.3105C23.3195 37.4848 24.5137 37.5505 24.7994 38.4126L31.4588 58.5121L32.6633 62.1474C32.9612 63.0464 34.2258 63.0661 34.5515 62.1768L47.5577 26.6679L49.1339 22.3647C49.4452 21.5147 50.6355 21.4827 50.992 22.3147L61.7403 47.3939C61.8978 47.7616 62.2594 48 62.6594 48L70.5 48"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M9 48H17.8583C18.2493 48 18.6045 47.7721 18.7674 47.4167L21.25 42L22.941 38.3105C23.3195 37.4848 24.5137 37.5505 24.7994 38.4126L31.4588 58.5121L32.6633 62.1474C32.9612 63.0464 34.2258 63.0661 34.5515 62.1768L47.5577 26.6679L49.1339 22.3647C49.4452 21.5147 50.6355 21.4827 50.992 22.3147L61.7403 47.3939C61.8978 47.7616 62.2594 48 62.6594 48L70.5 48"
          stroke="#EB5757"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M9.25 47.5658H18.1083C18.4993 47.5658 18.8545 47.3379 19.0174 46.9825L23.191 37.8763C23.5695 37.0507 24.7637 37.1163 25.0494 37.9784L32.9133 61.7132C33.2112 62.6122 34.4758 62.632 34.8015 61.7426L49.3839 21.9305C49.6952 21.0806 50.8855 21.0485 51.242 21.8805L61.9902 46.9597C62.1478 47.3274 62.5094 47.5658 62.9094 47.5658H70.75"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M47.2559 21.6772C48.1898 19.1274 51.7606 19.0314 52.8303 21.5273L63.3188 46.0004H70.5C71.6046 46.0004 72.5 46.8958 72.5 48.0004C72.5 49.105 71.6046 50.0004 70.5 50.0004H62.6594C61.4593 50.0004 60.3747 49.2852 59.902 48.1822L50.1457 25.4176L36.4295 62.8651C35.4523 65.5331 31.6584 65.474 30.7648 62.7768L23.7002 41.4547L20.5855 48.2504C20.0967 49.3167 19.0313 50.0004 17.8583 50.0004H9C7.89543 50.0004 7 49.105 7 48.0004C7 46.8958 7.89543 46.0004 9 46.0004H17.2166L21.1229 37.4776C22.2581 35.0007 25.8409 35.1976 26.6979 37.784L33.6599 58.7965L47.2559 21.6772Z"
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
