
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M56 16L24 16L24 64L56 64"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 40H45.3333"
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
            d="M56 19C57.6569 19 59 17.6569 59 16C59 14.3431 57.6569 13 56 13V19ZM24 16V13C22.3431 13 21 14.3431 21 16H24ZM56 67C57.6569 67 59 65.6569 59 64C59 62.3431 57.6569 61 56 61V67ZM24 64H21C21 65.6569 22.3431 67 24 67V64ZM24 37C22.3431 37 21 38.3431 21 40C21 41.6569 22.3431 43 24 43V37ZM45.3333 43C46.9902 43 48.3333 41.6569 48.3333 40C48.3333 38.3431 46.9902 37 45.3333 37V43ZM56 13L24 13V19L56 19V13ZM56 61L24 61V67H56V61ZM21 16V16.5H27V16H21ZM21 63.5V64H27V63.5H21ZM21 16.5L21 40H27L27 16.5H21ZM21 40L21 63.5H27L27 40H21ZM24 43H45.3333V37H24V43Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M56 18C57.1046 18 58 17.1046 58 16C58 14.8954 57.1046 14 56 14V18ZM24 16V14C22.8954 14 22 14.8954 22 16H24ZM56 66C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62V66ZM24 64H22C22 65.1046 22.8954 66 24 66V64ZM24 38C22.8954 38 22 38.8954 22 40C22 41.1046 22.8954 42 24 42V38ZM45.3333 42C46.4379 42 47.3333 41.1046 47.3333 40C47.3333 38.8954 46.4379 38 45.3333 38V42ZM56 14L24 14V18L56 18V14ZM56 62L24 62V66H56V62ZM22 16V16.5H26V16H22ZM22 63.5V64H26V63.5H22ZM22 16.5L22 40H26L26 16.5H22ZM22 40L22 63.5H26L26 40H22ZM24 42H45.3333V38H24V42Z"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M56 16H24V40M56 64H24V40M24 40H45.3333"
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
            d="M24 14C22.8954 14 22 14.8954 22 16L22 64C22 65.1046 22.8954 66 24 66H56C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62L26 62L26 42H45.3333C46.4379 42 47.3333 41.1046 47.3333 40C47.3333 38.8954 46.4379 38 45.3333 38H26L26 18L56 18C57.1046 18 58 17.1046 58 16C58 14.8954 57.1046 14 56 14L24 14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreE = forwardRef((props, ref) => {
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

CoreE.displayName = 'CoreE'

export default CoreE
