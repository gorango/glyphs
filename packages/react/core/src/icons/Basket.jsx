
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M12.0449 34.3362C12.0212 34.1583 12.1596 34.0001 12.3392 34.0001L67.794 34C67.9031 34.0001 67.9873 34.0962 67.9728 34.2044L64.8101 57.9253C64.3464 61.4029 61.3799 64.0001 57.8715 64.0001H22.1287C18.6203 64.0001 15.6538 61.4029 15.1901 57.9253L12.0449 34.3362Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 16L12 34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50 16L68 34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.2188 42.9126V54.9126"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.2188 42.9126V54.9126"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.2188 42.9126V54.9126"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.2188 42.9126V54.9126"
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
            d="M31.7678 14.2322C32.7441 15.2085 32.7441 16.7915 31.7678 17.7678L18.0354 31.5001L61.9645 31.5L48.2322 17.7678C47.2559 16.7915 47.2559 15.2085 48.2322 14.2322C49.2085 13.2559 50.7915 13.2559 51.7678 14.2322L69.7678 32.2322C70.3663 32.8308 70.5979 33.6574 70.4625 34.4324C70.4593 34.4664 70.4554 34.5006 70.4508 34.5348L67.2881 58.2557C66.6588 62.9753 62.6328 66.5001 57.8714 66.5001H22.1286C17.3672 66.5001 13.3412 62.9753 12.7119 58.2557L9.56675 34.6667C9.55904 34.6089 9.55316 34.5513 9.54903 34.4941C9.39002 33.7015 9.61775 32.8467 10.2322 32.2322L28.2322 14.2322C29.2085 13.2559 30.7915 13.2559 31.7678 14.2322ZM27.7188 42.9126C27.7188 41.5319 26.5995 40.4126 25.2188 40.4126C23.838 40.4126 22.7188 41.5319 22.7188 42.9126V54.9126C22.7188 56.2933 23.838 57.4126 25.2188 57.4126C26.5995 57.4126 27.7188 56.2933 27.7188 54.9126V42.9126ZM35.2188 40.4126C36.5995 40.4126 37.7188 41.5319 37.7188 42.9126V54.9126C37.7188 56.2933 36.5995 57.4126 35.2188 57.4126C33.838 57.4126 32.7188 56.2933 32.7188 54.9126V42.9126C32.7188 41.5319 33.838 40.4126 35.2188 40.4126ZM47.7188 42.9126C47.7188 41.5319 46.5995 40.4126 45.2188 40.4126C43.838 40.4126 42.7188 41.5319 42.7188 42.9126V54.9126C42.7188 56.2933 43.838 57.4126 45.2188 57.4126C46.5995 57.4126 47.7188 56.2933 47.7188 54.9126V42.9126ZM55.2188 40.4126C56.5995 40.4126 57.7188 41.5319 57.7188 42.9126V54.9126C57.7188 56.2933 56.5995 57.4126 55.2188 57.4126C53.838 57.4126 52.7188 56.2933 52.7188 54.9126V42.9126C52.7188 41.5319 53.838 40.4126 55.2188 40.4126Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M12.0448 34.3362C12.0211 34.1583 12.1595 34.0001 12.3391 34.0001L67.7939 34C67.9031 34.0001 67.9872 34.0962 67.9728 34.2044L64.81 57.9253C64.3463 61.4029 61.3798 64.0001 57.8714 64.0001H22.1286C18.6202 64.0001 15.6537 61.4029 15.19 57.9253L12.0448 34.3362Z"
            fill="#56CCF2"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 16L12 34"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50 16L68 34"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.2188 42.9126V54.9126"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.2188 42.9126V54.9126"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.2188 42.9126V54.9126"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.2188 42.9126V54.9126"
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
            d="M12.0448 34.3362C12.0211 34.1583 12.1595 34.0001 12.3391 34.0001L67.7939 34C67.9031 34.0001 67.9872 34.0962 67.9728 34.2044L64.81 57.9253C64.3463 61.4029 61.3798 64.0001 57.8714 64.0001H22.1286C18.6202 64.0001 15.6537 61.4029 15.19 57.9253L12.0448 34.3362Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 16L12 34M50 16L68 34M25.2188 42.9126V54.9126M35.2188 42.9126V54.9126M45.2188 42.9126V54.9126M55.2188 42.9126V54.9126M12.3391 34.0001L67.7939 34C67.9031 34.0001 67.9872 34.0962 67.9728 34.2044L64.81 57.9253C64.3463 61.4029 61.3798 64.0001 57.8714 64.0001H22.1286C18.6202 64.0001 15.6537 61.4029 15.19 57.9253L12.0448 34.3362C12.0211 34.1583 12.1595 34.0001 12.3391 34.0001Z"
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
            d="M25.2188 40.9126C26.3233 40.9126 27.2188 41.808 27.2188 42.9126V54.9126C27.2188 56.0172 26.3233 56.9126 25.2188 56.9126C24.1142 56.9126 23.2188 56.0172 23.2188 54.9126V42.9126C23.2188 41.808 24.1142 40.9126 25.2188 40.9126Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.2188 42.9126C37.2188 41.808 36.3233 40.9126 35.2188 40.9126C34.1142 40.9126 33.2188 41.808 33.2188 42.9126V54.9126C33.2188 56.0172 34.1142 56.9126 35.2188 56.9126C36.3233 56.9126 37.2188 56.0172 37.2188 54.9126V42.9126Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.2188 40.9126C46.3233 40.9126 47.2188 41.808 47.2188 42.9126V54.9126C47.2188 56.0172 46.3233 56.9126 45.2188 56.9126C44.1142 56.9126 43.2188 56.0172 43.2188 54.9126V42.9126C43.2188 41.808 44.1142 40.9126 45.2188 40.9126Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M57.2188 42.9126C57.2188 41.808 56.3233 40.9126 55.2188 40.9126C54.1142 40.9126 53.2188 41.808 53.2188 42.9126V54.9126C53.2188 56.0172 54.1142 56.9126 55.2188 56.9126C56.3233 56.9126 57.2188 56.0172 57.2188 54.9126V42.9126Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.4142 14.5858C32.1953 15.3668 32.1953 16.6332 31.4142 17.4142L16.8283 32.0001L63.1716 32L48.5858 17.4142C47.8047 16.6332 47.8047 15.3668 48.5858 14.5858C49.3668 13.8047 50.6332 13.8047 51.4142 14.5858L69.4142 32.5858C69.898 33.0696 70.0821 33.7396 69.9666 34.3651C69.9636 34.3995 69.9598 34.4341 69.9552 34.4687L66.7924 58.1896C66.1963 62.6609 62.3822 66.0001 57.8714 66.0001H22.1286C17.6178 66.0001 13.8037 62.6609 13.2076 58.1896L10.0624 34.6006C10.0546 34.5422 10.049 34.484 10.0457 34.4262C9.90616 33.7835 10.0862 33.0854 10.5858 32.5858L28.5858 14.5858C29.3668 13.8047 30.6332 13.8047 31.4142 14.5858ZM14.2844 36.0001L17.1725 57.6609C17.5037 60.145 19.6226 62.0001 22.1286 62.0001H57.8714C60.3774 62.0001 62.4963 60.145 62.8275 57.6609L65.7157 36L14.2844 36.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBasket = forwardRef((props, ref) => {
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

CoreBasket.displayName = 'CoreBasket'

export default CoreBasket
