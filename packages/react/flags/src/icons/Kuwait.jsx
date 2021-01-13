
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0XGpP)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#EB5757"/><path d="M0 0L37.331 26.665V53.335L0 80V0Z" fill="#333333"/></g>
          <defs><clipPath id="clip0XGpP"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0xOZt)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#219653"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#EB5757"/><path d="M0 0L37.331 26.665V53.335L0 80V0Z" fill="#333333"/></g>
          <defs><clipPath id="clip0xOZt"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0omFh" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0omFh)"><g clip-path="url(#clip0omFh)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#219653"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#EB5757"/><path d="M0 0L37.331 26.665V53.335L0 80V0Z" fill="#333333"/></g></g>
          <defs><clipPath id="clip0omFh"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsKuwait = forwardRef((props, ref) => {
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

FlagsKuwait.displayName = 'FlagsKuwait'

export default FlagsKuwait
