
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40 21L40 34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.818 20.9995H34.182C33.0078 20.9995 32.4197 19.5799 33.25 18.7495L37.8787 14.1209C39.0503 12.9493 40.9498 12.9493 42.1213 14.1209L46.75 18.7495C47.5803 19.5799 46.9923 20.9995 45.818 20.9995Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 59L40 46"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.818 59H34.182C33.0078 59 32.4197 60.4197 33.25 61.25L37.8787 65.8787C39.0503 67.0503 40.9498 67.0503 42.1213 65.8787L46.75 61.25C47.5803 60.4197 46.9923 59 45.818 59Z"
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
            d="M43 21C43 19.3431 41.6569 18 40 18C38.3431 18 37 19.3431 37 21H43ZM37 34C37 35.6569 38.3431 37 40 37C41.6569 37 43 35.6569 43 34H37ZM37 21L37 34H43L43 21H37Z"
            fill="currentColor"
          />
          <path
            d="M45.818 21L34.182 21C33.0078 21 32.4197 19.5803 33.25 18.75L37.8787 14.1213C39.0503 12.9497 40.9497 12.9497 42.1213 14.1213L46.75 18.75C47.5803 19.5803 46.9923 21 45.818 21Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43 59C43 60.6569 41.6569 62 40 62C38.3431 62 37 60.6569 37 59H43ZM37 46C37 44.3431 38.3431 43 40 43C41.6569 43 43 44.3431 43 46H37ZM37 59L37 46H43L43 59H37Z"
            fill="currentColor"
          />
          <path
            d="M45.818 59L34.182 59C33.0078 59 32.4197 60.4197 33.25 61.25L37.8787 65.8787C39.0503 67.0503 40.9497 67.0503 42.1213 65.8787L46.75 61.25C47.5803 60.4197 46.9923 59 45.818 59Z"
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
            d="M42 21C42 19.8954 41.1046 19 40 19C38.8954 19 38 19.8954 38 21H42ZM38 34C38 35.1046 38.8954 36 40 36C41.1046 36 42 35.1046 42 34H38ZM38 21L38 34H42L42 21H38Z"
            fill="#56CCF2"
          />
          <path
            d="M45.818 21L34.182 21C33.0078 21 32.4197 19.5803 33.25 18.75L37.8787 14.1213C39.0503 12.9497 40.9497 12.9497 42.1213 14.1213L46.75 18.75C47.5803 19.5803 46.9923 21 45.818 21Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42 59C42 60.1046 41.1046 61 40 61C38.8954 61 38 60.1046 38 59H42ZM38 46C38 44.8954 38.8954 44 40 44C41.1046 44 42 44.8954 42 46H38ZM38 59L38 46H42L42 59H38Z"
            fill="#56CCF2"
          />
          <path
            d="M45.818 59L34.182 59C33.0078 59 32.4197 60.4197 33.25 61.25L37.8787 65.8787C39.0503 67.0503 40.9497 67.0503 42.1213 65.8787L46.75 61.25C47.5803 60.4197 46.9923 59 45.818 59Z"
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
            d="M45.818 21H34.182C33.0078 21 32.4197 19.5803 33.25 18.75L37.8787 14.1214C39.0503 12.9498 40.9498 12.9498 42.1213 14.1214L46.75 18.75C47.5803 19.5803 46.9923 21 45.818 21Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M45.818 59H34.182C33.0078 59 32.4197 60.4197 33.25 61.25L37.8787 65.8787C39.0503 67.0503 40.9498 67.0503 42.1213 65.8787L46.75 61.25C47.5803 60.4197 46.9923 59 45.818 59Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 21L40 34M40 59L40 46M34.182 21H45.818C46.9923 21 47.5803 19.5803 46.75 18.75L42.1213 14.1214C40.9498 12.9498 39.0503 12.9498 37.8787 14.1214L33.25 18.75C32.4197 19.5803 33.0078 21 34.182 21ZM34.182 59H45.818C46.9923 59 47.5803 60.4197 46.75 61.25L42.1213 65.8787C40.9498 67.0503 39.0503 67.0503 37.8787 65.8787L33.25 61.25C32.4197 60.4197 33.0078 59 34.182 59Z"
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
            d="M37.5001 23.5H34.1821C30.7806 23.5 29.0772 19.3875 31.4824 16.9823L36.1111 12.3536C38.2589 10.2057 41.7413 10.2057 43.8892 12.3536L48.5179 16.9823C50.9231 19.3875 49.2197 23.5 45.8182 23.5H42.5001L42.5001 34C42.5001 35.3807 41.3809 36.5 40.0001 36.5C38.6194 36.5 37.5001 35.3807 37.5001 34L37.5001 23.5ZM39.6466 15.8891C39.8418 15.6939 40.1584 15.6939 40.3537 15.8891L42.9646 18.5H37.0357L39.6466 15.8891Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.5001 56.5H45.8182C49.2197 56.5 50.9231 60.6126 48.5179 63.0178L43.8892 67.6465C41.7413 69.7944 38.2589 69.7944 36.1111 67.6465L31.4824 63.0178C29.0772 60.6126 30.7806 56.5 34.1821 56.5H37.5001L37.5001 46C37.5001 44.6193 38.6194 43.5 40.0001 43.5C41.3809 43.5 42.5001 44.6193 42.5001 46L42.5001 56.5ZM37.0357 61.5L39.6466 64.1109C39.8418 64.3062 40.1584 64.3062 40.3537 64.1109L42.9646 61.5H37.0357Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowsExpandDuo = forwardRef((props, ref) => {
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

CoreArrowsExpandDuo.displayName = 'CoreArrowsExpandDuo'

export default CoreArrowsExpandDuo
