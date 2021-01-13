
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
          d="M20 66C20 67.1046 19.1046 68 18 68H14C12.8954 68 12 67.1046 12 66V50C12 48.8954 12.8954 48 14 48H18C19.1046 48 20 48.8954 20 50V66Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M36 66C36 67.1046 35.1046 68 34 68H30C28.8954 68 28 67.1046 28 66L28 38C28 36.8954 28.8954 36 30 36H34C35.1046 36 36 36.8954 36 38L36 66Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.5 63.5V65.5C35.5 66.6046 34.6046 67.5 33.5 67.5H29.5C28.3954 67.5 27.5 66.6046 27.5 65.5V63.5L27.5 39.5V37.5C27.5 36.3954 28.3954 35.5 29.5 35.5H33.5C34.6046 35.5 35.5 36.3954 35.5 37.5V39.5L35.5 63.5ZM19.5 63.5V65.5C19.5 66.6046 18.6046 67.5 17.5 67.5H13.5C12.3954 67.5 11.5 66.6046 11.5 65.5V63.5L11.5 51.5V49.5C11.5 48.3954 12.3954 47.5 13.5 47.5H17.5C18.6046 47.5 19.5 48.3954 19.5 49.5V51.5V63.5Z"
          fill="currentColor"
        />
        <path
          d="M35.5 63.5H37.5H35.5ZM27.5 63.5H29.5H27.5ZM27.5 39.5H25.5H27.5ZM35.5 39.5H33.5H35.5ZM19.5 63.5H17.5H19.5ZM37.5 65.5V63.5H33.5V65.5H37.5ZM29.5 69.5H33.5L33.5 65.5H29.5L29.5 69.5ZM25.5 63.5V65.5H29.5V63.5H25.5ZM25.5 39.5L25.5 63.5H29.5L29.5 39.5H25.5ZM25.5 37.5V39.5H29.5V37.5H25.5ZM33.5 33.5H29.5V37.5H33.5V33.5ZM37.5 39.5V37.5L33.5 37.5V39.5L37.5 39.5ZM37.5 63.5L37.5 39.5L33.5 39.5L33.5 63.5H37.5ZM21.5 65.5V63.5H17.5L17.5 65.5H21.5ZM13.5 69.5H17.5L17.5 65.5H13.5V69.5ZM9.5 63.5L9.5 65.5H13.5L13.5 63.5H9.5ZM9.5 51.5V63.5H13.5V51.5H9.5ZM9.5 49.5L9.5 51.5H13.5L13.5 49.5H9.5ZM17.5 45.5H13.5V49.5H17.5L17.5 45.5ZM21.5 51.5V49.5H17.5V51.5H21.5ZM21.5 63.5L21.5 51.5H17.5V63.5H21.5ZM17.5 49.5H21.5C21.5 47.2909 19.7091 45.5 17.5 45.5L17.5 49.5ZM13.5 65.5H9.5C9.5 67.7091 11.2909 69.5 13.5 69.5V65.5ZM17.5 65.5H17.5L17.5 69.5C19.7091 69.5 21.5 67.7091 21.5 65.5H17.5ZM33.5 37.5L37.5 37.5C37.5 35.2909 35.7091 33.5 33.5 33.5V37.5ZM13.5 49.5V45.5C11.2909 45.5 9.5 47.2909 9.5 49.5H13.5ZM29.5 65.5H25.5C25.5 67.7091 27.2909 69.5 29.5 69.5L29.5 65.5ZM29.5 37.5H29.5V33.5C27.2909 33.5 25.5 35.2909 25.5 37.5H29.5ZM33.5 65.5L33.5 69.5C35.7091 69.5 37.5 67.7091 37.5 65.5H33.5Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.5 63.5V65.5C35.5 66.6046 34.6046 67.5 33.5 67.5H29.5C28.3954 67.5 27.5 66.6046 27.5 65.5V63.5L27.5 39.5V37.5C27.5 36.3954 28.3954 35.5 29.5 35.5H33.5C34.6046 35.5 35.5 36.3954 35.5 37.5V39.5L35.5 63.5ZM19.5 63.5V65.5C19.5 66.6046 18.6046 67.5 17.5 67.5H13.5C12.3954 67.5 11.5 66.6046 11.5 65.5V63.5L11.5 51.5V49.5C11.5 48.3954 12.3954 47.5 13.5 47.5H17.5C18.6046 47.5 19.5 48.3954 19.5 49.5V51.5V63.5Z"
          fill="#BB6BD9"
        />
        <path
          d="M35.5 63.5H37.5H35.5ZM27.5 63.5H29.5H27.5ZM27.5 39.5H25.5H27.5ZM35.5 39.5L33.5 39.5V39.5L35.5 39.5ZM19.5 63.5H17.5H19.5ZM37.5 65.5V63.5H33.5V65.5H37.5ZM29.5 69.5H33.5L33.5 65.5H29.5L29.5 69.5ZM25.5 63.5V65.5H29.5V63.5H25.5ZM25.5 39.5L25.5 63.5H29.5L29.5 39.5H25.5ZM25.5 37.5V39.5H29.5V37.5H25.5ZM33.5 33.5H29.5V37.5H33.5V33.5ZM37.5 39.5V37.5L33.5 37.5V39.5L37.5 39.5ZM37.5 63.5L37.5 39.5L33.5 39.5L33.5 63.5H37.5ZM21.5 65.5V63.5H17.5L17.5 65.5H21.5ZM13.5 69.5H17.5L17.5 65.5H13.5V69.5ZM9.5 63.5L9.5 65.5H13.5L13.5 63.5H9.5ZM9.5 51.5V63.5H13.5V51.5H9.5ZM9.5 49.5L9.5 51.5H13.5L13.5 49.5H9.5ZM17.5 45.5H13.5V49.5H17.5L17.5 45.5ZM21.5 51.5V49.5H17.5V51.5H21.5ZM21.5 63.5L21.5 51.5H17.5V63.5H21.5ZM17.5 49.5H21.5C21.5 47.2909 19.7091 45.5 17.5 45.5L17.5 49.5ZM13.5 65.5H9.5C9.5 67.7091 11.2909 69.5 13.5 69.5V65.5ZM17.5 65.5H17.5L17.5 69.5C19.7091 69.5 21.5 67.7091 21.5 65.5H17.5ZM33.5 37.5L37.5 37.5C37.5 35.2909 35.7091 33.5 33.5 33.5V37.5ZM13.5 49.5V45.5C11.2909 45.5 9.5 47.2909 9.5 49.5H13.5ZM29.5 65.5H25.5C25.5 67.7091 27.2909 69.5 29.5 69.5L29.5 65.5ZM29.5 37.5H29.5V33.5C27.2909 33.5 25.5 35.2909 25.5 37.5H29.5ZM33.5 65.5L33.5 69.5C35.7091 69.5 37.5 67.7091 37.5 65.5H33.5Z"
          fill="#9B51E0"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M36 66C36 67.1046 35.1046 68 34 68H30C28.8954 68 28 67.1046 28 66L28 38C28 36.8954 28.8954 36 30 36H34C35.1046 36 36 36.8954 36 38L36 66Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M20 66C20 67.1046 19.1046 68 18 68H14C12.8954 68 12 67.1046 12 66V50C12 48.8954 12.8954 48 14 48H18C19.1046 48 20 48.8954 20 50V66Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M36 66C36 67.1046 35.1046 68 34 68H30C28.8954 68 28 67.1046 28 66L28 38C28 36.8954 28.8954 36 30 36H34C35.1046 36 36 36.8954 36 38L36 66Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M20 66C20 67.1046 19.1046 68 18 68H14C12.8954 68 12 67.1046 12 66V50C12 48.8954 12.8954 48 14 48H18C19.1046 48 20 48.8954 20 50V66Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.5 37.5C25.5 35.2909 27.2909 33.5 29.5 33.5H33.5C35.7091 33.5 37.5 35.2909 37.5 37.5L37.5 65.5C37.5 67.7091 35.7091 69.5 33.5 69.5H29.5C27.2909 69.5 25.5 67.7091 25.5 65.5L25.5 37.5ZM33.5 37.5H29.5V65.5H33.5L33.5 37.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.5 49.5C9.5 47.2909 11.2909 45.5 13.5 45.5H17.5C19.7091 45.5 21.5 47.2909 21.5 49.5V65.5C21.5 67.7091 19.7091 69.5 17.5 69.5H13.5C11.2909 69.5 9.5 67.7091 9.5 65.5V49.5ZM17.5 49.5H13.5V65.5H17.5V49.5Z"
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
