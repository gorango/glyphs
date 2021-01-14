
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 40H0V80H120V40Z" fill="#219653"/><path d="M120 0H0V40H120V0Z" fill="#333333"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M120 40H0" stroke="#EB5757" stroke-width="20"/><path d="M45 65.99L75 13.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M75 65.99L45 13.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M60 63.9922C67.2867 58.5189 72 49.8049 72 39.99C72 30.1751 67.2867 21.461 60 15.9878C52.7133 21.461 48 30.1751 48 39.99C48 49.8049 52.7133 58.5189 60 63.9922Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M69.5 51.9985C67.8921 48.3215 67 44.2599 67 39.99C67 35.7201 67.8921 31.6585 69.5 27.9814C71.1079 31.6585 72 35.7201 72 39.99C72 44.2599 71.1079 48.3215 69.5 51.9985Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M50.5 51.9985C52.1079 48.3215 53 44.2599 53 39.99C53 35.7201 52.1079 31.6585 50.5 27.9814C48.8921 31.6585 48 35.7201 48 39.99C48 44.2599 48.8921 48.3215 50.5 51.9985Z" fill="#333333"/><path d="M60 47.99L60 57.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M60 21.99V31.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M60 38.99V40.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M80 0H0V40H80V0Z" fill="#333333"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M80 40H0" stroke="#EB5757" stroke-width="20"/><path d="M25 65.99L55 13.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M55 65.99L25 13.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 63.9922C47.2867 58.5189 52 49.8049 52 39.99C52 30.1751 47.2867 21.461 40 15.9878C32.7133 21.461 28 30.1751 28 39.99C28 49.8049 32.7133 58.5189 40 63.9922Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 51.9985C47.8921 48.3215 47 44.2599 47 39.99C47 35.7201 47.8921 31.6585 49.5 27.9814C51.1079 31.6585 52 35.7201 52 39.99C52 44.2599 51.1079 48.3215 49.5 51.9985Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 51.9985C32.1079 48.3215 33 44.2599 33 39.99C33 35.7201 32.1079 31.6585 30.5 27.9814C28.8921 31.6585 28 35.7201 28 39.99C28 44.2599 28.8921 48.3215 30.5 51.9985Z" fill="#333333"/><path d="M40 47.99L40 57.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 21.99V31.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 38.99V40.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 40H0V80H80V40Z" fill="#219653"/><path d="M80 0H0V40H80V0Z" fill="#333333"/><path d="M80 40H0" stroke="#F2F2F2" stroke-width="28"/><path d="M80 40H0" stroke="#EB5757" stroke-width="20"/><path d="M25 65.99L55 13.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M55 65.99L25 13.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40 63.9922C47.2867 58.5189 52 49.8049 52 39.99C52 30.1751 47.2867 21.461 40 15.9878C32.7133 21.461 28 30.1751 28 39.99C28 49.8049 32.7133 58.5189 40 63.9922Z" fill="#EB5757"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 51.9985C47.8921 48.3215 47 44.2599 47 39.99C47 35.7201 47.8921 31.6585 49.5 27.9814C51.1079 31.6585 52 35.7201 52 39.99C52 44.2599 51.1079 48.3215 49.5 51.9985Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 51.9985C32.1079 48.3215 33 44.2599 33 39.99C33 35.7201 32.1079 31.6585 30.5 27.9814C28.8921 31.6585 28 35.7201 28 39.99C28 44.2599 28.8921 48.3215 30.5 51.9985Z" fill="#333333"/><path d="M40 47.99L40 57.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 21.99V31.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 38.99V40.99" stroke="#F2F2F2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsKenya = forwardRef((props, ref) => {
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

FlagsKenya.displayName = 'FlagsKenya'

export default FlagsKenya
