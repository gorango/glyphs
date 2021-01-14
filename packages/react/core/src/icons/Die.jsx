
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
            d="M25 27C25 24.7909 26.7909 23 29 23C31.2091 23 33 24.7909 33 27C33 29.2091 31.2091 31 29 31C26.7909 31 25 29.2091 25 27Z"
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
            d="M25 40C25 37.7909 26.7909 36 29 36C31.2091 36 33 37.7909 33 40C33 42.2091 31.2091 44 29 44C26.7909 44 25 42.2091 25 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 40C47 37.7909 48.7909 36 51 36C53.2091 36 55 37.7909 55 40C55 42.2091 53.2091 44 51 44C48.7909 44 47 42.2091 47 40Z"
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
          <path
            d="M47 53C47 50.7909 48.7909 49 51 49C53.2091 49 55 50.7909 55 53C55 55.2091 53.2091 57 51 57C48.7909 57 47 55.2091 47 53Z"
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
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24ZM25 27C25 24.7909 26.7909 23 29 23C31.2091 23 33 24.7909 33 27C33 29.2091 31.2091 31 29 31C26.7909 31 25 29.2091 25 27ZM51 23C48.7909 23 47 24.7909 47 27C47 29.2091 48.7909 31 51 31C53.2091 31 55 29.2091 55 27C55 24.7909 53.2091 23 51 23ZM25 40C25 37.7909 26.7909 36 29 36C31.2091 36 33 37.7909 33 40C33 42.2091 31.2091 44 29 44C26.7909 44 25 42.2091 25 40ZM51 36C48.7909 36 47 37.7909 47 40C47 42.2091 48.7909 44 51 44C53.2091 44 55 42.2091 55 40C55 37.7909 53.2091 36 51 36ZM25 53C25 50.7909 26.7909 49 29 49C31.2091 49 33 50.7909 33 53C33 55.2091 31.2091 57 29 57C26.7909 57 25 55.2091 25 53ZM51 49C48.7909 49 47 50.7909 47 53C47 55.2091 48.7909 57 51 57C53.2091 57 55 55.2091 55 53C55 50.7909 53.2091 49 51 49Z"
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
            x="25"
            y="23"
            width="8"
            height="8"
            rx="4"
            fill="#F2994A"
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
            x="25"
            y="36"
            width="8"
            height="8"
            rx="4"
            fill="#F2994A"
          />
          <rect
            x="47"
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
          <rect
            x="47"
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
            d="M25 27C25 24.7909 26.7909 23 29 23C31.2091 23 33 24.7909 33 27C33 29.2091 31.2091 31 29 31C26.7909 31 25 29.2091 25 27Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47 27C47 24.7909 48.7909 23 51 23C53.2091 23 55 24.7909 55 27C55 29.2091 53.2091 31 51 31C48.7909 31 47 29.2091 47 27Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M25 40C25 37.7909 26.7909 36 29 36C31.2091 36 33 37.7909 33 40C33 42.2091 31.2091 44 29 44C26.7909 44 25 42.2091 25 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47 40C47 37.7909 48.7909 36 51 36C53.2091 36 55 37.7909 55 40C55 42.2091 53.2091 44 51 44C48.7909 44 47 42.2091 47 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M25 53C25 50.7909 26.7909 49 29 49C31.2091 49 33 50.7909 33 53C33 55.2091 31.2091 57 29 57C26.7909 57 25 55.2091 25 53Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47 53C47 50.7909 48.7909 49 51 49C53.2091 49 55 50.7909 55 53C55 55.2091 53.2091 57 51 57C48.7909 57 47 55.2091 47 53Z"
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
            d="M25 27C25 24.7909 26.7909 23 29 23C31.2091 23 33 24.7909 33 27C33 29.2091 31.2091 31 29 31C26.7909 31 25 29.2091 25 27Z"
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
            d="M25 40C25 37.7909 26.7909 36 29 36C31.2091 36 33 37.7909 33 40C33 42.2091 31.2091 44 29 44C26.7909 44 25 42.2091 25 40Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 40C47 37.7909 48.7909 36 51 36C53.2091 36 55 37.7909 55 40C55 42.2091 53.2091 44 51 44C48.7909 44 47 42.2091 47 40Z"
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
          <path
            d="M47 53C47 50.7909 48.7909 49 51 49C53.2091 49 55 50.7909 55 53C55 55.2091 53.2091 57 51 57C48.7909 57 47 55.2091 47 53Z"
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
            d="M23 27C23 23.6863 25.6863 21 29 21C32.3137 21 35 23.6863 35 27C35 30.3137 32.3137 33 29 33C25.6863 33 23 30.3137 23 27ZM29 25C27.8954 25 27 25.8954 27 27C27 28.1046 27.8954 29 29 29C30.1046 29 31 28.1046 31 27C31 25.8954 30.1046 25 29 25Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
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
            d="M23 40C23 36.6863 25.6863 34 29 34C32.3137 34 35 36.6863 35 40C35 43.3137 32.3137 46 29 46C25.6863 46 23 43.3137 23 40ZM29 38C27.8954 38 27 38.8954 27 40C27 41.1046 27.8954 42 29 42C30.1046 42 31 41.1046 31 40C31 38.8954 30.1046 38 29 38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51 34C47.6863 34 45 36.6863 45 40C45 43.3137 47.6863 46 51 46C54.3137 46 57 43.3137 57 40C57 36.6863 54.3137 34 51 34ZM49 40C49 38.8954 49.8954 38 51 38C52.1046 38 53 38.8954 53 40C53 41.1046 52.1046 42 51 42C49.8954 42 49 41.1046 49 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 53C23 49.6863 25.6863 47 29 47C32.3137 47 35 49.6863 35 53C35 56.3137 32.3137 59 29 59C25.6863 59 23 56.3137 23 53ZM29 51C27.8954 51 27 51.8954 27 53C27 54.1046 27.8954 55 29 55C30.1046 55 31 54.1046 31 53C31 51.8954 30.1046 51 29 51Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51 47C47.6863 47 45 49.6863 45 53C45 56.3137 47.6863 59 51 59C54.3137 59 57 56.3137 57 53C57 49.6863 54.3137 47 51 47ZM49 53C49 51.8954 49.8954 51 51 51C52.1046 51 53 51.8954 53 53C53 54.1046 52.1046 55 51 55C49.8954 55 49 54.1046 49 53Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 24C14 18.4772 18.4772 14 24 14H56C61.5228 14 66 18.4772 66 24V56C66 61.5228 61.5228 66 56 66H24C18.4772 66 14 61.5228 14 56V24ZM24 18C20.6863 18 18 20.6863 18 24V56C18 59.3137 20.6863 62 24 62H56C59.3137 62 62 59.3137 62 56V24C62 20.6863 59.3137 18 56 18H24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDie = forwardRef((props, ref) => {
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

CoreDie.displayName = 'CoreDie'

export default CoreDie
