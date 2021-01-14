
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <rect
            x="42.5"
            y="42.5"
            width="25"
            height="25"
            fill="#FEBA08"
          />
          <rect
            x="12.5"
            y="42.5"
            width="25"
            height="25"
            fill="#05A6F0"
          />
          <rect
            x="42.5"
            y="12.5"
            width="25"
            height="25"
            fill="#80BC06"
          />
          <rect
            x="12.5"
            y="12.5"
            width="25"
            height="25"
            fill="#F25325"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M42.5 42.5H67.5V67.5H42.5V42.5Z"
            fill="currentColor"
          />
          <path
            d="M12.5 42.5H37.5V67.5H12.5V42.5Z"
            fill="currentColor"
          />
          <path
            d="M42.5 12.5H67.5V37.5H42.5V12.5Z"
            fill="currentColor"
          />
          <path
            d="M12.5 12.5H37.5V37.5H12.5V12.5Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M42.5 42.5H67.5V67.5H42.5V42.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12.5 42.5H37.5V67.5H12.5V42.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42.5 12.5H67.5V37.5H42.5V12.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12.5 12.5H37.5V37.5H12.5V12.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsMicrosoft = forwardRef((props, ref) => {
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

BrandsMicrosoft.displayName = 'BrandsMicrosoft'

export default BrandsMicrosoft
