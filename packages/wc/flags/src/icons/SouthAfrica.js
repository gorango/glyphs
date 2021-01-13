
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSouthAfrica = {
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
          <g clip-path="url(#clip0muH8)"><path d="M120 0H0V40H120V0Z" fill="#EB5757"/><path d="M120 40H0V80H120V40Z" fill="#2F80ED"/><path d="M56 40L0 0V80L56 40Z" fill="#333333"/><path d="M0 0L56 40M120 40H56M0 80L56 40" stroke="#F2F2F2" stroke-width="28"/><path d="M0 0L56 40M120 40H56M0 80L56 40" stroke="#219653" stroke-width="16"/><path d="M-5 9.98975L37 39.9897L-5 69.9897" stroke="#F2C94C" stroke-width="6"/></g>
          <defs><clipPath id="clip0muH8"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0_MSq)"><path d="M120 0H0V40H120V0Z" fill="#EB5757"/><path d="M120 40H0V80H120V40Z" fill="#2F80ED"/><path d="M56 40L0 0V80L56 40Z" fill="#333333"/><path d="M0 0L56 40M120 40H56M0 80L56 40" stroke="#F2F2F2" stroke-width="28"/><path d="M0 0L56 40M120 40H56M0 80L56 40" stroke="#219653" stroke-width="16"/><path d="M-5 9.98975L37 39.9897L-5 69.9897" stroke="#F2C94C" stroke-width="6"/></g>
          <defs><clipPath id="clip0_MSq"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0bT5h" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0bT5h)"><g clip-path="url(#clip0bT5h)"><path d="M120 0H0V40H120V0Z" fill="#EB5757"/><path d="M120 40H0V80H120V40Z" fill="#2F80ED"/><path d="M56 40L0 0V80L56 40Z" fill="#333333"/><path d="M0 0L56 40M120 40H56M0 80L56 40" stroke="#F2F2F2" stroke-width="28"/><path d="M0 0L56 40M120 40H56M0 80L56 40" stroke="#219653" stroke-width="16"/><path d="M-5 9.98975L37 39.9897L-5 69.9897" stroke="#F2C94C" stroke-width="6"/></g></g>
          <defs><clipPath id="clip0bT5h"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-south-africa', FlagsSouthAfrica)
export default FlagsSouthAfrica
