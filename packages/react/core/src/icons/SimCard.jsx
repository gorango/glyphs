
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M46 12H26C22.6863 12 20 14.6863 20 18V62C20 65.3137 22.6863 68 26 68H54C57.3137 68 60 65.3137 60 62V26L46 12Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 39C27 36.7909 28.7909 35 31 35H49C51.2091 35 53 36.7909 53 39V57C53 59.2091 51.2091 61 49 61H31C28.7909 61 27 59.2091 27 57V39Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 35V61M44 35V61"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 44H53M53 52H27"
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
            d="M51 42V39C51 37.8954 50.1046 37 49 37H46V42H51Z"
            fill="currentColor"
          />
          <path
            d="M46 46H51V50H46V46Z"
            fill="currentColor"
          />
          <path
            d="M42 42V37H38V42H42Z"
            fill="currentColor"
          />
          <path
            d="M38 46H42V50H38V46Z"
            fill="currentColor"
          />
          <path
            d="M34 42V37H31C29.8954 37 29 37.8954 29 39V42H34Z"
            fill="currentColor"
          />
          <path
            d="M29 46H34V50H29V46Z"
            fill="currentColor"
          />
          <path
            d="M29 54V57C29 58.1046 29.8954 59 31 59H34V54H29Z"
            fill="currentColor"
          />
          <path
            d="M38 54V59H42V54H38Z"
            fill="currentColor"
          />
          <path
            d="M46 54V59H49C50.1046 59 51 58.1046 51 57V54H46Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 12L46 12L60 26V62C60 65.3137 57.3137 68 54 68H26C22.6863 68 20 65.3137 20 62V18C20 14.6863 22.6863 12 26 12ZM31 33C27.6863 33 25 35.6863 25 39V57C25 60.3137 27.6863 63 31 63H49C52.3137 63 55 60.3137 55 57V39C55 35.6863 52.3137 33 49 33H31Z"
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
            d="M46 12H26C22.6863 12 20 14.6863 20 18V62C20 65.3137 22.6863 68 26 68H54C57.3137 68 60 65.3137 60 62V26L46 12Z"
            fill="#828282"
          />
          <path
            d="M46 12L47.4142 10.5858C47.0391 10.2107 46.5304 10 46 10V12ZM60 26H62C62 25.4696 61.7893 24.9609 61.4142 24.5858L60 26ZM26 14H46V10H26V14ZM22 18C22 15.7909 23.7909 14 26 14V10C21.5817 10 18 13.5817 18 18H22ZM22 62V18H18V62H22ZM26 66C23.7909 66 22 64.2091 22 62H18C18 66.4183 21.5817 70 26 70V66ZM54 66H26V70H54V66ZM58 62C58 64.2091 56.2091 66 54 66V70C58.4183 70 62 66.4183 62 62H58ZM58 26V62H62V26H58ZM61.4142 24.5858L47.4142 10.5858L44.5858 13.4142L58.5858 27.4142L61.4142 24.5858Z"
            fill="#828282"
          />
          <path
            d="M27 39C27 36.7909 28.7909 35 31 35H49C51.2091 35 53 36.7909 53 39V57C53 59.2091 51.2091 61 49 61H31C28.7909 61 27 59.2091 27 57V39Z"
            fill="#F2C94C"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 35V61M44 35V61"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27 44H53M53 52H27"
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
            d="M46 12H26C22.6863 12 20 14.6863 20 18V62C20 65.3137 22.6863 68 26 68H54C57.3137 68 60 65.3137 60 62V26L46 12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27 39C27 36.7909 28.7909 35 31 35H49C51.2091 35 53 36.7909 53 39V57C53 59.2091 51.2091 61 49 61H31C28.7909 61 27 59.2091 27 57V39Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 35V61M44 35V61M27 44H53M53 52H27M26 12H46L60 26V62C60 65.3137 57.3137 68 54 68H26C22.6863 68 20 65.3137 20 62V18C20 14.6863 22.6863 12 26 12ZM31 61H49C51.2091 61 53 59.2091 53 57V39C53 36.7909 51.2091 35 49 35H31C28.7909 35 27 36.7909 27 39V57C27 59.2091 28.7909 61 31 61Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31 33C27.6863 33 25 35.6863 25 39V57C25 60.3137 27.6863 63 31 63H49C52.3137 63 55 60.3137 55 57V39C55 35.6863 52.3137 33 49 33H31ZM51 42V39C51 37.8954 50.1046 37 49 37H46V42H51ZM46 46H51V50H46V46ZM42 42V37H38V42H42ZM38 46H42V50H38V46ZM34 42V37H31C29.8954 37 29 37.8954 29 39V42H34ZM29 46H34V50H29V46ZM29 54V57C29 58.1046 29.8954 59 31 59H34V54H29ZM38 54V59H42V54H38ZM46 54V59H49C50.1046 59 51 58.1046 51 57V54H46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 10C21.5817 10 18 13.5817 18 18V62C18 66.4183 21.5817 70 26 70H54C58.4183 70 62 66.4183 62 62V26C62 25.4696 61.7893 24.9609 61.4142 24.5858L47.4142 10.5858C47.0391 10.2107 46.5304 10 46 10H26ZM22 18C22 15.7909 23.7909 14 26 14H45.1716L58 26.8284V62C58 64.2091 56.2091 66 54 66H26C23.7909 66 22 64.2091 22 62V18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSimCard = forwardRef((props, ref) => {
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

CoreSimCard.displayName = 'CoreSimCard'

export default CoreSimCard
