
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 33.9995L37.8787 20.1209C39.0503 18.9493 40.9497 18.9493 42.1213 20.1209L56 33.9995"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 19.2412V33.979M40 34.0003L40 57.0003"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 65H56"
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
            d="M43 19.241C43 17.5841 41.6569 16.241 40 16.241C38.3431 16.241 37 17.5841 37 19.241H43ZM37 33.9787C37 35.6356 38.3431 36.9787 40 36.9787C41.6569 36.9787 43 35.6356 43 33.9787H37ZM43 34.0001C43 32.3432 41.6569 31.0001 40 31.0001C38.3431 31.0001 37 32.3432 37 34.0001H43ZM37 57.0001C37 58.6569 38.3431 60.0001 40 60.0001C41.6569 60.0001 43 58.6569 43 57.0001H37ZM37 19.241V33.9787H43V19.241H37ZM37 34.0001V57.0001H43V34.0001H37Z"
            fill="currentColor"
          />
          <path
            d="M56 34L42.1213 20.1213C40.9497 18.9497 39.0503 18.9497 37.8787 20.1213L24 34"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 65H56"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M42 19.241C42 18.1364 41.1046 17.241 40 17.241C38.8954 17.241 38 18.1364 38 19.241H42ZM38 33.9787C38 35.0833 38.8954 35.9787 40 35.9787C41.1046 35.9787 42 35.0833 42 33.9787H38ZM42 34.0001C42 32.8955 41.1046 32.0001 40 32.0001C38.8954 32.0001 38 32.8955 38 34.0001H42ZM38 57.0001C38 58.1046 38.8954 59.0001 40 59.0001C41.1046 59.0001 42 58.1046 42 57.0001H38ZM38 19.241V33.9787H42V19.241H38ZM38 34.0001V57.0001H42V34.0001H38Z"
            fill="#56CCF2"
          />
          <path
            d="M56 34L42.1213 20.1213C40.9497 18.9497 39.0503 18.9497 37.8787 20.1213L24 34"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 65H56"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M40 19.2407V33.9785M40 33.9998V56.9998M24 33.9998L37.8787 20.1211C39.0503 18.9496 40.9497 18.9496 42.1213 20.1211L56 33.9998M24 64.9998H56"
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
            d="M40 14.8267C40.043 14.8267 40.0857 14.8277 40.1281 14.8299C41.4927 14.8615 42.8477 15.398 43.8891 16.4393L57.7678 30.318C58.7441 31.2943 58.7441 32.8772 57.7678 33.8535C56.7915 34.8298 55.2085 34.8298 54.2322 33.8535L42.5 22.1213V32.0644L42.5 32.0751L42.5 32.0858L42.5 55.0858C42.5 56.4665 41.3807 57.5858 40 57.5858C38.6193 57.5858 37.5 56.4665 37.5 55.0858L37.5 32.0858L37.5 32.0751L37.5 32.0644V22.1213L25.7678 33.8535C24.7915 34.8298 23.2085 34.8298 22.2322 33.8535C21.2559 32.8772 21.2559 31.2943 22.2322 30.318L36.1109 16.4393C37.1523 15.3979 38.5073 14.8615 39.8719 14.8299C39.9143 14.8277 39.957 14.8267 40 14.8267Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 60.5859C22.6193 60.5859 21.5 61.7052 21.5 63.0859C21.5 64.4667 22.6193 65.5859 24 65.5859H56C57.3807 65.5859 58.5 64.4667 58.5 63.0859C58.5 61.7052 57.3807 60.5859 56 60.5859L24 60.5859Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowLineStart = forwardRef((props, ref) => {
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

CoreArrowLineStart.displayName = 'CoreArrowLineStart'

export default CoreArrowLineStart
