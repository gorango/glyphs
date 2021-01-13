
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsMacos = {
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
        ${variant === "color" && svg`
          <path
            d="M75 40C75 59.32 59.3375 75 40 75C20.6625 75 5 59.32 5 40C5 20.6625 20.6625 5 40 5C59.3375 5 75 20.6625 75 40Z"
            fill="white"
          />
          <path
            d="M53.75 15H57.5L42.5 40L57.5 65H53.75L40 42.5L26.25 65H22.5L37.5 40L22.5 15H26.25L40 37.5L53.75 15Z"
            fill="url(#paint0_linearB9On)"
          />
          <defs><linearGradient id="paint0_linearB9On" x1="40" y1="15" x2="40" y2="65" gradientUnits="userSpaceOnUse"><stop stop-color="#5AB1DC"/><stop offset="0.256735" stop-color="#8396B0"/><stop offset="0.500792" stop-color="#A37F86"/><stop offset="1" stop-color="#EE5031"/></linearGradient></defs>
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.3375 75 75 59.32 75 40C75 20.6625 59.3375 5 40 5C20.6625 5 5 20.6625 5 40C5 59.32 20.6625 75 40 75ZM57.5 15H53.75L40 37.5L26.25 15H22.5L37.5 40L22.5 65H26.25L40 42.5L53.75 65H57.5L42.5 40L57.5 15Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M75 40C75 59.32 59.3375 75 40 75C20.6625 75 5 59.32 5 40C5 20.6625 20.6625 5 40 5C59.3375 5 75 20.6625 75 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M53.75 15H57.5L42.5 40L57.5 65H53.75L40 42.5L26.25 65H22.5L37.5 40L22.5 15H26.25L40 37.5L53.75 15Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-macos', BrandsMacos)
export default BrandsMacos
