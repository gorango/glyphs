
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M36.75 20.5C36.75 18.1528 34.8472 16.25 32.5 16.25C30.1528 16.25 28.25 18.1528 28.25 20.5V45.125C28.25 45.5259 27.73 45.6833 27.5077 45.3498L24.0362 40.1425C22.7342 38.1895 20.0955 37.6618 18.1425 38.9638C16.1895 40.2658 15.6618 42.9045 16.9637 44.8575L30.9637 65.8575C31.752 67.0398 33.079 67.75 34.5 67.75H56.5C58.5701 67.75 60.3391 66.2585 60.6889 64.2181L63.6889 46.7181C63.7296 46.4809 63.75 46.2407 63.75 46V38.5C63.75 36.1528 61.8472 34.25 59.5 34.25C57.1528 34.25 55.25 36.1528 55.25 38.5V39.25C55.25 39.3881 55.1381 39.5 55 39.5C54.8619 39.5 54.75 39.3881 54.75 39.25V36.5C54.75 34.1528 52.8472 32.25 50.5 32.25C48.1528 32.25 46.25 34.1528 46.25 36.5V39.25C46.25 39.3881 46.1381 39.5 46 39.5C45.8619 39.5 45.75 39.3881 45.75 39.25V34.5C45.75 32.1528 43.8472 30.25 41.5 30.25C39.1528 30.25 37.25 32.1528 37.25 34.5V39.25C37.25 39.3881 37.1381 39.5 37 39.5C36.8619 39.5 36.75 39.3881 36.75 39.25V20.5Z"
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
            d="M36.75 20.5C36.75 18.1528 34.8472 16.25 32.5 16.25C30.1528 16.25 28.25 18.1528 28.25 20.5V39.125V45.125C28.25 45.5259 27.73 45.6833 27.5077 45.3498L24.0362 40.1425C22.7342 38.1895 20.0955 37.6618 18.1425 38.9638C16.1895 40.2658 15.6618 42.9045 16.9637 44.8575L30.9637 65.8575C31.752 67.0398 33.079 67.75 34.5 67.75H56.5C58.5701 67.75 60.3391 66.2585 60.6889 64.2181L63.6889 46.7181C63.7296 46.4809 63.75 46.2407 63.75 46V38.5C63.75 36.1528 61.8472 34.25 59.5 34.25C57.1528 34.25 55.25 36.1528 55.25 38.5V39.25C55.25 39.3881 55.1381 39.5 55 39.5C54.8619 39.5 54.75 39.3881 54.75 39.25V39.125V36.5C54.75 34.1528 52.8472 32.25 50.5 32.25C48.1528 32.25 46.25 34.1528 46.25 36.5V39.125V39.25C46.25 39.3881 46.1381 39.5 46 39.5C45.8619 39.5 45.75 39.3881 45.75 39.25V39.125V34.5C45.75 32.1528 43.8472 30.25 41.5 30.25C39.1528 30.25 37.25 32.1528 37.25 34.5V39.125V39.25C37.25 39.3881 37.1381 39.5 37 39.5C36.8619 39.5 36.75 39.3881 36.75 39.25V39.125V20.5Z"
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
            d="M36.75 20.5C36.75 18.1528 34.8472 16.25 32.5 16.25C30.1528 16.25 28.25 18.1528 28.25 20.5V39.125V45.125C28.25 45.5259 27.73 45.6833 27.5077 45.3498L24.0362 40.1425C22.7342 38.1895 20.0955 37.6618 18.1425 38.9638C16.1895 40.2658 15.6618 42.9045 16.9637 44.8575L30.9637 65.8575C31.752 67.0398 33.079 67.75 34.5 67.75H56.5C58.5701 67.75 60.3391 66.2585 60.6889 64.2181L63.6889 46.7181C63.7296 46.4809 63.75 46.2407 63.75 46V38.5C63.75 36.1528 61.8472 34.25 59.5 34.25C57.1528 34.25 55.25 36.1528 55.25 38.5V39.25C55.25 39.3881 55.1381 39.5 55 39.5C54.8619 39.5 54.75 39.3881 54.75 39.25V39.125V36.5C54.75 34.1528 52.8472 32.25 50.5 32.25C48.1528 32.25 46.25 34.1528 46.25 36.5V39.125V39.25C46.25 39.3881 46.1381 39.5 46 39.5C45.8619 39.5 45.75 39.3881 45.75 39.25V39.125V34.5C45.75 32.1528 43.8472 30.25 41.5 30.25C39.1528 30.25 37.25 32.1528 37.25 34.5V39.125V39.25C37.25 39.3881 37.1381 39.5 37 39.5C36.8619 39.5 36.75 39.3881 36.75 39.25V39.125V20.5Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M36.75 20.5C36.75 18.1528 34.8472 16.25 32.5 16.25C30.1528 16.25 28.25 18.1528 28.25 20.5V45.125C28.25 45.5259 27.73 45.6833 27.5077 45.3498L24.0362 40.1425C22.7342 38.1895 20.0955 37.6618 18.1425 38.9638C16.1895 40.2658 15.6618 42.9045 16.9637 44.8575L30.9637 65.8575C31.752 67.0398 33.079 67.75 34.5 67.75H56.5C58.5701 67.75 60.3391 66.2585 60.6889 64.2181L63.6889 46.7181C63.7296 46.4809 63.75 46.2407 63.75 46V38.5C63.75 36.1528 61.8472 34.25 59.5 34.25C57.1528 34.25 55.25 36.1528 55.25 38.5V39.25C55.25 39.3881 55.1381 39.5 55 39.5C54.8619 39.5 54.75 39.3881 54.75 39.25V36.5C54.75 34.1528 52.8472 32.25 50.5 32.25C48.1528 32.25 46.25 34.1528 46.25 36.5V39.25C46.25 39.3881 46.1381 39.5 46 39.5C45.8619 39.5 45.75 39.3881 45.75 39.25V34.5C45.75 32.1528 43.8472 30.25 41.5 30.25C39.1528 30.25 37.25 32.1528 37.25 34.5V39.25C37.25 39.3881 37.1381 39.5 37 39.5C36.8619 39.5 36.75 39.3881 36.75 39.25V20.5Z"
            fill="currentColor"
            fill-opacity="0.25"
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
            d="M26.2502 20.5C26.2502 17.0482 29.0484 14.25 32.5002 14.25C35.952 14.25 38.7502 17.0482 38.7502 20.5V28.8859C39.5801 28.4787 40.5134 28.25 41.5002 28.25C43.8152 28.25 45.8363 29.5086 46.9164 31.379C47.9311 30.6675 49.1669 30.25 50.5002 30.25C52.8152 30.25 54.8363 31.5086 55.9164 33.379C56.9311 32.6675 58.1669 32.25 59.5002 32.25C62.952 32.25 65.7502 35.0482 65.7502 38.5V46C65.7502 46.3539 65.7202 46.7072 65.6604 47.056L62.6603 64.556C62.1459 67.5566 59.5445 69.75 56.5002 69.75H34.5002C32.4105 69.75 30.459 68.7056 29.2999 66.9669L15.2999 45.9669C13.3852 43.0948 14.1612 39.2144 17.0333 37.2997C19.9054 35.385 23.7858 36.1611 25.7005 39.0331L26.2502 39.8577V20.5ZM32.5002 18.25C31.2576 18.25 30.2502 19.2574 30.2502 20.5V45.125C30.2502 47.5047 27.1638 48.4392 25.8438 46.4592L22.3723 41.2519C21.683 40.218 20.286 39.9386 19.2521 40.6279C18.2182 41.3172 17.9388 42.7141 18.6281 43.7481L32.6281 64.7481C33.0454 65.374 33.7479 65.75 34.5002 65.75H56.5002C57.5961 65.75 58.5326 64.9604 58.7178 63.8802L61.7179 46.3802C61.7394 46.2546 61.7502 46.1274 61.7502 46V38.5C61.7502 37.2574 60.7429 36.25 59.5002 36.25C58.2576 36.25 57.2502 37.2574 57.2502 38.5V39.25C57.2502 40.4926 56.2429 41.5 55.0002 41.5C53.7576 41.5 52.7502 40.4926 52.7502 39.25V36.5C52.7502 35.2574 51.7429 34.25 50.5002 34.25C49.2576 34.25 48.2502 35.2574 48.2502 36.5V39.25C48.2502 40.4926 47.2429 41.5 46.0002 41.5C44.7576 41.5 43.7502 40.4926 43.7502 39.25V34.5C43.7502 33.2574 42.7429 32.25 41.5002 32.25C40.2576 32.25 39.2502 33.2574 39.2502 34.5V39.25C39.2502 40.4926 38.2429 41.5 37.0002 41.5C35.7576 41.5 34.7502 40.4926 34.7502 39.25V20.5C34.7502 19.2574 33.7429 18.25 32.5002 18.25Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHandIndex = forwardRef((props, ref) => {
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

CoreHandIndex.displayName = 'CoreHandIndex'

export default CoreHandIndex