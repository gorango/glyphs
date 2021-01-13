
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsSenegal = {
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
          <g opacity="0.9"><path d="M40 0H0V80H40V0Z" fill="#219653"/><path d="M80 0H40V80H80V0Z" fill="#F2C94C"/><path d="M120 0H80V80H120V0Z" fill="#EB5757"/></g>
          <path
            d="M60 26L63.127 35.696L73.3148 35.6738L65.0596 41.644L68.229 51.3262L60 45.32L51.771 51.3262L54.9404 41.644L46.6852 35.6738L56.873 35.696L60 26Z"
            fill="#219653"
          />
        `}
        ${variant === "square" && svg`
          <g opacity="0.9"><path d="M26.6667 0H0V80H26.6667V0Z" fill="#219653"/><path d="M53.3332 0H26.6665V80H53.3332V0Z" fill="#F2C94C"/><path d="M80.0002 0H53.3335V80H80.0002V0Z" fill="#EB5757"/></g>
          <path
            d="M40 26L43.127 35.696L53.3148 35.6738L45.0596 41.644L48.229 51.3262L40 45.32L31.771 51.3262L34.9404 41.644L26.6852 35.6738L36.873 35.696L40 26Z"
            fill="#219653"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0P5tX" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0P5tX)"><g opacity="0.9"><path d="M26.6667 0H0V80H26.6667V0Z" fill="#219653"/><path d="M53.3332 0H26.6665V80H53.3332V0Z" fill="#F2C94C"/><path d="M80.0002 0H53.3335V80H80.0002V0Z" fill="#EB5757"/></g><path d="M40 26L43.127 35.696L53.3148 35.6738L45.0596 41.644L48.229 51.3262L40 45.32L31.771 51.3262L34.9404 41.644L26.6852 35.6738L36.873 35.696L40 26Z" fill="#219653"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-senegal', FlagsSenegal)
export default FlagsSenegal
