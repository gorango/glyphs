
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40 50.8V50.2295C40 45.9851 42.2366 42.0548 45.8856 39.8869L47.4626 38.95C51.2057 36.7262 53.5 32.6945 53.5 28.3406C53.5 21.5251 47.9749 16 41.1594 16H40C32.5442 16 26.5 22.0442 26.5 29.5V30.2623"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 60.4004V62.8004"
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
            d="M39.5 49.6V49.0295V49.0295C39.5 45.5291 41.3445 42.2877 44.3539 40.4999L46.9626 38.95C50.7057 36.7262 53 32.6945 53 28.3406V28.3406C53 21.5251 47.4749 16 40.6594 16H39.5C32.0442 16 26 22.0442 26 29.5L26 29.6918V30.2623"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.5 60.4004L39.5 62.8004"
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
            d="M39.5 49.6V49.0295V49.0295C39.5 45.5291 41.3445 42.2877 44.3539 40.4999L46.9626 38.95C50.7057 36.7262 53 32.6945 53 28.3406V28.3406C53 21.5251 47.4749 16 40.6594 16H39.5C32.0442 16 26 22.0442 26 29.5L26 29.6918V30.2623"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.5 60.4004L39.5 62.8004"
            stroke="#EB5757"
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
            d="M40 49.6V49.0295C40 45.5291 41.8445 42.2877 44.8539 40.4999L47.4626 38.95C51.2057 36.7262 53.5 32.6945 53.5 28.3406C53.5 21.5251 47.9749 16 41.1594 16H40C32.5442 16 26.5 22.0442 26.5 29.5V30.2623M40 60.4V62.8"
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
            d="M28.5 30.0996C28.5 23.7483 33.6487 18.5996 40 18.5996H41.1594C46.8704 18.5996 51.5 23.2292 51.5 28.9402C51.5 32.5885 49.5775 35.9668 46.441 37.8302L44.864 38.7671C40.6084 41.2954 38 45.8791 38 50.8291V51.3996C38 52.5042 38.8954 53.3996 40 53.3996C41.1046 53.3996 42 52.5042 42 51.3996V50.8291C42 47.2904 43.8648 44.0135 46.9071 42.206L48.4841 41.2691C52.8339 38.6848 55.5 33.9997 55.5 28.9402C55.5 21.0201 49.0795 14.5996 41.1594 14.5996L40 14.5996C31.4396 14.5996 24.5 21.5392 24.5 30.0996V30.8619C24.5 31.9665 25.3954 32.8619 26.5 32.8619C27.6046 32.8619 28.5 31.9665 28.5 30.8619V30.0996Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42 60.9996C42 59.895 41.1046 58.9996 40 58.9996C38.8954 58.9996 38 59.895 38 60.9996V63.3996C38 64.5042 38.8954 65.3996 40 65.3996C41.1046 65.3996 42 64.5042 42 63.3996V60.9996Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreQuestion = forwardRef((props, ref) => {
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

CoreQuestion.displayName = 'CoreQuestion'

export default CoreQuestion
