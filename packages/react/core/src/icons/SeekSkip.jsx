
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5888 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5888 40 61.6481 40 60L40 20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
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
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5889 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5889 40 61.6481 40 60L40 20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
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
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5889 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5889 40 61.6481 40 60L40 20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
            fill="#9B51E0"
            stroke="#9B51E0"
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
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5888 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5888 40 61.6481 40 60V20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.8667 38.4C38.9333 39.2 38.9333 40.8 37.8667 41.6L11.2 61.6C9.88153 62.5888 8 61.6481 8 60L8 20C8 18.3519 9.88153 17.4111 11.2 18.4L37.8667 38.4Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M69.8667 38.4C70.9333 39.2 70.9333 40.8 69.8667 41.6L43.2 61.6C41.8815 62.5888 40 61.6481 40 60V20C40 18.3519 41.8815 17.4111 43.2 18.4L69.8667 38.4Z"
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
            d="M12.4 16.7999C9.76306 14.8222 6 16.7038 6 19.9999L6 59.9999C6 63.2961 9.76306 65.1776 12.4 63.1999L38 43.9999V59.9999C38 63.2961 41.7631 65.1776 44.4 63.1999L71.0667 43.1999C73.2 41.5999 73.2 38.3999 71.0667 36.7999L44.4 16.7999C41.7631 14.8222 38 16.7038 38 19.9999V35.9999L12.4 16.7999ZM10 19.9999L36.6667 39.9999L10 59.9999L10 19.9999ZM42 19.9999L68.6667 39.9999L42 59.9999V19.9999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSeekSkip = forwardRef((props, ref) => {
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

CoreSeekSkip.displayName = 'CoreSeekSkip'

export default CoreSeekSkip
