
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBatteryCar = {
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
            d="M12 30C12 28.8954 12.8954 28 14 28H66C67.1046 28 68 28.8954 68 30V58C68 59.1046 67.1046 60 66 60H14C12.8954 60 12 59.1046 12 58V30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M35 22C35 20.8954 34.1046 20 33 20H21C19.8954 20 19 20.8954 19 22V27.5556C19 27.801 19.199 28 19.4444 28H34.5556C34.801 28 35 27.801 35 27.5556V22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M61 22C61 20.8954 60.1046 20 59 20H47C45.8954 20 45 20.8954 45 22V27.5556C45 27.801 45.199 28 45.4444 28H60.5556C60.801 28 61 27.801 61 27.5556V22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <rect
            x="12"
            y="28"
            width="56"
            height="32"
            rx="2"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 22C35 20.8954 34.1046 20 33 20H21C19.8954 20 19 20.8954 19 22V23.5C19 24.6046 19.8954 25.5 21 25.5H33C34.1046 25.5 35 24.6046 35 23.5V22Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61 22C61 20.8954 60.1046 20 59 20H47C45.8954 20 45 20.8954 45 22V23.5C45 24.6046 45.8954 25.5 47 25.5H59C60.1046 25.5 61 24.6046 61 23.5V22Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="12"
            y="28"
            width="56"
            height="32"
            rx="2"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 22C35 20.8954 34.1046 20 33 20H21C19.8954 20 19 20.8954 19 22V27.5556C19 27.801 19.199 28 19.4444 28H34.5556C34.801 28 35 27.801 35 27.5556V22Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61 22C61 20.8954 60.1046 20 59 20H47C45.8954 20 45 20.8954 45 22V27.5556C45 27.801 45.199 28 45.4444 28H60.5556C60.801 28 61 27.801 61 27.5556V22Z"
            fill="#F2C94C"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M12 30C12 28.8954 12.8954 28 14 28H66C67.1046 28 68 28.8954 68 30V58C68 59.1046 67.1046 60 66 60H14C12.8954 60 12 59.1046 12 58V30Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35 22C35 20.8954 34.1046 20 33 20H21C19.8954 20 19 20.8954 19 22V27.5556C19 27.801 19.199 28 19.4444 28H34.5556C34.801 28 35 27.801 35 27.5556V22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M61 22C61 20.8954 60.1046 20 59 20H47C45.8954 20 45 20.8954 45 22V27.5556C45 27.801 45.199 28 45.4444 28H60.5556C60.801 28 61 27.801 61 27.5556V22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 30C12 28.8954 12.8954 28 14 28H66C67.1046 28 68 28.8954 68 30V58C68 59.1046 67.1046 60 66 60H14C12.8954 60 12 59.1046 12 58V30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M35 22C35 20.8954 34.1046 20 33 20H21C19.8954 20 19 20.8954 19 22V27.5556C19 27.801 19.199 28 19.4444 28H34.5556C34.801 28 35 27.801 35 27.5556V22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M61 22C61 20.8954 60.1046 20 59 20H47C45.8954 20 45 20.8954 45 22V27.5556C45 27.801 45.199 28 45.4444 28H60.5556C60.801 28 61 27.801 61 27.5556V22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 22C17 19.7909 18.7909 18 21 18H33C35.2091 18 37 19.7909 37 22V26H43V22C43 19.7909 44.7909 18 47 18H59C61.2091 18 63 19.7909 63 22V26H66C68.2091 26 70 27.7909 70 30V58C70 60.2091 68.2091 62 66 62H14C11.7909 62 10 60.2091 10 58V30C10 27.7909 11.7909 26 14 26H17V22ZM14 30V58H66V30H14ZM59 26V22L47 22V26H59ZM33 22V26H21V22L33 22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-battery-car', CoreBatteryCar)
export default CoreBatteryCar
