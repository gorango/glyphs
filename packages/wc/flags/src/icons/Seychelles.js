
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSeychelles = {
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
          <g clip-path="url(#clip0D54h)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0D54h"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0-alS)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0-alS"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0_eAN" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0_eAN)"><g clip-path="url(#clip0_eAN)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M40 0L0 0V80L40 0Z" fill="#2F80ED"/><path d="M40 0H88L0 80L40 0Z" fill="#F2C94C"/><path d="M120 24.5V0H88L0 80L120 24.5Z" fill="#EB5757"/><path d="M120 24.5V53.5L0 80L120 24.5Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0_eAN"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-seychelles', FlagsSeychelles)
export default FlagsSeychelles
