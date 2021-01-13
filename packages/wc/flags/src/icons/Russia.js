
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsRussia = {
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
          <g clip-path="url(#clip0nCVV)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 0H0V26.6667H120V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M120 53.3333H0V79.9999H120V53.3333Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0nCVV"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0P6m4)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M80 53.3334H0V80H80V53.3334Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0P6m4"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0iy_2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0iy_2)"><g clip-path="url(#clip0iy_2)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path opacity="0.9" d="M80 53.3334H0V80H80V53.3334Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0iy_2"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-russia', FlagsRussia)
export default FlagsRussia
