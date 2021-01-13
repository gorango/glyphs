
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20 30C20 28.8954 20.8954 28 22 28H58C59.1046 28 60 28.8954 60 30V66C60 67.1046 59.1046 68 58 68H22C20.8954 68 20 67.1046 20 66V30Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 44C28 41.7909 29.7909 40 32 40C34.2091 40 36 41.7909 36 44C36 46.2091 34.2091 48 32 48C29.7909 48 28 46.2091 28 44Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 44C44 41.7909 45.7909 40 48 40C50.2091 40 52 41.7909 52 44C52 46.2091 50.2091 48 48 48C45.7909 48 44 46.2091 44 44Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50 68C51.1046 68 52 67.1046 52 66V60C52 58.8954 51.1046 58 50 58H30C28.8954 58 28 58.8954 28 60V66C28 67.1046 28.8954 68 30 68"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20 40H14C12.8954 40 12 40.8954 12 42V54C12 55.1046 12.8954 56 14 56H20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60 56H66C67.1046 56 68 55.1046 68 54V42C68 40.8954 67.1046 40 66 40H60"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 28V20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 16C36 13.7909 37.7909 12 40 12C42.2091 12 44 13.7909 44 16C44 18.2091 42.2091 20 40 20C37.7909 20 36 18.2091 36 16Z"
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
            d="M36 16C36 13.7909 37.7909 12 40 12C42.2091 12 44 13.7909 44 16C44 17.5064 43.1673 18.8183 41.9371 19.5005C41.9782 19.6602 42 19.8275 42 20V28H58C59.1046 28 60 28.8954 60 30V40H66C67.1046 40 68 40.8954 68 42V54C68 55.1046 67.1046 56 66 56H60V66C60 67.1046 59.1046 68 58 68H50C51.1046 68 52 67.1046 52 66V60C52 58.8954 51.1046 58 50 58H30C28.8954 58 28 58.8954 28 60V66C28 67.1046 28.8954 68 30 68H22C20.8954 68 20 67.1046 20 66V56H14C12.8954 56 12 55.1046 12 54V42C12 40.8954 12.8954 40 14 40H20V30C20 28.8954 20.8954 28 22 28H38V20C38 19.8275 38.0218 19.6602 38.0629 19.5005C36.8327 18.8183 36 17.5064 36 16ZM32 40C29.7909 40 28 41.7909 28 44C28 46.2091 29.7909 48 32 48C34.2091 48 36 46.2091 36 44C36 41.7909 34.2091 40 32 40ZM44 44C44 41.7909 45.7909 40 48 40C50.2091 40 52 41.7909 52 44C52 46.2091 50.2091 48 48 48C45.7909 48 44 46.2091 44 44Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="20"
            y="28"
            width="40"
            height="40"
            rx="2"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 68H50C51.1046 68 52 67.1046 52 66V60C52 58.8954 51.1046 58 50 58H30C28.8954 58 28 58.8954 28 60V66C28 67.1046 28.8954 68 30 68Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 40H14C12.8954 40 12 40.8954 12 42V54C12 55.1046 12.8954 56 14 56H20V40ZM60 56H66C67.1046 56 68 55.1046 68 54V42C68 40.8954 67.1046 40 66 40H60V56Z"
            fill="#56CCF2"
          />
          <rect
            x="28"
            y="40"
            width="8"
            height="8"
            rx="4"
            fill="#F2C94C"
          />
          <rect
            x="44"
            y="40"
            width="8"
            height="8"
            rx="4"
            fill="#F2C94C"
          />
          <path
            d="M40 20V28"
            stroke="#2D9CDB"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="36"
            y="12"
            width="8"
            height="8"
            rx="4"
            fill="#2D9CDB"
            stroke="#2D9CDB"
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
            d="M20 30C20 28.8954 20.8954 28 22 28H58C59.1046 28 60 28.8954 60 30V66C60 67.1046 59.1046 68 58 68H22C20.8954 68 20 67.1046 20 66V30Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 68H50C51.1046 68 52 67.1046 52 66V60C52 58.8954 51.1046 58 50 58H30C28.8954 58 28 58.8954 28 60V66C28 67.1046 28.8954 68 30 68Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20 40H14C12.8954 40 12 40.8954 12 42V54C12 55.1046 12.8954 56 14 56H20V40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60 56H66C67.1046 56 68 55.1046 68 54V42C68 40.8954 67.1046 40 66 40H60V56Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28 44C28 41.7909 29.7909 40 32 40C34.2091 40 36 41.7909 36 44C36 46.2091 34.2091 48 32 48C29.7909 48 28 46.2091 28 44Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44 44C44 41.7909 45.7909 40 48 40C50.2091 40 52 41.7909 52 44C52 46.2091 50.2091 48 48 48C45.7909 48 44 46.2091 44 44Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 16C36 13.7909 37.7909 12 40 12C42.2091 12 44 13.7909 44 16C44 18.2091 42.2091 20 40 20C37.7909 20 36 18.2091 36 16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 28V20M40 20C37.7909 20 36 18.2091 36 16C36 13.7909 37.7909 12 40 12C42.2091 12 44 13.7909 44 16C44 18.2091 42.2091 20 40 20ZM22 68H58C59.1046 68 60 67.1046 60 66V30C60 28.8954 59.1046 28 58 28H22C20.8954 28 20 28.8954 20 30V66C20 67.1046 20.8954 68 22 68ZM50 68H30C28.8954 68 28 67.1046 28 66V60C28 58.8954 28.8954 58 30 58H50C51.1046 58 52 58.8954 52 60V66C52 67.1046 51.1046 68 50 68ZM14 40H20V56H14C12.8954 56 12 55.1046 12 54V42C12 40.8954 12.8954 40 14 40ZM66 56H60V40H66C67.1046 40 68 40.8954 68 42V54C68 55.1046 67.1046 56 66 56ZM32 48C29.7909 48 28 46.2091 28 44C28 41.7909 29.7909 40 32 40C34.2091 40 36 41.7909 36 44C36 46.2091 34.2091 48 32 48ZM48 48C45.7909 48 44 46.2091 44 44C44 41.7909 45.7909 40 48 40C50.2091 40 52 41.7909 52 44C52 46.2091 50.2091 48 48 48Z"
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
            d="M26 44C26 40.6863 28.6863 38 32 38C35.3137 38 38 40.6863 38 44C38 47.3137 35.3137 50 32 50C28.6863 50 26 47.3137 26 44ZM32 42C30.8954 42 30 42.8954 30 44C30 45.1046 30.8954 46 32 46C33.1046 46 34 45.1046 34 44C34 42.8954 33.1046 42 32 42Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48 38C44.6863 38 42 40.6863 42 44C42 47.3137 44.6863 50 48 50C51.3137 50 54 47.3137 54 44C54 40.6863 51.3137 38 48 38ZM46 44C46 42.8954 46.8954 42 48 42C49.1046 42 50 42.8954 50 44C50 45.1046 49.1046 46 48 46C46.8954 46 46 45.1046 46 44Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 10C36.6863 10 34 12.6863 34 16C34 18.6124 35.6696 20.8349 38 21.6586V26H22C19.7909 26 18 27.7909 18 30V38H14C11.7909 38 10 39.7909 10 42V54C10 56.2091 11.7909 58 14 58H18V66C18 68.2091 19.7909 70 22 70H58C60.2091 70 62 68.2091 62 66V58H66C68.2091 58 70 56.2091 70 54V42C70 39.7909 68.2091 38 66 38H62V30C62 27.7909 60.2091 26 58 26H42V21.6586C44.3304 20.8349 46 18.6124 46 16C46 12.6863 43.3137 10 40 10ZM40 18C41.1046 18 42 17.1046 42 16C42 14.8954 41.1046 14 40 14C38.8954 14 38 14.8954 38 16C38 17.1046 38.8954 18 40 18ZM22 30H58V66H54V60C54 57.7909 52.2091 56 50 56H30C27.7909 56 26 57.7909 26 60V66H22V30ZM18 42H14V54H18V42ZM62 54H66V42H62V54ZM30 66V60H50V66H30Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreRobotHead = forwardRef((props, ref) => {
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

CoreRobotHead.displayName = 'CoreRobotHead'

export default CoreRobotHead
