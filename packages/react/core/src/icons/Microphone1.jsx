
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M50 68H30"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 55V68"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 31V39C56 47.8366 48.8366 55 40 55C31.1634 55 24 47.8366 24 39V31"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48C35.0294 48 31 43.9706 31 39V21Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.9791 23H48.9791"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.9791 30H48.9791"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.9791 37H48.9791"
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
            d="M30.5 21C30.5 15.7533 34.7533 11.5 40 11.5C45.0698 11.5 49.2117 15.471 49.4856 20.4727C49.4931 20.6098 49.4439 20.744 49.3494 20.8438C49.255 20.9435 49.1237 21 48.9863 21H40C38.8954 21 38 21.8954 38 23C38 24.1046 38.8954 25 40 25H49C49.2761 25 49.5 25.2239 49.5 25.5V27.5C49.5 27.7761 49.2761 28 49 28H40C38.8954 28 38 28.8954 38 30C38 31.1046 38.8954 32 40 32H49C49.2761 32 49.5 32.2239 49.5 32.5V34.5C49.5 34.7761 49.2761 35 49 35H40C38.8954 35 38 35.8954 38 37C38 38.1046 38.8954 39 40 39H48.9863C49.1237 39 49.255 39.0565 49.3494 39.1562C49.4439 39.256 49.4931 39.3902 49.4856 39.5273C49.2117 44.529 45.0698 48.5 40 48.5C34.7533 48.5 30.5 44.2467 30.5 39V21ZM21.5 31C21.5 29.6193 22.6193 28.5 24 28.5C25.3807 28.5 26.5 29.6193 26.5 31V39C26.5 46.4558 32.5442 52.5 40 52.5C47.4558 52.5 53.5 46.4558 53.5 39V31C53.5 29.6193 54.6193 28.5 56 28.5C57.3807 28.5 58.5 29.6193 58.5 31V39C58.5 48.3695 51.5351 56.1117 42.5 57.3325V65.5H50C51.3807 65.5 52.5 68 52.5 68C52.5 68 51.3807 70.5 50 70.5H30C28.6193 70.5 27.5 69.3807 27.5 68C27.5 66.6193 28.6193 65.5 30 65.5H37.5V57.3325C28.4649 56.1117 21.5 48.3695 21.5 39V31Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M50 70C51.1046 70 52 69.1046 52 68C52 66.8954 51.1046 66 50 66V70ZM30 66C28.8954 66 28 66.8954 28 68C28 69.1046 28.8954 70 30 70V66ZM42 55C42 53.8954 41.1046 53 40 53C38.8954 53 38 53.8954 38 55H42ZM38 68C38 69.1046 38.8954 70 40 70C41.1046 70 42 69.1046 42 68H38ZM58 31C58 29.8954 57.1046 29 56 29C54.8954 29 54 29.8954 54 31L58 31ZM26 31C26 29.8954 25.1046 29 24 29C22.8954 29 22 29.8954 22 31H26ZM50 66H30V70H50V66ZM38 55L38 68H42L42 55H38ZM54 31V39H58V31L54 31ZM26 39V31H22V39H26ZM22 39C22 48.9411 30.0589 57 40 57V53C32.268 53 26 46.732 26 39H22ZM54 39C54 46.732 47.732 53 40 53V57C49.9411 57 58 48.9411 58 39H54Z"
            fill="#2F80ED"
          />
          <path
            d="M31 21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48C35.0294 48 31 43.9706 31 39L31 21Z"
            fill="#9B51E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49 35V39H40C38.8954 39 38 38.1046 38 37C38 35.8954 38.8954 35 40 35H49ZM49 28V32H40C38.8954 32 38 31.1046 38 30C38 28.8954 38.8954 28 40 28H49ZM49 21H40C38.8954 21 38 21.8954 38 23C38 24.1046 38.8954 25 40 25H49V21Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M31 21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48C35.0294 48 31 43.9706 31 39V21Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50 68H30M40 55V68M40 55C31.1634 55 24 47.8366 24 39V31M40 55C48.8366 55 56 47.8366 56 39V31M40 23H49M40 30H49M40 37H49M40 48C35.0294 48 31 43.9706 31 39V21C31 16.0294 35.0294 12 40 12C44.9706 12 49 16.0294 49 21V39C49 43.9706 44.9706 48 40 48Z"
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
            d="M51 21C51 14.9249 46.0751 10 40 10C33.9249 10 29 14.9249 29 21V39C29 45.0751 33.9249 50 40 50C46.0751 50 51 45.0751 51 39V21ZM40 14C36.134 14 33 17.134 33 21V39C33 42.866 36.134 46 40 46C43.866 46 47 42.866 47 39H40C38.8954 39 38 38.1046 38 37C38 35.8954 38.8954 35 40 35H47V32H40C38.8954 32 38 31.1046 38 30C38 28.8954 38.8954 28 40 28H47V25H40C38.8954 25 38 24.1046 38 23C38 21.8954 38.8954 21 40 21H47C47 17.134 43.866 14 40 14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 29C25.1046 29 26 29.8954 26 31V39C26 46.732 32.268 53 40 53C47.732 53 54 46.732 54 39V31C54 29.8954 54.8954 29 56 29C57.1046 29 58 29.8954 58 31V39C58 48.2651 50.9999 55.8953 42 56.8901V66H50C51.1046 66 52 66.8954 52 68C52 69.1046 51.1046 70 50 70H30C28.8954 70 28 69.1046 28 68C28 66.8954 28.8954 66 30 66H38V56.8901C29.0001 55.8953 22 48.2651 22 39V31C22 29.8954 22.8954 29 24 29Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMicrophone1 = forwardRef((props, ref) => {
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

CoreMicrophone1.displayName = 'CoreMicrophone1'

export default CoreMicrophone1
