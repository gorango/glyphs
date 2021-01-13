
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
        <g clip-path="url(#clip0Y3HA)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M0 40H120" stroke="#F2C94C" stroke-width="36"/><path d="M36 40L0 0V80L36 40Z" fill="#EB5757"/><path d="M67.313 30L69.5466 36.9257L76.8236 36.9098L70.927 41.1743L73.1908 48.0902L67.313 43.8L61.4351 48.0902L63.699 41.1743L57.8024 36.9098L65.0794 36.9257L67.313 30Z" fill="#333333"/><path d="M95.3804 30L97.614 36.9257L104.891 36.9098L98.9944 41.1743L101.258 48.0902L95.3804 43.8L89.5025 48.0902L91.7664 41.1743L85.8698 36.9098L93.1468 36.9257L95.3804 30Z" fill="#333333"/></g>
        <defs><clipPath id="clip0Y3HA"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0gPBt)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M0 40H120" stroke="#F2C94C" stroke-width="36"/><path d="M36 40L0 0V80L36 40Z" fill="#EB5757"/><path d="M47.313 30L49.5466 36.9257L56.8236 36.9098L50.927 41.1743L53.1908 48.0902L47.313 43.8L41.4351 48.0902L43.699 41.1743L37.8024 36.9098L45.0794 36.9257L47.313 30Z" fill="#333333"/><path d="M75.3804 30L77.614 36.9257L84.8909 36.9098L78.9944 41.1743L81.2582 48.0902L75.3804 43.8L69.5025 48.0902L71.7664 41.1743L65.8698 36.9098L73.1468 36.9257L75.3804 30Z" fill="#333333"/></g>
        <defs><clipPath id="clip0gPBt"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0EFa8" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0EFa8)"><g clip-path="url(#clip0EFa8)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M0 40H120" stroke="#F2C94C" stroke-width="36"/><path d="M36 40L0 0V80L36 40Z" fill="#EB5757"/><path d="M47.313 30L49.5466 36.9257L56.8236 36.9098L50.927 41.1743L53.1908 48.0902L47.313 43.8L41.4351 48.0902L43.699 41.1743L37.8024 36.9098L45.0794 36.9257L47.313 30Z" fill="#333333"/><path d="M75.3804 30L77.614 36.9257L84.8909 36.9098L78.9944 41.1743L81.2582 48.0902L75.3804 43.8L69.5025 48.0902L71.7664 41.1743L65.8698 36.9098L73.1468 36.9257L75.3804 30Z" fill="#333333"/></g></g>
        <defs><clipPath id="clip0EFa8"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
