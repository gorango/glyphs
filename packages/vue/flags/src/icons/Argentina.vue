
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
        <g clip-path="url(#clip0MGJo)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#56CCF2"/><path d="M60 24L60.7936 33.972L64.1411 24.5452L62.3267 34.3828L68 26.1436L63.7013 35.1764L71.3137 28.6863L64.8236 36.2987L73.8564 32L65.6172 37.6733L75.4548 35.8589L66.028 39.2064L76 40L66.028 40.7936L75.4548 44.1411L65.6172 42.3267L73.8564 48L64.8236 43.7013L71.3137 51.3137L63.7013 44.8236L68 53.8564L62.3267 45.6172L64.1411 55.4548L60.7936 46.028L60 56L59.2064 46.028L55.8589 55.4548L57.6733 45.6172L52 53.8564L56.2987 44.8236L48.6863 51.3137L55.1764 43.7013L46.1436 48L54.3828 42.3267L44.5452 44.1411L53.972 40.7936L44 40L53.972 39.2064L44.5452 35.8589L54.3828 37.6733L46.1436 32L55.1764 36.2987L48.6863 28.6863L56.2987 35.1764L52 26.1436L57.6733 34.3828L55.8589 24.5452L59.2064 33.972L60 24Z" fill="#F2994A"/><circle cx="60" cy="40" r="5" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0MGJo"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0uthP)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#56CCF2"/><path d="M40 24L40.7936 33.972L44.1411 24.5452L42.3267 34.3828L48 26.1436L43.7013 35.1764L51.3137 28.6863L44.8236 36.2987L53.8564 32L45.6172 37.6733L55.4548 35.8589L46.028 39.2064L56 40L46.028 40.7936L55.4548 44.1411L45.6172 42.3267L53.8564 48L44.8236 43.7013L51.3137 51.3137L43.7013 44.8236L48 53.8564L42.3267 45.6172L44.1411 55.4548L40.7936 46.028L40 56L39.2064 46.028L35.8589 55.4548L37.6733 45.6172L32 53.8564L36.2987 44.8236L28.6863 51.3137L35.1764 43.7013L26.1436 48L34.3828 42.3267L24.5452 44.1411L33.972 40.7936L24 40L33.972 39.2064L24.5452 35.8589L34.3828 37.6733L26.1436 32L35.1764 36.2987L28.6863 28.6863L36.2987 35.1764L32 26.1436L37.6733 34.3828L35.8589 24.5452L39.2064 33.972L40 24Z" fill="#F2994A"/><circle cx="40" cy="40" r="5" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0uthP"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0cz1f" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0cz1f)"><g clip-path="url(#clip0cz1f)"><path d="M120 -0.0102539H0V26.6564H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 26.6565H0V53.3232H120V26.6565Z" fill="#F2F2F2"/><path d="M120 53.323H0V79.9897H120V53.323Z" fill="#56CCF2"/><path d="M40 24L40.7936 33.972L44.1411 24.5452L42.3267 34.3828L48 26.1436L43.7013 35.1764L51.3137 28.6863L44.8236 36.2987L53.8564 32L45.6172 37.6733L55.4548 35.8589L46.028 39.2064L56 40L46.028 40.7936L55.4548 44.1411L45.6172 42.3267L53.8564 48L44.8236 43.7013L51.3137 51.3137L43.7013 44.8236L48 53.8564L42.3267 45.6172L44.1411 55.4548L40.7936 46.028L40 56L39.2064 46.028L35.8589 55.4548L37.6733 45.6172L32 53.8564L36.2987 44.8236L28.6863 51.3137L35.1764 43.7013L26.1436 48L34.3828 42.3267L24.5452 44.1411L33.972 40.7936L24 40L33.972 39.2064L24.5452 35.8589L34.3828 37.6733L26.1436 32L35.1764 36.2987L28.6863 28.6863L36.2987 35.1764L32 26.1436L37.6733 34.3828L35.8589 24.5452L39.2064 33.972L40 24Z" fill="#F2994A"/><circle cx="40" cy="40" r="5" fill="#F2C94C"/></g></g>
        <defs><clipPath id="clip0cz1f"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
