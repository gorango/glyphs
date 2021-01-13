
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsInvision = {
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
            d="M65.7949 7.87305H13.3984C10.1942 7.87305 7.59668 10.4705 7.59668 13.6748V66.0713C7.59668 69.2755 10.1942 71.873 13.3984 71.873H65.7949C68.9992 71.873 71.5967 69.2755 71.5967 66.0713V13.6748C71.5967 10.4705 68.9992 7.87305 65.7949 7.87305Z"
            fill="#FF3366"
          />
          <path
            d="M28.9855 28.009C31.113 28.009 32.8953 26.3415 32.8953 24.156C32.8953 21.9719 31.113 20.3047 28.9855 20.3047C26.858 20.3047 25.0763 21.9719 25.0763 24.156C25.0763 26.3412 26.858 28.009 28.9855 28.009ZM20.879 48.639C20.6493 49.6165 20.534 50.672 20.534 51.533C20.534 54.9258 22.3738 57.1781 26.2835 57.1781C29.526 57.1781 32.1548 55.2526 34.0475 52.1433L32.8918 56.7816H39.3305L43.0105 42.0218C43.9305 38.2847 45.7128 36.345 48.4153 36.345C50.5425 36.345 51.8648 37.668 51.8648 39.852C51.8648 40.4848 51.8073 41.174 51.5773 41.9218L49.6798 48.706C49.3923 49.6835 49.2778 50.6615 49.2778 51.5808C49.2778 54.8016 51.1745 57.1573 55.1418 57.1573C58.534 57.1573 61.236 54.9736 62.731 49.7413L60.2015 48.7648C58.9365 52.27 57.844 52.9038 56.9815 52.9038C56.119 52.9038 55.659 52.3293 55.659 51.18C55.659 50.6625 55.7745 50.0883 55.9465 49.3968L57.7868 42.7873C58.2465 41.2353 58.4193 39.859 58.4193 38.5945C58.4193 33.65 55.4293 31.0695 51.8073 31.0695C48.4153 31.0695 44.9653 34.1292 43.2408 37.3495L44.5053 31.5695H34.6743L33.2943 36.6605H37.894L35.0615 48.0005C32.8373 52.945 28.7515 53.0253 28.2388 52.9105C27.3968 52.7205 26.8583 52.4008 26.8583 51.3068C26.8583 50.6755 26.9733 49.7688 27.2608 48.6755L31.5733 31.5695H20.6493L19.2693 36.6605H23.811L20.8793 48.639"
            fill="white"
          />
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.8018 8H66.1982C69.4025 8 72 10.5975 72 13.8018V66.1982C72 69.4025 69.4025 72 66.1982 72H13.8018C10.5975 72 8 69.4025 8 66.1982V13.8018C8 10.5975 10.5975 8 13.8018 8ZM33.2985 24.2833C33.2985 26.4688 31.5163 28.1363 29.3888 28.1363C27.2612 28.1363 25.4795 26.4685 25.4795 24.2833C25.4795 22.0993 27.2612 20.432 29.3888 20.432C31.5163 20.432 33.2985 22.0993 33.2985 24.2833ZM20.9373 51.6604C20.9373 50.7994 21.0525 49.7439 21.2823 48.7663L24.2143 36.7878H19.6725L21.0525 31.6968H31.9765L27.664 48.8028C27.3765 49.8961 27.2615 50.8028 27.2615 51.4341C27.2615 52.5281 27.8 52.8479 28.642 53.0379C29.1548 53.1526 33.2405 53.0724 35.4648 48.1278L38.2973 36.7878H33.6975L35.0775 31.6968H44.9085L43.644 37.4768C45.3685 34.2565 48.8185 31.1968 52.2105 31.1968C55.8325 31.1968 58.8225 33.7773 58.8225 38.7218C58.8225 39.9863 58.6497 41.3626 58.19 42.9146L56.3498 49.5241C56.1777 50.2156 56.0622 50.7899 56.0622 51.3074C56.0622 52.4566 56.5223 53.0311 57.3848 53.0311C58.2472 53.0311 59.3398 52.3974 60.6048 48.8921L63.1343 49.8686C61.6392 55.1009 58.9372 57.2846 55.545 57.2846C51.5777 57.2846 49.681 54.9289 49.681 51.7081C49.681 50.7889 49.7955 49.8108 50.083 48.8333L51.9805 42.0491C52.2105 41.3013 52.268 40.6121 52.268 39.9793C52.268 37.7953 50.9458 36.4723 48.8185 36.4723C46.116 36.4723 44.3337 38.4121 43.4137 42.1491L39.7337 56.9089H33.295L34.4508 52.2706C32.558 55.3799 29.9293 57.3054 26.6868 57.3054C22.777 57.3054 20.9373 55.0531 20.9373 51.6604Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M65.7949 7.87305H13.3984C10.1942 7.87305 7.59668 10.4705 7.59668 13.6748V66.0713C7.59668 69.2755 10.1942 71.873 13.3984 71.873H65.7949C68.9992 71.873 71.5967 69.2755 71.5967 66.0713V13.6748C71.5967 10.4705 68.9992 7.87305 65.7949 7.87305Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M28.9854 28.0093C31.1129 28.0093 32.8952 26.3418 32.8952 24.1563C32.8952 21.9723 31.1129 20.305 28.9854 20.305C26.8579 20.305 25.0762 21.9723 25.0762 24.1563C25.0762 26.3416 26.8579 28.0093 28.9854 28.0093ZM20.8789 48.6394C20.6492 49.6169 20.5339 50.6724 20.5339 51.5334C20.5339 54.9262 22.3737 57.1784 26.2834 57.1784C29.5259 57.1784 32.1547 55.2529 34.0474 52.1437L32.8917 56.7819H39.3304L43.0104 42.0221C43.9304 38.2851 45.7127 36.3453 48.4152 36.3453C50.5424 36.3453 51.8647 37.6684 51.8647 39.8524C51.8647 40.4851 51.8072 41.1744 51.5772 41.9221L49.6797 48.7064C49.3922 49.6839 49.2777 50.6619 49.2777 51.5812C49.2777 54.8019 51.1744 57.1577 55.1417 57.1577C58.5339 57.1577 61.2359 54.9739 62.7309 49.7416L60.2014 48.7651C58.9364 52.2704 57.8439 52.9042 56.9814 52.9042C56.1189 52.9042 55.6589 52.3297 55.6589 51.1804C55.6589 50.6629 55.7744 50.0886 55.9464 49.3971L57.7867 42.7876C58.2464 41.2356 58.4192 39.8594 58.4192 38.5949C58.4192 33.6503 55.4292 31.0698 51.8072 31.0698C48.4152 31.0698 44.9652 34.1296 43.2407 37.3499L44.5052 31.5698H34.6742L33.2942 36.6609H37.8939L35.0614 48.0009C32.8372 52.9454 28.7514 53.0257 28.2387 52.9109C27.3967 52.7209 26.8582 52.4012 26.8582 51.3071C26.8582 50.6759 26.9732 49.7691 27.2607 48.6759L31.5732 31.5698H20.6492L19.2692 36.6609H23.8109L20.8789 48.6394Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-invision', BrandsInvision)
export default BrandsInvision
