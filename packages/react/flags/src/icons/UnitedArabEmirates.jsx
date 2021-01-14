
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g filter="url(#filter0_d)"><path d="M124 0H44V80H124V0Z" fill="#F2F2F2"/><path d="M124 0H44V27H124V0Z" fill="#219653"/><path d="M124 53H44V80H124V53Z" fill="#333333"/><path d="M44 0H4V80H44V0Z" fill="#EB5757"/></g>
          <defs><filter id="filter0_d" x="0" y="0" width="128" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g filter="url(#filter0_d)"><path d="M84.0003 0H30.667V80H84.0003V0Z" fill="#F2F2F2"/><path d="M84.0003 0H30.667V27H84.0003V0Z" fill="#219653"/><path d="M84.0003 53H30.667V80H84.0003V53Z" fill="#333333"/><path d="M30.6667 0H4V80H30.6667V0Z" fill="#EB5757"/></g>
          <defs><filter id="filter0_d" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g filter="url(#filter0_d)"><path d="M80.0003 0H26.667V80H80.0003V0Z" fill="#F2F2F2"/><path d="M80.0003 0H26.667V27H80.0003V0Z" fill="#219653"/><path d="M80.0003 53H26.667V80H80.0003V53Z" fill="#333333"/><path d="M26.6667 0H0V80H26.6667V0Z" fill="#EB5757"/></g></g>
          <defs><filter id="filter0_d" x="-4" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        </>
      )
  }
}

const FlagsUnitedArabEmirates = forwardRef((props, ref) => {
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

FlagsUnitedArabEmirates.displayName = 'FlagsUnitedArabEmirates'

export default FlagsUnitedArabEmirates
