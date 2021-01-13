
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
          d="M7 34H19V46H7V34Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M19 34L34 19"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 7H46V19H34V7Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M46 19L61 34"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M61 34H73V46H61V34Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M61 46L46 61"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 61H46V73H34V61Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 61L19 46"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          d="M19 34L16.8787 31.8787L16 32.7574V34H19ZM19 46H16V47.2426L16.8787 48.1213L19 46ZM34 19V16H32.7574L31.8787 16.8787L34 19ZM46 19L48.1213 16.8787L47.2426 16H46V19ZM61 34H64V32.7574L63.1213 31.8787L61 34ZM61 46L63.1213 48.1213L64 47.2426V46H61ZM46 61V64H47.2426L48.1213 63.1213L46 61ZM34 61L31.8787 63.1213L32.7574 64H34V61ZM16 34L16 46H22V34H16ZM31.8787 16.8787L16.8787 31.8787L21.1213 36.1213L36.1213 21.1213L31.8787 16.8787ZM46 16H34V22H46V16ZM63.1213 31.8787L48.1213 16.8787L43.8787 21.1213L58.8787 36.1213L63.1213 31.8787ZM64 46L64 34H58L58 46H64ZM48.1213 63.1213L63.1213 48.1213L58.8787 43.8787L43.8787 58.8787L48.1213 63.1213ZM34 64H46V58L34 58V64ZM16.8787 48.1213L31.8787 63.1213L36.1213 58.8787L21.1213 43.8787L16.8787 48.1213Z"
          fill="currentColor"
        />
        <rect
          x="34"
          y="7"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="34"
          y="61"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="7"
          y="34"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="61"
          y="34"
          width="12"
          height="12"
          fill="currentColor"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          d="M19 34L17.5858 32.5858L17 33.1716V34H19ZM19 46H17V46.8284L17.5858 47.4142L19 46ZM34 19V17H33.1716L32.5858 17.5858L34 19ZM46 19L47.4142 17.5858L46.8284 17H46V19ZM61 34H63V33.1716L62.4142 32.5858L61 34ZM61 46L62.4142 47.4142L63 46.8284V46H61ZM46 61V63H46.8284L47.4142 62.4142L46 61ZM34 61L32.5858 62.4142L33.1716 63H34V61ZM17 34V46H21V34H17ZM32.5858 17.5858L17.5858 32.5858L20.4142 35.4142L35.4142 20.4142L32.5858 17.5858ZM46 17H34V21H46V17ZM62.4142 32.5858L47.4142 17.5858L44.5858 20.4142L59.5858 35.4142L62.4142 32.5858ZM63 46L63 34H59L59 46H63ZM47.4142 62.4142L62.4142 47.4142L59.5858 44.5858L44.5858 59.5858L47.4142 62.4142ZM34 63L46 63V59L34 59V63ZM17.5858 47.4142L32.5858 62.4142L35.4142 59.5858L20.4142 44.5858L17.5858 47.4142Z"
          fill="#6FCF97"
        />
        <rect
          x="34"
          y="7"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="34"
          y="61"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="7"
          y="34"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <rect
          x="61"
          y="34"
          width="12"
          height="12"
          fill="#F2994A"
          stroke="#F2994A"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M19 46V34L34 19H46L61 34V46L46 61H34L19 46Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M34 7H46V19H34V7Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M34 61H46V73H34V61Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M7 34H19V46H7V34Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M61 34H73V46H61V34Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M19 34V46M19 34L34 19M19 34H7V46H19M19 46L34 61M34 19H46M34 19V7H46V19M46 19L61 34M61 34V46M61 34H73V46H61M61 46L46 61M46 61H34M46 61V73H34V61"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32 7C32 5.89543 32.8954 5 34 5H46C47.1046 5 48 5.89543 48 7V18.1716L61.8284 32H73C74.1046 32 75 32.8954 75 34V46C75 47.1046 74.1046 48 73 48H61.8284L48 61.8284V73C48 74.1046 47.1046 75 46 75H34C32.8954 75 32 74.1046 32 73V61.8284L18.1716 48H7C5.89543 48 5 47.1046 5 46V34C5 32.8954 5.89543 32 7 32H18.1716L32 18.1716V7ZM59 45.1716V34.8284L45.1716 21H34.8284L21 34.8284V45.1716L34.8284 59H45.1716L59 45.1716ZM63 44H71V36H63V44ZM17 36V44H9V36H17ZM36 63V71H44V63H36ZM44 9V17H36V9H44Z"
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
