
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsMali = {
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
          <g clip-path="url(#clip0s0Ga)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#219653"/><path d="M120 0H80.001V80H120V0Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0s0Ga"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0Wx2D)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#219653"/><path d="M80.0001 0H53.334V80H80.0001V0Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0Wx2D"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0cvXz" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0cvXz)"><g clip-path="url(#clip0cvXz)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#219653"/><path d="M80.0001 0H53.334V80H80.0001V0Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0cvXz"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-mali', FlagsMali)
export default FlagsMali
