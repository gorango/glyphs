
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBike = {
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
            d="M17.7575 37.2575C20.474 36.1323 23.5263 36.1323 26.2428 37.2575C28.9593 38.3827 31.1175 40.541 32.2428 43.2575C33.368 45.974 33.368 49.0263 32.2428 51.7428C31.1176 54.4593 28.9593 56.6175 26.2428 57.7428C23.5263 58.868 20.474 58.868 17.7575 57.7428C15.041 56.6176 12.8827 54.4593 11.7575 51.7428C10.6323 49.0263 10.6323 45.974 11.7575 43.2575C12.8827 40.541 15.041 38.3827 17.7575 37.2575Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M53.7575 37.2575C56.474 36.1323 59.5263 36.1323 62.2428 37.2575C64.9593 38.3827 67.1175 40.541 68.2428 43.2575C69.368 45.974 69.368 49.0263 68.2428 51.7428C67.1176 54.4593 64.9593 56.6175 62.2428 57.7428C59.5263 58.868 56.474 58.868 53.7575 57.7428C51.041 56.6176 48.8827 54.4593 47.7575 51.7428C46.6323 49.0263 46.6323 45.974 47.7575 43.2575C48.8827 40.541 51.041 38.3827 53.7575 37.2575Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M39.5455 47.5H22L32 30.5"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M58 47.5L50 30.5V21.5C50 20.9477 50.4477 20.5 51 20.5H56.3333C58.3584 20.5 60 22.1416 60 24.1667C60 26.1917 58.3584 27.8333 56.3333 27.8333H56.1111"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50 30.5L39.5455 47.5L32 30.5H50Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 20.5H27.5M27.5 20.5H34M27.5 20.5L32 30.5"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M17.7574 36.7574C20.4739 35.6321 23.5261 35.6321 26.2426 36.7574V36.7574C28.9592 37.8826 31.1174 40.0408 32.2426 42.7574V42.7574C33.3679 45.4739 33.3679 48.5261 32.2426 51.2426V51.2426C31.1174 53.9592 28.9592 56.1174 26.2426 57.2426V57.2426C23.5261 58.3679 20.4739 58.3679 17.7574 57.2426V57.2426C15.0408 56.1174 12.8826 53.9592 11.7574 51.2426V51.2426C10.6321 48.5261 10.6321 45.4739 11.7574 42.7574V42.7574C12.8826 40.0408 15.0408 37.8826 17.7574 36.7574V36.7574Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M53.7574 36.7574C56.4739 35.6321 59.5261 35.6321 62.2426 36.7574V36.7574C64.9592 37.8826 67.1174 40.0408 68.2426 42.7574V42.7574C69.3679 45.4739 69.3679 48.5261 68.2426 51.2426V51.2426C67.1174 53.9592 64.9592 56.1174 62.2426 57.2426V57.2426C59.5261 58.3679 56.4739 58.3679 53.7574 57.2426V57.2426C51.0408 56.1174 48.8826 53.9592 47.7574 51.2426V51.2426C46.6321 48.5261 46.6321 45.4739 47.7574 42.7574V42.7574C48.8826 40.0408 51.0408 37.8826 53.7574 36.7574V36.7574Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 20H27.5M34 20H27.5M27.5 20L32 30M39.5455 47L50 30M39.5455 47L32 30M39.5455 47L22.5 47L22 47L32 30M50 30H32M50 30L58 47"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50 30V21C50 20.4477 50.4477 20 51 20V20H56.3333C58.3584 20 60 21.6416 60 23.6667V23.6667C60 25.6917 58.3584 27.3333 56.3333 27.3333H56.1111"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M17.7574 36.7574C20.4739 35.6321 23.5261 35.6321 26.2426 36.7574C28.9592 37.8826 31.1174 40.0408 32.2426 42.7574C33.3679 45.4739 33.3679 48.5261 32.2426 51.2426C31.1174 53.9592 28.9592 56.1174 26.2426 57.2426C23.5261 58.3679 20.4739 58.3679 17.7574 57.2426C15.0408 56.1174 12.8826 53.9592 11.7574 51.2426C10.6321 48.5261 10.6321 45.4739 11.7574 42.7574C12.8826 40.0408 15.0408 37.8826 17.7574 36.7574Z"
            fill="#828282"
            stroke="#828282"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M53.7574 36.7574C56.4739 35.6321 59.5261 35.6321 62.2426 36.7574C64.9592 37.8826 67.1174 40.0408 68.2426 42.7574C69.3679 45.4739 69.3679 48.5261 68.2426 51.2426C67.1174 53.9592 64.9592 56.1174 62.2426 57.2426C59.5261 58.3679 56.4739 58.3679 53.7574 57.2426C51.0408 56.1174 48.8826 53.9592 47.7574 51.2426C46.6321 48.5261 46.6321 45.4739 47.7574 42.7574C48.8826 40.0408 51.0408 37.8826 53.7574 36.7574Z"
            fill="#828282"
            stroke="#828282"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 20H27.5M34 20H27.5M27.5 20L32 30M39.5455 47L50 30M39.5455 47L32 30M39.5455 47L22.5 47L22 47L32 30M50 30H32M50 30L58 47"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M50 30V21C50 20.4477 50.4477 20 51 20V20H56.3333C58.3584 20 60 21.6416 60 23.6667V23.6667C60 25.6917 58.3584 27.3333 56.3333 27.3333H56.1111"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M17.7575 37.2574C20.474 36.1321 23.5263 36.1321 26.2428 37.2574C28.9593 38.3826 31.1175 40.5408 32.2428 43.2574C33.368 45.9739 33.368 49.0261 32.2428 51.7426C31.1176 54.4592 28.9593 56.6174 26.2428 57.7426C23.5263 58.8679 20.474 58.8679 17.7575 57.7426C15.041 56.6174 12.8827 54.4592 11.7575 51.7426C10.6323 49.0261 10.6323 45.9739 11.7575 43.2574C12.8827 40.5408 15.041 38.3826 17.7575 37.2574Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M53.7575 37.2574C56.474 36.1321 59.5263 36.1321 62.2428 37.2574C64.9593 38.3826 67.1175 40.5408 68.2428 43.2574C69.368 45.9739 69.368 49.0261 68.2428 51.7426C67.1175 54.4592 64.9593 56.6174 62.2428 57.7426C59.5263 58.8679 56.474 58.8679 53.7575 57.7426C51.041 56.6174 48.8827 54.4592 47.7575 51.7426C46.6323 49.0261 46.6323 45.9739 47.7575 43.2574C48.8827 40.5408 51.041 38.3826 53.7575 37.2574Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50.0001 30.5L39.5456 47.5H22.0001L32.0001 30.5H50.0001Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.0001 20.5H27.5001M27.5001 20.5H34.0001M27.5001 20.5L32.0001 30.5M39.5456 47.5L50.0001 30.5M39.5456 47.5L32.0001 30.5M39.5456 47.5H22.0001L32.0001 30.5M50.0001 30.5H32.0001M50.0001 30.5L58.0001 47.5M50.0001 30.5V21.5C50.0001 20.9477 50.4478 20.5 51.0001 20.5H56.3335C58.3585 20.5 60.0001 22.1416 60.0001 24.1667C60.0001 26.1917 58.3585 27.8333 56.3335 27.8333H56.1112M11.7575 43.2574C12.8827 40.5408 15.041 38.3826 17.7575 37.2574C20.474 36.1321 23.5263 36.1321 26.2428 37.2574C28.9593 38.3826 31.1175 40.5408 32.2428 43.2574C33.368 45.9739 33.368 49.0261 32.2428 51.7426C31.1176 54.4592 28.9593 56.6174 26.2428 57.7426C23.5263 58.8679 20.474 58.8679 17.7575 57.7426C15.041 56.6174 12.8827 54.4592 11.7575 51.7426C10.6323 49.0261 10.6323 45.9739 11.7575 43.2574ZM47.7575 43.2574C48.8827 40.5408 51.041 38.3826 53.7575 37.2574C56.474 36.1321 59.5263 36.1321 62.2428 37.2574C64.9593 38.3826 67.1175 40.5408 68.2428 43.2574C69.368 45.9739 69.368 49.0261 68.2428 51.7426C67.1175 54.4592 64.9593 56.6174 62.2428 57.7426C59.5263 58.8679 56.474 58.8679 53.7575 57.7426C51.041 56.6174 48.8827 54.4592 47.7575 51.7426C46.6323 49.0261 46.6323 45.9739 47.7575 43.2574Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0001 20C22.0001 18.8954 22.8956 18 24.0001 18H34.0001C35.1047 18 36.0001 18.8954 36.0001 20C36.0001 21.1046 35.1047 22 34.0001 22H30.5933L33.2933 28H48.0001V21C48.0001 19.3431 49.3433 18 51.0001 18H56.3335C59.4631 18 62.0001 20.5371 62.0001 23.6667C62.0001 26.7963 59.4631 29.3333 56.3335 29.3333H56.1112C55.0067 29.3333 54.1112 28.4379 54.1112 27.3333C54.1112 26.2288 55.0067 25.3333 56.1112 25.3333H56.3335C57.2539 25.3333 58.0001 24.5871 58.0001 23.6667C58.0001 22.7462 57.2539 22 56.3335 22H52.0001V29.5529L54.303 34.4465C57.1589 33.6053 60.232 33.7597 63.0081 34.9096C66.2147 36.2378 68.7623 38.7854 70.0905 41.992C71.4187 45.1986 71.4187 48.8014 70.0905 52.008C68.7623 55.2146 66.2147 57.7622 63.0081 59.0904C59.8016 60.4186 56.1987 60.4186 52.9921 59.0904C49.7855 57.7622 47.2379 55.2146 45.9097 52.008C44.5815 48.8014 44.5815 45.1986 45.9097 41.992C46.9003 39.6005 48.5691 37.5756 50.6837 36.1497L49.7658 34.199L41.2492 48.0477C40.8853 48.6395 40.2403 49 39.5456 49H34.933C34.7746 50.0244 34.4938 51.0345 34.0905 52.008C32.7623 55.2146 30.2147 57.7622 27.0081 59.0904C23.8016 60.4186 20.1987 60.4186 16.9921 59.0904C13.7855 57.7622 11.2379 55.2146 9.90973 52.008C8.58152 48.8014 8.58152 45.1986 9.90973 41.992C11.2379 38.7854 13.7855 36.2378 16.9921 34.9096C20.1406 33.6055 23.6711 33.5818 26.8335 34.8387L29.7518 29.8775L26.207 22H24.0001C22.8956 22 22.0001 21.1046 22.0001 20ZM56.1905 47.8516L52.4163 39.8315C51.1864 40.7896 50.2124 42.057 49.6052 43.5227C48.683 45.7492 48.683 48.2508 49.6052 50.4773C50.5275 52.7037 52.2964 54.4726 54.5229 55.3949C56.7493 56.3171 59.2509 56.3171 61.4774 55.3949C63.7039 54.4726 65.4728 52.7037 66.395 50.4773C67.3172 48.2508 67.3172 45.7492 66.395 43.5227C65.4728 41.2963 63.7039 39.5273 61.4774 38.6051C59.7437 37.887 57.8432 37.7281 56.0356 38.1283L59.8098 46.1484C60.2801 47.1478 59.8512 48.3393 58.8517 48.8096C57.8523 49.28 56.6608 48.851 56.1905 47.8516ZM36.4697 45H34.933C34.7746 43.9756 34.4938 42.9655 34.0905 41.992C33.2559 39.977 31.9398 38.2223 30.2812 36.8668L31.7509 34.3684L36.4697 45ZM30.395 43.5227C29.8964 42.3189 29.1502 41.2489 28.2181 40.3741L25.497 45H30.8639C30.7507 44.4984 30.5944 44.0041 30.395 43.5227ZM20.2763 45.986L24.7704 38.346C22.7306 37.693 20.5164 37.7794 18.5229 38.6051C16.2964 39.5273 14.5275 41.2963 13.6052 43.5227C12.683 45.7492 12.683 48.2508 13.6052 50.4773C14.5275 52.7037 16.2964 54.4726 18.5229 55.3949C20.7493 56.3171 23.2509 56.3171 25.4774 55.3949C27.7039 54.4726 29.4728 52.7037 30.395 50.4773C30.5944 49.9959 30.7507 49.5016 30.8639 49L22.0001 49C21.2827 49 20.6202 48.6157 20.264 47.993C19.9078 47.3702 19.9125 46.6043 20.2763 45.986ZM39.8322 42.7159L35.076 32H46.4223L39.8322 42.7159Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-bike', CoreBike)
export default CoreBike
