
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V79.9983H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M60 16L65.3883 32.5836H82.8254L68.7185 42.8328L74.1068 59.4164L60 49.1672L45.8932 59.4164L51.2815 42.8328L37.1746 32.5836H54.6117L60 16Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M100 0H-20V79.9983H100V0Z" fill="#EB5757"/><path d="M40 16L45.3883 32.5836H62.8254L48.7185 42.8328L54.1068 59.4164L40 49.1672L25.8932 59.4164L31.2815 42.8328L17.1746 32.5836H34.6117L40 16Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M100 0H-20V79.9983H100V0Z" fill="#EB5757"/><path d="M40 16L45.3883 32.5836H62.8254L48.7185 42.8328L54.1068 59.4164L40 49.1672L25.8932 59.4164L31.2815 42.8328L17.1746 32.5836H34.6117L40 16Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsVietnam = forwardRef((props, ref) => {
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

FlagsVietnam.displayName = 'FlagsVietnam'

export default FlagsVietnam
