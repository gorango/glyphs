
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 64L24 16H24.8889L40 48L55.1111 16H56L56 64"
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
            d="M24 16V13C22.3431 13 21 14.3431 21 16H24ZM21 64C21 65.6569 22.3431 67 24 67C25.6569 67 27 65.6569 27 64H21ZM56 16H59C59 14.3431 57.6569 13 56 13V16ZM53 64C53 65.6569 54.3431 67 56 67C57.6569 67 59 65.6569 59 64H53ZM24.8889 16L27.6016 14.719C27.106 13.6695 26.0495 13 24.8889 13V16ZM40 48L37.2873 49.281C37.7829 50.3305 38.8394 51 40 51C41.1606 51 42.2171 50.3305 42.7127 49.281L40 48ZM55.1111 16V13C53.9505 13 52.894 13.6695 52.3984 14.719L55.1111 16ZM21 16L21 64H27L27 16H21ZM53 16L53 64H59L59 16H53ZM24 19H24.8889V13H24V19ZM22.1761 17.281L37.2873 49.281L42.7127 46.719L27.6016 14.719L22.1761 17.281ZM42.7127 49.281L57.8239 17.281L52.3984 14.719L37.2873 46.719L42.7127 49.281ZM55.1111 19L56 19V13H55.1111V19Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M24 16V14C22.8954 14 22 14.8954 22 16H24ZM22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64H22ZM56 16H58C58 14.8954 57.1046 14 56 14V16ZM54 64C54 65.1046 54.8954 66 56 66C57.1046 66 58 65.1046 58 64H54ZM24.8889 16L26.6974 15.146C26.367 14.4463 25.6626 14 24.8889 14V16ZM40 48L38.1915 48.854C38.5219 49.5537 39.2262 50 40 50C40.7738 50 41.4781 49.5537 41.8085 48.854L40 48ZM55.1111 16V14C54.3374 14 53.633 14.4463 53.3026 15.146L55.1111 16ZM22 16L22 64H26L26 16H22ZM54 16L54 64H58L58 16H54ZM24 18H24.8889V14H24V18ZM23.0804 16.854L38.1915 48.854L41.8085 47.146L26.6974 15.146L23.0804 16.854ZM41.8085 48.854L56.9196 16.854L53.3026 15.146L38.1915 47.146L41.8085 48.854ZM55.1111 18H56V14H55.1111V18Z"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 64V16H24.8889L40 48L55.1111 16H56V64"
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
            d="M22 16C22 14.8954 22.8954 14 24 14H24.8889C25.6626 14 26.367 14.4463 26.6974 15.146L40 43.3162L53.3026 15.146C53.633 14.4463 54.3374 14 55.1111 14H56C57.1046 14 58 14.8954 58 16L58 64C58 65.1046 57.1046 66 56 66C54.8954 66 54 65.1046 54 64L54 23.0367L41.8085 48.854C41.4781 49.5537 40.7738 50 40 50C39.2262 50 38.5219 49.5537 38.1915 48.854L26 23.0367L26 64C26 65.1046 25.1046 66 24 66C22.8954 66 22 65.1046 22 64L22 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreM = forwardRef((props, ref) => {
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

CoreM.displayName = 'CoreM'

export default CoreM
