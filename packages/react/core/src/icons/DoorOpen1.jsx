
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M76 72H20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68 72V18C68 16.8954 67.1046 16 66 16H30C28.8954 16 28 16.8954 28 18V72"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 72.0001H4V10.775C4 9.40986 5.33739 8.44592 6.63245 8.8776L26.6325 15.5443C27.4491 15.8165 28 16.5808 28 17.4416"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M13.9658 45.2609L10.0001 44.7388"
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
            d="M26.6325 15.5443C27.4491 15.8165 28 16.5808 28 17.4416V72.0001H6C4.89543 72.0001 4 71.1047 4 70.0001V10.775C4 9.40986 5.33739 8.44592 6.63245 8.8776L26.6325 15.5443ZM14.2269 43.2782C15.322 43.4224 16.0929 44.427 15.9487 45.5222C15.8045 46.6173 14.7999 47.3882 13.7048 47.244L9.73899 46.7219C8.64387 46.5777 7.87298 45.5731 8.01715 44.4779C8.16133 43.3828 9.16597 42.6119 10.2611 42.7561L14.2269 43.2782Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 72.0001C17 70.3433 18.3431 69.0001 20 69.0001H76C77.6569 69.0001 79 70.3433 79 72.0001C79 73.657 77.6569 75.0001 76 75.0001H20C18.3431 75.0001 17 73.657 17 72.0001Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 22.0001V66.0001H62V22.0001H34ZM30 16.0001C28.8954 16.0001 28 16.8955 28 18.0001V72.0001H68V18.0001C68 16.8955 67.1046 16.0001 66 16.0001H30Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M28 18C28 16.8954 28.8954 16 30 16H66C67.1046 16 68 16.8954 68 18V72H28V18Z"
            fill="#F2C94C"
          />
          <path
            d="M28 17.4415C28 16.5807 27.4491 15.8164 26.6325 15.5442L6.63245 8.87748C5.33739 8.4458 4 9.40974 4 10.7749V70C4 71.1046 4.89543 72 6 72H28V17.4415Z"
            fill="#F2994A"
          />
          <path
            d="M76 72H20"
            stroke="#4F4F4F"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M13.9658 45.2607L10 44.7386"
            stroke="#4F4F4F"
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
            d="M28 18.0001C28 16.8955 28.8954 16.0001 30 16.0001H66C67.1046 16.0001 68 16.8955 68 18.0001V72.0001H28V18.0001Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28 17.4416C28 16.5808 27.4491 15.8165 26.6325 15.5443L6.63245 8.8776C5.33739 8.44592 4 9.40986 4 10.775V70.0001C4 71.1047 4.89543 72.0001 6 72.0001H28V17.4416Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28 72.0001H68V18.0001C68 16.8955 67.1046 16.0001 66 16.0001H30C28.8954 16.0001 28 16.8955 28 18.0001V72.0001ZM28 72.0001H6C4.89543 72.0001 4 71.1047 4 70.0001V10.775C4 9.40986 5.33739 8.44592 6.63245 8.8776L26.6325 15.5443C27.4491 15.8165 28 16.5808 28 17.4416V72.0001ZM76 72.0001H20M13.9658 45.2611L10 44.739"
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
            d="M14.2269 43.2783C15.322 43.4225 16.0929 44.4271 15.9487 45.5222C15.8045 46.6173 14.7999 47.3882 13.7048 47.2441L9.73899 46.722C8.64387 46.5778 7.87298 45.5731 8.01715 44.478C8.16133 43.3829 9.16597 42.612 10.2611 42.7562L14.2269 43.2783Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.26491 6.98031C4.67478 6.11693 2 8.04481 2 10.775V72.0002C2 73.1048 2.89543 74.0002 4 74.0002H76C77.1046 74.0002 78 73.1048 78 72.0002C78 70.8956 77.1046 70.0002 76 70.0002H70V18.0002C70 15.791 68.2091 14.0002 66 14.0002H30C29.4607 14.0002 28.9463 14.1069 28.4768 14.3004C28.1206 14.0195 27.7127 13.7963 27.2649 13.647L7.26491 6.98031ZM26 70.0002H6L6 10.775L26 17.4417V70.0002ZM66 70.0002H30V18.0002L66 18.0002V70.0002Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDoorOpen1 = forwardRef((props, ref) => {
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

CoreDoorOpen1.displayName = 'CoreDoorOpen1'

export default CoreDoorOpen1
