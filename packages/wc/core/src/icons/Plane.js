
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CorePlane = {
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
            d="M49.4268 34L38.5549 15.0236C37.1294 12.5354 34.4811 11.0005 31.6134 11.0005H29.375C28.6565 11.0005 28.111 11.6475 28.2326 12.3557L31.9471 34H20.5233L16.0054 27.6751C15.2546 26.6239 14.0423 26 12.7505 26H9.80898C9.29425 26 8.91051 26.4746 9.01821 26.9779L11.7909 39.9367C11.7945 39.9493 11.8008 39.9607 11.8091 39.9701C11.809 39.9801 11.809 39.9901 11.809 40L11.8091 40.0295C11.8008 40.039 11.7945 40.0503 11.7909 40.063L9.01821 53.0217C8.91051 53.5251 9.29425 53.9996 9.80898 53.9996H12.7505C14.0423 53.9996 15.2546 53.3757 16.0054 52.3245L20.5229 46H31.9472L28.2326 67.6451C28.111 68.3533 28.6565 69.0003 29.375 69.0003H31.6134C34.4811 69.0003 37.1294 67.4654 38.5549 64.9772L49.4272 46H60.3858C62.8955 46 65.3762 45.4638 67.6618 44.4273L68.0768 44.2391C69.7405 43.4846 70.809 41.8268 70.809 40C70.809 38.1733 69.7405 36.5155 68.0768 35.761L67.6618 35.5728C65.3762 34.5363 62.8955 34 60.3858 34H49.4268Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.4268 34L38.5549 15.0236C37.1294 12.5354 34.4811 11.0005 31.6134 11.0005H29.375C28.6565 11.0005 28.111 11.6475 28.2326 12.3557L31.9471 34H20.5233L16.0054 27.6751C15.2546 26.6239 14.0423 26 12.7505 26H9.80898C9.29425 26 8.91051 26.4746 9.01821 26.9779L11.7909 39.9367C11.7945 39.9493 11.8008 39.9607 11.8091 39.9701C11.809 39.9801 11.809 39.9901 11.809 40L11.8091 40.0295C11.8008 40.039 11.7945 40.0503 11.7909 40.063L9.01821 53.0217C8.91051 53.5251 9.29425 53.9996 9.80898 53.9996H12.7505C14.0423 53.9996 15.2546 53.3757 16.0054 52.3245L20.5229 46H31.9472L28.2326 67.6451C28.111 68.3533 28.6565 69.0003 29.375 69.0003H31.6134C34.4811 69.0003 37.1294 67.4654 38.5549 64.9772L49.4272 46H60.3858C62.8955 46 65.3762 45.4638 67.6618 44.4273L68.0768 44.2391C69.7405 43.4846 70.809 41.8268 70.809 40C70.809 38.1733 69.7405 36.5155 68.0768 35.761L67.6618 35.5728C65.3762 34.5363 62.8955 34 60.3858 34H49.4268Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.4268 34L38.5549 15.0236C37.1294 12.5354 34.4811 11.0005 31.6134 11.0005H29.375C28.6565 11.0005 28.111 11.6475 28.2326 12.3557L31.9471 34H20.5233L16.0054 27.6751C15.2546 26.6239 14.0423 26 12.7505 26H9.80898C9.29425 26 8.91051 26.4746 9.01821 26.9779L11.7909 39.9367C11.7945 39.9493 11.8008 39.9607 11.8091 39.9701C11.809 39.9801 11.809 39.9901 11.809 40L11.8091 40.0295C11.8008 40.039 11.7945 40.0503 11.7909 40.063L9.01821 53.0217C8.91051 53.5251 9.29425 53.9996 9.80898 53.9996H12.7505C14.0423 53.9996 15.2546 53.3757 16.0054 52.3245L20.5229 46H31.9472L28.2326 67.6451C28.111 68.3533 28.6565 69.0003 29.375 69.0003H31.6134C34.4811 69.0003 37.1294 67.4654 38.5549 64.9772L49.4272 46H60.3858C62.8955 46 65.3762 45.4638 67.6618 44.4273L68.0768 44.2391C69.7405 43.4846 70.809 41.8268 70.809 40C70.809 38.1733 69.7405 36.5155 68.0768 35.761L67.6618 35.5728C65.3762 34.5363 62.8955 34 60.3858 34H49.4268Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5233 34L16.0054 27.675C15.2546 26.6239 14.0423 26 12.7505 26H9.80898C9.29425 26 8.91051 26.4745 9.01821 26.9779L11.7909 39.9366C11.7945 39.9493 11.8008 39.9606 11.8091 39.9701C11.809 39.9801 11.809 39.99 11.809 40L11.8091 40.0295C11.8008 40.0389 11.7945 40.0503 11.7909 40.0629L9.01821 53.0217C8.91051 53.525 9.29425 53.9995 9.80898 53.9995H12.7505C14.0423 53.9995 15.2546 53.3757 16.0054 52.3245L20.5229 46H60.3858C62.8955 46 65.3762 45.4638 67.6618 44.4273L68.0768 44.239C69.7405 43.4846 70.809 41.8267 70.809 40C70.809 38.1733 69.7405 36.5154 68.0768 35.761L67.6618 35.5727C65.3762 34.5362 62.8955 34 60.3858 34H20.5233Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M49.4268 34L38.5549 15.0236C37.1294 12.5354 34.4811 11.0005 31.6134 11.0005H29.375C28.6565 11.0005 28.111 11.6475 28.2326 12.3557L31.9471 34H20.5233L16.0054 27.6751C15.2546 26.6239 14.0423 26 12.7505 26H9.80898C9.29425 26 8.91051 26.4746 9.01821 26.9779L11.7909 39.9367C11.7945 39.9493 11.8008 39.9607 11.8091 39.9701C11.809 39.9801 11.809 39.9901 11.809 40L11.8091 40.0295C11.8008 40.039 11.7945 40.0503 11.7909 40.063L9.01821 53.0217C8.91051 53.5251 9.29425 53.9996 9.80898 53.9996H12.7505C14.0423 53.9996 15.2546 53.3757 16.0054 52.3245L20.5229 46H31.9472L28.2326 67.6451C28.111 68.3533 28.6565 69.0003 29.375 69.0003H31.6134C34.4811 69.0003 37.1294 67.4654 38.5549 64.9772L49.4272 46H60.3858C62.8955 46 65.3762 45.4638 67.6618 44.4273L68.0768 44.2391C69.7405 43.4846 70.809 41.8268 70.809 40C70.809 38.1733 69.7405 36.5155 68.0768 35.761L67.6618 35.5728C65.3762 34.5363 62.8955 34 60.3858 34H49.4268Z"
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
            d="M29.375 9C27.4167 9 25.9302 10.7634 26.2614 12.6935L29.5746 31.9995H21.5525L17.6329 26.5121C16.5067 24.9353 14.6882 23.9996 12.7505 23.9996H9.80901C8.02124 23.9996 6.68845 25.6477 7.0625 27.3959L9.75915 39.9993L7.0625 52.6028C6.68845 54.351 8.02124 55.9991 9.80901 55.9991H12.7505C14.6882 55.9991 16.5067 55.0633 17.6329 53.4865L21.5522 47.9995H29.5747L26.2614 67.3063C25.9302 69.2364 27.4167 70.9998 29.375 70.9998H31.6134C35.198 70.9998 38.5084 69.0812 40.2903 65.9709L50.5864 47.9995H60.3858C63.1804 47.9995 65.9428 47.4025 68.4878 46.2483L68.9029 46.06C71.2814 44.9814 72.809 42.6112 72.809 39.9995C72.809 37.3879 71.2814 35.0177 68.9029 33.9391L68.4879 33.7508C65.9428 32.5966 63.1804 31.9995 60.3858 31.9995H50.586L40.2903 14.0289C38.5084 10.9186 35.198 9 31.6134 9H29.375ZM30.3725 13L33.9183 33.6613C34.018 34.2424 33.8562 34.8378 33.4762 35.2886C33.0962 35.7394 32.5367 35.9995 31.9471 35.9995H20.5233C19.8774 35.9995 19.2712 35.6876 18.8958 35.162L14.378 28.8371C14.0026 28.3115 13.3964 27.9995 12.7505 27.9995H11.2822L13.7109 39.3507C13.7765 39.5521 13.8101 39.7643 13.8091 39.9796L13.809 39.9995L13.8091 40.0241C13.8096 40.2377 13.7759 40.4481 13.7109 40.648L11.2822 51.9991H12.7505C13.3964 51.9991 14.0026 51.6872 14.378 51.1616L18.8955 44.8371C19.2709 44.3115 19.8771 43.9995 20.523 43.9995H31.9472C32.5368 43.9995 33.0963 44.2597 33.4763 44.7105C33.8564 45.1613 34.0181 45.7567 33.9184 46.3378L30.3725 66.9998H31.6134C33.7642 66.9998 35.7504 65.8486 36.8196 63.9825L47.6919 45.0053C48.0483 44.3833 48.7103 43.9995 49.4272 43.9995H60.3858C62.6106 43.9995 64.8097 43.5242 66.8358 42.6054L67.2508 42.4171C68.1996 41.9869 68.809 41.0414 68.809 39.9995C68.809 38.9577 68.1996 38.0122 67.2508 37.582L66.8358 37.3937C64.8097 36.4749 62.6106 35.9995 60.3858 35.9995H49.4269C48.7099 35.9995 48.0479 35.6158 47.6915 34.9938L36.8196 16.0173C35.7504 14.1512 33.7642 13 31.6134 13H30.3725Z"
            stroke="currentColor"
          />
        `}
      </g>
    </svg>
  `
}

define('core-plane', CorePlane)
export default CorePlane
