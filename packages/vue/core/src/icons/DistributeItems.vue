
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
          d="M12 68L12 12"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M21 36.6667C21 34.4575 22.7909 32.6667 25 32.6667H54.3333C56.5425 32.6667 58.3333 34.4575 58.3333 36.6667V42.6667C58.3333 44.8758 56.5425 46.6667 54.3333 46.6667H25C22.7909 46.6667 21 44.8758 21 42.6667V36.6667Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M68 68L68 12"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M21 36.6667C21 34.4575 22.7909 32.6667 25 32.6667L54.3333 32.6667C56.5425 32.6667 58.3333 34.4575 58.3333 36.6667V42.6667C58.3333 44.8758 56.5425 46.6667 54.3333 46.6667L25 46.6667C22.7909 46.6667 21 44.8758 21 42.6667V36.6667Z"
          fill="currentColor"
        />
        <path
          d="M12 68L12 12"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M68 68L68 12"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M21 36.6667C21 34.4575 22.7909 32.6667 25 32.6667L54.3333 32.6667C56.5425 32.6667 58.3333 34.4575 58.3333 36.6667V42.6667C58.3333 44.8758 56.5425 46.6667 54.3333 46.6667L25 46.6667C22.7909 46.6667 21 44.8758 21 42.6667V36.6667Z"
          fill="#219653"
        />
        <path
          d="M12 68L12 12"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M68 68L68 12"
          stroke="#F2C94C"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M20.9998 36.6667C20.9998 34.4575 22.7907 32.6667 24.9998 32.6667H54.3332C56.5423 32.6667 58.3332 34.4575 58.3332 36.6667V42.6667C58.3332 44.8758 56.5423 46.6667 54.3332 46.6667H24.9998C22.7907 46.6667 20.9998 44.8758 20.9998 42.6667V36.6667Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M12 68L12 12M67.9998 68V12M24.9998 46.6667H54.3332C56.5423 46.6667 58.3332 44.8758 58.3332 42.6667V36.6667C58.3332 34.4575 56.5423 32.6667 54.3332 32.6667H24.9998C22.7907 32.6667 20.9998 34.4575 20.9998 36.6667V42.6667C20.9998 44.8758 22.7907 46.6667 24.9998 46.6667Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M12 70C10.8954 70 10 69.1046 10 68L10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12L14 68C14 69.1046 13.1046 70 12 70Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9998 36.6667C18.9998 33.353 21.6861 30.6667 24.9998 30.6667H54.3332C57.6469 30.6667 60.3332 33.353 60.3332 36.6667V42.6667C60.3332 45.9804 57.6469 48.6667 54.3332 48.6667H24.9998C21.6861 48.6667 18.9998 45.9804 18.9998 42.6667V36.6667ZM24.9998 34.6667C23.8953 34.6667 22.9998 35.5621 22.9998 36.6667V42.6667C22.9998 43.7712 23.8953 44.6667 24.9998 44.6667H54.3332C55.4377 44.6667 56.3332 43.7712 56.3332 42.6667V36.6667C56.3332 35.5621 55.4377 34.6667 54.3332 34.6667H24.9998Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M65.9998 68C65.9998 69.1046 66.8953 70 67.9998 70C69.1044 70 69.9998 69.1046 69.9998 68V12C69.9998 10.8954 69.1044 10 67.9998 10C66.8953 10 65.9998 10.8954 65.9998 12V68Z"
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
