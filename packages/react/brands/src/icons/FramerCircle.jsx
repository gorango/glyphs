
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.5 50.833H40V67.4997L22.5 50.833Z"
            fill="#0055FF"
          />
          <path
            d="M40 34.167H22.5V50.8337H57.5L40 34.167Z"
            fill="#00AAFF"
          />
          <path
            d="M22.5 17.5L40 34.1667H57.5V17.5H22.5Z"
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
            d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40ZM40 50.8334H22.5L40 67.5001V50.8334ZM39.9999 34.1666H22.5V50.8334L57.4999 50.8332L39.9999 34.1666L57.5 34.1667V17.5H22.5L39.9999 34.1666Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M22.5 50.8334H40V67.5001L22.5 50.8334ZM22.5 50.8334V34.1666H40M22.5 50.8334L57.4999 50.8332L40 34.1666M40 34.1666L22.5 17.5H57.5V34.1667L40 34.1666ZM40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsFramerCircle = forwardRef((props, ref) => {
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

BrandsFramerCircle.displayName = 'BrandsFramerCircle'

export default BrandsFramerCircle
