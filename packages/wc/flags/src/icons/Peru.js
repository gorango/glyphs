
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsPeru = {
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
          <g clip-path="url(#clip0MPth)"><path d="M40 -0.0102539H0V79.9897H40V-0.0102539Z" fill="#EB5757"/><path d="M80 -0.0102539H40V79.9897H80V-0.0102539Z" fill="#F2F2F2"/><path d="M120 -0.0102539H80V79.9897H120V-0.0102539Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0MPth"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0l1qa)"><path d="M26.6667 -0.0102539H0V79.9897H26.6667V-0.0102539Z" fill="#EB5757"/><path d="M53.3334 -0.0102539H26.6667V79.9897H53.3334V-0.0102539Z" fill="#F2F2F2"/><path d="M79.9999 -0.0102539H53.3333V79.9897H79.9999V-0.0102539Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0l1qa"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0X4LX" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0X4LX)"><g clip-path="url(#clip0X4LX)"><path d="M26.6667 -0.0102539H0V79.9897H26.6667V-0.0102539Z" fill="#EB5757"/><path d="M53.3334 -0.0102539H26.6667V79.9897H53.3334V-0.0102539Z" fill="#F2F2F2"/><path d="M79.9999 -0.0102539H53.3333V79.9897H79.9999V-0.0102539Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0X4LX"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-peru', FlagsPeru)
export default FlagsPeru
