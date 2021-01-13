
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
      <template v-if="variant === 'color'">
        <path
          d="M25.4589 33.59H50.245C50.245 24.7903 46.4053 18.7909 35.9359 18.7909C23.5634 18.7908 10.9815 26.8453 5 36.8882C6.85276 19.4567 19.3513 5.3833 38.1681 5.3833C54.2964 5.3833 69.5771 17.7146 69.5771 38.2132V46.0066H25.591C25.591 56.6139 34.8443 60.8167 44.5356 60.8167C56.3293 60.8167 63.633 55.517 63.633 55.517V70.3751C63.633 70.3751 55.3881 75.3833 42.2461 75.3833C25.168 75.3833 13.1129 63.144 13.1129 47.9242C13.1129 35.9779 20.3391 26.4398 30.3482 22.5041C25.4761 27.855 25.4589 33.59 25.4589 33.59H25.4589Z"
          fill="#137AD4"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M25.4589 33.59H50.245C50.245 24.7903 46.4053 18.7909 35.9359 18.7909C23.5634 18.7908 10.9815 26.8453 5 36.8882C6.85276 19.4567 19.3513 5.3833 38.1681 5.3833C54.2964 5.3833 69.5771 17.7146 69.5771 38.2132V46.0066H25.591C25.591 56.6139 34.8443 60.8167 44.5356 60.8167C56.3293 60.8167 63.633 55.517 63.633 55.517V70.3751C63.633 70.3751 55.3881 75.3833 42.2461 75.3833C25.168 75.3833 13.1129 63.144 13.1129 47.9242C13.1129 35.9779 20.3391 26.4398 30.3482 22.5041C25.4761 27.855 25.4589 33.59 25.4589 33.59Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M25.4589 33.59H50.245C50.245 24.7903 46.4053 18.7909 35.9359 18.7909C23.5634 18.7908 10.9815 26.8453 5 36.8882C6.85276 19.4567 19.3513 5.3833 38.1681 5.3833C54.2964 5.3833 69.5771 17.7146 69.5771 38.2132V46.0066H25.591C25.591 56.6139 34.8443 60.8167 44.5356 60.8167C56.3293 60.8167 63.633 55.517 63.633 55.517V70.3751C63.633 70.3751 55.3881 75.3833 42.2461 75.3833C25.168 75.3833 13.1129 63.144 13.1129 47.9242C13.1129 35.9779 20.3391 26.4398 30.3482 22.5041C25.4761 27.855 25.4589 33.59 25.4589 33.59Z"
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
  name: 'node_modules/@glyphs/brands',

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
