
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 50L24 30C24 22.268 30.268 16 38 16L42 16C49.732 16 56 22.268 56 30L56 50C56 57.732 49.732 64 42 64H38C30.268 64 24 57.732 24 50Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 63.999L46 53.999"
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
            d="M53.8787 66.1205C55.0503 67.2921 56.9497 67.2921 58.1213 66.1205C59.2929 64.949 59.2929 63.0495 58.1213 61.8779L53.8787 66.1205ZM48.1213 51.8779C46.9497 50.7063 45.0503 50.7063 43.8787 51.8779C42.7071 53.0495 42.7071 54.949 43.8787 56.1205L48.1213 51.8779ZM27 50L27 30H21L21 50H27ZM38 61C31.9249 61 27 56.0751 27 50H21C21 59.3888 28.6112 67 38 67V61ZM42 61H38V67H42V61ZM53 50C53 56.0751 48.0751 61 42 61V67C51.3888 67 59 59.3888 59 50H53ZM53 30L53 50H59L59 30H53ZM42 19C48.0751 19 53 23.9249 53 30H59C59 20.6112 51.3888 13 42 13V19ZM38 19H42V13L38 13V19ZM27 30C27 23.9249 31.9249 19 38 19V13C28.6112 13 21 20.6112 21 30H27ZM58.1213 61.8779L48.1213 51.8779L43.8787 56.1205L53.8787 66.1205L58.1213 61.8779Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M54.5858 65.4134C55.3668 66.1945 56.6332 66.1945 57.4142 65.4134C58.1953 64.6324 58.1953 63.366 57.4142 62.585L54.5858 65.4134ZM47.4142 52.585C46.6332 51.804 45.3668 51.804 44.5858 52.585C43.8047 53.3661 43.8047 54.6324 44.5858 55.4134L47.4142 52.585ZM26 50L26 30H22L22 50H26ZM38 62C31.3726 62 26 56.6274 26 50H22C22 58.8366 29.1634 66 38 66V62ZM42 62H38V66H42V62ZM54 50C54 56.6274 48.6274 62 42 62V66C50.8366 66 58 58.8366 58 50H54ZM54 30L54 50H58L58 30H54ZM42 18C48.6274 18 54 23.3726 54 30H58C58 21.1634 50.8366 14 42 14V18ZM38 18H42V14L38 14V18ZM26 30C26 23.3726 31.3726 18 38 18V14C29.1634 14 22 21.1634 22 30H26ZM57.4142 62.585L47.4142 52.585L44.5858 55.4134L54.5858 65.4134L57.4142 62.585Z"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M56 63.9992L46 53.9992M24 50V30C24 22.268 30.268 16 38 16H42C49.732 16 56 22.268 56 30V50C56 57.732 49.732 64 42 64H38C30.268 64 24 57.732 24 50Z"
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
            d="M51.8117 62.6394C49.1023 64.7457 45.6976 66 42 66H38C29.1634 66 22 58.8366 22 50L22 30C22 21.1634 29.1634 14 38 14L42 14C50.8366 14 58 21.1634 58 30L58 50C58 53.6972 56.746 57.1015 54.6401 59.8108L57.4142 62.585C58.1953 63.3661 58.1953 64.6324 57.4142 65.4134C56.6332 66.1945 55.3668 66.1945 54.5858 65.4134L51.8117 62.6394ZM26 30C26 23.3726 31.3726 18 38 18H42C48.6274 18 54 23.3726 54 30L54 50C54 52.5915 53.1785 54.9911 51.7818 56.9526L47.4142 52.585C46.6332 51.804 45.3668 51.804 44.5858 52.585C43.8047 53.3661 43.8047 54.6324 44.5858 55.4134L48.9535 59.7812C46.9918 61.1783 44.5919 62 42 62H38C31.3726 62 26 56.6274 26 50L26 30Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreQ = forwardRef((props, ref) => {
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

CoreQ.displayName = 'CoreQ'

export default CoreQ
