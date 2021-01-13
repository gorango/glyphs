
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
        <g clip-path="url(#clip0jTkD)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><circle cx="60" cy="40" r="108" fill="#EB5757"/><circle cx="60" cy="40" r="10" fill="#F2C94C"/><path d="M49 -53H71L62 27H60H58L49 -53Z" fill="#F2C94C"/><path d="M153 29L153 51L73 42L73 40L73 38L153 29Z" fill="#F2C94C"/><path d="M71 133L49 133L58 53L60 53L62 53L71 133Z" fill="#F2C94C"/><path d="M-33 51L-33 29L47 38L47 40L47 42L-33 51Z" fill="#F2C94C"/><path d="M125.353 -27.0754L139.198 -9.97823L71.362 33.3731L70.1034 31.8188L68.8447 30.2645L125.353 -27.0754Z" fill="#F2C94C"/><path d="M-5.35205 107.075L-19.1971 89.9781L48.6385 46.6268L49.8971 48.1811L51.1557 49.7354L-5.35205 107.075Z" fill="#F2C94C"/><path d="M-19.1982 -9.95435L-5.3532 -27.0516L51.1546 30.2884L49.896 31.8427L48.6373 33.397L-19.1982 -9.95435Z" fill="#F2C94C"/><path d="M138.519 89.9546L124.674 107.052L68.1657 49.7119L69.4244 48.1576L70.683 46.6033L138.519 89.9546Z" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0jTkD"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip0OuuV)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><circle cx="40" cy="40" r="108" fill="#EB5757"/><circle cx="40" cy="40" r="10" fill="#F2C94C"/><path d="M29 -53H51L42 27H40H38L29 -53Z" fill="#F2C94C"/><path d="M133 29L133 51L53 42L53 40L53 38L133 29Z" fill="#F2C94C"/><path d="M51 133L29 133L38 53L40 53L42 53L51 133Z" fill="#F2C94C"/><path d="M-53 51L-53 29L27 38L27 40L27 42L-53 51Z" fill="#F2C94C"/><path d="M105.353 -27.0754L119.198 -9.97823L51.362 33.3731L50.1034 31.8188L48.8447 30.2645L105.353 -27.0754Z" fill="#F2C94C"/><path d="M-25.3521 107.075L-39.1971 89.9781L28.6385 46.6268L29.8971 48.1811L31.1557 49.7354L-25.3521 107.075Z" fill="#F2C94C"/><path d="M-39.1982 -9.95435L-25.3532 -27.0516L31.1546 30.2884L29.896 31.8427L28.6373 33.397L-39.1982 -9.95435Z" fill="#F2C94C"/><path d="M118.519 89.9546L104.674 107.052L48.1657 49.7119L49.4244 48.1576L50.683 46.6033L118.519 89.9546Z" fill="#F2C94C"/></g>
        <defs><clipPath id="clip0OuuV"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0Pz-a" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0Pz-a)"><g clip-path="url(#clip0Pz-a)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><circle cx="40" cy="40" r="108" fill="#EB5757"/><circle cx="40" cy="40" r="10" fill="#F2C94C"/><path d="M29 -53H51L42 27H40H38L29 -53Z" fill="#F2C94C"/><path d="M133 29L133 51L53 42L53 40L53 38L133 29Z" fill="#F2C94C"/><path d="M51 133L29 133L38 53L40 53L42 53L51 133Z" fill="#F2C94C"/><path d="M-53 51L-53 29L27 38L27 40L27 42L-53 51Z" fill="#F2C94C"/><path d="M105.353 -27.0754L119.198 -9.97823L51.362 33.3731L50.1034 31.8188L48.8447 30.2645L105.353 -27.0754Z" fill="#F2C94C"/><path d="M-25.3521 107.075L-39.1971 89.9781L28.6385 46.6268L29.8971 48.1811L31.1557 49.7354L-25.3521 107.075Z" fill="#F2C94C"/><path d="M-39.1982 -9.95459L-25.3532 -27.0518L31.1546 30.2881L29.896 31.8424L28.6373 33.3967L-39.1982 -9.95459Z" fill="#F2C94C"/><path d="M118.519 89.9545L104.674 107.052L48.1657 49.7117L49.4244 48.1574L50.683 46.6031L118.519 89.9545Z" fill="#F2C94C"/></g></g>
        <defs><clipPath id="clip0Pz-a"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
