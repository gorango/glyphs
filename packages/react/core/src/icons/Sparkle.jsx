
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40 16L46.7882 33.2118L64 40L46.7882 46.7882L40 64L33.2118 46.7882L16 40L33.2118 33.2118L40 16Z"
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
            d="M40 16L46.7882 33.2118L64 40L46.7882 46.7882L40 64L33.2118 46.7882L16 40L33.2118 33.2118L40 16Z"
            fill="currentColor"
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
            d="M40 16L46.7882 33.2118L64 40L46.7882 46.7882L40 64L33.2118 46.7882L16 40L33.2118 33.2118L40 16Z"
            fill="#9B51E0"
            stroke="#9B51E0"
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
            d="M40 16L46.7882 33.2118L64 40L46.7882 46.7882L40 64L33.2118 46.7882L16 40L33.2118 33.2118L40 16Z"
            fill="currentColor"
            fill-opacity="0.25"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 14C40.8213 14 41.5592 14.5022 41.8605 15.2662L48.3301 31.6699L64.7338 38.1395C65.4978 38.4408 66 39.1787 66 40C66 40.8213 65.4978 41.5592 64.7338 41.8605L48.3301 48.3301L41.8605 64.7338C41.5592 65.4978 40.8213 66 40 66C39.1787 66 38.4408 65.4978 38.1395 64.7338L31.6699 48.3301L15.2662 41.8605C14.5022 41.5592 14 40.8213 14 40C14 39.1787 14.5022 38.4408 15.2662 38.1395L31.6699 31.6699L38.1395 15.2662C38.4408 14.5022 39.1787 14 40 14ZM40 21.4512L35.0723 33.9456C34.869 34.461 34.461 34.869 33.9456 35.0723L21.4512 40L33.9456 44.9277C34.461 45.131 34.869 45.539 35.0723 46.0544L40 58.5488L44.9277 46.0544C45.131 45.539 45.539 45.131 46.0544 44.9277L58.5488 40L46.0544 35.0723C45.539 34.869 45.131 34.461 44.9277 33.9456L40 21.4512Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSparkle = forwardRef((props, ref) => {
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

CoreSparkle.displayName = 'CoreSparkle'

export default CoreSparkle
