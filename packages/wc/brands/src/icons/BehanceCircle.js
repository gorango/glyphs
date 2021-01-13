
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsBehanceCircle = {
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
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="#105DFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.1899 54.8985V24.3584H31.3081C35.8429 24.3584 39.5191 28.0346 39.5191 32.5693C39.5191 35.451 38.633 37.236 35.384 39.0672C39.2719 40.8387 40.3516 43.2939 40.3516 46.7185C40.3516 51.3512 36.2361 54.8985 31.6034 54.8985H17.1899ZM23.1641 29.4138V36.7575H30.1563C30.1563 36.7575 33.5548 36.7575 33.5548 33.0857C33.5548 29.4138 30.1563 29.4138 30.1563 29.4138H23.1641ZM23.1641 49.7263V41.7966H30.6641C31.8751 41.7966 34.4141 42.4216 34.4141 46.1716C34.4141 48.9529 31.9141 49.7002 30.6641 49.7263H23.1641Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.1251 32.7732C48.8282 32.7732 42.461 35.8591 42.461 44.0622C42.461 49.0572 45.1954 55.4685 53.3985 55.4685C59.961 55.4685 62.9818 50.6508 63.672 48.2419H57.5001C57.1876 49.3357 55.9766 50.5466 53.3985 50.5466C49.6485 50.5466 48.3204 47.3435 48.1251 45.7419H63.672V44.0622C63.672 35.8591 57.422 32.7732 53.1251 32.7732ZM53.1251 37.4607C49.6251 37.4607 48.3334 40.3513 48.1251 41.7966H57.5001C57.5001 40.3513 56.6251 37.4607 53.1251 37.4607Z"
            fill="white"
          />
          <path
            d="M45.6641 26.0935V29.8825H60.3907V26.0935H45.6641Z"
            fill="white"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M23.1641 29.4139V36.7577H30.1563C30.1563 36.7577 33.5548 36.7577 33.5548 33.0858C33.5548 29.4139 30.1563 29.4139 30.1563 29.4139H23.1641Z"
            fill="currentColor"
          />
          <path
            d="M23.1641 49.7264V41.7967H30.6641C31.8751 41.7967 34.4141 42.4217 34.4141 46.1717C34.4141 48.953 31.9141 49.7004 30.6641 49.7264H23.1641Z"
            fill="currentColor"
          />
          <path
            d="M53.1251 37.4608C49.6251 37.4608 48.3334 40.3514 48.1251 41.7967H57.5001C57.5001 40.3514 56.6251 37.4608 53.1251 37.4608Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM17.1899 54.8986V24.3585H31.3081C35.8429 24.3585 39.5191 28.0347 39.5191 32.5695C39.5191 35.4511 38.633 37.2361 35.384 39.0674C39.2719 40.8388 40.3516 43.294 40.3516 46.7186C40.3516 51.3513 36.2361 54.8986 31.6034 54.8986H17.1899ZM53.1251 32.7733C48.8282 32.7733 42.461 35.8592 42.461 44.0623C42.461 49.0573 45.1954 55.4686 53.3985 55.4686C59.961 55.4686 62.9818 50.6509 63.672 48.242H57.5001C57.1876 49.3358 55.9766 50.5467 53.3985 50.5467C49.6485 50.5467 48.3204 47.3436 48.1251 45.742H63.672V44.0623C63.672 35.8592 57.422 32.7733 53.1251 32.7733ZM45.6641 29.8827V26.0936H60.3907V29.8827H45.6641Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M63.672 44.0623C63.672 35.8592 57.422 32.7733 53.1251 32.7733C48.8282 32.7733 42.461 35.8592 42.461 44.0623C42.461 49.0573 45.1954 55.4686 53.3985 55.4686C59.961 55.4686 62.9818 50.6509 63.672 48.242H57.5001C57.1876 49.3358 55.9766 50.5467 53.3985 50.5467C49.6485 50.5467 48.3204 47.3436 48.1251 45.742H63.672M63.672 44.0623C63.672 44.9022 63.672 47.9165 63.672 45.742M63.672 44.0623V45.742M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40ZM17.1899 24.3585V54.8986H31.6034C36.2361 54.8986 40.3516 51.3513 40.3516 46.7186C40.3516 43.294 39.2719 40.8388 35.384 39.0674C38.633 37.2361 39.5191 35.4511 39.5191 32.5695C39.5191 28.0347 35.8429 24.3585 31.3081 24.3585H17.1899ZM23.1641 29.4139V36.7577H30.1563C30.1563 36.7577 33.5548 36.7577 33.5548 33.0858C33.5548 29.4139 30.1563 29.4139 30.1563 29.4139H23.1641ZM23.1641 41.7967V49.7264H30.6641C31.9141 49.7004 34.4141 48.953 34.4141 46.1717C34.4141 42.4217 31.8751 41.7967 30.6641 41.7967H23.1641ZM48.1251 41.7967C48.3334 40.3514 49.6251 37.4608 53.1251 37.4608C56.6251 37.4608 57.5001 40.3514 57.5001 41.7967H48.1251ZM45.6641 26.0936V29.8827H60.3907V26.0936H45.6641Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-behance-circle', BrandsBehanceCircle)
export default BrandsBehanceCircle
