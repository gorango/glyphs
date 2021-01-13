
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M62 53H26.9616L14.8462 8H7"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.5385 43.9998H65.4615L73 15.9998H17"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.402 61.5001C30.0097 60.5719 31.9905 60.5719 33.5982 61.5001C35.2059 62.4283 36.1963 64.1437 36.1963 66.0001C36.1963 67.8565 35.2059 69.5719 33.5982 70.5001C31.9905 71.4283 30.0097 71.4283 28.402 70.5001C26.7943 69.5719 25.804 67.8565 25.804 66.0001C25.804 64.1437 26.7943 62.4283 28.402 61.5001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54.402 61.5001C56.0097 60.5719 57.9905 60.5719 59.5982 61.5001C61.2059 62.4283 62.1963 64.1437 62.1963 66.0001C62.1963 67.8565 61.2059 69.5719 59.5982 70.5001C57.9905 71.4283 56.0097 71.4283 54.402 70.5001C52.7943 69.5719 51.804 67.8565 51.804 66.0001C51.804 64.1437 52.7943 62.4283 54.402 61.5001Z"
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
            d="M66.2585 41.0397L71.6431 21.0396C72.3274 18.4981 70.4127 15.9998 67.7806 15.9998H22.2194C19.5873 15.9998 17.6726 18.4981 18.3569 21.0396L23.7415 41.0396C24.2117 42.7861 25.7953 43.9998 27.604 43.9998H62.396C64.2047 43.9998 65.7883 42.7861 66.2585 41.0397Z"
            fill="currentColor"
          />
          <path
            d="M7 8H14.8462L26.9616 53H62"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.4019 61.5C30.0096 60.5718 31.9904 60.5718 33.5981 61.5C35.2058 62.4282 36.1962 64.1436 36.1962 66C36.1962 67.8564 35.2058 69.5718 33.5981 70.5C31.9904 71.4282 30.0096 71.4282 28.4019 70.5C26.7942 69.5718 25.8038 67.8564 25.8038 66C25.8038 64.1436 26.7942 62.4282 28.4019 61.5Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54.4019 61.5C56.0096 60.5718 57.9904 60.5718 59.5981 61.5C61.2058 62.4282 62.1962 64.1436 62.1962 66C62.1962 67.8564 61.2058 69.5718 59.5981 70.5C57.9904 71.4282 56.0096 71.4282 54.4019 70.5C52.7942 69.5718 51.8038 67.8564 51.8038 66C51.8038 64.1436 52.7942 62.4282 54.4019 61.5Z"
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
            d="M65.4615 43.9998L73 15.9998H17L24.5385 43.9998H65.4615Z"
            fill="#56CCF2"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M7 8H14.8462L26.9616 53H62"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.4019 61.5C30.0096 60.5718 31.9904 60.5718 33.5981 61.5C35.2058 62.4282 36.1962 64.1436 36.1962 66C36.1962 67.8564 35.2058 69.5718 33.5981 70.5C31.9904 71.4282 30.0096 71.4282 28.4019 70.5C26.7942 69.5718 25.8038 67.8564 25.8038 66C25.8038 64.1436 26.7942 62.4282 28.4019 61.5Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54.4019 61.5C56.0096 60.5718 57.9904 60.5718 59.5981 61.5C61.2058 62.4282 62.1962 64.1436 62.1962 66C62.1962 67.8564 61.2058 69.5718 59.5981 70.5C57.9904 71.4282 56.0096 71.4282 54.4019 70.5C52.7942 69.5718 51.8038 67.8564 51.8038 66C51.8038 64.1436 52.7942 62.4282 54.4019 61.5Z"
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
            d="M65.4615 43.9998L73 15.9998H17L24.5385 43.9998H65.4615Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.4019 61.5C30.0096 60.5718 31.9904 60.5718 33.5981 61.5C35.2058 62.4282 36.1962 64.1436 36.1962 66C36.1962 67.8564 35.2058 69.5718 33.5981 70.5C31.9904 71.4282 30.0096 71.4282 28.4019 70.5C26.7942 69.5718 25.8038 67.8564 25.8038 66C25.8038 64.1436 26.7942 62.4282 28.4019 61.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M54.4019 61.5C56.0096 60.5718 57.9904 60.5718 59.5981 61.5C61.2058 62.4282 62.1962 64.1436 62.1962 66C62.1962 67.8564 61.2058 69.5718 59.5981 70.5C57.9904 71.4282 56.0096 71.4282 54.4019 70.5C52.7942 69.5718 51.8038 67.8564 51.8038 66C51.8038 64.1436 52.7942 62.4282 54.4019 61.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M7 8H14.8462L26.9616 53H62M73 15.9998L65.4615 43.9998H24.5385L17 15.9998H73ZM25.8038 66C25.8038 64.1436 26.7942 62.4282 28.4019 61.5C30.0096 60.5718 31.9904 60.5718 33.5981 61.5C35.2058 62.4282 36.1962 64.1436 36.1962 66C36.1962 67.8564 35.2058 69.5718 33.5981 70.5C31.9904 71.4282 30.0096 71.4282 28.4019 70.5C26.7942 69.5718 25.8038 67.8564 25.8038 66ZM51.8038 66C51.8038 64.1436 52.7942 62.4282 54.4019 61.5C56.0096 60.5718 57.9904 60.5718 59.5981 61.5C61.2058 62.4282 62.1962 64.1436 62.1962 66C62.1962 67.8564 61.2058 69.5718 59.5981 70.5C57.9904 71.4282 56.0096 71.4282 54.4019 70.5C52.7942 69.5718 51.8038 67.8564 51.8038 66Z"
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
            d="M7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10H13.3134L25.0303 53.5199C25.2654 54.3932 26.0572 55 26.9616 55H62C63.1046 55 64 54.1046 64 53C64 51.8954 63.1046 51 62 51H28.4943L27.1481 45.9998H65.4615C66.3659 45.9998 67.1577 45.3929 67.3928 44.5197L74.9312 16.5197C75.093 15.9189 74.9659 15.277 74.5874 14.7832C74.209 14.2893 73.6222 13.9998 73 13.9998H18.5327L16.7774 7.48005C16.5423 6.60682 15.7505 6 14.8462 6H7ZM19.6097 17.9998L26.0712 41.9998H63.9288L70.3903 17.9998H19.6097Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.4019 59.7679C29.6284 58.4825 32.3716 58.4825 34.5981 59.7679C36.8246 61.0534 38.1962 63.4291 38.1962 66C38.1962 68.5709 36.8246 70.9466 34.5981 72.232C32.3716 73.5175 29.6284 73.5175 27.4019 72.232C25.1754 70.9466 23.8038 68.5709 23.8038 66C23.8038 63.4291 25.1754 61.0534 27.4019 59.7679ZM32.5981 63.2321C31.6092 62.6611 30.3908 62.6611 29.4019 63.2321C28.413 63.803 27.8038 64.8581 27.8038 66C27.8038 67.1419 28.413 68.197 29.4019 68.7679C30.3908 69.3389 31.6092 69.3389 32.5981 68.7679C33.587 68.197 34.1962 67.1419 34.1962 66C34.1962 64.8581 33.587 63.803 32.5981 63.2321Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.5981 59.7679C58.3716 58.4825 55.6284 58.4825 53.4019 59.7679C51.1754 61.0534 49.8038 63.4291 49.8038 66C49.8038 68.5709 51.1754 70.9466 53.4019 72.232C55.6284 73.5175 58.3716 73.5175 60.5981 72.232C62.8246 70.9466 64.1962 68.5709 64.1962 66C64.1962 63.4291 62.8246 61.0534 60.5981 59.7679ZM55.4019 63.2321C56.3908 62.6611 57.6092 62.6611 58.5981 63.2321C59.587 63.803 60.1962 64.8581 60.1962 66C60.1962 67.1419 59.587 68.197 58.5981 68.7679C57.6092 69.3389 56.3908 69.3389 55.4019 68.7679C54.413 68.197 53.8038 67.1419 53.8038 66C53.8038 64.8581 54.413 63.803 55.4019 63.2321Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreShoppingCart1 = forwardRef((props, ref) => {
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

CoreShoppingCart1.displayName = 'CoreShoppingCart1'

export default CoreShoppingCart1
