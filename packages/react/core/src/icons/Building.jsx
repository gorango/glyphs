
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20 64H60"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23 16L57 16L57 64H23L23 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23 16H20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M57 16L60 16"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 58C34 56.8954 34.8954 56 36 56H44C45.1046 56 46 56.8954 46 58V64H34V58Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 23H33"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 23H41"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 23H49"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 31H33"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 31H41"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 31H49"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 39H33"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 39H41"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 39H49"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 47H33"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 47H41"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 47H49"
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
            d="M18 16C18 14.8954 18.8954 14 20 14H60C61.1046 14 62 14.8954 62 16C62 17.1046 61.1046 18 60 18H58C57.4477 18 57 18.4477 57 19V61C57 61.5523 57.4477 62 58 62H60C61.1046 62 62 62.8954 62 64C62 65.1046 61.1046 66 60 66H47C46.4477 66 46 65.5523 46 65V58C46 56.8954 45.1046 56 44 56H36C34.8954 56 34 56.8954 34 58V65C34 65.5523 33.5523 66 33 66H20C18.8954 66 18 65.1046 18 64C18 62.8954 18.8954 62 20 62H22C22.5523 62 23 61.5523 23 61V19C23 18.4477 22.5523 18 22 18H20C18.8954 18 18 17.1046 18 16ZM29.5 23C29.5 22.1716 30.1716 21.5 31 21.5H33C33.8284 21.5 34.5 22.1716 34.5 23C34.5 23.8284 33.8284 24.5 33 24.5H31C30.1716 24.5 29.5 23.8284 29.5 23ZM39 21.5C38.1716 21.5 37.5 22.1716 37.5 23C37.5 23.8284 38.1716 24.5 39 24.5H41C41.8284 24.5 42.5 23.8284 42.5 23C42.5 22.1716 41.8284 21.5 41 21.5H39ZM45.5 23C45.5 22.1716 46.1716 21.5 47 21.5H49C49.8284 21.5 50.5 22.1716 50.5 23C50.5 23.8284 49.8284 24.5 49 24.5H47C46.1716 24.5 45.5 23.8284 45.5 23ZM31 29.5C30.1716 29.5 29.5 30.1716 29.5 31C29.5 31.8284 30.1716 32.5 31 32.5H33C33.8284 32.5 34.5 31.8284 34.5 31C34.5 30.1716 33.8284 29.5 33 29.5H31ZM37.5 31C37.5 30.1716 38.1716 29.5 39 29.5H41C41.8284 29.5 42.5 30.1716 42.5 31C42.5 31.8284 41.8284 32.5 41 32.5H39C38.1716 32.5 37.5 31.8284 37.5 31ZM47 29.5C46.1716 29.5 45.5 30.1716 45.5 31C45.5 31.8284 46.1716 32.5 47 32.5H49C49.8284 32.5 50.5 31.8284 50.5 31C50.5 30.1716 49.8284 29.5 49 29.5H47ZM29.5 39C29.5 38.1716 30.1716 37.5 31 37.5H33C33.8284 37.5 34.5 38.1716 34.5 39C34.5 39.8284 33.8284 40.5 33 40.5H31C30.1716 40.5 29.5 39.8284 29.5 39ZM39 37.5C38.1716 37.5 37.5 38.1716 37.5 39C37.5 39.8284 38.1716 40.5 39 40.5H41C41.8284 40.5 42.5 39.8284 42.5 39C42.5 38.1716 41.8284 37.5 41 37.5H39ZM45.5 39C45.5 38.1716 46.1716 37.5 47 37.5H49C49.8284 37.5 50.5 38.1716 50.5 39C50.5 39.8284 49.8284 40.5 49 40.5H47C46.1716 40.5 45.5 39.8284 45.5 39ZM31 45.5C30.1716 45.5 29.5 46.1716 29.5 47C29.5 47.8284 30.1716 48.5 31 48.5H33C33.8284 48.5 34.5 47.8284 34.5 47C34.5 46.1716 33.8284 45.5 33 45.5H31ZM37.5 47C37.5 46.1716 38.1716 45.5 39 45.5H41C41.8284 45.5 42.5 46.1716 42.5 47C42.5 47.8284 41.8284 48.5 41 48.5H39C38.1716 48.5 37.5 47.8284 37.5 47ZM47 45.5C46.1716 45.5 45.5 46.1716 45.5 47C45.5 47.8284 46.1716 48.5 47 48.5H49C49.8284 48.5 50.5 47.8284 50.5 47C50.5 46.1716 49.8284 45.5 49 45.5H47Z"
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
            d="M23 16L57 16L57 64H23L23 16Z"
            fill="#4F4F4F"
          />
          <path
            d="M57 16H59C59 14.8954 58.1046 14 57 14V16ZM23 16V14C21.8954 14 21 14.8954 21 16H23ZM57 64V66C58.1046 66 59 65.1046 59 64H57ZM23 64H21C21 65.1046 21.8954 66 23 66V64ZM20 62C18.8954 62 18 62.8954 18 64C18 65.1046 18.8954 66 20 66V62ZM23 66C24.1046 66 25 65.1046 25 64C25 62.8954 24.1046 62 23 62V66ZM57 62C55.8954 62 55 62.8954 55 64C55 65.1046 55.8954 66 57 66V62ZM60 66C61.1046 66 62 65.1046 62 64C62 62.8954 61.1046 62 60 62V66ZM20 14C18.8954 14 18 14.8954 18 16C18 17.1046 18.8954 18 20 18V14ZM60 18C61.1046 18 62 17.1046 62 16C62 14.8954 61.1046 14 60 14V18ZM57 14L23 14V18L57 18V14ZM59 64L59 16H55L55 64H59ZM23 66H57V62L23 62V66ZM21 16L21 64H25L25 16H21ZM20 66H23V62H20V66ZM57 66H60V62H57V66ZM20 18L60 18V14L20 14V18Z"
            fill="#4F4F4F"
          />
          <path
            d="M34 58C34 56.8954 34.8954 56 36 56H44C45.1046 56 46 56.8954 46 58V64H34V58Z"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <path
            d="M31 23H33"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 23H41"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 23H49"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 31H33"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 31H41"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 31H49"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 39H33"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 39H41"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 39H49"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 47H33"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 47H41"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 47H49"
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
            d="M23 16H57V64H23V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 58C34 56.8954 34.8954 56 36 56H44C45.1046 56 46 56.8954 46 58V64H34V58Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M57 64V16H23V64M57 64H23M57 64H60M23 64H20M20 16H60M31 23H33M39 23H41M47 23H49M31 31H33M39 31H41M47 31H49M31 39H33M39 39H41M47 39H49M31 47H33M39 47H41M47 47H49M46 64V58C46 56.8954 45.1046 56 44 56H36C34.8954 56 34 56.8954 34 58V64H46Z"
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
            d="M29 23C29 21.8954 29.8954 21 31 21H33C34.1046 21 35 21.8954 35 23C35 24.1046 34.1046 25 33 25H31C29.8954 25 29 24.1046 29 23Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 21C37.8954 21 37 21.8954 37 23C37 24.1046 37.8954 25 39 25H41C42.1046 25 43 24.1046 43 23C43 21.8954 42.1046 21 41 21H39Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45 23C45 21.8954 45.8954 21 47 21H49C50.1046 21 51 21.8954 51 23C51 24.1046 50.1046 25 49 25H47C45.8954 25 45 24.1046 45 23Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 29C29.8954 29 29 29.8954 29 31C29 32.1046 29.8954 33 31 33H33C34.1046 33 35 32.1046 35 31C35 29.8954 34.1046 29 33 29H31Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 31C37 29.8954 37.8954 29 39 29H41C42.1046 29 43 29.8954 43 31C43 32.1046 42.1046 33 41 33H39C37.8954 33 37 32.1046 37 31Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 29C45.8954 29 45 29.8954 45 31C45 32.1046 45.8954 33 47 33H49C50.1046 33 51 32.1046 51 31C51 29.8954 50.1046 29 49 29H47Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29 39C29 37.8954 29.8954 37 31 37H33C34.1046 37 35 37.8954 35 39C35 40.1046 34.1046 41 33 41H31C29.8954 41 29 40.1046 29 39Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39 37C37.8954 37 37 37.8954 37 39C37 40.1046 37.8954 41 39 41H41C42.1046 41 43 40.1046 43 39C43 37.8954 42.1046 37 41 37H39Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45 39C45 37.8954 45.8954 37 47 37H49C50.1046 37 51 37.8954 51 39C51 40.1046 50.1046 41 49 41H47C45.8954 41 45 40.1046 45 39Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 45C29.8954 45 29 45.8954 29 47C29 48.1046 29.8954 49 31 49H33C34.1046 49 35 48.1046 35 47C35 45.8954 34.1046 45 33 45H31Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 47C37 45.8954 37.8954 45 39 45H41C42.1046 45 43 45.8954 43 47C43 48.1046 42.1046 49 41 49H39C37.8954 49 37 48.1046 37 47Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 45C45.8954 45 45 45.8954 45 47C45 48.1046 45.8954 49 47 49H49C50.1046 49 51 48.1046 51 47C51 45.8954 50.1046 45 49 45H47Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 14C18.8954 14 18 14.8954 18 16C18 17.1046 18.8954 18 20 18H21V62H20C18.8954 62 18 62.8954 18 64C18 65.1046 18.8954 66 20 66H60C61.1046 66 62 65.1046 62 64C62 62.8954 61.1046 62 60 62H59V18H60C61.1046 18 62 17.1046 62 16C62 14.8954 61.1046 14 60 14H20ZM48 62H55V18H25V62H32V58C32 55.7909 33.7909 54 36 54H44C46.2091 54 48 55.7909 48 58V62ZM36 62H44V58H36V62Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBuilding = forwardRef((props, ref) => {
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

CoreBuilding.displayName = 'CoreBuilding'

export default CoreBuilding
