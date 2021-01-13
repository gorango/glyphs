
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M28 23.9355L10.8409 39.1881C10.3934 39.5859 10.3934 40.2852 10.8409 40.683L28 55.9355"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 23.9355L69.1592 39.1881C69.6067 39.5859 69.6067 40.2852 69.1592 40.683L52 55.9355"
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
            d="M28 23.9355L10.8408 39.1881C10.3933 39.5859 10.3933 40.2852 10.8408 40.683L28 55.9355"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 23.9355L69.1592 39.1881C69.6067 39.5859 69.6067 40.2852 69.1592 40.683L52 55.9355"
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
            d="M28 23.9355L10.8408 39.1881C10.3933 39.5859 10.3933 40.2852 10.8408 40.683L28 55.9355"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 23.9355L69.1592 39.1881C69.6067 39.5859 69.6067 40.2852 69.1592 40.683L52 55.9355"
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
            d="M28 23.9355L10.8409 39.1881C10.3934 39.5859 10.3934 40.2852 10.8409 40.683L28 55.9355M52 23.9355L69.1592 39.1881C69.6067 39.5859 69.6067 40.2852 69.1592 40.683L52 55.9355"
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
            d="M29.3289 25.4304C30.1545 24.6966 30.2288 23.4324 29.495 22.6068C28.7612 21.7813 27.497 21.7069 26.6714 22.4407L9.51228 37.6933C8.16974 38.8867 8.16973 40.9844 9.51228 42.1778L26.6714 57.4304C27.497 58.1642 28.7612 58.0899 29.495 57.2643C30.2288 56.4387 30.1545 55.1746 29.3289 54.4408L13.0106 39.9356L29.3289 25.4304Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.6713 25.4304C49.8457 24.6966 49.7714 23.4324 50.5052 22.6068C51.239 21.7813 52.5032 21.7069 53.3287 22.4407L70.4879 37.6933C71.8305 38.8867 71.8305 40.9844 70.4879 42.1778L53.3287 57.4304C52.5032 58.1642 51.239 58.0899 50.5052 57.2643C49.7714 56.4387 49.8457 55.1746 50.6713 54.4408L66.9896 39.9356L50.6713 25.4304Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCode1 = forwardRef((props, ref) => {
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

CoreCode1.displayName = 'CoreCode1'

export default CoreCode1
