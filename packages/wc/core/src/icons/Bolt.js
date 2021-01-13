
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBolt = {
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
            d="M28.6853 13.7266C28.7546 13.2329 29.177 12.8657 29.6756 12.8657H44.4484C45.1003 12.8657 45.5779 13.4795 45.4178 14.1114L41.3267 30.2537C41.248 30.5642 41.4827 30.8657 41.803 30.8657H54.1151C54.8585 30.8657 55.342 31.648 55.0095 32.3129L37.7633 66.8055C37.454 67.424 36.5163 67.0983 36.6571 66.4213L41.5114 43.0692C41.6405 42.4484 41.1665 41.8657 40.5323 41.8657H25.8837C25.2761 41.8657 24.8089 41.3283 24.8934 40.7267L28.6853 13.7266Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.8017 13.8609C28.8711 13.3672 29.2935 13 29.792 13L44.5649 13C45.2168 13 45.6944 13.6137 45.5342 14.2457L41.4432 30.388C41.3645 30.6985 41.5991 31 41.9194 31H44.1647H46.9194H54.2316C54.975 31 55.4585 31.7823 55.126 32.4472L37.8797 66.9398C37.5705 67.5583 36.6328 67.2326 36.7735 66.5556L41.6279 43.2035C41.7569 42.5827 41.2829 42 40.6488 42H38.5003H35.9194H26.0002C25.3926 42 24.9254 41.4626 25.0099 40.8609L28.8017 13.8609Z"
            fill="currentColor"
          />
          <path
            d="M41.6279 43.2035L40.1593 42.8982L41.6279 43.2035ZM37.8797 66.9398L36.5381 66.269L37.8797 66.9398ZM41.4432 30.388L39.9892 30.0195L41.4432 30.388ZM55.126 32.4472L53.7844 31.7764L55.126 32.4472ZM28.8017 13.8609L27.3163 13.6523L28.8017 13.8609ZM45.5342 14.2457L46.9883 14.6142L45.5342 14.2457ZM44.5649 11.5L29.792 11.5V14.5L44.5649 14.5V11.5ZM42.8972 30.7565L46.9883 14.6142L44.0802 13.8772L39.9892 30.0195L42.8972 30.7565ZM41.9194 32.5H44.1647V29.5H41.9194V32.5ZM44.1647 32.5H46.9194V29.5H44.1647V32.5ZM54.2316 29.5H46.9194V32.5H54.2316V29.5ZM39.2214 67.6106L56.4676 33.118L53.7844 31.7764L36.5381 66.269L39.2214 67.6106ZM40.1593 42.8982L35.3049 66.2503L38.2421 66.8608L43.0965 43.5088L40.1593 42.8982ZM40.6488 40.5H38.5003L38.5003 43.5H40.6488L40.6488 40.5ZM38.5003 40.5H35.9194L35.9194 43.5H38.5003L38.5003 40.5ZM26.0002 43.5H35.9194L35.9194 40.5H26.0002V43.5ZM27.3163 13.6523L23.5245 40.6523L26.4953 41.0695L30.2872 14.0695L27.3163 13.6523ZM43.0965 43.5088C43.4191 41.9567 42.2341 40.5 40.6488 40.5L40.6488 43.5C40.3317 43.5 40.0947 43.2087 40.1593 42.8982L43.0965 43.5088ZM36.5381 66.269C36.6307 66.0838 36.8113 65.9088 37.0548 65.8223C37.2763 65.7437 37.4864 65.7597 37.65 65.8165C37.8137 65.8734 37.9885 65.9911 38.1135 66.19C38.251 66.4089 38.2843 66.6581 38.2421 66.8608L35.3049 66.2503C34.8066 68.6472 38.1265 69.8003 39.2214 67.6106L36.5381 66.269ZM39.9892 30.0195C39.6702 31.2779 40.6213 32.5 41.9194 32.5V29.5C42.577 29.5 43.0588 30.1191 42.8972 30.7565L39.9892 30.0195ZM54.2316 32.5C53.8599 32.5 53.6181 32.1088 53.7844 31.7764L56.4676 33.118C57.2988 31.4558 56.09 29.5 54.2316 29.5V32.5ZM26.0002 40.5C26.304 40.5 26.5376 40.7687 26.4953 41.0695L23.5245 40.6523C23.3132 42.1565 24.4812 43.5 26.0002 43.5V40.5ZM29.792 11.5C28.5457 11.5 27.4897 12.418 27.3163 13.6523L30.2872 14.0695C30.2525 14.3164 30.0413 14.5 29.792 14.5V11.5ZM44.5649 14.5C44.2389 14.5 44.0001 14.1931 44.0802 13.8772L46.9883 14.6142C47.3886 13.0344 46.1946 11.5 44.5649 11.5V14.5Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.8017 13.8609C28.8711 13.3672 29.2935 13 29.792 13L44.5649 13C45.2168 13 45.6944 13.6137 45.5342 14.2457L41.4432 30.388C41.3645 30.6985 41.5991 31 41.9194 31H44.1647H46.9194H54.2316C54.975 31 55.4585 31.7823 55.126 32.4472L37.8797 66.9398C37.5705 67.5583 36.6328 67.2326 36.7735 66.5556L41.6279 43.2035C41.7569 42.5827 41.2829 42 40.6488 42H38.5003H35.9194H26.0002C25.3926 42 24.9254 41.4626 25.0099 40.8609L28.8017 13.8609Z"
            fill="#56CCF2"
          />
          <path
            d="M44.1647 31L55.8496 31L35.8496 71L36.7735 66.5556L44.1647 31Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M28.6853 13.7266C28.7546 13.2329 29.177 12.8657 29.6756 12.8657H44.4484C45.1003 12.8657 45.5779 13.4795 45.4178 14.1114L41.3267 30.2537C41.248 30.5642 41.4827 30.8657 41.803 30.8657H54.1151C54.8585 30.8657 55.342 31.648 55.0095 32.3129L37.7633 66.8055C37.454 67.424 36.5163 67.0983 36.6571 66.4213L41.5114 43.0692C41.6405 42.4484 41.1665 41.8657 40.5323 41.8657H25.8837C25.2761 41.8657 24.8089 41.3283 24.8934 40.7267L28.6853 13.7266Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.8212 13.5828C27.0292 12.1017 28.2964 11 29.792 11H44.5649C46.5206 11 47.9534 12.8412 47.4729 14.737L43.8582 29H54.2316C56.4617 29 57.9122 31.3469 56.9149 33.3416L39.6686 67.8342C38.3118 70.5477 34.1979 69.1188 34.8154 66.1485L39.4195 44H26.0002C24.1774 44 22.7758 42.3879 23.0293 40.5828L26.8212 13.5828ZM30.6614 15L27.1504 40H40.6488C42.5512 40 43.9732 41.748 43.586 43.6106L40.9372 56.3526L52.6135 33H41.9194C40.2953 33 39.1055 31.471 39.5045 29.8967L43.2798 15H30.6614Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-bolt', CoreBolt)
export default CoreBolt
