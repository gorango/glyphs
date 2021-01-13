
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsDjibouti = {
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
          <g clip-path="url(#clip0Lgv2)"><path d="M120 -0.0102539H0V39.9897H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M20 29.9897L22.2336 36.9155L29.5106 36.8996L23.614 41.164L25.8779 48.0799L20 43.7897L14.1221 48.0799L16.386 41.164L10.4894 36.8996L17.7664 36.9155L20 29.9897Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0Lgv2"><rect width="120" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0BPqn)"><path d="M120 -0.0102539H0V39.9897H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M20 29.9897L22.2336 36.9155L29.5106 36.8996L23.614 41.164L25.8779 48.0799L20 43.7897L14.1221 48.0799L16.386 41.164L10.4894 36.8996L17.7664 36.9155L20 29.9897Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0BPqn"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0zlrr" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0zlrr)"><g clip-path="url(#clip0zlrr)"><path d="M120 -0.0102539H0V39.9897H120V-0.0102539Z" fill="#56CCF2"/><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#219653"/><path d="M56 40L0 0V80L56 40Z" fill="#F2F2F2"/><path d="M20 29.9897L22.2336 36.9155L29.5106 36.8996L23.614 41.164L25.8779 48.0799L20 43.7897L14.1221 48.0799L16.386 41.164L10.4894 36.8996L17.7664 36.9155L20 29.9897Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0zlrr"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-djibouti', FlagsDjibouti)
export default FlagsDjibouti
