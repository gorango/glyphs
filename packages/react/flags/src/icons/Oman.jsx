
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M120 0H0V26.6667H120V0Z" fill="#F2F2F2"/><path d="M120 53.34H0V80.01H120V53.34Z" fill="#219653"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3137 15L27.2634 10.0504L24.435 7.22192L19.4853 12.1716L14.5356 7.22192L11.7071 10.0504L16.6568 15L11.707 19.9498L14.5355 22.7783L19.4853 17.8285L24.4351 22.7783L27.2635 19.9498L22.3137 15Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#219653"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3137 15L27.2634 10.0504L24.435 7.22192L19.4853 12.1716L14.5356 7.22192L11.7071 10.0504L16.6568 15L11.707 19.9498L14.5355 22.7783L19.4853 17.8285L24.4351 22.7783L27.2635 19.9498L22.3137 15Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 0H0V26.6667H80V0Z" fill="#F2F2F2"/><path d="M80 53.34H0V80.01H80V53.34Z" fill="#219653"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3137 15L27.2634 10.0504L24.435 7.22192L19.4853 12.1716L14.5356 7.22192L11.7071 10.0504L16.6568 15L11.707 19.9498L14.5355 22.7783L19.4853 17.8285L24.4351 22.7783L27.2635 19.9498L22.3137 15Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsOman = forwardRef((props, ref) => {
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

FlagsOman.displayName = 'FlagsOman'

export default FlagsOman
