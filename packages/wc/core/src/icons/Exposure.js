
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreExposure = {
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
            d="M66.8285 13.1716L13.1716 66.8285C12.4477 66.1046 12 65.1046 12 64V16C12 13.7909 13.7909 12 16 12H64C65.1046 12 66.1046 12.4477 66.8285 13.1716Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M66.8282 13.1716C67.5521 13.8955 67.9998 14.8955 67.9998 16V64C67.9998 66.2091 66.2089 68 63.9998 68H15.9998C14.8952 68 13.8952 67.5523 13.1714 66.8285L66.8282 13.1716Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43.9141 52L51.1868 52L52.6413 52L59.9141 52"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51.9141 44L51.9141 51.2727L51.9141 52.7273L51.9141 60"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36 28H20"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.1716 66.8285L66.8285 13.1716C66.1046 12.4477 65.1046 12 64 12H16C13.7909 12 12 13.7909 12 16V64C12 65.1046 12.4477 66.1046 13.1716 66.8285ZM19.9999 25C18.3431 25 16.9999 26.3431 16.9999 28C16.9999 29.6569 18.3431 31 19.9999 31H27.2726H28.7272H35.9999C37.6568 31 38.9999 29.6569 38.9999 28C38.9999 26.3431 37.6568 25 35.9999 25L28.7272 25L27.2726 25H19.9999Z"
            fill="currentColor"
          />
          <path
            d="M66.8285 13.1716L68.9498 15.293C70.1214 14.1214 70.1214 12.2219 68.9498 11.0504L66.8285 13.1716ZM13.1716 66.8285L11.0504 68.9498C12.2219 70.1214 14.1214 70.1214 15.293 68.9498L13.1716 66.8285ZM64.7072 11.0503L11.0503 64.7072L15.293 68.9498L68.9498 15.293L64.7072 11.0503ZM15.2929 64.7071C15.1086 64.5229 15 64.277 15 64H9C9 65.9322 9.78683 67.6864 11.0504 68.9498L15.2929 64.7071ZM15 64V16H9V64H15ZM15 16C15 15.4477 15.4477 15 16 15V9C12.134 9 9 12.134 9 16H15ZM16 15H64V9H16V15ZM64 15C64.277 15 64.5229 15.1086 64.7071 15.2929L68.9498 11.0504C67.6864 9.78683 65.9322 9 64 9V15Z"
            fill="currentColor"
          />
          <path
            d="M66.8282 13.1716L68.9496 11.0503C68.387 10.4877 67.6239 10.1716 66.8283 10.1716C66.0326 10.1716 65.2695 10.4877 64.7069 11.0503L66.8282 13.1716ZM13.1714 66.8285L11.0501 64.7072C10.4875 65.2698 10.1714 66.0329 10.1714 66.8285C10.1714 67.6242 10.4875 68.3872 11.0501 68.9498L13.1714 66.8285ZM64.7069 15.2929C64.8911 15.4772 64.9998 15.723 64.9998 16H70.9998C70.9998 14.0679 70.213 12.3138 68.9496 11.0503L64.7069 15.2929ZM64.9998 16V64H70.9998V16H64.9998ZM64.9998 64C64.9998 64.5523 64.552 65 63.9998 65V71C67.8658 71 70.9998 67.866 70.9998 64H64.9998ZM63.9998 65H15.9998V71H63.9998V65ZM15.9998 65C15.7228 65 15.4769 64.8914 15.2927 64.7071L11.0501 68.9498C12.3136 70.2133 14.0676 71 15.9998 71V65ZM15.2927 68.9498L68.9496 15.293L64.7069 11.0503L11.0501 64.7072L15.2927 68.9498Z"
            fill="currentColor"
          />
          <path
            d="M43.9141 52L51.1868 52L52.6413 52L59.9141 52"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51.9141 44L51.9141 51.2727L51.9141 52.7273L51.9141 60"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66.8285 13.1716L13.1716 66.8285C12.4477 66.1046 12 65.1046 12 64V16C12 13.7909 13.7909 12 16 12H64C65.1046 12 66.1046 12.4477 66.8285 13.1716Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66.8282 13.1716C67.5521 13.8955 67.9998 14.8955 67.9998 16V64C67.9998 66.2091 66.2089 68 63.9998 68H15.9998C14.8952 68 13.8952 67.5523 13.1714 66.8285L66.8282 13.1716Z"
            fill="#9B51E0"
          />
          <path
            d="M43.9141 52L51.1868 52L52.6413 52L59.9141 52"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51.9141 44L51.9141 51.2727L51.9141 52.7273L51.9141 60"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M20 28L27.2727 28L28.7273 28L36 28"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M66.8285 13.1716L13.1716 66.8285C12.4477 66.1046 12 65.1046 12 64V16C12 13.7909 13.7909 12 16 12H64C65.1046 12 66.1046 12.4477 66.8285 13.1716Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M66.8285 13.1716C67.5523 13.8955 67.9999 14.8955 67.9999 16V64C67.9999 66.2091 66.209 68 63.9999 68H15.9999C14.8954 68 13.8955 67.5523 13.1716 66.8285L66.8285 13.1716Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M66.8285 13.1716L13.1716 66.8285M66.8285 13.1716C66.1046 12.4477 65.1046 12 64 12H16C13.7909 12 12 13.7909 12 16V64C12 65.1046 12.4477 66.1046 13.1716 66.8285M66.8285 13.1716C67.5523 13.8955 67.9999 14.8955 67.9999 16V64C67.9999 66.2091 66.209 68 63.9999 68H15.9999C14.8954 68 13.8955 67.5523 13.1716 66.8285M59.914 52H43.914M51.914 60L51.914 44M35.9999 28H19.9999"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M19.9999 26C18.8953 26 17.9999 26.8954 17.9999 28C17.9999 29.1046 18.8953 30 19.9999 30H35.9999C37.1045 30 37.9999 29.1046 37.9999 28C37.9999 26.8954 37.1045 26 35.9999 26H19.9999Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43.914 50C42.8094 50 41.914 50.8954 41.914 52C41.914 53.1046 42.8094 54 43.914 54H49.914V60C49.914 61.1046 50.8094 62 51.914 62C53.0185 62 53.914 61.1046 53.914 60V54H59.914C61.0185 54 61.914 53.1046 61.914 52C61.914 50.8954 61.0185 50 59.914 50H53.914V44C53.914 42.8954 53.0185 42 51.914 42C50.8094 42 49.914 42.8954 49.914 44V50H43.914Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 64C10 65.6491 10.6679 67.1459 11.7432 68.2284L11.7573 68.2427C12.8409 69.3263 14.3436 70 15.9999 70H63.9999C67.3136 70 69.9999 67.3137 69.9999 64V16C69.9999 14.3508 69.3319 12.8539 68.2565 11.7714L68.2427 11.7574C67.1591 10.6738 65.6563 10 64 10H16C12.6863 10 10 12.6863 10 16V64ZM16 14C14.8954 14 14 14.8954 14 16V63.1716L63.1716 14H16ZM63.9999 66H16.8285L65.9999 16.8286V64C65.9999 65.1046 65.1045 66 63.9999 66Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-exposure', CoreExposure)
export default CoreExposure
