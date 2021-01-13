
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
        <g clip-path="url(#clip0XPn2)"><path d="M120 -0.0202637H0V8.86863H120V-0.0202637Z" fill="#EB5757"/><path d="M120 8.86865H0V17.7575H120V8.86865Z" fill="#F2F2F2"/><path d="M120 17.7576H0V26.6465H120V17.7576Z" fill="#EB5757"/><path d="M120 26.6465H0V35.5354H120V26.6465Z" fill="#F2F2F2"/><path d="M120 35.5354H0V44.4243H120V35.5354Z" fill="#EB5757"/><path d="M120 44.4241H0V53.313H120V44.4241Z" fill="#F2F2F2"/><path d="M120 53.313H0V62.2019H120V53.313Z" fill="#EB5757"/><path d="M120 62.2019H0V71.0908H120V62.2019Z" fill="#F2F2F2"/><path d="M120 71.0908H0V79.9797H120V71.0908Z" fill="#EB5757"/><rect y="-0.0102539" width="44" height="44" fill="#2F80ED"/><path d="M22 7.98975L25.127 17.6858L35.3148 17.6635L27.0596 23.6337L30.229 33.316L22 27.3097L13.771 33.316L16.9404 23.6337L8.68521 17.6635L18.873 17.6858L22 7.98975Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip0XPn2"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip03gLX)"><path d="M120 -0.0202637H0V8.86863H120V-0.0202637Z" fill="#EB5757"/><path d="M120 8.86865H0V17.7575H120V8.86865Z" fill="#F2F2F2"/><path d="M120 17.7576H0V26.6465H120V17.7576Z" fill="#EB5757"/><path d="M120 26.6465H0V35.5354H120V26.6465Z" fill="#F2F2F2"/><path d="M120 35.5354H0V44.4243H120V35.5354Z" fill="#EB5757"/><path d="M120 44.4241H0V53.313H120V44.4241Z" fill="#F2F2F2"/><path d="M120 53.313H0V62.2019H120V53.313Z" fill="#EB5757"/><path d="M120 62.2019H0V71.0908H120V62.2019Z" fill="#F2F2F2"/><path d="M120 71.0908H0V79.9797H120V71.0908Z" fill="#EB5757"/><rect y="-0.0102539" width="44" height="44" fill="#2F80ED"/><path d="M22 7.98975L25.127 17.6858L35.3148 17.6635L27.0596 23.6337L30.229 33.316L22 27.3097L13.771 33.316L16.9404 23.6337L8.68521 17.6635L18.873 17.6858L22 7.98975Z" fill="#F2F2F2"/></g>
        <defs><clipPath id="clip03gLX"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0CCON" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0CCON)"><g clip-path="url(#clip0CCON)"><path d="M120 -0.0202637H0V8.86863H120V-0.0202637Z" fill="#EB5757"/><path d="M120 8.86865H0V17.7575H120V8.86865Z" fill="#F2F2F2"/><path d="M120 17.7576H0V26.6465H120V17.7576Z" fill="#EB5757"/><path d="M120 26.6465H0V35.5354H120V26.6465Z" fill="#F2F2F2"/><path d="M120 35.5354H0V44.4243H120V35.5354Z" fill="#EB5757"/><path d="M120 44.4241H0V53.313H120V44.4241Z" fill="#F2F2F2"/><path d="M120 53.313H0V62.2019H120V53.313Z" fill="#EB5757"/><path d="M120 62.2019H0V71.0908H120V62.2019Z" fill="#F2F2F2"/><path d="M120 71.0908H0V79.9797H120V71.0908Z" fill="#EB5757"/><rect y="-0.0102539" width="44" height="44" fill="#2F80ED"/><path d="M22 7.98975L25.127 17.6858L35.3148 17.6635L27.0596 23.6337L30.229 33.316L22 27.3097L13.771 33.316L16.9404 23.6337L8.68521 17.6635L18.873 17.6858L22 7.98975Z" fill="#F2F2F2"/></g></g>
        <defs><clipPath id="clip0CCON"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
