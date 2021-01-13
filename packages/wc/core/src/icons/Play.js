
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CorePlay = {
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
            d="M57.9611 38.2635C59.3048 39.0313 59.3048 40.9687 57.9611 41.7365L21.9923 62.2901C20.659 63.052 19 62.0893 19 60.5537L19 19.4464C19 17.9107 20.659 16.948 21.9923 17.7099L57.9611 38.2635Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M57.9611 38.2635C59.3048 39.0313 59.3048 40.9687 57.9612 41.7365L21.9923 62.2901C20.659 63.052 19 62.0893 19 60.5536L19 19.4464C19 17.9107 20.659 16.948 21.9923 17.7099L57.9611 38.2635Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M57.9611 38.2635C59.3048 39.0313 59.3048 40.9687 57.9612 41.7365L21.9923 62.2901C20.659 63.052 19 62.0893 19 60.5536L19 19.4464C19 17.9107 20.659 16.948 21.9923 17.7099L57.9611 38.2635Z"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M57.9611 38.2635C59.3048 39.0313 59.3048 40.9687 57.9611 41.7365L21.9923 62.2901C20.659 63.052 19 62.0893 19 60.5537L19 19.4464C19 17.9107 20.659 16.948 21.9923 17.7099L57.9611 38.2635Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 19.4463C17 16.375 20.3179 14.4496 22.9846 15.9734L58.9534 36.527C61.6407 38.0626 61.6407 41.9374 58.9534 43.473L22.9846 64.0266C20.3179 65.5504 17 63.6249 17 60.5536L17 19.4463ZM56.9689 40L21 19.4463L21 60.5536L56.9689 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-play', CorePlay)
export default CorePlay
