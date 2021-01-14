
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M25.0667 16L54.9333 16V17L24 63V64L56 64"
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
            d="M25.0667 13C23.4098 13 22.0667 14.3431 22.0667 16C22.0667 17.6569 23.4098 19 25.0667 19V13ZM54.9333 16H57.9333C57.9333 14.3431 56.5902 13 54.9333 13V16ZM56 67C57.6569 67 59 65.6569 59 64C59 62.3431 57.6569 61 56 61V67ZM24 64H21C21 65.6569 22.3431 67 24 67V64ZM54.9333 17L57.4228 18.6741C57.7556 18.1792 57.9333 17.5964 57.9333 17L54.9333 17ZM24 63L21.5105 61.3259C21.1777 61.8208 21 62.4036 21 63H24ZM25.0667 19L54.9333 19V13L25.0667 13V19ZM56 61L24 61V67H56V61ZM51.9333 16V17L57.9333 17V16H51.9333ZM52.4439 15.3259L21.5105 61.3259L26.4895 64.6741L57.4228 18.6741L52.4439 15.3259ZM21 63V64H27V63H21Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M25.0667 14C23.9621 14 23.0667 14.8954 23.0667 16C23.0667 17.1046 23.9621 18 25.0667 18V14ZM54.9333 16H56.9333C56.9333 14.8954 56.0379 14 54.9333 14V16ZM56 66C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62V66ZM24 64H22C22 65.1046 22.8954 66 24 66V64ZM54.9333 17L56.593 18.1161C56.8148 17.7861 56.9333 17.3976 56.9333 17L54.9333 17ZM24 63L22.3404 61.8839C22.1185 62.2139 22 62.6024 22 63H24ZM25.0667 18L54.9333 18V14L25.0667 14V18ZM56 62L24 62V66H56V62ZM52.9333 16V17L56.9333 17V16H52.9333ZM53.2737 15.8839L22.3404 61.8839L25.6596 64.1161L56.593 18.1161L53.2737 15.8839ZM22 63V64H26V63H22Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M25.0667 16H54.9333V17L24 63V64H56"
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
            d="M56.9333 16C56.9333 14.8954 56.0379 14 54.9333 14L25.0667 14C23.9621 14 23.0667 14.8954 23.0667 16C23.0667 17.1046 23.9621 18 25.0667 18L51.8507 18L22.3404 61.8839C22.1185 62.2139 22 62.6024 22 63V64C22 65.1046 22.8954 66 24 66H56C57.1046 66 58 65.1046 58 64C58 62.8954 57.1046 62 56 62L27.0826 62L56.593 18.1161C56.8148 17.7861 56.9333 17.3976 56.9333 17V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreZ = forwardRef((props, ref) => {
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

CoreZ.displayName = 'CoreZ'

export default CoreZ
