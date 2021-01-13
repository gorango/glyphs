
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
        <g clip-path="url(#clip01mw4)"><path d="M120 -0.0102539H0V79.9897H120V-0.0102539Z" fill="#219653"/><path d="M60 10L110 40L60 70L10 40L60 10Z" fill="#F2C94C"/><path d="M60.0554 58C69.9659 58 78 49.9411 78 40C78 30.0589 69.9659 22 60.0554 22C50.1449 22 42.1108 30.0589 42.1108 40C42.1108 49.9411 50.1449 58 60.0554 58Z" fill="#2F80ED"/></g>
        <defs><clipPath id="clip01mw4"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0bkhI)"><path d="M100 -0.0102539H-20V79.9897H100V-0.0102539Z" fill="#219653"/><path d="M40.0001 10L73.3334 40L40.0001 70L6.66675 40L40.0001 10Z" fill="#F2C94C"/><path d="M40.0554 58C49.9659 58 58 49.9411 58 40C58 30.0589 49.9659 22 40.0554 22C30.1449 22 22.1108 30.0589 22.1108 40C22.1108 49.9411 30.1449 58 40.0554 58Z" fill="#2F80ED"/></g>
        <defs><clipPath id="clip0bkhI"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0oYA3" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0oYA3)"><g clip-path="url(#clip0oYA3)"><path d="M100 -0.0102539H-20V79.9897H100V-0.0102539Z" fill="#219653"/><path d="M40.0001 10L73.3334 40L40.0001 70L6.66675 40L40.0001 10Z" fill="#F2C94C"/><path d="M40.0554 58C49.9659 58 58 49.9411 58 40C58 30.0589 49.9659 22 40.0554 22C30.1449 22 22.1108 30.0589 22.1108 40C22.1108 49.9411 30.1449 58 40.0554 58Z" fill="#2F80ED"/></g></g>
        <defs><clipPath id="clip0oYA3"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
