
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M19 16C19 13.7909 20.7909 12 23 12H59C61.2091 12 63 13.7909 63 16V64C63 66.2091 61.2091 68 59 68H23C20.7909 68 19 66.2091 19 64V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 28H17M21 20H17M21 36H17M21 52H17M21 60H17M21 44H17"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 24H53"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 32H45"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 40H53"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 48H45"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 56H53"
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
            d="M19.5 16C19.5 13.7909 21.2909 12 23.5 12H59.5C61.7091 12 63.5 13.7909 63.5 16V64C63.5 66.2091 61.7091 68 59.5 68H23.5C21.2909 68 19.5 66.2091 19.5 64V61.5H17.5C16.6716 61.5 16 60.8284 16 60C16 59.1716 16.6716 58.5 17.5 58.5H19.5V53.5H17.5C16.6716 53.5 16 52.8284 16 52C16 51.1716 16.6716 50.5 17.5 50.5H19.5V45.5H17.5C16.6716 45.5 16 44.8284 16 44C16 43.1716 16.6716 42.5 17.5 42.5H19.5V37.5H17.5C16.6716 37.5 16 36.8284 16 36C16 35.1716 16.6716 34.5 17.5 34.5H19.5V29.5H17.5C16.6716 29.5 16 28.8284 16 28C16 27.1716 16.6716 26.5 17.5 26.5H19.5V21.5H17.5C16.6716 21.5 16 20.8284 16 20C16 19.1716 16.6716 18.5 17.5 18.5H19.5V16ZM29.5 21.5C28.1193 21.5 27 22.6193 27 24C27 25.3807 28.1193 26.5 29.5 26.5H53.5C54.8807 26.5 56 25.3807 56 24C56 22.6193 54.8807 21.5 53.5 21.5H29.5ZM27 40C27 38.6193 28.1193 37.5 29.5 37.5H53.5C54.8807 37.5 56 38.6193 56 40C56 41.3807 54.8807 42.5 53.5 42.5H29.5C28.1193 42.5 27 41.3807 27 40ZM29.5 53.5C28.1193 53.5 27 54.6193 27 56C27 57.3807 28.1193 58.5 29.5 58.5H53.5C54.8807 58.5 56 57.3807 56 56C56 54.6193 54.8807 53.5 53.5 53.5H29.5ZM27 32C27 30.6193 28.1193 29.5 29.5 29.5H45.5C46.8807 29.5 48 30.6193 48 32C48 33.3807 46.8807 34.5 45.5 34.5H29.5C28.1193 34.5 27 33.3807 27 32ZM29.5 45.5C28.1193 45.5 27 46.6193 27 48C27 49.3807 28.1193 50.5 29.5 50.5H45.5C46.8807 50.5 48 49.3807 48 48C48 46.6193 46.8807 45.5 45.5 45.5H29.5Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="19"
            y="12"
            width="44"
            height="56"
            rx="4"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
          />
          <path
            d="M29 24L53 24"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 32H45"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 40L53 40"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 48H45"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 56L53 56"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 28L17 28"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 20L17 20"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 36L17 36"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 52L17 52"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 60L17 60"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 44L17 44"
            stroke="#F2994A"
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
            d="M19 16C19 13.7909 20.7909 12 23 12H59C61.2091 12 63 13.7909 63 16V64C63 66.2091 61.2091 68 59 68H23C20.7909 68 19 66.2091 19 64V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29 24H53M29 32H45M29 40H53M29 48H45M29 56H53M21 28H17M21 20H17M21 36H17M21 52H17M21 60H17M21 44H17M23 68H59C61.2091 68 63 66.2091 63 64V16C63 13.7909 61.2091 12 59 12H23C20.7909 12 19 13.7909 19 16V64C19 66.2091 20.7909 68 23 68Z"
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
            d="M29 22C27.8954 22 27 22.8954 27 24C27 25.1046 27.8954 26 29 26H53C54.1046 26 55 25.1046 55 24C55 22.8954 54.1046 22 53 22H29Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 40C27 38.8954 27.8954 38 29 38H53C54.1046 38 55 38.8954 55 40C55 41.1046 54.1046 42 53 42H29C27.8954 42 27 41.1046 27 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 54C27.8954 54 27 54.8954 27 56C27 57.1046 27.8954 58 29 58H53C54.1046 58 55 57.1046 55 56C55 54.8954 54.1046 54 53 54H29Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 32C27 30.8954 27.8954 30 29 30H45C46.1046 30 47 30.8954 47 32C47 33.1046 46.1046 34 45 34H29C27.8954 34 27 33.1046 27 32Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 46C27.8954 46 27 46.8954 27 48C27 49.1046 27.8954 50 29 50H45C46.1046 50 47 49.1046 47 48C47 46.8954 46.1046 46 45 46H29Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 10C19.6863 10 17 12.6863 17 16V18C15.8954 18 15 18.8954 15 20C15 21.1046 15.8954 22 17 22V26C15.8954 26 15 26.8954 15 28C15 29.1046 15.8954 30 17 30V34C15.8954 34 15 34.8954 15 36C15 37.1046 15.8954 38 17 38V42C15.8954 42 15 42.8954 15 44C15 45.1046 15.8954 46 17 46V50C15.8954 50 15 50.8954 15 52C15 53.1046 15.8954 54 17 54V58C15.8954 58 15 58.8954 15 60C15 61.1046 15.8954 62 17 62V64C17 67.3137 19.6863 70 23 70H59C62.3137 70 65 67.3137 65 64V16C65 12.6863 62.3137 10 59 10H23ZM21 46V50C22.1046 50 23 50.8954 23 52C23 53.1046 22.1046 54 21 54V58C22.1046 58 23 58.8954 23 60C23 61.1046 22.1046 62 21 62V64C21 65.1046 21.8954 66 23 66H59C60.1046 66 61 65.1046 61 64V16C61 14.8954 60.1046 14 59 14H23C21.8954 14 21 14.8954 21 16V18C22.1046 18 23 18.8954 23 20C23 21.1046 22.1046 22 21 22V26C22.1046 26 23 26.8954 23 28C23 29.1046 22.1046 30 21 30V34C22.1046 34 23 34.8954 23 36C23 37.1046 22.1046 38 21 38V42C22.1046 42 23 42.8954 23 44C23 45.1046 22.1046 46 21 46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreNotePad1 = forwardRef((props, ref) => {
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

CoreNotePad1.displayName = 'CoreNotePad1'

export default CoreNotePad1
