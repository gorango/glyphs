
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
            d="M40 20C41.6569 20 43 21.3431 43 23V28C43 29.6569 41.6569 31 40 31C38.3431 31 37 29.6569 37 28V23C37 21.3431 38.3431 20 40 20Z"
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
            d="M38 12C29.1634 12 22 19.1634 22 28V52C22 60.8366 29.1634 68 38 68H42C50.8366 68 58 60.8366 58 52V28C58 19.1634 50.8366 12 42 12H38ZM43 23C43 21.3431 41.6569 20 40 20C38.3431 20 37 21.3431 37 23V28C37 29.6569 38.3431 31 40 31C41.6569 31 43 29.6569 43 28V23Z"
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
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43 23C43 21.3431 41.6569 20 40 20C38.3431 20 37 21.3431 37 23H43ZM37 28C37 29.6569 38.3431 31 40 31C41.6569 31 43 29.6569 43 28H37ZM37 23V28H43V23H37Z"
            fill="#56CCF2"
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
            d="M40 20C41.6569 20 43 21.3431 43 23V28C43 29.6569 41.6569 31 40 31C38.3431 31 37 29.6569 37 28V23C37 21.3431 38.3431 20 40 20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22 28C22 19.1634 29.1634 12 38 12H42C50.8366 12 58 19.1634 58 28V52C58 60.8366 50.8366 68 42 68H38C29.1634 68 22 60.8366 22 52V28Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 20C41.6569 20 43 21.3431 43 23V28C43 29.6569 41.6569 31 40 31C38.3431 31 37 29.6569 37 28V23C37 21.3431 38.3431 20 40 20Z"
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
            d="M40 18C37.2386 18 35 20.2386 35 23V28C35 30.7614 37.2386 33 40 33C42.7614 33 45 30.7614 45 28V23C45 20.2386 42.7614 18 40 18ZM39 23C39 22.4477 39.4477 22 40 22C40.5523 22 41 22.4477 41 23V28C41 28.5523 40.5523 29 40 29C39.4477 29 39 28.5523 39 28V23Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38 10C28.0589 10 20 18.0589 20 28V52C20 61.9411 28.0589 70 38 70H42C51.9411 70 60 61.9411 60 52V28C60 18.0589 51.9411 10 42 10H38ZM24 28C24 20.268 30.268 14 38 14H42C49.732 14 56 20.268 56 28V52C56 59.732 49.732 66 42 66H38C30.268 66 24 59.732 24 52V28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMouse1 = forwardRef((props, ref) => {
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

CoreMouse1.displayName = 'CoreMouse1'

export default CoreMouse1
