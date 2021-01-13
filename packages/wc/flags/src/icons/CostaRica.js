
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsCostaRica = {
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
          <rect
            width="120"
            height="80"
            fill="#F2F2F2"
          />
          <rect
            width="120"
            height="14"
            fill="#2F80ED"
          />
          <rect
            y="66"
            width="120"
            height="14"
            fill="#2F80ED"
          />
          <rect
            y="26"
            width="120"
            height="28"
            fill="#EB5757"
          />
        `}
        ${variant === "square" && svg`
          <rect
            width="80"
            height="80"
            fill="#F2F2F2"
          />
          <rect
            width="80"
            height="14"
            fill="#2F80ED"
          />
          <rect
            y="66"
            width="80"
            height="14"
            fill="#2F80ED"
          />
          <rect
            y="26"
            width="80"
            height="28"
            fill="#EB5757"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask05pIa" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask05pIa)"><rect width="80" height="80" fill="#F2F2F2"/><rect width="80" height="14" fill="#2F80ED"/><rect y="66" width="80" height="14" fill="#2F80ED"/><rect y="26" width="80" height="28" fill="#EB5757"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-costa-rica', FlagsCostaRica)
export default FlagsCostaRica
