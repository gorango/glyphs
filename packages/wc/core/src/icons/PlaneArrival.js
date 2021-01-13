
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CorePlaneArrival = {
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
            d="M6.51318 64H74.5132"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51.7703 38.8019L43.3674 17.9904C42.6244 16.1503 41.1354 14.712 39.2706 14.0333L33.7429 12.0214C33.3112 11.8643 32.865 12.2164 32.9176 12.6728L35.2319 32.7824L19.4586 27.0414L17.6867 21.6386C17.3042 20.4722 16.4074 19.5461 15.254 19.1263L10.503 17.3971C10.0451 17.2304 9.56024 17.5677 9.5573 18.0551L9.47412 31.8211C9.47389 31.8593 9.48905 31.8951 9.51472 31.9212C9.52471 31.9533 9.54323 31.9828 9.56938 32.0062L16.1583 37.8976C19.6982 41.0628 23.8095 43.5235 28.2718 45.1476L55.1715 54.9383C58.0678 55.9925 61.1611 56.3945 64.2306 56.1159L65.9422 55.9605C67.7658 55.7949 69.3297 54.5908 69.956 52.8701C70.5823 51.1495 70.1582 49.2218 68.8677 47.9228L67.6564 46.7036C65.4841 44.517 62.8561 42.8368 59.9598 41.7826L51.7703 38.8019Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M6.51318 64H74.5132"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.7705 38.8015L43.3675 17.99C42.6245 16.1499 41.1355 14.7116 39.2707 14.0329L33.743 12.021C33.3113 11.8639 32.8651 12.216 32.9177 12.6724L35.232 32.782L19.4587 27.041L17.6868 21.6382C17.3043 20.4718 16.4075 19.5457 15.2541 19.1259L10.5031 17.3967C10.0452 17.23 9.56035 17.5673 9.5574 18.0547L9.47423 31.8207C9.474 31.8589 9.48916 31.8947 9.51482 31.9208C9.52481 31.9529 9.54333 31.9824 9.56949 32.0058L16.1584 37.8972C19.6983 41.0624 23.8096 43.5231 28.2719 45.1472L55.1716 54.9379C58.0679 55.9921 61.1612 56.3941 64.2308 56.1155L65.9423 55.9601C67.7659 55.7945 69.3298 54.5904 69.9561 52.8697C70.5824 51.1491 70.1583 49.2214 68.8678 47.9224L67.6565 46.7032C65.4842 44.5166 62.8562 42.8364 59.9599 41.7822L51.7705 38.8015Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M6.51318 64H74.5132"
            stroke="#56CCF2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.7705 38.8015L43.3675 17.99C42.6245 16.1499 41.1355 14.7116 39.2707 14.0329L33.743 12.021C33.3113 11.8639 32.8651 12.216 32.9177 12.6724L35.232 32.782L19.4587 27.041L17.6868 21.6382C17.3043 20.4718 16.4075 19.5457 15.2541 19.1259L10.5031 17.3967C10.0452 17.23 9.56035 17.5673 9.5574 18.0547L9.47423 31.8207C9.474 31.8589 9.48916 31.8947 9.51482 31.9208C9.52481 31.9529 9.54333 31.9824 9.56949 32.0058L16.1584 37.8972C19.6983 41.0624 23.8096 43.5231 28.2719 45.1472L55.1716 54.9379C58.0679 55.9921 61.1612 56.3941 64.2308 56.1155L65.9423 55.9601C67.7659 55.7945 69.3298 54.5904 69.9561 52.8697C70.5824 51.1491 70.1583 49.2214 68.8678 47.9224L67.6565 46.7032C65.4842 44.5166 62.8562 42.8364 59.9599 41.7822L51.7705 38.8015Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M51.7705 38.8019L43.3675 17.9904C42.6245 16.1503 41.1355 14.712 39.2708 14.0333L33.7431 12.0214C33.3113 11.8643 32.8652 12.2164 32.9177 12.6728L35.232 32.7824L19.4587 27.0414L17.6869 21.6386C17.3044 20.4722 16.4075 19.5461 15.2541 19.1263L10.5032 17.3971C10.0452 17.2304 9.56037 17.5677 9.55743 18.0551L9.47425 31.8211C9.47402 31.8593 9.48918 31.8951 9.51485 31.9212C9.52483 31.9533 9.54335 31.9828 9.56951 32.0062L16.1584 37.8976C19.6983 41.0628 23.8097 43.5235 28.2719 45.1476L55.1716 54.9383C58.068 55.9925 61.1612 56.3945 64.2308 56.1159L65.9423 55.9605C67.766 55.7949 69.3298 54.5908 69.9561 52.8701C70.5824 51.1495 70.1584 49.2218 68.8678 47.9228L67.6566 46.7036C65.4843 44.517 62.8562 42.8368 59.9599 41.7826L51.7705 38.8019Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M6.51318 64.0002H74.5132M43.3675 17.9904L51.7705 38.8019L59.9599 41.7826C62.8562 42.8368 65.4843 44.517 67.6566 46.7036L68.8678 47.9228C70.1584 49.2218 70.5824 51.1495 69.9561 52.8701C69.3298 54.5908 67.766 55.7949 65.9423 55.9605L64.2308 56.1159C61.1612 56.3945 58.068 55.9925 55.1716 54.9383L28.2719 45.1476C23.8096 43.5235 19.6983 41.0628 16.1584 37.8976L9.56951 32.0062C9.54335 31.9828 9.52483 31.9533 9.51485 31.9212C9.48918 31.8951 9.47402 31.8593 9.47425 31.8211L9.55743 18.0551C9.56037 17.5677 10.0452 17.2304 10.5032 17.3971L15.2541 19.1263C16.4075 19.5461 17.3044 20.4722 17.6869 21.6386L19.4587 27.0414L35.232 32.7824L32.9177 12.6728C32.8652 12.2164 33.3113 11.8643 33.7431 12.0214L39.2708 14.0333C41.1355 14.712 42.6245 16.1503 43.3675 17.9904Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M4.51318 64.0001C4.51318 62.8955 5.40861 62.0001 6.51318 62.0001H74.5132C75.6178 62.0001 76.5132 62.8955 76.5132 64.0001C76.5132 65.1047 75.6178 66.0001 74.5132 66.0001H6.51318C5.40861 66.0001 4.51318 65.1047 4.51318 64.0001Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.4271 10.142C32.5983 9.47632 30.7083 10.968 30.9308 12.9014L32.8751 29.7961L21.0562 25.4944L19.5873 21.0153C19.0135 19.2658 17.6683 17.8766 15.9382 17.2468L11.1872 15.5176C9.4296 14.8779 7.56876 16.1725 7.55746 18.0429L7.47429 31.8089C7.47186 32.2103 7.58165 32.593 7.77807 32.9213C7.89523 33.134 8.04895 33.3294 8.23641 33.497L14.8253 39.3885C18.5549 42.7232 22.8865 45.3158 27.5878 47.0269L54.4876 56.8176C57.6604 57.9724 61.049 58.4129 64.4116 58.1076L66.1232 57.9522C68.7185 57.7166 70.9442 56.003 71.8355 53.5541C72.7268 51.1053 72.1233 48.3619 70.2867 46.5132L69.0754 45.294C66.6957 42.8986 63.8168 41.0579 60.644 39.9031L53.2915 37.2271L45.222 17.2415C44.2668 14.8757 42.3523 13.0265 39.9548 12.1539L34.4271 10.142ZM35.1602 14.6655L37.2189 32.5536C37.2981 33.2422 37.0152 33.9228 36.4711 34.3522C35.927 34.7817 35.1993 34.8988 34.548 34.6617L18.7747 28.9207C18.198 28.7108 17.7496 28.2477 17.5583 27.6645L15.7864 22.2618C15.5952 21.6786 15.1468 21.2155 14.5701 21.0056L11.5463 19.905L11.4791 31.0306L17.4915 36.4066C20.8417 39.4022 24.7328 41.731 28.9559 43.2681L55.8557 53.0588C58.4755 54.0124 61.2734 54.3761 64.0499 54.124L65.7615 53.9686C66.8134 53.8731 67.7155 53.1786 68.0767 52.186C68.438 51.1935 68.1934 50.0816 67.449 49.3323L66.2377 48.1131C64.2728 46.1353 61.8957 44.6154 59.2759 43.6619L51.0864 40.6812C50.5537 40.4873 50.1282 40.0763 49.9159 39.5506L41.513 18.7391C40.9823 17.4248 39.9187 16.3974 38.5867 15.9126L35.1602 14.6655Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-plane-arrival', CorePlaneArrival)
export default CorePlaneArrival
