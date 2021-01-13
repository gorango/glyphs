
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreComment2 = {
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
            d="M25 12C17.8203 12 12 17.8203 12 25V43C12 49.8432 17.2876 55.4515 24 55.9621V68L40 56H55C62.1797 56 68 50.1797 68 43V25C68 17.8203 62.1797 12 55 12H25Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 12C17.8203 12 12 17.8203 12 25V43C12 49.8432 17.2876 55.4515 24 55.9621V68L40 56H55C62.1797 56 68 50.1797 68 43V25C68 17.8203 62.1797 12 55 12H25Z"
            fill="currentColor"
          />
          <path
            d="M24 55.9621H26C26 54.9164 25.1944 54.0472 24.1517 53.9679L24 55.9621ZM24 68H22C22 68.7575 22.428 69.4501 23.1056 69.7889C23.7831 70.1276 24.594 70.0545 25.2 69.6L24 68ZM40 56V54C39.5673 54 39.1462 54.1404 38.8 54.4L40 56ZM14 25C14 18.9249 18.9249 14 25 14V10C16.7157 10 10 16.7157 10 25H14ZM14 43V25H10V43H14ZM24.1517 53.9679C18.474 53.536 14 48.7895 14 43H10C10 50.897 16.1011 57.367 23.8483 57.9563L24.1517 53.9679ZM22 55.9621V68H26V55.9621H22ZM25.2 69.6L41.2 57.6L38.8 54.4L22.8 66.4L25.2 69.6ZM55 54H40V58H55V54ZM66 43C66 49.0751 61.0751 54 55 54V58C63.2843 58 70 51.2843 70 43H66ZM66 25V43H70V25H66ZM55 14C61.0751 14 66 18.9249 66 25H70C70 16.7157 63.2843 10 55 10V14ZM25 14H55V10H25V14Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 12C17.8203 12 12 17.8203 12 25V43C12 49.8432 17.2876 55.4515 24 55.9621V68L40 56H55C62.1797 56 68 50.1797 68 43V25C68 17.8203 62.1797 12 55 12H25Z"
            fill="#219653"
          />
          <path
            d="M24 55.9621H26C26 54.9164 25.1944 54.0472 24.1517 53.9679L24 55.9621ZM24 68H22C22 68.7575 22.428 69.4501 23.1056 69.7889C23.7831 70.1276 24.594 70.0545 25.2 69.6L24 68ZM40 56V54C39.5673 54 39.1462 54.1404 38.8 54.4L40 56ZM14 25C14 18.9249 18.9249 14 25 14V10C16.7157 10 10 16.7157 10 25H14ZM14 43V25H10V43H14ZM24.1517 53.9679C18.474 53.536 14 48.7895 14 43H10C10 50.897 16.1011 57.367 23.8483 57.9563L24.1517 53.9679ZM22 55.9621V68H26V55.9621H22ZM25.2 69.6L41.2 57.6L38.8 54.4L22.8 66.4L25.2 69.6ZM55 54H40V58H55V54ZM66 43C66 49.0751 61.0751 54 55 54V58C63.2843 58 70 51.2843 70 43H66ZM66 25V43H70V25H66ZM55 14C61.0751 14 66 18.9249 66 25H70C70 16.7157 63.2843 10 55 10V14ZM25 14H55V10H25V14Z"
            fill="#219653"
          />
          <rect
            x="20.6582"
            y="19"
            width="39"
            height="30"
            rx="8"
            fill="#F2C94C"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M25 12C17.8203 12 12 17.8203 12 25V43C12 49.8432 17.2876 55.4515 24 55.9621V68L40 56H55C62.1797 56 68 50.1797 68 43V25C68 17.8203 62.1797 12 55 12H25Z"
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
            d="M10 25C10 16.7157 16.7157 10 25 10H55C63.2843 10 70 16.7157 70 25V43C70 51.2843 63.2843 58 55 58H40.6667L25.2 69.6C24.594 70.0545 23.7831 70.1276 23.1056 69.7889C22.428 69.4501 22 68.7575 22 68V57.6997C15.1525 56.3092 10 50.2571 10 43V25ZM25 14C18.9249 14 14 18.9249 14 25V43C14 48.7895 18.474 53.536 24.1517 53.9679C25.1944 54.0472 26 54.9164 26 55.9621V64L38.8 54.4C39.1462 54.1404 39.5673 54 40 54H55C61.0751 54 66 49.0751 66 43V25C66 18.9249 61.0751 14 55 14H25Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-comment-2', CoreComment2)
export default CoreComment2
