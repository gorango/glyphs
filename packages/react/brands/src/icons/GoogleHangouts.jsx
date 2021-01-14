
import React, { forwardRef } from 'react'
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
            fill="#0F9D58"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9911 17.5C52.4115 17.5 62.5 27.5707 62.5 39.9911C62.5 51.5001 53.6574 63.0692 39.9911 70V61.25C28.2247 61.25 17.5 51.7575 17.5 39.9911C17.5 27.5707 27.5707 17.5 39.9911 17.5ZM27.5 42.5V32.5H37.5V42.5C37.5 45.5 35.0822 47.5 32.5 47.5V42.5H27.5ZM42.5 42.5V32.5H52.5V42.5C52.5 45.5 50.0822 47.5 47.5 47.5V42.5H42.5Z"
            fill="white"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M27.5 32.5V42.5H32.5V47.5C35.0822 47.5 37.5 45.5 37.5 42.5V32.5H27.5Z"
            fill="currentColor"
          />
          <path
            d="M42.5 32.5V42.5H47.5V47.5C50.0822 47.5 52.5 45.5 52.5 42.5V32.5H42.5Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM62.5 39.9911C62.5 27.5707 52.4115 17.5 39.9911 17.5C27.5707 17.5 17.5 27.5707 17.5 39.9911C17.5 51.7575 28.2247 61.25 39.9911 61.25V70C53.6574 63.0692 62.5 51.5001 62.5 39.9911Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9911 17.5C52.4115 17.5 62.5 27.5707 62.5 39.9911C62.5 51.5001 53.6574 63.0692 39.9911 70V61.25C28.2247 61.25 17.5 51.7575 17.5 39.9911C17.5 27.5707 27.5707 17.5 39.9911 17.5ZM27.5 42.5V32.5H37.5V42.5C37.5 45.5 35.0822 47.5 32.5 47.5V42.5H27.5ZM42.5 42.5V32.5H52.5V42.5C52.5 45.5 50.0822 47.5 47.5 47.5V42.5H42.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsGoogleHangouts = forwardRef((props, ref) => {
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

BrandsGoogleHangouts.displayName = 'BrandsGoogleHangouts'

export default BrandsGoogleHangouts
