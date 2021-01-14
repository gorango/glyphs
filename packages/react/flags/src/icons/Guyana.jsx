
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 -0.0102539H0V79.9897H120V-0.0102539Z" fill="#219653"/><path d="M108.664 39.8866L114.026 38L108.664 36.1134L0.663812 -1.88662L-2 -2.82389V0V76V78.8239L0.663812 77.8866L108.664 39.8866Z" fill="#F2C94C" stroke="#F2F2F2" stroke-width="4"/><path d="M61.029 41.715L63.8873 40L61.029 38.285L1.02899 2.28501L-2 0.467619V4V76V79.5324L1.02899 77.715L61.029 41.715Z" fill="#EB5757" stroke="#333333" stroke-width="4"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 -0.0102539H0V79.9897H120V-0.0102539Z" fill="#219653"/><path d="M72.9335 39.7688L76.2849 38L72.9335 36.2312L0.933517 -1.76877L-2 -3.31701V0V76V79.317L0.933517 77.7688L72.9335 39.7688Z" fill="#F2C94C" stroke="#F2F2F2" stroke-width="4"/><path d="M41.3379 41.4866L42.9897 40L41.3379 38.5134L1.33793 2.51341L-2 -0.490725V4V76V80.4907L1.33793 77.4866L41.3379 41.4866Z" fill="#EB5757" stroke="#333333" stroke-width="4"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M120 -0.0102539H0V79.9897H120V-0.0102539Z" fill="#219653"/><path d="M72.9335 39.7688L76.2849 38L72.9335 36.2312L0.933517 -1.76877L-2 -3.31701V0V76V79.317L0.933517 77.7688L72.9335 39.7688Z" fill="#F2C94C" stroke="#F2F2F2" stroke-width="4"/><path d="M41.3379 41.4866L42.9897 40L41.3379 38.5134L1.33793 2.51341L-2 -0.490725V4V76V80.4907L1.33793 77.4866L41.3379 41.4866Z" fill="#EB5757" stroke="#333333" stroke-width="4"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsGuyana = forwardRef((props, ref) => {
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

FlagsGuyana.displayName = 'FlagsGuyana'

export default FlagsGuyana
