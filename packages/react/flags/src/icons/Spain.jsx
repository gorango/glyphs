
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M120 20H0V60H120V20Z"
            fill="#F2C94C"
          />
          <path
            d="M30 35H48V48C48 51.866 44.866 55 41 55H37C33.134 55 30 51.866 30 48V35Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27 35C28.1046 35 29 34.3284 29 33.5C29 32.6716 28.1046 32 27 32C25.8954 32 25 32.6716 25 33.5C25 34.3284 25.8954 35 27 35ZM27 35H25V39.5H24V42.5H25V51.5H24V54.5H30V51.5H29V42.5H30V39.5H29V35H27Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51 35C52.1046 35 53 34.3284 53 33.5C53 32.6716 52.1046 32 51 32C49.8954 32 49 32.6716 49 33.5C49 34.3284 49.8954 35 51 35ZM51 35H49V39.5H48V42.5H49V51.5H48V54.5H54V51.5H53V42.5H54V39.5H53V35H51Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45 33.894C45 33.4196 45.3052 33.0031 45.7439 32.8227C47.7449 31.9999 49 30.8159 49 29.5C49 27.0147 44.5228 25 39 25C33.4772 25 29 27.0147 29 29.5C29 30.8159 30.2552 31.9999 32.2561 32.8227C32.6948 33.0031 33 33.4196 33 33.894C33 34.5048 33.4952 35 34.106 35H43.894C44.5048 35 45 34.5048 45 33.894Z"
            fill="#EB5757"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#EB5757"
          />
          <path
            d="M80 20H0V60H80V20Z"
            fill="#F2C94C"
          />
          <path
            d="M30 35H48V48C48 51.866 44.866 55 41 55H37C33.134 55 30 51.866 30 48V35Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27 35C28.1046 35 29 34.3284 29 33.5C29 32.6716 28.1046 32 27 32C25.8954 32 25 32.6716 25 33.5C25 34.3284 25.8954 35 27 35ZM27 35H25V39.5H24V42.5H25V51.5H24V54.5H30V51.5H29V42.5H30V39.5H29V35H27Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51 35C52.1046 35 53 34.3284 53 33.5C53 32.6716 52.1046 32 51 32C49.8954 32 49 32.6716 49 33.5C49 34.3284 49.8954 35 51 35ZM51 35H49V39.5H48V42.5H49V51.5H48V54.5H54V51.5H53V42.5H54V39.5H53V35H51Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45 33.894C45 33.4196 45.3052 33.0031 45.7439 32.8227C47.7449 31.9999 49 30.8159 49 29.5C49 27.0147 44.5228 25 39 25C33.4772 25 29 27.0147 29 29.5C29 30.8159 30.2552 31.9999 32.2561 32.8227C32.6948 33.0031 33 33.4196 33 33.894C33 34.5048 33.4952 35 34.106 35H43.894C44.5048 35 45 34.5048 45 33.894Z"
            fill="#EB5757"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask00rp4" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask00rp4)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 20H0V60H80V20Z" fill="#F2C94C"/><path d="M30 35H48V48C48 51.866 44.866 55 41 55H37C33.134 55 30 51.866 30 48V35Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27 35C28.1046 35 29 34.3284 29 33.5C29 32.6716 28.1046 32 27 32C25.8954 32 25 32.6716 25 33.5C25 34.3284 25.8954 35 27 35ZM27 35H25V39.5H24V42.5H25V51.5H24V54.5H30V51.5H29V42.5H30V39.5H29V35H27Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M51 35C52.1046 35 53 34.3284 53 33.5C53 32.6716 52.1046 32 51 32C49.8954 32 49 32.6716 49 33.5C49 34.3284 49.8954 35 51 35ZM51 35H49V39.5H48V42.5H49V51.5H48V54.5H54V51.5H53V42.5H54V39.5H53V35H51Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M45 33.894C45 33.4196 45.3052 33.0031 45.7439 32.8227C47.7449 31.9999 49 30.8159 49 29.5C49 27.0147 44.5228 25 39 25C33.4772 25 29 27.0147 29 29.5C29 30.8159 30.2552 31.9999 32.2561 32.8227C32.6948 33.0031 33 33.4196 33 33.894C33 34.5048 33.4952 35 34.106 35H43.894C44.5048 35 45 34.5048 45 33.894Z" fill="#EB5757"/></g>
        </>
      )
  }
}

const FlagsSpain = forwardRef((props, ref) => {
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

FlagsSpain.displayName = 'FlagsSpain'

export default FlagsSpain
