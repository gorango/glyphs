
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M67.4226 38.9997C67.7798 39.6185 67.7798 40.3809 67.4226 40.9997L54.5773 63.2484C54.22 63.8672 53.5598 64.2484 52.8452 64.2484H27.1546C26.4401 64.2484 25.7798 63.8672 25.4226 63.2484L12.5773 40.9997C12.22 40.3809 12.22 39.6185 12.5773 38.9997L25.4226 16.751C25.7798 16.1322 26.4401 15.751 27.1546 15.751L52.8452 15.751C53.5598 15.751 54.22 16.1322 54.5773 16.751L67.4226 38.9997Z"
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
            d="M67.4226 39C67.7799 39.6188 67.7799 40.3812 67.4226 41L54.5773 63.2487C54.2201 63.8675 53.5598 64.2487 52.8453 64.2487L27.1547 64.2487C26.4402 64.2487 25.7799 63.8675 25.4226 63.2487L12.5773 41C12.2201 40.3812 12.2201 39.6188 12.5773 39L25.4226 16.7513C25.7799 16.1325 26.4402 15.7513 27.1547 15.7513L52.8453 15.7513C53.5598 15.7513 54.2201 16.1325 54.5774 16.7513L67.4226 39Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M67.4226 39C67.7799 39.6188 67.7799 40.3812 67.4226 41L54.5773 63.2487C54.2201 63.8675 53.5598 64.2487 52.8453 64.2487L27.1547 64.2487C26.4402 64.2487 25.7799 63.8675 25.4226 63.2487L12.5773 41C12.2201 40.3812 12.2201 39.6188 12.5773 39L25.4226 16.7513C25.7799 16.1325 26.4402 15.7513 27.1547 15.7513L52.8453 15.7513C53.5598 15.7513 54.2201 16.1325 54.5774 16.7513L67.4226 39Z"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M55.6651 39.4318C55.8718 39.7826 55.8718 40.218 55.6651 40.5688L48.3249 53.0281C48.1236 53.3698 47.7565 53.5796 47.3599 53.5796L32.6401 53.5796C32.2435 53.5796 31.8764 53.3698 31.6751 53.0281L24.3349 40.5688C24.1282 40.218 24.1282 39.7826 24.3349 39.4318L31.6751 26.9725C31.8764 26.6308 32.2435 26.421 32.6401 26.421L47.3599 26.421C47.7565 26.421 48.1236 26.6308 48.3249 26.9725L55.6651 39.4318Z"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M67.4226 38.9997C67.7798 39.6185 67.7798 40.3809 67.4226 40.9997L54.5773 63.2484C54.22 63.8672 53.5598 64.2484 52.8452 64.2484H27.1546C26.4401 64.2484 25.7798 63.8672 25.4226 63.2484L12.5773 40.9997C12.22 40.3809 12.22 39.6185 12.5773 38.9997L25.4226 16.751C25.7798 16.1322 26.4401 15.751 27.1546 15.751L52.8452 15.751C53.5598 15.751 54.22 16.1322 54.5773 16.751L67.4226 38.9997Z"
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
            d="M69.1549 37.9997C69.8694 39.2373 69.8694 40.7621 69.1549 41.9997L56.3096 64.2484C55.595 65.486 54.2745 66.2484 52.8455 66.2484H27.1549C25.7258 66.2484 24.4053 65.486 23.6908 64.2484L10.8455 41.9997C10.1309 40.7621 10.1309 39.2373 10.8455 37.9997L23.6908 15.751C24.4053 14.5134 25.7258 13.751 27.1549 13.751L52.8455 13.751C54.2745 13.751 55.595 14.5134 56.3096 15.751L69.1549 37.9997ZM52.8455 62.2484L65.6908 39.9997L52.8455 17.751L27.1549 17.751L14.3096 39.9997L27.1549 62.2484H52.8455Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHexagon = forwardRef((props, ref) => {
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

CoreHexagon.displayName = 'CoreHexagon'

export default CoreHexagon
