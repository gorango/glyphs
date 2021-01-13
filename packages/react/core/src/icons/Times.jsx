
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M55.5564 55.6693L24.4437 24.5566"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.4436 55.6693L55.5563 24.5566"
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
            d="M24.4437 24.5566L38.5858 38.6988L41.4142 41.5272L55.5564 55.6693"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.5563 24.5566L41.4142 38.6988L38.5858 41.5272L24.4436 55.6693"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M24.4437 24.5566L38.5858 38.6988L41.4142 41.5272L55.5564 55.6693"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.5563 24.5566L41.4142 38.6988L38.5858 41.5272L24.4436 55.6693"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M55.5564 55.6693L24.4437 24.5566M24.4437 55.6693L55.5564 24.5566"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            d="M56.9706 25.8576C57.7516 25.0765 57.7516 23.8102 56.9706 23.0291C56.1895 22.2481 54.9232 22.2481 54.1422 23.0291L40 37.1713L25.8579 23.0291C25.0768 22.2481 23.8105 22.2481 23.0295 23.0291C22.2484 23.8102 22.2484 25.0765 23.0295 25.8576L37.1716 39.9997L23.0295 54.1418C22.2484 54.9229 22.2484 56.1892 23.0295 56.9703C23.8105 57.7513 25.0768 57.7513 25.8579 56.9703L40 42.8281L54.1422 56.9703C54.9232 57.7513 56.1895 57.7513 56.9706 56.9703C57.7516 56.1892 57.7516 54.9229 56.9706 54.1418L42.8284 39.9997L56.9706 25.8576Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreTimes = forwardRef((props, ref) => {
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

CoreTimes.displayName = 'CoreTimes'

export default CoreTimes