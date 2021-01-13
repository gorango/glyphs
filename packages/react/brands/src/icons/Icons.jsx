
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="18"
            r="10"
            fill="#F24E1E"
          />
          <rect
            x="30"
            y="33"
            width="20"
            height="20"
            fill="#A259FF"
          />
          <path
            d="M40 72.0098L50 53.0098H30L40 72.0098Z"
            fill="#0ACF83"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M50 18C50 23.5228 45.5228 28 40 28C34.4772 28 30 23.5228 30 18C30 12.4772 34.4772 8 40 8C45.5228 8 50 12.4772 50 18Z"
            fill="currentColor"
          />
          <path
            d="M30 33H50V53H30V33Z"
            fill="currentColor"
          />
          <path
            d="M40 72.01L50 53.01H30L40 72.01Z"
            fill="currentColor"
          />
          <path
            d="M50 18C50 23.5228 45.5228 28 40 28C34.4772 28 30 23.5228 30 18C30 12.4772 34.4772 8 40 8C45.5228 8 50 12.4772 50 18Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 33H50V53H30V33Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 72.01L50 53.01H30L40 72.01Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M50 18C50 23.5228 45.5228 28 40 28C34.4772 28 30 23.5228 30 18C30 12.4772 34.4772 8 40 8C45.5228 8 50 12.4772 50 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 33H50V53H30V33Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 72.01L50 53.01H30L40 72.01Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsIcons = forwardRef((props, ref) => {
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

BrandsIcons.displayName = 'BrandsIcons'

export default BrandsIcons
