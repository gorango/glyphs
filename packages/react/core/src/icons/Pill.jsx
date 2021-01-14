
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 24C15.1634 24 8 31.1634 8 40C8 48.8366 15.1634 56 24 56H40V24H24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 56H56C64.8366 56 72 48.8366 72 40C72 31.1634 64.8366 24 56 24H40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            d="M24 24C15.1634 24 8 31.1634 8 40C8 48.8366 15.1634 56 24 56H37V24H24Z"
            fill="currentColor"
          />
          <path
            d="M43 24V56H56C64.8366 56 72 48.8366 72 40C72 31.1634 64.8366 24 56 24H43Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 24C15.1634 24 8 31.1634 8 40C8 48.8366 15.1634 56 24 56H40V24H24Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56 24C64.8366 24 72 31.1634 72 40C72 48.8366 64.8366 56 56 56H40V24H56Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 24C15.1634 24 8 31.1634 8 40C8 48.8366 15.1634 56 24 56H40V24H24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M56 24C64.8366 24 72 31.1634 72 40C72 48.8366 64.8366 56 56 56H40V24H56Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 56H24C15.1634 56 8 48.8366 8 40C8 31.1634 15.1634 24 24 24H40M40 56V24M40 56H56C64.8366 56 72 48.8366 72 40C72 31.1634 64.8366 24 56 24H40"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 58C14.0589 58 6 49.9411 6 40C6 30.0589 14.0589 22 24 22H56C65.9411 22 74 30.0589 74 40C74 49.9411 65.9411 58 56 58H24ZM10 40C10 32.268 16.268 26 24 26H38V54H24C16.268 54 10 47.732 10 40ZM42 54H56C63.732 54 70 47.732 70 40C70 32.268 63.732 26 56 26H42V54Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePill = forwardRef((props, ref) => {
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

CorePill.displayName = 'CorePill'

export default CorePill
