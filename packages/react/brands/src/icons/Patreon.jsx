
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75Z"
            fill="#F76754"
          />
          <path
            d="M25 60H32.5V25H25V60Z"
            fill="#002C49"
          />
          <path
            d="M47.5195 25C54.4012 25 60 30.6157 60 37.5188C60 44.4009 54.4012 50 47.5195 50C40.6162 50 35 44.4009 35 37.5188C35 30.6157 40.6162 25 47.5195 25Z"
            fill="white"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM25 60H32.5V25H25V60ZM60 37.5188C60 30.6157 54.4012 25 47.5195 25C40.6162 25 35 30.6157 35 37.5188C35 44.4009 40.6162 50 47.5195 50C54.4012 50 60 44.4009 60 37.5188Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25 60H32.5V25H25V60Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.5195 25C54.4012 25 60 30.6157 60 37.5188C60 44.4009 54.4012 50 47.5195 50C40.6162 50 35 44.4009 35 37.5188C35 30.6157 40.6162 25 47.5195 25Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsPatreon = forwardRef((props, ref) => {
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

BrandsPatreon.displayName = 'BrandsPatreon'

export default BrandsPatreon
