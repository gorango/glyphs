
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CorePennant = {
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
            d="M75 40L19 58L19 22L75 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M5 28L19 30L5 32"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M5 48L19 50L5 52"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M75 40L19 58L19 22L75 40Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M5 28L19 30L5 32"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M5 48L19 50L5 52"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M75 40L19 58L19 22L75 40Z"
            fill="#219653"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M5 28L19 30L5 32"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M5 48L19 50L5 52"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M75 40L19 58L19 22L75 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M5 28L19 30L5 32M5 48L19 50L5 52M75 40L19 58L19 22L75 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8219 20.3838C18.3383 20.0074 19.0036 19.9004 19.612 20.096L75.612 38.096C76.4391 38.3618 77 39.1312 77 40C77 40.8688 76.4391 41.6382 75.612 41.9041L19.612 59.9041C19.0036 60.0996 18.3383 59.9927 17.8219 59.6162C17.3054 59.2397 17 58.6391 17 58V52.306L5.28285 53.9799C4.18939 54.1361 3.17632 53.3763 3.02011 52.2829C2.8639 51.1894 3.6237 50.1763 4.71717 50.0201L4.85788 50L4.71717 49.9799C3.6237 49.8237 2.8639 48.8106 3.02011 47.7172C3.17632 46.6237 4.18939 45.8639 5.28285 46.0201L17 47.694L17 32.306L5.28285 33.9799C4.18939 34.1361 3.17632 33.3763 3.02011 32.2829C2.8639 31.1894 3.6237 30.1763 4.71717 30.0201L4.85788 30L4.71717 29.9799C3.6237 29.8237 2.8639 28.8106 3.02011 27.7172C3.17632 26.6237 4.18939 25.8639 5.28285 26.0201L17 27.694V22C17 21.3609 17.3054 20.7603 17.8219 20.3838ZM21 55.2564L68.4643 40L21 24.7436L21 55.2564Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-pennant', CorePennant)
export default CorePennant
