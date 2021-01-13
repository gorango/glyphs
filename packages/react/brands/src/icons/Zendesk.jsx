
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
            fill="#07363D"
          />
          <path
            d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
            fill="#07363D"
          />
          <path
            d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
            fill="#07363D"
          />
          <path
            d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
            fill="#07363D"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
            fill="currentColor"
          />
          <path
            d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
            fill="currentColor"
          />
          <path
            d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
            fill="currentColor"
          />
          <path
            d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M42.5 12.5L42.5001 51.7857L75.0001 12.5H42.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21.2501 30C30.1405 30 37.5001 21.0395 37.5001 12.5001H5.00006C5.00006 21.0395 12.3596 30 21.2501 30Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42.5001 67.5C42.5001 58.9605 49.8596 50 58.7501 50C67.6405 50 75.0001 58.9605 75.0001 67.5H42.5001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.5001 67.5V28.2143L5 67.5H37.5001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsZendesk = forwardRef((props, ref) => {
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

BrandsZendesk.displayName = 'BrandsZendesk'

export default BrandsZendesk
