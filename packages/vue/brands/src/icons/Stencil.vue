
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
          d="M31.6388 49.9614H56.1916L42.9194 64.5014H18.4988L31.6388 49.9614Z"
          fill="black"
        />
        <path
          d="M71.853 32.731H21.4121L8.14697 47.2707H58.588L71.853 32.731Z"
          fill="black"
        />
        <path
          d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
          fill="black"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M31.6388 49.9616H56.1916L42.9194 64.5015H18.4988L31.6388 49.9616Z"
          fill="currentColor"
        />
        <path
          d="M71.853 32.731H21.4121L8.14697 47.2708H58.588L71.853 32.731Z"
          fill="currentColor"
        />
        <path
          d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M31.6388 49.9616H56.1916L42.9194 64.5015H18.4988L31.6388 49.9616Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M71.853 32.731H21.4121L8.14697 47.2708H58.588L71.853 32.731Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z"
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
