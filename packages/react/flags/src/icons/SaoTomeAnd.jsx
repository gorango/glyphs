
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M0 40H120" stroke="#F2C94C" stroke-width="36"/><path d="M36 40L0 0V80L36 40Z" fill="#EB5757"/><path d="M67.313 30L69.5466 36.9257L76.8236 36.9098L70.927 41.1743L73.1908 48.0902L67.313 43.8L61.4351 48.0902L63.699 41.1743L57.8024 36.9098L65.0794 36.9257L67.313 30Z" fill="#333333"/><path d="M95.3804 30L97.614 36.9257L104.891 36.9098L98.9944 41.1743L101.258 48.0902L95.3804 43.8L89.5025 48.0902L91.7664 41.1743L85.8698 36.9098L93.1468 36.9257L95.3804 30Z" fill="#333333"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M0 40H120" stroke="#F2C94C" stroke-width="36"/><path d="M36 40L0 0V80L36 40Z" fill="#EB5757"/><path d="M47.313 30L49.5466 36.9257L56.8236 36.9098L50.927 41.1743L53.1908 48.0902L47.313 43.8L41.4351 48.0902L43.699 41.1743L37.8024 36.9098L45.0794 36.9257L47.313 30Z" fill="#333333"/><path d="M75.3804 30L77.614 36.9257L84.8909 36.9098L78.9944 41.1743L81.2582 48.0902L75.3804 43.8L69.5025 48.0902L71.7664 41.1743L65.8698 36.9098L73.1468 36.9257L75.3804 30Z" fill="#333333"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#219653"/><path d="M0 40H120" stroke="#F2C94C" stroke-width="36"/><path d="M36 40L0 0V80L36 40Z" fill="#EB5757"/><path d="M47.313 30L49.5466 36.9257L56.8236 36.9098L50.927 41.1743L53.1908 48.0902L47.313 43.8L41.4351 48.0902L43.699 41.1743L37.8024 36.9098L45.0794 36.9257L47.313 30Z" fill="#333333"/><path d="M75.3804 30L77.614 36.9257L84.8909 36.9098L78.9944 41.1743L81.2582 48.0902L75.3804 43.8L69.5025 48.0902L71.7664 41.1743L65.8698 36.9098L73.1468 36.9257L75.3804 30Z" fill="#333333"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsSaoTomeAnd = forwardRef((props, ref) => {
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

FlagsSaoTomeAnd.displayName = 'FlagsSaoTomeAnd'

export default FlagsSaoTomeAnd