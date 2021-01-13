
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsLaos = {
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
          <path
            d="M120 0H0V80H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M120 26.6667H0V53.3333H120V26.6667Z"
            fill="#2F80ED"
          />
          <path
            d="M72 40C72 33.3726 66.6274 28 60 28C53.3726 28 48 33.3726 48 40C48 46.6274 53.3726 52 60 52C66.6274 52 72 46.6274 72 40Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#EB5757"
          />
          <path
            d="M80 26.6667H0V53.3333H80V26.6667Z"
            fill="#2F80ED"
          />
          <path
            d="M52 40C52 33.3726 46.6274 28 40 28C33.3726 28 28 33.3726 28 40C28 46.6274 33.3726 52 40 52C46.6274 52 52 46.6274 52 40Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0A94j" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0A94j)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 26.6667H0V53.3333H80V26.6667Z" fill="#2F80ED"/><path d="M52 40C52 33.3726 46.6274 28 40 28C33.3726 28 28 33.3726 28 40C28 46.6274 33.3726 52 40 52C46.6274 52 52 46.6274 52 40Z" fill="#F2F2F2"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-laos', FlagsLaos)
export default FlagsLaos
