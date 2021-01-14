
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.5911 25.3274C50.0701 23.8481 47.1341 23 44 23C34.6112 23 27 30.6112 27 40C27 49.3888 34.6112 57 44 57C47.1341 57 50.0701 56.1519 52.5911 54.6726C49.0234 57.9789 44.2477 60 39 60C27.9543 60 19 51.0457 19 40C19 28.9543 27.9543 20 39 20C44.2477 20 49.0234 22.0211 52.5911 25.3274Z"
            fill="#F2F2F2"
          />
          <path
            d="M60.6593 28.4118L64.6163 34.5051L71.6342 32.6247L67.0619 38.271L71.0189 44.3643L64.236 41.7606L59.6638 47.4069L60.044 40.1514L53.2612 37.5477L60.279 35.6673L60.6593 28.4118Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M100 0H-20V79.9983H100V0Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M46.5911 25.3274C44.0701 23.8481 41.1341 23 38 23C28.6112 23 21 30.6112 21 40C21 49.3888 28.6112 57 38 57C41.1341 57 44.0701 56.1519 46.5911 54.6726C43.0234 57.9789 38.2477 60 33 60C21.9543 60 13 51.0457 13 40C13 28.9543 21.9543 20 33 20C38.2477 20 43.0234 22.0211 46.5911 25.3274Z" fill="#F2F2F2"/><path d="M54.6593 28.4118L58.6163 34.5051L65.6342 32.6247L61.0619 38.271L65.0189 44.3643L58.236 41.7606L53.6638 47.4069L54.044 40.1514L47.2612 37.5477L54.279 35.6673L54.6593 28.4118Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M100 0H-20V79.9983H100V0Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M46.5911 25.3274C44.0701 23.8481 41.1341 23 38 23C28.6112 23 21 30.6112 21 40C21 49.3888 28.6112 57 38 57C41.1341 57 44.0701 56.1519 46.5911 54.6726C43.0234 57.9789 38.2477 60 33 60C21.9543 60 13 51.0457 13 40C13 28.9543 21.9543 20 33 20C38.2477 20 43.0234 22.0211 46.5911 25.3274Z" fill="#F2F2F2"/><path d="M54.6593 28.4118L58.6163 34.5051L65.6342 32.6247L61.0619 38.271L65.0189 44.3643L58.236 41.7606L53.6638 47.4069L54.044 40.1514L47.2612 37.5477L54.279 35.6673L54.6593 28.4118Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsTurkey = forwardRef((props, ref) => {
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

FlagsTurkey.displayName = 'FlagsTurkey'

export default FlagsTurkey
