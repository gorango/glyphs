
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsJamaica = {
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
          <g clip-path="url(#clip0mo94)"><path d="M120 0.0791016H0V80.0774H120V0.0791016Z" fill="#333333"/><path d="M120 0H0L60 40L120 0Z" fill="#219653"/><path d="M120 80H0L60 40L120 80Z" fill="#219653"/><path d="M120 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M0 0.0791016L120 80.0774" stroke="#F2C94C" stroke-width="10"/></g>
          <defs><clipPath id="clip0mo94"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0gLKn)"><path d="M80 0.0791016H0V80.0774H80V0.0791016Z" fill="#333333"/><path d="M80 0H0L40 40L80 0Z" fill="#219653"/><path d="M80 80H0L40 40L80 80Z" fill="#219653"/><path d="M80 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M-2.38419e-06 0.0791016L80 80.0774" stroke="#F2C94C" stroke-width="10"/></g>
          <defs><clipPath id="clip0gLKn"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0bwFj" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0bwFj)"><g clip-path="url(#clip0bwFj)"><path d="M80 0.0791016H0V80.0774H80V0.0791016Z" fill="#333333"/><path d="M80 0H0L40 40L80 0Z" fill="#219653"/><path d="M80 80H0L40 40L80 80Z" fill="#219653"/><path d="M80 0.0791016L0 80.0774" stroke="#F2C94C" stroke-width="10"/><path d="M-2.38419e-06 0.0791016L80 80.0774" stroke="#F2C94C" stroke-width="10"/></g></g>
          <defs><clipPath id="clip0bwFj"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-jamaica', FlagsJamaica)
export default FlagsJamaica
