
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M47.5 14C47.7761 14 48 13.7761 48 13.5C48 11.567 46.433 10 44.5 10L35.5 10C33.567 10 32 11.567 32 13.5C32 13.7761 32.2239 14 32.5 14"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70L26 70Z"
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
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70H26Z"
            fill="currentColor"
          />
          <path
            d="M32.5 14C32.2239 14 32 13.7761 32 13.5C32 11.567 33.567 10 35.5 10L44.5 10C46.433 10 48 11.567 48 13.5C48 13.7761 47.7761 14 47.5 14L32.5 14Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70H26Z"
            fill="#2F80ED"
          />
          <path
            d="M32.5 14C32.2239 14 32 13.7761 32 13.5C32 11.567 33.567 10 35.5 10L44.5 10C46.433 10 48 11.567 48 13.5C48 13.7761 47.7761 14 47.5 14L32.5 14Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70H26Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.5 14C32.2239 14 32 13.7761 32 13.5C32 11.567 33.567 10 35.5 10L44.5 10C46.433 10 48 11.567 48 13.5C48 13.7761 47.7761 14 47.5 14L32.5 14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70H26Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.5 14C32.2239 14 32 13.7761 32 13.5C32 11.567 33.567 10 35.5 10L44.5 10C46.433 10 48 11.567 48 13.5C48 13.7761 47.7761 14 47.5 14L32.5 14Z"
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
            d="M44.5 8L35.5 8C32.9824 8 30.86 9.6915 30.207 12L26 12C22.6863 12 20 14.6863 20 18L20 66C20 69.3137 22.6863 72 26 72L54 72C57.3137 72 60 69.3137 60 66V18C60 14.6863 57.3137 12 54 12L49.793 12C49.14 9.69149 47.0176 8 44.5 8ZM26 16C24.8954 16 24 16.8954 24 18L24 66C24 67.1046 24.8954 68 26 68L54 68C55.1046 68 56 67.1046 56 66V18C56 16.8954 55.1046 16 54 16L26 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBattery = forwardRef((props, ref) => {
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

CoreBattery.displayName = 'CoreBattery'

export default CoreBattery
