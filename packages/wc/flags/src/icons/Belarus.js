
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsBelarus = {
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
          <g clip-path="url(#clip0xAvA)"><path d="M120.13 0.0012207H0.130371V80.0012H120.13V0.0012207Z" fill="#219653"/><path d="M0 53.3333H120V0H0" fill="#EB5757"/><rect width="24" height="80" fill="#EB5757"/><path d="M6 2L10 9L6 16L2 9L6 2Z" fill="#F2F2F2"/><path d="M6 20L10 27L6 34L2 27L6 20Z" fill="#F2F2F2"/><path d="M6 46L10 53L6 60L2 53L6 46Z" fill="#F2F2F2"/><path d="M6 64L10 71L6 78L2 71L6 64Z" fill="#F2F2F2"/><path d="M18 2L22 9L18 16L14 9L18 2Z" fill="#F2F2F2"/><path d="M18 20L22 27L18 34L14 27L18 20Z" fill="#F2F2F2"/><path d="M12 29L18 40L12 51L6 40L12 29Z" fill="#F2F2F2"/><path d="M18 46L22 53L18 60L14 53L18 46Z" fill="#F2F2F2"/><path d="M18 64L22 71L18 78L14 71L18 64Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0xAvA"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip02wEz)"><path d="M80.0869 0.0012207H0.0869141V80.0012H80.0869V0.0012207Z" fill="#219653"/><path d="M0 53.3333H80V0H0" fill="#EB5757"/><rect width="24" height="80" fill="#EB5757"/><path d="M6 2L10 9L6 16L2 9L6 2Z" fill="#F2F2F2"/><path d="M6 20L10 27L6 34L2 27L6 20Z" fill="#F2F2F2"/><path d="M6 46L10 53L6 60L2 53L6 46Z" fill="#F2F2F2"/><path d="M6 64L10 71L6 78L2 71L6 64Z" fill="#F2F2F2"/><path d="M18 2L22 9L18 16L14 9L18 2Z" fill="#F2F2F2"/><path d="M18 20L22 27L18 34L14 27L18 20Z" fill="#F2F2F2"/><path d="M12 29L18 40L12 51L6 40L12 29Z" fill="#F2F2F2"/><path d="M18 46L22 53L18 60L14 53L18 46Z" fill="#F2F2F2"/><path d="M18 64L22 71L18 78L14 71L18 64Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip02wEz"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0fzSs" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0fzSs)"><g clip-path="url(#clip0fzSs)"><path d="M80.0869 0.0012207H0.0869141V80.0012H80.0869V0.0012207Z" fill="#219653"/><path d="M0 53.3333H80V0H0" fill="#EB5757"/><rect width="24" height="80" fill="#EB5757"/><path d="M6 2L10 9L6 16L2 9L6 2Z" fill="#F2F2F2"/><path d="M6 20L10 27L6 34L2 27L6 20Z" fill="#F2F2F2"/><path d="M6 46L10 53L6 60L2 53L6 46Z" fill="#F2F2F2"/><path d="M6 64L10 71L6 78L2 71L6 64Z" fill="#F2F2F2"/><path d="M18 2L22 9L18 16L14 9L18 2Z" fill="#F2F2F2"/><path d="M18 20L22 27L18 34L14 27L18 20Z" fill="#F2F2F2"/><path d="M12 29L18 40L12 51L6 40L12 29Z" fill="#F2F2F2"/><path d="M18 46L22 53L18 60L14 53L18 46Z" fill="#F2F2F2"/><path d="M18 64L22 71L18 78L14 71L18 64Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0fzSs"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-belarus', FlagsBelarus)
export default FlagsBelarus
