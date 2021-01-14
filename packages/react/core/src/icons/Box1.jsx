
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M12 34H68V66H12V34Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 34L20 14H60L68 34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 14L46 34M34 34L36 14"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46 34V44C46 45.1046 45.1046 46 44 46H36C34.8954 46 34 45.1046 34 44V34"
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
            d="M67.2 32L60 14H44L45.8 32H67.2Z"
            fill="currentColor"
          />
          <path
            d="M34.2 32L36 14H20L12.8 32H34.2Z"
            fill="currentColor"
          />
          <path
            d="M34 36H12V66H68V36H46V44C46 45.1046 45.1046 46 44 46H36C34.8954 46 34 45.1046 34 44V36Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="12"
            y="34"
            width="56"
            height="32"
            fill="#F2C94C"
          />
          <path
            d="M12 34H68L60 14H20L12 34Z"
            fill="#F2994A"
          />
          <path
            d="M46 34L44 14H36L34 34H46Z"
            fill="#219653"
          />
          <path
            d="M46 34V44C46 45.1046 45.1046 46 44 46H36C34.8954 46 34 45.1046 34 44V34H46Z"
            fill="#6FCF97"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M12 34H68V66H12V34Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 34H68L60 14H20L12 34Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46 34L44 14H36L34 34H46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46 34V44C46 45.1046 45.1046 46 44 46H36C34.8954 46 34 45.1046 34 44V34H46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 34H68M12 34V66H68V34M12 34L20 14H60L68 34M46 34L44 14H36L34 34M46 34H34M46 34V44C46 45.1046 45.1046 46 44 46H36C34.8954 46 34 45.1046 34 44V34"
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
            d="M10.0508 33.9469C10.0503 33.9645 10.05 33.9822 10.05 34V66C10.05 67.0769 10.9231 67.95 12 67.95H68C69.077 67.95 69.9501 67.0769 69.9501 66V34.0051L69.9501 33.9999C69.9501 33.9715 69.9494 33.943 69.9482 33.9146C69.9378 33.6741 69.8839 33.4449 69.7941 33.2346L61.8106 13.2758C61.5144 12.5354 60.7974 12.05 60 12.05H20C19.2027 12.05 18.4857 12.5354 18.1895 13.2758L10.2059 33.2347C10.1122 33.4543 10.0575 33.6946 10.0508 33.9469ZM65.1198 32.05L58.6798 15.95H46.1548L47.7648 32.05H65.1198ZM37.7648 15.95H42.2353L43.8453 32.05H36.1548L37.7648 15.95ZM32.05 35.95H13.95V64.05H66.05V35.95H47.9501V44C47.9501 46.1815 46.1816 47.95 44 47.95H36C33.8185 47.95 32.05 46.1815 32.05 44V35.95ZM44.05 35.95H35.9501V44C35.9501 44.0105 35.9518 44.0156 35.9532 44.0189C35.9551 44.0234 35.9588 44.0294 35.9647 44.0353C35.9706 44.0413 35.9766 44.0449 35.9812 44.0469C35.9845 44.0482 35.9895 44.05 36 44.05H44C44.0105 44.05 44.0156 44.0482 44.0189 44.0469C44.0235 44.0449 44.0295 44.0413 44.0354 44.0353C44.0413 44.0294 44.045 44.0234 44.0469 44.0189C44.0483 44.0156 44.05 44.0105 44.05 44V35.95ZM33.8453 15.95L32.2353 32.05H14.8803L21.3203 15.95H33.8453Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
        </>
      )
  }
}

const CoreBox1 = forwardRef((props, ref) => {
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

CoreBox1.displayName = 'CoreBox1'

export default CoreBox1
