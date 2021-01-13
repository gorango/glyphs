
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
          d="M12 16C12 13.7909 13.7909 12 16 12H32C34.2091 12 36 13.7909 36 16V32C36 34.2091 34.2091 36 32 36H16C13.7909 36 12 34.2091 12 32V16Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M44 16C44 13.7909 45.7909 12 48 12H64C66.2091 12 68 13.7909 68 16V32C68 34.2091 66.2091 36 64 36H48C45.7909 36 44 34.2091 44 32V16Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M12 48C12 45.7909 13.7909 44 16 44H32C34.2091 44 36 45.7909 36 48V64C36 66.2091 34.2091 68 32 68H16C13.7909 68 12 66.2091 12 64V48Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M67.8711 56H43.8711"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M55.8711 68L55.8711 44"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <rect
          x="12"
          y="12"
          width="24"
          height="24"
          rx="4"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <rect
          x="44"
          y="12"
          width="24"
          height="24"
          rx="4"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <rect
          x="12"
          y="44"
          width="24"
          height="24"
          rx="4"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <path
          d="M43.8711 56L54.7802 56L56.962 56L67.8711 56"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M55.8711 44L55.8711 54.9091L55.8711 57.0909L55.8711 68"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <rect
          x="12"
          y="12"
          width="24"
          height="24"
          rx="4"
          fill="#9B51E0"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <rect
          x="44"
          y="12"
          width="24"
          height="24"
          rx="4"
          fill="#56CCF2"
          stroke="#56CCF2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <rect
          x="12"
          y="44"
          width="24"
          height="24"
          rx="4"
          fill="#56CCF2"
          stroke="#56CCF2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
        />
        <path
          d="M43.8711 56L54.7802 56L56.962 56L67.8711 56"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M55.8711 44L55.8711 54.9091L55.8711 57.0909L55.8711 68"
          stroke="#9B51E0"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M12 16C12 13.7909 13.7909 12 16 12H32C34.2091 12 36 13.7909 36 16V32C36 34.2091 34.2091 36 32 36H16C13.7909 36 12 34.2091 12 32V16Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M44 16C44 13.7909 45.7909 12 48 12H64C66.2091 12 68 13.7909 68 16V32C68 34.2091 66.2091 36 64 36H48C45.7909 36 44 34.2091 44 32V16Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M12 48C12 45.7909 13.7909 44 16 44H32C34.2091 44 36 45.7909 36 48V64C36 66.2091 34.2091 68 32 68H16C13.7909 68 12 66.2091 12 64V48Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M67.8711 56H43.8711M55.8711 68V44M16 36H32C34.2091 36 36 34.2091 36 32V16C36 13.7909 34.2091 12 32 12H16C13.7909 12 12 13.7909 12 16V32C12 34.2091 13.7909 36 16 36ZM48 36H64C66.2091 36 68 34.2091 68 32V16C68 13.7909 66.2091 12 64 12H48C45.7909 12 44 13.7909 44 16V32C44 34.2091 45.7909 36 48 36ZM16 68H32C34.2091 68 36 66.2091 36 64V48C36 45.7909 34.2091 44 32 44H16C13.7909 44 12 45.7909 12 48V64C12 66.2091 13.7909 68 16 68Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 16C10 12.6863 12.6863 10 16 10H32C35.3137 10 38 12.6863 38 16V32C38 35.3137 35.3137 38 32 38H16C12.6863 38 10 35.3137 10 32V16ZM16 14C14.8954 14 14 14.8954 14 16V32C14 33.1046 14.8954 34 16 34H32C33.1046 34 34 33.1046 34 32V16C34 14.8954 33.1046 14 32 14H16Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42 16C42 12.6863 44.6863 10 48 10H64C67.3137 10 70 12.6863 70 16V32C70 35.3137 67.3137 38 64 38H48C44.6863 38 42 35.3137 42 32V16ZM48 14C46.8954 14 46 14.8954 46 16V32C46 33.1046 46.8954 34 48 34H64C65.1046 34 66 33.1046 66 32V16C66 14.8954 65.1046 14 64 14H48Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 42C12.6863 42 10 44.6863 10 48V64C10 67.3137 12.6863 70 16 70H32C35.3137 70 38 67.3137 38 64V48C38 44.6863 35.3137 42 32 42H16ZM14 48C14 46.8954 14.8954 46 16 46H32C33.1046 46 34 46.8954 34 48V64C34 65.1046 33.1046 66 32 66H16C14.8954 66 14 65.1046 14 64V48Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M41.8711 56C41.8711 54.8954 42.7665 54 43.8711 54H53.8711V44C53.8711 42.8954 54.7665 42 55.8711 42C56.9757 42 57.8711 42.8954 57.8711 44V54H67.8711C68.9757 54 69.8711 54.8954 69.8711 56C69.8711 57.1046 68.9757 58 67.8711 58H57.8711V68C57.8711 69.1046 56.9757 70 55.8711 70C54.7665 70 53.8711 69.1046 53.8711 68V58H43.8711C42.7665 58 41.8711 57.1046 41.8711 56Z"
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
