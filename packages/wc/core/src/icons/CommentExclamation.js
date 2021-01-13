
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCommentExclamation = {
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
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M39.5 24V46.4"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M39.5 53.6001V55.2001"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66ZM39.5 21.5C40.8807 21.5 42 22.6193 42 24V46.3244C42 47.7052 40.8807 48.8244 39.5 48.8244C38.1193 48.8244 37 47.7052 37 46.3244V24C37 22.6193 38.1193 21.5 39.5 21.5ZM42 53.5999C42 52.2192 40.8807 51.0999 39.5 51.0999C38.1193 51.0999 37 52.2192 37 53.5999V55.1999C37 56.5806 38.1193 57.6999 39.5 57.6999C40.8807 57.6999 42 56.5806 42 55.1999V53.5999Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
            fill="#EB5757"
          />
          <path
            d="M40 66V68V66ZM20.4369 57.1261L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082L20.4369 57.1261ZM16 66L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L16 66ZM64 40C64 53.2548 53.2548 64 40 64V68C55.464 68 68 55.464 68 40H64ZM40 16C53.2548 16 64 26.7452 64 40H68C68 24.536 55.464 12 40 12V16ZM16 40C16 26.7452 26.7452 16 40 16V12C24.536 12 12 24.536 12 40H16ZM21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40H12C12 47.0627 14.6176 53.519 18.9326 58.4441L21.9412 55.8082ZM17.7889 66.8944L22.2258 58.0206L18.6481 56.2317L14.2111 65.1056L17.7889 66.8944ZM40 64L16 64L16 68L40 68V64Z"
            fill="#EB5757"
          />
          <path
            d="M39.5 46.4L39.5 24"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M39.5 53.5996L39.5 55.1996"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.5 24V46.4M39.5 53.5999V55.1999M66 40C66 54.3594 54.3594 66 40 66L16 66L20.4369 57.1261C16.4291 52.5518 14 46.5596 14 40C14 25.6406 25.6406 14 40 14C54.3594 14 66 25.6406 66 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M39.5 22C40.6046 22 41.5 22.8954 41.5 24V46.3995C41.5 47.5041 40.6046 48.3995 39.5 48.3995C38.3954 48.3995 37.5 47.5041 37.5 46.3995V24C37.5 22.8954 38.3954 22 39.5 22Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M41.5 53.5999C41.5 52.4953 40.6046 51.5999 39.5 51.5999C38.3954 51.5999 37.5 52.4953 37.5 53.5999V55.1999C37.5 56.3044 38.3954 57.1999 39.5 57.1999C40.6046 57.1999 41.5 56.3044 41.5 55.1999V53.5999Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 40C12 24.536 24.536 12 40 12C55.464 12 68 24.536 68 40C68 55.464 55.464 68 40 68L16 68C15.3068 68 14.6631 67.6411 14.2987 67.0515C13.9343 66.4618 13.9012 65.7255 14.2111 65.1056L18.063 57.4019C14.2684 52.6242 12 46.5748 12 40ZM40 16C26.7452 16 16 26.7452 16 40C16 46.0564 18.2407 51.5845 21.9412 55.8082C22.4767 56.4193 22.5892 57.2938 22.2258 58.0206L19.2361 64L40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-comment-exclamation', CoreCommentExclamation)
export default CoreCommentExclamation
