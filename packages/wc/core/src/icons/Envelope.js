
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreEnvelope = {
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
            d="M12 26C12 23.7909 13.7909 22 16 22H64C66.2091 22 68 23.7909 68 26V54C68 56.2091 66.2091 58 64 58H16C13.7909 58 12 56.2091 12 54V26Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M67.9987 25.9937L45.205 45.5311C42.2091 48.099 37.7883 48.099 34.7924 45.5311L12 25.9948"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M16 22C14.6804 22 13.51 22.639 12.7815 23.6244C13.0832 23.7236 13.3709 23.8822 13.6271 24.1017L36.4207 43.6392C38.4804 45.4046 41.5197 45.4046 43.5794 43.6392L66.3731 24.1017C66.6292 23.8822 66.9169 23.7236 67.2185 23.6245C66.49 22.639 65.3196 22 64 22H16Z"
            fill="currentColor"
          />
          <path
            d="M68 29.2926L46.8334 47.4354C42.9012 50.8059 37.0989 50.8059 33.1668 47.4354L12 29.2925V54C12 56.2091 13.7909 58 16 58H64C66.2091 58 68 56.2091 68 54V29.2926Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="12"
            y="22"
            width="56"
            height="36"
            rx="4"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.2245 22C66.3291 22.1165 67.9999 23.86 67.9999 25.9938V26.0001L40 50L12 26V25.9695C12.0126 23.8468 13.6787 22.116 15.7754 22L64.2245 22Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M12 26C12 23.7909 13.7909 22 16 22H64C66.2091 22 68 23.7909 68 26V54C68 56.2091 66.2091 58 64 58H16C13.7909 58 12 56.2091 12 54V26Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68 26V54C68 56.2091 66.2091 58 64 58H16C13.7909 58 12 56.2091 12 54V26M68 26C68 23.7909 66.2091 22 64 22H16C13.7909 22 12 23.7909 12 26M68 26L45.2064 45.5373C42.2105 48.1052 37.7897 48.1052 34.7937 45.5373L12 26"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0001 25.9751C10.0135 22.6728 12.6946 20 16 20H64C67.3137 20 70 22.6863 70 26V54C70 57.3137 67.3137 60 64 60H16C12.6863 60 10 57.3137 10 54V26C10 25.9917 10 25.9834 10.0001 25.9751ZM14 30.3432V54C14 55.1046 14.8954 56 16 56H64C65.1046 56 66 55.1046 66 54V30.3409L46.5066 47.0495C42.7617 50.2595 37.2357 50.2595 33.4908 47.0495L14 30.3432ZM65.8384 25.2111L43.9034 44.0125C41.6565 45.9385 38.3409 45.9385 36.0939 44.0125L14.1609 25.2128C14.4666 24.4996 15.1749 24 16 24H64C64.8244 24 65.5323 24.4988 65.8384 25.2111Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-envelope', CoreEnvelope)
export default CoreEnvelope
