
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreUnderline = {
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
            d="M24 16V49C24 57.2843 30.7157 64 39 64H41C49.2843 64 56 57.2843 56 49V16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM59 16C59 14.3431 57.6569 13 56 13C54.3431 13 53 14.3431 53 16H59ZM21 16V49H27V16H21ZM39 67H41V61H39V67ZM59 49V16H53V49H59ZM41 67C50.9411 67 59 58.9411 59 49H53C53 55.6274 47.6274 61 41 61V67ZM21 49C21 58.9411 29.0589 67 39 67V61C32.3726 61 27 55.6274 27 49H21Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM58 16C58 14.8954 57.1046 14 56 14C54.8954 14 54 14.8954 54 16H58ZM22 16V49H26V16H22ZM39 66H41V62H39V66ZM58 49V16H54V49H58ZM41 66C50.3888 66 58 58.3888 58 49H54C54 56.1797 48.1797 62 41 62V66ZM22 49C22 58.3888 29.6112 66 39 66V62C31.8203 62 26 56.1797 26 49H22Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M24 16V49C24 57.2843 30.7157 64 39 64H41C49.2843 64 56 57.2843 56 49V16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M24 14C25.1046 14 26 14.8954 26 16V49C26 56.1797 31.8203 62 39 62H41C48.1797 62 54 56.1797 54 49V16C54 14.8954 54.8954 14 56 14C57.1046 14 58 14.8954 58 16V49C58 58.3888 50.3888 66 41 66H39C29.6112 66 22 58.3888 22 49V16C22 14.8954 22.8954 14 24 14Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-underline', CoreUnderline)
export default CoreUnderline
