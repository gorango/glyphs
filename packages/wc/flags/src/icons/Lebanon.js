
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsLebanon = {
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
            d="M120 39.9999H0"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74 49.5455L60 25L46 49.5455H57.2V55H62.8V49.5455H74Z"
            fill="#219653"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#EB5757"
          />
          <path
            d="M80 39.9999H0"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54 49.5455L40 25L26 49.5455H37.2V55H42.8V49.5455H54Z"
            fill="#219653"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0F-Mj" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0F-Mj)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 39.9999H0" stroke="#F2F2F2" stroke-width="35"/><path fill-rule="evenodd" clip-rule="evenodd" d="M54 49.5455L40 25L26 49.5455H37.2V55H42.8V49.5455H54Z" fill="#219653"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-lebanon', FlagsLebanon)
export default FlagsLebanon
