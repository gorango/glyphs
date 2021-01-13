
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
          <path
            d="M58 16L59.6971 20.3029L64 22L59.6971 23.6971L58 28L56.3029 23.6971L52 22L56.3029 20.3029L58 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 16L23.6971 20.3029L28 22L23.6971 23.6971L22 28L20.3029 23.6971L16 22L20.3029 20.3029L22 16Z"
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
          <path
            d="M58 16L59.6971 20.3029L64 22L59.6971 23.6971L58 28L56.3029 23.6971L52 22L56.3029 20.3029L58 16Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 16L23.6971 20.3029L28 22L23.6971 23.6971L22 28L20.3029 23.6971L16 22L20.3029 20.3029L22 16Z"
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
          <path
            d="M58 16L59.6971 20.3029L64 22L59.6971 23.6971L58 28L56.3029 23.6971L52 22L56.3029 20.3029L58 16Z"
            fill="#56CCF2"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 16L23.6971 20.3029L28 22L23.6971 23.6971L22 28L20.3029 23.6971L16 22L20.3029 20.3029L22 16Z"
            fill="#2F80ED"
            stroke="#2F80ED"
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
          />
          <path
            d="M58 16L59.6971 20.3029L64 22L59.6971 23.6971L58 28L56.3029 23.6971L52 22L56.3029 20.3029L58 16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22 16L23.6971 20.3029L28 22L23.6971 23.6971L22 28L20.3029 23.6971L16 22L20.3029 20.3029L22 16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 16L46.7882 33.2118L64 40L46.7882 46.7882L40 64L33.2118 46.7882L16 40L33.2118 33.2118L40 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 16L59.6971 20.3029L64 22L59.6971 23.6971L58 28L56.3029 23.6971L52 22L56.3029 20.3029L58 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 16L23.6971 20.3029L28 22L23.6971 23.6971L22 28L20.3029 23.6971L16 22L20.3029 20.3029L22 16Z"
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
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58 14C58.8213 14 59.5592 14.5022 59.8605 15.2662L61.2389 18.7611L64.7338 20.1395C65.4978 20.4408 66 21.1787 66 22C66 22.8213 65.4978 23.5592 64.7338 23.8605L61.2389 25.2389L59.8605 28.7338C59.5592 29.4978 58.8213 30 58 30C57.1787 30 56.4408 29.4978 56.1395 28.7338L54.7611 25.2389L51.2662 23.8605C50.5022 23.5592 50 22.8213 50 22C50 21.1787 50.5022 20.4408 51.2662 20.1395L54.7611 18.7611L56.1395 15.2662C56.4408 14.5022 57.1787 14 58 14ZM58 21.3613C57.8386 21.62 57.62 21.8386 57.3613 22C57.62 22.1614 57.8386 22.3799 58 22.6387C58.1614 22.3799 58.38 22.1614 58.6387 22C58.38 21.8386 58.1614 21.62 58 21.3613Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.8605 15.2662C23.5592 14.5022 22.8213 14 22 14C21.1787 14 20.4408 14.5022 20.1395 15.2662L18.7611 18.7611L15.2662 20.1395C14.5022 20.4408 14 21.1787 14 22C14 22.8213 14.5022 23.5592 15.2662 23.8605L18.7611 25.2389L20.1395 28.7338C20.4408 29.4978 21.1787 30 22 30C22.8213 30 23.5592 29.4978 23.8605 28.7338L25.2389 25.2389L28.7338 23.8605C29.4978 23.5592 30 22.8213 30 22C30 21.1787 29.4978 20.4408 28.7338 20.1395L25.2389 18.7611L23.8605 15.2662ZM21.3613 22C21.62 21.8386 21.8386 21.62 22 21.3613C22.1614 21.62 22.3799 21.8386 22.6387 22C22.3799 22.1614 22.1614 22.3799 22 22.6387C21.8386 22.3799 21.62 22.1614 21.3613 22Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSparkles = forwardRef((props, ref) => {
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

CoreSparkles.displayName = 'CoreSparkles'

export default CoreSparkles
