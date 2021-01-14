
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 16C19.5817 16 16 19.5817 16 24V56C16 60.4183 19.5817 64 24 64H56C60.4183 64 64 60.4183 64 56V24C64 19.5817 60.4183 16 56 16H24ZM40 36C37.7909 36 36 37.7909 36 40C36 42.2091 37.7909 44 40 44C42.2091 44 44 42.2091 44 40C44 37.7909 42.2091 36 40 36Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="8"
            fill="#F2F2F2"
            stroke="#E0E0E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="36"
            y="36"
            width="8"
            height="8"
            rx="4"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 24C16 19.5817 19.5817 16 24 16H56C60.4183 16 64 19.5817 64 24V56C64 60.4183 60.4183 64 56 64H24C19.5817 64 16 60.4183 16 56V24Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40Z"
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
            d="M40 34C36.6863 34 34 36.6863 34 40C34 43.3137 36.6863 46 40 46C43.3137 46 46 43.3137 46 40C46 36.6863 43.3137 34 40 34ZM38 40C38 38.8954 38.8954 38 40 38C41.1046 38 42 38.8954 42 40C42 41.1046 41.1046 42 40 42C38.8954 42 38 41.1046 38 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 14C18.4772 14 14 18.4772 14 24V56C14 61.5228 18.4772 66 24 66H56C61.5228 66 66 61.5228 66 56V24C66 18.4772 61.5228 14 56 14H24ZM18 24C18 20.6863 20.6863 18 24 18H56C59.3137 18 62 20.6863 62 24V56C62 59.3137 59.3137 62 56 62H24C20.6863 62 18 59.3137 18 56V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDie1 = forwardRef((props, ref) => {
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

CoreDie1.displayName = 'CoreDie1'

export default CoreDie1
