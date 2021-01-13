
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSweden = {
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
        ${variant === "rectangle" && svg`
          <path
            d="M120 0H0V80H120V0Z"
            fill="#2F80ED"
          />
          <path
            d="M0 40H120"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M42 80V0"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#2F80ED"
          />
          <path
            d="M0 40H80"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M28 80V0"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0PzKK" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0PzKK)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M0 40H80" stroke="#F2C94C" stroke-width="15"/><path d="M28 80V0" stroke="#F2C94C" stroke-width="15"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-sweden', FlagsSweden)
export default FlagsSweden
