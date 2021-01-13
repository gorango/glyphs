
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M57.5045 7.79198C57.5045 5.59458 55.0442 5.59455 53.9507 5.86923C55.4815 4.66065 57.2767 4.95367 57.9145 5.3199L72.6979 12.5687C74.1065 13.2594 75.0001 14.6965 75.0001 16.2714V63.9578C75.0001 65.5538 74.0827 67.0062 72.6455 67.6858L58.7346 74.2634C57.7778 74.6754 55.7002 75.6917 53.9507 74.2634C56.1376 74.6754 57.3222 73.1189 57.5045 72.066V7.79198Z"
            fill="url(#paint0_linearSchT)"
          />
          <path
            d="M54.128 5.82976C55.2886 5.60042 57.5044 5.70677 57.5044 7.79213V24.2063L12.684 58.1133C11.9005 58.7059 10.798 58.6076 10.1307 57.8856L5.51133 52.8871C4.78766 52.104 4.83829 50.8783 5.62406 50.1582L53.9506 5.86937L54.128 5.82976Z"
            fill="url(#paint1_linearSchT)"
          />
          <path
            d="M57.5044 55.927L12.684 22.02C11.9005 21.4274 10.798 21.5257 10.1307 22.2477L5.51133 27.2463C4.78766 28.0293 4.83829 29.255 5.62406 29.9752L53.9506 74.2639C56.1376 74.676 57.3222 73.1194 57.5044 72.0665V55.927Z"
            fill="url(#paint2_linearSchT)"
          />
          <defs><linearGradient id="paint0_linearSchT" x1="64.4754" y1="5" x2="64.4754" y2="75" gradientUnits="userSpaceOnUse"><stop stop-color="#32B5F1"/><stop offset="1" stop-color="#2B9FED"/></linearGradient><linearGradient id="paint1_linearSchT" x1="57.5044" y1="13.8349" x2="7.55426" y2="55.7628" gradientUnits="userSpaceOnUse"><stop stop-color="#0F6FB3"/><stop offset="0.270551" stop-color="#1279B7"/><stop offset="0.421376" stop-color="#1176B5"/><stop offset="0.618197" stop-color="#0E69AC"/><stop offset="0.855344" stop-color="#0F70AF"/><stop offset="1" stop-color="#0F6DAD"/></linearGradient><linearGradient id="paint2_linearSchT" x1="7.88804" y1="24.9597" x2="57.6978" y2="66.2021" gradientUnits="userSpaceOnUse"><stop stop-color="#1791D2"/><stop offset="1" stop-color="#1173C5"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M57.5045 7.79198C57.5045 5.59458 55.0442 5.59455 53.9507 5.86923C55.4815 4.66065 57.2767 4.95367 57.9145 5.3199L72.6979 12.5687C74.1065 13.2594 75.0001 14.6965 75.0001 16.2714V63.9578C75.0001 65.5538 74.0827 67.0062 72.6455 67.6858L58.7346 74.2634C57.7778 74.6754 55.7002 75.6917 53.9507 74.2634C56.1376 74.6754 57.3222 73.1189 57.5045 72.066V7.79198Z"
            fill="currentColor"
          />
          <path
            d="M54.128 5.82976C55.2886 5.60042 57.5045 5.70662 57.5045 7.79198L57.5044 24.2063L12.684 58.1133C11.9005 58.7059 10.798 58.6076 10.1307 57.8856L5.51133 52.8871C4.78766 52.104 4.83829 50.8783 5.62406 50.1582L53.9507 5.86923L54.128 5.82976Z"
            fill="currentColor"
          />
          <path
            d="M57.5044 55.927L12.684 22.02C11.9005 21.4274 10.798 21.5257 10.1307 22.2477L5.51133 27.2463C4.78766 28.0293 4.83829 29.255 5.62406 29.9752L53.9507 74.2634C56.1376 74.6754 57.3222 73.1189 57.5045 72.066L57.5044 55.927Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M53.9507 5.86923C55.0442 5.59455 57.5045 5.59458 57.5045 7.79198M53.9507 5.86923C55.4815 4.66065 57.2767 4.95367 57.9145 5.3199L72.6979 12.5687C74.1065 13.2594 75.0001 14.6965 75.0001 16.2714V63.9578C75.0001 65.5538 74.0827 67.0062 72.6455 67.6858L58.7346 74.2634C57.7778 74.6754 55.7002 75.6917 53.9507 74.2634M53.9507 5.86923L5.62406 50.1582C4.83829 50.8783 4.78766 52.104 5.51133 52.8871L10.1307 57.8856C10.798 58.6076 11.9005 58.7059 12.684 58.1133L57.5044 24.2063L57.5045 7.79198M53.9507 5.86923C53.9507 5.86922 53.9507 5.86923 53.9507 5.86923ZM53.9507 5.86923L54.128 5.82976C55.2886 5.60042 57.5045 5.70662 57.5045 7.79198M57.5045 7.79198V72.066M57.5045 72.066C57.3222 73.1189 56.1376 74.6754 53.9507 74.2634M57.5045 72.066L57.5044 55.927L12.684 22.02C11.9005 21.4274 10.798 21.5257 10.1307 22.2477L5.51133 27.2463C4.78766 28.0293 4.83829 29.255 5.62406 29.9752L53.9507 74.2634"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsVsCode = forwardRef((props, ref) => {
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

BrandsVsCode.displayName = 'BrandsVsCode'

export default BrandsVsCode
