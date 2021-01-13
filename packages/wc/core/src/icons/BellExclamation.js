
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBellExclamation = {
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
            d="M39.6274 17C35.384 17 31.3143 18.6857 28.3137 21.6863L27.6863 22.3137C24.6857 25.3143 23 29.384 23 33.6274V36.5656C23 41.9665 20.8545 47.1461 17.0355 50.9651C16.3725 51.6281 16 52.5273 16 53.4649C16 55.4173 17.5828 57.0001 19.5352 57.0001H60.4648C62.4172 57.0001 64 55.4173 64 53.4649C64 52.5273 63.6275 51.6281 62.9645 50.9651C59.1455 47.1461 57 41.9665 57 36.5656V33.6274C57 29.384 55.3143 25.3143 52.3137 22.3137L51.6863 21.6863C48.6857 18.6857 44.616 17 40.3726 17H39.6274Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M33.7549 57C33.3124 57.9211 33.0718 58.9434 33.0718 60C33.0718 62.4752 34.3923 64.7624 36.5359 66C38.6795 67.2376 41.3205 67.2376 43.4641 66C45.6077 64.7624 46.9282 62.4752 46.9282 60C46.9282 58.9434 46.6876 57.9211 46.245 57"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M42 17.0829V14C42 12.8954 41.1046 12 40 12C38.8954 12 38 12.8954 38 14V17.0829"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M38.5936 26.4971L39.4689 40.501C39.4864 40.7815 39.719 41 40.0001 41C40.2811 41 40.5137 40.7815 40.5312 40.501L41.4065 26.4971C41.4572 25.6858 40.8129 25 40.0001 25C39.1872 25 38.5429 25.6858 38.5936 26.4971Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 47C39.4477 47 39 47.4477 39 48C39 48.5523 39.4477 49 40 49C40.5523 49 41 48.5523 41 48C41 47.4477 40.5523 47 40 47Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M41 48C41 48.5523 40.5523 49 40 49C39.4477 49 39 48.5523 39 48C39 47.4477 39.4477 47 40 47C40.5523 47 41 47.4477 41 48Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 14V17.0829C45.6456 17.4556 49.0718 19.0718 51.6863 21.6863L52.3137 22.3137C55.3143 25.3143 57 29.384 57 33.6274V36.5656C57 41.9665 59.1455 47.1461 62.9645 50.9651C63.6275 51.6281 64 52.5273 64 53.4649C64 55.4173 62.4172 57.0001 60.4648 57.0001H19.5352C17.5828 57.0001 16 55.4173 16 53.4649C16 52.5273 16.3725 51.6281 17.0355 50.9651C20.8545 47.1461 23 41.9665 23 36.5656V33.6274C23 29.384 24.6857 25.3143 27.6863 22.3137L28.3137 21.6863C30.9282 19.0718 34.3544 17.4555 38 17.0829V14C38 12.8954 38.8954 12 40 12C41.1046 12 42 12.8954 42 14ZM40 23C38.0335 23 36.4748 24.6592 36.5974 26.6218L37.4727 40.6257C37.5561 41.9603 38.6628 43 40 43C41.3372 43 42.4439 41.9603 42.5273 40.6257L43.4025 26.6218C43.5252 24.6592 41.9665 23 40 23ZM40 45C38.3431 45 37 46.3431 37 48C37 49.6568 38.3431 51 40 51C41.6568 51 43 49.6568 43 48C43 46.3431 41.6568 45 40 45Z"
            fill="currentColor"
          />
          <path
            d="M33.0718 60C33.0718 62.4752 34.3923 64.7624 36.5359 66C38.6795 67.2376 41.3205 67.2376 43.4641 66C45.6077 64.7624 46.9282 62.4752 46.9282 60H33.0718Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.7549 57C33.3124 57.9211 33.0718 58.9434 33.0718 60C33.0718 62.4752 34.3923 64.7624 36.5359 66C38.6795 67.2376 41.3205 67.2376 43.4641 66C45.6077 64.7624 46.9282 62.4752 46.9282 60C46.9282 58.9434 46.6876 57.9211 46.245 57H33.7549Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.6274 17C35.384 17 31.3143 18.6857 28.3137 21.6863L27.6863 22.3137C24.6857 25.3143 23 29.384 23 33.6274V36.5656C23 41.9665 20.8545 47.1461 17.0355 50.9651C16.3725 51.6281 16 52.5273 16 53.4649C16 55.4173 17.5828 57.0001 19.5352 57.0001L60.4648 57.0001C62.4172 57.0001 64 55.4173 64 53.4649C64 52.5273 63.6275 51.6281 62.9645 50.9651C59.1455 47.1461 57 41.9665 57 36.5656V33.6274C57 29.384 55.3143 25.3143 52.3137 22.3137L51.6863 21.6863C48.6857 18.6857 44.616 17 40.3726 17H39.6274Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 17.0829V14C42 12.8954 41.1046 12 40 12C38.8954 12 38 12.8954 38 14V17.0829C38.5383 17.0279 39.0814 17 39.6274 17H40.3726C40.9186 17 41.4617 17.0279 42 17.0829Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.5936 26.4971L39.4689 40.501C39.4864 40.7815 39.719 41 40.0001 41C40.2811 41 40.5137 40.7815 40.5312 40.501L41.4065 26.4971C41.4572 25.6858 40.8129 25 40.0001 25C39.1872 25 38.5429 25.6858 38.5936 26.4971ZM40.0001 47C39.4478 47 39.0001 47.4477 39.0001 48C39.0001 48.5523 39.4478 49 40.0001 49C40.5523 49 41.0001 48.5523 41.0001 48C41.0001 47.4477 40.5523 47 40.0001 47Z"
            fill="#EB5757"
          />
          <path
            d="M39.4689 40.501L37.4728 40.6257L39.4689 40.501ZM38.5936 26.4971L40.5897 26.3723L38.5936 26.4971ZM40.5312 40.501L42.5273 40.6257L40.5312 40.501ZM41.4065 26.4971L43.4026 26.6218L41.4065 26.4971ZM41.465 40.3762L40.5897 26.3723L36.5975 26.6218L37.4728 40.6257L41.465 40.3762ZM40.0001 39C40.7751 39 41.4166 39.6026 41.465 40.3762L37.4728 40.6257C37.5562 41.9603 38.6629 43 40.0001 43V39ZM38.5351 40.3762C38.5835 39.6026 39.225 39 40.0001 39V43C41.3372 43 42.4439 41.9603 42.5273 40.6257L38.5351 40.3762ZM39.4104 26.3723L38.5351 40.3762L42.5273 40.6257L43.4026 26.6218L39.4104 26.3723ZM40.0001 27C39.6593 27 39.3891 26.7125 39.4104 26.3723L43.4026 26.6218C43.5253 24.6592 41.9665 23 40.0001 23V27ZM40.5897 26.3723C40.611 26.7125 40.3409 27 40.0001 27V23C38.0336 23 36.4748 24.6592 36.5975 26.6218L40.5897 26.3723ZM41.0001 48C41.0001 48.5523 40.5523 49 40.0001 49V45C38.3432 45 37.0001 46.3431 37.0001 48H41.0001ZM40.0001 47C40.5523 47 41.0001 47.4477 41.0001 48H37.0001C37.0001 49.6569 38.3432 51 40.0001 51V47ZM39.0001 48C39.0001 47.4477 39.4478 47 40.0001 47V51C41.6569 51 43.0001 49.6569 43.0001 48H39.0001ZM40.0001 49C39.4478 49 39.0001 48.5523 39.0001 48H43.0001C43.0001 46.3431 41.6569 45 40.0001 45V49Z"
            fill="#EB5757"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M33.755 57C33.3124 57.9211 33.0718 58.9434 33.0718 60C33.0718 62.4752 34.3923 64.7624 36.5359 66C38.6795 67.2376 41.3205 67.2376 43.4641 66C45.6077 64.7624 46.9282 62.4752 46.9282 60C46.9282 58.9434 46.6876 57.9211 46.245 57H33.755Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.6274 17C35.384 17 31.3143 18.6857 28.3137 21.6863L27.6863 22.3137C24.6857 25.3143 23 29.384 23 33.6274V36.5656C23 41.9665 20.8545 47.1461 17.0355 50.9651C16.3725 51.6281 16 52.5273 16 53.4649C16 55.4173 17.5828 57.0001 19.5352 57.0001H60.4648C62.4172 57.0001 64 55.4173 64 53.4649C64 52.5273 63.6275 51.6281 62.9645 50.9651C59.1455 47.1461 57 41.9665 57 36.5656V33.6274C57 29.384 55.3143 25.3143 52.3137 22.3137L51.6863 21.6863C48.6857 18.6857 44.616 17 40.3726 17H39.6274Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M42 17.0829V14C42 12.8954 41.1046 12 40 12C38.8954 12 38 12.8954 38 14V17.0829C38.5383 17.0279 39.0814 17 39.6274 17H40.3726C40.9186 17 41.4617 17.0279 42 17.0829Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.5936 26.4971L39.4688 40.501C39.4863 40.7815 39.719 41 40 41C40.281 41 40.5137 40.7815 40.5312 40.501L41.4064 26.4971C41.4571 25.6858 40.8128 25 40 25C39.1872 25 38.5429 25.6858 38.5936 26.4971Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 47C39.4477 47 39 47.4477 39 48C39 48.5523 39.4477 49 40 49C40.5523 49 41 48.5523 41 48C41 47.4477 40.5523 47 40 47Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.6274 17C35.384 17 31.3143 18.6857 28.3137 21.6863L27.6863 22.3137C24.6857 25.3143 23 29.384 23 33.6274V36.5656C23 41.9665 20.8545 47.1461 17.0355 50.9651C16.3725 51.6281 16 52.5273 16 53.4649C16 55.4173 17.5828 57.0001 19.5352 57.0001H60.4648C62.4172 57.0001 64 55.4173 64 53.4649C64 52.5273 63.6275 51.6281 62.9645 50.9651C59.1455 47.1461 57 41.9665 57 36.5656V33.6274C57 29.384 55.3143 25.3143 52.3137 22.3137L51.6863 21.6863C48.6857 18.6857 44.616 17 40.3726 17M39.6274 17H40.3726M39.6274 17C39.0814 17 38.5383 17.0279 38 17.0829V14C38 12.8954 38.8954 12 40 12C41.1046 12 42 12.8954 42 14V17.0829C41.4617 17.0279 40.9186 17 40.3726 17M33.0718 60C33.0718 58.9434 33.3124 57.9211 33.755 57H46.245C46.6876 57.9211 46.9282 58.9434 46.9282 60C46.9282 62.4752 45.6077 64.7624 43.4641 66C41.3205 67.2376 38.6795 67.2376 36.5359 66C34.3923 64.7624 33.0718 62.4752 33.0718 60ZM39.4688 40.501L38.5936 26.4971C38.5429 25.6858 39.1872 25 40 25C40.8128 25 41.4571 25.6858 41.4064 26.4971L40.5312 40.501C40.5137 40.7815 40.281 41 40 41C39.719 41 39.4863 40.7815 39.4688 40.501ZM39 48C39 47.4477 39.4477 47 40 47C40.5523 47 41 47.4477 41 48C41 48.5523 40.5523 49 40 49C39.4477 49 39 48.5523 39 48Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M39.4688 40.501L38.5936 26.4971C38.5429 25.6858 39.1872 25 40 25C40.8128 25 41.4571 25.6858 41.4064 26.4971L40.5312 40.501C40.5137 40.7815 40.281 41 40 41C39.719 41 39.4863 40.7815 39.4688 40.501Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M39 48C39 47.4477 39.4477 47 40 47C40.5523 47 41 47.4477 41 48C41 48.5523 40.5523 49 40 49C39.4477 49 39 48.5523 39 48Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 14C36 11.7909 37.7909 10 40 10C42.2091 10 44 11.7909 44 14V15.3692C47.4219 16.0733 50.593 17.7646 53.1005 20.2721L53.7279 20.8995C57.1036 24.2752 59 28.8535 59 33.6274V36.5656C59 41.436 60.9348 46.107 64.3787 49.5508C65.4168 50.5889 66 51.9968 66 53.4649C66 56.5219 63.5218 59.0001 60.4648 59.0001H48.8721C48.9093 59.3298 48.9282 59.6636 48.9282 60C48.9282 63.1897 47.2265 66.1372 44.4641 67.7321C41.7017 69.3269 38.2983 69.3269 35.5359 67.7321C32.7735 66.1372 31.0718 63.1897 31.0718 60C31.0718 59.6636 31.0907 59.3298 31.1279 59.0001H19.5352C16.4782 59.0001 14 56.5219 14 53.4649C14 51.9968 14.5832 50.5889 15.6213 49.5508C19.0652 46.107 21 41.436 21 36.5656V33.6274C21 28.8535 22.8964 24.2752 26.2721 20.8995L26.8995 20.2721C29.407 17.7646 32.5781 16.0733 36 15.3692V14ZM40.3726 19C40.8504 19 41.3256 19.0244 41.7966 19.0726C44.9865 19.3986 47.9844 20.8128 50.2721 23.1005L50.8995 23.7279C53.525 26.3534 55 29.9144 55 33.6274V36.5656C55 42.4969 57.3562 48.1853 61.5503 52.3793C61.8383 52.6672 62 53.0577 62 53.4649C62 54.3127 61.3127 55.0001 60.4648 55.0001H19.5352C18.6873 55.0001 18 54.3127 18 53.4649C18 53.0577 18.1617 52.6672 18.4497 52.3793C22.6438 48.1853 25 42.4969 25 36.5656V33.6274C25 29.9144 26.475 26.3534 29.1005 23.7279L29.7279 23.1005C32.0156 20.8128 35.0135 19.3986 38.2034 19.0726C38.6744 19.0244 39.1496 19 39.6274 19H40.3726ZM35.1741 59.0001C35.1068 59.3254 35.0718 59.6601 35.0718 60C35.0718 61.7607 36.0111 63.3876 37.5359 64.2679C39.0607 65.1483 40.9393 65.1483 42.4641 64.2679C43.9889 63.3876 44.9282 61.7607 44.9282 60C44.9282 59.6601 44.8932 59.3254 44.8259 59.0001H35.1741Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-bell-exclamation', CoreBellExclamation)
export default CoreBellExclamation
