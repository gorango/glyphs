
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBenin = {
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
          <g clip-path="url(#clip0-X9o)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#219653"/><path d="M120 0H39.9991V40H120V0Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0-X9o"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0OJwn)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M19.9991 0H-20V80H19.9991V0Z" fill="#219653"/><path d="M100 0H19.9991V40H100V0Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0OJwn"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0j4TJ" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0j4TJ)"><g clip-path="url(#clip0j4TJ)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M19.9991 0H-20V80H19.9991V0Z" fill="#219653"/><path d="M100 0H19.9991V40H100V0Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0j4TJ"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-benin', FlagsBenin)
export default FlagsBenin
