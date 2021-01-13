
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M32 24H64C68.4183 24 72 27.5817 72 32V48C72 52.4183 68.4183 56 64 56H32"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 32C8 27.5817 11.5817 24 16 24H32C36.4183 24 40 27.5817 40 32V48C40 52.4183 36.4183 56 32 56H16C11.5817 56 8 52.4183 8 48V32Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <rect
            x="8"
            y="24"
            width="64"
            height="32"
            rx="8"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="8"
            y="24"
            width="32"
            height="32"
            rx="8"
            fill="currentColor"
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
          <rect
            x="8"
            y="24"
            width="64"
            height="32"
            rx="8"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="8"
            y="24"
            width="32"
            height="32"
            rx="8"
            fill="#EB5757"
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
            d="M8 32C8 27.5817 11.5817 24 16 24H64C68.4183 24 72 27.5817 72 32V48C72 52.4183 68.4183 56 64 56H16C11.5817 56 8 52.4183 8 48V32Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M8 32C8 27.5817 11.5817 24 16 24H32C36.4183 24 40 27.5817 40 32V48C40 52.4183 36.4183 56 32 56H16C11.5817 56 8 52.4183 8 48V32Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 56H64C68.4183 56 72 52.4183 72 48V32C72 27.5817 68.4183 24 64 24H16M16 56C11.5817 56 8 52.4183 8 48V32C8 27.5817 11.5817 24 16 24M16 56H32C36.4183 56 40 52.4183 40 48V32C40 27.5817 36.4183 24 32 24H16"
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
            d="M16 22C10.4772 22 6 26.4772 6 32V48C6 53.5228 10.4772 58 16 58H64C69.5228 58 74 53.5228 74 48V32C74 26.4772 69.5228 22 64 22H16ZM32 26H16C12.6863 26 10 28.6863 10 32V48C10 51.3137 12.6863 54 16 54H32C35.3137 54 38 51.3137 38 48V32C38 28.6863 35.3137 26 32 26ZM40.0007 54C41.2561 52.3287 42 50.2512 42 48V32C42 29.7488 41.2561 27.6713 40.0007 26H64C67.3137 26 70 28.6863 70 32V48C70 51.3137 67.3137 54 64 54H40.0007Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreToggle2 = forwardRef((props, ref) => {
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

CoreToggle2.displayName = 'CoreToggle2'

export default CoreToggle2
