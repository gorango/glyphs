
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsGuineaBissau = {
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
          <g clip-path="url(#clip0hzBR)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g>
          <defs><clipPath id="clip0hzBR"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0yTNy)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g>
          <defs><clipPath id="clip0yTNy"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0OUGI" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0OUGI)"><g clip-path="url(#clip0OUGI)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#F2C94C"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#EB5757"/><path d="M18 27.9897L20.6803 36.3006L29.4127 36.2815L22.3368 41.3989L25.0534 49.698L18 44.5497L10.9466 49.698L13.6632 41.3989L6.58732 36.2815L15.3197 36.3006L18 27.9897Z" fill="#333333"/></g></g>
          <defs><clipPath id="clip0OUGI"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-guinea-bissau', FlagsGuineaBissau)
export default FlagsGuineaBissau
