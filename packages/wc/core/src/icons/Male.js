
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreMale = {
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
            d="M35.6667 32C31.9848 32 29 34.9848 29 38.6667V48.6667C29 50.5076 30.4924 52 32.3333 52H35V66C35 67.1046 35.8954 68 37 68H43C44.1046 68 45 67.1046 45 66V52H47.6667C49.5076 52 51 50.5076 51 48.6667V38.6667C51 34.9848 48.0152 32 44.3333 32H35.6667Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36.8727 26.4942C38.849 27.4459 41.1511 27.4459 43.1274 26.4942C45.1036 25.5425 46.539 23.7426 47.0271 21.6041C47.5152 19.4656 47.0029 17.2212 45.6353 15.5063C44.2677 13.7913 42.1935 12.7925 40.0001 12.7925C37.8066 12.7925 35.7324 13.7913 34.3648 15.5063C32.9972 17.2212 32.4849 19.4656 32.973 21.6041C33.4611 23.7426 34.8965 25.5425 36.8727 26.4942Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.6667 32C31.9848 32 29 34.9848 29 38.6667L29 48.6667C29 50.5076 30.4924 52 32.3333 52H35L35 66C35 67.1046 35.8954 68 37 68H43C44.1046 68 45 67.1046 45 66L45 52H47.6667C49.5076 52 51 50.5076 51 48.6667V38.6667C51 34.9848 48.0152 32 44.3333 32H35.6667Z"
            fill="currentColor"
          />
          <path
            d="M35 52H37C37 50.8954 36.1046 50 35 50V52ZM45 52V50C43.8954 50 43 50.8954 43 52H45ZM31 38.6667C31 36.0893 33.0893 34 35.6667 34V30C30.8802 30 27 33.8802 27 38.6667H31ZM31 48.6667L31 38.6667H27L27 48.6667H31ZM32.3333 50C31.597 50 31 49.403 31 48.6667H27C27 51.6122 29.3878 54 32.3333 54V50ZM35 50H32.3333V54H35V50ZM37 66L37 52H33L33 66H37ZM37 66H33C33 68.2091 34.7909 70 37 70V66ZM43 66H37V70H43V66ZM43 66V70C45.2091 70 47 68.2091 47 66H43ZM43 52L43 66H47L47 52H43ZM47.6667 50H45V54H47.6667V50ZM49 48.6667C49 49.403 48.403 50 47.6667 50V54C50.6122 54 53 51.6122 53 48.6667H49ZM49 38.6667V48.6667H53V38.6667H49ZM44.3333 34C46.9107 34 49 36.0893 49 38.6667H53C53 33.8802 49.1198 30 44.3333 30V34ZM35.6667 34H44.3333V30L35.6667 30V34Z"
            fill="currentColor"
          />
          <path
            d="M36.8727 26.494C38.8489 27.4457 41.1511 27.4457 43.1273 26.494C45.1036 25.5422 46.5389 23.7424 47.027 21.6039C47.5151 19.4654 47.0029 17.221 45.6352 15.506C44.2676 13.7911 42.1935 12.7922 40 12.7922C37.8065 12.7922 35.7324 13.7911 34.3648 15.506C32.9971 17.221 32.4849 19.4654 32.973 21.6039C33.4611 23.7424 34.8964 25.5422 36.8727 26.494Z"
            fill="currentColor"
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
            d="M35.6667 32C31.9848 32 29 34.9848 29 38.6667L29 48.6667C29 50.5076 30.4924 52 32.3333 52H35L35 66C35 67.1046 35.8954 68 37 68H43C44.1046 68 45 67.1046 45 66L45 52H47.6667C49.5076 52 51 50.5076 51 48.6667V38.6667C51 34.9848 48.0152 32 44.3333 32H35.6667Z"
            fill="#F2C94C"
          />
          <path
            d="M35 52H37C37 50.8954 36.1046 50 35 50V52ZM45 52V50C43.8954 50 43 50.8954 43 52H45ZM31 38.6667C31 36.0893 33.0893 34 35.6667 34V30C30.8802 30 27 33.8802 27 38.6667H31ZM31 48.6667L31 38.6667H27L27 48.6667H31ZM32.3333 50C31.597 50 31 49.403 31 48.6667H27C27 51.6122 29.3878 54 32.3333 54V50ZM35 50H32.3333V54H35V50ZM37 66L37 52H33L33 66H37ZM37 66H33C33 68.2091 34.7909 70 37 70V66ZM43 66H37V70H43V66ZM43 66V70C45.2091 70 47 68.2091 47 66H43ZM43 52L43 66H47L47 52H43ZM47.6667 50H45V54H47.6667V50ZM49 48.6667C49 49.403 48.403 50 47.6667 50V54C50.6122 54 53 51.6122 53 48.6667H49ZM49 38.6667V48.6667H53V38.6667H49ZM44.3333 34C46.9107 34 49 36.0893 49 38.6667H53C53 33.8802 49.1198 30 44.3333 30V34ZM35.6667 34H44.3333V30L35.6667 30V34Z"
            fill="#F2C94C"
          />
          <path
            d="M36.8727 26.494C38.8489 27.4457 41.1511 27.4457 43.1273 26.494C45.1036 25.5422 46.5389 23.7424 47.027 21.6039C47.5151 19.4654 47.0029 17.221 45.6352 15.506C44.2676 13.7911 42.1935 12.7922 40 12.7922C37.8065 12.7922 35.7324 13.7911 34.3648 15.506C32.9971 17.221 32.4849 19.4654 32.973 21.6039C33.4611 23.7424 34.8964 25.5422 36.8727 26.494Z"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M35.6667 32.0002C31.9848 32.0002 29 34.985 29 38.6669V48.6669C29 50.5078 30.4924 52.0002 32.3333 52.0002H35V66.0002C35 67.1048 35.8954 68.0002 37 68.0002H43C44.1046 68.0002 45 67.1048 45 66.0002V52.0002H47.6667C49.5076 52.0002 51 50.5078 51 48.6669V38.6669C51 34.985 48.0152 32.0002 44.3333 32.0002H35.6667Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36.8727 26.4942C38.8489 27.4459 41.1511 27.4459 43.1273 26.4942C45.1036 25.5425 46.5389 23.7426 47.027 21.6041C47.5151 19.4656 47.0029 17.2212 45.6352 15.5063C44.2676 13.7913 42.1935 12.7925 40 12.7925C37.8065 12.7925 35.7324 13.7913 34.3648 15.5063C32.9971 17.2212 32.4849 19.4656 32.973 21.6041C33.4611 23.7426 34.8964 25.5425 36.8727 26.4942Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35.6667 32.0002C31.9848 32.0002 29 34.985 29 38.6669V48.6669C29 50.5078 30.4924 52.0002 32.3333 52.0002H35V66.0002C35 67.1048 35.8954 68.0002 37 68.0002H43C44.1046 68.0002 45 67.1048 45 66.0002V52.0002H47.6667C49.5076 52.0002 51 50.5078 51 48.6669V38.6669C51 34.985 48.0152 32.0002 44.3333 32.0002H35.6667Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36.8727 26.4942C38.8489 27.4459 41.1511 27.4459 43.1273 26.4942C45.1036 25.5425 46.5389 23.7426 47.027 21.6041C47.5151 19.4656 47.0029 17.2212 45.6352 15.5063C44.2676 13.7913 42.1935 12.7925 40 12.7925C37.8065 12.7925 35.7324 13.7913 34.3648 15.5063C32.9971 17.2212 32.4849 19.4656 32.973 21.6041C33.4611 23.7426 34.8964 25.5425 36.8727 26.4942Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.6667 33.9995C33.0893 33.9995 31 36.0888 31 38.6662V48.6662C31 49.4026 31.597 49.9995 32.3333 49.9995H35C36.1046 49.9995 37 50.8949 37 51.9995V65.9995H43V51.9995C43 50.8949 43.8954 49.9995 45 49.9995H47.6667C48.403 49.9995 49 49.4026 49 48.6662V38.6662C49 36.0888 46.9107 33.9995 44.3333 33.9995H35.6667ZM27 38.6662C27 33.8797 30.8802 29.9995 35.6667 29.9995H44.3333C49.1198 29.9995 53 33.8797 53 38.6662V48.6662C53 51.6117 50.6122 53.9995 47.6667 53.9995H47V65.9995C47 68.2086 45.2091 69.9995 43 69.9995H37C34.7909 69.9995 33 68.2086 33 65.9995V53.9995H32.3333C29.3878 53.9995 27 51.6117 27 48.6662V38.6662Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.8012 14.2588C34.5483 12.068 37.1979 10.792 40.0001 10.792C42.8022 10.792 45.4519 12.068 47.199 14.2588C48.9461 16.4496 49.6005 19.3168 48.977 22.0487C48.3534 24.7805 46.5198 27.0798 43.9952 28.2956C41.4705 29.5114 38.5296 29.5114 36.005 28.2956C33.4803 27.0798 31.6467 24.7805 31.0232 22.0487C30.3996 19.3168 31.0541 16.4496 32.8012 14.2588ZM40.0001 14.792C38.4152 14.792 36.9166 15.5137 35.9285 16.7528C34.9404 17.9918 34.5702 19.6135 34.9229 21.1586C35.2755 22.7037 36.3126 24.0041 37.7405 24.6918C39.1684 25.3794 40.8317 25.3794 42.2596 24.6918C43.6875 24.0041 44.7246 22.7037 45.0773 21.1586C45.4299 19.6135 45.0598 17.9918 44.0717 16.7528C43.0835 15.5137 41.5849 14.792 40.0001 14.792Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-male', CoreMale)
export default CoreMale
