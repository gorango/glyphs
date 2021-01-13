
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M26 48L26 58C26 65.732 32.268 72 40 72C47.732 72 54 65.732 54 58V48"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 32L26 22C26 14.268 32.268 8 40 8C47.732 8 54 14.268 54 22V32"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 53L40 27"
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
            d="M25.6592 48L25.6592 58C25.6592 65.732 31.9272 72 39.6592 72V72C47.3912 72 53.6592 65.732 53.6592 58L53.6592 48"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.6592 32L25.6592 22C25.6592 14.268 31.9272 8 39.6592 8V8C47.3912 8 53.6592 14.268 53.6592 22L53.6592 32"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.6592 53L39.6592 27"
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
            d="M25.6592 48L25.6592 58C25.6592 65.732 31.9272 72 39.6592 72V72C47.3912 72 53.6592 65.732 53.6592 58L53.6592 48"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.6592 32L25.6592 22C25.6592 14.268 31.9272 8 39.6592 8V8C47.3912 8 53.6592 14.268 53.6592 22L53.6592 32"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.6592 53L39.6592 27"
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
            d="M25.6592 48L25.6592 58C25.6592 65.732 31.9272 72 39.6592 72C47.3912 72 53.6592 65.732 53.6592 58L53.6592 48M25.6592 32L25.6592 22C25.6592 14.268 31.9272 8 39.6592 8C47.3912 8 53.6592 14.268 53.6592 22V32M39.6592 53L39.6592 27"
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
            d="M39.5269 5.52698C30.6903 5.52698 23.5269 12.6904 23.5269 21.527L23.5269 31.527C23.5269 32.6315 24.4223 33.527 25.5269 33.527C26.6314 33.527 27.5269 32.6315 27.5269 31.527V21.527C27.5269 14.8996 32.8994 9.52698 39.5269 9.52698C46.1543 9.52698 51.5269 14.8996 51.5269 21.527V31.527C51.5269 32.6315 52.4223 33.527 53.5269 33.527C54.6314 33.527 55.5269 32.6315 55.5269 31.527V21.527C55.5269 12.6904 48.3634 5.52698 39.5269 5.52698Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.5269 73.527C30.6903 73.527 23.5269 66.3635 23.5269 57.527L23.5269 47.527C23.5269 46.4224 24.4223 45.527 25.5269 45.527C26.6314 45.527 27.5269 46.4224 27.5269 47.527V57.527C27.5269 64.1544 32.8994 69.527 39.5269 69.527C46.1543 69.527 51.5269 64.1544 51.5269 57.527L51.5269 47.527C51.5269 46.4224 52.4223 45.527 53.5269 45.527C54.6314 45.527 55.5269 46.4224 55.5269 47.527V57.527C55.5269 66.3635 48.3634 73.527 39.5269 73.527Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.5269 52.527C37.5269 53.6315 38.4223 54.527 39.5269 54.527C40.6314 54.527 41.5269 53.6315 41.5269 52.527L41.5269 26.527C41.5269 25.4224 40.6314 24.527 39.5269 24.527C38.4223 24.527 37.5269 25.4224 37.5269 26.527L37.5269 52.527Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLink = forwardRef((props, ref) => {
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

CoreLink.displayName = 'CoreLink'

export default CoreLink
