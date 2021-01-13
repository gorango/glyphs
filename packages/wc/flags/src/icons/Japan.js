
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsJapan = {
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
            fill="#F2F2F2"
          />
          <circle
            cx="60"
            cy="40"
            r="24"
            fill="#EB5757"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#F2F2F2"
          />
          <circle
            cx="40"
            cy="40"
            r="24"
            fill="#EB5757"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0dP3K" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0dP3K)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><circle cx="40" cy="40" r="24" fill="#EB5757"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-japan', FlagsJapan)
export default FlagsJapan
