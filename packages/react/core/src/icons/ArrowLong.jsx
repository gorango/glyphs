
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M47.7575 27.9995L32.2428 27.9995C30.6772 27.9995 29.8931 26.1066 31.0002 24.9995L37.8789 18.1209C39.0504 16.9493 40.9499 16.9493 42.1215 18.1209L49.0002 24.9995C50.1073 26.1066 49.3232 27.9995 47.7575 27.9995Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.9985 28L39.9985 64.0003"
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
            d="M42.9989 28C42.9989 26.3431 41.6558 25 39.9989 25C38.3421 25 36.9989 26.3431 36.9989 28H42.9989ZM36.9989 64.0003C36.9989 65.6571 38.3421 67.0003 39.9989 67.0003C41.6558 67.0003 42.9989 65.6571 42.9989 64.0003H36.9989ZM36.9989 28V64.0003H42.9989V28H36.9989Z"
            fill="currentColor"
          />
          <path
            d="M47.7579 28L32.2431 28C30.6775 28 29.8934 26.1071 31.0005 25L37.8792 18.1213C39.0507 16.9497 40.9502 16.9497 42.1218 18.1213L49.0005 25C50.1076 26.1071 49.3235 28 47.7579 28Z"
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
            d="M41.9989 28C41.9989 26.8954 41.1035 26 39.9989 26C38.8944 26 37.9989 26.8954 37.9989 28H41.9989ZM37.9989 64.0003C37.9989 65.1049 38.8944 66.0003 39.9989 66.0003C41.1035 66.0003 41.9989 65.1049 41.9989 64.0003H37.9989ZM37.9989 28V64.0003H41.9989V28H37.9989Z"
            fill="#56CCF2"
          />
          <path
            d="M47.7579 28L32.2431 28C30.6775 28 29.8934 26.1071 31.0005 25L37.8792 18.1213C39.0507 16.9497 40.9502 16.9497 42.1218 18.1213L49.0005 25C50.1076 26.1071 49.3235 28 47.7579 28Z"
            fill="#2F80ED"
            stroke="#2F80ED"
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
            d="M47.7575 28H32.2428C30.6772 28 29.8931 26.1071 31.0002 25L37.8789 18.1214C39.0504 16.9498 40.9499 16.9498 42.1215 18.1214L49.0002 25C50.1073 26.1071 49.3232 28 47.7575 28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.9986 28V64.0003M32.2428 28H47.7575C49.3232 28 50.1073 26.1071 49.0002 25L42.1215 18.1214C40.9499 16.9498 39.0504 16.9498 37.8789 18.1214L31.0002 25C29.8931 26.1071 30.6772 28 32.2428 28Z"
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
            d="M42.4983 30.0855L47.7572 30.0855C51.5501 30.0855 53.4496 25.4997 50.7676 22.8177L43.8889 15.939C41.741 13.7912 38.2586 13.7912 36.1107 15.939L29.232 22.8177C26.5501 25.4997 28.4495 30.0855 32.2425 30.0855H37.4983L37.4983 63.5858C37.4983 64.9665 38.6176 66.0858 39.9983 66.0858C41.379 66.0858 42.4983 64.9665 42.4983 63.5858L42.4983 30.0855ZM39.6463 19.4746C39.8415 19.2793 40.1581 19.2793 40.3534 19.4746L45.9643 25.0855L34.0354 25.0855L39.6463 19.4746Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowLong = forwardRef((props, ref) => {
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

CoreArrowLong.displayName = 'CoreArrowLong'

export default CoreArrowLong
