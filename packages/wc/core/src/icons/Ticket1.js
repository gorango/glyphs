
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreTicket1 = {
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
            d="M8 24C8 21.7909 9.79086 20 12 20H68C70.2091 20 72 21.7909 72 24V33.6052C71.6647 33.6578 71.3304 33.7373 71 33.8446C68.3333 34.7111 66.5279 37.1961 66.5279 40C66.5279 42.8039 68.3333 45.2889 71 46.1554C71.3304 46.2627 71.6647 46.3422 72 46.3948V56C72 58.2091 70.2091 60 68 60H12C9.79086 60 8 58.2091 8 56V46.4726C8.66685 46.4727 9.3412 46.3694 10 46.1554C12.6667 45.2889 14.4721 42.8039 14.4721 40C14.4721 37.1961 12.6667 34.7111 10 33.8446C9.3412 33.6306 8.66685 33.5273 8 33.5274V24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22 32H58V48H22V32Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 20C9.79086 20 8 21.7909 8 24V33.5274C8.66685 33.5273 9.3412 33.6306 10 33.8446C12.6667 34.7111 14.4721 37.1961 14.4721 40C14.4721 42.8039 12.6667 45.2889 10 46.1554C9.3412 46.3694 8.66685 46.4727 8 46.4726V56C8 58.2091 9.79086 60 12 60H68C70.2091 60 72 58.2091 72 56V46.3948C71.6647 46.3422 71.3304 46.2627 71 46.1554C68.3333 45.2889 66.5279 42.8039 66.5279 40C66.5279 37.1961 68.3333 34.7111 71 33.8446C71.3304 33.7373 71.6647 33.6578 72 33.6052V24C72 21.7909 70.2091 20 68 20H12ZM58 32H22V48H58V32Z"
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
            d="M8 24C8 21.7909 9.79086 20 12 20H68C70.2091 20 72 21.7909 72 24V33.6052C71.6647 33.6578 71.3304 33.7373 71 33.8446C68.3333 34.7111 66.5279 37.1961 66.5279 40C66.5279 42.8039 68.3333 45.2889 71 46.1554C71.3304 46.2627 71.6647 46.3422 72 46.3948V56C72 58.2091 70.2091 60 68 60H12C9.79086 60 8 58.2091 8 56V46.4726C8.66685 46.4727 9.3412 46.3694 10 46.1554C12.6667 45.2889 14.4721 42.8039 14.4721 40C14.4721 37.1961 12.6667 34.7111 10 33.8446C9.3412 33.6306 8.66685 33.5273 8 33.5274V24Z"
            fill="#F2C94C"
          />
          <path
            d="M72 33.6052L72.3097 35.5811C73.2828 35.4286 74 34.5903 74 33.6052H72ZM71 33.8446L70.382 31.9425L70.382 31.9425L71 33.8446ZM71 46.1554L70.382 48.0575H70.382L71 46.1554ZM72 46.3948H74C74 45.4097 73.2828 44.5714 72.3097 44.4189L72 46.3948ZM8 46.4726L8.00027 44.4726C7.46979 44.4725 6.96101 44.6832 6.58588 45.0583C6.21075 45.4333 6 45.9421 6 46.4726H8ZM10 46.1554L10.618 48.0575H10.618L10 46.1554ZM14.4721 40H12.4721H14.4721ZM10 33.8446L10.618 31.9425H10.618L10 33.8446ZM8 33.5274H6C6 34.0579 6.21075 34.5667 6.58588 34.9417C6.96101 35.3168 7.46979 35.5275 8.00027 35.5274L8 33.5274ZM12 18C8.68629 18 6 20.6863 6 24H10C10 22.8954 10.8954 22 12 22V18ZM68 18H12V22H68V18ZM74 24C74 20.6863 71.3137 18 68 18V22C69.1046 22 70 22.8954 70 24H74ZM74 33.6052V24H70V33.6052H74ZM71.6903 31.6294C71.2511 31.6982 70.8136 31.8023 70.382 31.9425L71.618 35.7467C71.8472 35.6723 72.0783 35.6174 72.3097 35.5811L71.6903 31.6294ZM70.382 31.9425C66.8913 33.0767 64.5279 36.3296 64.5279 40H68.5279C68.5279 38.0626 69.7754 36.3454 71.618 35.7467L70.382 31.9425ZM64.5279 40C64.5279 43.6704 66.8913 46.9233 70.382 48.0575L71.618 44.2533C69.7754 43.6546 68.5279 41.9374 68.5279 40H64.5279ZM70.382 48.0575C70.8136 48.1977 71.2511 48.3018 71.6903 48.3706L72.3097 44.4189C72.0783 44.3826 71.8472 44.3277 71.618 44.2533L70.382 48.0575ZM74 56V46.3948H70V56H74ZM68 62C71.3137 62 74 59.3137 74 56H70C70 57.1046 69.1046 58 68 58V62ZM12 62H68V58H12V62ZM6 56C6 59.3137 8.68629 62 12 62V58C10.8954 58 10 57.1046 10 56H6ZM6 46.4726V56H10V46.4726H6ZM9.38197 44.2533C8.92559 44.4015 8.46006 44.4726 8.00027 44.4726L7.99973 48.4726C8.87364 48.4727 9.7568 48.3373 10.618 48.0575L9.38197 44.2533ZM12.4721 40C12.4721 41.9374 11.2246 43.6545 9.38197 44.2533L10.618 48.0575C14.1087 46.9233 16.4721 43.6704 16.4721 40H12.4721ZM9.38197 35.7467C11.2246 36.3454 12.4721 38.0626 12.4721 40H16.4721C16.4721 36.3296 14.1087 33.0767 10.618 31.9425L9.38197 35.7467ZM8.00027 35.5274C8.46006 35.5274 8.92559 35.5985 9.38197 35.7467L10.618 31.9425C9.7568 31.6627 8.87364 31.5273 7.99973 31.5274L8.00027 35.5274ZM6 24V33.5274H10V24H6Z"
            fill="#EB5757"
          />
          <rect
            x="22"
            y="32"
            width="36"
            height="16"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M8 24C8 21.7909 9.79086 20 12 20H68C70.2091 20 72 21.7909 72 24V33.6052C71.6647 33.6578 71.3304 33.7373 71 33.8446C68.3333 34.7111 66.5279 37.1961 66.5279 40C66.5279 42.8039 68.3333 45.2889 71 46.1554C71.3304 46.2627 71.6647 46.3422 72 46.3948V56C72 58.2091 70.2091 60 68 60H12C9.79086 60 8 58.2091 8 56V46.4726C8.66685 46.4727 9.3412 46.3694 10 46.1554C12.6667 45.2889 14.4721 42.8039 14.4721 40C14.4721 37.1961 12.6667 34.7111 10 33.8446C9.3412 33.6306 8.66685 33.5273 8 33.5274V24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22 32H58V48H22V32Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M8 24C8 21.7909 9.79086 20 12 20H68C70.2091 20 72 21.7909 72 24V33.6052C71.6647 33.6578 71.3304 33.7373 71 33.8446C68.3333 34.7111 66.5279 37.1961 66.5279 40C66.5279 42.8039 68.3333 45.2889 71 46.1554C71.3304 46.2627 71.6647 46.3422 72 46.3948V56C72 58.2091 70.2091 60 68 60H12C9.79086 60 8 58.2091 8 56V46.4726C8.66685 46.4727 9.3412 46.3694 10 46.1554C12.6667 45.2889 14.4721 42.8039 14.4721 40C14.4721 37.1961 12.6667 34.7111 10 33.8446C9.3412 33.6306 8.66685 33.5273 8 33.5274V24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22 32H58V48H22V32Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 30C20.8954 30 20 30.8954 20 32V48C20 49.1046 20.8954 50 22 50H58C59.1046 50 60 49.1046 60 48V32C60 30.8954 59.1046 30 58 30H22ZM56 46H24V34H56V46Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 18C8.68629 18 6 20.6863 6 24V33.5274C6 34.0579 6.21075 34.5667 6.58588 34.9417C6.96101 35.3168 7.46979 35.5275 8.00027 35.5274C8.46006 35.5274 8.92559 35.5985 9.38197 35.7467C11.2246 36.3454 12.4721 38.0626 12.4721 40C12.4721 41.9374 11.2246 43.6545 9.38197 44.2533C8.92559 44.4015 8.46006 44.4726 8.00027 44.4726C7.46979 44.4725 6.96101 44.6832 6.58588 45.0583C6.21075 45.4333 6 45.9421 6 46.4726V56C6 59.3137 8.68629 62 12 62H68C71.3137 62 74 59.3137 74 56V46.3948C74 45.4097 73.2828 44.5714 72.3097 44.4189C72.0783 44.3826 71.8472 44.3277 71.618 44.2533C69.7754 43.6546 68.5279 41.9374 68.5279 40C68.5279 38.0626 69.7754 36.3454 71.618 35.7467C71.8472 35.6723 72.0783 35.6174 72.3097 35.5811C73.2828 35.4286 74 34.5903 74 33.6052V24C74 20.6863 71.3137 18 68 18H12ZM10 24C10 22.8954 10.8954 22 12 22H68C69.1046 22 70 22.8954 70 24V32.0767C66.72 33.3175 64.5279 36.4652 64.5279 40C64.5279 43.5348 66.72 46.6825 70 47.9233V56C70 57.1046 69.1046 58 68 58H12C10.8954 58 10 57.1046 10 56V48.2328C10.207 48.1825 10.4131 48.1241 10.618 48.0575C14.1087 46.9233 16.4721 43.6704 16.4721 40C16.4721 36.3296 14.1087 33.0767 10.618 31.9425C10.4131 31.8759 10.207 31.8175 10 31.7672V24Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-ticket-1', CoreTicket1)
export default CoreTicket1
