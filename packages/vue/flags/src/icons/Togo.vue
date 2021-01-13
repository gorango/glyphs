
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
        <g opacity="0.9"><path d="M120 0H0V16H120V0Z" fill="#219653"/><path d="M120 16H0V32H120V16Z" fill="#F2C94C"/><path d="M120 32H0V48H120V32Z" fill="#219653"/><path d="M120 48H0V64H120V48Z" fill="#F2C94C"/><path d="M120 64H0V80H120V64Z" fill="#219653"/></g>
        <path
          d="M48 0H0V48H48V0Z"
          fill="#EB5757"
        />
        <path
          d="M24 8L27.5737 19.0812L39.2169 19.0557L29.7824 25.8788L33.4046 36.9443L24 30.08L14.5954 36.9443L18.2176 25.8788L8.7831 19.0557L20.4263 19.0812L24 8Z"
          fill="#F2F2F2"
        />
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0RmvS)"><g opacity="0.9"><path d="M120 0H0V16H120V0Z" fill="#219653"/><path d="M120 16H0V32H120V16Z" fill="#F2C94C"/><path d="M120 32H0V48H120V32Z" fill="#219653"/><path d="M120 48H0V64H120V48Z" fill="#F2C94C"/><path d="M120 64H0V80H120V64Z" fill="#219653"/></g><path d="M48 0H0V48H48V0Z" fill="#EB5757"/><path d="M24 8L27.5737 19.0812L39.2169 19.0557L29.7824 25.8788L33.4046 36.9443L24 30.08L14.5954 36.9443L18.2176 25.8788L8.7831 19.0557L20.4263 19.0812L24 8Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0RmvS"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0O7L4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0O7L4)"><g clip-path="url(#clip0O7L4)"><g opacity="0.9"><path d="M120 0H0V16H120V0Z" fill="#219653"/><path d="M120 16H0V32H120V16Z" fill="#F2C94C"/><path d="M120 32H0V48H120V32Z" fill="#219653"/><path d="M120 48H0V64H120V48Z" fill="#F2C94C"/><path d="M120 64H0V80H120V64Z" fill="#219653"/></g><path d="M48 0H0V48H48V0Z" fill="#EB5757"/><path d="M24 8L27.5737 19.0812L39.2169 19.0557L29.7824 25.8788L33.4046 36.9443L24 30.08L14.5954 36.9443L18.2176 25.8788L8.7831 19.0557L20.4263 19.0812L24 8Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0O7L4"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
