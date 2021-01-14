
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M4 61V19"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M4 53H76"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53V61"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M75.5 53C75.7761 53 76 52.7761 76 52.5V45C76 36.1634 68.8366 29 60 29H34C32.8954 29 32 29.8954 32 31V52.5C32 52.7761 32.2239 53 32.5 53"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 33C32 31.8954 31.1046 31 30 31H6C4.89543 31 4 31.8954 4 33"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <rect
            x="4"
            y="31"
            width="28"
            height="22"
            rx="2"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.5 53H75.5C75.7761 53 76 52.7761 76 52.5V45C76 36.1634 68.8366 29 60 29H34C32.8954 29 32 29.8954 32 31V52.5C32 52.7761 32.2239 53 32.5 53Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M4 19V53.186V61"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53H4"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53V61"
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
            x="4"
            y="31"
            width="28"
            height="22"
            rx="2"
            fill="#F2F2F2"
          />
          <path
            d="M32.5 53H75.5C75.7761 53 76 52.7761 76 52.5V45C76 36.1634 68.8366 29 60 29H34C32.8954 29 32 29.8954 32 31V52.5C32 52.7761 32.2239 53 32.5 53Z"
            fill="#9B51E0"
          />
          <path
            d="M4 19V53.186V61"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53H4"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53V61"
            stroke="#4F4F4F"
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
            d="M4 33C4 31.8954 4.89543 31 6 31H30C31.1046 31 32 31.8954 32 33V51C32 52.1046 31.1046 53 30 53H6C4.89543 53 4 52.1046 4 51V33Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.5 53H75.5C75.7761 53 76 52.7761 76 52.5V45C76 36.1634 68.8366 29 60 29H34C32.8954 29 32 29.8954 32 31V52.5C32 52.7761 32.2239 53 32.5 53Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M4 61V19M4 53H76V61M6 53H30C31.1046 53 32 52.1046 32 51V33C32 31.8954 31.1046 31 30 31H6C4.89543 31 4 31.8954 4 33V51C4 52.1046 4.89543 53 6 53ZM75.5 53H32.5C32.2239 53 32 52.7761 32 52.5V31C32 29.8954 32.8954 29 34 29H60C68.8366 29 76 36.1634 76 45V52.5C76 52.7761 75.7761 53 75.5 53Z"
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
            d="M4 17C5.10457 17 6 17.8954 6 19V29H30C30.1749 29 30.3472 29.0112 30.5162 29.033C31.203 27.8192 32.5058 27 34 27H60C69.9411 27 78 35.0589 78 45V52.5C78 52.5892 77.9953 52.6773 77.9862 52.764C77.9953 52.8414 78 52.9202 78 53V61C78 62.1046 77.1046 63 76 63C74.8954 63 74 62.1046 74 61V55H6V61C6 62.1046 5.10457 63 4 63C2.89543 63 2 62.1046 2 61V19C2 17.8954 2.89543 17 4 17ZM34 51H74V45C74 37.268 67.732 31 60 31H34V51ZM30 33L6 33V51H30V33Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBedEmpty = forwardRef((props, ref) => {
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

CoreBedEmpty.displayName = 'CoreBedEmpty'

export default CoreBedEmpty
