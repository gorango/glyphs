
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
          d="M20 55L20 16"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M25.818 55H14.182C13.0078 55 12.4197 56.4197 13.25 57.25L18.5858 62.5858C19.3668 63.3668 20.6332 63.3668 21.4142 62.5858L26.75 57.25C27.5803 56.4197 26.9923 55 25.818 55Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 22H45"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 34H53"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 46L61 46"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 58L69 58"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M23 55C23 56.6569 21.6569 58 20 58C18.3431 58 17 56.6569 17 55L23 55ZM17 16C17 14.3431 18.3431 13 20 13C21.6569 13 23 14.3431 23 16H17ZM17 55L17 16H23L23 55L17 55Z"
          fill="currentColor"
        />
        <path
          d="M25.818 55L14.182 55C13.0078 55 12.4197 56.4197 13.25 57.25L18.5858 62.5858C19.3668 63.3668 20.6332 63.3668 21.4142 62.5858L26.75 57.25C27.5803 56.4197 26.9923 55 25.818 55Z"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 22H45"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <path
          d="M37 34H53"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <path
          d="M37 46L61 46"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <path
          d="M37 58L69 58"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M22 55C22 56.1046 21.1046 57 20 57C18.8954 57 18 56.1046 18 55L22 55ZM18 16C18 14.8954 18.8954 14 20 14C21.1046 14 22 14.8954 22 16H18ZM18 55L18 16H22L22 55L18 55Z"
          fill="#6FCF97"
        />
        <path
          d="M25.818 55L14.182 55C13.0078 55 12.4197 56.4197 13.25 57.25L18.5858 62.5858C19.3668 63.3668 20.6332 63.3668 21.4142 62.5858L26.75 57.25C27.5803 56.4197 26.9923 55 25.818 55Z"
          fill="#219653"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37 22H45"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <path
          d="M37 34H53"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <path
          d="M37 46L61 46"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <path
          d="M37 58L69 58"
          stroke="#219653"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M25.818 55H14.182C13.0078 55 12.4197 56.4197 13.25 57.25L18.5858 62.5858C19.3668 63.3668 20.6332 63.3668 21.4142 62.5858L26.75 57.25C27.5803 56.4197 26.9923 55 25.818 55Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M20 55L20 16M37 22H45M37 34H53M37 46H61M37 58H69M14.182 55H25.818C26.9923 55 27.5803 56.4197 26.75 57.25L21.4142 62.5858C20.6332 63.3668 19.3668 63.3668 18.5858 62.5858L13.25 57.25C12.4197 56.4197 13.0078 55 14.182 55Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0001 53H14.1821C11.2261 53 9.74566 56.574 11.8359 58.6642L17.1717 64C18.7338 65.5621 21.2664 65.5621 22.8285 64L28.1643 58.6642C30.2546 56.574 28.7742 53 25.8181 53H22.0001L22.0001 16C22.0001 14.8954 21.1047 14 20.0001 14C18.8955 14 18.0001 14.8954 18.0001 16L18.0001 53ZM15.8285 57L20.0001 61.1716L24.1717 57H15.8285Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M35.0001 22C35.0001 20.8954 35.8955 20 37.0001 20H45.0001C46.1047 20 47.0001 20.8954 47.0001 22C47.0001 23.1046 46.1047 24 45.0001 24H37.0001C35.8955 24 35.0001 23.1046 35.0001 22Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37.0001 32C35.8955 32 35.0001 32.8954 35.0001 34C35.0001 35.1046 35.8955 36 37.0001 36H53.0001C54.1047 36 55.0001 35.1046 55.0001 34C55.0001 32.8954 54.1047 32 53.0001 32H37.0001Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M35.0001 46C35.0001 44.8954 35.8955 44 37.0001 44H61.0001C62.1047 44 63.0001 44.8954 63.0001 46C63.0001 47.1046 62.1047 48 61.0001 48H37.0001C35.8955 48 35.0001 47.1046 35.0001 46Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M37.0001 56C35.8955 56 35.0001 56.8954 35.0001 58C35.0001 59.1046 35.8955 60 37.0001 60H69.0001C70.1047 60 71.0001 59.1046 71.0001 58C71.0001 56.8954 70.1047 56 69.0001 56H37.0001Z"
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
