
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
          d="M21.8866 15.2301C21.8866 19.5913 18.1064 23.1268 13.4433 23.1268C8.78019 23.1268 5 19.5913 5 15.2301C5 10.8688 8.78019 7.33337 13.4433 7.33337C18.1064 7.33337 21.8866 10.8688 21.8866 15.2301Z"
          fill="#1275B1"
        />
        <path
          d="M6.15464 28.9312H20.5876V72.6667H6.15464V28.9312Z"
          fill="#1275B1"
        />
        <path
          d="M43.8247 28.9312H29.3918V72.6667H43.8247C43.8247 72.6667 43.8247 58.8981 43.8247 50.2894C43.8247 45.1223 45.5891 39.9325 52.6289 39.9325C60.5847 39.9325 60.5368 46.6945 60.4997 51.9331C60.4512 58.7808 60.567 65.7687 60.567 72.6667H75V49.5841C74.8778 34.8451 71.0372 28.0538 58.4021 28.0538C50.8985 28.0538 46.2473 31.4603 43.8247 34.5423V28.9312Z"
          fill="#1275B1"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M21.8866 15.2301C21.8866 19.5913 18.1064 23.1268 13.4433 23.1268C8.78019 23.1268 5 19.5913 5 15.2301C5 10.8688 8.78019 7.33337 13.4433 7.33337C18.1064 7.33337 21.8866 10.8688 21.8866 15.2301Z"
          fill="currentColor"
        />
        <path
          d="M6.15464 28.9312H20.5876V72.6667H6.15464V28.9312Z"
          fill="currentColor"
        />
        <path
          d="M43.8247 28.9312H29.3918V72.6667H43.8247C43.8247 72.6667 43.8247 58.8981 43.8247 50.2894C43.8247 45.1223 45.5891 39.9325 52.6289 39.9325C60.5847 39.9325 60.5368 46.6945 60.4997 51.9331C60.4512 58.7808 60.567 65.7687 60.567 72.6667H75V49.5841C74.8778 34.8451 71.0372 28.0538 58.4021 28.0538C50.8985 28.0538 46.2473 31.4603 43.8247 34.5423V28.9312Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M21.8866 15.2301C21.8866 19.5913 18.1064 23.1268 13.4433 23.1268C8.78019 23.1268 5 19.5913 5 15.2301C5 10.8688 8.78019 7.33337 13.4433 7.33337C18.1064 7.33337 21.8866 10.8688 21.8866 15.2301Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M6.15464 28.9312H20.5876V72.6667H6.15464V28.9312Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M43.8247 28.9312H29.3918V72.6667H43.8247C43.8247 72.6667 43.8247 58.8981 43.8247 50.2894C43.8247 45.1223 45.5891 39.9325 52.6289 39.9325C60.5847 39.9325 60.5368 46.6945 60.4997 51.9331C60.4512 58.7808 60.567 65.7687 60.567 72.6667H75V49.5841C74.8778 34.8451 71.0372 28.0538 58.4021 28.0538C50.8985 28.0538 46.2473 31.4603 43.8247 34.5423V28.9312Z"
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
