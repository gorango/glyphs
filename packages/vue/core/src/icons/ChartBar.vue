
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
          d="M31 66C31 67.1046 30.1046 68 29 68H15C13.8954 68 13 67.1046 13 66V46C13 44.8954 13.8954 44 15 44H29C30.1046 44 31 44.8954 31 46"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M49 66C49 67.1046 48.1046 68 47 68H33C31.8954 68 31 67.1046 31 66V30C31 28.8954 31.8954 28 33 28H47C48.1046 28 49 28.8954 49 30"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M67 14C67 12.8954 66.1046 12 65 12H51C49.8954 12 49 12.8954 49 14V66C49 67.1046 49.8954 68 51 68H65C66.1046 68 67 67.1046 67 66V14Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M72 68H8"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25 44C26.1046 44 27 44.8954 27 46V66C27 67.1046 26.1046 68 25 68H19C17.8954 68 17 67.1046 17 66V46C17 44.8954 17.8954 44 19 44H25Z"
          fill="currentColor"
        />
        <path
          d="M29 66V46H25V66H29ZM19 70H25V66H19V70ZM15 46V66H19V46H15ZM25 42H19V46H25V42ZM19 46H19V42C16.7909 42 15 43.7909 15 46H19ZM19 66H15C15 68.2091 16.7909 70 19 70V66ZM29 46C29 43.7909 27.2091 42 25 42V46V46H29ZM25 66V70C27.2091 70 29 68.2091 29 66H25Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43 28C44.1046 28 45 28.8954 45 30V66C45 67.1046 44.1046 68 43 68H37C35.8954 68 35 67.1046 35 66V30C35 28.8954 35.8954 28 37 28H43Z"
          fill="currentColor"
        />
        <path
          d="M47 66V30H43V66H47ZM37 70H43V66H37V70ZM33 30V66H37V30H33ZM43 26H37V30H43V26ZM37 30H37V26C34.7909 26 33 27.7909 33 30H37ZM37 66H33C33 68.2091 34.7909 70 37 70V66ZM47 30C47 27.7909 45.2091 26 43 26V30V30H47ZM43 66V70C45.2091 70 47 68.2091 47 66H43Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M61 12C62.1046 12 63 12.8954 63 14V66C63 67.1046 62.1046 68 61 68H55C53.8954 68 53 67.1046 53 66V14C53 12.8954 53.8954 12 55 12H61Z"
          fill="currentColor"
        />
        <path
          d="M65 66V14H61V66H65ZM55 70H61V66H55V70ZM51 14V66H55V14H51ZM61 10H55V14H61V10ZM55 14H55V10C52.7909 10 51 11.7909 51 14H55ZM55 66H51C51 68.2091 52.7909 70 55 70V66ZM65 14C65 11.7909 63.2091 10 61 10V14V14H65ZM61 66V70C63.2091 70 65 68.2091 65 66H61Z"
          fill="currentColor"
        />
        <path
          d="M72 68H8"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29 44C30.1046 44 31 44.8954 31 46V66C31 67.1046 30.1046 68 29 68H15C13.8954 68 13 67.1046 13 66V46C13 44.8954 13.8954 44 15 44H29Z"
          fill="#219653"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M47 28C48.1046 28 49 28.8954 49 30V66C49 67.1046 48.1046 68 47 68H33C31.8954 68 31 67.1046 31 66V30C31 28.8954 31.8954 28 33 28H47Z"
          fill="#2F80ED"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M65 12C66.1046 12 67 12.8954 67 14V66C67 67.1046 66.1046 68 65 68H51C49.8954 68 49 67.1046 49 66V14C49 12.8954 49.8954 12 51 12H65Z"
          fill="#F2C94C"
        />
        <path
          d="M72 68H8"
          stroke="#4F4F4F"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M29 44C30.1046 44 31 44.8954 31 46V66C31 67.1046 30.1046 68 29 68H15C13.8954 68 13 67.1046 13 66V46C13 44.8954 13.8954 44 15 44H29Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M47 28C48.1046 28 49 28.8954 49 30V66C49 67.1046 48.1046 68 47 68H33C31.8954 68 31 67.1046 31 66V30C31 28.8954 31.8954 28 33 28H47Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M65 12C66.1046 12 67 12.8954 67 14V66C67 67.1046 66.1046 68 65 68H51C49.8954 68 49 67.1046 49 66V14C49 12.8954 49.8954 12 51 12H65Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M31 66V46C31 44.8954 30.1046 44 29 44H15C13.8954 44 13 44.8954 13 46V66C13 67.1046 13.8954 68 15 68H29C30.1046 68 31 67.1046 31 66ZM31 66V30C31 28.8954 31.8954 28 33 28H47C48.1046 28 49 28.8954 49 30V66M31 66C31 67.1046 31.8954 68 33 68H47C48.1046 68 49 67.1046 49 66M49 66V14C49 12.8954 49.8954 12 51 12H65C66.1046 12 67 12.8954 67 14V66C67 67.1046 66.1046 68 65 68H51C49.8954 68 49 67.1046 49 66ZM72 68H8"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M47 14C47 11.7909 48.7909 10 51 10H65C67.2091 10 69 11.7909 69 14V66H72C73.1046 66 74 66.8954 74 68C74 69.1046 73.1046 70 72 70H8C6.89543 70 6 69.1046 6 68C6 66.8954 6.89543 66 8 66H11V46C11 43.7909 12.7909 42 15 42H29V30C29 27.7909 30.7909 26 33 26H47V14ZM15 66H29V46H15V66ZM33 66H47V30H33V66ZM51 66H65V14L51 14V66Z"
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
