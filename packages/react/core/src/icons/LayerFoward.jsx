
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M48 34C48 32.8954 47.1046 32 46 32H18C16.8954 32 16 32.8954 16 34V62C16 63.1046 16.8954 64 18 64H46C47.1046 64 48 63.1046 48 62V34Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 42H57C57.5523 42 58 41.5523 58 41V23C58 22.4477 57.5523 22 57 22H39C38.4477 22 38 22.4477 38 23V32"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 48H62C63.1046 48 64 47.1046 64 46V18C64 16.8954 63.1046 16 62 16H34C32.8954 16 32 16.8954 32 18V32"
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
            d="M48 36C48 33.7909 46.2091 32 44 32H20C17.7909 32 16 33.7909 16 36V60C16 62.2091 17.7909 64 20 64H44C46.2091 64 48 62.2091 48 60V36Z"
            fill="currentColor"
          />
          <path
            d="M62 16C63.1046 16 64 16.8954 64 18V46C64 47.1046 63.1046 48 62 48H54C52.8954 48 52 47.1046 52 46V45.5C52 44.3954 52.8954 43.5 54 43.5H57C58.3807 43.5 59.5 42.3807 59.5 41V23C59.5 21.6193 58.3807 20.5 57 20.5H39C37.6193 20.5 36.5 21.6193 36.5 23V26C36.5 27.1046 35.6046 28 34.5 28H34C32.8954 28 32 27.1046 32 26V18C32 16.8954 32.8954 16 34 16H62Z"
            fill="currentColor"
          />
          <path
            d="M54 40.5C52.8954 40.5 52 39.6046 52 38.5V34C52 30.6863 49.3137 28 46 28H41.5C40.3954 28 39.5 27.1046 39.5 26V25.5C39.5 24.3954 40.3954 23.5 41.5 23.5H54.5C55.6046 23.5 56.5 24.3954 56.5 25.5V38.5C56.5 39.6046 55.6046 40.5 54.5 40.5H54Z"
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
            d="M62 16C63.1046 16 64 16.8954 64 18V46C64 47.1046 63.1046 48 62 48H48L48 34C48 32.8954 47.1046 32 46 32H32V18C32 16.8954 32.8954 16 34 16L62 16Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57 22C57.5523 22 58 22.4477 58 23V41C58 41.5523 57.5523 42 57 42H48V34C48 32.8954 47.1046 32 46 32H38V23C38 22.4477 38.4477 22 39 22L57 22Z"
            fill="#56CCF2"
          />
          <path
            d="M48 34C48 32.8954 47.1046 32 46 32L18 32C16.8954 32 16 32.8954 16 34L16 62C16 63.1046 16.8954 64 18 64H46C47.1046 64 48 63.1046 48 62L48 34Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M62 16C63.1046 16 64 16.8954 64 18V46C64 47.1046 63.1046 48 62 48H48V34C48 32.8954 47.1046 32 46 32H32V18C32 16.8954 32.8954 16 34 16H62Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M57 22C57.5523 22 58 22.4477 58 23V41C58 41.5523 57.5523 42 57 42H48V34C48 32.8954 47.1046 32 46 32H38V23C38 22.4477 38.4477 22 39 22H57Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48 34C48 32.8954 47.1046 32 46 32H18C16.8954 32 16 32.8954 16 34V62C16 63.1046 16.8954 64 18 64H46C47.1046 64 48 63.1046 48 62V34Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48 34V48H62C63.1046 48 64 47.1046 64 46V18C64 16.8954 63.1046 16 62 16H34C32.8954 16 32 16.8954 32 18V32H46M48 34C48 32.8954 47.1046 32 46 32M48 34V42H57C57.5523 42 58 41.5523 58 41V23C58 22.4477 57.5523 22 57 22H39C38.4477 22 38 22.4477 38 23V32H46M48 34V62C48 63.1046 47.1046 64 46 64H18C16.8954 64 16 63.1046 16 62V34C16 32.8954 16.8954 32 18 32H46"
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
            d="M66 18C66 15.7909 64.2091 14 62 14L34 14C31.7909 14 30 15.7909 30 18V30H18C15.7909 30 14 31.7909 14 34V62C14 64.2091 15.7909 66 18 66H46C48.2091 66 50 64.2091 50 62V50H62C64.2091 50 66 48.2091 66 46V18ZM50 46H62V18H34V30H36V23C36 21.3431 37.3431 20 39 20H57C58.6569 20 60 21.3431 60 23V41C60 42.6569 58.6569 44 57 44H50V46ZM50 40H56V24H40V30H46C48.2091 30 50 31.7909 50 34V40ZM18 34V62H46V34H18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLayerFoward = forwardRef((props, ref) => {
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

CoreLayerFoward.displayName = 'CoreLayerFoward'

export default CoreLayerFoward
