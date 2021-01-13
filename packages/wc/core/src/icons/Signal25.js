
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreSignal25 = {
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
            d="M64.5858 15.4143C65.8458 14.1543 68 15.0467 68 16.8285V66C68 67.1046 67.1046 68 66 68H16.8285C15.0467 68 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 54V67.9999"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M64.5858 15.4142C65.8457 14.1543 68 15.0466 68 16.8284V66C68 67.1046 67.1046 68 66 68H16.8284C15.0466 68 14.1543 65.8457 15.4142 64.5858L64.5858 15.4142Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 54V68H16.8285C15.0467 68 14.1543 65.8457 15.4143 64.5857L26 54Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M64.5858 15.4142C65.8457 14.1543 68 15.0466 68 16.8284V66C68 67.1046 67.1046 68 66 68H16.8284C15.0466 68 14.1543 65.8457 15.4142 64.5858L64.5858 15.4142Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 54V68H16.8285C15.0467 68 14.1543 65.8457 15.4143 64.5857L26 54Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M64.5858 15.4143C65.8458 14.1543 68 15.0467 68 16.8285V66C68 67.1046 67.1046 68 66 68H16.8285C15.0467 68 14.1543 65.8458 15.4143 64.5858L64.5858 15.4143Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26 54V68L16.8285 68C15.0467 68 14.1543 65.8458 15.4143 64.5858L26 54Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.8285 68H66C67.1046 68 68 67.1046 68 66V16.8285C68 15.0467 65.8458 14.1543 64.5858 15.4143L15.4143 64.5858M16.8285 68C15.0467 68 14.1543 65.8458 15.4143 64.5858M16.8285 68L26 68V54L15.4143 64.5858"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M14 63.1714L24.5857 52.5857C24.5878 52.5835 24.59 52.5814 24.5922 52.5792L63.1715 13.9999C65.6913 11.48 69.9999 13.2647 69.9999 16.8283V65.9999C69.9999 68.209 68.209 69.9999 65.9999 69.9999H16.8283C13.9573 69.9999 12.241 67.2034 12.9999 64.7987C13.183 64.2186 13.5102 63.6612 14 63.1714ZM14 63.1714C14 63.1714 13.9999 63.1714 14 63.1714ZM27.9999 65.9999H65.9999V16.8283L27.9999 54.8284V65.9999ZM23.9999 58.8283L16.8284 65.9998H23.9999V58.8283Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-signal-25', CoreSignal25)
export default CoreSignal25
