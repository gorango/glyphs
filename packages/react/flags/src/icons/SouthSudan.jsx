
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0vlBS)"><path d="M120 0H0V40H120V0Z" fill="#333333"/><path d="M120 40H0V80H120V40Z" fill="#219653"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M120 40H0" stroke="#EB5757" stroke-width="16"/><path d="M56 40L0 0V80L56 40Z" fill="#2F80ED"/><path d="M15.7933 27.8839L20.5332 35.2179L28.9631 32.9394L23.4528 39.7137L28.2248 47.0269L20.0793 43.8796L14.5987 50.678L15.0747 41.9586L6.91553 38.847L15.3553 36.6053L15.7933 27.8839Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0vlBS"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip09h72)"><path d="M120 0H0V40H120V0Z" fill="#333333"/><path d="M120 40H0V80H120V40Z" fill="#219653"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M120 40H0" stroke="#EB5757" stroke-width="16"/><path d="M56 40L0 0V80L56 40Z" fill="#2F80ED"/><path d="M15.7933 27.8839L20.5332 35.2179L28.9631 32.9394L23.4528 39.7137L28.2248 47.0269L20.0793 43.8796L14.5987 50.678L15.0747 41.9586L6.91553 38.847L15.3553 36.6053L15.7933 27.8839Z" fill="#F2C94C"/></g>
          <defs><clipPath id="clip09h72"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0J75V" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0J75V)"><g clip-path="url(#clip0J75V)"><path d="M120 0H0V40H120V0Z" fill="#333333"/><path d="M120 40H0V80H120V40Z" fill="#219653"/><path d="M120 40H0" stroke="#F2F2F2" stroke-width="24"/><path d="M120 40H0" stroke="#EB5757" stroke-width="16"/><path d="M56 40L0 0V80L56 40Z" fill="#2F80ED"/><path d="M15.7933 27.8839L20.5332 35.2179L28.9631 32.9394L23.4528 39.7137L28.2248 47.0269L20.0793 43.8796L14.5987 50.678L15.0747 41.9586L6.91553 38.847L15.3553 36.6053L15.7933 27.8839Z" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0J75V"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsSouthSudan = forwardRef((props, ref) => {
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

FlagsSouthSudan.displayName = 'FlagsSouthSudan'

export default FlagsSouthSudan
