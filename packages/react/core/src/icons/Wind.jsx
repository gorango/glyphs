
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M14.5 39H54.3159C60.391 39 65.3158 43.9249 65.3158 50C65.3158 56.0751 60.391 61 54.3158 61H53.9583C48.0806 61 43.3158 56.2352 43.3158 50.3576V49.9843"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.5 33H44.9103C48.7763 33 51.9103 29.866 51.9103 26C51.9103 22.134 48.7763 19 44.9103 19H44.6827C40.9424 19 37.9103 22.0321 37.9103 25.7725V26.01"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18.5 45H30.9121C34.7781 45 37.9121 48.134 37.9121 52C37.9121 55.866 34.7781 59 30.9121 59H30.6846C26.9442 59 23.9121 55.9679 23.9121 52.2275V51.99"
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
            d="M23.8824 45H18"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 33L23 33"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43 39L14 39"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.4121 45H27.5117H30.4121C34.2781 45 37.4121 48.134 37.4121 52V52C37.4121 55.866 34.2781 59 30.4121 59H30.1846C26.4442 59 23.4121 55.9679 23.4121 52.2275V52.2275V52V51.99"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.4102 33H41.5098H44.4102C48.2761 33 51.4102 29.866 51.4102 26V26C51.4102 22.134 48.2761 19 44.4102 19H44.1826C40.4423 19 37.4102 22.0321 37.4102 25.7725V25.7725V26V26.01"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42.8159 39H49.2582H53.8159C59.8911 39 64.8159 43.9249 64.8159 50V50C64.8159 56.0751 59.8911 61 53.8159 61H53.4584C47.5807 61 42.8159 56.2352 42.8159 50.3576V50.3576V50V49.9843"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M23.8824 45H18"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38 33L23 33"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43 39L14 39"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.4121 45H27.5117H30.4121C34.2781 45 37.4121 48.134 37.4121 52V52C37.4121 55.866 34.2781 59 30.4121 59H30.1846C26.4442 59 23.4121 55.9679 23.4121 52.2275V52.2275V52V51.99"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.4102 33H41.5098H44.4102C48.2761 33 51.4102 29.866 51.4102 26V26C51.4102 22.134 48.2761 19 44.4102 19H44.1826C40.4423 19 37.4102 22.0321 37.4102 25.7725V25.7725V26V26.01"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42.8159 39H49.2582H53.8159C59.8911 39 64.8159 43.9249 64.8159 50V50C64.8159 56.0751 59.8911 61 53.8159 61H53.4584C47.5807 61 42.8159 56.2352 42.8159 50.3576V50.3576V50V49.9843"
            stroke="#56CCF2"
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
            d="M24.3824 45H18.5M38.5 33L23.5 33M43.5 39L14.5 39M23.9121 45H30.9121C34.7781 45 37.9121 48.134 37.9121 52C37.9121 55.866 34.7781 59 30.9121 59H30.6846C26.9442 59 23.9121 55.9679 23.9121 52.2275V51.99M37.9102 33H44.9102C48.7761 33 51.9102 29.866 51.9102 26C51.9102 22.134 48.7761 19 44.9102 19H44.6826C40.9423 19 37.9102 22.0321 37.9102 25.7725V26.01M43.3158 39H54.3159C60.391 39 65.3158 43.9249 65.3158 50C65.3158 56.0751 60.391 61 54.3158 61H53.9583C48.0806 61 43.3158 56.2352 43.3158 50.3576V49.9843"
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
            d="M23 31H44.4102C47.1716 31 49.4102 28.7614 49.4102 26C49.4102 23.2386 47.1716 21 44.4102 21H44.1826C41.5469 21 39.4102 23.1367 39.4102 25.7725V26.01C39.4102 27.1146 38.5147 28.01 37.4102 28.01C36.3056 28.01 35.4102 27.1146 35.4102 26.01V25.7725C35.4102 20.9276 39.3377 17 44.1826 17H44.4102C49.3807 17 53.4102 21.0294 53.4102 26C53.4102 30.9706 49.3807 35 44.4102 35H23C21.8954 35 21 34.1046 21 33C21 31.8954 21.8954 31 23 31Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18 47C16.8954 47 16 46.1046 16 45C16 43.8954 16.8954 43 18 43H30.4121C35.3827 43 39.4121 47.0294 39.4121 52C39.4121 56.9706 35.3827 61 30.4121 61H30.1846C25.3397 61 21.4121 57.0724 21.4121 52.2275V51.99C21.4121 50.8854 22.3075 49.99 23.4121 49.99C24.5167 49.99 25.4121 50.8854 25.4121 51.99V52.2275C25.4121 54.8633 27.5488 57 30.1846 57H30.4121C33.1735 57 35.4121 54.7614 35.4121 52C35.4121 49.2386 33.1735 47 30.4121 47H18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 39C12 37.8954 12.8954 37 14 37H53.8159C60.9956 37 66.8158 42.8203 66.8158 50C66.8158 57.1797 60.9956 63 53.8158 63H53.4583C46.4761 63 40.8158 57.3398 40.8158 50.3576V49.9843C40.8158 48.8797 41.7113 47.9843 42.8158 47.9843C43.9204 47.9843 44.8158 48.8797 44.8158 49.9843V50.3576C44.8158 55.1306 48.6852 59 53.4583 59H53.8158C58.7864 59 62.8158 54.9706 62.8158 50C62.8158 45.0294 58.7864 41 53.8159 41H14C12.8954 41 12 40.1046 12 39Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreWind = forwardRef((props, ref) => {
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

CoreWind.displayName = 'CoreWind'

export default CoreWind
