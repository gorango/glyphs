
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M34 43H15V69H65V43H46"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 43H11V29H69V43H46"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 69L34 29"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46 29L46 69"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.6228 29C39.7921 29 39.899 28.8182 39.8168 28.6702L35.1436 20.2584C32.9018 16.2231 27.0983 16.2231 24.8565 20.2584C22.6776 24.1803 25.5136 29 30 29"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.3772 29C40.2079 29 40.101 28.8182 40.1832 28.6702L44.8564 20.2584C47.0982 16.2231 52.9017 16.2231 55.1435 20.2584C57.3224 24.1803 54.4864 29 50 29"
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
            d="M34 43H15V44.04V69L34 69L34 43ZM46 69L65 69V44.04V43H46L46 69Z"
            fill="currentColor"
          />
          <path
            d="M15 43V41C13.8954 41 13 41.8954 13 43H15ZM34 43L36 43C36 42.4696 35.7893 41.9609 35.4142 41.5858C35.0391 41.2107 34.5304 41 34 41V43ZM15 69H13C13 70.1046 13.8954 71 15 71L15 69ZM34 69V71C34.5304 71 35.0391 70.7893 35.4142 70.4142C35.7893 70.0391 36 69.5304 36 69H34ZM65 69V71C66.1046 71 67 70.1046 67 69H65ZM46 69H44C44 69.5304 44.2107 70.0391 44.5858 70.4142C44.9609 70.7893 45.4696 71 46 71V69ZM65 43H67C67 41.8954 66.1046 41 65 41V43ZM46 43V41C44.8954 41 44 41.8954 44 43L46 43ZM15 45H34V41H15V45ZM17 44.04V43H13V44.04H17ZM17 69V44.04H13V69H17ZM34 67L15 67L15 71L34 71V67ZM36 69L36 43L32 43L32 69H36ZM65 67L46 67V71L65 71V67ZM63 44.04V69H67V44.04H63ZM63 43V44.04H67V43H63ZM46 45H65V41H46V45ZM44 43L44 69H48L48 43L44 43Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 29H11V43H34V29ZM46 29V43H69V29H46Z"
            fill="currentColor"
          />
          <path
            d="M11 29V27C9.89543 27 9 27.8954 9 29H11ZM34 29H36C36 27.8954 35.1046 27 34 27V29ZM11 43H9C9 44.1046 9.89543 45 11 45V43ZM34 43V45C35.1046 45 36 44.1046 36 43H34ZM46 29V27C44.8954 27 44 27.8954 44 29H46ZM46 43H44C44 44.1046 44.8954 45 46 45V43ZM69 43V45C70.1046 45 71 44.1046 71 43H69ZM69 29H71C71 27.8954 70.1046 27 69 27V29ZM11 31H34V27H11V31ZM13 43V29H9V43H13ZM34 41H11V45H34V41ZM36 43V29H32V43H36ZM44 29V43H48V29H44ZM69 41H46V45H69V41ZM67 29V43H71V29H67ZM46 31H69V27H46V31Z"
            fill="currentColor"
          />
          <path
            d="M46 29L46 69H34L34 29L46 29Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.8564 20.2584C27.0983 16.2231 32.9017 16.2231 35.1436 20.2584L39.8168 28.6702C39.899 28.8182 39.792 29 39.6228 29V29H30C25.5135 29 22.6776 24.1803 24.8564 20.2584V20.2584Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.1436 20.2584C52.9017 16.2231 47.0983 16.2231 44.8564 20.2584L40.1832 28.6702C40.101 28.8182 40.208 29 40.3772 29V29H50C54.4865 29 57.3224 24.1803 55.1436 20.2584V20.2584Z"
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
            d="M34 43H15V44.04V69L34 69L34 43ZM46 69L65 69V44.04V43H46L46 69Z"
            fill="#219653"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 29H11V43H34V29ZM46 29V43H69V29H46Z"
            fill="#6FCF97"
          />
          <path
            d="M46 29L46 69H34L34 29L46 29Z"
            fill="#EB5757"
          />
          <path
            d="M24.8564 20.2584C27.0983 16.2231 32.9017 16.2231 35.1436 20.2584L39.8168 28.6702C39.899 28.8182 39.792 29 39.6228 29V29H30C25.5135 29 22.6776 24.1803 24.8564 20.2584V20.2584Z"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.1436 20.2584C52.9017 16.2231 47.0983 16.2231 44.8564 20.2584L40.1832 28.6702C40.101 28.8182 40.208 29 40.3772 29V29H50C54.4865 29 57.3224 24.1803 55.1436 20.2584V20.2584Z"
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
            d="M34 43H15V69L34 69L34 43Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46 69L65 69V43H46V69Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 29H11V43H34V29Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46 29V43H69V29H46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46 29V69H34L34 29H46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.8564 20.2584C27.0983 16.2231 32.9017 16.2231 35.1436 20.2584L39.8168 28.6702C39.899 28.8182 39.792 29 39.6228 29H30C25.5135 29 22.6776 24.1803 24.8564 20.2584Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55.1436 20.2584C52.9017 16.2231 47.0983 16.2231 44.8564 20.2584L40.1832 28.6702C40.101 28.8182 40.208 29 40.3772 29H50C54.4865 29 57.3224 24.1803 55.1436 20.2584Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 43H15V69L34 69M34 43L34 69M34 43H11V29H34M34 43V29M34 69H46M34 69L34 29M46 69L65 69V43H46M46 69V43M46 69V29M46 43V29M46 43H69V29H46M34 29H46M39.6228 29H30C25.5135 29 22.6776 24.1803 24.8564 20.2584C27.0983 16.2231 32.9017 16.2231 35.1436 20.2584L39.8168 28.6702C39.899 28.8182 39.792 29 39.6228 29ZM40.3772 29H50C54.4865 29 57.3224 24.1803 55.1436 20.2584C52.9017 16.2231 47.0983 16.2231 44.8564 20.2584L40.1832 28.6702C40.101 28.8182 40.208 29 40.3772 29Z"
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
            d="M23.1081 19.2871C26.112 13.8802 33.888 13.8802 36.8919 19.2871L40 24.8818L43.1081 19.2871C46.112 13.8802 53.888 13.8802 56.8919 19.2871C58.3273 21.8708 58.1384 24.7453 56.8609 27H69C70.1046 27 71 27.8954 71 29V43C71 44.1046 70.1046 45 69 45H67V69C67 70.1046 66.1046 71 65 71H15C13.8954 71 13 70.1046 13 69V45H11C9.89543 45 9 44.1046 9 43V29C9 27.8954 9.89543 27 11 27H23.1391C21.8616 24.7453 21.6727 21.8708 23.1081 19.2871ZM48 31V41H67V31H48ZM44 31H36L36 67H44V31ZM50 27C52.9615 27 54.8335 23.8185 53.3953 21.2297C51.9154 18.566 48.0846 18.566 46.6047 21.2297L43.399 27H50ZM33.3953 21.2297L36.601 27H30C27.0385 27 25.1665 23.8185 26.6047 21.2297C28.0846 18.566 31.9154 18.566 33.3953 21.2297ZM13 31H32V41H13V31ZM32 67L32 45H17V67L32 67ZM48 67L63 67V45H48L48 67Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGift = forwardRef((props, ref) => {
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

CoreGift.displayName = 'CoreGift'

export default CoreGift
