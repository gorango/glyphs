
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M60 34V62H20V34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46 50V38H34V50H46Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.5 40L40 18L12.5 40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55 30V20C55 19.4477 54.5523 19 54 19H50C49.4477 19 49 19.4477 49 20V25.2"
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
            d="M40 18L60 34H58C59.1046 34 60 34.8954 60 36L60 60C60 61.1046 59.1046 62 58 62L22 62C20.8954 62 20 61.1046 20 60L20 36C20 34.8954 20.8954 34 22 34H20L40 18ZM46 50V38H34L34 50L46 50Z"
            fill="currentColor"
          />
          <path
            d="M67.5 40L64.5 37.6L40 18L15.5 37.6L12.5 40"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55 30V19H49V25.2L55 30Z"
            fill="currentColor"
          />
          <path
            d="M55 19H57C57 17.8954 56.1046 17 55 17V19ZM55 30L53.7506 31.5617C54.3509 32.042 55.1734 32.1356 55.8664 31.8026C56.5593 31.4696 57 30.7688 57 30H55ZM49 19V17C47.8954 17 47 17.8954 47 19H49ZM49 25.2H47C47 25.8076 47.2762 26.3822 47.7506 26.7617L49 25.2ZM53 19V30H57V19H53ZM49 21H55V17H49V21ZM51 25.2V19H47V25.2H51ZM47.7506 26.7617L53.7506 31.5617L56.2494 28.4383L50.2494 23.6383L47.7506 26.7617Z"
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
            d="M60 34L40 18L20 34L20 62L60 62L60 34Z"
            fill="#F2C94C"
          />
          <path
            d="M60 34H62C62 33.3924 61.7238 32.8178 61.2494 32.4383L60 34ZM40 18L41.2494 16.4383C40.519 15.8539 39.481 15.8539 38.7506 16.4383L40 18ZM20 34L18.7506 32.4383C18.2762 32.8178 18 33.3924 18 34H20ZM20 62H18C18 63.1046 18.8954 64 20 64V62ZM60 62V64C61.1046 64 62 63.1046 62 62H60ZM61.2494 32.4383L41.2494 16.4383L38.7506 19.5617L58.7506 35.5617L61.2494 32.4383ZM38.7506 16.4383L18.7506 32.4383L21.2494 35.5617L41.2494 19.5617L38.7506 16.4383ZM18 34L18 62H22L22 34H18ZM20 64H60V60L20 60V64ZM62 62L62 34H58L58 62H62Z"
            fill="#F2C94C"
          />
          <path
            d="M67.5 40L64.5 37.6L40 18L15.5 37.6L12.5 40"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55 30V19H49V25.2L55 30Z"
            fill="#EB5757"
          />
          <path
            d="M55 19H57C57 17.8954 56.1046 17 55 17V19ZM55 30L53.7506 31.5617C54.3509 32.042 55.1734 32.1356 55.8664 31.8026C56.5593 31.4696 57 30.7688 57 30H55ZM49 19V17C47.8954 17 47 17.8954 47 19H49ZM49 25.2H47C47 25.8076 47.2762 26.3822 47.7506 26.7617L49 25.2ZM53 19V30H57V19H53ZM49 21H55V17H49V21ZM51 25.2V19H47V25.2H51ZM47.7506 26.7617L53.7506 31.5617L56.2494 28.4383L50.2494 23.6383L47.7506 26.7617Z"
            fill="#EB5757"
          />
          <rect
            x="34"
            y="38"
            width="12"
            height="12"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 18L60 34V62H20V34L40 18ZM46 50V38H34V50H46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55 30V19H49V25.2L55 30Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 18L60 34V62H20V34L40 18ZM40 18L12.5 40M40 18L67.5 40M46 38V50H34V38H46ZM55 19V30L49 25.2V19H55Z"
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
            d="M47.7506 26.7617L53.7506 31.5617C53.7511 31.5621 53.7515 31.5624 53.7519 31.5628L58 34.9612V60H22V34.9612L40 20.5613L47.7506 26.7617ZM47.7506 26.7617C47.7505 26.7616 47.7508 26.7619 47.7506 26.7617ZM40.9623 16.2465C40.2643 15.863 39.3898 15.927 38.7506 16.4383L11.2506 38.4383C10.3881 39.1283 10.2483 40.3869 10.9383 41.2494C11.6283 42.1119 12.8869 42.2518 13.7494 41.5617L18 38.1613V62C18 63.1046 18.8954 64 20 64H60C61.1046 64 62 63.1046 62 62V38.1613L66.2506 41.5617C67.1131 42.2518 68.3717 42.1119 69.0618 41.2494C69.7518 40.3869 69.6119 39.1283 68.7494 38.4383L57 29.0387V20C57 18.3431 55.6569 17 54 17H50C48.3432 17 47 18.3431 47 20V21.0387L41.2494 16.4383C41.1581 16.3652 41.062 16.3013 40.9623 16.2465ZM53 25.8387V21H51V24.2388L53 25.8387ZM34 36C32.8954 36 32 36.8954 32 38V50C32 51.1046 32.8954 52 34 52H46C47.1046 52 48 51.1046 48 50V38C48 36.8954 47.1046 36 46 36H34ZM36 48V40H44V48H36Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHouse = forwardRef((props, ref) => {
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

CoreHouse.displayName = 'CoreHouse'

export default CoreHouse
