
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
          d="M40 5L7.5 17.5L12.5 60L40 75L67.5 60L72.5 17.5L40 5Z"
          fill="#DD0031"
        />
        <path
          d="M40 5V75L67.5 60L72.5 17.5L40 5Z"
          fill="#C3002F"
        />
        <path
          d="M40.0001 12.7344L19.6832 58.4094H27.2584L31.3427 48.1894H48.5876L52.6719 58.4094H60.2471L40.0001 12.7344ZM45.9346 41.8894H34.0656L40.0001 27.5744L45.9346 41.8894Z"
          fill="white"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M40 27.5744L34.0656 41.8894H45.9345L40 27.5744Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.5 17.5L40 5L72.5 17.5L67.5 60L40 75L12.5 60L7.5 17.5ZM19.6832 58.4094L40 12.7344L60.2471 58.4094H52.6719L48.5876 48.1894H31.3427L27.2584 58.4094H19.6832Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M40 5L7.5 17.5L12.5 60L40 75M40 5L72.5 17.5L67.5 60L40 75M40 5V75M40 12.7344L19.6832 58.4094H27.2584L31.3427 48.1894H48.5876L52.6719 58.4094H60.2471L40 12.7344ZM45.9345 41.8894H34.0656L40 27.5744L45.9345 41.8894Z"
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
