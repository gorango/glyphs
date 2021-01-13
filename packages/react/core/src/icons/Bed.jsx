
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M4 61V19"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M4 53H76"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53V61"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M75.5 53C75.7761 53 76 52.7761 76 52.5V45C76 36.1634 68.8366 29 60 29H34C32.8954 29 32 29.8954 32 31V52.5C32 52.7761 32.2239 53 32.5 53"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14.7859 35C16.9295 33.7624 19.5705 33.7624 21.7141 35C23.8577 36.2376 25.1782 38.5248 25.1782 41C25.1782 43.4752 23.8577 45.7624 21.7141 47C19.5705 48.2376 16.9295 48.2376 14.7859 47C12.6423 45.7624 11.3218 43.4752 11.3218 41C11.3218 38.5248 12.6423 36.2376 14.7859 35Z"
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
            d="M32.5 53H75.5C75.7761 53 76 52.7761 76 52.5V45C76 36.1634 68.8366 29 60 29H34C32.8954 29 32 29.8954 32 31V52.5C32 52.7761 32.2239 53 32.5 53Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M4 19V53.186V61"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53H4"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53V61"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14.7859 35C16.9295 33.7624 19.5705 33.7624 21.7141 35C23.8577 36.2376 25.1782 38.5248 25.1782 41C25.1782 43.4752 23.8577 45.7624 21.7141 47C19.5705 48.2376 16.9295 48.2376 14.7859 47C12.6423 45.7624 11.3218 43.4752 11.3218 41C11.3218 38.5248 12.6423 36.2376 14.7859 35Z"
            fill="currentColor"
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
            d="M32.5 53H75.5C75.7761 53 76 52.7761 76 52.5V45C76 36.1634 68.8366 29 60 29H34C32.8954 29 32 29.8954 32 31V52.5C32 52.7761 32.2239 53 32.5 53Z"
            fill="#2F80ED"
          />
          <path
            d="M4 19V53.186V61"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53H4"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M76 53V61"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14.7859 35C16.9295 33.7624 19.5705 33.7624 21.7141 35C23.8577 36.2376 25.1782 38.5248 25.1782 41C25.1782 43.4752 23.8577 45.7624 21.7141 47C19.5705 48.2376 16.9295 48.2376 14.7859 47C12.6423 45.7624 11.3218 43.4752 11.3218 41C11.3218 38.5248 12.6423 36.2376 14.7859 35Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M32.5 53H75.5C75.7761 53 76 52.7761 76 52.5V45C76 36.1634 68.8366 29 60 29H34C32.8954 29 32 29.8954 32 31V52.5C32 52.7761 32.2239 53 32.5 53Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14.7859 35C16.9295 33.7624 19.5705 33.7624 21.7141 35C23.8577 36.2376 25.1782 38.5248 25.1782 41C25.1782 43.4752 23.8577 45.7624 21.7141 47C19.5705 48.2376 16.9295 48.2376 14.7859 47C12.6423 45.7624 11.3218 43.4752 11.3218 41C11.3218 38.5248 12.6423 36.2376 14.7859 35Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M4 61V19M4 53H76V61M75.5 53H32.5C32.2239 53 32 52.7761 32 52.5V31C32 29.8954 32.8954 29 34 29H60C68.8366 29 76 36.1634 76 45V52.5C76 52.7761 75.7761 53 75.5 53ZM11.3218 41C11.3218 38.5248 12.6423 36.2376 14.7859 35C16.9295 33.7624 19.5705 33.7624 21.7141 35C23.8577 36.2376 25.1782 38.5248 25.1782 41C25.1782 43.4752 23.8577 45.7624 21.7141 47C19.5705 48.2376 16.9295 48.2376 14.7859 47C12.6423 45.7624 11.3218 43.4752 11.3218 41Z"
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
            d="M4 17C5.10457 17 6 17.8954 6 19V51H30V31C30 28.7909 31.7909 27 34 27H60C69.9411 27 78 35.0589 78 45V52.5C78 52.5892 77.9953 52.6773 77.9862 52.764C77.9953 52.8414 78 52.9202 78 53V61C78 62.1046 77.1046 63 76 63C74.8954 63 74 62.1046 74 61V55H6V61C6 62.1046 5.10457 63 4 63C2.89543 63 2 62.1046 2 61V19C2 17.8954 2.89543 17 4 17ZM74 51H34V31H60C67.732 31 74 37.268 74 45V51Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.7141 33.2679C19.9517 31.6731 16.5483 31.6731 13.7859 33.2679C11.0235 34.8628 9.3218 37.8103 9.3218 41C9.3218 44.1897 11.0235 47.1372 13.7859 48.7321C16.5483 50.3269 19.9517 50.3269 22.7141 48.7321C25.4765 47.1372 27.1782 44.1897 27.1782 41C27.1782 37.8103 25.4765 34.8628 22.7141 33.2679ZM15.7859 36.7321C17.3107 35.8517 19.1893 35.8517 20.7141 36.7321C22.2389 37.6124 23.1782 39.2393 23.1782 41C23.1782 42.7607 22.2389 44.3876 20.7141 45.2679C19.1893 46.1483 17.3107 46.1483 15.7859 45.2679C14.2611 44.3876 13.3218 42.7607 13.3218 41C13.3218 39.2393 14.2611 37.6124 15.7859 36.7321Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBed = forwardRef((props, ref) => {
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

CoreBed.displayName = 'CoreBed'

export default CoreBed
