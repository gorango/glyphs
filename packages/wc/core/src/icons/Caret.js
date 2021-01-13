
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCaret = {
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
            d="M49.1345 46.9997H30.7913C29.0095 46.9997 28.1172 44.8454 29.3771 43.5855L38.5487 34.4139C39.3297 33.6329 40.596 33.6329 41.3771 34.4139L50.5487 43.5855C51.8086 44.8454 50.9163 46.9997 49.1345 46.9997Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M30.9862 47L49.0867 47C50.9133 47 51.828 44.7916 50.5364 43.5L41.8926 34.8562C40.8675 33.831 39.2054 33.831 38.1803 34.8562L29.5364 43.5C28.2449 44.7916 29.1596 47 30.9862 47Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M30.9861 47L49.0866 47C50.9132 47 51.828 44.7916 50.5364 43.5L41.8925 34.8562C40.8674 33.831 39.2053 33.831 38.1802 34.8562L29.5364 43.5C28.2448 44.7916 29.1595 47 30.9861 47Z"
            fill="#56CCF2"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M49.0131 47.0001H30.9126C29.0861 47.0001 28.1713 44.7917 29.4629 43.5001L38.1067 34.8562C39.1319 33.8311 40.7939 33.8311 41.819 34.8562L50.4629 43.5001C51.7545 44.7917 50.8397 47.0001 49.0131 47.0001Z"
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
            d="M43.182 32.2321C41.4246 30.4747 38.5754 30.4747 36.818 32.2321L27.6464 41.4037C24.8116 44.2385 26.8193 49.0856 30.8284 49.0856H49.1716C53.1806 49.0856 55.1884 44.2385 52.3535 41.4037L43.182 32.2321ZM40 36.1212L47.9645 44.0856H32.0355L40 36.1212Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-caret', CoreCaret)
export default CoreCaret
