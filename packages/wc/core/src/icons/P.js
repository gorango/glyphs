
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreP = {
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
            d="M24 16L24 64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 39.5L24 16.5C24 16.2239 24.2239 16 24.5 16L44 16C50.6274 16 56 21.3726 56 28C56 34.6274 50.6274 40 44 40H24.5C24.2239 40 24 39.7761 24 39.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM21 64C21 65.6569 22.3431 67 24 67C25.6569 67 27 65.6569 27 64H21ZM27 39.5L27 16.5H21L21 39.5H27ZM24.5 37C25.8807 37 27 38.1193 27 39.5H21C21 41.433 22.567 43 24.5 43V37ZM44 37H24.5V43H44V37ZM53 28C53 32.9706 48.9706 37 44 37V43C52.2843 43 59 36.2843 59 28H53ZM44 19C48.9706 19 53 23.0294 53 28H59C59 19.7157 52.2843 13 44 13V19ZM24.5 19L44 19V13L24.5 13V19ZM27 16.5C27 17.8807 25.8807 19 24.5 19V13C22.567 13 21 14.567 21 16.5H27ZM21 16L21 64H27L27 16H21Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64H22ZM26 39.5L26 16.5H22L22 39.5H26ZM24.5 38C25.3284 38 26 38.6716 26 39.5H22C22 40.8807 23.1193 42 24.5 42V38ZM44 38H24.5V42H44V38ZM54 28C54 33.5228 49.5228 38 44 38V42C51.732 42 58 35.732 58 28H54ZM44 18C49.5228 18 54 22.4772 54 28H58C58 20.268 51.732 14 44 14V18ZM24.5 18L44 18V14L24.5 14V18ZM26 16.5C26 17.3284 25.3284 18 24.5 18V14C23.1193 14 22 15.1193 22 16.5H26ZM22 16L22 64H26L26 16H22Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M24 16V64M24 39.5V16.5C24 16.2239 24.2239 16 24.5 16H44C50.6274 16 56 21.3726 56 28C56 34.6274 50.6274 40 44 40H24.5C24.2239 40 24 39.7761 24 39.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.236 14.0138C24.1586 14.0047 24.0798 14 24 14C22.8954 14 22 14.8954 22 16L22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64L26 42H44C51.732 42 58 35.732 58 28C58 20.268 51.732 14 44 14L24.5 14C24.4108 14 24.3227 14.0047 24.236 14.0138ZM26 18L26 38H44C49.5228 38 54 33.5228 54 28C54 22.4772 49.5228 18 44 18L26 18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-p', CoreP)
export default CoreP
