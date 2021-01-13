
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M47.72 72.0044C47.72 74.2111 45.9311 76 43.7244 76H35.7244C33.5128 76 31.72 74.2072 31.72 71.9956V24.245C31.72 17.6131 33.9771 11.1786 38.12 6L38.92 5C39.3301 4.48733 40.1098 4.48733 40.52 5L41.32 6C45.4629 11.1786 47.72 17.6131 47.72 24.245V72.0044Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.7236 60H51.7236C52.8282 60 53.7236 59.1046 53.7236 58V36"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.7278 60H47.719"
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
            d="M47.7236 72.1169C47.7236 74.3236 45.9347 76.1125 43.728 76.1125H35.728C33.5165 76.1125 31.7236 74.3197 31.7236 72.1081V24.3575C31.7236 17.7256 33.9807 11.2912 38.1236 6.11253L38.9236 5.11253C39.3338 4.59986 40.1135 4.59986 40.5236 5.11253L41.3236 6.11253C45.4666 11.2912 47.7236 17.7256 47.7236 24.3575V72.1169ZM50.7314 57.1125H47.7314V63.1125H51.7314C54.4929 63.1125 56.7314 60.874 56.7314 58.1125V36.1125C56.7314 34.4557 55.3883 33.1125 53.7314 33.1125C52.0746 33.1125 50.7314 34.4557 50.7314 36.1125V57.1125ZM47.7227 57.1125H31.7314V63.1125H47.7227V57.1125Z"
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
            d="M47.7236 72.1171C47.7236 74.3238 45.9347 76.1127 43.728 76.1127H35.728C33.5165 76.1127 31.7236 74.3198 31.7236 72.1083L31.7236 24.3577C31.7236 17.7258 33.9807 11.2913 38.1236 6.11267L38.9236 5.11267C39.3338 4.60001 40.1135 4.60001 40.5236 5.11267L41.3236 6.11267C45.4666 11.2913 47.7236 17.7258 47.7236 24.3577L47.7236 72.1171Z"
            fill="#56CCF2"
          />
          <path
            d="M55.7314 36.1127C55.7314 35.0081 54.836 34.1127 53.7314 34.1127C52.6269 34.1127 51.7314 35.0081 51.7314 36.1127H55.7314ZM55.7314 58.1127L55.7314 36.1127H51.7314L51.7314 58.1127H55.7314ZM47.7314 62.1127H51.7314V58.1127H47.7314V62.1127ZM51.7314 58.1127V62.1127C53.9406 62.1127 55.7314 60.3218 55.7314 58.1127H51.7314Z"
            fill="#2F80ED"
          />
          <path
            d="M31.7314 60.1127L47.7227 60.1127"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M47.8488 72.0044C47.8488 74.2111 46.0599 76 43.8532 76H35.8532C33.6416 76 31.8488 74.2071 31.8488 71.9956V24.245C31.8488 17.6131 34.1058 11.1786 38.2488 5.99998L39.0488 4.99998C39.4589 4.48731 40.2386 4.48731 40.6488 4.99998L41.4488 5.99998C45.5917 11.1786 47.8488 17.6131 47.8488 24.245V72.0044Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M53.8566 36V58C53.8566 59.1045 52.9611 60 51.8566 60H47.8566M31.8566 60H47.8478M43.8532 76H35.8532C33.6416 76 31.8488 74.2071 31.8488 71.9956V24.245C31.8488 17.6131 34.1058 11.1786 38.2488 5.99998L39.0488 4.99998C39.4589 4.48731 40.2386 4.48731 40.6488 4.99998L41.4488 5.99998C45.5917 11.1786 47.8488 17.6131 47.8488 24.245V72.0044C47.8488 74.2111 46.0599 76 43.8532 76Z"
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
            d="M30 72.1084C30 75.4245 32.6883 78.1128 36.0044 78.1128H44.0044C47.3157 78.1128 50 75.4285 50 72.1172V62.1128H52.0078C54.217 62.1128 56.0078 60.3219 56.0078 58.1128V36.1128C56.0078 35.0082 55.1124 34.1128 54.0078 34.1128C52.9032 34.1128 52.0078 35.0082 52.0078 36.1128V58.1128H50V24.3578C50 17.2717 47.5884 10.3967 43.1617 4.86338L42.3617 3.86338C41.151 2.3499 38.849 2.3499 37.6383 3.86338L36.8383 4.86338C32.4116 10.3967 30 17.2717 30 24.3578V72.1084ZM36.0044 74.1128C34.8974 74.1128 34 73.2154 34 72.1084V62.1128H46V72.1172C46 73.2193 45.1065 74.1128 44.0044 74.1128H36.0044ZM46 58.1128V24.3578C46 18.18 43.8975 12.1862 40.0383 7.36216L40 7.31433L39.9617 7.36216C36.1025 12.1862 34 18.18 34 24.3578V58.1128H46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePen1 = forwardRef((props, ref) => {
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

CorePen1.displayName = 'CorePen1'

export default CorePen1