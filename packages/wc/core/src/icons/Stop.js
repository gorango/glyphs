
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreStop = {
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
            d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="2"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 18C14 15.7909 15.7909 14 18 14H62C64.2091 14 66 15.7909 66 18V62C66 64.2091 64.2091 66 62 66H18C15.7909 66 14 64.2091 14 62V18ZM62 18L18 18V62H62V18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-stop', CoreStop)
export default CoreStop
