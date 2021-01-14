
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreSortAlphaUp = {
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
            d="M26 25L26 64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M31.818 24.9999H20.182C19.0078 24.9999 18.4197 23.5802 19.25 22.7499L24.5858 17.4142C25.3668 16.6331 26.6332 16.6331 27.4142 17.4142L32.75 22.7499C33.5803 23.5802 32.9923 24.9999 31.818 24.9999Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47.9999 29.4998H59.9999M45 36L53.6592 16.2228C53.7185 16.0875 53.8522 16 54 16C54.1478 16 54.2815 16.0875 54.3408 16.2228L63 36"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46.5333 44H61.4667V44.4167L46 63.5833V64H62"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M29 25C29 23.3431 27.6569 22 26 22C24.3431 22 23 23.3431 23 25L29 25ZM23 64C23 65.6569 24.3431 67 26 67C27.6569 67 29 65.6569 29 64H23ZM23 25L23 64H29L29 25L23 25Z"
            fill="currentColor"
          />
          <path
            d="M31.818 25L20.182 25C19.0078 25 18.4197 23.5803 19.25 22.75L24.5858 17.4142C25.3668 16.6332 26.6332 16.6332 27.4142 17.4142L32.75 22.75C33.5803 23.5803 32.9923 25 31.818 25Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47.9999 26.4998C46.3431 26.4998 44.9999 27.8429 44.9999 29.4998C44.9999 31.1566 46.3431 32.4998 47.9999 32.4998V26.4998ZM59.9999 32.4998C61.6568 32.4998 62.9999 31.1566 62.9999 29.4998C62.9999 27.8429 61.6568 26.4998 59.9999 26.4998V32.4998ZM53.6592 16.2228L50.9111 15.0196V15.0196L53.6592 16.2228ZM42.2519 34.7968C41.5873 36.3145 42.279 38.0836 43.7968 38.7481C45.3145 39.4127 47.0836 38.721 47.7481 37.2032L42.2519 34.7968ZM54.3408 16.2228L57.0889 15.0196V15.0196L54.3408 16.2228ZM60.2519 37.2032C60.9164 38.721 62.6855 39.4127 64.2032 38.7481C65.721 38.0836 66.4127 36.3145 65.7481 34.7968L60.2519 37.2032ZM47.9999 32.4998H59.9999V26.4998H47.9999V32.4998ZM50.9111 15.0196L42.2519 34.7968L47.7481 37.2032L56.4073 17.4261L50.9111 15.0196ZM51.5927 17.4261L60.2519 37.2032L65.7481 34.7968L57.0889 15.0196L51.5927 17.4261ZM54 19C52.9562 19 52.0113 18.3822 51.5927 17.4261L57.0889 15.0196C56.5517 13.7927 55.3394 13 54 13V19ZM56.4073 17.4261C55.9887 18.3822 55.0438 19 54 19V13C52.6606 13 51.4483 13.7927 50.9111 15.0196L56.4073 17.4261Z"
            fill="currentColor"
          />
          <path
            d="M46.5333 41C44.8765 41 43.5333 42.3431 43.5333 44C43.5333 45.6569 44.8765 47 46.5333 47V41ZM61.4667 44H64.4667C64.4667 42.3431 63.1235 41 61.4667 41V44ZM62 67C63.6569 67 65 65.6569 65 64C65 62.3431 63.6569 61 62 61V67ZM46 64H43C43 65.6569 44.3431 67 46 67V64ZM61.4667 44.4167L63.8013 46.3006C64.2319 45.7671 64.4667 45.1022 64.4667 44.4167H61.4667ZM46 63.5833L43.6653 61.6994C43.2348 62.2329 43 62.8978 43 63.5833H46ZM46.5333 47H61.4667V41H46.5333V47ZM62 61H46L46 67H62V61ZM58.4667 44V44.4167H64.4667V44H58.4667ZM59.132 42.5327L43.6653 61.6994L48.3347 65.4673L63.8013 46.3006L59.132 42.5327ZM43 63.5833V64H49V63.5833H43Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M28 25C28 23.8954 27.1046 23 26 23C24.8954 23 24 23.8954 24 25L28 25ZM24 64C24 65.1046 24.8954 66 26 66C27.1046 66 28 65.1046 28 64H24ZM24 25L24 64H28L28 25L24 25Z"
            fill="#F2C94C"
          />
          <path
            d="M31.818 25L20.182 25C19.0078 25 18.4197 23.5803 19.25 22.75L24.5858 17.4142C25.3668 16.6332 26.6332 16.6332 27.4142 17.4142L32.75 22.75C33.5803 23.5803 32.9923 25 31.818 25Z"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47.9999 27.4998C46.8954 27.4998 45.9999 28.3952 45.9999 29.4998C45.9999 30.6043 46.8954 31.4998 47.9999 31.4998V27.4998ZM59.9999 31.4998C61.1045 31.4998 61.9999 30.6043 61.9999 29.4998C61.9999 28.3952 61.1045 27.4998 59.9999 27.4998V31.4998ZM53.6592 16.2228L51.8271 15.4207L51.8271 15.4207L53.6592 16.2228ZM43.1679 35.1978C42.7249 36.2097 43.186 37.3891 44.1978 37.8321C45.2097 38.2751 46.3891 37.814 46.8321 36.8022L43.1679 35.1978ZM54.3408 16.2228L56.1729 15.4207V15.4207L54.3408 16.2228ZM61.1679 36.8022C61.6109 37.814 62.7903 38.2751 63.8022 37.8321C64.814 37.3891 65.2751 36.2097 64.8321 35.1978L61.1679 36.8022ZM47.9999 31.4998H59.9999V27.4998H47.9999V31.4998ZM51.8271 15.4207L43.1679 35.1978L46.8321 36.8022L55.4913 17.025L51.8271 15.4207ZM52.5087 17.025L61.1679 36.8022L64.8321 35.1978L56.1729 15.4207L52.5087 17.025ZM54 18C53.3534 18 52.7681 17.6173 52.5087 17.025L56.1729 15.4207C55.795 14.5576 54.9422 14 54 14V18ZM55.4913 17.025C55.2319 17.6173 54.6466 18 54 18V14C53.0578 14 52.205 14.5576 51.8271 15.4207L55.4913 17.025Z"
            fill="#F2994A"
          />
          <path
            d="M46.5333 42C45.4288 42 44.5333 42.8954 44.5333 44C44.5333 45.1046 45.4288 46 46.5333 46V42ZM61.4667 44H63.4667C63.4667 42.8954 62.5712 42 61.4667 42V44ZM62 66C63.1046 66 64 65.1046 64 64C64 62.8954 63.1046 62 62 62V66ZM46 64H44C44 65.1046 44.8954 66 46 66V64ZM61.4667 44.4167L63.0231 45.6726C63.3101 45.317 63.4667 44.8737 63.4667 44.4167H61.4667ZM46 63.5833L44.4436 62.3274C44.1565 62.683 44 63.1263 44 63.5833H46ZM46.5333 46H61.4667V42H46.5333V46ZM62 62H46V66H62V62ZM59.4667 44V44.4167H63.4667V44H59.4667ZM59.9102 43.1607L44.4436 62.3274L47.5564 64.8393L63.0231 45.6726L59.9102 43.1607ZM44 63.5833V64H48V63.5833H44Z"
            fill="#F2C94C"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M31.818 25H20.182C19.0078 25 18.4197 23.5803 19.25 22.75L24.5858 17.4142C25.3668 16.6332 26.6332 16.6332 27.4142 17.4142L32.75 22.75C33.5803 23.5803 32.9923 25 31.818 25Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26 25L26 64M47.9999 29.4998H59.9999M45 36L53.6592 16.2228C53.7185 16.0875 53.8522 16 54 16C54.1478 16 54.2815 16.0875 54.3408 16.2228L63 36M46.5333 44H61.4667V44.4167L46 63.5833V64H62M20.182 25H31.818C32.9923 25 33.5803 23.5803 32.75 22.75L27.4142 17.4142C26.6332 16.6332 25.3668 16.6332 24.5858 17.4142L19.25 22.75C18.4197 23.5803 19.0078 25 20.182 25Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.168 36.8022L58.8464 31.4998H49.1538L46.8322 36.8022C46.3892 37.814 45.2098 38.2751 44.198 37.8321C43.1861 37.3891 42.725 36.2097 43.168 35.1978L51.8272 15.4207C52.2051 14.5576 53.058 14 54.0001 14C54.9423 14 55.7951 14.5576 56.173 15.4207L64.8322 35.1978C65.2752 36.2097 64.8141 37.3891 63.8023 37.8321C62.7904 38.2751 61.611 37.814 61.168 36.8022ZM54.0001 20.431L57.0951 27.4998H50.9051L54.0001 20.431Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.1717 16C24.7338 14.4379 27.2664 14.4379 28.8285 16L34.1643 21.3358C36.2546 23.426 34.7742 27 31.8181 27H28.0001L28.0001 64C28.0001 65.1046 27.1047 66 26.0001 66C24.8955 66 24.0001 65.1046 24.0001 64L24.0001 27H20.1821C17.2261 27 15.7457 23.426 17.8359 21.3358L23.1717 16ZM30.1717 23H21.8285L26.0001 18.8284L30.1717 23Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M61.4668 42C62.5714 42 63.4668 42.8954 63.4668 44V44.4167C63.4668 44.8737 63.3102 45.317 63.0232 45.6726L49.8478 62H62.0001C63.1047 62 64.0001 62.8954 64.0001 64C64.0001 65.1046 63.1047 66 62.0001 66H46.0001C44.8955 66 44.0001 65.1046 44.0001 64V63.5833C44.0001 63.1263 44.1567 62.683 44.4437 62.3274L57.6191 46H46.5334C45.4289 46 44.5334 45.1046 44.5334 44C44.5334 42.8954 45.4289 42 46.5334 42H61.4668Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-sort-alpha-up', CoreSortAlphaUp)
export default CoreSortAlphaUp