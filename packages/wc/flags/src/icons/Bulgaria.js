
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBulgaria = {
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
          <g clip-path="url(#clip0eytr)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M120 0H0V26.6667H120V0Z" fill="#F2F2F2"/><path d="M120 53.3301H0V80.0001H120V53.3301Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0eytr"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0qvaM)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path d="M80 53.33H0V80H80V53.33Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0qvaM"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0k2ej" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0k2ej)"><g clip-path="url(#clip0k2ej)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path d="M80 53.33H0V80H80V53.33Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0k2ej"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-bulgaria', FlagsBulgaria)
export default FlagsBulgaria
