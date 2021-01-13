
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsIceland = {
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
            fill="#2F80ED"
          />
          <path
            d="M0 40H120"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M38 80V0"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M0 40H120"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M38 80V0"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#2F80ED"
          />
          <path
            d="M0 40H80"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M25.3333 80V0"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M0 40H80"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M25.3333 80V0"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0jlq4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0jlq4)"><path d="M80 0H0V80H80V0Z" fill="#2F80ED"/><path d="M0 40H80" stroke="#F2F2F2" stroke-width="17"/><path d="M25.3333 80V0" stroke="#F2F2F2" stroke-width="17"/><path d="M0 40H80" stroke="#EB5757" stroke-width="8"/><path d="M25.3333 80V0" stroke="#EB5757" stroke-width="8"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-iceland', FlagsIceland)
export default FlagsIceland
