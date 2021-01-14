
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M43 54.5C43 58.366 38.9706 61.5 34 61.5C29.0294 61.5 25 58.366 25 54.5C25 50.634 29.0294 47.5 34 47.5C38.9706 47.5 43 50.634 43 54.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43 54.5L43 18.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43 18.5L49.4065 27.9881C52.973 33.2702 52.4044 40.3183 48.0373 44.9603L48 45"
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
            d="M43 54L43 18"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <ellipse cx="34" cy="54" rx="9" ry="7" fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
          <path
            d="M43 18L49.4065 27.4881C52.973 32.7702 52.4044 39.8183 48.0373 44.4603V44.4603L48 44.5"
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
            d="M43 54L43 18"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <ellipse cx="34" cy="54" rx="9" ry="7" fill="#EB5757" stroke="#EB5757" stroke-width="4" stroke-linejoin="round"/>
          <path
            d="M43 18L49.4065 27.4881C52.973 32.7702 52.4044 39.8183 48.0373 44.4603V44.4603L48 44.5"
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
            d="M43 54.5C43 58.366 38.9706 61.5 34 61.5C29.0294 61.5 25 58.366 25 54.5C25 50.634 29.0294 47.5 34 47.5C38.9706 47.5 43 50.634 43 54.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M43 54.5L43 18.5L49.4065 27.9881C52.973 33.2702 52.4044 40.3183 48.0373 44.9603L48 45M43 54.5C43 58.366 38.9706 61.5 34 61.5C29.0294 61.5 25 58.366 25 54.5C25 50.634 29.0294 47.5 34 47.5C38.9706 47.5 43 50.634 43 54.5Z"
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
            d="M42.0608 16.9328C42.2522 16.7808 42.4721 16.6631 42.7112 16.5891C42.9498 16.5151 43.1972 16.4877 43.4406 16.5046C44.0195 16.5438 44.5309 16.8293 44.8707 17.2573C44.9052 17.3008 44.938 17.3457 44.9689 17.392L51.4505 26.8323C55.6094 32.8896 54.9501 41.0334 49.871 46.3428L49.833 46.3825C49.0695 47.1806 47.8035 47.2087 47.0053 46.4452C46.2071 45.6816 46.1791 44.4156 46.9426 43.6174L46.9806 43.5777C50.7505 39.6369 51.2398 33.5923 48.1529 29.0964L45.3035 24.9463L45.3035 54.4999C45.3035 57.1868 43.8747 59.4805 41.8381 61.0383C39.8033 62.5946 37.0791 63.4999 34.1518 63.4999C31.2244 63.4999 28.5002 62.5946 26.4654 61.0383C24.4288 59.4805 23 57.1868 23 54.4999C23 51.8131 24.4288 49.5194 26.4654 47.9616C28.5002 46.4052 31.2244 45.4999 34.1518 45.4999C36.8298 45.4999 39.3378 46.2576 41.3035 47.5783L41.3035 18.5291C41.3028 18.4737 41.3043 18.4183 41.3081 18.3632C41.3472 17.7841 41.6328 17.2727 42.0608 16.9328ZM41.3035 54.4964V54.4999C41.3035 55.6791 40.6836 56.8854 39.408 57.8611C38.1304 58.8382 36.2788 59.4999 34.1518 59.4999C32.0248 59.4999 30.1731 58.8382 28.8956 57.8611C27.6199 56.8854 27 55.6791 27 54.4999C27 53.3208 27.6199 52.1145 28.8956 51.1388C30.1731 50.1616 32.0248 49.4999 34.1518 49.4999C36.2788 49.4999 38.1304 50.1616 39.408 51.1388C40.6823 52.1135 41.3023 53.3183 41.3035 54.4964Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMusicNote = forwardRef((props, ref) => {
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

CoreMusicNote.displayName = 'CoreMusicNote'

export default CoreMusicNote
