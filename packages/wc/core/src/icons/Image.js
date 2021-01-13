
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreImage = {
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
            d="M18 24C18 20.6863 20.6863 18 24 18H56C59.3137 18 62 20.6863 62 24V56C62 59.3137 59.3137 62 56 62H24C20.6863 62 18 59.3137 18 56V24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24 62H56C58.8222 62 61.1893 60.0515 61.8294 57.4264C61.905 57.1164 61.7952 56.7952 61.5696 56.5696L55.7071 50.7071C55.3166 50.3166 54.6834 50.3166 54.2929 50.7071L50.5212 54.4789C50.1186 54.8815 49.4616 54.8672 49.0769 54.4475L34.7372 38.8042C34.3408 38.3718 33.6592 38.3718 33.2629 38.8042L18.2628 55.1678C18.0938 55.3523 18 55.5934 18 55.8436V56C18 59.3137 20.6863 62 24 62Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M45.402 25.5C47.0097 24.5718 48.9905 24.5718 50.5982 25.5C52.2059 26.4282 53.1963 28.1436 53.1963 30C53.1963 31.8564 52.2059 33.5718 50.5982 34.5C48.9905 35.4282 47.0097 35.4282 45.402 34.5C43.7943 33.5718 42.804 31.8564 42.804 30C42.804 28.1436 43.7943 26.4282 45.402 25.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M46.6519 28.6651C47.4861 28.1834 48.5139 28.1834 49.3481 28.6651C50.1823 29.1467 50.6962 30.0368 50.6962 31C50.6962 31.9632 50.1823 32.8533 49.3481 33.3349C48.5139 33.8166 47.4861 33.8166 46.6519 33.3349C45.8177 32.8533 45.3038 31.9632 45.3038 31C45.3038 30.0368 45.8177 29.1467 46.6519 28.6651Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 25C18 21.6863 20.6863 19 24 19H56C59.3137 19 62 21.6863 62 25V54.4644L57.4749 49.9393C56.1081 48.5725 53.892 48.5725 52.5252 49.9393L49.8612 52.6033L36.5801 38.1149C35.1929 36.6016 32.8072 36.6016 31.42 38.1149L18 52.7548V25ZM51.8481 24.3349C49.4669 22.9602 46.5331 22.9602 44.1519 24.3349C41.7707 25.7097 40.3038 28.2504 40.3038 31C40.3038 33.7496 41.7707 36.2903 44.1519 37.6651C46.5331 39.0398 49.4669 39.0398 51.8481 37.6651C54.2293 36.2903 55.6962 33.7496 55.6962 31C55.6962 28.2504 54.2293 25.7097 51.8481 24.3349Z"
            fill="currentColor"
          />
          <path
            d="M34 42.6997L20.5228 57.4021C20.7223 59.1457 22.203 60.5 24 60.5H56C57.3414 60.5 58.5102 59.7439 59.0974 58.6329L55 54.5355L52.2889 57.2466C50.8799 58.6557 48.5805 58.6057 47.234 57.1368L34 42.6997Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="18"
            y="18"
            width="44"
            height="44"
            rx="6"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 62L43 62L56 62C58.8222 62 61.1893 60.0515 61.8294 57.4264C61.905 57.1164 61.7952 56.7952 61.5696 56.5696L55.7071 50.7071C55.3166 50.3166 54.6834 50.3166 54.2929 50.7071L50.5212 54.4789C50.1186 54.8814 49.4616 54.8672 49.0769 54.4475L34.7372 38.8042C34.3408 38.3718 33.6592 38.3718 33.2629 38.8042L18.2628 55.1678C18.0938 55.3523 18 55.5934 18 55.8436V56C18 59.3137 20.6863 62 24 62Z"
            fill="#6FCF97"
          />
          <path
            d="M45.4019 25.5C47.0096 24.5718 48.9904 24.5718 50.5981 25.5C52.2058 26.4282 53.1962 28.1436 53.1962 30C53.1962 31.8564 52.2058 33.5718 50.5981 34.5C48.9904 35.4282 47.0096 35.4282 45.4019 34.5C43.7942 33.5718 42.8038 31.8564 42.8038 30C42.8038 28.1436 43.7942 26.4282 45.4019 25.5Z"
            fill="#F2C94C"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M18 24C18 20.6863 20.6863 18 24 18H56C59.3137 18 62 20.6863 62 24V56C62 59.3137 59.3137 62 56 62H24C20.6863 62 18 59.3137 18 56V24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24 62H56C58.8222 62 61.1893 60.0515 61.8294 57.4264C61.905 57.1164 61.7952 56.7952 61.5696 56.5696L55.7071 50.7071C55.3166 50.3166 54.6834 50.3166 54.2929 50.7071L50.5212 54.4789C50.1186 54.8815 49.4616 54.8672 49.0769 54.4475L34.7372 38.8042C34.3408 38.3718 33.6592 38.3718 33.2629 38.8042L18.2628 55.1678C18.0938 55.3523 18 55.5934 18 55.8436V56C18 59.3137 20.6863 62 24 62Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M45.4019 25.5C47.0096 24.5718 48.9904 24.5718 50.5981 25.5C52.2058 26.4282 53.1962 28.1436 53.1962 30C53.1962 31.8564 52.2058 33.5718 50.5981 34.5C48.9904 35.4282 47.0096 35.4282 45.4019 34.5C43.7942 33.5718 42.8038 31.8564 42.8038 30C42.8038 28.1436 43.7942 26.4282 45.4019 25.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M18 56V24C18 20.6863 20.6863 18 24 18H56C59.3137 18 62 20.6863 62 24V56C62 59.3137 59.3137 62 56 62M18 56C18 59.3137 20.6863 62 24 62H56M18 56V55.8436C18 55.5934 18.0938 55.3523 18.2628 55.1678L33.2629 38.8042C33.6592 38.3718 34.3408 38.3718 34.7372 38.8042L49.0769 54.4475C49.4616 54.8672 50.1186 54.8815 50.5212 54.4789L54.2929 50.7071C54.6834 50.3166 55.3166 50.3166 55.7071 50.7071L61.5696 56.5696C61.7952 56.7952 61.905 57.1164 61.8294 57.4264C61.1893 60.0515 58.8222 62 56 62M42.8038 30C42.8038 28.1436 43.7942 26.4282 45.4019 25.5C47.0096 24.5718 48.9904 24.5718 50.5981 25.5C52.2058 26.4282 53.1962 28.1436 53.1962 30C53.1962 31.8564 52.2058 33.5718 50.5981 34.5C48.9904 35.4282 47.0096 35.4282 45.4019 34.5C43.7942 33.5718 42.8038 31.8564 42.8038 30Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.5981 23.7679C49.3716 22.4825 46.6284 22.4825 44.4019 23.7679C42.1754 25.0534 40.8038 27.4291 40.8038 30C40.8038 32.5709 42.1754 34.9466 44.4019 36.2321C46.6284 37.5175 49.3716 37.5175 51.5981 36.2321C53.8246 34.9466 55.1962 32.5709 55.1962 30C55.1962 27.4291 53.8246 25.0534 51.5981 23.7679ZM46.4019 27.2321C47.3908 26.6611 48.6092 26.6611 49.5981 27.2321C50.587 27.803 51.1962 28.8581 51.1962 30C51.1962 31.1419 50.587 32.197 49.5981 32.7679C48.6092 33.3389 47.3908 33.3389 46.4019 32.7679C45.413 32.197 44.8038 31.1419 44.8038 30C44.8038 28.8581 45.413 27.803 46.4019 27.2321Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24ZM60 24V52.1715L57.1213 49.2929C55.9498 48.1213 54.0503 48.1213 52.8787 49.2929L49.8455 52.3261L36.2115 37.4527C35.0225 36.1556 32.9776 36.1556 31.7886 37.4527L20 50.313V24C20 21.7909 21.7909 20 24 20H56C58.2091 20 60 21.7909 60 24ZM20.0063 56.2257C20.1233 58.3299 21.8666 60 24 60H56C56.1381 60 56.2745 59.993 56.409 59.9793C57.0935 59.9098 57.727 59.6677 58.2653 59.2972C58.899 58.861 59.4007 58.2468 59.6983 57.5267L55 52.8284L51.9354 55.8931C50.7276 57.1008 48.7567 57.058 47.6026 55.7989L34 40.9598L20.0063 56.2257Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-image', CoreImage)
export default CoreImage
