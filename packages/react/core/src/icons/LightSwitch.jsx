
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20 16C20 13.7909 21.7909 12 24 12H56C58.2091 12 60 13.7909 60 16V64C60 66.2091 58.2091 68 56 68H24C21.7909 68 20 66.2091 20 64V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.75 17L40.25 17"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.75 63L40.25 63"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.5498 29C31.5498 26.7909 33.3407 25 35.5498 25H44.4498C46.6589 25 48.4498 26.7909 48.4498 29V51C48.4498 53.2091 46.6589 55 44.4498 55H35.5498C33.3407 55 31.5498 53.2091 31.5498 51V29Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.4498 40H31.5498"
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
            d="M33.55 29C33.55 27.8954 34.4454 27 35.55 27H44.45C45.5546 27 46.45 27.8954 46.45 29V38H33.55V29Z"
            fill="currentColor"
          />
          <path
            d="M33.55 42H46.45V51C46.45 52.1046 45.5546 53 44.45 53H35.55C34.4454 53 33.55 52.1046 33.55 51V42Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 12C21.7909 12 20 13.7909 20 16V64C20 66.2091 21.7909 68 24 68H56C58.2091 68 60 66.2091 60 64V16C60 13.7909 58.2091 12 56 12H24ZM39.75 15.5C38.9216 15.5 38.25 16.1716 38.25 17C38.25 17.8284 38.9216 18.5 39.75 18.5H40.25C41.0784 18.5 41.75 17.8284 41.75 17C41.75 16.1716 41.0784 15.5 40.25 15.5L39.75 15.5ZM38.25 63C38.25 62.1716 38.9216 61.5 39.75 61.5H40.25C41.0784 61.5 41.75 62.1716 41.75 63C41.75 63.8284 41.0784 64.5 40.25 64.5H39.75C38.9216 64.5 38.25 63.8284 38.25 63ZM35.55 23C32.2363 23 29.55 25.6863 29.55 29V51C29.55 54.3137 32.2363 57 35.55 57H44.45C47.7637 57 50.45 54.3137 50.45 51V29C50.45 25.6863 47.7637 23 44.45 23H35.55Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="20"
            y="12"
            width="40"
            height="56"
            rx="4"
            fill="#56CCF2"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.75 17L40.25 17"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.75 63L40.25 63"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.5498 29C31.5498 26.7909 33.3407 25 35.5498 25L44.4498 25C46.6589 25 48.4498 26.7909 48.4498 29V40V51C48.4498 53.2091 46.6589 55 44.4498 55H35.5498C33.3407 55 31.5498 53.2091 31.5498 51V40L31.5498 29Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M20 16C20 13.7909 21.7909 12 24 12H56C58.2091 12 60 13.7909 60 16V64C60 66.2091 58.2091 68 56 68H24C21.7909 68 20 66.2091 20 64V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31.55 29C31.55 26.7909 33.3409 25 35.55 25H44.45C46.6591 25 48.45 26.7909 48.45 29V40V51C48.45 53.2091 46.6591 55 44.45 55H35.55C33.3409 55 31.55 53.2091 31.55 51V40V29Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.75 17H40.25M39.75 63H40.25M48.45 40V29C48.45 26.7909 46.6591 25 44.45 25H35.55C33.3409 25 31.55 26.7909 31.55 29V40M48.45 40V51C48.45 53.2091 46.6591 55 44.45 55H35.55C33.3409 55 31.55 53.2091 31.55 51V40M48.45 40H31.55M24 68H56C58.2091 68 60 66.2091 60 64V16C60 13.7909 58.2091 12 56 12H24C21.7909 12 20 13.7909 20 16V64C20 66.2091 21.7909 68 24 68Z"
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
            d="M39.75 15C38.6454 15 37.75 15.8954 37.75 17C37.75 18.1046 38.6454 19 39.75 19H40.25C41.3546 19 42.25 18.1046 42.25 17C42.25 15.8954 41.3546 15 40.25 15H39.75Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.75 63C37.75 61.8954 38.6454 61 39.75 61H40.25C41.3546 61 42.25 61.8954 42.25 63C42.25 64.1046 41.3546 65 40.25 65H39.75C38.6454 65 37.75 64.1046 37.75 63Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.55 23C32.2363 23 29.55 25.6863 29.55 29V51C29.55 54.3137 32.2363 57 35.55 57H44.45C47.7637 57 50.45 54.3137 50.45 51V29C50.45 25.6863 47.7637 23 44.45 23H35.55ZM33.55 29C33.55 27.8954 34.4454 27 35.55 27H44.45C45.5546 27 46.45 27.8954 46.45 29V38H33.55V29ZM33.55 42H46.45V51C46.45 52.1046 45.5546 53 44.45 53H35.55C34.4454 53 33.55 52.1046 33.55 51V42Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 10C20.6863 10 18 12.6863 18 16V64C18 67.3137 20.6863 70 24 70H56C59.3137 70 62 67.3137 62 64V16C62 12.6863 59.3137 10 56 10H24ZM22 16C22 14.8954 22.8954 14 24 14H56C57.1046 14 58 14.8954 58 16V64C58 65.1046 57.1046 66 56 66H24C22.8954 66 22 65.1046 22 64V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLightSwitch = forwardRef((props, ref) => {
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

CoreLightSwitch.displayName = 'CoreLightSwitch'

export default CoreLightSwitch
