
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreX = {
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
            d="M56 64L24 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 64L56 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M53.5038 65.6641C54.4229 67.0427 56.2855 67.4152 57.6641 66.4962C59.0427 65.5771 59.4152 63.7145 58.4962 62.3359L53.5038 65.6641ZM26.4962 14.3359C25.5771 12.9573 23.7145 12.5848 22.3359 13.5038C20.9573 14.4229 20.5848 16.2855 21.5038 17.6641L26.4962 14.3359ZM21.5038 62.3359C20.5848 63.7145 20.9573 65.5771 22.3359 66.4962C23.7145 67.4152 25.5771 67.0427 26.4962 65.6641L21.5038 62.3359ZM58.4962 17.6641C59.4152 16.2855 59.0427 14.4229 57.6641 13.5038C56.2855 12.5848 54.4229 12.9573 53.5038 14.3359L58.4962 17.6641ZM58.4962 62.3359L26.4962 14.3359L21.5038 17.6641L53.5038 65.6641L58.4962 62.3359ZM26.4962 65.6641L58.4962 17.6641L53.5038 14.3359L21.5038 62.3359L26.4962 65.6641Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M54.3359 65.1094C54.9486 66.0285 56.1903 66.2768 57.1094 65.6641C58.0285 65.0514 58.2768 63.8097 57.6641 62.8906L54.3359 65.1094ZM25.6641 14.8906C25.0514 13.9715 23.8097 13.7232 22.8906 14.3359C21.9715 14.9486 21.7232 16.1903 22.3359 17.1094L25.6641 14.8906ZM22.3359 62.8906C21.7232 63.8097 21.9715 65.0514 22.8906 65.6641C23.8097 66.2768 25.0514 66.0285 25.6641 65.1094L22.3359 62.8906ZM57.6641 17.1094C58.2768 16.1903 58.0285 14.9486 57.1094 14.3359C56.1903 13.7232 54.9486 13.9715 54.3359 14.8906L57.6641 17.1094ZM57.6641 62.8906L25.6641 14.8906L22.3359 17.1094L54.3359 65.1094L57.6641 62.8906ZM25.6641 65.1094L57.6641 17.1094L54.3359 14.8906L22.3359 62.8906L25.6641 65.1094Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M56 64L24 16M24 64L56 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M54.3359 14.8908C54.9486 13.9718 56.1903 13.7234 57.1094 14.3361C58.0284 14.9488 58.2768 16.1906 57.6641 17.1096L42.4037 40.0002L57.6641 62.8908C58.2768 63.8099 58.0284 65.0516 57.1094 65.6643C56.1903 66.277 54.9486 66.0287 54.3359 65.1096L40 43.6058L25.6641 65.1096C25.0514 66.0287 23.8096 66.277 22.8906 65.6643C21.9715 65.0516 21.7232 63.8099 22.3359 62.8908L37.5963 40.0002L22.3359 17.1096C21.7232 16.1906 21.9715 14.9488 22.8906 14.3361C23.8096 13.7234 25.0514 13.9718 25.6641 14.8908L40 36.3947L54.3359 14.8908Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-x', CoreX)
export default CoreX
