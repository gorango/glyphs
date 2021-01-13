
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreHardDrive = {
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
            d="M21.5201 21C20.3101 21 19.2186 21.7268 18.7521 22.8432L12.0782 38.8128C12.041 38.9018 12.1064 39 12.2029 39H12V59H68V39H67.81C67.9003 39 67.9616 38.908 67.9267 38.8247L61.2479 22.8432C60.7814 21.7268 59.6898 21 58.4799 21H21.5201Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M13 39H67"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M60 45V53"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 45V53"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M20 49C20 47.8954 20.8954 47 22 47C23.1046 47 24 47.8954 24 49C24 50.1046 23.1046 51 22 51C20.8954 51 20 50.1046 20 49Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M21.5201 21C20.3101 21 19.2186 21.7268 18.7521 22.8432L12.6049 37.5526C12.7308 37.5183 12.8633 37.5 13 37.5H67C67.1367 37.5 67.2692 37.5183 67.3951 37.5526L61.2479 22.8432C60.7814 21.7268 59.6898 21 58.4799 21H21.5201Z"
            fill="currentColor"
          />
          <path
            d="M21.5 49C21.5 48.7239 21.7239 48.5 22 48.5C22.2761 48.5 22.5 48.7239 22.5 49C22.5 49.2761 22.2761 49.5 22 49.5C21.7239 49.5 21.5 49.2761 21.5 49Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 59V40.1181C12.2654 40.3556 12.6158 40.5 13 40.5H67C67.3842 40.5 67.7346 40.3556 68 40.1181V59H12ZM61.5 45C61.5 44.1716 60.8284 43.5 60 43.5C59.1716 43.5 58.5 44.1716 58.5 45V53C58.5 53.8284 59.1716 54.5 60 54.5C60.8284 54.5 61.5 53.8284 61.5 53V45ZM52 43.5C52.8284 43.5 53.5 44.1716 53.5 45V53C53.5 53.8284 52.8284 54.5 52 54.5C51.1716 54.5 50.5 53.8284 50.5 53V45C50.5 44.1716 51.1716 43.5 52 43.5ZM22 45.5C20.067 45.5 18.5 47.067 18.5 49C18.5 50.933 20.067 52.5 22 52.5C23.933 52.5 25.5 50.933 25.5 49C25.5 47.067 23.933 45.5 22 45.5Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5201 21C20.3101 21 19.2186 21.7268 18.7521 22.8432L12.0782 38.8128C12.041 38.9018 12.1064 39 12.2029 39H12V59H68V39H67.81C67.9003 39 67.9616 38.908 67.9267 38.8247L61.2479 22.8432C60.7814 21.7268 59.6898 21 58.4799 21H21.5201Z"
            fill="#56CCF2"
          />
          <rect
            x="12"
            y="39"
            width="56"
            height="20"
            fill="#9B51E0"
          />
          <path
            d="M60 45L60 53"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52 45L52 53"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="20"
            y="47"
            width="4"
            height="4"
            rx="2"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M21.5201 21C20.3101 21 19.2186 21.7268 18.7521 22.8432L12.0782 38.8128C12.041 38.9018 12.1064 39 12.2029 39H12V59H68V39H67.81C67.9003 39 67.9616 38.908 67.9267 38.8247L61.2479 22.8432C60.7814 21.7268 59.6898 21 58.4799 21H21.5201Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20 49C20 47.8954 20.8954 47 22 47C23.1046 47 24 47.8954 24 49C24 50.1046 23.1046 51 22 51C20.8954 51 20 50.1046 20 49Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M13 39H67M60 45V53M52 45V53M18.7521 22.8432C19.2186 21.7268 20.3101 21 21.5201 21H58.4799C59.6898 21 60.7814 21.7268 61.2479 22.8432L67.9267 38.8247C67.9616 38.908 67.9003 39 67.81 39H68V59H12V39H12.2029C12.1064 39 12.041 38.9018 12.0782 38.8128L18.7521 22.8432ZM22 51C20.8954 51 20 50.1046 20 49C20 47.8954 20.8954 47 22 47C23.1046 47 24 47.8954 24 49C24 50.1046 23.1046 51 22 51Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M10.2329 38.0416L16.9067 22.072C17.6843 20.2114 19.5035 19 21.5201 19H58.4799C60.4965 19 62.3157 20.2114 63.0933 22.072L69.7721 38.0535C69.784 38.0821 69.7953 38.1107 69.8059 38.1395C69.9303 38.4001 70 38.6919 70 39V59C70 60.1046 69.1046 61 68 61H12C10.8954 61 10 60.1046 10 59V39C10 38.6899 10.0706 38.3962 10.1966 38.1342C10.2079 38.1033 10.22 38.0724 10.2329 38.0416ZM10.2329 38.0416L10.2421 38.0454M20.5974 23.6144C20.7529 23.2423 21.1168 23 21.5201 23H58.4799C58.8832 23 59.2471 23.2423 59.4026 23.6144L64.9966 37H15.0034L20.5974 23.6144ZM14 41V57H66V41H14ZM60 43C61.1046 43 62 43.8954 62 45V53C62 54.1046 61.1046 55 60 55C58.8954 55 58 54.1046 58 53V45C58 43.8954 58.8954 43 60 43ZM54 45C54 43.8954 53.1046 43 52 43C50.8954 43 50 43.8954 50 45V53C50 54.1046 50.8954 55 52 55C53.1046 55 54 54.1046 54 53V45ZM18 49C18 46.7909 19.7909 45 22 45C24.2091 45 26 46.7909 26 49C26 51.2091 24.2091 53 22 53C19.7909 53 18 51.2091 18 49Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-hard-drive', CoreHardDrive)
export default CoreHardDrive
