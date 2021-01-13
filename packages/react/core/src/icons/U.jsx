
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 16L24 49C24 57.2843 30.7157 64 39 64H41C49.2843 64 56 57.2843 56 49L56 16"
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
            d="M27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM59 16C59 14.3431 57.6569 13 56 13C54.3431 13 53 14.3431 53 16H59ZM21 16L21 49H27L27 16H21ZM39 67H41V61H39V67ZM59 49L59 16H53V49H59ZM41 67C50.9411 67 59 58.9411 59 49H53C53 55.6274 47.6274 61 41 61V67ZM21 49C21 58.9411 29.0589 67 39 67V61C32.3726 61 27 55.6274 27 49H21Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM58 16C58 14.8954 57.1046 14 56 14C54.8954 14 54 14.8954 54 16H58ZM22 16L22 49H26L26 16H22ZM39 66H41V62H39V66ZM58 49L58 16H54V49H58ZM41 66C50.3888 66 58 58.3888 58 49H54C54 56.1797 48.1797 62 41 62V66ZM22 49C22 58.3888 29.6112 66 39 66V62C31.8203 62 26 56.1797 26 49H22Z"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 16V49C24 57.2843 30.7157 64 39 64H41C49.2843 64 56 57.2843 56 49V16"
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
            d="M24 14C25.1046 14 26 14.8954 26 16L26 49C26 56.1797 31.8203 62 39 62H41C48.1797 62 54 56.1797 54 49L54 16C54 14.8954 54.8954 14 56 14C57.1046 14 58 14.8954 58 16L58 49C58 58.3888 50.3888 66 41 66H39C29.6112 66 22 58.3888 22 49L22 16C22 14.8954 22.8954 14 24 14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreU = forwardRef((props, ref) => {
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

CoreU.displayName = 'CoreU'

export default CoreU
