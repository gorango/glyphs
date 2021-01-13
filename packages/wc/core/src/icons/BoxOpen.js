
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBoxOpen = {
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
            d="M40 22V66L14 58V33.8673"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 22V66L66 58V33.8673"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M14 18L40 22L32.136 38L8 32.5L14 18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M66 18L40 22L47.864 38L72 32.5L66 18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M14 18L40 14L66 18"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66 25.8462V30.7903L49.5101 34.548L44.4947 24.3438L64.1284 21.3232L66 25.8462ZM40 28.8012L45.1716 39.3233C45.7848 40.571 47.175 41.2339 48.5305 40.925L66 36.9442V58L40 66V28.8012Z"
            fill="currentColor"
          />
          <path
            d="M66 18L40 22L47.864 38L72 32.5L66 18Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 25.8462V30.7903L30.4899 34.548L35.5053 24.3438L15.8716 21.3232L14 25.8462ZM40 28.8012L34.8284 39.3233C34.2152 40.571 32.825 41.2339 31.4695 40.925L14 36.9442V58L40 66V28.8012Z"
            fill="currentColor"
          />
          <path
            d="M14 18L40 22L32.136 38L8 32.5L14 18Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 22V66L66 58V33.8673L47.864 38L40 22Z"
            fill="#F2C94C"
          />
          <path
            d="M66 18L40 22L47.864 38L72 32.5L66 18Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 22V66L14 58V33.8673L32.136 38L40 22Z"
            fill="#F2C94C"
          />
          <path
            d="M14 18L40 22L32.136 38L8 32.5L14 18Z"
            fill="#F2994A"
          />
          <path
            d="M14 18L40 22L66 18L40 14L14 18Z"
            fill="#EB5757"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40 22V66L66 58V33.8673L47.864 38L40 22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M66 18L40 22L47.864 38L72 32.5L66 18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 22V66L14 58V33.8673L32.136 38L40 22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14 18L40 22L32.136 38L8 32.5L14 18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14 18L40 22L66 18L40 14L14 18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 66V22M40 66L66 58V33.8673L47.864 38M40 66L14 58V33.8673L32.136 38M40 22L47.864 38M40 22L66 18M40 22L32.136 38M40 22L14 18M47.864 38L72 32.5L66 18M66 18L40 14L14 18M32.136 38L8 32.5L14 18"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.727 16.4899C12.4783 16.6998 12.2833 16.9694 12.1627 17.2749L6.17509 31.7449C5.9527 32.2823 5.97852 32.8904 6.24567 33.4071C6.51281 33.9238 6.99412 34.2964 7.56122 34.4256L12.025 35.4428V58C12.025 58.867 12.5905 59.6327 13.4192 59.8877L39.4131 67.8858L39.4453 67.8955C39.8118 68.0027 40.2064 68.0029 40.5808 67.8877L40.5866 67.8859L66.5808 59.8877C67.4095 59.6327 67.975 58.867 67.975 58V35.4428L72.4388 34.4256C73.0059 34.2964 73.4872 33.9238 73.7544 33.4071C74.0215 32.8904 74.0473 32.2823 73.825 31.7449L67.8374 17.2748C67.7999 17.18 67.7552 17.0885 67.704 17.0013C67.5889 16.8046 67.4424 16.6325 67.273 16.4899C67.0632 16.3128 66.8152 16.1783 66.5411 16.1004C66.4534 16.0754 66.3638 16.0564 66.2726 16.0437L40.3003 12.048C40.1013 12.0173 39.8988 12.0173 39.6997 12.048L13.7274 16.0437C13.6364 16.0564 13.5468 16.0754 13.4593 16.1003C13.1851 16.1781 12.9369 16.3128 12.727 16.4899ZM37.041 23.543L15.2321 20.1878L10.7192 31.094L31.0524 35.7274L37.041 23.543ZM43.2504 62.9335L43.2451 62.9351L41.975 63.3259V30.4958L46.0915 38.8712C46.4952 39.6926 47.4104 40.129 48.3028 39.9256L56.6463 38.0244L56.6485 38.0238L64.025 36.3429V56.5413L43.2504 62.9335ZM40 15.9982L26.9886 18L40 20.0018L53.0115 18L40 15.9982ZM64.7679 20.1878L42.9591 23.543L48.9477 35.7274L59.1302 33.4071L59.132 33.4067L69.2808 31.094L65.4089 21.7368L64.7679 20.1878ZM33.9085 38.8712L38.025 30.4958V63.3259L15.975 56.5413V36.3429L31.6972 39.9256C32.5896 40.129 33.5048 39.6926 33.9085 38.8712Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-box-open', CoreBoxOpen)
export default CoreBoxOpen
