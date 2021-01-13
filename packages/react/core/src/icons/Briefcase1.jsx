
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M14 28C14 26.8954 14.8954 26 16 26H64C65.1046 26 66 26.8954 66 28V60C66 61.1046 65.1046 62 64 62H16C14.8954 62 14 61.1046 14 60V28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 26V20C48 18.8954 47.1046 18 46 18H34C32.8954 18 32 18.8954 32 20V26"
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
            d="M34 21L46 21V15L34 15V21ZM45 20V26L51 26V20H45ZM35 26V20H29V26H35ZM46 21C45.4477 21 45 20.5523 45 20H51C51 17.2386 48.7614 15 46 15V21ZM34 15C31.2386 15 29 17.2386 29 20H35C35 20.5523 34.5523 21 34 21V15Z"
            fill="currentColor"
          />
          <rect
            x="14"
            y="26"
            width="52"
            height="36"
            rx="2"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M34 20L46 20V16L34 16V20ZM46 20V26L50 26V20H46ZM34 26V20H30V26H34ZM46 20H50C50 17.7909 48.2091 16 46 16V20ZM34 16C31.7909 16 30 17.7909 30 20H34V20V16Z"
            fill="#333333"
          />
          <rect
            x="14"
            y="26"
            width="52"
            height="36"
            rx="2"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M14 28C14 26.8954 14.8954 26 16 26H64C65.1046 26 66 26.8954 66 28V60C66 61.1046 65.1046 62 64 62H16C14.8954 62 14 61.1046 14 60V28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48 26V20C48 18.8954 47.1046 18 46 18H34C32.8954 18 32 18.8954 32 20V26M16 62H64C65.1046 62 66 61.1046 66 60V28C66 26.8954 65.1046 26 64 26H16C14.8954 26 14 26.8954 14 28V60C14 61.1046 14.8954 62 16 62Z"
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
            d="M34 16C31.7909 16 30 17.7909 30 20V24H16C13.7909 24 12 25.7909 12 28V60C12 62.2091 13.7909 64 16 64H64C66.2091 64 68 62.2091 68 60V28C68 25.7909 66.2091 24 64 24H50V20C50 17.7909 48.2091 16 46 16H34ZM46 24V20H34V24H46ZM16 28L64 28V60H16V28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBriefcase1 = forwardRef((props, ref) => {
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

CoreBriefcase1.displayName = 'CoreBriefcase1'

export default CoreBriefcase1
