
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M12 16C12 13.7909 13.7909 12 16 12H32C34.2091 12 36 13.7909 36 16V32C36 34.2091 34.2091 36 32 36H16C13.7909 36 12 34.2091 12 32V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 16C44 13.7909 45.7909 12 48 12H64C66.2091 12 68 13.7909 68 16V32C68 34.2091 66.2091 36 64 36H48C45.7909 36 44 34.2091 44 32V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 46C44 44.8954 44.8954 44 46 44H66C67.1046 44 68 44.8954 68 46V66C68 67.1046 67.1046 68 66 68H46C44.8954 68 44 67.1046 44 66V46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 48C12 45.7909 13.7909 44 16 44H32C34.2091 44 36 45.7909 36 48V64C36 66.2091 34.2091 68 32 68H16C13.7909 68 12 66.2091 12 64V48Z"
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
            x="12"
            y="12"
            width="24"
            height="24"
            rx="4"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <rect
            x="44"
            y="12"
            width="24"
            height="24"
            rx="4"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <rect
            x="12"
            y="44"
            width="24"
            height="24"
            rx="4"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <rect
            x="44"
            y="44"
            width="24"
            height="24"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="12"
            y="12"
            width="24"
            height="24"
            rx="4"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <rect
            x="44"
            y="12"
            width="24"
            height="24"
            rx="4"
            fill="#56CCF2"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <rect
            x="12"
            y="44"
            width="24"
            height="24"
            rx="4"
            fill="#56CCF2"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <rect
            x="44"
            y="44"
            width="24"
            height="24"
            rx="2"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M12 16C12 13.7909 13.7909 12 16 12H32C34.2091 12 36 13.7909 36 16V32C36 34.2091 34.2091 36 32 36H16C13.7909 36 12 34.2091 12 32V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44 16C44 13.7909 45.7909 12 48 12H64C66.2091 12 68 13.7909 68 16V32C68 34.2091 66.2091 36 64 36H48C45.7909 36 44 34.2091 44 32V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 48C12 45.7909 13.7909 44 16 44H32C34.2091 44 36 45.7909 36 48V64C36 66.2091 34.2091 68 32 68H16C13.7909 68 12 66.2091 12 64V48Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44 46C44 44.8954 44.8954 44 46 44H66C67.1046 44 68 44.8954 68 46V66C68 67.1046 67.1046 68 66 68H46C44.8954 68 44 67.1046 44 66V46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 16C12 13.7909 13.7909 12 16 12H32C34.2091 12 36 13.7909 36 16V32C36 34.2091 34.2091 36 32 36H16C13.7909 36 12 34.2091 12 32V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 16C44 13.7909 45.7909 12 48 12H64C66.2091 12 68 13.7909 68 16V32C68 34.2091 66.2091 36 64 36H48C45.7909 36 44 34.2091 44 32V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 48C12 45.7909 13.7909 44 16 44H32C34.2091 44 36 45.7909 36 48V64C36 66.2091 34.2091 68 32 68H16C13.7909 68 12 66.2091 12 64V48Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 46C44 44.8954 44.8954 44 46 44H66C67.1046 44 68 44.8954 68 46V66C68 67.1046 67.1046 68 66 68H46C44.8954 68 44 67.1046 44 66V46Z"
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
            d="M16 10C12.6863 10 10 12.6863 10 16V32C10 35.3137 12.6863 38 16 38H32C35.3137 38 38 35.3137 38 32V16C38 12.6863 35.3137 10 32 10H16ZM14 16C14 14.8954 14.8954 14 16 14H32C33.1046 14 34 14.8954 34 16V32C34 33.1046 33.1046 34 32 34H16C14.8954 34 14 33.1046 14 32V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46 42C43.7909 42 42 43.7909 42 46V66C42 68.2091 43.7909 70 46 70H66C68.2091 70 70 68.2091 70 66V46C70 43.7909 68.2091 42 66 42H46ZM46 46H66V66H46V46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 16C42 12.6863 44.6863 10 48 10H64C67.3137 10 70 12.6863 70 16V32C70 35.3137 67.3137 38 64 38H48C44.6863 38 42 35.3137 42 32V16ZM48 14C46.8954 14 46 14.8954 46 16V32C46 33.1046 46.8954 34 48 34H64C65.1046 34 66 33.1046 66 32V16C66 14.8954 65.1046 14 64 14H48Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 42C12.6863 42 10 44.6863 10 48V64C10 67.3137 12.6863 70 16 70H32C35.3137 70 38 67.3137 38 64V48C38 44.6863 35.3137 42 32 42H16ZM14 48C14 46.8954 14.8954 46 16 46H32C33.1046 46 34 46.8954 34 48V64C34 65.1046 33.1046 66 32 66H16C14.8954 66 14 65.1046 14 64V48Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
        </>
      )
  }
}

const CoreGrid = forwardRef((props, ref) => {
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

CoreGrid.displayName = 'CoreGrid'

export default CoreGrid
