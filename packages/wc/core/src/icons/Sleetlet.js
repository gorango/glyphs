
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreSleetlet = {
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
            d="M40.0004 12L56 50.3203L40.0004 68L24 50.3203L40.0004 12Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M40.0004 12L56 50.3203L40.0004 68L24 50.3203L40.0004 12Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M40.0004 12L56 50.3203L40.0004 68L24 50.3203L40.0004 12Z"
            fill="#56CCF2"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40.0004 12L56 50.3203L40.0004 68L24 50.3203L40.0004 12Z"
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
            d="M40.0005 10C40.8073 10 41.5351 10.4849 41.846 11.2294L57.8456 49.5497C58.1442 50.2647 58.0029 51.0878 57.483 51.6623L41.4833 69.342C41.1042 69.761 40.5655 70 40.0005 70C39.4354 70 38.8967 69.761 38.5175 69.342L22.5172 51.6623C21.9972 51.0878 21.8559 50.2647 22.1545 49.5497L38.1549 11.2294C38.4657 10.4848 39.1936 9.99999 40.0005 10ZM26.3347 49.9195L40.0004 65.0194L53.6654 49.9195L40.0004 17.1908L26.3347 49.9195Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-sleetlet', CoreSleetlet)
export default CoreSleetlet
