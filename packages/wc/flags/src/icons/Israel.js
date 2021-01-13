
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsIsrael = {
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
            fill="#F2F2F2"
          />
          <path
            d="M120 12H0"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M120 68H0"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M60 26L72.1244 47H47.8756L60 26Z"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
          />
          <path
            d="M60 54L72.1244 33H47.8756L60 54Z"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#F2F2F2"
          />
          <path
            d="M80 12H0"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M80 68H0"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M40 26L52.1244 47H27.8756L40 26Z"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
          />
          <path
            d="M40 54L52.1244 33H27.8756L40 54Z"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0WGUG" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0WGUG)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 12H0" stroke="#2F80ED" stroke-width="13"/><path d="M80 68H0" stroke="#2F80ED" stroke-width="13"/><path d="M40 26L52.1244 47H27.8756L40 26Z" stroke="#2F80ED" stroke-width="3" stroke-linecap="square"/><path d="M40 54L52.1244 33H27.8756L40 54Z" stroke="#2F80ED" stroke-width="3" stroke-linecap="square"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-israel', FlagsIsrael)
export default FlagsIsrael
