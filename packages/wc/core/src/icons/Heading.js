
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreHeading = {
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
            d="M24 64.1299V16.1299"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 40.1299H56"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M56 64.1299V16.1299"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M53 64.1299C53 65.7867 54.3431 67.1299 56 67.1299C57.6569 67.1299 59 65.7867 59 64.1299H53ZM59 16.1299C59 14.473 57.6569 13.1299 56 13.1299C54.3431 13.1299 53 14.473 53 16.1299H59ZM21 64.1299C21 65.7867 22.3431 67.1299 24 67.1299C25.6569 67.1299 27 65.7867 27 64.1299H21ZM27 16.1299C27 14.473 25.6569 13.1299 24 13.1299C22.3431 13.1299 21 14.473 21 16.1299H27ZM24 37.1299C22.3431 37.1299 21 38.473 21 40.1299C21 41.7867 22.3431 43.1299 24 43.1299V37.1299ZM56 43.1299C57.6569 43.1299 59 41.7867 59 40.1299C59 38.473 57.6569 37.1299 56 37.1299V43.1299ZM59 64.1299V16.1299H53V64.1299H59ZM27 64.1299V16.1299H21V64.1299H27ZM24 43.1299H56V37.1299H24V43.1299Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M54 64.1299C54 65.2345 54.8954 66.1299 56 66.1299C57.1046 66.1299 58 65.2345 58 64.1299H54ZM58 16.1299C58 15.0253 57.1046 14.1299 56 14.1299C54.8954 14.1299 54 15.0253 54 16.1299H58ZM22 64.1299C22 65.2345 22.8954 66.1299 24 66.1299C25.1046 66.1299 26 65.2345 26 64.1299H22ZM26 16.1299C26 15.0253 25.1046 14.1299 24 14.1299C22.8954 14.1299 22 15.0253 22 16.1299H26ZM24 38.1299C22.8954 38.1299 22 39.0253 22 40.1299C22 41.2345 22.8954 42.1299 24 42.1299V38.1299ZM56 42.1299C57.1046 42.1299 58 41.2345 58 40.1299C58 39.0253 57.1046 38.1299 56 38.1299V42.1299ZM58 64.1299V16.1299H54V64.1299H58ZM26 64.1299V16.1299H22V64.1299H26ZM24 42.1299H56V38.1299H24V42.1299Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M56 64.1299V16.1299M24 64.1299V16.1299M24 40.1299H56"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M26 16.1299C26 15.0253 25.1046 14.1299 24 14.1299C22.8954 14.1299 22 15.0253 22 16.1299V64.1299C22 65.2345 22.8954 66.1299 24 66.1299C25.1046 66.1299 26 65.2345 26 64.1299V42.1299H54V64.1299C54 65.2345 54.8954 66.1299 56 66.1299C57.1046 66.1299 58 65.2345 58 64.1299V16.1299C58 15.0253 57.1046 14.1299 56 14.1299C54.8954 14.1299 54 15.0253 54 16.1299V38.1299H26V16.1299Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-heading', CoreHeading)
export default CoreHeading
