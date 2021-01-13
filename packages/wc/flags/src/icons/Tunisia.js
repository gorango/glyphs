
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsTunisia = {
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
          <circle
            cx="60"
            cy="40"
            r="24"
            fill="#F2F2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70.5691 26.8492C68.6666 25.9385 66.5358 25.4286 64.2859 25.4286C56.2383 25.4286 49.7144 31.9525 49.7144 40C49.7144 48.0476 56.2383 54.5715 64.2859 54.5715C66.5358 54.5715 68.6666 54.0615 70.5691 53.1509C67.5925 55.6428 63.7572 57.1429 59.5716 57.1429C50.1038 57.1429 42.4287 49.4678 42.4287 40C42.4287 30.5323 50.1038 22.8572 59.5716 22.8572C63.7572 22.8572 67.5925 24.3573 70.5691 26.8492Z"
            fill="#EB5757"
          />
          <path
            d="M61.2856 31.0923L66.837 36.1128L73.311 32.3562L70.2516 39.1873L75.8249 44.1835L68.3828 43.3849L65.3533 50.2293L63.8131 42.9046L56.3675 42.1385L62.8578 38.4102L61.2856 31.0923Z"
            fill="#EB5757"
          />
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0lw0v)"><path d="M100 0H-20V80H100V0Z" fill="#EB5757"/><circle cx="40" cy="40" r="24" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M50.5691 26.8491C48.6666 25.9385 46.5358 25.4286 44.2859 25.4286C36.2383 25.4286 29.7144 31.9525 29.7144 40C29.7144 48.0476 36.2383 54.5715 44.2859 54.5715C46.5358 54.5715 48.6666 54.0615 50.5691 53.1509C47.5925 55.6428 43.7572 57.1429 39.5716 57.1429C30.1038 57.1429 22.4287 49.4678 22.4287 40C22.4287 30.5323 30.1038 22.8572 39.5716 22.8572C43.7572 22.8572 47.5925 24.3573 50.5691 26.8491Z" fill="#EB5757"/><path d="M41.2856 31.0923L46.837 36.1128L53.311 32.3562L50.2516 39.1873L55.8249 44.1835L48.3828 43.3849L45.3533 50.2293L43.8131 42.9046L36.3675 42.1385L42.8578 38.4102L41.2856 31.0923Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0lw0v"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0Vo3h" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0Vo3h)"><g clip-path="url(#clip0Vo3h)"><path d="M100 0H-20V80H100V0Z" fill="#EB5757"/><circle cx="40" cy="40" r="24" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M50.5691 26.8491C48.6666 25.9385 46.5358 25.4286 44.2859 25.4286C36.2383 25.4286 29.7144 31.9525 29.7144 40C29.7144 48.0476 36.2383 54.5715 44.2859 54.5715C46.5358 54.5715 48.6666 54.0615 50.5691 53.1509C47.5925 55.6428 43.7572 57.1429 39.5716 57.1429C30.1038 57.1429 22.4287 49.4678 22.4287 40C22.4287 30.5323 30.1038 22.8572 39.5716 22.8572C43.7572 22.8572 47.5925 24.3573 50.5691 26.8491Z" fill="#EB5757"/><path d="M41.2856 31.0923L46.837 36.1128L53.311 32.3562L50.2516 39.1873L55.8249 44.1835L48.3828 43.3849L45.3533 50.2293L43.8131 42.9046L36.3675 42.1385L42.8578 38.4102L41.2856 31.0923Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0Vo3h"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-tunisia', FlagsTunisia)
export default FlagsTunisia
