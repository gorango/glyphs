
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreMap = {
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
            d="M50 23L30 15V57L50 65V23Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30 15L10 23V65L30 57"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50 23L70 15V57L50 65"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M10 23L27.5 16V57C27.5 57.3282 27.5632 57.6416 27.6782 57.9287L10 65V23Z"
            fill="currentColor"
          />
          <path
            d="M47.5 64L32.3218 57.9287C32.4368 57.6416 32.5 57.3282 32.5 57V16L47.6782 22.0713C47.5632 22.3584 47.5 22.6718 47.5 23V64Z"
            fill="currentColor"
          />
          <path
            d="M52.5 64L70 57V15L52.3218 22.0713C52.4368 22.3584 52.5 22.6718 52.5 23V64Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M10 23L30 15V57L10 65V23Z"
            fill="#F2994A"
          />
          <path
            d="M50 23L30 15V57L50 65V23Z"
            fill="#EB5757"
          />
          <path
            d="M50 23L70 15V57L50 65V23Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M10 23L30 15V57L10 65V23Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50 23L30 15V57L50 65V23Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50 23L70 15V57L50 65V23Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 15L10 23V65L30 57M30 15V57M30 15L50 23M30 57L50 65M50 23V65M50 23L70 15V57L50 65"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50 20.8459L30.7428 13.1431C30.2575 12.9489 29.7212 12.9544 29.2468 13.1472L9.25722 21.1431C8.4979 21.4468 8 22.1822 8 23V65C8 65.6637 8.3292 66.2841 8.87874 66.6561C9.42829 67.0282 10.1266 67.1034 10.7428 66.857L30 59.1541L49.2468 66.8528C49.3268 66.8853 49.4086 66.9125 49.4917 66.9344C49.8887 67.0387 50.3068 67.0178 50.6888 66.8777C50.7104 66.8698 50.7319 66.8615 50.7532 66.8528L70.7428 58.857C71.5021 58.5532 72 57.8178 72 57V15C72 14.3364 71.6708 13.7159 71.1213 13.3439C70.5717 12.9718 69.8734 12.8966 69.2572 13.1431L50 20.8459ZM52 24.3541V62.0459L68 55.6459V17.9541L52 24.3541ZM48 24.3541L32 17.9541V55.6459L48 62.0459V24.3541ZM28 17.9541V55.6459L12 62.0459V24.3541L28 17.9541Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-map', CoreMap)
export default CoreMap
