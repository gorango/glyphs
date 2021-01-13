
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
      <template v-if="variant === 'rectangle'">
        <path
          d="M120 0H0V79.9983H120V0Z"
          fill="#219653"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M65.5157 24.1774C66.3219 23.3711 67.1856 22.6574 68.0936 22.0361C65.0805 22.9646 62.2435 24.6212 59.8588 27.0058C52.0484 34.8163 52.0484 47.4796 59.8588 55.2901C67.6693 63.1006 80.3326 63.1006 88.1431 55.2901C90.5277 52.9054 92.1843 50.0684 93.1128 47.0553C92.4915 47.9633 91.7778 48.827 90.9715 49.6332C83.9421 56.6627 72.5451 56.6627 65.5157 49.6332C58.4863 42.6038 58.4863 31.2068 65.5157 24.1774ZM84.3046 27.3482L79.1258 24.7094L81.7645 29.8883L77.6546 33.9982L83.3954 33.089L86.0341 38.2678L86.9434 32.527L92.6841 31.6178L87.5053 28.979L88.4146 23.2382L84.3046 27.3482Z"
          fill="#F2F2F2"
        />
        <path
          d="M28 0H0V80H28V0Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip088KC)"><path d="M100 0H-20V79.9983H100V0Z" fill="#219653"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45.5157 24.1774C46.3219 23.3711 47.1856 22.6574 48.0936 22.0361C45.0805 22.9646 42.2435 24.6212 39.8588 27.0058C32.0484 34.8163 32.0484 47.4796 39.8588 55.2901C47.6693 63.1006 60.3326 63.1006 68.1431 55.2901C70.5278 52.9054 72.1843 50.0684 73.1128 47.0553C72.4916 47.9633 71.7778 48.827 70.9715 49.6332C63.9421 56.6627 52.5451 56.6627 45.5157 49.6332C38.4863 42.6038 38.4863 31.2068 45.5157 24.1774ZM64.3046 27.3482L59.1258 24.7094L61.7645 29.8883L57.6546 33.9982L63.3954 33.089L66.0341 38.2678L66.9434 32.527L72.6841 31.6178L67.5053 28.979L68.4146 23.2382L64.3046 27.3482Z" fill="#F2F2F2"/><path d="M18.6667 0H0V80H18.6667V0Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip088KC"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0N-rr" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0N-rr)"><g clip-path="url(#clip0N-rr)"><path d="M100 0H-20V79.9983H100V0Z" fill="#219653"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45.5157 24.1774C46.3219 23.3711 47.1856 22.6574 48.0936 22.0361C45.0805 22.9646 42.2435 24.6212 39.8588 27.0058C32.0484 34.8163 32.0484 47.4796 39.8588 55.2901C47.6693 63.1006 60.3326 63.1006 68.1431 55.2901C70.5278 52.9054 72.1843 50.0684 73.1128 47.0553C72.4916 47.9633 71.7778 48.827 70.9715 49.6332C63.9421 56.6627 52.5451 56.6627 45.5157 49.6332C38.4863 42.6038 38.4863 31.2068 45.5157 24.1774ZM64.3046 27.3482L59.1258 24.7094L61.7645 29.8883L57.6546 33.9982L63.3954 33.089L66.0341 38.2678L66.9434 32.527L72.6841 31.6178L67.5053 28.979L68.4146 23.2382L64.3046 27.3482Z" fill="#F2F2F2"/><path d="M18.6667 0H0V80H18.6667V0Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0N-rr"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
    </g>
  </svg>
</template>

<script>
import Vue from 'vue'
import { transform } from '../utils'

export default {
  name: 'node_modules/@glyphs/flags',

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
