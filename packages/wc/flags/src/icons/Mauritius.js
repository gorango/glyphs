
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsMauritius = {
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
          <g clip-path="url(#clip0Ksf9)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g>
          <defs><clipPath id="clip0Ksf9"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0GAy1)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g>
          <defs><clipPath id="clip0GAy1"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0r236" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0r236)"><g clip-path="url(#clip0r236)"><path d="M120 -0.0102539H0V19.9897H120V-0.0102539Z" fill="#EB5757"/><path d="M120 19.9897H0V39.9897H120V19.9897Z" fill="#2F80ED"/><path d="M120 39.9897H0V59.9897H120V39.9897Z" fill="#F2C94C"/><path d="M120 59.9897H0V79.9897H120V59.9897Z" fill="#219653"/></g></g>
          <defs><clipPath id="clip0r236"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-mauritius', FlagsMauritius)
export default FlagsMauritius
