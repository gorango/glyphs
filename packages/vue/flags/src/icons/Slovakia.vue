
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
        <g clip-path="url(#clip03r1P)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 0H0V26.6667H120V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#EB5757"/><path d="M16 21H48V42.517C48 48.4346 44.4882 53.788 39.0602 56.1449L32 59.2105L24.9398 56.1449C19.5118 53.788 16 48.4346 16 42.517V21Z" fill="#EB5757"/><path d="M32 26V46" stroke="#F2F2F2" stroke-width="3"/><path d="M38 32H26" stroke="#F2F2F2" stroke-width="3"/><path d="M40 38H24" stroke="#F2F2F2" stroke-width="3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45.7381 50.3976C44.1764 52.8934 41.8763 54.9223 39.0606 56.1449L32.0004 59.2105L24.9402 56.1449C22.1245 54.9223 19.8244 52.8934 18.2627 50.3976C18.9306 48.4221 20.7994 47 23.0004 47C23.6946 47 24.3558 47.1415 24.9567 47.3972C26.6056 45.3269 29.148 44 32.0004 44C34.8528 44 37.3953 45.3269 39.0442 47.3972C39.645 47.1415 40.3062 47 41.0004 47C43.2014 47 45.0702 48.4221 45.7381 50.3976Z" fill="#2F80ED"/><path d="M17 22H47V42.517C47 48.0363 43.7246 53.0294 38.6619 55.2276L32 58.1203L25.3381 55.2276C20.2754 53.0294 17 48.0363 17 42.517V22Z" stroke="#F2F2F2" stroke-width="2"/></g>
        <defs><clipPath id="clip03r1P"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0yPnd)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M80 53.3334H0V80H80V53.3334Z" fill="#EB5757"/><path d="M16 21H48V42.517C48 48.4346 44.4882 53.788 39.0602 56.1449L32 59.2105L24.9398 56.1449C19.5118 53.788 16 48.4346 16 42.517V21Z" fill="#EB5757"/><path d="M32 26V46" stroke="#F2F2F2" stroke-width="3"/><path d="M38 32H26" stroke="#F2F2F2" stroke-width="3"/><path d="M40 38H24" stroke="#F2F2F2" stroke-width="3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45.7381 50.3976C44.1764 52.8934 41.8763 54.9223 39.0606 56.1449L32.0004 59.2105L24.9402 56.1449C22.1245 54.9223 19.8244 52.8934 18.2627 50.3976C18.9306 48.4221 20.7994 47 23.0004 47C23.6946 47 24.3558 47.1415 24.9567 47.3972C26.6056 45.3269 29.148 44 32.0004 44C34.8528 44 37.3953 45.3269 39.0442 47.3972C39.645 47.1415 40.3062 47 41.0004 47C43.2014 47 45.0702 48.4221 45.7381 50.3976Z" fill="#2F80ED"/><path d="M17 22H47V42.517C47 48.0363 43.7246 53.0294 38.6619 55.2276L32 58.1203L25.3381 55.2276C20.2754 53.0294 17 48.0363 17 42.517V22Z" stroke="#F2F2F2" stroke-width="2"/></g>
        <defs><clipPath id="clip0yPnd"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0rGO9" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0rGO9)"><g clip-path="url(#clip0rGO9)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M80 53.3334H0V80H80V53.3334Z" fill="#EB5757"/><path d="M16 21H48V42.517C48 48.4346 44.4882 53.788 39.0602 56.1449L32 59.2105L24.9398 56.1449C19.5118 53.788 16 48.4346 16 42.517V21Z" fill="#EB5757"/><path d="M32 26V46" stroke="#F2F2F2" stroke-width="3"/><path d="M38 32H26" stroke="#F2F2F2" stroke-width="3"/><path d="M40 38H24" stroke="#F2F2F2" stroke-width="3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45.7381 50.3976C44.1764 52.8934 41.8763 54.9223 39.0606 56.1449L32.0004 59.2105L24.9402 56.1449C22.1245 54.9223 19.8244 52.8934 18.2627 50.3976C18.9306 48.4221 20.7994 47 23.0004 47C23.6946 47 24.3558 47.1415 24.9567 47.3972C26.6056 45.3269 29.148 44 32.0004 44C34.8528 44 37.3953 45.3269 39.0442 47.3972C39.645 47.1415 40.3062 47 41.0004 47C43.2014 47 45.0702 48.4221 45.7381 50.3976Z" fill="#2F80ED"/><path d="M17 22H47V42.517C47 48.0363 43.7246 53.0294 38.6619 55.2276L32 58.1203L25.3381 55.2276C20.2754 53.0294 17 48.0363 17 42.517V22Z" stroke="#F2F2F2" stroke-width="2"/></g></g>
        <defs><clipPath id="clip0rGO9"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
