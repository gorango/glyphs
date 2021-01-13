
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M44 62H36"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 14C24 12.8954 24.8954 12 26 12H54C55.1046 12 56 12.8954 56 14V66C56 67.1046 55.1046 68 54 68H26C24.8954 68 24 67.1046 24 66V14Z"
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
            d="M26 12C24.8954 12 24 12.8954 24 14V66C24 67.1046 24.8954 68 26 68H54C55.1046 68 56 67.1046 56 66V14C56 12.8954 55.1046 12 54 12L26 12ZM36 59.5C34.6193 59.5 33.5 60.6193 33.5 62C33.5 63.3807 34.6193 64.5 36 64.5H44C45.3807 64.5 46.5 63.3807 46.5 62C46.5 60.6193 45.3807 59.5 44 59.5H36Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="24"
            y="12"
            width="32"
            height="56"
            rx="2"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 62H36"
            stroke="#56CCF2"
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
            d="M24 14C24 12.8954 24.8954 12 26 12H54C55.1046 12 56 12.8954 56 14V66C56 67.1046 55.1046 68 54 68H26C24.8954 68 24 67.1046 24 66V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44 62H36M26 68H54C55.1046 68 56 67.1046 56 66V14C56 12.8954 55.1046 12 54 12H26C24.8954 12 24 12.8954 24 14V66C24 67.1046 24.8954 68 26 68Z"
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
            d="M36 60C34.8954 60 34 60.8954 34 62C34 63.1046 34.8954 64 36 64H44C45.1046 64 46 63.1046 46 62C46 60.8954 45.1046 60 44 60H36Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 10C23.7909 10 22 11.7909 22 14V66C22 68.2091 23.7909 70 26 70H54C56.2091 70 58 68.2091 58 66V14C58 11.7909 56.2091 10 54 10H26ZM26 14L54 14V66H26V14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMobile = forwardRef((props, ref) => {
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

CoreMobile.displayName = 'CoreMobile'

export default CoreMobile
