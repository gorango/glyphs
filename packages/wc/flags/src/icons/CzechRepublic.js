
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsCzechRepublic = {
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
            d="M120 40V80H0V40H120Z"
            fill="#EB5757"
          />
          <path
            d="M120 0V40H0V0H120Z"
            fill="#F2F2F2"
          />
          <path
            d="M56 40L0 0V80L56 40Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 40V80H0V40H80Z"
            fill="#EB5757"
          />
          <path
            d="M80 0V40H0V0H80Z"
            fill="#F2F2F2"
          />
          <path
            d="M37.3333 40L0 0V80L37.3333 40Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0wQP4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0wQP4)"><path d="M80 40V80H0V40H80Z" fill="#EB5757"/><path d="M80 0V40H0V0H80Z" fill="#F2F2F2"/><path d="M37.3333 40L0 0V80L37.3333 40Z" fill="#2F80ED"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-czech-republic', FlagsCzechRepublic)
export default FlagsCzechRepublic
