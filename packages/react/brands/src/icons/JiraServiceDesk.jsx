
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.3616 32.644L64.5288 32.718C65.6579 32.7232 66.6873 33.3608 67.1891 34.3657C67.6909 35.3706 67.5791 36.5708 66.9003 37.4672L38.6098 74.9988C34.3385 71.8296 31.5095 67.104 30.7456 61.8621C29.9816 56.6202 31.3453 51.2916 34.5365 47.0487L45.3616 32.644Z"
            fill="url(#paint0_linearsdq0)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.527 47.0499L15.4714 46.9298C14.3423 46.9245 13.3128 46.2869 12.811 45.282C12.3092 44.2771 12.421 43.0769 13.0999 42.1806L41.1113 5C45.3827 8.16929 48.2116 12.8948 48.9756 18.1367C49.7395 23.3786 48.3759 28.7073 45.1847 32.9501L34.527 47.0499Z"
            fill="#2684FF"
          />
          <defs><linearGradient id="paint0_linearsdq0" x1="44.5989" y1="35.4551" x2="54.7811" y2="58.7301" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.3612 32.644L64.5284 32.718C65.6575 32.7232 66.687 33.3608 67.1888 34.3657C67.6906 35.3706 67.5788 36.5708 66.8999 37.4672L38.6095 74.9988C34.3381 71.8296 31.5092 67.104 30.7452 61.8621C29.9813 56.6202 31.3449 51.2916 34.5361 47.0487L45.3612 32.644Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.527 47.0499L15.4714 46.9298C14.3423 46.9245 13.3128 46.2869 12.811 45.282C12.3092 44.2771 12.421 43.0769 13.0999 42.1806L41.1113 5C45.3827 8.16929 48.2117 12.8948 48.9756 18.1367C49.7395 23.3786 48.3759 28.7073 45.1847 32.9501L34.527 47.0499Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.3612 32.644L64.5284 32.718C65.6575 32.7232 66.687 33.3608 67.1888 34.3657C67.6906 35.3706 67.5788 36.5708 66.8999 37.4672L38.6095 74.9988C34.3381 71.8296 31.5092 67.104 30.7452 61.8621C29.9813 56.6202 31.3449 51.2916 34.5361 47.0487L45.3612 32.644Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.527 47.0499L15.4714 46.9298C14.3423 46.9245 13.3128 46.2869 12.811 45.282C12.3092 44.2771 12.421 43.0769 13.0999 42.1806L41.1113 5C45.3827 8.16929 48.2117 12.8948 48.9756 18.1367C49.7395 23.3786 48.3759 28.7073 45.1847 32.9501L34.527 47.0499Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsJiraServiceDesk = forwardRef((props, ref) => {
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

BrandsJiraServiceDesk.displayName = 'BrandsJiraServiceDesk'

export default BrandsJiraServiceDesk
