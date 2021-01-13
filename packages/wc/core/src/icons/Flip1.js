
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreFlip1 = {
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
            d="M32 40L12 54L12 26L32 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M48 40L68 54L68 26L48 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 16L40 64.1"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="0.01 8"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M32 40L12 54L12 40L12 26L32 40Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M48 40L68 54L68 40L68 26L48 40Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 16L40 64.1"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="0.01 8"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M32 40L12 54L12 40L12 26L32 40Z"
            fill="#2F80ED"
          />
          <path
            d="M48 40L68 54L68 40L68 26L48 40Z"
            fill="#219653"
          />
          <path
            d="M40 16L40 64.1"
            stroke="#BB6BD9"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="0.01 8"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M32 40L12 54L12 26L32 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48 40L68 54V26L48 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32 40L12 54L12 26L32 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M48 40L68 54V26L48 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 16L40 64.1"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="0.01 8"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M42 16C42 14.8954 41.1046 14 40 14C38.8954 14 38 14.8954 38 16V16.005C38 17.1096 38.8954 18.005 40 18.005C41.1046 18.005 42 17.1096 42 16.005V16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42 24.0117C42 22.9071 41.1046 22.0117 40 22.0117C38.8954 22.0117 38 22.9071 38 24.0117V24.0217C38 25.1262 38.8954 26.0217 40 26.0217C41.1046 26.0217 42 25.1262 42 24.0217V24.0117Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42 32.0283C42 30.9238 41.1046 30.0283 40 30.0283C38.8954 30.0283 38 30.9238 38 32.0283V32.0383C38 33.1429 38.8954 34.0383 40 34.0383C41.1046 34.0383 42 33.1429 42 32.0383V32.0283Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42 40.045C42 38.9404 41.1046 38.045 40 38.045C38.8954 38.045 38 38.9404 38 40.045V40.055C38 41.1596 38.8954 42.055 40 42.055C41.1046 42.055 42 41.1596 42 40.055V40.045Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42 48.0617C42 46.9571 41.1046 46.0617 40 46.0617C38.8954 46.0617 38 46.9571 38 48.0617V48.0717C38 49.1762 38.8954 50.0717 40 50.0717C41.1046 50.0717 42 49.1762 42 48.0717V48.0617Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42 56.0783C42 54.9738 41.1046 54.0783 40 54.0783C38.8954 54.0783 38 54.9738 38 56.0783V56.0883C38 57.1929 38.8954 58.0883 40 58.0883C41.1046 58.0883 42 57.1929 42 56.0883V56.0783Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42 64.095C42 62.9904 41.1046 62.095 40 62.095C38.8954 62.095 38 62.9904 38 64.095V64.1C38 65.2046 38.8954 66.1 40 66.1C41.1046 66.1 42 65.2046 42 64.1V64.095Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 40C34 40.6526 33.6816 41.2642 33.1469 41.6385L13.1469 55.6385C12.536 56.0661 11.7378 56.1184 11.0764 55.774C10.4149 55.4296 10 54.7458 10 54L10 26C10 25.2542 10.4149 24.5704 11.0764 24.226C11.7378 23.8816 12.536 23.9339 13.1469 24.3615L33.1469 38.3615C33.6816 38.7358 34 39.3474 34 40ZM14 29.8413L14 50.1587L28.5124 40L14 29.8413Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46 40C46 40.6526 46.3184 41.2642 46.8531 41.6385L66.8531 55.6385C67.464 56.0661 68.2622 56.1184 68.9236 55.774C69.5851 55.4296 70 54.7458 70 54V26C70 25.2542 69.5851 24.5704 68.9236 24.226C68.2622 23.8816 67.464 23.9339 66.8531 24.3615L46.8531 38.3615C46.3184 38.7358 46 39.3474 46 40ZM66 29.8413V50.1587L51.4876 40L66 29.8413Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-flip-1', CoreFlip1)
export default CoreFlip1
