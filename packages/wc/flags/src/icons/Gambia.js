
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsGambia = {
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
          <g clip-path="url(#clip0iF1r)"><path d="M120 0H0V40H120V0Z" fill="#EB5757"/><path d="M120 39.99H0V79.99H120V39.99Z" fill="#219653"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M120 40H0" stroke="#2F80ED" stroke-width="16"/></g>
          <defs><clipPath id="clip0iF1r"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip07-7t)"><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 39.99H0V79.99H80V39.99Z" fill="#219653"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M80 40H0" stroke="#2F80ED" stroke-width="16"/></g>
          <defs><clipPath id="clip07-7t"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0KLCI" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0KLCI)"><g clip-path="url(#clip0KLCI)"><path d="M80 0H0V40H80V0Z" fill="#EB5757"/><path d="M80 39.99H0V79.99H80V39.99Z" fill="#219653"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M80 40H0" stroke="#2F80ED" stroke-width="16"/></g></g>
          <defs><clipPath id="clip0KLCI"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-gambia', FlagsGambia)
export default FlagsGambia
