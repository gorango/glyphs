
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M48 72.0044C48 74.2111 46.2111 76 44.0044 76H36.0044C33.7928 76 32 74.2072 32 71.9956V16.8062C32 14.9897 32.6182 13.2272 33.7531 11.8087L39.2 5C39.6101 4.48733 40.3899 4.48733 40.8 5L46.247 11.8087C47.3818 13.2272 48 14.9897 48 16.8062V72.0044Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.0078 60H47.999"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.7192 75C33.5125 75 31.7236 73.2111 31.7236 71.0044L31.7236 14.7539C31.7236 13.6185 32.11 12.517 32.8193 11.6304L38.9236 4C39.3338 3.48734 40.1135 3.48734 40.5236 4L46.628 11.6304C47.3372 12.517 47.7236 13.6185 47.7236 14.7539L47.7236 70.9956C47.7236 73.2072 45.9308 75 43.7192 75L35.7192 75ZM47.7158 56L31.7246 56V62L47.7158 62V56Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.1127 72.1171C32.1127 74.3238 33.9016 76.1127 36.1083 76.1127H44.1083C46.3198 76.1127 48.1127 74.3198 48.1127 72.1083L48.1127 16.9189C48.1127 15.1023 47.4944 13.3399 46.3596 11.9214L41.7127 6.11267L40.9127 5.11267C40.5025 4.60001 39.7228 4.60001 39.3127 5.11267L38.5127 6.11267L33.8657 11.9214C32.7309 13.3399 32.1127 15.1023 32.1127 16.9189L32.1127 72.1171Z"
            fill="#219653"
          />
          <path
            d="M48.1049 60.1127L32.1136 60.1127"
            stroke="#6FCF97"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M47.8488 72.0044C47.8488 74.2111 46.0599 76 43.8532 76H35.8532C33.6416 76 31.8488 74.2071 31.8488 71.9956V16.8062C31.8488 14.9897 32.467 13.2272 33.6018 11.8087L39.0488 4.99998C39.4589 4.48731 40.2386 4.48731 40.6488 4.99998L46.0957 11.8087C47.2305 13.2272 47.8488 14.9897 47.8488 16.8062V72.0044Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31.8566 60H47.8478M43.8532 76H35.8532C33.6416 76 31.8488 74.2071 31.8488 71.9956V16.8062C31.8488 14.9897 32.467 13.2272 33.6018 11.8087L39.0488 4.99998C39.4589 4.48731 40.2386 4.48731 40.6488 4.99998L46.0957 11.8087C47.2305 13.2272 47.8488 14.9897 47.8488 16.8062V72.0044C47.8488 74.2111 46.0599 76 43.8532 76Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
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
            d="M44.1084 78.1126C47.4245 78.1126 50.1128 75.4244 50.1128 72.1082V16.9189C50.1128 14.6482 49.34 12.4451 47.9215 10.6719L42.4745 3.86326C41.2637 2.34978 38.9618 2.34978 37.7511 3.86326L32.3041 10.6719C30.8856 12.4451 30.1128 14.6482 30.1128 16.9189V72.1171C30.1128 75.4283 32.7971 78.1126 36.1084 78.1126H44.1084ZM46.1128 72.1082C46.1128 73.2152 45.2154 74.1126 44.1084 74.1126H36.1084C35.0063 74.1126 34.1128 73.2192 34.1128 72.1171V62.1126H46.1128V72.1082ZM46.1128 58.1126V16.9189C46.1128 15.5565 45.6491 14.2346 44.798 13.1707L40.1128 7.31421L35.4276 13.1707C34.5765 14.2346 34.1128 15.5565 34.1128 16.9189V58.1126H46.1128Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePen = forwardRef((props, ref) => {
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

CorePen.displayName = 'CorePen'

export default CorePen
