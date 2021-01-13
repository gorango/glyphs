
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M8 20C8 17.7909 9.79086 16 12 16H68C70.2091 16 72 17.7909 72 20V60C72 62.2091 70.2091 64 68 64H12C9.79086 64 8 62.2091 8 60V20Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50 26C50 24.8954 50.8954 24 52 24H62C63.1046 24 64 24.8954 64 26V30C64 31.1046 63.1046 32 62 32H52C50.8954 32 50 31.1046 50 30V26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 34C16 32.8954 16.8954 32 18 32H22C23.1046 32 24 32.8954 24 34V38C24 39.1046 23.1046 40 22 40H18C16.8954 40 16 39.1046 16 38V34Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 48H23"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 48H37"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 48H51"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 48H65"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 56H32"
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
            d="M12 16C9.79086 16 8 17.7909 8 20V60C8 62.2091 9.79086 64 12 64H68C70.2091 64 72 62.2091 72 60V20C72 17.7909 70.2091 16 68 16H12ZM52 24C50.8954 24 50 24.8954 50 26V30C50 31.1046 50.8954 32 52 32H62C63.1046 32 64 31.1046 64 30V26C64 24.8954 63.1046 24 62 24H52ZM16 34C16 32.8954 16.8954 32 18 32H22C23.1046 32 24 32.8954 24 34V38C24 39.1046 23.1046 40 22 40H18C16.8954 40 16 39.1046 16 38V34ZM16 45C14.3431 45 13 46.3431 13 48C13 49.6569 14.3431 51 16 51H23C24.6569 51 26 49.6569 26 48C26 46.3431 24.6569 45 23 45H16ZM27 48C27 46.3431 28.3431 45 30 45H37C38.6569 45 40 46.3431 40 48C40 49.6569 38.6569 51 37 51H30C28.3431 51 27 49.6569 27 48ZM44 45C42.3431 45 41 46.3431 41 48C41 49.6569 42.3431 51 44 51H51C52.6569 51 54 49.6569 54 48C54 46.3431 52.6569 45 51 45H44ZM55 48C55 46.3431 56.3431 45 58 45H65C66.6569 45 68 46.3431 68 48C68 49.6569 66.6569 51 65 51H58C56.3431 51 55 49.6569 55 48ZM16 53C14.3431 53 13 54.3431 13 56C13 57.6569 14.3431 59 16 59H32C33.6569 59 35 57.6569 35 56C35 54.3431 33.6569 53 32 53H16Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="8"
            y="16"
            width="64"
            height="48"
            rx="4"
            fill="#56CCF2"
          />
          <rect
            x="50"
            y="24"
            width="14"
            height="8"
            rx="2"
            fill="#9B51E0"
          />
          <rect
            x="16"
            y="32"
            width="8"
            height="8"
            rx="2"
            fill="#F2C94C"
          />
          <path
            d="M16 48H23"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 48H37"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 48H51"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 48H65"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 56H32"
            stroke="#9B51E0"
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
            d="M8 20C8 17.7909 9.79086 16 12 16H68C70.2091 16 72 17.7909 72 20V60C72 62.2091 70.2091 64 68 64H12C9.79086 64 8 62.2091 8 60V20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50 26C50 24.8954 50.8954 24 52 24H62C63.1046 24 64 24.8954 64 26V30C64 31.1046 63.1046 32 62 32H52C50.8954 32 50 31.1046 50 30V26Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 34C16 32.8954 16.8954 32 18 32H22C23.1046 32 24 32.8954 24 34V38C24 39.1046 23.1046 40 22 40H18C16.8954 40 16 39.1046 16 38V34Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 48H23M30 48H37M44 48H51M58 48H65M16 56H32M12 64H68C70.2091 64 72 62.2091 72 60V20C72 17.7909 70.2091 16 68 16H12C9.79086 16 8 17.7909 8 20V60C8 62.2091 9.79086 64 12 64ZM52 32H62C63.1046 32 64 31.1046 64 30V26C64 24.8954 63.1046 24 62 24H52C50.8954 24 50 24.8954 50 26V30C50 31.1046 50.8954 32 52 32ZM18 40H22C23.1046 40 24 39.1046 24 38V34C24 32.8954 23.1046 32 22 32H18C16.8954 32 16 32.8954 16 34V38C16 39.1046 16.8954 40 18 40Z"
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
            d="M50 22C48.8954 22 48 22.8954 48 24V32C48 33.1046 48.8954 34 50 34H64C65.1046 34 66 33.1046 66 32V24C66 22.8954 65.1046 22 64 22H50ZM52 30V26H62V30H52Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 32C14 30.8954 14.8954 30 16 30H24C25.1046 30 26 30.8954 26 32V40C26 41.1046 25.1046 42 24 42H16C14.8954 42 14 41.1046 14 40V32ZM18 34V38H22V34H18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 46C14.8954 46 14 46.8954 14 48C14 49.1046 14.8954 50 16 50H23C24.1046 50 25 49.1046 25 48C25 46.8954 24.1046 46 23 46H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 48C28 46.8954 28.8954 46 30 46H37C38.1046 46 39 46.8954 39 48C39 49.1046 38.1046 50 37 50H30C28.8954 50 28 49.1046 28 48Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 46C42.8954 46 42 46.8954 42 48C42 49.1046 42.8954 50 44 50H51C52.1046 50 53 49.1046 53 48C53 46.8954 52.1046 46 51 46H44Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 48C56 46.8954 56.8954 46 58 46H65C66.1046 46 67 46.8954 67 48C67 49.1046 66.1046 50 65 50H58C56.8954 50 56 49.1046 56 48Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 54C14.8954 54 14 54.8954 14 56C14 57.1046 14.8954 58 16 58H32C33.1046 58 34 57.1046 34 56C34 54.8954 33.1046 54 32 54H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 14C8.68629 14 6 16.6863 6 20V60C6 63.3137 8.68629 66 12 66H68C71.3137 66 74 63.3137 74 60V20C74 16.6863 71.3137 14 68 14H12ZM10 20C10 18.8954 10.8954 18 12 18H68C69.1046 18 70 18.8954 70 20V60C70 61.1046 69.1046 62 68 62H12C10.8954 62 10 61.1046 10 60V20Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCreditCardFront = forwardRef((props, ref) => {
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

CoreCreditCardFront.displayName = 'CoreCreditCardFront'

export default CoreCreditCardFront
