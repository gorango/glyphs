
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5 51.667H39.9999V75.0003L15.5 51.667Z"
            fill="#0055FF"
          />
          <path
            d="M39.9999 28.333H15.5V51.6663H64.4998L39.9999 28.333Z"
            fill="#00AAFF"
          />
          <path
            d="M15.5 5L39.9999 28.3333H64.4998V5H15.5Z"
            fill="#88DDFF"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5 51.6665H39.9999V74.9998L15.5 51.6665Z"
            fill="currentColor"
          />
          <path
            d="M39.9999 28.3333H15.5V51.6665L64.4998 51.6666L39.9999 28.3333Z"
            fill="currentColor"
          />
          <path
            d="M15.5 5L39.9999 28.3333L64.4998 28.3333V5H15.5Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M15.5 51.6665H39.9999V74.9998L15.5 51.6665ZM15.5 51.6665V28.3333H39.9999M15.5 51.6665L64.4998 51.6666L39.9999 28.3333M39.9999 28.3333L15.5 5H64.4998V28.3333L39.9999 28.3333Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsFramer = forwardRef((props, ref) => {
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

BrandsFramer.displayName = 'BrandsFramer'

export default BrandsFramer
