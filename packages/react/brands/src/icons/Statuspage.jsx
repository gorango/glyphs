
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M40.0002 65.0011C49.051 65.0011 56.3881 57.8851 56.3881 49.107C56.3881 40.3289 49.051 33.2129 40.0002 33.2129C30.9494 33.2129 23.6123 40.3289 23.6123 49.107C23.6123 57.8851 30.9494 65.0011 40.0002 65.0011Z"
            fill="url(#paint0_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.44188 30.719L14.2409 40.8268C14.5661 41.1977 15.0311 41.4267 15.5317 41.4626C16.0324 41.4985 16.527 41.3383 16.905 41.0178C31.1541 28.6264 48.799 28.6264 63.0857 41.0178C63.4636 41.3383 63.9582 41.4985 64.4589 41.4626C64.9596 41.4267 65.4245 41.1977 65.7497 40.8268L74.5581 30.719C75.2231 29.9542 75.1267 28.8122 74.3424 28.1624C53.6582 10.6125 26.3325 10.6125 5.65763 28.1624C4.87332 28.8122 4.77695 29.9542 5.44188 30.719Z"
            fill="#2684FF"
          />
          <defs><linearGradient id="paint0_linear" x1="40.0002" y1="59.5332" x2="40.0002" y2="31.3751" gradientUnits="userSpaceOnUse"><stop stop-color="#2684FF"/><stop offset="0.82" stop-color="#0052CC"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M40 65.0011C49.0508 65.0011 56.3879 57.8851 56.3879 49.107C56.3879 40.3289 49.0508 33.2129 40 33.2129C30.9492 33.2129 23.6121 40.3289 23.6121 49.107C23.6121 57.8851 30.9492 65.0011 40 65.0011Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.44188 30.719L14.2409 40.8268C14.5661 41.1977 15.0311 41.4267 15.5317 41.4626C16.0324 41.4985 16.527 41.3383 16.905 41.0178C31.1541 28.6264 48.799 28.6264 63.0857 41.0178C63.4636 41.3383 63.9582 41.4985 64.4589 41.4626C64.9596 41.4267 65.4245 41.1977 65.7497 40.8268L74.5581 30.719C75.2231 29.9542 75.1267 28.8122 74.3424 28.1624C53.6582 10.6125 26.3325 10.6125 5.65763 28.1624C4.87332 28.8122 4.77695 29.9542 5.44188 30.719Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M40 65.0011C49.0508 65.0011 56.3879 57.8851 56.3879 49.107C56.3879 40.3289 49.0508 33.2129 40 33.2129C30.9492 33.2129 23.6121 40.3289 23.6121 49.107C23.6121 57.8851 30.9492 65.0011 40 65.0011Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.44188 30.719L14.2409 40.8268C14.5661 41.1977 15.0311 41.4267 15.5317 41.4626C16.0324 41.4985 16.527 41.3383 16.905 41.0178C31.1541 28.6264 48.799 28.6264 63.0857 41.0178C63.4636 41.3383 63.9582 41.4985 64.4589 41.4626C64.9596 41.4267 65.4245 41.1977 65.7497 40.8268L74.5581 30.719C75.2231 29.9542 75.1267 28.8122 74.3424 28.1624C53.6582 10.6125 26.3325 10.6125 5.65763 28.1624C4.87332 28.8122 4.77695 29.9542 5.44188 30.719Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsStatuspage = forwardRef((props, ref) => {
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

BrandsStatuspage.displayName = 'BrandsStatuspage'

export default BrandsStatuspage
