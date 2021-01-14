
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><g clip-path="url(#clip1)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath><clipPath id="clip1"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><g clip-path="url(#clip1)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath><clipPath id="clip1"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><g clip-path="url(#clip1)"><path d="M40 -0.0102539H0V39.9897H40V-0.0102539Z" fill="#2F80ED"/><path d="M120 -0.0102539H40V39.9897H120V-0.0102539Z" fill="#F2F2F2"/></g><path d="M120 39.9897H0V79.9897H120V39.9897Z" fill="#EB5757"/><path d="M20 9L22.4569 16.6183L30.4616 16.6008L23.9754 21.2917L26.4656 28.8992L20 24.18L13.5344 28.8992L16.0246 21.2917L9.53838 16.6008L17.5431 16.6183L20 9Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath><clipPath id="clip1"><rect width="120" height="40" fill="white" transform="translate(0 -0.0102539)"/></clipPath></defs>
        </>
      )
  }
}

const FlagsChile = forwardRef((props, ref) => {
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

FlagsChile.displayName = 'FlagsChile'

export default FlagsChile
