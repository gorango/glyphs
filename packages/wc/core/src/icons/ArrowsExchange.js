
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreArrowsExchange = {
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
            d="M31 55L31 16"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36.818 55H25.182C24.0078 55 23.4197 56.4197 24.25 57.25L28.8787 61.8787C30.0503 63.0503 31.9498 63.0503 33.1213 61.8787L37.75 57.25C38.5803 56.4197 37.9923 55 36.818 55Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M49 25L49 64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M54.818 24.9995H43.182C42.0078 24.9995 41.4197 23.5799 42.25 22.7495L46.8787 18.1209C48.0503 16.9493 49.9498 16.9493 51.1213 18.1209L55.75 22.7495C56.5803 23.5799 55.9923 24.9995 54.818 24.9995Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M52 25C52 23.3431 50.6569 22 49 22C47.3431 22 46 23.3431 46 25L52 25ZM46 64C46 65.6569 47.3431 67 49 67C50.6569 67 52 65.6569 52 64L46 64ZM46 25L46 64L52 64L52 25L46 25Z"
            fill="currentColor"
          />
          <path
            d="M54.818 25H43.182C42.0078 25 41.4197 23.5803 42.25 22.75L46.8787 18.1213C48.0503 16.9497 49.9497 16.9497 51.1213 18.1213L55.75 22.75C56.5803 23.5803 55.9923 25 54.818 25Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 55C34 56.6569 32.6569 58 31 58C29.3431 58 28 56.6569 28 55L34 55ZM28 16C28 14.3431 29.3432 13 31 13C32.6569 13 34 14.3431 34 16L28 16ZM28 55L28 16L34 16L34 55L28 55Z"
            fill="currentColor"
          />
          <path
            d="M36.818 55L25.182 55C24.0078 55 23.4197 56.4197 24.25 57.25L28.8787 61.8787C30.0503 63.0503 31.9497 63.0503 33.1213 61.8787L37.75 57.25C38.5803 56.4197 37.9923 55 36.818 55Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M51 25C51 23.8954 50.1046 23 49 23C47.8954 23 47 23.8954 47 25L51 25ZM47 64C47 65.1046 47.8954 66 49 66C50.1046 66 51 65.1046 51 64H47ZM47 25L47 64H51L51 25L47 25Z"
            fill="#56CCF2"
          />
          <path
            d="M54.818 25H43.182C42.0078 25 41.4197 23.5803 42.25 22.75L46.8787 18.1213C48.0503 16.9497 49.9497 16.9497 51.1213 18.1213L55.75 22.75C56.5803 23.5803 55.9923 25 54.818 25Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M33 55C33 56.1046 32.1046 57 31 57C29.8954 57 29 56.1046 29 55L33 55ZM29 16C29 14.8954 29.8954 14 31 14C32.1046 14 33 14.8954 33 16L29 16ZM29 55L29 16L33 16L33 55L29 55Z"
            fill="#56CCF2"
          />
          <path
            d="M36.818 55L25.182 55C24.0078 55 23.4197 56.4197 24.25 57.25L28.8787 61.8787C30.0503 63.0503 31.9497 63.0503 33.1213 61.8787L37.75 57.25C38.5803 56.4197 37.9923 55 36.818 55Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M54.818 25H43.182C42.0078 25 41.4197 23.5803 42.25 22.75L46.8787 18.1213C48.0503 16.9497 49.9498 16.9497 51.1213 18.1213L55.75 22.75C56.5803 23.5803 55.9923 25 54.818 25Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36.818 55H25.182C24.0078 55 23.4197 56.4197 24.25 57.25L28.8787 61.8787C30.0503 63.0503 31.9498 63.0503 33.1213 61.8787L37.75 57.25C38.5803 56.4197 37.9923 55 36.818 55Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M49 25L49 64M31 55L31 16M43.182 25H54.818C55.9923 25 56.5803 23.5803 55.75 22.75L51.1213 18.1213C49.9498 16.9497 48.0503 16.9497 46.8787 18.1213L42.25 22.75C41.4197 23.5803 42.0078 25 43.182 25ZM25.182 55H36.818C37.9923 55 38.5803 56.4197 37.75 57.25L33.1213 61.8787C31.9498 63.0503 30.0503 63.0503 28.8787 61.8787L24.25 57.25C23.4197 56.4197 24.0078 55 25.182 55Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.5001 52.5L28.5001 16C28.5001 14.6193 29.6194 13.5 31.0001 13.5C32.3809 13.5 33.5001 14.6193 33.5001 16L33.5001 52.5H36.8182C40.2197 52.5 41.9231 56.6126 39.5179 59.0178L34.8892 63.6464C32.7413 65.7943 29.2589 65.7943 27.1111 63.6464L22.4824 59.0178C20.0772 56.6125 21.7806 52.5 25.1821 52.5H28.5001ZM28.0357 57.5L30.6466 60.1109C30.8418 60.3062 31.1584 60.3062 31.3537 60.1109L33.9646 57.5H28.0357Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.5001 27.5H43.1821C39.7806 27.5 38.0772 23.3875 40.4824 20.9822L45.1111 16.3536C47.2589 14.2057 50.7413 14.2057 52.8892 16.3536L57.5179 20.9822C59.9231 23.3874 58.2197 27.5 54.8182 27.5H51.5001L51.5001 64C51.5001 65.3807 50.3809 66.5 49.0001 66.5C47.6194 66.5 46.5001 65.3807 46.5001 64L46.5001 27.5ZM48.6466 19.8891C48.8418 19.6938 49.1584 19.6938 49.3537 19.8891L51.9646 22.5L46.0357 22.5L48.6466 19.8891Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-arrows-exchange', CoreArrowsExchange)
export default CoreArrowsExchange
