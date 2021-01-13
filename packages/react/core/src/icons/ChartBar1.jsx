
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M31 66C31 67.1046 30.1046 68 29 68H15C13.8954 68 13 67.1046 13 66V30C13 28.8954 13.8954 28 15 28H29C30.1046 28 31 28.8954 31 30"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49 14C49 12.8954 48.1046 12 47 12H33C31.8954 12 31 12.8954 31 14V66C31 67.1046 31.8954 68 33 68H47C48.1046 68 49 67.1046 49 66V14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49 66C49 67.1046 49.8954 68 51 68H65C66.1046 68 67 67.1046 67 66V46C67 44.8954 66.1046 44 65 44H51C49.8954 44 49 44.8954 49 46"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M72 68H8"
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
            d="M61 44C62.1046 44 63 44.8954 63 46V66C63 67.1046 62.1046 68 61 68H55C53.8954 68 53 67.1046 53 66V46C53 44.8954 53.8954 44 55 44H61Z"
            fill="currentColor"
          />
          <path
            d="M65 66V46H61V66H65ZM55 70H61V66H55V70ZM51 46V66H55V46H51ZM61 42H55V46H61V42ZM55 46H55V42C52.7909 42 51 43.7909 51 46H55ZM55 66H51C51 68.2091 52.7909 70 55 70V66ZM65 46C65 43.7909 63.2091 42 61 42V46V46H65ZM61 66V70C63.2091 70 65 68.2091 65 66H61Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 28C26.1046 28 27 28.8954 27 30V66C27 67.1046 26.1046 68 25 68H19C17.8954 68 17 67.1046 17 66V30C17 28.8954 17.8954 28 19 28H25Z"
            fill="currentColor"
          />
          <path
            d="M29 66V30H25V66H29ZM19 70H25V66H19V70ZM15 30V66H19V30H15ZM25 26H19V30H25V26ZM19 30H19V26C16.7909 26 15 27.7909 15 30H19ZM19 66H15C15 68.2091 16.7909 70 19 70V66ZM29 30C29 27.7909 27.2091 26 25 26V30V30H29ZM25 66V70C27.2091 70 29 68.2091 29 66H25Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43 12C44.1046 12 45 12.8954 45 14V66C45 67.1046 44.1046 68 43 68H37C35.8954 68 35 67.1046 35 66V14C35 12.8954 35.8954 12 37 12H43Z"
            fill="currentColor"
          />
          <path
            d="M47 66V14H43V66H47ZM37 70H43V66H37V70ZM33 14V66H37V14H33ZM43 10H37V14H43V10ZM37 14H37V10C34.7909 10 33 11.7909 33 14H37ZM37 66H33C33 68.2091 34.7909 70 37 70V66ZM47 14C47 11.7909 45.2091 10 43 10V14V14H47ZM43 66V70C45.2091 70 47 68.2091 47 66H43Z"
            fill="currentColor"
          />
          <path
            d="M72 68H8"
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
            d="M65 44C66.1046 44 67 44.8954 67 46V66C67 67.1046 66.1046 68 65 68H51C49.8954 68 49 67.1046 49 66V46C49 44.8954 49.8954 44 51 44H65Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29 28C30.1046 28 31 28.8954 31 30V66C31 67.1046 30.1046 68 29 68H15C13.8954 68 13 67.1046 13 66V30C13 28.8954 13.8954 28 15 28H29Z"
            fill="#219653"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47 12C48.1046 12 49 12.8954 49 14V66C49 67.1046 48.1046 68 47 68H33C31.8954 68 31 67.1046 31 66V14C31 12.8954 31.8954 12 33 12H47Z"
            fill="#2F80ED"
          />
          <path
            d="M72 68H8"
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
            d="M65 44C66.1046 44 67 44.8954 67 46V66C67 67.1046 66.1046 68 65 68H51C49.8954 68 49 67.1046 49 66V46C49 44.8954 49.8954 44 51 44H65Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29 28C30.1046 28 31 28.8954 31 30V66C31 67.1046 30.1046 68 29 68H15C13.8954 68 13 67.1046 13 66V30C13 28.8954 13.8954 28 15 28H29Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47 12C48.1046 12 49 12.8954 49 14V66C49 67.1046 48.1046 68 47 68H33C31.8954 68 31 67.1046 31 66V14C31 12.8954 31.8954 12 33 12H47Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M49 66V46C49 44.8954 49.8954 44 51 44H65C66.1046 44 67 44.8954 67 46V66C67 67.1046 66.1046 68 65 68H51C49.8954 68 49 67.1046 49 66ZM49 66V14C49 12.8954 48.1046 12 47 12H33C31.8954 12 31 12.8954 31 14V66M49 66C49 67.1046 48.1046 68 47 68H33C31.8954 68 31 67.1046 31 66M31 66V30C31 28.8954 30.1046 28 29 28H15C13.8954 28 13 28.8954 13 30V66C13 67.1046 13.8954 68 15 68H29C30.1046 68 31 67.1046 31 66ZM72 68H8"
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
            d="M29 14C29 11.7909 30.7909 10 33 10H47C49.2091 10 51 11.7909 51 14V42H65C67.2091 42 69 43.7909 69 46V66H72C73.1046 66 74 66.8954 74 68C74 69.1046 73.1046 70 72 70H8C6.89543 70 6 69.1046 6 68C6 66.8954 6.89543 66 8 66H11V30C11 27.7909 12.7909 26 15 26H29V14ZM15 66H29V30H15V66ZM33 66H47V14L33 14V66ZM51 66H65V46H51V66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreChartBar1 = forwardRef((props, ref) => {
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

CoreChartBar1.displayName = 'CoreChartBar1'

export default CoreChartBar1
