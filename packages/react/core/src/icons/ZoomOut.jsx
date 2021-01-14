
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M66.782 66.4336L54.3198 53.9714"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49 37H25"
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
            d="M13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724ZM52.0887 55.9828L64.6608 68.5548C65.8324 69.7264 67.7318 69.7264 68.9034 68.5548C70.075 67.3833 70.075 65.4838 68.9034 64.3122L56.288 51.6967C55.0707 53.2939 53.6597 54.7338 52.0887 55.9828ZM25 34C23.3432 34 22 35.3431 22 37C22 38.6569 23.3432 40 25 40H49C50.6569 40 52 38.6569 52 37C52 35.3431 50.6569 34 49 34H25Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M65.3678 67.8478C66.1488 68.6288 67.4151 68.6288 68.1962 67.8478C68.9772 67.0667 68.9772 65.8004 68.1962 65.0194L65.3678 67.8478ZM55.734 52.5572C54.953 51.7762 53.6867 51.7762 52.9056 52.5572C52.1246 53.3383 52.1246 54.6046 52.9056 55.3856L55.734 52.5572ZM68.1962 65.0194L55.734 52.5572L52.9056 55.3856L65.3678 67.8478L68.1962 65.0194Z"
            fill="#F2994A"
          />
          <path
            d="M13.5776 30.724C15.8198 22.3559 22.356 15.8197 30.7241 13.5775C39.0921 11.3353 48.0207 13.7277 54.1465 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1803 51.6441 51.6441 58.1802 43.2761 60.4225C34.9081 62.6647 25.9795 60.2723 19.8537 54.1464C13.7278 48.0206 11.3354 39.092 13.5776 30.724Z"
            fill="#56CCF2"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25 37L35.9091 37L38.0909 37L49 37"
            stroke="#F2F2F2"
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
            d="M13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M66.7821 66.4335L54.3199 53.9714M49 37H25M19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464Z"
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
            d="M25.0001 35C23.8955 35 23.0001 35.8955 23.0001 37C23.0001 38.1046 23.8955 39 25.0001 39H49.0001C50.1046 39 51.0001 38.1046 51.0001 37C51.0001 35.8955 50.1046 35 49.0001 35H25.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.6457 30.2064C14.0729 21.1482 21.1482 14.0729 30.2064 11.6457C39.2646 9.21859 48.9296 11.8083 55.5607 18.4394C62.1918 25.0705 64.7815 34.7355 62.3543 43.7937C61.3415 47.5737 59.5192 51.0084 57.0812 53.9042L68.1964 65.0193C68.9774 65.8004 68.9774 67.0667 68.1964 67.8478C67.4153 68.6288 66.149 68.6288 65.3679 67.8478L54.2793 56.7592C51.3069 59.359 47.7383 61.2974 43.7937 62.3544C34.7355 64.7815 25.0705 62.1918 18.4394 55.5607C11.8083 48.9296 9.21859 39.2646 11.6457 30.2064ZM31.2416 15.5094C23.5638 17.5667 17.5667 23.5638 15.5094 31.2417C13.4522 38.9195 15.6472 47.1117 21.2678 52.7323C26.8884 58.3528 35.0806 60.5479 42.7584 58.4907C50.4363 56.4334 56.4334 50.4363 58.4906 42.7584C60.5479 35.0806 58.3528 26.8884 52.7323 21.2678C47.1117 15.6472 38.9195 13.4522 31.2416 15.5094Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreZoomOut = forwardRef((props, ref) => {
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

CoreZoomOut.displayName = 'CoreZoomOut'

export default CoreZoomOut