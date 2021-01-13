
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBorderOuter = {
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
            d="M40 16L40 64M16 40H64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="0.01 8"
          />
          <path
            d="M64 64H16V16H64V64Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M43 16C43 14.3431 41.6569 13 40 13C38.3431 13 37 14.3431 37 16L43 16ZM37 64C37 65.6569 38.3431 67 40 67C41.6569 67 43 65.6569 43 64H37ZM16 37C14.3431 37 13 38.3431 13 40C13 41.6569 14.3431 43 16 43V37ZM64 43C65.6569 43 67 41.6569 67 40C67 38.3431 65.6569 37 64 37L64 43ZM43 63.995C43 62.3382 41.6569 60.995 40 60.995C38.3431 60.995 37 62.3382 37 63.995L43 63.995ZM37 56.005C37 57.6618 38.3431 59.005 40 59.005C41.6569 59.005 43 57.6618 43 56.005L37 56.005ZM43 55.995C43 54.3382 41.6569 52.995 40 52.995C38.3431 52.995 37 54.3382 37 55.995L43 55.995ZM37 48.005C37 49.6618 38.3431 51.005 40 51.005C41.6569 51.005 43 49.6618 43 48.005L37 48.005ZM43 47.995C43 46.3382 41.6569 44.995 40 44.995C38.3431 44.995 37 46.3382 37 47.995H43ZM37 40.005C37 41.6618 38.3431 43.005 40 43.005C41.6569 43.005 43 41.6618 43 40.005H37ZM43 39.995C43 38.3382 41.6569 36.995 40 36.995C38.3431 36.995 37 38.3382 37 39.995L43 39.995ZM37 32.005C37 33.6618 38.3431 35.005 40 35.005C41.6569 35.005 43 33.6618 43 32.005L37 32.005ZM43 31.995C43 30.3382 41.6569 28.995 40 28.995C38.3431 28.995 37 30.3382 37 31.995H43ZM37 24.005C37 25.6618 38.3431 27.005 40 27.005C41.6569 27.005 43 25.6618 43 24.005H37ZM43 23.995C43 22.3382 41.6569 20.995 40 20.995C38.3431 20.995 37 22.3382 37 23.995H43ZM37 16.005C37 17.6618 38.3431 19.005 40 19.005C41.6569 19.005 43 17.6618 43 16.005L37 16.005ZM16.005 43C17.6618 43 19.005 41.6569 19.005 40C19.005 38.3431 17.6618 37 16.005 37V43ZM23.995 37C22.3382 37 20.995 38.3431 20.995 40C20.995 41.6569 22.3382 43 23.995 43V37ZM24.005 43C25.6618 43 27.005 41.6569 27.005 40C27.005 38.3431 25.6618 37 24.005 37V43ZM31.995 37C30.3382 37 28.995 38.3431 28.995 40C28.995 41.6569 30.3382 43 31.995 43V37ZM32.005 43C33.6618 43 35.005 41.6569 35.005 40C35.005 38.3431 33.6618 37 32.005 37V43ZM39.995 37C38.3382 37 36.995 38.3431 36.995 40C36.995 41.6569 38.3382 43 39.995 43V37ZM40.005 43C41.6618 43 43.005 41.6569 43.005 40C43.005 38.3431 41.6618 37 40.005 37V43ZM47.995 37C46.3382 37 44.995 38.3431 44.995 40C44.995 41.6569 46.3382 43 47.995 43V37ZM48.005 43C49.6618 43 51.005 41.6569 51.005 40C51.005 38.3431 49.6618 37 48.005 37L48.005 43ZM55.995 37C54.3382 37 52.995 38.3431 52.995 40C52.995 41.6569 54.3382 43 55.995 43L55.995 37ZM56.005 43C57.6618 43 59.005 41.6569 59.005 40C59.005 38.3431 57.6618 37 56.005 37L56.005 43ZM63.995 37C62.3382 37 60.995 38.3431 60.995 40C60.995 41.6569 62.3382 43 63.995 43L63.995 37ZM43 64V63.995L37 63.995V64H43ZM43 56.005V55.995L37 55.995V56.005L43 56.005ZM43 48.005V47.995H37V48.005L43 48.005ZM43 40.005V39.995L37 39.995V40.005H43ZM43 32.005V31.995H37V32.005L43 32.005ZM43 24.005V23.995H37V24.005H43ZM43 16.005V16L37 16V16.005L43 16.005ZM16 43H16.005V37H16V43ZM23.995 43H24.005V37H23.995V43ZM31.995 43H32.005V37H31.995V43ZM39.995 43H40.005V37H39.995V43ZM47.995 43H48.005L48.005 37H47.995V43ZM55.995 43H56.005L56.005 37H55.995L55.995 43ZM63.995 43H64L64 37H63.995L63.995 43Z"
            fill="currentColor"
          />
          <path
            d="M16 61C14.3431 61 13 62.3431 13 64C13 65.6569 14.3431 67 16 67V61ZM64 67C65.6569 67 67 65.6569 67 64C67 62.3431 65.6569 61 64 61V67ZM67 16C67 14.3431 65.6569 13 64 13C62.3432 13 61 14.3431 61 16L67 16ZM61 64C61 65.6569 62.3431 67 64 67C65.6569 67 67 65.6569 67 64H61ZM16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19V13ZM64 19C65.6569 19 67 17.6569 67 16C67 14.3431 65.6569 13 64 13V19ZM19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16L19 16ZM13 64C13 65.6569 14.3431 67 16 67C17.6569 67 19 65.6569 19 64H13ZM16 67H64V61L16 61V67ZM61 16L61 64H67L67 16L61 16ZM16 19L64 19V13L16 13V19ZM13 16L13 64H19L19 16L13 16Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M42 16C42 14.8954 41.1046 14 40 14C38.8954 14 38 14.8954 38 16L42 16ZM38 64C38 65.1046 38.8954 66 40 66C41.1046 66 42 65.1046 42 64H38ZM16 38C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42V38ZM64 42C65.1046 42 66 41.1046 66 40C66 38.8954 65.1046 38 64 38V42ZM42 63.995C42 62.8904 41.1046 61.995 40 61.995C38.8954 61.995 38 62.8904 38 63.995L42 63.995ZM38 56.005C38 57.1096 38.8954 58.005 40 58.005C41.1046 58.005 42 57.1096 42 56.005L38 56.005ZM42 55.995C42 54.8904 41.1046 53.995 40 53.995C38.8954 53.995 38 54.8904 38 55.995L42 55.995ZM38 48.005C38 49.1096 38.8954 50.005 40 50.005C41.1046 50.005 42 49.1096 42 48.005L38 48.005ZM42 47.995C42 46.8904 41.1046 45.995 40 45.995C38.8954 45.995 38 46.8904 38 47.995H42ZM38 40.005C38 41.1096 38.8954 42.005 40 42.005C41.1046 42.005 42 41.1096 42 40.005H38ZM42 39.995C42 38.8904 41.1046 37.995 40 37.995C38.8954 37.995 38 38.8904 38 39.995L42 39.995ZM38 32.005C38 33.1096 38.8954 34.005 40 34.005C41.1046 34.005 42 33.1096 42 32.005L38 32.005ZM42 31.995C42 30.8904 41.1046 29.995 40 29.995C38.8954 29.995 38 30.8904 38 31.995H42ZM38 24.005C38 25.1096 38.8954 26.005 40 26.005C41.1046 26.005 42 25.1096 42 24.005H38ZM42 23.995C42 22.8904 41.1046 21.995 40 21.995C38.8954 21.995 38 22.8904 38 23.995H42ZM38 16.005C38 17.1096 38.8954 18.005 40 18.005C41.1046 18.005 42 17.1096 42 16.005L38 16.005ZM16.005 42C17.1096 42 18.005 41.1046 18.005 40C18.005 38.8954 17.1096 38 16.005 38V42ZM23.995 38C22.8904 38 21.995 38.8954 21.995 40C21.995 41.1046 22.8904 42 23.995 42V38ZM24.005 42C25.1096 42 26.005 41.1046 26.005 40C26.005 38.8954 25.1096 38 24.005 38V42ZM31.995 38C30.8904 38 29.995 38.8954 29.995 40C29.995 41.1046 30.8904 42 31.995 42V38ZM32.005 42C33.1096 42 34.005 41.1046 34.005 40C34.005 38.8954 33.1096 38 32.005 38V42ZM39.995 38C38.8904 38 37.995 38.8954 37.995 40C37.995 41.1046 38.8904 42 39.995 42V38ZM40.005 42C41.1096 42 42.005 41.1046 42.005 40C42.005 38.8954 41.1096 38 40.005 38V42ZM47.995 38C46.8904 38 45.995 38.8954 45.995 40C45.995 41.1046 46.8904 42 47.995 42V38ZM48.005 42C49.1096 42 50.005 41.1046 50.005 40C50.005 38.8954 49.1096 38 48.005 38L48.005 42ZM55.995 38C54.8904 38 53.995 38.8954 53.995 40C53.995 41.1046 54.8904 42 55.995 42L55.995 38ZM56.005 42C57.1096 42 58.005 41.1046 58.005 40C58.005 38.8954 57.1096 38 56.005 38L56.005 42ZM63.995 38C62.8904 38 61.995 38.8954 61.995 40C61.995 41.1046 62.8904 42 63.995 42L63.995 38ZM42 64V63.995L38 63.995V64H42ZM42 56.005V55.995L38 55.995V56.005L42 56.005ZM42 48.005V47.995H38V48.005L42 48.005ZM42 40.005V39.995L38 39.995V40.005H42ZM42 32.005V31.995H38V32.005L42 32.005ZM42 24.005V23.995H38V24.005H42ZM42 16.005V16L38 16V16.005L42 16.005ZM16 42H16.005V38H16V42ZM23.995 42H24.005V38H23.995V42ZM31.995 42H32.005V38H31.995V42ZM39.995 42H40.005V38H39.995V42ZM47.995 42H48.005L48.005 38H47.995V42ZM55.995 42H56.005L56.005 38H55.995L55.995 42ZM63.995 42H64V38H63.995L63.995 42Z"
            fill="#56CCF2"
          />
          <path
            d="M16 62C14.8954 62 14 62.8954 14 64C14 65.1046 14.8954 66 16 66V62ZM64 66C65.1046 66 66 65.1046 66 64C66 62.8954 65.1046 62 64 62V66ZM66 16C66 14.8954 65.1046 14 64 14C62.8954 14 62 14.8954 62 16L66 16ZM62 64C62 65.1046 62.8954 66 64 66C65.1046 66 66 65.1046 66 64H62ZM16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18V14ZM64 18C65.1046 18 66 17.1046 66 16C66 14.8954 65.1046 14 64 14V18ZM18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16L18 16ZM14 64C14 65.1046 14.8954 66 16 66C17.1046 66 18 65.1046 18 64H14ZM16 66H64V62L16 62V66ZM62 16L62 64H66L66 16L62 16ZM16 18L64 18V14L16 14V18ZM14 16L14 64H18L18 16L14 16Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40 16L40 64M16 40H64"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
            stroke-dasharray="0.01 8"
          />
          <path
            d="M64 64H16V16H64V64Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.0001 21.995C41.1047 21.995 42.0001 22.8904 42.0001 23.995V24.005C42.0001 25.1096 41.1047 26.005 40.0001 26.005C38.8955 26.005 38.0001 25.1096 38.0001 24.005V23.995C38.0001 22.8904 38.8955 21.995 40.0001 21.995ZM40.0001 29.995C41.1047 29.995 42.0001 30.8904 42.0001 31.995V32.005C42.0001 33.1096 41.1047 34.005 40.0001 34.005C38.8955 34.005 38.0001 33.1096 38.0001 32.005V31.995C38.0001 30.8904 38.8955 29.995 40.0001 29.995ZM38.5832 41.4165C38.9454 41.78 39.4465 42.005 40.0001 42.005C40.5536 42.005 41.0545 41.7802 41.4166 41.4169C41.7801 41.0547 42.0051 40.5536 42.0051 40C42.0051 39.4463 41.7801 38.9452 41.4166 38.583C41.0545 38.2198 40.5535 37.995 40.0001 37.995C39.4466 37.995 38.9456 38.2198 38.5835 38.5832C38.22 38.9453 37.9951 39.4464 37.9951 40C37.9951 40.5535 38.2199 41.0544 38.5832 41.4165ZM21.9951 40C21.9951 38.8954 22.8905 38 23.9951 38H24.0051C25.1097 38 26.0051 38.8954 26.0051 40C26.0051 41.1046 25.1097 42 24.0051 42H23.9951C22.8905 42 21.9951 41.1046 21.9951 40ZM29.9951 40C29.9951 38.8954 30.8905 38 31.9951 38H32.0051C33.1097 38 34.0051 38.8954 34.0051 40C34.0051 41.1046 33.1097 42 32.0051 42H31.9951C30.8905 42 29.9951 41.1046 29.9951 40ZM45.9951 40C45.9951 38.8954 46.8905 38 47.9951 38H48.0051C49.1097 38 50.0051 38.8954 50.0051 40C50.0051 41.1046 49.1097 42 48.0051 42H47.9951C46.8905 42 45.9951 41.1046 45.9951 40ZM53.9951 40C53.9951 38.8954 54.8905 38 55.9951 38H56.0051C57.1097 38 58.0051 38.8954 58.0051 40C58.0051 41.1046 57.1097 42 56.0051 42H55.9951C54.8905 42 53.9951 41.1046 53.9951 40ZM40.0001 45.995C41.1047 45.995 42.0001 46.8904 42.0001 47.995V48.005C42.0001 49.1096 41.1047 50.005 40.0001 50.005C38.8955 50.005 38.0001 49.1096 38.0001 48.005V47.995C38.0001 46.8904 38.8955 45.995 40.0001 45.995ZM40.0001 53.995C41.1047 53.995 42.0001 54.8904 42.0001 55.995V56.005C42.0001 57.1096 41.1047 58.005 40.0001 58.005C38.8955 58.005 38.0001 57.1096 38.0001 56.005V55.995C38.0001 54.8904 38.8955 53.995 40.0001 53.995Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 16C14 14.8954 14.8954 14 16 14H64C65.1046 14 66 14.8954 66 16V64C66 65.1046 65.1046 66 64 66H16C14.8954 66 14 65.1046 14 64V16ZM18 18V62H62V18H18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-border-outer', CoreBorderOuter)
export default CoreBorderOuter
