
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
        <circle
          cx="40"
          cy="40"
          r="35"
          fill="#0B0006"
        />
        <path
          d="M10 30H11.5884L17.7832 51.875H16.1948L10 30Z"
          fill="#FFFDFE"
        />
        <path
          d="M14.2886 30H15.877L22.0718 51.875H20.4834L14.2886 30Z"
          fill="#FFFDFE"
        />
        <path
          d="M23.3423 30H18.5771L24.7719 51.875H29.5371L33.7702 37.6562L38.2733 51.875H42.8002L48.7567 30H44.071L40.3652 43.9844L36.0495 30H31.5226L27.2339 43.742L23.3423 30Z"
          fill="#FEDB32"
        />
        <path
          d="M48.7567 40.1562L51.457 30H53.5219V43.9062C53.5219 45.9773 55.2287 47.6562 57.3341 47.6562H58.9225C61.0279 47.6562 62.7347 45.9773 62.7347 43.9062V30H67.4999V43.9062C67.4999 48.6524 63.5885 52.5 58.7637 52.5H57.493C52.6681 52.5 48.7567 48.6524 48.7567 43.9062V40.1562Z"
          fill="#FEDB32"
        />
      </template>
      <template v-if="variant === 'solid'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40ZM10 30H11.5884L17.7832 51.875H16.1948L10 30ZM14.2886 30H15.877L22.0718 51.875H20.4834L14.2886 30ZM18.5773 30H23.3425L27.2341 43.742L31.5227 30H36.0497L40.3653 43.9844L44.0711 30H48.7569L42.8004 51.875H38.2734L33.7703 37.6562L29.5372 51.875H24.772L18.5773 30ZM51.4571 30L48.7569 40.1562V43.9062C48.7569 48.6524 52.6682 52.5 57.4931 52.5H58.7638C63.5887 52.5 67.5 48.6524 67.5 43.9062V30H62.7348V43.9062C62.7348 45.9773 61.028 47.6562 58.9226 47.6562H57.3342C55.2288 47.6562 53.5221 45.9773 53.5221 43.9062V30H51.4571Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'path'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40ZM10 30H11.5884L17.7832 51.875H16.1948L10 30ZM14.2886 30H15.877L22.0718 51.875H20.4834L14.2886 30ZM18.5773 30H23.3425L27.2341 43.742L31.5227 30H36.0497L40.3653 43.9844L44.0711 30H48.7569L42.8004 51.875H38.2734L33.7703 37.6562L29.5372 51.875H24.772L18.5773 30ZM51.4571 30L48.7569 40.1562V43.9062C48.7569 48.6524 52.6682 52.5 57.4931 52.5H58.7638C63.5887 52.5 67.5 48.6524 67.5 43.9062V30H62.7348V43.9062C62.7348 45.9773 61.028 47.6562 58.9226 47.6562H57.3342C55.2288 47.6562 53.5221 45.9773 53.5221 43.9062V30H51.4571Z"
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
