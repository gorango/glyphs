
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
          d="M120 0H0V80H120V0Z"
          fill="#F2C94C"
        />
        <path
          d="M120 80H0L120 0V80Z"
          fill="#F2994A"
        />
        <path
          d="M36 52.2255H42.9972C47.6537 52.2255 51.4286 48.4506 51.4286 43.7941V43.7941C51.4286 39.1376 55.2034 35.3627 59.8599 35.3627H60.1401C64.7966 35.3627 68.5714 31.5879 68.5714 26.9314V26.9314C68.5714 22.2749 72.3463 18.5 77.0028 18.5H84"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M51.4287 51.3824H56.5716M51.4287 51.3824V61.5H60.0001M51.4287 51.3824V42.951"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M68.5713 34.5196H73.7141M68.5713 34.5196V44.6373H77.1427M68.5713 34.5196V26.0882"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'square'">
        <path
          d="M80 0H0V80H80V0Z"
          fill="#F2C94C"
        />
        <path
          d="M80 80H0L80 0V80Z"
          fill="#F2994A"
        />
        <path
          d="M16 52.2255H22.9972C27.6537 52.2255 31.4286 48.4506 31.4286 43.7941V43.7941C31.4286 39.1376 35.2034 35.3627 39.8599 35.3627H40.1401C44.7966 35.3627 48.5714 31.5879 48.5714 26.9314V26.9314C48.5714 22.2749 52.3463 18.5 57.0028 18.5H64"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M31.4287 51.3823H36.5716M31.4287 51.3823V61.5H40.0001M31.4287 51.3823V42.951"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M48.5713 34.5196H53.7141M48.5713 34.5196V44.6373H57.1427M48.5713 34.5196V26.0882"
          stroke="#F2F2F2"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0fKtT" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0fKtT)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 80H0L80 0V80Z" fill="#F2994A"/><path d="M16 52.2255H22.9972C27.6537 52.2255 31.4286 48.4506 31.4286 43.7941V43.7941C31.4286 39.1376 35.2034 35.3627 39.8599 35.3627H40.1401C44.7966 35.3627 48.5714 31.5879 48.5714 26.9314V26.9314C48.5714 22.2749 52.3463 18.5 57.0028 18.5H64" stroke="#F2F2F2" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.4287 51.3824H36.5716M31.4287 51.3824V61.5H40.0001M31.4287 51.3824V42.951" stroke="#F2F2F2" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M48.5713 34.5196H53.7141M48.5713 34.5196V44.6372H57.1427M48.5713 34.5196V26.0882" stroke="#F2F2F2" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></g>
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
