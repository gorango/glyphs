
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 27C47 24.7909 48.7909 23 51 23C53.2091 23 55 24.7909 55 27C55 29.2091 53.2091 31 51 31C48.7909 31 47 29.2091 47 27Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25 53C25 50.7909 26.7909 49 29 49C31.2091 49 33 50.7909 33 53C33 55.2091 31.2091 57 29 57C26.7909 57 25 55.2091 25 53Z"
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
            d="M24 16C19.5817 16 16 19.5817 16 24V56C16 60.4183 19.5817 64 24 64H56C60.4183 64 64 60.4183 64 56V24C64 19.5817 60.4183 16 56 16H24ZM51 23C48.7909 23 47 24.7909 47 27C47 29.2091 48.7909 31 51 31C53.2091 31 55 29.2091 55 27C55 24.7909 53.2091 23 51 23ZM36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40ZM29 49C26.7909 49 25 50.7909 25 53C25 55.2091 26.7909 57 29 57C31.2091 57 33 55.2091 33 53C33 50.7909 31.2091 49 29 49Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="8"
            fill="#F2F2F2"
            stroke="#E0E0E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="47"
            y="23"
            width="8"
            height="8"
            rx="4"
            fill="#F2994A"
          />
          <rect
            x="36"
            y="36"
            width="8"
            height="8"
            rx="4"
            fill="#F2994A"
          />
          <rect
            x="25"
            y="49"
            width="8"
            height="8"
            rx="4"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47 27C47 24.7909 48.7909 23 51 23C53.2091 23 55 24.7909 55 27C55 29.2091 53.2091 31 51 31C48.7909 31 47 29.2091 47 27Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M25 53C25 50.7909 26.7909 49 29 49C31.2091 49 33 50.7909 33 53C33 55.2091 31.2091 57 29 57C26.7909 57 25 55.2091 25 53Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 27C47 24.7909 48.7909 23 51 23C53.2091 23 55 24.7909 55 27C55 29.2091 53.2091 31 51 31C48.7909 31 47 29.2091 47 27Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25 53C25 50.7909 26.7909 49 29 49C31.2091 49 33 50.7909 33 53C33 55.2091 31.2091 57 29 57C26.7909 57 25 55.2091 25 53Z"
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
            d="M51 21C47.6863 21 45 23.6863 45 27C45 30.3137 47.6863 33 51 33C54.3137 33 57 30.3137 57 27C57 23.6863 54.3137 21 51 21ZM49 27C49 25.8954 49.8954 25 51 25C52.1046 25 53 25.8954 53 27C53 28.1046 52.1046 29 51 29C49.8954 29 49 28.1046 49 27Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 40C34 36.6863 36.6863 34 40 34C43.3137 34 46 36.6863 46 40C46 43.3137 43.3137 46 40 46C36.6863 46 34 43.3137 34 40ZM40 38C38.8954 38 38 38.8954 38 40C38 41.1046 38.8954 42 40 42C41.1046 42 42 41.1046 42 40C42 38.8954 41.1046 38 40 38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29 47C25.6863 47 23 49.6863 23 53C23 56.3137 25.6863 59 29 59C32.3137 59 35 56.3137 35 53C35 49.6863 32.3137 47 29 47ZM27 53C27 51.8954 27.8954 51 29 51C30.1046 51 31 51.8954 31 53C31 54.1046 30.1046 55 29 55C27.8954 55 27 54.1046 27 53Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 14C18.4772 14 14 18.4772 14 24V56C14 61.5228 18.4772 66 24 66H56C61.5228 66 66 61.5228 66 56V24C66 18.4772 61.5228 14 56 14H24ZM18 24C18 20.6863 20.6863 18 24 18H56C59.3137 18 62 20.6863 62 24V56C62 59.3137 59.3137 62 56 62H24C20.6863 62 18 59.3137 18 56V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDie3 = forwardRef((props, ref) => {
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

CoreDie3.displayName = 'CoreDie3'

export default CoreDie3
