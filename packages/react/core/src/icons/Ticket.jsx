
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M8 24C8 21.7909 9.79086 20 12 20H68C70.2091 20 72 21.7909 72 24V33.6052C71.6647 33.6578 71.3304 33.7373 71 33.8446C68.3333 34.7111 66.5279 37.1961 66.5279 40C66.5279 42.8039 68.3333 45.2889 71 46.1554C71.3304 46.2627 71.6647 46.3422 72 46.3948V56C72 58.2091 70.2091 60 68 60H12C9.79086 60 8 58.2091 8 56V46.4726C8.66685 46.4727 9.3412 46.3694 10 46.1554C12.6667 45.2889 14.4721 42.8039 14.4721 40C14.4721 37.1961 12.6667 34.7111 10 33.8446C9.3412 33.6306 8.66685 33.5273 8 33.5274V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 24C8 21.7909 9.79086 20 12 20H68C70.2091 20 72 21.7909 72 24V33.6052C71.6647 33.6578 71.3304 33.7373 71 33.8446C68.3333 34.7111 66.5279 37.1961 66.5279 40C66.5279 42.8039 68.3333 45.2889 71 46.1554C71.3304 46.2627 71.6647 46.3422 72 46.3948V56C72 58.2091 70.2091 60 68 60H12C9.79086 60 8 58.2091 8 56V46.4726C8.66685 46.4727 9.3412 46.3694 10 46.1554C12.6667 45.2889 14.4721 42.8039 14.4721 40C14.4721 37.1961 12.6667 34.7111 10 33.8446C9.3412 33.6306 8.66685 33.5273 8 33.5274V24Z"
            fill="currentColor"
          />
          <path
            d="M72 33.6052L72.3097 35.5811C73.2828 35.4286 74 34.5903 74 33.6052H72ZM71 33.8446L70.382 31.9425L70.382 31.9425L71 33.8446ZM71 46.1554L70.382 48.0575H70.382L71 46.1554ZM72 46.3948H74C74 45.4097 73.2828 44.5714 72.3097 44.4189L72 46.3948ZM8 46.4726L8.00027 44.4726C7.46979 44.4725 6.96101 44.6832 6.58588 45.0583C6.21075 45.4333 6 45.9421 6 46.4726H8ZM10 46.1554L10.618 48.0575H10.618L10 46.1554ZM14.4721 40H12.4721H14.4721ZM10 33.8446L10.618 31.9425H10.618L10 33.8446ZM8 33.5274H6C6 34.0579 6.21075 34.5667 6.58588 34.9417C6.96101 35.3168 7.46979 35.5275 8.00027 35.5274L8 33.5274ZM12 18C8.68629 18 6 20.6863 6 24H10C10 22.8954 10.8954 22 12 22V18ZM68 18H12V22H68V18ZM74 24C74 20.6863 71.3137 18 68 18V22C69.1046 22 70 22.8954 70 24H74ZM74 33.6052V24H70V33.6052H74ZM71.6903 31.6294C71.2511 31.6982 70.8136 31.8023 70.382 31.9425L71.618 35.7467C71.8472 35.6723 72.0783 35.6174 72.3097 35.5811L71.6903 31.6294ZM70.382 31.9425C66.8913 33.0767 64.5279 36.3296 64.5279 40H68.5279C68.5279 38.0626 69.7754 36.3454 71.618 35.7467L70.382 31.9425ZM64.5279 40C64.5279 43.6704 66.8913 46.9233 70.382 48.0575L71.618 44.2533C69.7754 43.6546 68.5279 41.9374 68.5279 40H64.5279ZM70.382 48.0575C70.8136 48.1977 71.2511 48.3018 71.6903 48.3706L72.3097 44.4189C72.0783 44.3826 71.8472 44.3277 71.618 44.2533L70.382 48.0575ZM74 56V46.3948H70V56H74ZM68 62C71.3137 62 74 59.3137 74 56H70C70 57.1046 69.1046 58 68 58V62ZM12 62H68V58H12V62ZM6 56C6 59.3137 8.68629 62 12 62V58C10.8954 58 10 57.1046 10 56H6ZM6 46.4726V56H10V46.4726H6ZM9.38197 44.2533C8.92559 44.4015 8.46006 44.4726 8.00027 44.4726L7.99973 48.4726C8.87364 48.4727 9.7568 48.3373 10.618 48.0575L9.38197 44.2533ZM12.4721 40C12.4721 41.9374 11.2246 43.6545 9.38197 44.2533L10.618 48.0575C14.1087 46.9233 16.4721 43.6704 16.4721 40H12.4721ZM9.38197 35.7467C11.2246 36.3454 12.4721 38.0626 12.4721 40H16.4721C16.4721 36.3296 14.1087 33.0767 10.618 31.9425L9.38197 35.7467ZM8.00027 35.5274C8.46006 35.5274 8.92559 35.5985 9.38197 35.7467L10.618 31.9425C9.7568 31.6627 8.87364 31.5273 7.99973 31.5274L8.00027 35.5274ZM6 24V33.5274H10V24H6Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
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
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M8 24C8 21.7909 9.79086 20 12 20H68C70.2091 20 72 21.7909 72 24V33.6052C71.6647 33.6578 71.3304 33.7373 71 33.8446C68.3333 34.7111 66.5279 37.1961 66.5279 40C66.5279 42.8039 68.3333 45.2889 71 46.1554C71.3304 46.2627 71.6647 46.3422 72 46.3948V56C72 58.2091 70.2091 60 68 60H12C9.79086 60 8 58.2091 8 56V46.4726C8.66685 46.4727 9.3412 46.3694 10 46.1554C12.6667 45.2889 14.4721 42.8039 14.4721 40C14.4721 37.1961 12.6667 34.7111 10 33.8446C9.3412 33.6306 8.66685 33.5273 8 33.5274V24Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 24C6 20.6863 8.68629 18 12 18H68C71.3137 18 74 20.6863 74 24V33.6052C74 34.5903 73.2828 35.4286 72.3097 35.5811C72.0783 35.6174 71.8472 35.6723 71.618 35.7467C69.7754 36.3454 68.5279 38.0626 68.5279 40C68.5279 41.9374 69.7754 43.6546 71.618 44.2533C71.8472 44.3277 72.0783 44.3826 72.3097 44.4189C73.2828 44.5714 74 45.4097 74 46.3948V56C74 59.3137 71.3137 62 68 62H12C8.68629 62 6 59.3137 6 56V46.4726C6 45.9421 6.21075 45.4333 6.58588 45.0583C6.96101 44.6832 7.46979 44.4725 8.00027 44.4726C8.46006 44.4726 8.92559 44.4015 9.38197 44.2533C11.2246 43.6545 12.4721 41.9374 12.4721 40C12.4721 38.0626 11.2246 36.3454 9.38197 35.7467C8.92559 35.5985 8.46006 35.5274 8.00027 35.5274C7.46979 35.5275 6.96101 35.3168 6.58588 34.9417C6.21075 34.5667 6 34.0579 6 33.5274V24ZM12 22C10.8954 22 10 22.8954 10 24V31.7672C10.207 31.8175 10.4131 31.8759 10.618 31.9425C14.1087 33.0767 16.4721 36.3296 16.4721 40C16.4721 43.6704 14.1087 46.9233 10.618 48.0575C10.4131 48.1241 10.207 48.1825 10 48.2328V56C10 57.1046 10.8954 58 12 58H68C69.1046 58 70 57.1046 70 56V47.9233C66.72 46.6825 64.5279 43.5348 64.5279 40C64.5279 36.4652 66.72 33.3175 70 32.0767V24C70 22.8954 69.1046 22 68 22H12Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreTicket = forwardRef((props, ref) => {
  const { size, variant, rotate, flip, children } = props

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={size || 40}
      height={size || 40}
      transform={transform(rotate, flip)}
    >
      {children}
      <g>
        {renderString({ size, variant, rotate, flip })}
      </g>
    </svg>
  )
})

CoreTicket.displayName = 'CoreTicket'

export default CoreTicket
