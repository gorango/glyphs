
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1758 55.8031C11.5552 56.8563 10.8583 58.0784 10.2664 59.0521C9.73662 59.9838 10.021 61.1855 10.9061 61.7545L23.3169 69.7029C23.7526 69.9829 24.278 70.069 24.7752 69.9419C25.2725 69.8149 25.6998 69.4854 25.9614 69.0273C26.4578 68.1629 27.0975 67.0402 27.7944 65.838C32.711 57.3928 37.6563 58.4261 46.573 62.8574L58.8788 68.9478C59.3449 69.1787 59.8809 69.2034 60.3648 69.0162C60.8486 68.829 61.239 68.4459 61.4469 67.9543L67.3564 54.0446C67.7739 53.0511 67.3491 51.8927 66.4017 51.4415C63.805 50.1697 58.6402 47.6362 53.9909 45.3013C37.2648 36.8462 23.0496 37.3926 12.1758 55.8031Z"
            fill="url(#paint0_lineardbCg)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.8246 24.2388C68.4451 23.1856 69.1421 21.9635 69.734 20.9899C70.2638 20.0581 69.9793 18.8564 69.0943 18.2874L56.6835 10.339C56.2443 10.0311 55.7019 9.92691 55.186 10.0512C54.6702 10.1756 54.2271 10.5173 53.9626 10.9947C53.4662 11.8591 52.8265 12.9818 52.1296 14.184C47.213 22.6292 42.2677 21.5959 33.351 17.1647L21.0833 11.104C20.6173 10.8732 20.0813 10.8485 19.5974 11.0357C19.1136 11.2229 18.7232 11.6059 18.5153 12.0976L12.6058 26.0073C12.1883 27.0007 12.6131 28.1591 13.5605 28.6104C16.1572 29.8821 21.322 32.4157 25.9713 34.7505C42.7355 43.1957 56.9508 42.6294 67.8246 24.2388Z"
            fill="url(#paint1_lineardbCg)"
          />
          <defs><linearGradient id="paint0_lineardbCg" x1="67.0223" y1="73.8063" x2="52.1664" y2="41.0581" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient><linearGradient id="paint1_lineardbCg" x1="12.9781" y1="6.22568" x2="27.8573" y2="38.9889" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1758 55.8031C11.5552 56.8563 10.8583 58.0784 10.2664 59.0521C9.73662 59.9838 10.021 61.1855 10.9061 61.7545L23.3169 69.7029C23.7526 69.9829 24.278 70.069 24.7752 69.9419C25.2725 69.8149 25.6998 69.4854 25.9614 69.0273C26.4578 68.1629 27.0975 67.0402 27.7944 65.838C32.711 57.3928 37.6563 58.4261 46.573 62.8574L58.8788 68.9478C59.3449 69.1787 59.8809 69.2034 60.3648 69.0162C60.8486 68.829 61.239 68.4459 61.4469 67.9543L67.3564 54.0446C67.7739 53.0511 67.3491 51.8927 66.4017 51.4415C63.805 50.1697 58.6402 47.6362 53.9909 45.3013C37.2648 36.8462 23.0496 37.3926 12.1758 55.8031Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.8244 24.2388C68.4449 23.1856 69.1418 21.9635 69.7337 20.9899C70.2635 20.0581 69.9791 18.8564 69.0941 18.2874L56.6832 10.339C56.244 10.0311 55.7017 9.92691 55.1858 10.0512C54.6699 10.1756 54.2268 10.5173 53.9624 10.9947C53.4659 11.8591 52.8263 12.9818 52.1294 14.184C47.2128 22.6292 42.2675 21.5959 33.3508 17.1647L21.0831 11.104C20.617 10.8732 20.081 10.8485 19.5972 11.0357C19.1134 11.2229 18.723 11.6059 18.515 12.0976L12.6055 26.0073C12.188 27.0007 12.6128 28.1591 13.5602 28.6104C16.1569 29.8821 21.3218 32.4157 25.9711 34.7505C42.7353 43.1957 56.9505 42.6294 67.8244 24.2388Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1758 55.8031C11.5552 56.8563 10.8583 58.0784 10.2664 59.0521C9.73662 59.9838 10.021 61.1855 10.9061 61.7545L23.3169 69.7029C23.7526 69.9829 24.278 70.069 24.7752 69.9419C25.2725 69.8149 25.6998 69.4854 25.9614 69.0273C26.4578 68.1629 27.0975 67.0402 27.7944 65.838C32.711 57.3928 37.6563 58.4261 46.573 62.8574L58.8788 68.9478C59.3449 69.1787 59.8809 69.2034 60.3648 69.0162C60.8486 68.829 61.239 68.4459 61.4469 67.9543L67.3564 54.0446C67.7739 53.0511 67.3491 51.8927 66.4017 51.4415C63.805 50.1697 58.6402 47.6362 53.9909 45.3013C37.2648 36.8462 23.0496 37.3926 12.1758 55.8031Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.8244 24.2388C68.4449 23.1856 69.1418 21.9635 69.7337 20.9899C70.2635 20.0581 69.9791 18.8564 69.0941 18.2874L56.6832 10.339C56.244 10.0311 55.7017 9.92691 55.1858 10.0512C54.6699 10.1756 54.2268 10.5173 53.9624 10.9947C53.4659 11.8591 52.8263 12.9818 52.1294 14.184C47.2128 22.6292 42.2675 21.5959 33.3508 17.1647L21.0831 11.104C20.617 10.8732 20.081 10.8485 19.5972 11.0357C19.1134 11.2229 18.723 11.6059 18.515 12.0976L12.6055 26.0073C12.188 27.0007 12.6128 28.1591 13.5602 28.6104C16.1569 29.8821 21.3218 32.4157 25.9711 34.7505C42.7353 43.1957 56.9505 42.6294 67.8244 24.2388Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsConfluence = forwardRef((props, ref) => {
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

BrandsConfluence.displayName = 'BrandsConfluence'

export default BrandsConfluence
