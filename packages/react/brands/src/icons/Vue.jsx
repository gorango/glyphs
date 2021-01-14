
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M5 10L40 70L75 10H61.25L40 46.25L18.75 10H5Z"
            fill="#41B883"
          />
          <path
            d="M18.75 10L40 46.25L61.25 10H48.75L40.1632 25.0316L31.25 10H18.75Z"
            fill="#35495E"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M75 10H61.25L62.9754 11.0114L40 50.2048L17.0246 11.0114L18.75 10H5L40 70L75 10Z"
            fill="currentColor"
          />
          <path
            d="M21.0683 10L40 42.2952L58.9317 10H48.75L40.1632 25.0316L31.25 10H21.0683Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M61.25 10H75L40 70L5 10H18.75M61.25 10L40 46.25L18.75 10M61.25 10H48.75L40.1632 25.0316L31.25 10H18.75"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsVue = forwardRef((props, ref) => {
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

BrandsVue.displayName = 'BrandsVue'

export default BrandsVue
