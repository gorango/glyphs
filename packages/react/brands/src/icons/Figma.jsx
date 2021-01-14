
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M29.5 71.4991C35.296 71.4991 40 66.795 40 60.999V50.499H29.5C23.704 50.499 19 55.203 19 60.999C19 66.795 23.704 71.4991 29.5 71.4991Z"
            fill="#0ACF83"
          />
          <path
            d="M19 40C19 34.204 23.704 29.5 29.5 29.5H40V50.5H29.5C23.704 50.5 19 45.796 19 40Z"
            fill="#A259FF"
          />
          <path
            d="M19.0005 19C19.0005 13.204 23.7045 8.5 29.5005 8.5H40.0005V29.5H29.5005C23.7045 29.5 19.0005 24.796 19.0005 19Z"
            fill="#F24E1E"
          />
          <path
            d="M40.0005 8.5H50.5005C56.2965 8.5 61.0005 13.204 61.0005 19C61.0005 24.796 56.2965 29.5 50.5005 29.5H40.0005V8.5Z"
            fill="#FF7262"
          />
          <path
            d="M61.0005 40C61.0005 45.796 56.2965 50.5 50.5005 50.5C44.7045 50.5 40.0005 45.796 40.0005 40C40.0005 34.204 44.7045 29.5 50.5005 29.5C56.2965 29.5 61.0005 34.204 61.0005 40Z"
            fill="#1ABCFE"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M29.5 71.4991C35.296 71.4991 40 66.795 40 60.999V50.499H29.5C23.704 50.499 19 55.203 19 60.999C19 66.795 23.704 71.4991 29.5 71.4991Z"
            fill="currentColor"
          />
          <path
            d="M19 40C19 34.204 23.704 29.5 29.5 29.5H40V50.5H29.5C23.704 50.5 19 45.796 19 40Z"
            fill="currentColor"
          />
          <path
            d="M19.0004 19C19.0004 13.204 23.7044 8.5 29.5004 8.5H40.0004L40 29.5H29.5C23.704 29.5 19.0004 24.796 19.0004 19Z"
            fill="currentColor"
          />
          <path
            d="M40.0004 8.5H50.5004C56.2964 8.5 61.0004 13.204 61.0004 19C61.0004 24.796 56.2964 29.5 50.5004 29.5L40 29.5L40.0004 8.5Z"
            fill="currentColor"
          />
          <path
            d="M61.0004 40C61.0004 45.796 56.2964 50.5 50.5004 50.5C44.7044 50.5 40.0004 45.796 40.0004 40C40.0004 34.204 44.7044 29.5 50.5004 29.5C56.2964 29.5 61.0004 34.204 61.0004 40Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M29.5 29.5C23.704 29.5 19 34.204 19 40C19 45.796 23.704 50.5 29.5 50.5H40V29.5M29.5 29.5H40M29.5 29.5C23.704 29.5 19.0004 24.796 19.0004 19C19.0004 13.204 23.7044 8.5 29.5004 8.5H40.0004M40 29.5L40.0004 8.5M40 29.5L50.5004 29.5M40.0004 8.5H50.5004C56.2964 8.5 61.0004 13.204 61.0004 19C61.0004 24.796 56.2964 29.5 50.5004 29.5M50.5004 29.5C44.7044 29.5 40.0004 34.204 40.0004 40C40.0004 45.796 44.7044 50.5 50.5004 50.5C56.2964 50.5 61.0004 45.796 61.0004 40C61.0004 34.204 56.2964 29.5 50.5004 29.5ZM29.5 71.4991C35.296 71.4991 40 66.795 40 60.999V50.499H29.5C23.704 50.499 19 55.203 19 60.999C19 66.795 23.704 71.4991 29.5 71.4991Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsFigma = forwardRef((props, ref) => {
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

BrandsFigma.displayName = 'BrandsFigma'

export default BrandsFigma
