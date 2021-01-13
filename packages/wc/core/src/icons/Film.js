
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreFilm = {
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
        ${variant === "path" && svg`
          <path
            d="M22 12H58V68H22V12Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 68V12"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 12V68"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 40H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 20H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 60H58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 28H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 52H58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 36H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 44H58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 44H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 36H58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 52H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 28H58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 60H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 20H58"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <rect
            x="12"
            y="20"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="12"
            y="44"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="12"
            y="28"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="12"
            y="52"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22 68V60H12L12 68"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 12L12 20H22V12"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="12"
            y="36"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="20"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="44"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="28"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="52"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 68V60H58V68"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 12V20H68V12"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="36"
            width="10"
            height="8"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58 12L22 12L22 35L58 35L58 12ZM58 45L22 45L22 68H58V45Z"
            fill="currentColor"
          />
          <path
            d="M22 12V9.5C20.6193 9.5 19.5 10.6193 19.5 12H22ZM58 12H60.5C60.5 10.6193 59.3807 9.5 58 9.5V12ZM22 35H19.5C19.5 36.3807 20.6193 37.5 22 37.5V35ZM58 35V37.5C59.3807 37.5 60.5 36.3807 60.5 35H58ZM58 45H60.5C60.5 43.6193 59.3807 42.5 58 42.5V45ZM22 45V42.5C20.6193 42.5 19.5 43.6193 19.5 45H22ZM22 68H19.5C19.5 69.3807 20.6193 70.5 22 70.5L22 68ZM58 68V70.5C59.3807 70.5 60.5 69.3807 60.5 68H58ZM22 14.5L58 14.5V9.5L22 9.5V14.5ZM24.5 35L24.5 12H19.5L19.5 35H24.5ZM22 37.5L58 37.5L58 32.5L22 32.5V37.5ZM55.5 12L55.5 35H60.5L60.5 12H55.5ZM58 42.5L22 42.5L22 47.5L58 47.5V42.5ZM24.5 68V45H19.5V68H24.5ZM58 65.5H22L22 70.5H58V65.5ZM55.5 45V68H60.5V45H55.5Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="12"
            y="20"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="12"
            y="44"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="12"
            y="28"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="12"
            y="52"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22 68V60H12L12 68"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12 12L12 20H22V12"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="12"
            y="36"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="20"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="44"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="28"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="52"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M68 68V60H58V68"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 12V20H68V12"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="58"
            y="36"
            width="10"
            height="8"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58 12L22 12L22 36L58 36L58 12ZM58 44L22 44L22 68H58V44Z"
            fill="#56CCF2"
          />
          <path
            d="M22 12V10C20.8954 10 20 10.8954 20 12H22ZM58 12H60C60 10.8954 59.1046 10 58 10V12ZM22 36H20C20 37.1046 20.8954 38 22 38V36ZM58 36V38C59.1046 38 60 37.1046 60 36H58ZM58 44H60C60 42.8954 59.1046 42 58 42V44ZM22 44V42C20.8954 42 20 42.8954 20 44H22ZM22 68H20C20 69.1046 20.8954 70 22 70V68ZM58 68V70C59.1046 70 60 69.1046 60 68H58ZM22 14L58 14V10L22 10V14ZM24 36L24 12H20L20 36H24ZM22 38L58 38L58 34L22 34V38ZM56 12L56 36H60L60 12H56ZM58 42L22 42L22 46L58 46V42ZM24 68L24 44H20V68H24ZM58 66H22L22 70H58V66ZM56 44V68H60V44H56Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M12 20H22V28H12V20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 44H22V52H12V44Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 28H22V36H12V28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 52H22V60H12V52Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 36H22V44H12V36Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 20H68V28H58V20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 44H68V52H58V44Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 28H68V36H58V28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 52H68V60H58V52Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 36H68V44H58V36Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 12H22V68H58V12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 20H22M12 20V28M12 20V12M22 20V28M22 20V12M22 28H12M22 28V36M12 28V36M12 44H22M12 44V52M12 44V36M22 44V52M22 44V36M22 52H12M22 52V60M12 52V60M22 36H12M22 60H12M22 60V68M12 60V68M22 68V12M22 68H58M22 12H58M58 20H68M58 20V28M58 20V12M68 20V28M68 20V12M68 28H58M68 28V36M58 28V36M58 44H68M58 44V52M58 44V36M68 44V52M68 44V36M68 52H58M68 52V60M58 52V60M68 36H58M68 60H58M68 60V68M58 60V68M58 68V12M58 40H22"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 10C13.1046 10 14 10.8954 14 12V18H20V12C20 10.8954 20.8954 10 22 10H58C59.1046 10 60 10.8954 60 12V18H66V12C66 10.8954 66.8954 10 68 10C69.1046 10 70 10.8954 70 12V68C70 69.1046 69.1046 70 68 70C66.8954 70 66 69.1046 66 68V62H60V68C60 69.1046 59.1046 70 58 70H22C20.8954 70 20 69.1046 20 68V62H14V68C14 69.1046 13.1046 70 12 70C10.8954 70 10 69.1046 10 68V12C10 10.8954 10.8954 10 12 10ZM20 58V54H14V58H20ZM20 50V46H14V50H20ZM20 42V38H14V42H20ZM20 34V30H14V34H20ZM20 26V22H14V26H20ZM24 66H56V42H24V66ZM24 38H56V14H24V38ZM60 58H66V54H60V58ZM60 50H66V46H60V50ZM60 22V26H66V22H60ZM60 30V34H66V30H60ZM60 38V42H66V38H60Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-film', CoreFilm)
export default CoreFilm
