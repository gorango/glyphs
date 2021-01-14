
import React, { forwardRef } from 'react'
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
            d="M12 48C12 45.7909 13.7909 44 16 44H32C34.2091 44 36 45.7909 36 48V64C36 66.2091 34.2091 68 32 68H16C13.7909 68 12 66.2091 12 64V48Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 56H44"
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
          <path
            d="M44 56L54.9091 56L57.0909 56L68 56"
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
          <path
            d="M44 56L54.9091 56L57.0909 56L68 56"
            stroke="#9B51E0"
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
            d="M68 56H44M16 36H32C34.2091 36 36 34.2091 36 32V16C36 13.7909 34.2091 12 32 12H16C13.7909 12 12 13.7909 12 16V32C12 34.2091 13.7909 36 16 36ZM48 36H64C66.2091 36 68 34.2091 68 32V16C68 13.7909 66.2091 12 64 12H48C45.7909 12 44 13.7909 44 16V32C44 34.2091 45.7909 36 48 36ZM16 68H32C34.2091 68 36 66.2091 36 64V48C36 45.7909 34.2091 44 32 44H16C13.7909 44 12 45.7909 12 48V64C12 66.2091 13.7909 68 16 68Z"
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
            d="M16 10C12.6863 10 10 12.6863 10 16V32C10 35.3137 12.6863 38 16 38H32C35.3137 38 38 35.3137 38 32V16C38 12.6863 35.3137 10 32 10H16ZM14 16C14 14.8954 14.8954 14 16 14H32C33.1046 14 34 14.8954 34 16V32C34 33.1046 33.1046 34 32 34H16C14.8954 34 14 33.1046 14 32V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48 10C44.6863 10 42 12.6863 42 16V32C42 35.3137 44.6863 38 48 38H64C67.3137 38 70 35.3137 70 32V16C70 12.6863 67.3137 10 64 10H48ZM46 16C46 14.8954 46.8954 14 48 14H64C65.1046 14 66 14.8954 66 16V32C66 33.1046 65.1046 34 64 34H48C46.8954 34 46 33.1046 46 32V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 48C10 44.6863 12.6863 42 16 42H32C35.3137 42 38 44.6863 38 48V64C38 67.3137 35.3137 70 32 70H16C12.6863 70 10 67.3137 10 64V48ZM16 46C14.8954 46 14 46.8954 14 48V64C14 65.1046 14.8954 66 16 66H32C33.1046 66 34 65.1046 34 64V48C34 46.8954 33.1046 46 32 46H16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44 54C42.8954 54 42 54.8954 42 56C42 57.1046 42.8954 58 44 58H68C69.1046 58 70 57.1046 70 56C70 54.8954 69.1046 54 68 54H44Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGridRemove = forwardRef((props, ref) => {
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

CoreGridRemove.displayName = 'CoreGridRemove'

export default CoreGridRemove
