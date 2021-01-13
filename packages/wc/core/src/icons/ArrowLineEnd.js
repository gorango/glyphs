
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreArrowLineEnd = {
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
            d="M24 37.9995L37.8787 24.1209C39.0503 22.9493 40.9497 22.9493 42.1213 24.1209L56 37.9995"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 23.2412V37.979M40 38.0003L40 61.0003"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 15L56 15"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M43 23.241C43 21.5841 41.6569 20.241 40 20.241C38.3431 20.241 37 21.5841 37 23.241H43ZM37 37.9787C37 39.6356 38.3431 40.9787 40 40.9787C41.6569 40.9787 43 39.6356 43 37.9787H37ZM43 38.0001C43 36.3432 41.6569 35.0001 40 35.0001C38.3431 35.0001 37 36.3432 37 38.0001H43ZM37 61.0001C37 62.6569 38.3431 64.0001 40 64.0001C41.6569 64.0001 43 62.6569 43 61.0001H37ZM37 23.241V37.9787H43V23.241H37ZM37 38.0001V61.0001H43V38.0001H37Z"
            fill="currentColor"
          />
          <path
            d="M56 38L42.1213 24.1213C40.9497 22.9497 39.0503 22.9497 37.8787 24.1213L24 38"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 15H56"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M42 23.241C42 22.1364 41.1046 21.241 40 21.241C38.8954 21.241 38 22.1364 38 23.241H42ZM38 37.9787C38 39.0833 38.8954 39.9787 40 39.9787C41.1046 39.9787 42 39.0833 42 37.9787H38ZM42 38.0001C42 36.8955 41.1046 36.0001 40 36.0001C38.8954 36.0001 38 36.8955 38 38.0001H42ZM38 61.0001C38 62.1046 38.8954 63.0001 40 63.0001C41.1046 63.0001 42 62.1046 42 61.0001H38ZM38 23.241V37.9787H42V23.241H38ZM38 38.0001V61.0001H42V38.0001H38Z"
            fill="#56CCF2"
          />
          <path
            d="M56 38L42.1213 24.1213C40.9497 22.9497 39.0503 22.9497 37.8787 24.1213L24 38"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 15H56"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40 23.2409V37.9787M40 38V61M24 38L37.8787 24.1213C39.0503 22.9497 40.9497 22.9497 42.1213 24.1213L56 38M24 15H56"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M40 22.7407C40.043 22.7407 40.0857 22.7418 40.1281 22.7439C41.4927 22.7755 42.8477 23.312 43.8891 24.3534L57.7678 38.2321C58.7441 39.2084 58.7441 40.7913 57.7678 41.7676C56.7915 42.7439 55.2085 42.7439 54.2322 41.7676L42.5 30.0354V39.9785L42.5 39.9892L42.5 39.9998L42.5 62.9998C42.5 64.3805 41.3807 65.4998 40 65.4998C38.6193 65.4998 37.5 64.3805 37.5 62.9998L37.5 39.9998L37.5 39.9892L37.5 39.9785V30.0354L25.7678 41.7676C24.7915 42.7439 23.2085 42.7439 22.2322 41.7676C21.2559 40.7913 21.2559 39.2084 22.2322 38.2321L36.1109 24.3534C37.1523 23.312 38.5073 22.7755 39.8719 22.7439C39.9143 22.7418 39.957 22.7407 40 22.7407Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 14.5C22.6193 14.5 21.5 15.6193 21.5 17C21.5 18.3807 22.6193 19.5 24 19.5L56 19.5C57.3807 19.5 58.5 18.3807 58.5 17C58.5 15.6193 57.3807 14.5 56 14.5L24 14.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-arrow-line-end', CoreArrowLineEnd)
export default CoreArrowLineEnd
