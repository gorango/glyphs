
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
            d="M22.2776 36.9965C22.2779 31.738 25.0834 26.879 29.6375 24.2497C31.9141 22.9353 34.4547 22.2779 36.9955 22.2776"
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
            d="M13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724ZM52.0887 55.9828L64.6608 68.5548C65.8324 69.7264 67.7318 69.7264 68.9034 68.5548C70.075 67.3833 70.075 65.4838 68.9034 64.3122L56.288 51.6967C55.0707 53.2939 53.6597 54.7338 52.0887 55.9828ZM36.9951 19.2776C33.9372 19.278 30.878 20.0694 28.1375 21.6516C22.6553 24.8168 19.278 30.6661 19.2776 36.9964C19.2776 38.6532 20.6206 39.9965 22.2775 39.9966C23.9343 39.9966 25.2776 38.6536 25.2776 36.9967C25.2779 32.8099 27.5116 28.9412 31.1375 26.8477C32.9502 25.8012 34.9724 25.2779 36.9959 25.2776C38.6528 25.2774 39.9957 23.9341 39.9955 22.2772C39.9953 20.6204 38.652 19.2774 36.9951 19.2776Z"
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
            d="M52.8618 55.3415L65.3679 67.8477C66.149 68.6287 67.4153 68.6287 68.1964 67.8477C68.9774 67.0666 68.9774 65.8003 68.1964 65.0192L55.6614 52.4843C54.8083 53.5123 53.8718 54.468 52.8618 55.3415Z"
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
            d="M20.2776 36.9965C20.2775 38.101 21.1729 38.9965 22.2775 38.9966C23.3821 38.9966 24.2775 38.1012 24.2776 36.9967L20.2776 36.9965ZM29.6375 24.2497L30.6375 25.9817V25.9817L29.6375 24.2497ZM36.9957 24.2776C38.1003 24.2774 38.9956 23.3819 38.9955 22.2773C38.9953 21.1727 38.0998 20.2774 36.9952 20.2776L36.9957 24.2776ZM24.2776 36.9967C24.2778 32.4526 26.7022 28.2538 30.6375 25.9817L28.6375 22.5176C23.4646 25.5042 20.2779 31.0234 20.2776 36.9965L24.2776 36.9967ZM36.9952 20.2776C34.1097 20.2779 31.2233 21.0247 28.6375 22.5176L30.6375 25.9817C32.6048 24.8459 34.7998 24.2779 36.9957 24.2776L36.9952 20.2776Z"
            fill="#F2F2F2"
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
            d="M66.7821 66.4335L54.3199 53.9714M22.2776 36.9966C22.2779 31.738 25.0834 26.8789 29.6375 24.2496C31.9141 22.9352 34.4548 22.2779 36.9955 22.2776M19.8536 54.1464C13.7277 48.0206 11.3353 39.092 13.5775 30.724C15.8197 22.3559 22.3559 15.8197 30.724 13.5775C39.092 11.3353 48.0206 13.7277 54.1464 19.8536C60.2723 25.9794 62.6647 34.908 60.4225 43.276C58.1802 51.6441 51.6441 58.1802 43.276 60.4225C34.908 62.6647 25.9794 60.2723 19.8536 54.1464Z"
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
            d="M36.9953 20.2776C34.1098 20.278 31.2234 21.0247 28.6376 22.5177C23.4647 25.5042 20.278 31.0234 20.2777 36.9965C20.2776 38.1011 21.173 38.9965 22.2776 38.9966C23.3821 38.9967 24.2776 38.1013 24.2777 36.9967C24.2779 32.4526 26.7023 28.2538 30.6376 25.9818C32.6049 24.8459 34.7999 24.2779 36.9958 24.2776C38.1004 24.2775 38.9957 23.382 38.9956 22.2774C38.9954 21.1728 38.0999 20.2775 36.9953 20.2776Z"
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

const CoreSearch1Tint = forwardRef((props, ref) => {
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

CoreSearch1Tint.displayName = 'CoreSearch1Tint'

export default CoreSearch1Tint