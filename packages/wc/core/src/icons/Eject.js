
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreEject = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 80 80"
      transform="${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>        
        ${variant === "path" && svg`
          <path
            d="M18 58C18 55.7909 19.7909 54 22 54H58C60.2091 54 62 55.7909 62 58V62C62 64.2091 60.2091 66 58 66H22C19.7909 66 18 64.2091 18 62V58Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M38.4 16.1333C39.2 15.0666 40.8 15.0666 41.6 16.1333L61.6 42.8C62.5888 44.1185 61.6481 46 60 46H20C18.3519 46 17.4111 44.1185 18.4 42.8L38.4 16.1333Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 58C18 55.7909 19.7909 54 22 54L24 54L56 54L58 54C60.2091 54 62 55.7909 62 58L62 62C62 64.2091 60.2091 66 58 66L56 66L24 66L22 66C19.7909 66 18 64.2091 18 62L18 58Z"
            fill="currentColor"
          />
          <path
            d="M24 54L24 56L24 54ZM56 54L56 56L56 54ZM56 66L56 68L56 66ZM24 66L24 68L24 66ZM18 62L16 62L18 62ZM62 62L64 62L62 62ZM62 58L60 58L62 58ZM18 58L16 58L18 58ZM24 52L22 52L22 56L24 56L24 52ZM56 52L24 52L24 56L56 56L56 52ZM58 52L56 52L56 56L58 56L58 52ZM64 62L64 58L60 58L60 62L64 62ZM56 68L58 68L58 64L56 64L56 68ZM24 68L56 68L56 64L24 64L24 68ZM22 68L24 68L24 64L22 64L22 68ZM16 58L16 62L20 62L20 58L16 58ZM22 64C20.8954 64 20 63.1046 20 62L16 62C16 65.3137 18.6863 68 22 68L22 64ZM60 62C60 63.1046 59.1046 64 58 64L58 68C61.3137 68 64 65.3137 64 62L60 62ZM58 56C59.1046 56 60 56.8954 60 58L64 58C64 54.6863 61.3137 52 58 52L58 56ZM22 52C18.6863 52 16 54.6863 16 58L20 58C20 56.8954 20.8954 56 22 56L22 52Z"
            fill="currentColor"
          />
          <path
            d="M38.4 16.1333C39.2 15.0667 40.8 15.0667 41.6 16.1333L61.6 42.8C62.5889 44.1185 61.6481 46 60 46L20 46C18.3519 46 17.4111 44.1185 18.4 42.8L38.4 16.1333Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 58C18 55.7909 19.7909 54 22 54L24 54L56 54L58 54C60.2091 54 62 55.7909 62 58L62 62C62 64.2091 60.2091 66 58 66L56 66L24 66L22 66C19.7909 66 18 64.2091 18 62L18 58Z"
            fill="#2F80ED"
          />
          <path
            d="M38.4 16.1333C39.2 15.0667 40.8 15.0667 41.6 16.1333L61.6 42.8C62.5889 44.1185 61.6481 46 60 46L20 46C18.3519 46 17.4111 44.1185 18.4 42.8L38.4 16.1333Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M18 58C18 55.7908 19.7908 54 22 54H58C60.2091 54 62 55.7908 62 58V62C62 64.2091 60.2091 66 58 66H22C19.7908 66 18 64.2091 18 62V58Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.4 16.1333C39.2 15.0666 40.8 15.0666 41.6 16.1333L61.6 42.8C62.5888 44.1185 61.6481 46 60 46H20C18.3519 46 17.4111 44.1185 18.4 42.8L38.4 16.1333Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M18 58C18 55.7908 19.7908 54 22 54H58C60.2091 54 62 55.7908 62 58V62C62 64.2091 60.2091 66 58 66H22C19.7908 66 18 64.2091 18 62V58Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M38.4 16.1333C39.2 15.0666 40.8 15.0666 41.6 16.1333L61.6 42.8C62.5888 44.1185 61.6481 46 60 46H20C18.3519 46 17.4111 44.1185 18.4 42.8L38.4 16.1333Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7999 41.5999C14.8222 44.2369 16.7038 47.9999 19.9999 47.9999L59.9999 47.9999C63.2961 47.9999 65.1776 44.2369 63.1999 41.5999L43.1999 14.9333C41.5999 12.7999 38.3999 12.7999 36.7999 14.9333L16.7999 41.5999ZM19.9999 43.9999L39.9999 17.3333L59.9999 43.9999H19.9999Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9999 61.9999C15.9999 65.3136 18.6862 67.9999 21.9999 67.9999H57.9999C61.3136 67.9999 63.9999 65.3136 63.9999 61.9999V57.9999C63.9999 54.6862 61.3136 51.9999 57.9999 51.9999L21.9999 51.9999C18.6862 51.9999 15.9999 54.6862 15.9999 57.9999V61.9999ZM21.9999 63.9999C20.8954 63.9999 19.9999 63.1045 19.9999 61.9999V57.9999C19.9999 56.8953 20.8954 55.9999 21.9999 55.9999L57.9999 55.9999C59.1045 55.9999 59.9999 56.8953 59.9999 57.9999V61.9999C59.9999 63.1045 59.1045 63.9999 57.9999 63.9999H21.9999Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-eject', CoreEject)
export default CoreEject
