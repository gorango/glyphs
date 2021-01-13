
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreShip = {
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
            d="M58.8203 42.3057C59.4923 39.853 58.2162 37.2866 55.855 36.3421L41.8569 30.7429C40.6648 30.266 39.335 30.266 38.143 30.7429L24.1449 36.3421C21.7837 37.2866 20.5075 39.853 21.1795 42.3057L25.5674 58.3213C26.1626 60.4938 28.137 62.0001 30.3897 62.0001H49.6102C51.8628 62.0001 53.8373 60.4938 54.4325 58.3213L58.8203 42.3057Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26 35.6004V26.5C26 25.1193 27.1193 24 28.5 24H51.5C52.8807 24 54 25.1193 54 26.5V35.6004"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M32 24V19.5C32 18.6716 32.6716 18 33.5 18H46.5C47.3284 18 48 18.6716 48 19.5V24"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 30.4893V61.9999"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M31.9999 19.5C31.9999 18.6716 32.6715 18 33.4999 18H46.4999C47.3283 18 47.9999 18.6716 47.9999 19.5V24H51.4999C52.8806 24 53.9999 25.1193 53.9999 26.5V32.9078L42.7853 28.422C40.9973 27.7067 39.0026 27.7067 37.2145 28.422L25.9999 32.9078V26.5C25.9999 25.1193 27.1192 24 28.4999 24H31.9999V19.5Z"
            fill="currentColor"
          />
          <path
            d="M58.8203 42.3056C59.4923 39.8529 58.2162 37.2865 55.855 36.342L41.8569 30.7428C41.7391 30.6957 41.62 30.6532 41.4999 30.6154V62H49.6102C51.8628 62 53.8372 60.4937 54.4325 58.3212L58.8203 42.3056Z"
            fill="currentColor"
          />
          <path
            d="M38.4999 62V30.6155C38.3797 30.6533 38.2607 30.6957 38.143 30.7428L24.1449 36.342C21.7837 37.2865 20.5075 39.8529 21.1795 42.3056L25.5674 58.3212C26.1626 60.4937 28.137 62 30.3897 62H38.4999Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.5 18C32.6716 18 32 18.6716 32 19.5V23.4V24H34H46H48V23.4V19.5C48 18.6716 47.3284 18 46.5 18H45.7143H43.4286H36.5714H34.2857H33.5Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 26.5C26 25.1193 27.1193 24 28.5 24H30H34H46H50H51.5C52.8807 24 54 25.1193 54 26.5V33V34V35.6004L41.857 30.7431C40.6649 30.2663 39.3351 30.2663 38.143 30.7431L26 35.6004V34V33V26.5Z"
            fill="#F2F2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.8203 42.3057C59.4923 39.853 58.2162 37.2866 55.855 36.3421L41.8569 30.7429C40.6648 30.266 39.335 30.266 38.143 30.7429L24.1449 36.3421C21.7837 37.2866 20.5075 39.853 21.1795 42.3057L25.5674 58.3213C26.1626 60.4938 28.137 62.0001 30.3897 62.0001H49.6102C51.8628 62.0001 53.8372 60.4938 54.4325 58.3213L58.8203 42.3057Z"
            fill="#2F80ED"
          />
          <path
            d="M40 30.3853L40 33.3491L40 62"
            stroke="#F2F2F2"
            stroke-width="${strokeWidth}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M33.4999 18C32.6715 18 31.9999 18.6716 31.9999 19.5V24H33.9999H45.9999H47.9999V19.5C47.9999 18.6716 47.3283 18 46.4999 18H33.4999Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M25.9999 26.5C25.9999 25.1193 27.1192 24 28.4999 24H33.9999H45.9999H51.4999C52.8806 24 53.9999 25.1193 53.9999 26.5V35.6004L41.8569 30.7431C40.6648 30.2663 39.335 30.2663 38.143 30.7431L25.9999 35.6004V26.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58.8203 42.3056C59.4923 39.8529 58.2162 37.2865 55.855 36.342L41.8569 30.7431C40.6648 30.2663 39.335 30.2663 38.143 30.7431L24.1449 36.342C21.7837 37.2865 20.5075 39.8529 21.1795 42.3056L25.5674 58.3212C26.1626 60.4937 28.137 62 30.3897 62H49.6102C51.8628 62 53.8372 60.4937 54.4325 58.3212L58.8203 42.3056Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M33.9999 24H31.9999V19.5C31.9999 18.6716 32.6715 18 33.4999 18H46.4999C47.3283 18 47.9999 18.6716 47.9999 19.5V24H45.9999M33.9999 24H45.9999M33.9999 24H28.4999C27.1192 24 25.9999 25.1193 25.9999 26.5V35.6004L38.143 30.7431M45.9999 24H51.4999C52.8806 24 53.9999 25.1193 53.9999 26.5V35.6004L41.8569 30.7431M41.8569 30.7431C40.6648 30.2663 39.335 30.2663 38.143 30.7431M41.8569 30.7431L55.855 36.342C58.2162 37.2865 59.4923 39.8529 58.8203 42.3056L54.4325 58.3212C53.8373 60.4937 51.8628 62 49.6102 62H30.3897C28.137 62 26.1626 60.4937 25.5674 58.3212L21.1795 42.3056C20.5075 39.8529 21.7837 37.2865 24.1449 36.342L38.143 30.7431M39.9999 30.3853L39.9999 62"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 22V19.5C30 17.567 31.567 16 33.5 16H46.5C48.433 16 50 17.567 50 19.5V22H51.5C53.9853 22 56 24.0147 56 26.5V34.2459L56.5978 34.4851C59.9035 35.8073 61.6901 39.4003 60.7493 42.834L56.3615 58.8496C55.5282 61.8912 52.7639 64 49.6103 64H30.3897C27.2361 64 24.4718 61.8912 23.6385 58.8496L19.2507 42.834C18.3099 39.4003 20.0965 35.8073 23.4022 34.4851L24 34.2459V26.5C24 24.0147 26.0147 22 28.5 22H30ZM34 22V20H46V22H34ZM24.8456 38.2162C23.4559 38.7963 22.7094 40.3201 23.1085 41.7771L27.4964 57.7927C27.8535 59.0962 29.0382 60 30.3897 60H38V32.9544L24.8456 38.2162ZM42 32.9544V60H49.6103C50.9618 60 52.1465 59.0962 52.5036 57.7927L56.8915 41.7771C57.2906 40.3201 56.5441 38.7963 55.1544 38.2162L42 32.9544ZM52 26.5V32.6459L42.5997 28.8858C40.9309 28.2183 39.0691 28.2183 37.4003 28.8858L28 32.6459V26.5C28 26.2239 28.2239 26 28.5 26H51.5C51.7761 26 52 26.2239 52 26.5Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-ship', CoreShip)
export default CoreShip
