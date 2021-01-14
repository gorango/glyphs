
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 -0.0202637H0V8.86863H120V-0.0202637Z" fill="#EB5757"/><path d="M120 8.86865H0V17.7575H120V8.86865Z" fill="#F2F2F2"/><path d="M120 17.7576H0V26.6465H120V17.7576Z" fill="#EB5757"/><path d="M120 26.6465H0V35.5354H120V26.6465Z" fill="#F2F2F2"/><path d="M120 35.5354H0V44.4243H120V35.5354Z" fill="#EB5757"/><path d="M120 44.4241H0V53.313H120V44.4241Z" fill="#F2F2F2"/><path d="M120 53.313H0V62.2019H120V53.313Z" fill="#EB5757"/><path d="M120 62.2019H0V71.0908H120V62.2019Z" fill="#F2F2F2"/><path d="M120 71.0908H0V79.9797H120V71.0908Z" fill="#EB5757"/><rect y="-0.0102539" width="44" height="44" fill="#2F80ED"/><path d="M22 7.98975L25.127 17.6858L35.3148 17.6635L27.0596 23.6337L30.229 33.316L22 27.3097L13.771 33.316L16.9404 23.6337L8.68521 17.6635L18.873 17.6858L22 7.98975Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 -0.0202637H0V8.86863H120V-0.0202637Z" fill="#EB5757"/><path d="M120 8.86865H0V17.7575H120V8.86865Z" fill="#F2F2F2"/><path d="M120 17.7576H0V26.6465H120V17.7576Z" fill="#EB5757"/><path d="M120 26.6465H0V35.5354H120V26.6465Z" fill="#F2F2F2"/><path d="M120 35.5354H0V44.4243H120V35.5354Z" fill="#EB5757"/><path d="M120 44.4241H0V53.313H120V44.4241Z" fill="#F2F2F2"/><path d="M120 53.313H0V62.2019H120V53.313Z" fill="#EB5757"/><path d="M120 62.2019H0V71.0908H120V62.2019Z" fill="#F2F2F2"/><path d="M120 71.0908H0V79.9797H120V71.0908Z" fill="#EB5757"/><rect y="-0.0102539" width="44" height="44" fill="#2F80ED"/><path d="M22 7.98975L25.127 17.6858L35.3148 17.6635L27.0596 23.6337L30.229 33.316L22 27.3097L13.771 33.316L16.9404 23.6337L8.68521 17.6635L18.873 17.6858L22 7.98975Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M120 -0.0202637H0V8.86863H120V-0.0202637Z" fill="#EB5757"/><path d="M120 8.86865H0V17.7575H120V8.86865Z" fill="#F2F2F2"/><path d="M120 17.7576H0V26.6465H120V17.7576Z" fill="#EB5757"/><path d="M120 26.6465H0V35.5354H120V26.6465Z" fill="#F2F2F2"/><path d="M120 35.5354H0V44.4243H120V35.5354Z" fill="#EB5757"/><path d="M120 44.4241H0V53.313H120V44.4241Z" fill="#F2F2F2"/><path d="M120 53.313H0V62.2019H120V53.313Z" fill="#EB5757"/><path d="M120 62.2019H0V71.0908H120V62.2019Z" fill="#F2F2F2"/><path d="M120 71.0908H0V79.9797H120V71.0908Z" fill="#EB5757"/><rect y="-0.0102539" width="44" height="44" fill="#2F80ED"/><path d="M22 7.98975L25.127 17.6858L35.3148 17.6635L27.0596 23.6337L30.229 33.316L22 27.3097L13.771 33.316L16.9404 23.6337L8.68521 17.6635L18.873 17.6858L22 7.98975Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsLiberia = forwardRef((props, ref) => {
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

FlagsLiberia.displayName = 'FlagsLiberia'

export default FlagsLiberia
