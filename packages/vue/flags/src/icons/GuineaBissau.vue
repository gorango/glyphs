
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
        <g clip-path="url(#clip0hzBR)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g>
        <defs><clipPath id="clip0hzBR"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0yTNy)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g>
        <defs><clipPath id="clip0yTNy"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0OUGI" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0OUGI)"><g clip-path="url(#clip0OUGI)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g></g>
        <defs><clipPath id="clip0OUGI"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
