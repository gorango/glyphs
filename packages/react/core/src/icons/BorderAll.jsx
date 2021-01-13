
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M64 64H16V16H64V64Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 40H64"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 16L40 64"
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
            d="M43 16C43 14.3431 41.6569 13 40 13C38.3431 13 37 14.3431 37 16L43 16ZM37 64C37 65.6569 38.3431 67 40 67C41.6569 67 43 65.6569 43 64H37ZM16 37C14.3431 37 13 38.3431 13 40C13 41.6569 14.3431 43 16 43V37ZM64 43C65.6569 43 67 41.6569 67 40C67 38.3431 65.6569 37 64 37V43ZM16 61C14.3431 61 13 62.3431 13 64C13 65.6569 14.3431 67 16 67V61ZM64 67C65.6569 67 67 65.6569 67 64C67 62.3431 65.6569 61 64 61V67ZM67 16C67 14.3431 65.6569 13 64 13C62.3432 13 61 14.3431 61 16L67 16ZM61 64C61 65.6569 62.3431 67 64 67C65.6569 67 67 65.6569 67 64H61ZM16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19V13ZM64 19C65.6569 19 67 17.6569 67 16C67 14.3431 65.6569 13 64 13V19ZM19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16L19 16ZM13 64C13 65.6569 14.3431 67 16 67C17.6569 67 19 65.6569 19 64H13ZM37 16L37 64H43L43 16L37 16ZM16 43L64 43V37L16 37V43ZM16 67H64V61L16 61V67ZM61 16L61 64H67L67 16L61 16ZM16 19L64 19V13L16 13V19ZM13 16L13 64H19L19 16L13 16Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M42 16C42 14.8954 41.1046 14 40 14C38.8954 14 38 14.8954 38 16L42 16ZM38 64C38 65.1046 38.8954 66 40 66C41.1046 66 42 65.1046 42 64H38ZM16 38C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42V38ZM64 42C65.1046 42 66 41.1046 66 40C66 38.8954 65.1046 38 64 38V42ZM16 62C14.8954 62 14 62.8954 14 64C14 65.1046 14.8954 66 16 66V62ZM64 66C65.1046 66 66 65.1046 66 64C66 62.8954 65.1046 62 64 62V66ZM66 16C66 14.8954 65.1046 14 64 14C62.8954 14 62 14.8954 62 16L66 16ZM62 64C62 65.1046 62.8954 66 64 66C65.1046 66 66 65.1046 66 64H62ZM16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18V14ZM64 18C65.1046 18 66 17.1046 66 16C66 14.8954 65.1046 14 64 14V18ZM18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16L18 16ZM14 64C14 65.1046 14.8954 66 16 66C17.1046 66 18 65.1046 18 64H14ZM38 16L38 64H42L42 16L38 16ZM16 42L64 42V38L16 38V42ZM16 66H64V62L16 62V66ZM62 16L62 64H66L66 16L62 16ZM16 18L64 18V14L16 14V18ZM14 16L14 64H18L18 16L14 16Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M40 16L40 64M16 40H64M16 64H64V16H16V64Z"
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
            d="M14 16C14 14.8954 14.8954 14 16 14H64C65.1046 14 66 14.8954 66 16V40L66 40.0028V64C66 65.1046 65.1046 66 64 66H16C15.931 66 15.8627 65.9965 15.7955 65.9897C14.787 65.8873 14 65.0355 14 64L14 16ZM18 18L18 38H38V18H18ZM42 18V38H62V18H42ZM62 42H42V62H62V42ZM38 62V42H18L18 62H38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBorderAll = forwardRef((props, ref) => {
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

CoreBorderAll.displayName = 'CoreBorderAll'

export default CoreBorderAll
