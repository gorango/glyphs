
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M36.0001 20L32.5701 68.0203C32.2621 72.3323 35.6772 76 40.0001 76C44.3231 76 47.7381 72.3323 47.4301 68.0203L44.0001 20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20 20C20 11.1634 27.1634 4 36 4H48L48 6H54V4H60V20H54V18H48L48 20H20Z"
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
            d="M36 20H44L47.43 68.0203C47.738 72.3323 44.3229 76 40 76C35.6771 76 32.262 72.3323 32.57 68.0203L36 20Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 20C20 11.1634 27.1634 4 36 4H48L48 6H54V4H60V20H54V18H48L48 20H20Z"
            fill="currentColor"
          />
          <path
            d="M20 20H18C18 21.1046 18.8954 22 20 22V20ZM48 4L50 4C50 3.46957 49.7893 2.96086 49.4142 2.58579C49.0391 2.21071 48.5304 2 48 2V4ZM48 6L46 6C46 6.53043 46.2107 7.03914 46.5858 7.41421C46.9609 7.78929 47.4696 8 48 8V6ZM54 6V8C55.1046 8 56 7.10457 56 6H54ZM54 4V2C52.8954 2 52 2.89543 52 4H54ZM60 4H62C62 2.89543 61.1046 2 60 2V4ZM60 20V22C61.1046 22 62 21.1046 62 20H60ZM54 20H52C52 21.1046 52.8954 22 54 22V20ZM54 18H56C56 16.8954 55.1046 16 54 16V18ZM48 18V16C47.4696 16 46.9609 16.2107 46.5858 16.5858C46.2107 16.9609 46 17.4696 46 18L48 18ZM48 20V22C48.5304 22 49.0391 21.7893 49.4142 21.4142C49.7893 21.0391 50 20.5304 50 20L48 20ZM36 2C26.0589 2 18 10.0589 18 20H22C22 12.268 28.268 6 36 6V2ZM48 2H36V6H48V2ZM50 6L50 4L46 4L46 6L50 6ZM48 8H54V4H48V8ZM52 4V6H56V4H52ZM60 2H54V6H60V2ZM62 20V4H58V20H62ZM54 22H60V18H54V22ZM52 18V20H56V18H52ZM54 16H48V20H54V16ZM50 20L50 18L46 18L46 20L50 20ZM20 22H48V18H20V22Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M36 20H44L47.43 68.0203C47.738 72.3323 44.3229 76 40 76C35.6771 76 32.262 72.3323 32.57 68.0203L36 20Z"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 20C20 11.1634 27.1634 4 36 4H48L48 6H54V4H60V20H54V18H48L48 20H20Z"
            fill="#F2994A"
          />
          <path
            d="M20 20H18C18 21.1046 18.8954 22 20 22V20ZM48 4L50 4C50 3.46957 49.7893 2.96086 49.4142 2.58579C49.0391 2.21071 48.5304 2 48 2V4ZM48 6L46 6C46 6.53043 46.2107 7.03914 46.5858 7.41421C46.9609 7.78929 47.4696 8 48 8V6ZM54 6V8C55.1046 8 56 7.10457 56 6H54ZM54 4V2C52.8954 2 52 2.89543 52 4H54ZM60 4H62C62 2.89543 61.1046 2 60 2V4ZM60 20V22C61.1046 22 62 21.1046 62 20H60ZM54 20H52C52 21.1046 52.8954 22 54 22V20ZM54 18H56C56 16.8954 55.1046 16 54 16V18ZM48 18V16C47.4696 16 46.9609 16.2107 46.5858 16.5858C46.2107 16.9609 46 17.4696 46 18L48 18ZM48 20V22C48.5304 22 49.0391 21.7893 49.4142 21.4142C49.7893 21.0391 50 20.5304 50 20L48 20ZM36 2C26.0589 2 18 10.0589 18 20H22C22 12.268 28.268 6 36 6V2ZM48 2H36V6H48V2ZM50 6L50 4L46 4L46 6L50 6ZM48 8H54V4H48V8ZM52 4V6H56V4H52ZM60 2H54V6H60V2ZM62 20V4H58V20H62ZM54 22H60V18H54V22ZM52 18V20H56V18H52ZM54 16H48V20H54V16ZM50 20L50 18L46 18L46 20L50 20ZM20 22H48V18H20V22Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M36 20H44L47.43 68.0203C47.738 72.3323 44.3229 76 40 76C35.6771 76 32.262 72.3323 32.57 68.0203L36 20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20 20C20 11.1634 27.1634 4 36 4H48L48 6H54V4H60V20H54V18H48L48 20H20Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 20H44L47.43 68.0203C47.738 72.3323 44.3229 76 40 76C35.6771 76 32.262 72.3323 32.57 68.0203L36 20Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20 20C20 11.1634 27.1634 4 36 4H48L48 6H54V4H60V20H54V18H48L48 20H20Z"
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
            d="M36 2C26.0589 2 18 10.0589 18 20C18 21.1046 18.8954 22 20 22H33.852L30.5751 67.8778C30.1844 73.3475 34.5164 78 40 78C45.4836 78 49.8156 73.3475 49.4249 67.8778L46.148 22H48C48.5304 22 49.0391 21.7893 49.4142 21.4142C49.7893 21.0391 50 20.5304 50 20L52 20C52 21.1046 52.8954 22 54 22H60C61.1046 22 62 21.1046 62 20V4C62 2.89543 61.1046 2 60 2H54C52.8954 2 52 2.89543 52 4L50 4C50 3.46957 49.7893 2.96086 49.4142 2.58579C49.0391 2.21071 48.5304 2 48 2H36ZM42.1378 22H37.8622L34.5649 68.1628C34.3396 71.317 36.8377 74 40 74C43.1623 74 45.6604 71.317 45.4351 68.1628L42.1378 22ZM46 18C46 17.4696 46.2107 16.9609 46.5858 16.5858C46.9609 16.2107 47.4696 16 48 16H54C55.1046 16 56 16.8954 56 18H58V6H56C56 7.10457 55.1046 8 54 8H48C47.4696 8 46.9609 7.78929 46.5858 7.41421C46.2107 7.03914 46 6.53043 46 6L36 6C28.9471 6 23.1122 11.2154 22.1418 18L46 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHammer = forwardRef((props, ref) => {
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

CoreHammer.displayName = 'CoreHammer'

export default CoreHammer
