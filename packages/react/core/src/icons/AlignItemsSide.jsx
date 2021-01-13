
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M26 23.6667C26 21.4575 27.7909 19.6667 30 19.6667H59.3333C61.5425 19.6667 63.3333 21.4575 63.3333 23.6667V29.6667C63.3333 31.8758 61.5425 33.6667 59.3333 33.6667H30C27.7909 33.6667 26 31.8758 26 29.6667V23.6667Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26 50.3327C26 48.1236 27.7909 46.3327 30 46.3327H50C52.2091 46.3327 54 48.1236 54 50.3327V56.3327C54 58.5418 52.2091 60.3327 50 60.3327H30C27.7909 60.3327 26 58.5418 26 56.3327V50.3327Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.6665 68L16.6665 12"
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
            d="M26 23.6667C26 21.4575 27.7909 19.6667 30 19.6667L59.3333 19.6667C61.5425 19.6667 63.3333 21.4575 63.3333 23.6667V29.6667C63.3333 31.8758 61.5425 33.6667 59.3333 33.6667L30 33.6667C27.7909 33.6667 26 31.8758 26 29.6667V23.6667Z"
            fill="currentColor"
          />
          <path
            d="M26 50.3327C26 48.1236 27.7909 46.3327 30 46.3327L50 46.3327C52.2091 46.3327 54 48.1236 54 50.3327V56.3327C54 58.5418 52.2091 60.3327 50 60.3327H30C27.7909 60.3327 26 58.5418 26 56.3327V50.3327Z"
            fill="currentColor"
          />
          <path
            d="M16.6665 68L16.6665 12"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M26 23.6667C26 21.4575 27.7909 19.6667 30 19.6667L59.3333 19.6667C61.5425 19.6667 63.3333 21.4575 63.3333 23.6667V29.6667C63.3333 31.8758 61.5425 33.6667 59.3333 33.6667L30 33.6667C27.7909 33.6667 26 31.8758 26 29.6667V23.6667Z"
            fill="#219653"
          />
          <path
            d="M26 50.3327C26 48.1236 27.7909 46.3327 30 46.3327L50 46.3327C52.2091 46.3327 54 48.1236 54 50.3327V56.3327C54 58.5418 52.2091 60.3327 50 60.3327H30C27.7909 60.3327 26 58.5418 26 56.3327V50.3327Z"
            fill="#6FCF97"
          />
          <path
            d="M16.6665 68L16.6665 12"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M25.9998 23.6667C25.9998 21.4575 27.7907 19.6667 29.9998 19.6667H59.3332C61.5423 19.6667 63.3332 21.4575 63.3332 23.6667V29.6667C63.3332 31.8758 61.5423 33.6667 59.3332 33.6667H29.9998C27.7907 33.6667 25.9998 31.8758 25.9998 29.6667V23.6667Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M25.9998 50.3327C25.9998 48.1235 27.7907 46.3327 29.9998 46.3327H49.9998C52.209 46.3327 53.9998 48.1235 53.9998 50.3327V56.3327C53.9998 58.5418 52.209 60.3327 49.9998 60.3327H29.9998C27.7907 60.3327 25.9998 58.5418 25.9998 56.3327V50.3327Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.6665 68L16.6665 12M29.9998 33.6667H59.3332C61.5423 33.6667 63.3332 31.8758 63.3332 29.6667V23.6667C63.3332 21.4575 61.5423 19.6667 59.3332 19.6667H29.9998C27.7907 19.6667 25.9998 21.4575 25.9998 23.6667V29.6667C25.9998 31.8758 27.7907 33.6667 29.9998 33.6667ZM29.9998 60.3327H49.9998C52.209 60.3327 53.9998 58.5418 53.9998 56.3327V50.3327C53.9998 48.1235 52.209 46.3327 49.9998 46.3327H29.9998C27.7907 46.3327 25.9998 48.1235 25.9998 50.3327V56.3327C25.9998 58.5418 27.7907 60.3327 29.9998 60.3327Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            d="M14.6665 68C14.6665 69.1046 15.5619 70 16.6665 70C17.7711 70 18.6665 69.1046 18.6665 68L18.6665 12C18.6665 10.8954 17.7711 10 16.6665 10C15.5619 10 14.6665 10.8954 14.6665 12L14.6665 68Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.9998 23.6667C23.9998 20.353 26.6861 17.6667 29.9998 17.6667H59.3332C62.6469 17.6667 65.3332 20.353 65.3332 23.6667V29.6667C65.3332 32.9804 62.6469 35.6667 59.3332 35.6667H29.9998C26.6861 35.6667 23.9998 32.9804 23.9998 29.6667V23.6667ZM29.9998 21.6667C28.8953 21.6667 27.9998 22.5621 27.9998 23.6667V29.6667C27.9998 30.7712 28.8953 31.6667 29.9998 31.6667H59.3332C60.4377 31.6667 61.3332 30.7712 61.3332 29.6667V23.6667C61.3332 22.5621 60.4377 21.6667 59.3332 21.6667H29.9998Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.9998 50.3327C23.9998 47.019 26.6861 44.3327 29.9998 44.3327H49.9998C53.3135 44.3327 55.9998 47.019 55.9998 50.3327V56.3327C55.9998 59.6464 53.3135 62.3327 49.9998 62.3327H29.9998C26.6861 62.3327 23.9998 59.6464 23.9998 56.3327V50.3327ZM29.9998 48.3327C28.8953 48.3327 27.9998 49.2281 27.9998 50.3327V56.3327C27.9998 57.4373 28.8953 58.3327 29.9998 58.3327H49.9998C51.1044 58.3327 51.9998 57.4373 51.9998 56.3327V50.3327C51.9998 49.2281 51.1044 48.3327 49.9998 48.3327H29.9998Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreAlignItemsSide = forwardRef((props, ref) => {
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

CoreAlignItemsSide.displayName = 'CoreAlignItemsSide'

export default CoreAlignItemsSide
