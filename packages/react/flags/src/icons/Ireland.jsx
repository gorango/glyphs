
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0jNKz)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#219653"/><path d="M120 0H80.001V80H120V0Z" fill="#F2994A"/></g>
          <defs><clipPath id="clip0jNKz"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0Fsfw)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#219653"/><path d="M80.0001 0H53.334V80H80.0001V0Z" fill="#F2994A"/></g>
          <defs><clipPath id="clip0Fsfw"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask08KQk" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask08KQk)"><g clip-path="url(#clip08KQk)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#219653"/><path d="M80.0001 0H53.334V80H80.0001V0Z" fill="#F2994A"/></g></g>
          <defs><clipPath id="clip08KQk"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsIreland = forwardRef((props, ref) => {
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

FlagsIreland.displayName = 'FlagsIreland'

export default FlagsIreland
