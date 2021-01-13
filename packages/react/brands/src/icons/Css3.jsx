
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M15 70L10 7.5H70L65 70L40 77.5L15 70Z"
            fill="#1172B8"
          />
          <path
            d="M65 12.5H40V73.75L60 67.5L65 12.5Z"
            fill="#33AADD"
          />
          <path
            d="M48.75 43.75H23.75L22.5 35L42.5 28.75H22.5L21.25 21.25H60L58.75 30L42.5 36.25H57.5L55 60L40 65L25 60L23.75 47.5H31.25L32.5 53.75L40 56.25L47.5 53.75L48.75 43.75Z"
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
            d="M10 7.5L15 70L40 77.5L65 70L70 7.5H10ZM23.75 43.75H48.75L47.5 53.75L40 56.25L32.5 53.75L31.25 47.5H23.75L25 60L40 65L55 60L57.5 36.25H42.5L58.75 30L60 21.25H21.25L22.5 28.75H42.5L22.5 35L23.75 43.75Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M15 70L10 7.5H70L65 70L40 77.5L15 70Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.75 43.75H23.75L22.5 35L42.5 28.75H22.5L21.25 21.25H60L58.75 30L42.5 36.25H57.5L55 60L40 65L25 60L23.75 47.5H31.25L32.5 53.75L40 56.25L47.5 53.75L48.75 43.75Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsCss3 = forwardRef((props, ref) => {
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

BrandsCss3.displayName = 'BrandsCss3'

export default BrandsCss3
