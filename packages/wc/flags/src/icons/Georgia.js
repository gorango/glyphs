
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsGeorgia = {
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
            d="M0 40H120"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M60 80V0"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M18 17H34"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M26 25V9"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M18 64H34"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M26 72V56"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M86 17H102"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M94 25V9"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M86 64H102"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M94 72V56"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#F2F2F2"
          />
          <path
            d="M0 40H80"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M40 80V0"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M9 17H25"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M17 25V9"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M9 64H25"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M17 72V56"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M54.3333 17H70.3333"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M62.3333 25V9"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M54.3333 64H70.3333"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M62.3333 72V56"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask06zAk" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask06zAk)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M0 40H80" stroke="#EB5757" stroke-width="16"/><path d="M40 80V0" stroke="#EB5757" stroke-width="16"/><path d="M9 17H25" stroke="#EB5757" stroke-width="6"/><path d="M17 25V9" stroke="#EB5757" stroke-width="6"/><path d="M9 64H25" stroke="#EB5757" stroke-width="6"/><path d="M17 72V56" stroke="#EB5757" stroke-width="6"/><path d="M54.3333 17H70.3333" stroke="#EB5757" stroke-width="6"/><path d="M62.3333 25V9" stroke="#EB5757" stroke-width="6"/><path d="M54.3333 64H70.3333" stroke="#EB5757" stroke-width="6"/><path d="M62.3333 72V56" stroke="#EB5757" stroke-width="6"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-georgia', FlagsGeorgia)
export default FlagsGeorgia
