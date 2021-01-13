
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
        <path
          d="M120 0H0V79.9983H120V0Z"
          fill="#EB5757"
        />
        <path
          d="M22 10.6567L25.5922 21.7125H37.2169L27.8123 28.5453L31.4046 39.601L22 32.7682L12.5954 39.601L16.1877 28.5453L6.7831 21.7125H18.4078L22 10.6567Z"
          fill="#F2C94C"
        />
        <path
          d="M44.1956 6.82843L42.8762 9.41784L44.9312 11.4728L42.0608 11.0182L40.7414 13.6076L40.2868 10.7372L37.4164 10.2826L40.0059 8.96322L39.5512 6.09283L41.6062 8.1478L44.1956 6.82843Z"
          fill="#F2C94C"
        />
        <path
          d="M48.7641 16.1869L50.3469 18.6242L53.1541 17.872L51.3251 20.1306L52.908 22.5679L50.1948 21.5264L48.3659 23.7849L48.518 20.8827L45.8049 19.8413L48.612 19.0891L48.7641 16.1869Z"
          fill="#F2C94C"
        />
        <path
          d="M51.8 30.9805L51.1958 33.8231L53.7126 35.2762L50.8224 35.58L50.2182 38.4227L49.0361 35.7677L46.1459 36.0715L48.3056 34.1269L47.1235 31.472L49.6403 32.9251L51.8 30.9805Z"
          fill="#F2C94C"
        />
        <path
          d="M41.3672 40.8384L42.2652 43.6023H45.1714L42.8203 45.3105L43.7183 48.0744L41.3672 46.3662L39.016 48.0744L39.9141 45.3105L37.563 43.6023H40.4691L41.3672 40.8384Z"
          fill="#F2C94C"
        />
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip01bAe)"><path d="M100 0H-20V79.9983H100V0Z" fill="#EB5757"/><path d="M22 10.6567L25.5922 21.7125H37.2169L27.8123 28.5453L31.4046 39.601L22 32.7682L12.5954 39.601L16.1877 28.5453L6.7831 21.7125H18.4078L22 10.6567Z" fill="#F2C94C"/><path d="M44.1956 6.82843L42.8762 9.41784L44.9312 11.4728L42.0608 11.0182L40.7414 13.6076L40.2868 10.7372L37.4164 10.2826L40.0059 8.96322L39.5512 6.09283L41.6062 8.1478L44.1956 6.82843Z" fill="#F2C94C"/><path d="M48.7641 16.1869L50.3469 18.6242L53.1541 17.872L51.3251 20.1306L52.908 22.5679L50.1948 21.5264L48.3659 23.7849L48.518 20.8827L45.8049 19.8413L48.612 19.0891L48.7641 16.1869Z" fill="#F2C94C"/><path d="M51.8 30.9805L51.1958 33.8231L53.7126 35.2762L50.8224 35.58L50.2182 38.4227L49.0361 35.7677L46.1459 36.0715L48.3056 34.1269L47.1235 31.472L49.6403 32.9251L51.8 30.9805Z" fill="#F2C94C"/><path d="M41.3672 40.8384L42.2652 43.6023H45.1714L42.8203 45.3105L43.7183 48.0744L41.3672 46.3662L39.016 48.0744L39.9141 45.3105L37.563 43.6023H40.4691L41.3672 40.8384Z" fill="#F2C94C"/></g>
        <defs><clipPath id="clip01bAe"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0pcqX" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0pcqX)"><g clip-path="url(#clip0pcqX)"><path d="M100 0H-20V79.9983H100V0Z" fill="#EB5757"/><path d="M22 10.6567L25.5922 21.7125H37.2169L27.8123 28.5453L31.4046 39.601L22 32.7682L12.5954 39.601L16.1877 28.5453L6.7831 21.7125H18.4078L22 10.6567Z" fill="#F2C94C"/><path d="M44.1956 6.82843L42.8762 9.41784L44.9312 11.4728L42.0608 11.0182L40.7414 13.6076L40.2868 10.7372L37.4164 10.2826L40.0059 8.96322L39.5512 6.09283L41.6062 8.1478L44.1956 6.82843Z" fill="#F2C94C"/><path d="M48.7641 16.1869L50.3469 18.6242L53.1541 17.872L51.3251 20.1306L52.908 22.5679L50.1948 21.5264L48.3659 23.7849L48.518 20.8827L45.8049 19.8413L48.612 19.0891L48.7641 16.1869Z" fill="#F2C94C"/><path d="M51.8 30.9805L51.1958 33.8231L53.7126 35.2762L50.8224 35.58L50.2182 38.4227L49.0361 35.7677L46.1459 36.0715L48.3056 34.1269L47.1235 31.472L49.6403 32.9251L51.8 30.9805Z" fill="#F2C94C"/><path d="M41.3672 40.8384L42.2652 43.6023H45.1714L42.8203 45.3105L43.7183 48.0744L41.3672 46.3662L39.016 48.0744L39.9141 45.3105L37.563 43.6023H40.4691L41.3672 40.8384Z" fill="#F2C94C"/></g></g>
        <defs><clipPath id="clip0pcqX"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
