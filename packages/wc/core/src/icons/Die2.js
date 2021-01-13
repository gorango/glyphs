
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreDie2 = {
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
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47 27C47 24.7909 48.7909 23 51 23C53.2091 23 55 24.7909 55 27C55 29.2091 53.2091 31 51 31C48.7909 31 47 29.2091 47 27Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M25 53C25 50.7909 26.7909 49 29 49C31.2091 49 33 50.7909 33 53C33 55.2091 31.2091 57 29 57C26.7909 57 25 55.2091 25 53Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24ZM47 27C47 24.7909 48.7909 23 51 23C53.2091 23 55 24.7909 55 27C55 29.2091 53.2091 31 51 31C48.7909 31 47 29.2091 47 27ZM29 49C26.7909 49 25 50.7909 25 53C25 55.2091 26.7909 57 29 57C31.2091 57 33 55.2091 33 53C33 50.7909 31.2091 49 29 49Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="8"
            fill="#F2F2F2"
            stroke="#E0E0E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="47"
            y="23"
            width="8"
            height="8"
            rx="4"
            fill="#F2994A"
          />
          <rect
            x="25"
            y="49"
            width="8"
            height="8"
            rx="4"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47 27C47 24.7909 48.7909 23 51 23C53.2091 23 55 24.7909 55 27C55 29.2091 53.2091 31 51 31C48.7909 31 47 29.2091 47 27Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M25 53C25 50.7909 26.7909 49 29 49C31.2091 49 33 50.7909 33 53C33 55.2091 31.2091 57 29 57C26.7909 57 25 55.2091 25 53Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47 27C47 24.7909 48.7909 23 51 23C53.2091 23 55 24.7909 55 27C55 29.2091 53.2091 31 51 31C48.7909 31 47 29.2091 47 27Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M25 53C25 50.7909 26.7909 49 29 49C31.2091 49 33 50.7909 33 53C33 55.2091 31.2091 57 29 57C26.7909 57 25 55.2091 25 53Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45 27C45 23.6863 47.6863 21 51 21C54.3137 21 57 23.6863 57 27C57 30.3137 54.3137 33 51 33C47.6863 33 45 30.3137 45 27ZM51 25C49.8954 25 49 25.8954 49 27C49 28.1046 49.8954 29 51 29C52.1046 29 53 28.1046 53 27C53 25.8954 52.1046 25 51 25Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29 47C25.6863 47 23 49.6863 23 53C23 56.3137 25.6863 59 29 59C32.3137 59 35 56.3137 35 53C35 49.6863 32.3137 47 29 47ZM27 53C27 51.8954 27.8954 51 29 51C30.1046 51 31 51.8954 31 53C31 54.1046 30.1046 55 29 55C27.8954 55 27 54.1046 27 53Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 24C14 18.4772 18.4772 14 24 14H56C61.5228 14 66 18.4772 66 24V56C66 61.5228 61.5228 66 56 66H24C18.4772 66 14 61.5228 14 56V24ZM24 18C20.6863 18 18 20.6863 18 24V56C18 59.3137 20.6863 62 24 62H56C59.3137 62 62 59.3137 62 56V24C62 20.6863 59.3137 18 56 18H24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-die-2', CoreDie2)
export default CoreDie2