
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsUnitedArabEmirates = {
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
          <g filter="url(#filter0_dpNmv)"><path d="M124 0H44V80H124V0Z" fill="#F2F2F2"/><path d="M124 0H44V27H124V0Z" fill="#219653"/><path opacity="0.9" d="M124 53H44V80H124V53Z" fill="#333333"/><path d="M44 0H4V80H44V0Z" fill="#EB5757"/></g>
          <defs><filter id="filter0_dpNmv" x="0" y="0" width="128" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        `}
        ${variant === "square" && svg`
          <g filter="url(#filter0_d1j0t)"><path d="M84.0003 0H30.667V80H84.0003V0Z" fill="#F2F2F2"/><path d="M84.0003 0H30.667V27H84.0003V0Z" fill="#219653"/><path opacity="0.9" d="M84.0003 53H30.667V80H84.0003V53Z" fill="#333333"/><path d="M30.6667 0H4V80H30.6667V0Z" fill="#EB5757"/></g>
          <defs><filter id="filter0_d1j0t" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0w2WP" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0w2WP)"><g filter="url(#filter0_dw2WP)"><path d="M80.0003 0H26.667V80H80.0003V0Z" fill="#F2F2F2"/><path d="M80.0003 0H26.667V27H80.0003V0Z" fill="#219653"/><path opacity="0.9" d="M80.0003 53H26.667V80H80.0003V53Z" fill="#333333"/><path d="M26.6667 0H0V80H26.6667V0Z" fill="#EB5757"/></g></g>
          <defs><filter id="filter0_dw2WP" x="-4" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-united-arab-emirates', FlagsUnitedArabEmirates)
export default FlagsUnitedArabEmirates
