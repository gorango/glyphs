
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 64L24 44M24 44L24 16M24 44L33.1429 36M33.1429 36L56 16M33.1429 36L56 64"
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
            d="M21 64C21 65.6569 22.3431 67 24 67C25.6569 67 27 65.6569 27 64H21ZM27 16C27 14.3431 25.6569 13 24 13C22.3431 13 21 14.3431 21 16H27ZM57.9755 18.2577C59.2224 17.1667 59.3488 15.2714 58.2577 14.0245C57.1667 12.7776 55.2714 12.6512 54.0245 13.7423L57.9755 18.2577ZM53.676 65.8971C54.7238 67.1806 56.6136 67.3717 57.8971 66.324C59.1806 65.2762 59.3717 63.3864 58.324 62.1029L53.676 65.8971ZM27 64L27 44H21L21 64H27ZM27 44L27 16H21L21 44H27ZM25.9755 46.2577L35.1184 38.2577L31.1673 33.7423L22.0245 41.7423L25.9755 46.2577ZM35.1184 38.2577L57.9755 18.2577L54.0245 13.7423L31.1673 33.7423L35.1184 38.2577ZM58.324 62.1029L35.4668 34.1029L30.8189 37.8971L53.676 65.8971L58.324 62.1029Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M22 64C22 65.1046 22.8954 66 24 66C25.1046 66 26 65.1046 26 64H22ZM26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16H26ZM57.317 17.5052C58.1483 16.7778 58.2325 15.5143 57.5052 14.683C56.7778 13.8517 55.5143 13.7675 54.683 14.4948L57.317 17.5052ZM54.4507 65.2648C55.1492 66.1204 56.4091 66.2478 57.2648 65.5493C58.1204 64.8508 58.2478 63.5909 57.5493 62.7352L54.4507 65.2648ZM26 64L26 44H22L22 64H26ZM26 44L26 16H22L22 44H26ZM25.317 45.5052L34.4599 37.5052L31.8258 34.4948L22.683 42.4948L25.317 45.5052ZM34.4599 37.5052L57.317 17.5052L54.683 14.4948L31.8258 34.4948L34.4599 37.5052ZM57.5493 62.7352L34.6922 34.7352L31.5935 37.2648L54.4507 65.2648L57.5493 62.7352Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 64V44M24 44V16M24 44L33.1429 36M33.1429 36L56 16M33.1429 36L56 64"
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
            d="M57.5052 14.683C58.2325 15.5143 58.1483 16.7778 57.317 17.5052L35.9144 36.2325L57.5493 62.7353C58.2478 63.5909 58.1204 64.8508 57.2648 65.5494C56.4091 66.2479 55.1492 66.1204 54.4507 65.2648L32.9023 38.868L26 44.9076V64C26 65.1046 25.1046 66 24 66C22.8954 66 22 65.1046 22 64L22 16C22 14.8955 22.8954 14 24 14C25.1046 14 26 14.8955 26 16L26 39.5925L54.683 14.4949C55.5143 13.7675 56.7778 13.8517 57.5052 14.683Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreK = forwardRef((props, ref) => {
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

CoreK.displayName = 'CoreK'

export default CoreK
