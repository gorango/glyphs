
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreL = {
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
            d="M56 64L24 64L24 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M24 64H21C21 65.6569 22.3431 67 24 67V64ZM56 67C57.6569 67 59 65.6569 59 64C59 62.3431 57.6569 61 56 61V67ZM27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM24 67H56V61L24 61V67ZM27 64V62H21V64H27ZM27 62L27 16H21L21 62H27Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M24 64H22C22 65.1046 22.8954 66 24 66V64ZM56 66C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62V66ZM26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM24 66H56V62L24 62V66ZM26 64V62H22V64H26ZM26 62L26 16H22L22 62H26Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M56 64H24V16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M24 14C22.8954 14 22 14.8954 22 16L22 64C22 65.1046 22.8954 66 24 66H56C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62L26 62L26 16C26 14.8954 25.1046 14 24 14Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-l', CoreL)
export default CoreL
