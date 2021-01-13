
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsDemocraticRepublicOfTheCongo = {
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
          <g clip-path="url(#clip01Rua)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 -0.010009L0 79.99" stroke="#F2C94C" stroke-width="24"/><path d="M120 -0.010009L0 79.99" stroke="#EB5757" stroke-width="14"/><path d="M22 7.98999L25.127 17.686L35.3148 17.6638L27.0596 23.634L30.229 33.3162L22 27.31L13.771 33.3162L16.9404 23.634L8.68521 17.6638L18.873 17.686L22 7.98999Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip01Rua"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0QQR9)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 -0.010009L0 79.99" stroke="#F2C94C" stroke-width="24"/><path d="M120 -0.010009L0 79.99" stroke="#EB5757" stroke-width="14"/><path d="M22 7.98999L25.127 17.686L35.3148 17.6638L27.0596 23.634L30.229 33.3162L22 27.31L13.771 33.3162L16.9404 23.634L8.68521 17.6638L18.873 17.686L22 7.98999Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0QQR9"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0BgB3" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0BgB3)"><g clip-path="url(#clip0BgB3)"><path d="M120 0H0V80H120V0Z" fill="#2F80ED"/><path d="M120 -0.010009L0 79.99" stroke="#F2C94C" stroke-width="24"/><path d="M120 -0.010009L0 79.99" stroke="#EB5757" stroke-width="14"/><path d="M22 7.98999L25.127 17.686L35.3148 17.6638L27.0596 23.634L30.229 33.3162L22 27.31L13.771 33.3162L16.9404 23.634L8.68521 17.6638L18.873 17.686L22 7.98999Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0BgB3"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-democratic-republic-of-the-congo', FlagsDemocraticRepublicOfTheCongo)
export default FlagsDemocraticRepublicOfTheCongo
