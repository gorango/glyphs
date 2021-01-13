
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreEquals = {
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
            d="M17.7012 48L61.7012 48"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M17.7012 32L61.7012 32"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M17.7012 48L37.7012 48L41.7012 48L61.7012 48"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M17.7012 32L37.7012 32L41.7012 32L61.7012 32"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M17.7012 48L37.7012 48L41.7012 48L61.7012 48"
            stroke="#6FCF97"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M17.7012 32L37.7012 32L41.7012 32L61.7012 32"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M61.7012 48H17.7012M61.7012 32H17.7012"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M18 29.5C16.6193 29.5 15.5 30.6193 15.5 32C15.5 33.3807 16.6193 34.5 18 34.5L62 34.5C63.3807 34.5 64.5 33.3807 64.5 32C64.5 30.6193 63.3807 29.5 62 29.5L18 29.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M18 45.5C16.6193 45.5 15.5 46.6193 15.5 48C15.5 49.3807 16.6193 50.5 18 50.5L62 50.5C63.3807 50.5 64.5 49.3807 64.5 48C64.5 46.6193 63.3807 45.5 62 45.5L18 45.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-equals', CoreEquals)
export default CoreEquals
