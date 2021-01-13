
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M60 28C64.4183 28 68 31.5817 68 36V62C68 63.1046 67.1046 64 66 64H14C12.8954 64 12 63.1046 12 62V36C12 31.5817 15.5817 28 20 28H60Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 28V20C52 17.7909 50.2091 16 48 16H32C29.7909 16 28 17.7909 28 20V28"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 46H68"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 41V49"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 41V49"
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
            d="M68 36C68 31.5817 64.4183 28 60 28H20C15.5817 28 12 31.5817 12 36V43H25V41C25 39.3431 26.3431 38 28 38C29.6569 38 31 39.3431 31 41V43H49V41C49 39.3431 50.3431 38 52 38C53.6569 38 55 39.3431 55 41V43H68V36Z"
            fill="currentColor"
          />
          <path
            d="M49 49C49 50.6569 50.3431 52 52 52C53.6569 52 55 50.6569 55 49H68V62C68 63.1046 67.1046 64 66 64H14C12.8954 64 12 63.1046 12 62V49H25C25 50.6569 26.3431 52 28 52C29.6569 52 31 50.6569 31 49H49Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 20C25 16.134 28.134 13 32 13H48C51.866 13 55 16.134 55 20V28C55 29.6569 53.6569 31 52 31C50.3431 31 49 29.6569 49 28V20C49 19.4477 48.5523 19 48 19H32C31.4477 19 31 19.4477 31 20V28C31 29.6569 29.6569 31 28 31C26.3431 31 25 29.6569 25 28V20Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M52 28V20C52 17.7909 50.2091 16 48 16H32C29.7909 16 28 17.7909 28 20V28"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60 28C64.4183 28 68 31.5817 68 36V62C68 63.1046 67.1046 64 66 64H14C12.8954 64 12 63.1046 12 62V36C12 31.5817 15.5817 28 20 28H60Z"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 46H68"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 41V49"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 41V49"
            stroke="#F2C94C"
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
            d="M60 28C64.4183 28 68 31.5817 68 36V62C68 63.1046 67.1046 64 66 64H14C12.8954 64 12 63.1046 12 62V36C12 31.5817 15.5817 28 20 28H60Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52 28V20C52 17.7909 50.2091 16 48 16H32C29.7909 16 28 17.7909 28 20V28M12 46H68M28 41V49M52 41V49M68 36V62C68 63.1046 67.1046 64 66 64H14C12.8954 64 12 63.1046 12 62V36C12 31.5817 15.5817 28 20 28H60C64.4183 28 68 31.5817 68 36Z"
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
            d="M26 20C26 16.6863 28.6863 14 32 14H48C51.3137 14 54 16.6863 54 20V26H60C65.5228 26 70 30.4772 70 36V62C70 64.2091 68.2091 66 66 66H14C11.7909 66 10 64.2091 10 62V36C10 30.4772 14.4772 26 20 26H26V20ZM14 48V62H66V48H54V49C54 50.1046 53.1046 51 52 51C50.8954 51 50 50.1046 50 49V48H30V49C30 50.1046 29.1046 51 28 51C26.8954 51 26 50.1046 26 49V48H14ZM54 44V41C54 39.8954 53.1046 39 52 39C50.8954 39 50 39.8954 50 41V44H30V41C30 39.8954 29.1046 39 28 39C26.8954 39 26 39.8954 26 41V44H14V36C14 32.6863 16.6863 30 20 30H60C63.3137 30 66 32.6863 66 36V44H54ZM50 20V26H30V20C30 18.8954 30.8954 18 32 18H48C49.1046 18 50 18.8954 50 20Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreToolbox = forwardRef((props, ref) => {
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

CoreToolbox.displayName = 'CoreToolbox'

export default CoreToolbox
