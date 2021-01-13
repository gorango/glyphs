
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsArmenia = {
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
          <g clip-path="url(#clip0ctpL)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#F2994A"/></g>
          <defs><clipPath id="clip0ctpL"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip03H6J)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#F2994A"/></g>
          <defs><clipPath id="clip03H6J"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0-hvu" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0-hvu)"><g clip-path="url(#clip0-hvu)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#F2994A"/></g></g>
          <defs><clipPath id="clip0-hvu"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-armenia', FlagsArmenia)
export default FlagsArmenia
