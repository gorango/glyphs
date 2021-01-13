
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsRepublicOfTheCongo = {
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
          <g clip-path="url(#clip0JKbG)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M120 80H0L120 0V80Z" fill="#EB5757"/><path d="M121.5 -24.0101L7.00029 95.4899" stroke="#F2C94C" stroke-width="32"/></g>
          <defs><clipPath id="clip0JKbG"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0jqzI)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M80 80H0L80 0V80Z" fill="#EB5757"/><path d="M101.5 -24.0101L-12.9997 95.4899" stroke="#F2C94C" stroke-width="32"/></g>
          <defs><clipPath id="clip0jqzI"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0Dfrf" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0Dfrf)"><g clip-path="url(#clip0Dfrf)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M80 80H0L80 0V80Z" fill="#EB5757"/><path d="M101.5 -24.0101L-12.9997 95.4899" stroke="#F2C94C" stroke-width="32"/></g></g>
          <defs><clipPath id="clip0Dfrf"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-republic-of-the-congo', FlagsRepublicOfTheCongo)
export default FlagsRepublicOfTheCongo
