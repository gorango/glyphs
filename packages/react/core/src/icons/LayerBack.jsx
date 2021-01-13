
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M12 14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V34C36 35.1046 35.1046 36 34 36H14C12.8954 36 12 35.1046 12 34V14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 66C68 67.1046 67.1046 68 66 68H46C44.8954 68 44 67.1046 44 66V46C44 44.8954 44.8954 44 46 44L66 44C67.1046 44 68 44.8954 68 46V66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.5 17.5C16.5 16.9477 16.9477 16.5 17.5 16.5H30.5C31.0523 16.5 31.5 16.9477 31.5 17.5V30.5C31.5 31.0523 31.0523 31.5 30.5 31.5H17.5C16.9477 31.5 16.5 31.0523 16.5 30.5V17.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.5 62.5C63.5 63.0523 63.0523 63.5 62.5 63.5H49.5C48.9477 63.5 48.5 63.0523 48.5 62.5V49.5C48.5 48.9477 48.9477 48.5 49.5 48.5L62.5 48.5C63.0523 48.5 63.5 48.9477 63.5 49.5V62.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 36V54C24 55.1046 24.8954 56 26 56H44"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 44V26C56 24.8954 55.1046 24 54 24H36"
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
            d="M20 18C18.8954 18 18 18.8954 18 20V28C18 29.1046 18.8954 30 20 30H28C29.1046 30 30 29.1046 30 28V20C30 18.8954 29.1046 18 28 18H20Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V32C36 34.2091 34.2091 36 32 36H14C12.8954 36 12 35.1046 12 34V14ZM15 17.5C15 16.1193 16.1193 15 17.5 15H30.5C31.8807 15 33 16.1193 33 17.5V30.5C33 31.8807 31.8807 33 30.5 33H17.5C16.1193 33 15 31.8807 15 30.5V17.5Z"
            fill="currentColor"
          />
          <path
            d="M60 62C61.1046 62 62 61.1046 62 60V52C62 50.8954 61.1046 50 60 50H52C50.8954 50 50 50.8954 50 52V60C50 61.1046 50.8954 62 52 62H60Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48 44C45.7909 44 44 45.7909 44 48V66C44 67.1046 44.8954 68 46 68H66C67.1046 68 68 67.1046 68 66V46C68 44.8954 67.1046 44 66 44H48ZM65 62.5C65 63.8807 63.8807 65 62.5 65H49.5C48.1193 65 47 63.8807 47 62.5V49.5C47 48.1193 48.1193 47 49.5 47H62.5C63.8807 47 65 48.1193 65 49.5V62.5Z"
            fill="currentColor"
          />
          <path
            d="M24 52V40C24 39.4477 24.4477 39 25 39H34C36.7614 39 39 36.7614 39 34V25C39 24.4477 39.4477 24 40 24H52C54.2091 24 56 25.7909 56 28V40C56 40.5523 55.5523 41 55 41H46C43.2386 41 41 43.2386 41 46V55C41 55.5523 40.5523 56 40 56H28C25.7909 56 24 54.2091 24 52Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M12 14C12 12.8954 12.8954 12 14 12L34 12C35.1046 12 36 12.8954 36 14V34C36 35.1046 35.1046 36 34 36H14C12.8954 36 12 35.1046 12 34L12 14Z"
            fill="#2F80ED"
          />
          <path
            d="M16.5 17.5C16.5 16.9477 16.9477 16.5 17.5 16.5L30.5 16.5C31.0523 16.5 31.5 16.9477 31.5 17.5V30.5C31.5 31.0523 31.0523 31.5 30.5 31.5H17.5C16.9477 31.5 16.5 31.0523 16.5 30.5L16.5 17.5Z"
            fill="#56CCF2"
          />
          <path
            d="M68 66C68 67.1046 67.1046 68 66 68L46 68C44.8954 68 44 67.1046 44 66V46C44 44.8954 44.8954 44 46 44H66C67.1046 44 68 44.8954 68 46V66Z"
            fill="#2F80ED"
          />
          <path
            d="M63.5 62.5C63.5 63.0523 63.0523 63.5 62.5 63.5H49.5C48.9477 63.5 48.5 63.0523 48.5 62.5V49.5C48.5 48.9477 48.9477 48.5 49.5 48.5H62.5C63.0523 48.5 63.5 48.9477 63.5 49.5V62.5Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 36V54C24 55.1046 24.8954 56 26 56H44V48C44 45.7909 45.7909 44 48 44H56V26C56 24.8954 55.1046 24 54 24H36V32C36 34.2091 34.2091 36 32 36H24Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M12 14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V34C36 35.1046 35.1046 36 34 36H14C12.8954 36 12 35.1046 12 34V14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.5 17.5C16.5 16.9477 16.9477 16.5 17.5 16.5H30.5C31.0523 16.5 31.5 16.9477 31.5 17.5V30.5C31.5 31.0523 31.0523 31.5 30.5 31.5H17.5C16.9477 31.5 16.5 31.0523 16.5 30.5V17.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68 66C68 67.1046 67.1046 68 66 68H46C44.8954 68 44 67.1046 44 66V46C44 44.8954 44.8954 44 46 44H66C67.1046 44 68 44.8954 68 46V66Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M63.5 62.5C63.5 63.0523 63.0523 63.5 62.5 63.5H49.5C48.9477 63.5 48.5 63.0523 48.5 62.5V49.5C48.5 48.9477 48.9477 48.5 49.5 48.5H62.5C63.0523 48.5 63.5 48.9477 63.5 49.5V62.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24 36V54C24 55.1046 24.8954 56 26 56H44V48C44 45.7909 45.7909 44 48 44H56V26C56 24.8954 55.1046 24 54 24H36V32C36 34.2091 34.2091 36 32 36H24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V34C36 35.1046 35.1046 36 34 36H14C12.8954 36 12 35.1046 12 34V14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.5 17.5C16.5 16.9477 16.9477 16.5 17.5 16.5H30.5C31.0523 16.5 31.5 16.9477 31.5 17.5V30.5C31.5 31.0523 31.0523 31.5 30.5 31.5H17.5C16.9477 31.5 16.5 31.0523 16.5 30.5V17.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 66C68 67.1046 67.1046 68 66 68H46C44.8954 68 44 67.1046 44 66V46C44 44.8954 44.8954 44 46 44H66C67.1046 44 68 44.8954 68 46V66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.5 62.5C63.5 63.0523 63.0523 63.5 62.5 63.5H49.5C48.9477 63.5 48.5 63.0523 48.5 62.5V49.5C48.5 48.9477 48.9477 48.5 49.5 48.5H62.5C63.0523 48.5 63.5 48.9477 63.5 49.5V62.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 36V54C24 55.1046 24.8954 56 26 56H44V48C44 45.7909 45.7909 44 48 44H56V26C56 24.8954 55.1046 24 54 24H36V32C36 34.2091 34.2091 36 32 36H24Z"
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
            d="M14.5 17.5C14.5 15.8431 15.8431 14.5 17.5 14.5H30.5C32.1569 14.5 33.5 15.8431 33.5 17.5V30.5C33.5 32.1569 32.1569 33.5 30.5 33.5H17.5C15.8431 33.5 14.5 32.1569 14.5 30.5V17.5ZM18.5 18.5V29.5H29.5V18.5H18.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.5 62.5C65.5 64.1569 64.1569 65.5 62.5 65.5H49.5C47.8431 65.5 46.5 64.1569 46.5 62.5V49.5C46.5 47.8431 47.8431 46.5 49.5 46.5H62.5C64.1569 46.5 65.5 47.8431 65.5 49.5V62.5ZM61.5 61.5V50.5H50.5V61.5H61.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 14C10 11.7909 11.7909 10 14 10H34C36.2091 10 38 11.7909 38 14V22H54C56.2091 22 58 23.7909 58 26V42H66C68.2091 42 70 43.7909 70 46V66C70 68.2091 68.2091 70 66 70H46C43.7909 70 42 68.2091 42 66V58H26C23.7909 58 22 56.2091 22 54V38H14C11.7909 38 10 36.2091 10 34V14ZM32 34C33.1046 34 34 33.1046 34 32V16C34 14.8954 33.1046 14 32 14L16 14C14.8954 14 14 14.8954 14 16V32C14 33.1046 14.8954 34 16 34H32ZM26 38V54H42V46C42 43.7909 43.7909 42 46 42H54V26H38V34C38 36.2091 36.2091 38 34 38H26ZM46 64C46 65.1046 46.8954 66 48 66H64C65.1046 66 66 65.1046 66 64V48C66 46.8954 65.1046 46 64 46H48C46.8954 46 46 46.8954 46 48V64Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLayerBack = forwardRef((props, ref) => {
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

CoreLayerBack.displayName = 'CoreLayerBack'

export default CoreLayerBack
