
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M50 44C51.7214 44 53.1809 45.2658 53.4243 46.9699L56.3478 67.4343C56.692 69.844 54.8222 72 52.388 72L27.6121 72C25.1779 72 23.308 69.844 23.6523 67.4343L26.5758 46.9699C26.8192 45.2658 28.2787 44 30 44L50 44Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 51V65"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46 51V65"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 20V44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.5 8C46.7761 8 47 8.22386 47 8.5V12.318C47 14.3554 46.1907 16.3093 44.75 17.75L44.2678 18.2322C43.1359 19.3641 41.6007 20 40 20C38.3993 20 36.8641 19.3641 35.7322 18.2322L35.25 17.75C33.8093 16.3093 33 14.3554 33 12.318L33 8.5C33 8.22386 33.2239 8 33.5 8L46.5 8Z"
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
            d="M30.0001 41C26.7858 41 24.0606 43.3636 23.606 46.5456L20.6825 67.01C20.0801 71.2271 23.3523 75 27.6122 75H52.3881C56.6479 75 59.9202 71.2271 59.3177 67.01L56.3942 46.5456C55.9397 43.3636 53.2145 41 50.0001 41H43.0001V22.4874C44.2634 22.0428 45.4242 21.3186 46.3892 20.3536L46.8714 19.8713C48.8747 17.8681 50.0001 15.1511 50.0001 12.318V8.5C50.0001 6.56701 48.4331 5 46.5001 5L33.5001 5C31.5671 5 30.0001 6.567 30.0001 8.5V12.318C30.0001 15.1511 31.1255 17.8681 33.1288 19.8713L33.611 20.3536C34.576 21.3186 35.7369 22.0428 37.0001 22.4874V41H30.0001ZM34.0001 48C35.6569 48 37.0001 49.3431 37.0001 51V65C37.0001 66.6569 35.6569 68 34.0001 68C32.3432 68 31.0001 66.6569 31.0001 65V51C31.0001 49.3431 32.3432 48 34.0001 48ZM49.0001 51C49.0001 49.3431 47.6569 48 46.0001 48C44.3432 48 43.0001 49.3431 43.0001 51V65C43.0001 66.6569 44.3432 68 46.0001 68C47.6569 68 49.0001 66.6569 49.0001 65V51ZM36.0001 11V12.318C36.0001 13.5598 36.4934 14.7506 37.3714 15.6287L37.8537 16.1109C38.4229 16.6802 39.195 17 40.0001 17C40.8052 17 41.5773 16.6802 42.1466 16.1109L42.6288 15.6287C43.5068 14.7506 44.0001 13.5598 44.0001 12.318V11L36.0001 11Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M50 44C51.7214 44 53.1808 45.2658 53.4243 46.9699L56.3478 67.4343C56.692 69.844 54.8222 72 52.388 72H48L40 72L32 72L27.612 72C25.1778 72 23.308 69.844 23.6522 67.4343L26.5757 46.9699C26.8192 45.2658 28.2786 44 30 44L40 44L50 44Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 51V65"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46 51V65"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 20V44"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.5 8C46.7761 8 47 8.22386 47 8.5V8.5V12.318C47 14.3554 46.1907 16.3093 44.75 17.75L44.2678 18.2322C43.1359 19.3641 41.6007 20 40 20V20C38.3993 20 36.8641 19.3641 35.7322 18.2322L35.25 17.75C33.8093 16.3093 33 14.3554 33 12.318L33 8.5V8.5C33 8.22386 33.2239 8 33.5 8L46.5 8Z"
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
            d="M50 44C51.7214 44 53.1809 45.2658 53.4243 46.9698L56.3478 67.4343C56.692 69.844 54.8222 72 52.388 72L27.6121 72C25.1779 72 23.308 69.844 23.6523 67.4343L26.5758 46.9698C26.8192 45.2658 28.2787 44 30 44H40H50Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.5 8C46.7762 8 47 8.22386 47 8.5V12.318C47 14.3554 46.1907 16.3094 44.75 17.75L44.2678 18.2322C43.1359 19.3641 41.6008 20 40 20C38.3993 20 36.8642 19.3641 35.7323 18.2322L35.25 17.75C33.8094 16.3093 33 14.3554 33 12.318V8.5C33 8.22386 33.2239 8 33.5 8L46.5 8Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 44H30C28.2787 44 26.8192 45.2658 26.5758 46.9698L23.6523 67.4343C23.308 69.844 25.1779 72 27.6121 72L52.388 72C54.8222 72 56.692 69.844 56.3478 67.4343L53.4243 46.9698C53.1809 45.2658 51.7214 44 50 44H40ZM40 44V20M34 51V65M46 51V65M40 20C38.3993 20 36.8642 19.3641 35.7323 18.2322L35.25 17.75C33.8094 16.3093 33 14.3554 33 12.318V8.5C33 8.22386 33.2239 8 33.5 8L46.5 8C46.7762 8 47 8.22386 47 8.5V12.318C47 14.3554 46.1907 16.3093 44.75 17.75L44.2678 18.2322C43.1359 19.3641 41.6008 20 40 20Z"
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
            d="M33.9999 49C35.1045 49 35.9999 49.8954 35.9999 51V65C35.9999 66.1046 35.1045 67 33.9999 67C32.8954 67 31.9999 66.1046 31.9999 65V51C31.9999 49.8954 32.8954 49 33.9999 49Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.9999 51C47.9999 49.8954 47.1045 49 45.9999 49C44.8954 49 43.9999 49.8954 43.9999 51V65C43.9999 66.1046 44.8954 67 45.9999 67C47.1045 67 47.9999 66.1046 47.9999 65V51Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.4999 6C32.1192 6 30.9999 7.11929 30.9999 8.5V12.318C30.9999 14.8858 32.02 17.3485 33.8357 19.1642L34.3179 19.6464C35.3438 20.6723 36.6184 21.3921 37.9999 21.7472V42H29.9999C27.2832 42 24.98 43.9976 24.5958 46.687L21.6723 67.1515C21.1559 70.7661 23.9607 74 27.612 74H52.3879C56.0392 74 58.844 70.7661 58.3276 67.1515L55.4041 46.687C55.0199 43.9976 52.7166 42 49.9999 42H41.9999V21.7472C43.3815 21.3921 44.6561 20.6723 45.6819 19.6464L46.1641 19.1642C47.9799 17.3485 48.9999 14.8858 48.9999 12.318V8.5C48.9999 7.11929 47.8806 6 46.4999 6L33.4999 6ZM39.9999 18C41.0702 18 42.0967 17.5748 42.8535 16.818L43.3357 16.3358C44.4013 15.2702 44.9999 13.825 44.9999 12.318V10L34.9999 10V12.318C34.9999 13.825 35.5986 15.2702 36.6641 16.3358L37.1464 16.818C37.9032 17.5748 38.9296 18 39.9999 18ZM28.5556 47.2527C28.6582 46.5339 29.2738 46 29.9999 46H49.9999C50.726 46 51.3416 46.5339 51.4443 47.2527L54.3678 67.7172C54.5399 68.922 53.605 70 52.3879 70H27.612C26.3949 70 25.4599 68.922 25.6321 67.7172L28.5556 47.2527Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreShovelSnow = forwardRef((props, ref) => {
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

CoreShovelSnow.displayName = 'CoreShovelSnow'

export default CoreShovelSnow
