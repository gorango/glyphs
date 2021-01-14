
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M30 10V70"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M70 30L10 30"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M70 50L10 50"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M10 14C10 11.7909 11.7909 10 14 10H66C68.2091 10 70 11.7909 70 14V66C70 68.2091 68.2091 70 66 70H14C11.7909 70 10 68.2091 10 66V14Z"
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
            d="M27.0469 14C27.0469 11.7909 25.256 10 23.0469 10H14C11.7909 10 10 11.7909 10 14V22C10 24.2091 11.7909 26 14 26H23.0469C25.256 26 27.0469 24.2091 27.0469 22V14Z"
            fill="currentColor"
          />
          <path
            d="M14 48C11.7909 48 10 46.2091 10 44V36C10 33.7909 11.7909 32 14 32H23.0469C25.256 32 27.0469 33.7909 27.0469 36V44C27.0469 46.2091 25.256 48 23.0469 48H14Z"
            fill="currentColor"
          />
          <path
            d="M14 54C11.7909 54 10 55.7909 10 58V66C10 68.2091 11.7909 70 14 70H23.0469C25.256 70 27.0469 68.2091 27.0469 66V58C27.0469 55.7909 25.256 54 23.0469 54H14Z"
            fill="currentColor"
          />
          <path
            d="M37.0469 54C34.8377 54 33.0469 55.7909 33.0469 58V66C33.0469 68.2091 34.8377 70 37.0469 70H66C68.2091 70 70 68.2091 70 66V58C70 55.7909 68.2091 54 66 54L37.0469 54Z"
            fill="currentColor"
          />
          <path
            d="M66 48C68.2091 48 70 46.2091 70 44V36C70 33.7909 68.2091 32 66 32L37.0469 32C34.8377 32 33.0469 33.7909 33.0469 36V44C33.0469 46.2091 34.8377 48 37.0469 48L66 48Z"
            fill="currentColor"
          />
          <path
            d="M70 14V22C70 24.2091 68.2091 26 66 26L37.0469 26C34.8377 26 33.0469 24.2091 33.0469 22V14C33.0469 11.7909 34.8377 10 37.0469 10H66C68.2091 10 70 11.7909 70 14Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M28 14C28 11.7909 26.2091 10 24 10H14C11.7909 10 10 11.7909 10 14V24C10 26.2091 11.7909 28 14 28H24C26.2091 28 28 26.2091 28 24V14Z"
            fill="#56CCF2"
          />
          <path
            d="M14 47.5C11.7909 47.5 10 45.7091 10 43.5V36C10 33.7909 11.7909 32 14 32H24C26.2091 32 28 33.7909 28 36V43.5C28 45.7091 26.2091 47.5 24 47.5H14Z"
            fill="#56CCF2"
          />
          <path
            d="M14 52.5C11.7909 52.5 10 54.2909 10 56.5V66C10 68.2091 11.7909 70 14 70H24C26.2091 70 28 68.2091 28 66V56.5C28 54.2909 26.2091 52.5 24 52.5H14Z"
            fill="#56CCF2"
          />
          <path
            d="M36 52.5C33.7909 52.5 32 54.2909 32 56.5V66C32 68.2091 33.7909 70 36 70H66C68.2091 70 70 68.2091 70 66V56.5C70 54.2909 68.2091 52.5 66 52.5L36 52.5Z"
            fill="#56CCF2"
          />
          <path
            d="M66 47.5C68.2091 47.5 70 45.7091 70 43.5V36C70 33.7909 68.2091 32 66 32L36 32C33.7909 32 32 33.7909 32 36V43.5C32 45.7091 33.7909 47.5 36 47.5L66 47.5Z"
            fill="#56CCF2"
          />
          <path
            d="M70 14V24C70 26.2091 68.2091 28 66 28L36 28C33.7909 28 32 26.2091 32 24V14C32 11.7909 33.7909 10 36 10H66C68.2091 10 70 11.7909 70 14Z"
            fill="#56CCF2"
          />
          <path
            d="M28 14C28 11.7909 26.2091 10 24 10H14C11.7909 10 10 11.7909 10 14V24C10 26.2091 11.7909 28 14 28H24C26.2091 28 28 26.2091 28 24V14Z"
            fill="#2F80ED"
          />
          <path
            d="M14 47.5C11.7909 47.5 10 45.7091 10 43.5V36C10 33.7909 11.7909 32 14 32H24C26.2091 32 28 33.7909 28 36V43.5C28 45.7091 26.2091 47.5 24 47.5H14Z"
            fill="#2F80ED"
          />
          <path
            d="M14 52.5C11.7909 52.5 10 54.2909 10 56.5V66C10 68.2091 11.7909 70 14 70H24C26.2091 70 28 68.2091 28 66V56.5C28 54.2909 26.2091 52.5 24 52.5H14Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M10 14C10 11.7909 11.7909 10 14 10H66C68.2091 10 70 11.7909 70 14V66C70 68.2091 68.2091 70 66 70H14C11.7909 70 10 68.2091 10 66V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 10V70M70 30L10 30M70 50L10 50M14 70H66C68.2091 70 70 68.2091 70 66V14C70 11.7909 68.2091 10 66 10H14C11.7909 10 10 11.7909 10 14V66C10 68.2091 11.7909 70 14 70Z"
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
            d="M14 8C10.6863 8 8 10.6863 8 14V66C8 69.3137 10.6863 72 14 72H66C69.3137 72 72 69.3137 72 66V14C72 10.6863 69.3137 8 66 8H14ZM68 48V32L32 32V48L68 48ZM32 52L68 52V66C68 67.1046 67.1046 68 66 68H32V52ZM28 48V32H12V48H28ZM12 52H28V68H14C12.8954 68 12 67.1046 12 66V52ZM12 28H28V12H14C12.8954 12 12 12.8954 12 14V28ZM32 28L68 28V14C68 12.8954 67.1046 12 66 12H32V28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGridList = forwardRef((props, ref) => {
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

CoreGridList.displayName = 'CoreGridList'

export default CoreGridList
