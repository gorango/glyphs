
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V26.67H120V0Z" fill="#2F80ED"/><path d="M120 53.3301H0V80.0001H120V53.3301Z" fill="#219653"/><path d="M120 26.6926H0V53.3073H120V26.6926Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M67.2126 32.31C65.3927 30.8676 63.0527 30 60.5 30C54.701 30 50 34.4772 50 40C50 45.5228 54.701 50 60.5 50C63.0527 50 65.3927 49.1324 67.2126 47.69C65.0113 50.3242 61.7014 52 58 52C51.3726 52 46 46.6274 46 40C46 33.3726 51.3726 28 58 28C61.7014 28 65.0113 29.6758 67.2126 32.31Z" fill="#F2F2F2"/><path d="M68 34L68.9184 37.7827L72.2426 35.7574L70.2173 39.0816L74 40L70.2173 40.9184L72.2426 44.2426L68.9184 42.2173L68 46L67.0816 42.2173L63.7574 44.2426L65.7827 40.9184L62 40L65.7827 39.0816L63.7574 35.7574L67.0816 37.7827L68 34Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0H0V26.67H80V0Z" fill="#2F80ED"/><path d="M80 53.33H0V80H80V53.33Z" fill="#219653"/><path d="M80 26.6926H0V53.3073H80V26.6926Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M47.2126 32.31C45.3927 30.8676 43.0527 30 40.5 30C34.701 30 30 34.4772 30 40C30 45.5228 34.701 50 40.5 50C43.0527 50 45.3927 49.1324 47.2126 47.69C45.0113 50.3242 41.7014 52 38 52C31.3726 52 26 46.6274 26 40C26 33.3726 31.3726 28 38 28C41.7014 28 45.0113 29.6758 47.2126 32.31Z" fill="#F2F2F2"/><path d="M48 34L48.9184 37.7827L52.2426 35.7574L50.2173 39.0816L54 40L50.2173 40.9184L52.2426 44.2426L48.9184 42.2173L48 46L47.0816 42.2173L43.7574 44.2426L45.7827 40.9184L42 40L45.7827 39.0816L43.7574 35.7574L47.0816 37.7827L48 34Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0H0V26.67H80V0Z" fill="#2F80ED"/><path d="M80 53.33H0V80H80V53.33Z" fill="#219653"/><path d="M80 26.6926H0V53.3073H80V26.6926Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M47.2126 32.31C45.3927 30.8676 43.0527 30 40.5 30C34.701 30 30 34.4772 30 40C30 45.5228 34.701 50 40.5 50C43.0527 50 45.3927 49.1324 47.2126 47.69C45.0113 50.3242 41.7014 52 38 52C31.3726 52 26 46.6274 26 40C26 33.3726 31.3726 28 38 28C41.7014 28 45.0113 29.6758 47.2126 32.31Z" fill="#F2F2F2"/><path d="M48 34L48.9184 37.7827L52.2426 35.7574L50.2173 39.0816L54 40L50.2173 40.9184L52.2426 44.2426L48.9184 42.2173L48 46L47.0816 42.2173L43.7574 44.2426L45.7827 40.9184L42 40L45.7827 39.0816L43.7574 35.7574L47.0816 37.7827L48 34Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsAzerbaijan = forwardRef((props, ref) => {
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

FlagsAzerbaijan.displayName = 'FlagsAzerbaijan'

export default FlagsAzerbaijan
