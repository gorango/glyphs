
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsMadagascar = {
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
          <g clip-path="url(#clip0zesq)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#EB5757"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0zesq"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip06HN6)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#EB5757"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip06HN6"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0Oah7" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0Oah7)"><g clip-path="url(#clip0Oah7)"><path d="M119.6 -0.0102539H39.6001V39.9897H119.6V-0.0102539Z" fill="#EB5757"/><path d="M119.6 39.9897H39.6001V79.9897H119.6V39.9897Z" fill="#219653"/><path d="M39.6001 -0.0102539H-0.399902V79.9897H39.6001V-0.0102539Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0Oah7"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-madagascar', FlagsMadagascar)
export default FlagsMadagascar
