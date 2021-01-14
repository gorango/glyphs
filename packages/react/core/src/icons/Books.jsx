
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M18.0457 24.8188C18.0457 24.2666 18.4934 23.8188 19.0457 23.8188H31.0457C31.5979 23.8188 32.0457 24.2666 32.0457 24.8188V66.8188C32.0457 67.3711 31.5979 67.8188 31.0457 67.8188H19.0457C18.4934 67.8188 18.0457 67.3711 18.0457 66.8188V24.8188Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18.0457 31.8169H32.0457"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18.0457 59.8169H32.0457"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.0457 12.8188C32.0457 12.2666 32.4934 11.8188 33.0457 11.8188H45.0457C45.5979 11.8188 46.0457 12.2666 46.0457 12.8188V66.8188C46.0457 67.3711 45.5979 67.8188 45.0457 67.8188H33.0457C32.4934 67.8188 32.0457 67.3711 32.0457 66.8188V12.8188Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.0457 19.8169H46.0457"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.0457 59.8169H46.0457"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M64.9544 66.5409L59.2941 31.1785L49.0457 32.8189L54.706 68.1813"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54.337 65.8767C55.8065 65.049 57.4269 64.4759 59.1328 64.2028C60.9756 63.9078 62.8329 63.9767 64.6086 64.3807"
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
            d="M18 25C18 24.4477 18.4477 24 19 24H31C31.5523 24 32 24.4477 32 25V27.998H18V25Z"
            fill="currentColor"
          />
          <path
            d="M18 35.998H32V55.998H18V35.998Z"
            fill="currentColor"
          />
          <path
            d="M18 63.998V67C18 67.5523 18.4477 68 19 68H31C31.5523 68 32 67.5523 32 67V63.998H18Z"
            fill="currentColor"
          />
          <path
            d="M39 13C39 12.4477 39.4477 12 40 12H52C52.5523 12 53 12.4477 53 13V15.998H39V13Z"
            fill="currentColor"
          />
          <path
            d="M39 23.998H53V55.998H39V23.998Z"
            fill="currentColor"
          />
          <path
            d="M39 63.998V67C39 67.5523 39.4477 68 40 68H52C52.5523 68 53 67.5523 53 67V63.998H39Z"
            fill="currentColor"
          />
          <path
            d="M59.0001 33.0009L69.2486 31.3604M59.0001 33.0009L64.2915 66.058C65.7609 65.2303 67.3813 64.6572 69.0872 64.3841C70.93 64.0891 72.7873 64.158 74.563 64.562L69.2486 31.3604M59.0001 33.0009L64.6603 68.3624M69.2486 31.3604L74.9088 66.722M19 24C18.4477 24 18 24.4477 18 25V27.998H32V25C32 24.4477 31.5523 24 31 24H19ZM32 35.998H18V55.998H32V35.998ZM18 63.998V67C18 67.5523 18.4477 68 19 68H31C31.5523 68 32 67.5523 32 67V63.998H18ZM40 12C39.4477 12 39 12.4477 39 13V15.998H53V13C53 12.4477 52.5523 12 52 12H40ZM53 23.998H39V55.998H53V23.998ZM39 63.998V67C39 67.5523 39.4477 68 40 68H52C52.5523 68 53 67.5523 53 67V63.998H39Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="18"
            y="24"
            width="14"
            height="44"
            rx="1"
            fill="#219653"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18 30.2842L32 30.2842"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18 61.7126H32"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="32"
            y="12"
            width="14"
            height="56"
            rx="1"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 19.998L46 19.998"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 59.998H46"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.1893 34.1829C50.5778 34.6107 52.0601 34.7219 53.5251 34.4874L55.4137 34.1851C56.8786 33.9506 58.2523 33.3823 59.4378 32.5424L64.7193 65.5384C63.3309 65.1106 61.8485 64.9994 60.3836 65.2339L58.4949 65.5362C57.03 65.7707 55.6564 66.339 54.4709 67.1788L49.1893 34.1829Z"
            fill="#F2F2F2"
          />
          <path
            d="M49 33L54.6603 68.3625M59.2484 31.3596L64.9088 66.722"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M18.0457 24.8188C18.0457 24.2666 18.4934 23.8188 19.0457 23.8188H31.0457C31.5979 23.8188 32.0457 24.2666 32.0457 24.8188V66.8188C32.0457 67.3711 31.5979 67.8188 31.0457 67.8188H19.0457C18.4934 67.8188 18.0457 67.3711 18.0457 66.8188V24.8188Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.0457 12.8188C32.0457 12.2666 32.4934 11.8188 33.0457 11.8188H45.0457C45.5979 11.8188 46.0457 12.2666 46.0457 12.8188V66.8188C46.0457 67.3711 45.5979 67.8188 45.0457 67.8188H33.0457C32.4934 67.8188 32.0457 67.3711 32.0457 66.8188V12.8188Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M59.2942 31.1793L49.0458 32.8198L54.5165 66.9977C55.702 66.1578 57.0756 65.5896 58.5406 65.3551L60.4292 65.0528C61.8942 64.8183 63.3765 64.9294 64.765 65.3573L59.2942 31.1793Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.0457 66.8188V24.8188C32.0457 24.2666 31.5979 23.8188 31.0457 23.8188H19.0457C18.4934 23.8188 18.0457 24.2666 18.0457 24.8188V66.8188C18.0457 67.3711 18.4934 67.8188 19.0457 67.8188H31.0457C31.5979 67.8188 32.0457 67.3711 32.0457 66.8188ZM32.0457 66.8188V12.8188C32.0457 12.2666 32.4934 11.8188 33.0457 11.8188H45.0457C45.5979 11.8188 46.0457 12.2666 46.0457 12.8188V66.8188C46.0457 67.3711 45.5979 67.8188 45.0457 67.8188H33.0457C32.4934 67.8188 32.0457 67.3711 32.0457 66.8188ZM18.0457 30.103H32.0457M18.0457 61.5316H32.0457M32.0457 19.8169H46.0457M32.0457 59.8169H46.0457M49.0458 32.8198L59.2942 31.1793M49.0458 32.8198L54.5165 66.9977C55.702 66.1578 57.0756 65.5896 58.5406 65.3551L60.4292 65.0528C61.8942 64.8183 63.3765 64.9294 64.765 65.3573L59.2942 31.1793M49.0458 32.8198L54.706 68.1813M59.2942 31.1793L64.9544 66.5409"
            stroke="currentColor"
            stroke-width={strokeWidth}
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
            d="M33 10C31.3431 10 30 11.3431 30 13V22H19C17.3431 22 16 23.3431 16 25V67C16 68.6569 17.3431 70 19 70H31C31.3506 70 31.6872 69.9398 32 69.8293C32.3128 69.9398 32.6494 70 33 70H45C46.6569 70 48 68.6569 48 67V39.4065L52.6855 68.6786C52.86 69.7692 53.8857 70.5119 54.9764 70.3373C56.0671 70.1627 56.8098 69.137 56.6352 68.0463L56.4991 67.1963C57.4202 66.8038 58.3943 66.5205 59.4033 66.359C60.544 66.1764 61.691 66.1556 62.8138 66.2876L62.9339 67.0381C63.1085 68.1288 64.1342 68.8715 65.2249 68.6969C66.3156 68.5223 67.0582 67.4966 66.8836 66.4059L66.5383 64.2485C66.5382 64.2476 66.538 64.2468 66.5379 64.2459L61.2234 31.0443C61.0489 29.9536 60.023 29.2101 58.9323 29.3847C58.9126 29.3879 58.893 29.3913 58.8735 29.395L48.743 31.0166C48.7233 31.0191 48.7036 31.022 48.6839 31.0251C48.4357 31.0649 48.2055 31.1487 48 31.2673V13C48 11.3431 46.6569 10 45 10H33ZM51.2911 34.6596L55.8524 63.1563C56.7926 62.821 57.7689 62.5697 58.7711 62.4093C59.9026 62.2281 61.039 62.1675 62.163 62.2222L57.5898 33.6514L51.2911 34.6596ZM30 66V61.998H20V66H30ZM30 57.998V33.998H20V57.998H30ZM30 29.998V26H20V29.998H30ZM34 66H44V61.998H34V66ZM34 57.998V21.998H44V57.998H34ZM34 17.998H44V14H34V17.998Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBooks = forwardRef((props, ref) => {
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

CoreBooks.displayName = 'CoreBooks'

export default CoreBooks
