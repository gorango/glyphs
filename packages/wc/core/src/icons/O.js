
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreO = {
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
            d="M24 48V32C24 23.1634 31.1634 16 40 16C48.8366 16 56 23.1634 56 32L56 48C56 56.8366 48.8366 64 40 64C31.1634 64 24 56.8366 24 48Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M21 32L21 48H27L27 32H21ZM53 32V48H59L59 32L53 32ZM53 48C53 55.1797 47.1797 61 40 61V67C50.4934 67 59 58.4934 59 48H53ZM21 48C21 58.4934 29.5066 67 40 67V61C32.8203 61 27 55.1797 27 48H21ZM59 32C59 21.5066 50.4934 13 40 13V19C47.1797 19 53 24.8203 53 32L59 32ZM27 32C27 24.8203 32.8203 19 40 19V13C29.5066 13 21 21.5066 21 32H27Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M22 32V48H26L26 32H22ZM54 32V48H58L58 32L54 32ZM54 48C54 55.732 47.732 62 40 62V66C49.9411 66 58 57.9411 58 48H54ZM22 48C22 57.9411 30.0589 66 40 66V62C32.268 62 26 55.732 26 48H22ZM58 32C58 22.0589 49.9411 14 40 14V18C47.732 18 54 24.268 54 32L58 32ZM26 32C26 24.268 32.268 18 40 18V14C30.0589 14 22 22.0589 22 32H26Z"
            fill="#EB5757"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M24 48V32C24 23.1634 31.1634 16 40 16C48.8366 16 56 23.1634 56 32V48C56 56.8366 48.8366 64 40 64C31.1634 64 24 56.8366 24 48Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 32C22 22.0589 30.0589 14 40 14C49.9411 14 58 22.0589 58 32L58 48C58 57.9411 49.9411 66 40 66C30.0589 66 22 57.9411 22 48L22 32ZM40 18C32.268 18 26 24.268 26 32L26 48C26 55.732 32.268 62 40 62C47.732 62 54 55.732 54 48L54 32C54 24.268 47.732 18 40 18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-o', CoreO)
export default CoreO
