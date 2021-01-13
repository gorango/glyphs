
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
          d="M48.4985 55.0293H31.188V24.4019H48.4985V55.0293Z"
          fill="#FF5F00"
        />
        <path
          d="M32.296 39.7114C32.296 33.4984 35.2506 27.9641 39.852 24.3976C36.4872 21.7895 32.2406 20.2329 27.6254 20.2329C16.6996 20.2329 7.84277 28.9536 7.84277 39.7114C7.84277 50.469 16.6996 59.1898 27.6254 59.1898C32.2406 59.1898 36.4872 57.6332 39.852 55.025C35.2506 51.4585 32.296 45.9244 32.296 39.7114Z"
          fill="#EB001B"
        />
        <path
          d="M71.8429 39.7114C71.8429 50.469 62.986 59.1898 52.06 59.1898C47.445 59.1898 43.1984 57.6332 39.8323 55.025C44.4348 51.4585 47.3896 45.9244 47.3896 39.7114C47.3896 33.4984 44.4348 27.9641 39.8323 24.3976C43.1984 21.7895 47.445 20.2329 52.06 20.2329C62.986 20.2329 71.8429 28.9536 71.8429 39.7114Z"
          fill="#F79E1B"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          d="M32.296 39.7114C32.296 33.4984 35.2506 27.9641 39.852 24.3976C36.4872 21.7895 32.2406 20.2329 27.6254 20.2329C16.6996 20.2329 7.84277 28.9536 7.84277 39.7114C7.84277 50.469 16.6996 59.1898 27.6254 59.1898C32.2406 59.1898 36.4872 57.6332 39.852 55.025C35.2506 51.4585 32.296 45.9244 32.296 39.7114Z"
          fill="currentColor"
        />
        <path
          d="M71.8428 39.7114C71.8428 50.469 62.9859 59.1898 52.0599 59.1898C47.4449 59.1898 43.1984 57.6332 39.8322 55.025C44.4347 51.4585 47.3896 45.9244 47.3896 39.7114C47.3896 33.4984 44.4347 27.9641 39.8322 24.3976C43.1984 21.7895 47.4449 20.2329 52.0599 20.2329C62.9859 20.2329 71.8428 28.9536 71.8428 39.7114Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          d="M32.296 39.7114C32.296 33.4984 35.2506 27.9641 39.852 24.3976C36.4872 21.7895 32.2406 20.2329 27.6254 20.2329C16.6996 20.2329 7.84277 28.9536 7.84277 39.7114C7.84277 50.469 16.6996 59.1898 27.6254 59.1898C32.2406 59.1898 36.4872 57.6332 39.852 55.025C35.2506 51.4585 32.296 45.9244 32.296 39.7114Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M71.8428 39.7114C71.8428 50.469 62.9859 59.1898 52.0599 59.1898C47.4449 59.1898 43.1984 57.6332 39.8322 55.025C44.4347 51.4585 47.3896 45.9244 47.3896 39.7114C47.3896 33.4984 44.4347 27.9641 39.8322 24.3976C43.1984 21.7895 47.4449 20.2329 52.0599 20.2329C62.9859 20.2329 71.8428 28.9536 71.8428 39.7114Z"
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
