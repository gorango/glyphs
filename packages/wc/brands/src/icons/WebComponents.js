
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsWebComponents = {
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
        ${variant === "color" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.9999 40.023L65.0486 51.7174L55.3008 39.8633L65.0486 28.3286L71.9999 40.023Z"
            fill="#166DA5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.2897 53.7128L53.7029 41.0605L47.3508 51.6773L57.2185 66.0857L64.2897 53.7128Z"
            fill="#8FDB69"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.1698 26.2534L53.7029 38.9456L47.3508 28.3288L57.2185 14.0801L64.1698 26.2534Z"
            fill="#166DA5"
          />
          <path
            opacity="0.95"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.2498 26.2531H64.1699L57.1386 14H39.281L32.2498 26.2531ZM53.7029 38.9852H71.3609L65.0088 28.2887H47.3109"
            fill="url(#paint0_linear5yR6)"
          />
          <path
            opacity="0.95"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.2896 53.7531H32.2097L39.2409 65.9264H57.2185L64.2896 53.7531ZM53.7029 41.021H71.3608L65.0087 51.7176H47.3108"
            fill="url(#paint1_linear5yR6)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.2409 65.9258L24.2197 39.9827L39.4407 14.0396H22.9813L8 39.9827L22.9813 65.9258H39.2409Z"
            fill="#010101"
          />
          <defs><linearGradient id="paint0_linear5yR6" x1="32.2498" y1="26.4926" x2="71.3609" y2="26.4926" gradientUnits="userSpaceOnUse"><stop stop-color="#2A3B8F"/><stop offset="1" stop-color="#29ABE2"/></linearGradient><linearGradient id="paint1_linear5yR6" x1="71.3608" y1="53.4737" x2="32.2097" y2="53.4737" gradientUnits="userSpaceOnUse"><stop stop-color="#B4D44E"/><stop offset="1" stop-color="#E7F716"/></linearGradient></defs>
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.2497 26.2531H64.1698L57.1386 14H39.2809L32.2497 26.2531ZM53.7029 38.9852H71.3608L65.0088 28.2887H47.3109"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.2897 53.7529H32.2098L39.241 65.9263H57.2185L64.2897 53.7529ZM53.7029 41.0208H71.3609L65.0088 51.7174H47.3109"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.241 65.9263L24.2197 39.9829L39.4407 14.0397H22.9813L8 39.9829L22.9813 65.926L39.241 65.9263Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M64.1698 26.2532L53.7028 38.9454L47.3508 28.3286L57.2184 14.0799L64.1698 26.2532ZM64.1698 26.2532L32.2497 26.2531L39.2809 14H57.1386L64.1698 26.2532ZM39.241 65.9263L32.2098 53.7529H64.2897L57.2185 65.9263H39.241ZM39.241 65.9263L24.2197 39.9829L39.4407 14.0397H22.9813L8 39.9829L22.9813 65.926L39.241 65.9263ZM72 40.0231L65.0487 51.7175L55.3008 39.8635L65.0487 28.3287L72 40.0231ZM64.2896 53.713L53.7028 41.0607L47.3508 51.6774L57.2184 66.0858L64.2896 53.713ZM53.7029 38.9852H71.3608L65.0088 28.2887H47.3109L53.7029 38.9852ZM53.7029 41.0208H71.3609L65.0088 51.7174H47.3109L53.7029 41.0208Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-web-components', BrandsWebComponents)
export default BrandsWebComponents
