
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M8 40.0833C8 39.0708 8.82081 38.25 9.83333 38.25H50.1667C51.1792 38.25 52 39.0708 52 40.0833V66.4167C52 67.4292 51.1792 68.25 50.1667 68.25H9.83333C8.82081 68.25 8 67.4292 8 66.4167V40.0833Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 56.25C28.6568 57.9068 31.3431 57.9068 33 56.25C34.6568 54.5931 34.6568 51.9068 33 50.25C31.3431 48.5931 28.6568 48.5931 27 50.25C25.3431 51.9068 25.3431 54.5931 27 56.25Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43.5 38.25V26.75C43.5 19.2942 49.5442 13.25 57 13.25C64.4558 13.25 70.5 19.2942 70.5 26.75V35.25"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.83333 38.5C8.82081 38.5 8 39.3208 8 40.3333L8 66.6667C8 67.6792 8.82081 68.5 9.83333 68.5H50.1667C51.1792 68.5 52 67.6792 52 66.6667L52 40.3333C52 39.3208 51.1792 38.5 50.1667 38.5L9.83333 38.5ZM33 56.5C31.3431 58.1569 28.6569 58.1569 27 56.5C25.3431 54.8431 25.3431 52.1569 27 50.5C28.6569 48.8431 31.3431 48.8431 33 50.5C34.6569 52.1569 34.6569 54.8431 33 56.5Z"
            fill="currentColor"
          />
          <path
            d="M27 56.5L27.7071 55.7929L27.7071 55.7929L27 56.5ZM33 56.5L32.2929 55.7929V55.7929L33 56.5ZM27 50.5L27.7071 51.2071H27.7071L27 50.5ZM9 40.3333C9 39.8731 9.3731 39.5 9.83333 39.5V37.5C8.26853 37.5 7 38.7685 7 40.3333H9ZM9 66.6667L9 40.3333H7L7 66.6667H9ZM9.83333 67.5C9.3731 67.5 9 67.1269 9 66.6667H7C7 68.2315 8.26853 69.5 9.83333 69.5V67.5ZM50.1667 67.5H9.83333V69.5H50.1667V67.5ZM51 66.6667C51 67.1269 50.6269 67.5 50.1667 67.5V69.5C51.7315 69.5 53 68.2315 53 66.6667H51ZM51 40.3333L51 66.6667H53L53 40.3333H51ZM50.1667 39.5C50.6269 39.5 51 39.8731 51 40.3333H53C53 38.7685 51.7315 37.5 50.1667 37.5V39.5ZM9.83333 39.5L50.1667 39.5V37.5L9.83333 37.5V39.5ZM26.2929 57.2071C28.3403 59.2545 31.6597 59.2545 33.7071 57.2071L32.2929 55.7929C31.0266 57.0592 28.9734 57.0592 27.7071 55.7929L26.2929 57.2071ZM26.2929 49.7929C24.2455 51.8403 24.2455 55.1597 26.2929 57.2071L27.7071 55.7929C26.4408 54.5266 26.4408 52.4734 27.7071 51.2071L26.2929 49.7929ZM33.7071 49.7929C31.6597 47.7455 28.3403 47.7455 26.2929 49.7929L27.7071 51.2071C28.9734 49.9408 31.0266 49.9408 32.2929 51.2071L33.7071 49.7929ZM33.7071 57.2071C35.7545 55.1597 35.7545 51.8403 33.7071 49.7929L32.2929 51.2071C33.5592 52.4734 33.5592 54.5266 32.2929 55.7929L33.7071 57.2071Z"
            fill="currentColor"
          />
          <path
            d="M40.5 38.5C40.5 40.1569 41.8431 41.5 43.5 41.5C45.1569 41.5 46.5 40.1569 46.5 38.5H40.5ZM67.5 35.5C67.5 37.1569 68.8431 38.5 70.5 38.5C72.1569 38.5 73.5 37.1569 73.5 35.5H67.5ZM46.5 38.5L46.5 27H40.5L40.5 38.5H46.5ZM67.5 27V35.5H73.5V27L67.5 27ZM57 16.5C62.799 16.5 67.5 21.201 67.5 27L73.5 27C73.5 17.8873 66.1127 10.5 57 10.5V16.5ZM57 10.5C47.8873 10.5 40.5 17.8873 40.5 27H46.5C46.5 21.201 51.201 16.5 57 16.5V10.5Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.83333 38.25C8.82081 38.25 8 39.0708 8 40.0833L8 66.4167C8 67.4292 8.82081 68.25 9.83333 68.25H50.1667C51.1792 68.25 52 67.4292 52 66.4167L52 40.0833C52 39.0708 51.1792 38.25 50.1667 38.25L9.83333 38.25ZM33 56.25C31.3431 57.9069 28.6569 57.9069 27 56.25C25.3431 54.5931 25.3431 51.9069 27 50.25C28.6569 48.5931 31.3431 48.5931 33 50.25C34.6569 51.9069 34.6569 54.5931 33 56.25Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57 11.25C48.4396 11.25 41.5 18.1896 41.5 26.75L41.5 38.25H45.5L45.5 26.75C45.5 20.3987 50.6487 15.25 57 15.25C63.3513 15.25 68.5 20.3987 68.5 26.75V35.25C68.5 36.3546 69.3954 37.25 70.5 37.25C71.6046 37.25 72.5 36.3546 72.5 35.25V26.75C72.5 18.1896 65.5604 11.25 57 11.25Z"
            fill="#828282"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.83333 38.25C8.82081 38.25 8 39.0708 8 40.0833V66.4167C8 67.4292 8.82081 68.25 9.83333 68.25H50.1667C51.1792 68.25 52 67.4292 52 66.4167V40.0833C52 39.0708 51.1792 38.25 50.1667 38.25H9.83333ZM33 56.25C31.3431 57.9069 28.6569 57.9069 27 56.25C25.3431 54.5931 25.3431 51.9069 27 50.25C28.6569 48.5931 31.3431 48.5931 33 50.25C34.6569 51.9069 34.6569 54.5931 33 56.25Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M43.5 38.25V26.75C43.5 19.2942 49.5442 13.25 57 13.25C64.4558 13.25 70.5 19.2942 70.5 26.75V35.25M8 40.0833C8 39.0708 8.82081 38.25 9.83333 38.25H50.1667C51.1792 38.25 52 39.0708 52 40.0833V66.4167C52 67.4292 51.1792 68.25 50.1667 68.25H9.83333C8.82081 68.25 8 67.4292 8 66.4167V40.0833ZM27 56.25C28.6569 57.9069 31.3431 57.9069 33 56.25C34.6569 54.5931 34.6569 51.9069 33 50.25C31.3431 48.5931 28.6569 48.5931 27 50.25C25.3431 51.9069 25.3431 54.5931 27 56.25Z"
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
            d="M34.4142 49.0858C31.9763 46.6479 28.0237 46.6479 25.5858 49.0858C23.1479 51.5237 23.1479 55.4763 25.5858 57.9142C28.0237 60.3521 31.9763 60.3521 34.4142 57.9142C36.8521 55.4763 36.8521 51.5237 34.4142 49.0858ZM28.4142 51.9142C29.29 51.0384 30.71 51.0384 31.5858 51.9142C32.4616 52.79 32.4616 54.21 31.5858 55.0858C30.71 55.9616 29.29 55.9616 28.4142 55.0858C27.5384 54.21 27.5384 52.79 28.4142 51.9142Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57 11.5C48.4396 11.5 41.5 18.4396 41.5 27V36.5H9.83333C7.71624 36.5 6 38.2162 6 40.3333V66.6667C6 68.7838 7.71624 70.5 9.83333 70.5H50.1667C52.2838 70.5 54 68.7838 54 66.6667V40.3333C54 38.2162 52.2838 36.5 50.1667 36.5H45.5V27C45.5 20.6487 50.6487 15.5 57 15.5C63.3513 15.5 68.5 20.6487 68.5 27V35.5C68.5 36.6046 69.3954 37.5 70.5 37.5C71.6046 37.5 72.5 36.6046 72.5 35.5V27C72.5 18.4396 65.5604 11.5 57 11.5ZM10 40.5V66.5H50V40.5H10Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLockOpen1 = forwardRef((props, ref) => {
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

CoreLockOpen1.displayName = 'CoreLockOpen1'

export default CoreLockOpen1
