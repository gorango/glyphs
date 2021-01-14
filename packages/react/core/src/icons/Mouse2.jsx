
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M22 28C22 19.1634 29.1634 12 38 12H42C50.8366 12 58 19.1634 58 28V52C58 60.8366 50.8366 68 42 68H38C29.1634 68 22 60.8366 22 52V28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 30H40H22"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 30V12"
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
            d="M22 32.5V52C22 60.8366 29.1634 68 38 68H42C50.8366 68 58 60.8366 58 52V32.5H22Z"
            fill="currentColor"
          />
          <path
            d="M57.9923 27.5C57.7333 19.0609 50.9392 12.2667 42.5 12.0077V27.5H57.9923Z"
            fill="currentColor"
          />
          <path
            d="M37.5 12.0077C29.0608 12.2667 22.2667 19.0609 22.0077 27.5H37.5V12.0077Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="22"
            y="12"
            width="36"
            height="56"
            rx="16"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 31.5V28.5L38.5 28.5V12L41.5 12V28.5L58 28.5V31.5L40 31.5L22 31.5Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M22 28C22 19.1634 29.1634 12 38 12H42C50.8366 12 58 19.1634 58 28V52C58 60.8366 50.8366 68 42 68H38C29.1634 68 22 60.8366 22 52V28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58 30H40M40 30H22M40 30V12M38 68H42C50.8366 68 58 60.8366 58 52V28C58 19.1634 50.8366 12 42 12H38C29.1634 12 22 19.1634 22 28V52C22 60.8366 29.1634 68 38 68Z"
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
            d="M38 10C28.0589 10 20 18.0589 20 28V52C20 61.9411 28.0589 70 38 70H42C51.9411 70 60 61.9411 60 52V28C60 18.0589 51.9411 10 42 10H38ZM38 14C30.268 14 24 20.268 24 28H38V14ZM24 32V52C24 59.732 30.268 66 38 66H42C49.732 66 56 59.732 56 52V32H24ZM56 28C56 20.268 49.732 14 42 14V28H56Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMouse2 = forwardRef((props, ref) => {
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

CoreMouse2.displayName = 'CoreMouse2'

export default CoreMouse2
