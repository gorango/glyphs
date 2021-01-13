
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M60 24V22C60 18.6863 57.3137 16 54 16H18C14.6863 16 12 18.6863 12 22V58C12 61.3137 14.6863 64 18 64H62C65.3137 64 68 61.3137 68 58V30C68 26.6863 65.3137 24 62 24H60ZM60 24H22.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 43C52 40.7909 53.7909 39 56 39C58.2091 39 60 40.7909 60 43C60 45.2091 58.2091 47 56 47C53.7909 47 52 45.2091 52 43Z"
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
            d="M12 22V58C12 61.3137 14.6863 64 18 64H62C65.3137 64 68 61.3137 68 58V30C68 26.6863 65.3137 24 62 24H22.5C21.3954 24 20.5 23.1046 20.5 22C20.5 20.8954 21.3954 20 22.5 20H59.6586C58.8349 17.6696 56.6124 16 54 16H18C14.6863 16 12 18.6863 12 22ZM52 43C52 40.7909 53.7909 39 56 39C58.2091 39 60 40.7909 60 43C60 45.2091 58.2091 47 56 47C53.7909 47 52 45.2091 52 43Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M12 22V58C12 61.3137 14.6863 64 18 64H62C65.3137 64 68 61.3137 68 58V30C68 26.6863 65.3137 24 62 24H60V22C60 18.6863 57.3137 16 54 16H18C14.6863 16 12 18.6863 12 22Z"
            fill="#EB5757"
          />
          <path
            d="M22.5 24H60M60 24V22C60 18.6863 57.3137 16 54 16H18C14.6863 16 12 18.6863 12 22V58C12 61.3137 14.6863 64 18 64H62C65.3137 64 68 61.3137 68 58V30C68 26.6863 65.3137 24 62 24H60Z"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="52"
            y="39"
            width="8"
            height="8"
            rx="4"
            fill="#F2C94C"
            stroke="#F2C94C"
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
            d="M12 22V58C12 61.3137 14.6863 64 18 64H62C65.3137 64 68 61.3137 68 58V30C68 26.6863 65.3137 24 62 24H60V22C60 18.6863 57.3137 16 54 16H18C14.6863 16 12 18.6863 12 22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52 43C52 40.7909 53.7909 39 56 39C58.2091 39 60 40.7909 60 43C60 45.2091 58.2091 47 56 47C53.7909 47 52 45.2091 52 43Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60 24V22C60 18.6863 57.3137 16 54 16H18C14.6863 16 12 18.6863 12 22V58C12 61.3137 14.6863 64 18 64H62C65.3137 64 68 61.3137 68 58V30C68 26.6863 65.3137 24 62 24H60ZM60 24H22.5M56 47C53.7909 47 52 45.2091 52 43C52 40.7909 53.7909 39 56 39C58.2091 39 60 40.7909 60 43C60 45.2091 58.2091 47 56 47Z"
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
            d="M56 37C52.6863 37 50 39.6863 50 43C50 46.3137 52.6863 49 56 49C59.3137 49 62 46.3137 62 43C62 39.6863 59.3137 37 56 37ZM54 43C54 41.8954 54.8954 41 56 41C57.1046 41 58 41.8954 58 43C58 44.1046 57.1046 45 56 45C54.8954 45 54 44.1046 54 43Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54 14C58.4183 14 62 17.5817 62 22C66.4183 22 70 25.5817 70 30V58C70 62.4183 66.4183 66 62 66H18C13.5817 66 10 62.4183 10 58V22C10 17.5817 13.5817 14 18 14H54ZM14 22C14 19.7909 15.7909 18 18 18H54C56.2091 18 58 19.7909 58 22H22.5C21.3954 22 20.5 22.8954 20.5 24C20.5 25.1046 21.3954 26 22.5 26H62C64.2091 26 66 27.7909 66 30V58C66 60.2091 64.2091 62 62 62H18C15.7909 62 14 60.2091 14 58V22Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreWallet = forwardRef((props, ref) => {
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

CoreWallet.displayName = 'CoreWallet'

export default CoreWallet
