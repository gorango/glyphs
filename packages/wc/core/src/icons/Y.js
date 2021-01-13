
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreY = {
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
            d="M40 40L24 16M40 40L40 64M40 40L56 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M26.4962 14.3359C25.5771 12.9573 23.7145 12.5848 22.3359 13.5038C20.9573 14.4229 20.5848 16.2855 21.5038 17.6641L26.4962 14.3359ZM37 64C37 65.6569 38.3431 67 40 67C41.6569 67 43 65.6569 43 64H37ZM58.4962 17.6641C59.4152 16.2855 59.0427 14.4229 57.6641 13.5038C56.2855 12.5848 54.4229 12.9573 53.5038 14.3359L58.4962 17.6641ZM42.4962 38.3359L26.4962 14.3359L21.5038 17.6641L37.5038 41.6641L42.4962 38.3359ZM37 40L37 64H43L43 40H37ZM42.4962 41.6641L58.4962 17.6641L53.5038 14.3359L37.5038 38.3359L42.4962 41.6641Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M25.6641 14.8906C25.0514 13.9715 23.8097 13.7232 22.8906 14.3359C21.9715 14.9486 21.7232 16.1903 22.3359 17.1094L25.6641 14.8906ZM38 64C38 65.1046 38.8954 66 40 66C41.1046 66 42 65.1046 42 64H38ZM57.6641 17.1094C58.2768 16.1903 58.0285 14.9486 57.1094 14.3359C56.1903 13.7232 54.9486 13.9715 54.3359 14.8906L57.6641 17.1094ZM41.6641 38.8906L25.6641 14.8906L22.3359 17.1094L38.3359 41.1094L41.6641 38.8906ZM38 40L38 64H42L42 40H38ZM41.6641 41.1094L57.6641 17.1094L54.3359 14.8906L38.3359 38.8906L41.6641 41.1094Z"
            fill="#219653"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40 40L24 16M40 40V64M40 40L56 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M22.8906 14.3361C23.8096 13.7234 25.0514 13.9718 25.6641 14.8908L40 36.3947L54.3359 14.8908C54.9486 13.9718 56.1903 13.7234 57.1094 14.3361C58.0284 14.9488 58.2768 16.1906 57.6641 17.1096L42 40.6058L42 64.0002C42 65.1048 41.1045 66.0002 40 66.0002C38.8954 66.0002 38 65.1048 38 64.0002L38 40.6058L22.3359 17.1096C21.7232 16.1906 21.9715 14.9488 22.8906 14.3361Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-y', CoreY)
export default CoreY
