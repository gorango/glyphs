
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
        <g clip-path="url(#clip0skN0)"><g clip-path="url(#clip1skN0)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0skN0"><rect width="120" height="80" fill="white"/></clipPath><clipPath id="clip1skN0"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip04BEM)"><g clip-path="url(#clip14BEM)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip04BEM"><rect width="80" height="80" fill="white"/></clipPath><clipPath id="clip14BEM"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0qqEP" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0qqEP)"><g clip-path="url(#clip0qqEP)"><g clip-path="url(#clip1qqEP)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0qqEP"><rect width="80" height="80" fill="white"/></clipPath><clipPath id="clip1qqEP"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
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
