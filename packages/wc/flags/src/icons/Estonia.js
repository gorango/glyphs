
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsEstonia = {
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
            fill="#333333"
          />
          <path
            d="M120 0.0788574H0V26.7455H120V0.0788574Z"
            fill="#2F80ED"
          />
          <path
            d="M120 53H0V79.6667H120V53Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#333333"
          />
          <path
            d="M80 0.0788574H0V26.7455H80V0.0788574Z"
            fill="#2F80ED"
          />
          <path
            d="M80 53H0V79.6667H80V53Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask03cOB" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask03cOB)"><path d="M80 0H0V80H80V0Z" fill="#333333"/><path d="M80 0.0789795H0V26.7456H80V0.0789795Z" fill="#2F80ED"/><path d="M80 53H0V79.6667H80V53Z" fill="#F2F2F2"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-estonia', FlagsEstonia)
export default FlagsEstonia
