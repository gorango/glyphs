
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 70.4479C57.9493 70.4479 72.5 56.3565 72.5 38.9739C72.5 21.5914 57.9493 7.5 40 7.5C22.0507 7.5 7.5 21.5914 7.5 38.9739C7.5 48.428 11.8042 56.9085 18.6184 62.6778V69.047C18.6184 71.5363 21.154 73.2059 23.4147 72.2052L30.4825 69.0768C33.4926 69.9682 36.6885 70.4479 40 70.4479Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M32.2175 32.2833L22.7931 45.1724C21.7826 46.5543 23.5998 48.2145 24.9833 47.1733L33.0307 41.1172C33.8498 40.5007 34.9981 40.4924 35.8267 41.0969L42.9838 46.318C44.3564 47.3193 46.318 47.0313 47.3174 45.6818L57.2012 32.3352C58.2263 30.951 56.3951 29.2774 55.0095 30.3321L46.5016 36.809C45.6823 37.4327 44.528 37.4442 43.6955 36.8369L36.5616 31.6328C35.1833 30.6273 33.2126 30.9224 32.2175 32.2833Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linear" x1="40" y1="7.5" x2="29.5716" y2="72.1458" gradientUnits="userSpaceOnUse"><stop stop-color="#00B1FF"/><stop offset="1" stop-color="#006BFF"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M72.5 38.9739C72.5 56.3565 57.9493 70.4479 40 70.4479C36.6885 70.4479 33.4926 69.9682 30.4825 69.0768L23.4147 72.2052C21.154 73.2059 18.6184 71.5363 18.6184 69.047V62.6778C11.8042 56.9085 7.5 48.428 7.5 38.9739C7.5 21.5914 22.0507 7.5 40 7.5C57.9493 7.5 72.5 21.5914 72.5 38.9739ZM22.7931 45.1724L32.2175 32.2833C33.2126 30.9224 35.1833 30.6273 36.5616 31.6328L43.6955 36.8369C44.528 37.4442 45.6823 37.4327 46.5016 36.809L55.0095 30.3321C56.3951 29.2774 58.2263 30.951 57.2012 32.3352L47.3174 45.6818C46.318 47.0313 44.3564 47.3193 42.9838 46.318L35.8267 41.0969C34.9981 40.4924 33.8498 40.5007 33.0307 41.1172L24.9833 47.1733C23.5998 48.2145 21.7826 46.5543 22.7931 45.1724Z"
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
            d="M40 70.4479C57.9493 70.4479 72.5 56.3565 72.5 38.9739C72.5 21.5914 57.9493 7.5 40 7.5C22.0507 7.5 7.5 21.5914 7.5 38.9739C7.5 48.428 11.8042 56.9085 18.6184 62.6778V69.047C18.6184 71.5363 21.154 73.2059 23.4147 72.2052L30.4825 69.0768C33.4926 69.9682 36.6885 70.4479 40 70.4479Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.2175 32.2833L22.7931 45.1724C21.7826 46.5543 23.5998 48.2145 24.9833 47.1733L33.0307 41.1172C33.8498 40.5007 34.9981 40.4924 35.8267 41.0969L42.9838 46.318C44.3564 47.3193 46.318 47.0313 47.3174 45.6818L57.2012 32.3352C58.2263 30.951 56.3951 29.2774 55.0095 30.3321L46.5016 36.809C45.6823 37.4327 44.5279 37.4442 43.6955 36.8369L36.5616 31.6328C35.1833 30.6273 33.2126 30.9224 32.2175 32.2833Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsFbMessenger = forwardRef((props, ref) => {
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

BrandsFbMessenger.displayName = 'BrandsFbMessenger'

export default BrandsFbMessenger
