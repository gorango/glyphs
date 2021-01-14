
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M34 64H35C44.3888 64 52 56.3888 52 47V28M52 28L51.9862 32.0479C51.9636 38.6554 46.6007 44 39.9931 44C33.3695 44 28 38.6305 28 32.0069V28C28 21.3726 33.3726 16 40 16C46.6274 16 52 21.3726 52 28Z"
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
            d="M34 61C32.3431 61 31 62.3431 31 64C31 65.6569 32.3431 67 34 67V61ZM51.9862 32.0479L48.9862 32.0376L51.9862 32.0479ZM49 40V47H55V40H49ZM25 28L25 32.0069H31L31 28H25ZM35 61H34V67H35V61ZM49 28V40H55V28H49ZM54.9861 32.0581L55 28.0103L49 27.9897L48.9862 32.0376L54.9861 32.0581ZM25 32.0069C25 40.2874 31.7126 47 39.9931 47L39.9931 41C35.0264 41 31 36.9736 31 32.0069H25ZM39.9931 47C48.2536 47 54.9579 40.3185 54.9861 32.0581L48.9862 32.0376C48.9692 36.9924 44.9479 41 39.9931 41L39.9931 47ZM49 47C49 54.732 42.732 61 35 61V67C46.0457 67 55 58.0457 55 47H49ZM40 19C44.9706 19 49 23.0294 49 28H55C55 19.7157 48.2843 13 40 13V19ZM31 28C31 23.0294 35.0294 19 40 19V13C31.7157 13 25 19.7157 25 28H31Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M34 62C32.8954 62 32 62.8954 32 64C32 65.1046 32.8954 66 34 66V62ZM51.9862 32.0479L49.9862 32.041L51.9862 32.0479ZM50 40V47H54V40H50ZM26 28V32.0069H30L30 28H26ZM35 62H34V66H35V62ZM50 28V40H54V28H50ZM53.9862 32.0547L54 28.0068L50 27.9932L49.9862 32.041L53.9862 32.0547ZM26 32.0069C26 39.7351 32.2649 46 39.9931 46L39.9931 42C34.4741 42 30 37.5259 30 32.0069H26ZM39.9931 46C47.7026 46 53.9598 39.7642 53.9862 32.0547L49.9862 32.041C49.9674 37.5467 45.4988 42 39.9931 42L39.9931 46ZM50 47C50 55.2843 43.2843 62 35 62V66C45.4934 66 54 57.4934 54 47H50ZM40 18C45.5228 18 50 22.4772 50 28H54C54 20.268 47.732 14 40 14V18ZM30 28C30 22.4772 34.4772 18 40 18V14C32.268 14 26 20.268 26 28H30Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M34 64H35C44.3888 64 52 56.3888 52 47V28M52 28L51.9862 32.0479C51.9636 38.6554 46.6007 44 39.9931 44C33.3695 44 28 38.6305 28 32.0069V28C28 21.3726 33.3726 16 40 16C46.6274 16 52 21.3726 52 28Z"
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
            d="M50 41.788V47C50 55.2843 43.2843 62 35 62H34C32.8954 62 32 62.8954 32 64C32 65.1046 32.8954 66 34 66H35C45.4934 66 54 57.4934 54 47V28C54 20.268 47.732 14 40 14C32.268 14 26 20.268 26 28V32.0069C26 39.7351 32.2649 46 39.9931 46C43.9139 46 47.459 44.3872 50 41.788ZM40 18C34.4772 18 30 22.4772 30 28V32.0069C30 37.5259 34.4741 42 39.9931 42C45.4988 42 49.9674 37.5467 49.9862 32.041L50 28V27.9967C49.9982 22.4754 45.5217 18 40 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreNine = forwardRef((props, ref) => {
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

CoreNine.displayName = 'CoreNine'

export default CoreNine
