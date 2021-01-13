
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
        <g clip-path="url(#clip0LYGm)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path d="M120 53.34H0V80.01H120V53.34Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M48 34C48 34.5523 47.54 34.9837 47.0181 35.1644C46.1511 35.4645 45.4645 36.1511 45.1644 37.0181C44.9837 37.54 45.4477 38 46 38H51.5C54.8137 38 57.5 40.6863 57.5 44V47V48C57.5 48.5523 57.0523 49 56.5 49H55.5H39C38.4477 49 38 48.5523 38 48V46C38 45.4477 38.4477 45 39 45H52.5C53.0523 45 53.5 44.5523 53.5 44C53.5 42.8954 52.6046 42 51.5 42H43H42C41.4477 42 41 41.5523 41 41V40V38C41 34.4725 43.6092 31.5544 47.003 31.0705C47.5497 30.9925 48 31.4477 48 32V34ZM64 32C64 31.4477 63.5523 31 63 31H61C60.4477 31 60 31.4477 60 32V47V48C60 48.5523 60.4477 49 61 49H62H66C66.5523 49 67 48.5523 67 48V46C67 45.4477 66.5523 45 66 45H65C64.4477 45 64 44.5523 64 44V32ZM82 46C82 45.4477 81.5523 45 81 45H80C79.4477 45 79 44.5523 79 44V32C79 31.4477 78.5523 31 78 31H76C75.4477 31 75 31.4477 75 32V44C75 44.5523 74.5523 45 74 45C73.4477 45 73 44.5523 73 44V41C73 40.4477 72.5523 40 72 40H70C69.4477 40 69 40.4477 69 41V47V48C69 48.5523 69.4477 49 70 49H71H77H81C81.5523 49 82 48.5523 82 48V46Z" fill="#219653"/></g>
        <defs><clipPath id="clip0LYGm"><rect width="120" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'square'">
        <g clip-path="url(#clip04aBe)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28 34C28 34.5523 27.54 34.9837 27.0181 35.1644C26.1511 35.4645 25.4645 36.1511 25.1644 37.0181C24.9837 37.54 25.4477 38 26 38H31.5C34.8137 38 37.5 40.6863 37.5 44V47V48C37.5 48.5523 37.0523 49 36.5 49H35.5H19C18.4477 49 18 48.5523 18 48V46C18 45.4477 18.4477 45 19 45H32.5C33.0523 45 33.5 44.5523 33.5 44C33.5 42.8954 32.6046 42 31.5 42H23H22C21.4477 42 21 41.5523 21 41V40V38C21 34.4725 23.6092 31.5544 27.003 31.0705C27.5497 30.9925 28 31.4477 28 32V34ZM44 32C44 31.4477 43.5523 31 43 31H41C40.4477 31 40 31.4477 40 32V47V48C40 48.5523 40.4477 49 41 49H42H46C46.5523 49 47 48.5523 47 48V46C47 45.4477 46.5523 45 46 45H45C44.4477 45 44 44.5523 44 44V32ZM62 46C62 45.4477 61.5523 45 61 45H60C59.4477 45 59 44.5523 59 44V32C59 31.4477 58.5523 31 58 31H56C55.4477 31 55 31.4477 55 32V44C55 44.5523 54.5523 45 54 45C53.4477 45 53 44.5523 53 44V41C53 40.4477 52.5523 40 52 40H50C49.4477 40 49 40.4477 49 41V47V48C49 48.5523 49.4477 49 50 49H51H57H61C61.5523 49 62 48.5523 62 48V46Z" fill="#219653"/></g>
        <defs><clipPath id="clip04aBe"><rect width="80" height="80" fill="white"/></clipPath></defs>
      </template>
      <template v-if="variant === 'circle'">
        <mask id="mask0-7L2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
        <g mask="url(#mask0-7L2)"><g clip-path="url(#clip0-7L2)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28 34C28 34.5523 27.54 34.9837 27.0181 35.1644C26.1511 35.4645 25.4645 36.1511 25.1644 37.0181C24.9837 37.54 25.4477 38 26 38H31.5C34.8137 38 37.5 40.6863 37.5 44V47V48C37.5 48.5523 37.0523 49 36.5 49H35.5H19C18.4477 49 18 48.5523 18 48V46C18 45.4477 18.4477 45 19 45H32.5C33.0523 45 33.5 44.5523 33.5 44C33.5 42.8954 32.6046 42 31.5 42H23H22C21.4477 42 21 41.5523 21 41V40V38C21 34.4725 23.6092 31.5544 27.003 31.0705C27.5497 30.9925 28 31.4477 28 32V34ZM44 32C44 31.4477 43.5523 31 43 31H41C40.4477 31 40 31.4477 40 32V47V48C40 48.5523 40.4477 49 41 49H42H46C46.5523 49 47 48.5523 47 48V46C47 45.4477 46.5523 45 46 45H45C44.4477 45 44 44.5523 44 44V32ZM62 46C62 45.4477 61.5523 45 61 45H60C59.4477 45 59 44.5523 59 44V32C59 31.4477 58.5523 31 58 31H56C55.4477 31 55 31.4477 55 32V44C55 44.5523 54.5523 45 54 45C53.4477 45 53 44.5523 53 44V41C53 40.4477 52.5523 40 52 40H50C49.4477 40 49 40.4477 49 41V47V48C49 48.5523 49.4477 49 50 49H51H57H61C61.5523 49 62 48.5523 62 48V46Z" fill="#219653"/></g></g>
        <defs><clipPath id="clip0-7L2"><rect width="80" height="80" fill="white"/></clipPath></defs>
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
