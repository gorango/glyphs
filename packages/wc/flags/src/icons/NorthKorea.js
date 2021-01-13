
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsNorthKorea = {
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
          <g clip-path="url(#clip0j7Mc)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 39.9999H0" stroke="#F2F2F2" stroke-width="48"/><path d="M120 40H0" stroke="#EB5757" stroke-width="36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M41 54C48.732 54 55 47.732 55 40C55 32.268 48.732 26 41 26C33.268 26 27 32.268 27 40C27 47.732 33.268 54 41 54ZM44.1432 35.6738L41 26L37.8568 35.6738H27.6852L35.9142 41.6525L32.771 51.3262L41 45.3475L49.229 51.3262L46.0858 41.6525L54.3148 35.6738H44.1432Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0j7Mc"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip04fmK)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 39.9999H0" stroke="#F2F2F2" stroke-width="48"/><path d="M80 40H0" stroke="#EB5757" stroke-width="36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M41 54C48.732 54 55 47.732 55 40C55 32.268 48.732 26 41 26C33.268 26 27 32.268 27 40C27 47.732 33.268 54 41 54ZM44.1432 35.6738L41 26L37.8568 35.6738H27.6852L35.9142 41.6525L32.771 51.3262L41 45.3475L49.229 51.3262L46.0858 41.6525L54.3148 35.6738H44.1432Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip04fmK"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0lSpz" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0lSpz)"><g clip-path="url(#clip0lSpz)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 39.9999H0" stroke="#F2F2F2" stroke-width="48"/><path d="M80 40H0" stroke="#EB5757" stroke-width="36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M41 54C48.732 54 55 47.732 55 40C55 32.268 48.732 26 41 26C33.268 26 27 32.268 27 40C27 47.732 33.268 54 41 54ZM44.1432 35.6738L41 26L37.8568 35.6738H27.6852L35.9142 41.6525L32.771 51.3262L41 45.3475L49.229 51.3262L46.0858 41.6525L54.3148 35.6738H44.1432Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0lSpz"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-north-korea', FlagsNorthKorea)
export default FlagsNorthKorea
