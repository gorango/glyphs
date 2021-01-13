
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsPortugal = {
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
            d="M48 0V41.3043V80H0V0H48Z"
            fill="#219653"
          />
          <path
            d="M48 58C57.9411 58 66 49.9411 66 40C66 30.0589 57.9411 22 48 22C38.0589 22 30 30.0589 30 40C30 49.9411 38.0589 58 48 58Z"
            fill="#F2C94C"
          />
          <path
            d="M38 30H58V42C58 47.5228 53.5228 52 48 52C42.4772 52 38 47.5228 38 42V30Z"
            fill="#F2F2F2"
          />
          <path
            d="M40.5 32.5H55.5V42C55.5 46.1421 52.1421 49.5 48 49.5C43.8579 49.5 40.5 46.1421 40.5 42V32.5Z"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "square" && svg`
          <path
            d="M80 0H0V80H80V0Z"
            fill="#EB5757"
          />
          <path
            d="M32 0V41.3043V80H0V0H32Z"
            fill="#219653"
          />
          <path
            d="M32 58C41.9411 58 50 49.9411 50 40C50 30.0589 41.9411 22 32 22C22.0589 22 14 30.0589 14 40C14 49.9411 22.0589 58 32 58Z"
            fill="#F2C94C"
          />
          <path
            d="M22 30H42V42C42 47.5228 37.5228 52 32 52C26.4772 52 22 47.5228 22 42V30Z"
            fill="#F2F2F2"
          />
          <path
            d="M24.5 32.5H39.5V42C39.5 46.1421 36.1421 49.5 32 49.5C27.8579 49.5 24.5 46.1421 24.5 42V32.5Z"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "circle" && svg`
          <mask id="mask0AQ5s" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0AQ5s)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M32 0V41.3043V80H0V0H32Z" fill="#219653"/><path d="M32 58C41.9411 58 50 49.9411 50 40C50 30.0589 41.9411 22 32 22C22.0589 22 14 30.0589 14 40C14 49.9411 22.0589 58 32 58Z" fill="#F2C94C"/><path d="M22 30H42V42C42 47.5228 37.5228 52 32 52C26.4772 52 22 47.5228 22 42V30Z" fill="#F2F2F2"/><path d="M24.5 32.5H39.5V42C39.5 46.1421 36.1421 49.5 32 49.5C27.8579 49.5 24.5 46.1421 24.5 42V32.5Z" stroke="#EB5757" stroke-width="5"/></g>
        `}
      </g>
    </svg>
  `
}

define('flags-portugal', FlagsPortugal)
export default FlagsPortugal
