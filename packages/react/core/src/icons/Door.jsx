
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M60 68V14C60 12.8954 59.1046 12 58 12H22C20.8954 12 20 12.8954 20 14V68"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 68H68"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 42H52"
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
            d="M20 14C20 12.8954 20.8954 12 22 12H58C59.1046 12 60 12.8954 60 14V66H20V14ZM48 40C46.8954 40 46 40.8954 46 42C46 43.1046 46.8954 44 48 44H52C53.1046 44 54 43.1046 54 42C54 40.8954 53.1046 40 52 40H48Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 68C11 66.3431 12.3431 65 14 65H66C67.6569 65 69 66.3431 69 68C69 69.6569 67.6569 71 66 71H14C12.3431 71 11 69.6569 11 68Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M20 14C20 12.8954 20.8954 12 22 12H58C59.1046 12 60 12.8954 60 14V68H20V14Z"
            fill="#F2994A"
          />
          <path
            d="M68 68H12"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 42H52"
            stroke="#4F4F4F"
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
            d="M20 14C20 12.8954 20.8954 12 22 12H58C59.1046 12 60 12.8954 60 14V68H20V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68 68H12M48 42H52M60 68V14C60 12.8954 59.1046 12 58 12H22C20.8954 12 20 12.8954 20 14V68H60Z"
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
            d="M48 40C46.8954 40 46 40.8954 46 42C46 43.1046 46.8954 44 48 44H52C53.1046 44 54 43.1046 54 42C54 40.8954 53.1046 40 52 40H48Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 14C18 11.7909 19.7909 10 22 10H58C60.2091 10 62 11.7909 62 14V66H68C69.1046 66 70 66.8954 70 68C70 69.1046 69.1046 70 68 70H12C10.8954 70 10 69.1046 10 68C10 66.8954 10.8954 66 12 66H18V14ZM22 14L58 14V66H22V14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDoor = forwardRef((props, ref) => {
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

CoreDoor.displayName = 'CoreDoor'

export default CoreDoor
