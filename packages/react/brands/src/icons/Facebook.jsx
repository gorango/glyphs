
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="url(#paint0_linear)"
          />
          <path
            d="M53.0343 50.7039L54.589 40.8252H44.863V34.4175C44.863 31.7143 46.2192 29.0777 50.5754 29.0777H55V20.6675C55 20.6675 50.9863 20 47.1507 20C39.1371 20 33.9042 24.7323 33.9042 33.2961V40.8252H25V50.7039H33.9042V74.5862C35.6918 74.8599 37.5206 75 39.3836 75C41.2466 75 43.0754 74.8599 44.863 74.5862V50.7039H53.0343Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linear" x1="40" y1="5" x2="40" y2="74.7924" gradientUnits="userSpaceOnUse"><stop stop-color="#18ACFE"/><stop offset="1" stop-color="#0163E0"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 57.2507 17.4802 71.5865 33.9042 74.471V50.7039H25V40.8252H33.9042V33.2961C33.9042 24.7323 39.1371 20 47.1507 20C50.9863 20 55 20.6675 55 20.6675V29.0777H50.5754C46.2192 29.0777 44.863 31.7143 44.863 34.4175V40.8252H54.589L53.0343 50.7039H44.863V74.5862C43.175 74.8446 41.4503 74.984 39.6947 74.9987C39.7964 74.9996 39.8981 75 40 75Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53.0343 50.7039L54.589 40.8252H44.863V34.4175C44.863 31.7143 46.2192 29.0777 50.5754 29.0777H55V20.6675C55 20.6675 50.9863 20 47.1507 20C39.1371 20 33.9042 24.7323 33.9042 33.2961V40.8252H25V50.7039H33.9042V74.5862C35.6918 74.8599 37.5206 75 39.3836 75C41.2466 75 43.0754 74.8599 44.863 74.5862V50.7039H53.0343Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsFacebook = forwardRef((props, ref) => {
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

BrandsFacebook.displayName = 'BrandsFacebook'

export default BrandsFacebook
