
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsRomania = {
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
            fill="#F2C94C"
          />
          <path
            d="M120 0H80V80H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M40 0H0V80H40V0Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#F2C94C"
          />
          <path
            d="M80.0002 0H53.3335V80H80.0002V0Z"
            fill="#EB5757"
          />
          <path
            d="M26.6667 0H0V80H26.6667V0Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0sUSC" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0sUSC)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80.0002 0H53.3335V80H80.0002V0Z" fill="#EB5757"/><path d="M26.6667 0H0V80H26.6667V0Z" fill="#2F80ED"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-romania', FlagsRomania)
export default FlagsRomania
