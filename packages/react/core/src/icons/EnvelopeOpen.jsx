
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M12 36.1621V67.9999C12 70.209 13.7909 71.9999 16 71.9999H64C66.2091 71.9999 68 70.209 68 67.9999V36.1621"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12.0155 33.8203C12.0069 33.8203 12 33.8134 12 33.8048V31.66C12 30.4923 12.5103 29.383 13.3968 28.623L34.7937 10.2829C37.7896 7.71495 42.2104 7.71495 45.2063 10.2829L66.6032 28.623C67.4897 29.383 68 30.4924 68 31.66V33.8048C68 33.8134 67.9931 33.8203 67.9845 33.8203C67.9931 33.8203 68 33.8272 68 33.8358V35.9806C68 37.1483 67.4897 38.2577 66.6032 39.0176L45.2063 57.3577C42.2104 59.9257 37.7896 59.9257 34.7937 57.3577L13.3968 39.0176C12.5103 38.2577 12 37.1483 12 35.9806V33.8358C12 33.8272 12.0069 33.8203 12.0155 33.8203Z"
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
            d="M68 37.4633C67.4238 37.4631 66.8448 37.6609 66.373 38.0652L43.5794 57.6027C41.5197 59.3681 38.4803 59.3681 36.4206 57.6027L13.627 38.0652C13.1552 37.6609 12.5762 37.4631 12 37.4633V33.6234C12 32.4557 12.5102 31.3463 13.3968 30.5864L34.7937 12.2463C37.7896 9.67833 42.2104 9.67833 45.2063 12.2463L66.6032 30.5864C67.4897 31.3463 68 32.4557 68 33.6234V37.4633Z"
            fill="currentColor"
          />
          <path
            d="M12 43.2561V69.9634C12 72.1725 13.7909 73.9634 16 73.9634H64C66.2091 73.9634 68 72.1725 68 69.9634V43.2561L46.8333 61.3989C42.9012 64.7694 37.0988 64.7694 33.1667 61.3989L12 43.2561Z"
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
            d="M68 33.8203V33.8048V31.66C68 30.4923 67.4897 29.383 66.6032 28.623L45.2063 10.2829C42.2104 7.71495 37.7896 7.71495 34.7937 10.2829L13.3968 28.623C12.5102 29.383 12 30.4924 12 31.66V33.8048V33.8203V33.8358L12 35.9806C12 37.1483 12.5102 38.2577 13.3968 39.0176L34.7937 57.3577C37.7896 59.9257 42.2104 59.9257 45.2063 57.3577L66.6032 39.0176C67.4897 38.2577 68 37.1483 68 35.9806V33.8358V33.8203ZM12 40V36.1622C12 37.3299 12.5102 38.4393 13.3968 39.1992L34.7937 57.5394C37.7896 60.1073 42.2104 60.1073 45.2063 57.5394L66.6032 39.1992C67.4897 38.4393 68 37.3299 68 36.1622V40V54V68C68 70.2091 66.2091 72 64 72H16C13.7909 72 12 70.2091 12 68L12 54L12 40Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68 33.9845V34V34.0155V36.1603C68 37.328 67.4897 38.4374 66.6032 39.1973L45.2063 57.5374C42.2104 60.1054 37.7896 60.1054 34.7937 57.5374L13.3968 39.1973C12.5102 38.4374 12 37.328 12 36.1603L12 34.0155V34V33.9845V31.8397C12 30.672 12.5102 29.5626 13.3968 28.8027L34.7937 10.4626C37.7896 7.89464 42.2104 7.89464 45.2063 10.4626L66.6032 28.8027C67.4897 29.5626 68 30.672 68 31.8397V33.9845Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M68 31.66C68 30.4923 67.4897 29.383 66.6032 28.623L45.2063 10.2829C42.2104 7.71495 37.7896 7.71495 34.7937 10.2829L13.3968 28.623C12.5102 29.383 12 30.4924 12 31.6601V35.9806C12 37.1483 12.5102 38.2577 13.3968 39.0176L34.7937 57.3577C37.7896 59.9257 42.2104 59.9257 45.2063 57.3577L66.6032 39.0176C67.4897 38.2577 68 37.1483 68 35.9806V31.66Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 36.1622C12 37.3299 12.5102 38.4393 13.3968 39.1992L34.7937 57.5394C37.7896 60.1073 42.2104 60.1073 45.2063 57.5394L66.6032 39.1992C67.4897 38.4393 68 37.3299 68 36.1622V68C68 70.2091 66.2091 72 64 72H16C13.7909 72 12 70.2091 12 68V36.1622Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68 31.66C68 30.4923 67.4897 29.383 66.6032 28.623L45.2063 10.2829C42.2104 7.71495 37.7896 7.71495 34.7937 10.2829L13.3968 28.623C12.5102 29.383 12 30.4924 12 31.6601V35.9806C12 37.1483 12.5102 38.2577 13.3968 39.0176L34.7937 57.3577C37.7896 59.9257 42.2104 59.9257 45.2063 57.3577L66.6032 39.0176C67.4897 38.2577 68 37.1483 68 35.9806V31.66Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 36.1622C12 37.3299 12.5102 38.4393 13.3968 39.1992L34.7937 57.5394C37.7896 60.1073 42.2104 60.1073 45.2063 57.5394L66.6032 39.1992C67.4897 38.4393 68 37.3299 68 36.1622V68C68 70.2091 66.2091 72 64 72H16C13.7909 72 12 70.2091 12 68V36.1622Z"
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
            d="M10.0001 33.8203C10 33.8152 10 33.81 10 33.8048V31.66C10 29.9085 10.7654 28.2444 12.0953 27.1045L33.4921 8.76437C37.237 5.55446 42.763 5.55446 46.5079 8.76437L67.9048 27.1045C69.2346 28.2444 70 29.9085 70 31.66V33.8048C70 33.81 70 33.8152 69.9999 33.8203C70 33.8255 70 33.8306 70 33.8358V35.9806C70 36.0189 69.9996 36.0572 69.9989 36.0954C69.9996 36.1176 70 36.1399 70 36.1622V68C70 71.3137 67.3137 74 64 74H16C12.6863 74 10 71.3137 10 68V36.1622C10 36.1399 10.0004 36.1176 10.0011 36.0954C10.0004 36.0572 10 36.0189 10 35.9806V33.8358C10 33.8306 10 33.8255 10.0001 33.8203ZM43.9047 11.8014C41.6578 9.87545 38.3422 9.87545 36.0953 11.8014L14.6984 30.1415C14.2551 30.5215 14 31.0762 14 31.66V33.5703C14.0102 33.6522 14.0155 33.7356 14.0155 33.8203C14.0155 33.905 14.0102 33.9884 14 34.0703V35.9806C14 36.5644 14.2551 37.1191 14.6984 37.4991L36.0953 55.8392C38.3422 57.7652 41.6578 57.7652 43.9047 55.8392L65.3016 37.4991C65.7449 37.1191 66 36.5644 66 35.9806V34.0703C65.9898 33.9884 65.9845 33.905 65.9845 33.8203C65.9845 33.7356 65.9898 33.6522 66 33.5703V31.66C66 31.0762 65.7449 30.5215 65.3016 30.1415L43.9047 11.8014ZM14 42.3504V68C14 69.1046 14.8954 70 16 70H64C65.1046 70 66 69.1046 66 68V42.3504L46.5079 59.0579C42.763 62.2678 37.237 62.2678 33.4921 59.0579L14 42.3504Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreEnvelopeOpen = forwardRef((props, ref) => {
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

CoreEnvelopeOpen.displayName = 'CoreEnvelopeOpen'

export default CoreEnvelopeOpen