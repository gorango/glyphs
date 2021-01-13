
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreSignal1 = {
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
            d="M18 68C19.1046 68 20 67.1046 20 66L20 50C20 48.8954 19.1046 48 18 48L14 48C12.8954 48 12 48.8954 12 50L12 66C12 67.1046 12.8954 68 14 68H18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5 67.5C18.6046 67.5 19.5 66.6046 19.5 65.5L19.5 63.5L19.5 51.5V49.5C19.5 48.3954 18.6046 47.5 17.5 47.5L13.5 47.5C12.3954 47.5 11.5 48.3954 11.5 49.5L11.5 51.5L11.5 63.5L11.5 65.5C11.5 66.6046 12.3954 67.5 13.5 67.5H17.5Z"
            fill="currentColor"
          />
          <path
            d="M19.5 63.5H21.5H19.5ZM19.5 51.5L21.5 51.5L19.5 51.5ZM11.5 51.5L13.5 51.5L11.5 51.5ZM11.5 63.5H13.5H11.5ZM13.5 67.5V65.5V67.5ZM13.5 47.5V45.5V47.5ZM19.5 49.5L17.5 49.5L19.5 49.5ZM19.5 65.5H17.5H19.5ZM17.5 63.5V65.5H21.5L21.5 63.5H17.5ZM17.5 51.5L17.5 63.5H21.5L21.5 51.5L17.5 51.5ZM17.5 49.5V51.5L21.5 51.5V49.5L17.5 49.5ZM13.5 49.5L17.5 49.5V45.5L13.5 45.5L13.5 49.5ZM13.5 51.5V49.5H9.5L9.5 51.5L13.5 51.5ZM13.5 63.5L13.5 51.5L9.5 51.5L9.5 63.5H13.5ZM13.5 65.5V63.5H9.5L9.5 65.5H13.5ZM17.5 65.5H13.5L13.5 69.5H17.5L17.5 65.5ZM9.5 65.5C9.5 67.7091 11.2909 69.5 13.5 69.5L13.5 65.5H9.5ZM13.5 45.5C11.2909 45.5 9.5 47.2909 9.5 49.5H13.5L13.5 45.5ZM21.5 49.5C21.5 47.2909 19.7091 45.5 17.5 45.5V49.5L21.5 49.5ZM17.5 65.5L17.5 69.5C19.7091 69.5 21.5 67.7091 21.5 65.5H17.5Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5 67.5C18.6046 67.5 19.5 66.6046 19.5 65.5L19.5 63.5L19.5 51.5V49.5C19.5 48.3954 18.6046 47.5 17.5 47.5L13.5 47.5C12.3954 47.5 11.5 48.3954 11.5 49.5L11.5 51.5L11.5 63.5L11.5 65.5C11.5 66.6046 12.3954 67.5 13.5 67.5H17.5Z"
            fill="#BB6BD9"
          />
          <path
            d="M19.5 63.5H21.5H19.5ZM19.5 51.5H21.5H19.5ZM11.5 51.5H13.5H11.5ZM11.5 63.5H13.5H11.5ZM13.5 67.5L13.5 65.5L13.5 67.5ZM19.5 49.5H17.5H19.5ZM19.5 65.5H17.5H19.5ZM17.5 63.5V65.5H21.5L21.5 63.5H17.5ZM17.5 51.5L17.5 63.5H21.5V51.5L17.5 51.5ZM17.5 49.5V51.5L21.5 51.5V49.5L17.5 49.5ZM13.5 49.5L17.5 49.5L17.5 45.5L13.5 45.5L13.5 49.5ZM13.5 51.5L13.5 49.5L9.5 49.5L9.5 51.5L13.5 51.5ZM13.5 63.5L13.5 51.5L9.5 51.5L9.5 63.5H13.5ZM13.5 65.5V63.5H9.5L9.5 65.5H13.5ZM17.5 65.5H13.5L13.5 69.5H17.5L17.5 65.5ZM9.5 65.5C9.5 67.7091 11.2909 69.5 13.5 69.5L13.5 65.5H9.5ZM13.5 45.5C11.2909 45.5 9.5 47.2909 9.5 49.5L13.5 49.5L13.5 45.5ZM21.5 49.5C21.5 47.2909 19.7091 45.5 17.5 45.5L17.5 49.5L21.5 49.5ZM17.5 65.5L17.5 69.5C19.7091 69.5 21.5 67.7091 21.5 65.5H17.5Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M18 68C19.1046 68 20 67.1046 20 66L20 50C20 48.8954 19.1046 48 18 48L14 48C12.8954 48 12 48.8954 12 50L12 66C12 67.1046 12.8954 68 14 68H18Z"
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
            d="M13.5 45.5L17.5 45.5C19.7091 45.5 21.5 47.2909 21.5 49.5L21.5 65.5C21.5 67.7091 19.7091 69.5 17.5 69.5H13.5C11.2909 69.5 9.5 67.7091 9.5 65.5L9.5 49.5C9.5 47.2909 11.2909 45.5 13.5 45.5ZM17.5 49.5H13.5L13.5 65.5H17.5V49.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-signal-1', CoreSignal1)
export default CoreSignal1
