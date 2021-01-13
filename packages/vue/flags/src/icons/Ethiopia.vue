
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
        <g clip-path="url(#clip0SONp)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#EB5757"/><circle cx="60" cy="39.9897" r="24" fill="#2F80ED"/><path d="M60 25.9897L63.127 35.6858L73.3148 35.6635L65.0596 41.6337L68.229 51.316L60 45.3097L51.771 51.316L54.9404 41.6337L46.6852 35.6635L56.873 35.6858L60 25.9897Z" stroke="#F2C94C" stroke-width="2"/><path d="M67.3832 28.1397L59.2466 39.5185L72.5778 43.7564L59.2416 39.5342L59.3307 53.5226L59.2251 39.5343L45.9489 43.9417L59.2199 39.5187L50.9256 28.2543L59.2332 39.5089L67.3832 28.1397Z" stroke="#F2C94C"/></g>
        <defs><clipPath id="clip0SONp"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0f-ui)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#219653"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#EB5757"/><circle cx="40" cy="39.9897" r="24" fill="#2F80ED"/><path d="M40 25.9897L43.127 35.6858L53.3148 35.6635L45.0596 41.6337L48.229 51.316L40 45.3097L31.771 51.316L34.9404 41.6337L26.6852 35.6635L36.873 35.6858L40 25.9897Z" stroke="#F2C94C" stroke-width="2"/><path d="M47.3832 28.1397L39.2466 39.5185L52.5778 43.7564L39.2416 39.5342L39.3307 53.5226L39.2251 39.5343L25.9489 43.9417L39.2199 39.5187L30.9256 28.2543L39.2332 39.5089L47.3832 28.1397Z" stroke="#F2C94C"/></g>
        <defs><clipPath id="clip0f-ui"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0nms8" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0nms8)"><g clip-path="url(#clip0nms8)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#219653"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#EB5757"/><circle cx="40" cy="39.9897" r="24" fill="#2F80ED"/><path d="M40 25.9897L43.127 35.6858L53.3148 35.6635L45.0596 41.6337L48.229 51.316L40 45.3097L31.771 51.316L34.9404 41.6337L26.6852 35.6635L36.873 35.6858L40 25.9897Z" stroke="#F2C94C" stroke-width="2"/><path d="M47.3832 28.1397L39.2466 39.5185L52.5778 43.7564L39.2416 39.5342L39.3307 53.5226L39.2251 39.5343L25.9489 43.9417L39.2199 39.5187L30.9256 28.2543L39.2332 39.5089L47.3832 28.1397Z" stroke="#F2C94C"/></g></g>
        <defs><clipPath id="clip0nms8"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
