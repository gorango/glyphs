
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path d="M120 0H0V26.6667H120V0Z" fill="#219653"/><path d="M120 53.3401H0V80.0101H120V53.3401Z" fill="#EB5757"/><circle cx="60" cy="39.9897" r="24" fill="#2F80ED"/><path d="M60 25.9897L63.127 35.6858L73.3148 35.6635L65.0596 41.6337L68.229 51.316L60 45.3097L51.771 51.316L54.9404 41.6337L46.6852 35.6635L56.873 35.6858L60 25.9897Z" stroke="#F2C94C" stroke-width="2"/><path d="M67.3832 28.1397L59.2466 39.5185L72.5778 43.7564L59.2416 39.5342L59.3307 53.5226L59.2251 39.5343L45.9489 43.9417L59.2199 39.5187L50.9256 28.2543L59.2332 39.5089L67.3832 28.1397Z" stroke="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#219653"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#EB5757"/><circle cx="40" cy="39.9897" r="24" fill="#2F80ED"/><path d="M40 25.9897L43.127 35.6858L53.3148 35.6635L45.0596 41.6337L48.229 51.316L40 45.3097L31.771 51.316L34.9404 41.6337L26.6852 35.6635L36.873 35.6858L40 25.9897Z" stroke="#F2C94C" stroke-width="2"/><path d="M47.3832 28.1397L39.2466 39.5185L52.5778 43.7564L39.2416 39.5342L39.3307 53.5226L39.2251 39.5343L25.9489 43.9417L39.2199 39.5187L30.9256 28.2543L39.2332 39.5089L47.3832 28.1397Z" stroke="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M80 0H0V26.6667H80V0Z" fill="#219653"/><path d="M80 53.3401H0V80.0101H80V53.3401Z" fill="#EB5757"/><circle cx="40" cy="39.9897" r="24" fill="#2F80ED"/><path d="M40 25.9897L43.127 35.6858L53.3148 35.6635L45.0596 41.6337L48.229 51.316L40 45.3097L31.771 51.316L34.9404 41.6337L26.6852 35.6635L36.873 35.6858L40 25.9897Z" stroke="#F2C94C" stroke-width="2"/><path d="M47.3832 28.1397L39.2466 39.5185L52.5778 43.7564L39.2416 39.5342L39.3307 53.5226L39.2251 39.5343L25.9489 43.9417L39.2199 39.5187L30.9256 28.2543L39.2332 39.5089L47.3832 28.1397Z" stroke="#F2C94C"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsEthiopia = forwardRef((props, ref) => {
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

FlagsEthiopia.displayName = 'FlagsEthiopia'

export default FlagsEthiopia
