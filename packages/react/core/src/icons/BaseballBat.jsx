
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M38 4H42C45.3137 4 48 6.68629 48 10V35.4059C48 35.801 47.961 36.1951 47.8835 36.5826L44.0201 55.8993C44.0084 55.9579 43.957 56 43.8974 56H36.0949C36.0397 56 35.9922 55.9611 35.9814 55.907L32.1165 36.5826C32.039 36.1951 32 35.801 32 35.4059V10C32 6.68629 34.6863 4 38 4Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 56L36 76H44V56"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45 76L35 76"
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
            d="M38 4H42C45.3137 4 48 6.68629 48 10V35.4059C48 35.801 47.961 36.1951 47.8835 36.5826L44.5885 53.0577C44.3982 53.0198 44.2014 53 44 53H36C35.7986 53 35.6018 53.0198 35.4115 53.0577L32.1165 36.5826C32.039 36.1951 32 35.801 32 35.4059V10C32 6.68629 34.6863 4 38 4Z"
            fill="currentColor"
          />
          <path
            d="M36 56L36 76L44 76L44 56L36 56Z"
            fill="currentColor"
          />
          <path
            d="M45 76L43.3333 76L36.6667 76L35 76"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38 4H42C45.3137 4 48 6.68629 48 10V35.4059C48 35.801 47.961 36.1951 47.8835 36.5826L44.0201 55.8993C44.0084 55.9579 43.957 56 43.8974 56H36.0949C36.0397 56 35.9922 55.9611 35.9814 55.907L32.1165 36.5826C32.039 36.1951 32 35.801 32 35.4059V10C32 6.68629 34.6863 4 38 4Z"
            fill="#F2C94C"
          />
          <path
            d="M36 56L36 76L44 76L44 56L36 56Z"
            fill="#F2994A"
          />
          <path
            d="M45 76L43.3333 76L36.6667 76L35 76"
            stroke="#EB5757"
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
            d="M38 4H42C45.3137 4 48 6.68629 48 10V35.4059C48 35.801 47.961 36.1951 47.8835 36.5826L44.0201 55.8993C44.0084 55.9579 43.957 56 43.8974 56H36.0949C36.0397 56 35.9922 55.9611 35.9814 55.907L32.1165 36.5826C32.039 36.1951 32 35.801 32 35.4059V10C32 6.68629 34.6863 4 38 4Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 56L36 76H44V56H36Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M45 76H35M42 4H38C34.6863 4 32 6.68629 32 10V35.4059C32 35.801 32.039 36.1951 32.1165 36.5826L35.9814 55.907C35.9922 55.9611 36.0397 56 36.0949 56H43.8974C43.957 56 44.0084 55.9579 44.0201 55.8993L47.8835 36.5826C47.961 36.1951 48 35.801 48 35.4059V10C48 6.68629 45.3137 4 42 4ZM36 76L36 56H44V76H36Z"
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
            d="M30 10C30 5.58172 33.5817 2 38 2H42C46.4183 2 50 5.58172 50 10V35.4059C50 35.9327 49.948 36.4582 49.8446 36.9748L46.0592 55.9018C46.0437 55.9795 46.0239 56.0553 46 56.1289V74.2676C46.5978 74.6134 47 75.2597 47 76C47 77.1046 46.1046 78 45 78H35C33.8954 78 33 77.1046 33 76C33 75.2597 33.4022 74.6134 34 74.2676L34 56.1288C33.9761 56.0553 33.9563 55.9795 33.9408 55.9018L30.1554 36.9748C30.052 36.4582 30 35.9327 30 35.4059V10ZM38 74H42V58H38V74ZM38 6C35.7909 6 34 7.79086 34 10V35.4059C34 35.6693 34.026 35.9321 34.0777 36.1903L37.5396 53.5H42.4604L45.9223 36.1903C45.974 35.9321 46 35.6693 46 35.4059V10C46 7.79086 44.2091 6 42 6H38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBaseballBat = forwardRef((props, ref) => {
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

CoreBaseballBat.displayName = 'CoreBaseballBat'

export default CoreBaseballBat
