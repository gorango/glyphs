
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
        <g clip-path="url(#clip0c2D9)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path opacity="0.9" d="M120 53.3333H0V80H120V53.3333Z" fill="#333333"/><path d="M45 32L47.0206 38.2188H53.5595L48.2694 42.0623L50.2901 48.2812L45 44.4377L39.7099 48.2812L41.7306 42.0623L36.4405 38.2188H42.9794L45 32Z" fill="#6FCF97"/><path d="M75 32L77.0206 38.2188H83.5595L78.2694 42.0623L80.2901 48.2812L75 44.4377L69.7099 48.2812L71.7306 42.0623L66.4405 38.2188H72.9794L75 32Z" fill="#6FCF97"/></g>
        <defs><clipPath id="clip0c2D9"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0-rZ7)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path opacity="0.9" d="M80 53.3333H0V80H80V53.3333Z" fill="#333333"/><path d="M25 32L27.0206 38.2188H33.5595L28.2694 42.0623L30.2901 48.2812L25 44.4377L19.7099 48.2812L21.7306 42.0623L16.4405 38.2188H22.9794L25 32Z" fill="#6FCF97"/><path d="M55 32L57.0206 38.2188H63.5595L58.2694 42.0623L60.2901 48.2812L55 44.4377L49.7099 48.2812L51.7306 42.0623L46.4405 38.2188H52.9794L55 32Z" fill="#6FCF97"/></g>
        <defs><clipPath id="clip0-rZ7"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0swgb" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0swgb)"><g clip-path="url(#clip0swgb)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path opacity="0.9" d="M80 53.3333H0V80H80V53.3333Z" fill="#333333"/><path d="M25 32L27.0206 38.2188H33.5595L28.2694 42.0623L30.2901 48.2812L25 44.4377L19.7099 48.2812L21.7306 42.0623L16.4405 38.2188H22.9794L25 32Z" fill="#6FCF97"/><path d="M55 32L57.0206 38.2188H63.5595L58.2694 42.0623L60.2901 48.2812L55 44.4377L49.7099 48.2812L51.7306 42.0623L46.4405 38.2188H52.9794L55 32Z" fill="#6FCF97"/></g></g>
        <defs><clipPath id="clip0swgb"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
