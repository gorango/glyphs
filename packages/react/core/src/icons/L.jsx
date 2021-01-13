
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M56 64L24 64L24 16"
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
            d="M24 64H21C21 65.6569 22.3431 67 24 67V64ZM56 67C57.6569 67 59 65.6569 59 64C59 62.3431 57.6569 61 56 61V67ZM27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM24 67H56V61L24 61V67ZM27 64V62H21V64H27ZM27 62L27 16H21L21 62H27Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M24 64H22C22 65.1046 22.8954 66 24 66V64ZM56 66C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62V66ZM26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM24 66H56V62L24 62V66ZM26 64V62H22V64H26ZM26 62L26 16H22L22 62H26Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M56 64H24V16"
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
            d="M24 14C22.8954 14 22 14.8954 22 16L22 64C22 65.1046 22.8954 66 24 66H56C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62L26 62L26 16C26 14.8954 25.1046 14 24 14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreL = forwardRef((props, ref) => {
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

CoreL.displayName = 'CoreL'

export default CoreL
