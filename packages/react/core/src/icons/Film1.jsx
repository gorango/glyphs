
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M58 40H22M22 16H58V64H22V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 16V64M12 64V16"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 64V16M58 16V64"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 16H22"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 64H68"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 28H12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 52H58"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 40H12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 40H58"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 52H12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 28H58"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 64H12"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 16H58"
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
            d="M58 16L22 16L22 35L58 35V16ZM58 45L22 45L22 64H58V45Z"
            fill="currentColor"
          />
          <path
            d="M22 16L22 14C20.8954 14 20 14.8954 20 16H22ZM58 16H60C60 15.4696 59.7893 14.9609 59.4142 14.5858C59.0391 14.2107 58.5304 14 58 14V16ZM22 35H20C20 35.5304 20.2107 36.0391 20.5858 36.4142C20.9609 36.7893 21.4696 37 22 37L22 35ZM58 35V37C59.1046 37 60 36.1046 60 35H58ZM58 45H60C60 44.4696 59.7893 43.9609 59.4142 43.5858C59.0391 43.2107 58.5304 43 58 43V45ZM22 45L22 43C20.8954 43 20 43.8954 20 45H22ZM22 64H20C20 64.5304 20.2107 65.0391 20.5858 65.4142C20.9609 65.7893 21.4696 66 22 66L22 64ZM58 64V66C59.1046 66 60 65.1046 60 64H58ZM22 18L58 18V14L22 14L22 18ZM24 35L24 16H20L20 35H24ZM22 37L58 37V33L22 33L22 37ZM56 16V35H60V16H56ZM58 43L22 43L22 47L58 47V43ZM24 64L24 45H20L20 64H24ZM58 62L22 62L22 66H58V62ZM56 45V64H60V45H56Z"
            fill="currentColor"
          />
          <path
            d="M12 16L12 64M22 16L22 64"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 16L22 16"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 28L12 28"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 40H12"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 52H12"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 64H12"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 16L58 64M68 16V64"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 16L68 16"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 28L58 28"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 40H58"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 52H58"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 64H58"
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
            d="M58 16L22 16L22 64H58L58 16Z"
            fill="#56CCF2"
          />
          <path
            d="M22 16V14C20.8954 14 20 14.8954 20 16H22ZM58 16H60C60 14.8954 59.1046 14 58 14V16ZM22 64H20C20 65.1046 20.8954 66 22 66V64ZM58 64V66C59.1046 66 60 65.1046 60 64H58ZM58 42C59.1046 42 60 41.1046 60 40C60 38.8954 59.1046 38 58 38V42ZM22 38C20.8954 38 20 38.8954 20 40C20 41.1046 20.8954 42 22 42V38ZM22 18L58 18V14L22 14V18ZM24 64L24 16H20L20 64H24ZM58 62L22 62V66H58V62ZM56 16L56 64H60L60 16H56ZM58 38L22 38V42L58 42V38Z"
            fill="#9B51E0"
          />
          <path
            d="M12 16L12 64M22 16L22 64"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 16L22 16"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 28L12 28"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 40H12"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 52H12"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 64H12"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 16L58 64M68 16V64"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M58 16L68 16"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 28L58 28"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 40H58"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 52H58"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 64H58"
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
            d="M58 16H22V64H58V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22 16H58M22 16V64M22 16H12V64H22M58 16V64M58 16H68V64H58M22 64H58M22 28H12M12 40H68M22 52H12M68 28H58M68 52H58"
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
            d="M10 16C10 14.8954 10.8954 14 12 14H68C69.1046 14 70 14.8954 70 16V64C70 65.1046 69.1046 66 68 66H12C10.8954 66 10 65.1046 10 64V16ZM60 62H66V54H60V62ZM66 42V50H60V42H66ZM56 42V62H24V42H56ZM60 38H66V30H60V38ZM66 18V26H60V18H66ZM56 18V38H24V18H56ZM14 62H20V54H14V62ZM14 50H20V42H14V50ZM14 38H20V30H14V38ZM14 26H20V18H14V26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreFilm1 = forwardRef((props, ref) => {
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

CoreFilm1.displayName = 'CoreFilm1'

export default CoreFilm1
