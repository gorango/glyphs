
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="#1794D4"
          />
          <path
            d="M45 17.5H40V22.5H45V17.5Z"
            fill="white"
          />
          <path
            d="M25 25H30V30H25V25Z"
            fill="white"
          />
          <path
            d="M15.0039 42.3535C15.4311 49.6068 19.7507 60.0001 35 60.0001C52 60.0001 59.5833 47.5001 61.25 41.2501C63.3333 41.2501 68 40.0001 70 35.0001C68.75 33.75 63.75 33.75 61.25 35.0001C61.25 33.0001 60 28.75 57.5 27.5C55.8333 29.1667 53.25 33.5 56.25 37.5C55 39.9999 51.6668 40 50.0001 40H17.3572C16.0336 40 14.926 41.0321 15.0039 42.3535Z"
            fill="white"
          />
          <path
            d="M22.5 32.5H17.5V37.5H22.5V32.5Z"
            fill="white"
          />
          <path
            d="M25 32.5H30V37.5H25V32.5Z"
            fill="white"
          />
          <path
            d="M37.5 32.5H32.5V37.5H37.5V32.5Z"
            fill="white"
          />
          <path
            d="M40 32.5H45V37.5H40V32.5Z"
            fill="white"
          />
          <path
            d="M52.5 32.5H47.5V37.5H52.5V32.5Z"
            fill="white"
          />
          <path
            d="M37.5 25H32.5V30H37.5V25Z"
            fill="white"
          />
          <path
            d="M40 25H45V30H40V25Z"
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
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM40 17.5H45V22.5H40V17.5ZM30 25H25V30H30V25ZM15.0039 42.3535C15.4311 49.6068 19.7507 60.0001 35 60.0001C52 60.0001 59.5833 47.5001 61.25 41.2501C63.3333 41.2501 68 40.0001 70 35.0001C68.75 33.75 63.75 33.75 61.25 35.0001C61.25 33.0001 60 28.75 57.5 27.5C55.8333 29.1667 53.25 33.5 56.25 37.5C55 39.9999 51.6668 40 50.0001 40H17.3572C16.0336 40 14.926 41.0321 15.0039 42.3535ZM17.5 32.5H22.5V37.5H17.5V32.5ZM25 32.5H30V37.5H25V32.5ZM32.5 32.5H37.5V37.5H32.5V32.5ZM40 32.5H45V37.5H40V32.5ZM47.5 32.5H52.5V37.5H47.5V32.5ZM37.5 25H32.5V30H37.5V25ZM45 25H40V30H45V25Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M75 40C75 59.33 59.33 75 40 75C20.67 75 5 59.33 5 40C5 20.67 20.67 5 40 5C59.33 5 75 20.67 75 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45 17.5H40V22.5H45V17.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25 25H30V30H25V25Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M15.0039 42.3535C15.4311 49.6068 19.7507 60.0001 35 60.0001C52 60.0001 59.5833 47.5001 61.25 41.2501C63.3333 41.2501 68 40.0001 70 35.0001C68.75 33.75 63.75 33.75 61.25 35.0001C61.25 33.0001 60 28.75 57.5 27.5C55.8333 29.1667 53.25 33.5 56.25 37.5C55 39.9999 51.6668 40 50.0001 40H17.3572C16.0336 40 14.926 41.0321 15.0039 42.3535Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22.5 32.5H17.5V37.5H22.5V32.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25 32.5H30V37.5H25V32.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.5 32.5H32.5V37.5H37.5V32.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 32.5H45V37.5H40V32.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52.5 32.5H47.5V37.5H52.5V32.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.5 25H32.5V30H37.5V25Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 25H45V30H40V25Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsDocker = forwardRef((props, ref) => {
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

BrandsDocker.displayName = 'BrandsDocker'

export default BrandsDocker
