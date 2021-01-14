
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M20.2588 57.2059C17.5592 54.9406 16 51.597 16 48.0728V23.9225C16 20.3983 17.5592 17.0546 20.2588 14.7893C22.4061 12.9876 25.1195 12 27.9225 12H52.0775C54.8805 12 57.5939 12.9876 59.7412 14.7893C62.4408 17.0546 64 20.3983 64 23.9224V48.0728C64 51.597 62.4408 54.9406 59.7412 57.2059C57.5939 59.0077 54.8805 59.9952 52.0775 59.9952H27.9225C25.1195 59.9952 22.4061 59.0077 20.2588 57.2059Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 24H64"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 40V24"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M64 40H16"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 50C24 48.3431 25.3431 47 27 47C28.6569 47 30 48.3431 30 50C30 51.6569 28.6569 53 27 53C25.3431 53 24 51.6569 24 50Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50 50C50 48.3431 51.3431 47 53 47C54.6569 47 56 48.3431 56 50C56 51.6569 54.6569 53 53 53C51.3431 53 50 51.6569 50 50Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21 68L29 60"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59 68L51 60"
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
            d="M16 48.0728C16 51.597 17.5592 54.9406 20.2588 57.2059C22.4061 59.0077 25.1195 59.9952 27.9225 59.9952H52.0775C54.8806 59.9952 57.5939 59.0077 59.7412 57.2059C62.4408 54.9406 64 51.597 64 48.0728V40H16V48.0728ZM24 50C24 48.3431 25.3431 47 27 47C28.6569 47 30 48.3431 30 50C30 51.6569 28.6569 53 27 53C25.3431 53 24 51.6569 24 50ZM53 47C51.3431 47 50 48.3431 50 50C50 51.6569 51.3431 53 53 53C54.6569 53 56 51.6569 56 50C56 48.3431 54.6569 47 53 47Z"
            fill="currentColor"
          />
          <path
            d="M16 24H64V23.9224C64 20.3983 62.4408 17.0546 59.7412 14.7893C57.5939 12.9876 54.8806 12 52.0775 12H27.9225C25.1194 12 22.4061 12.9876 20.2588 14.7893C17.5592 17.0546 16 20.3983 16 23.9225V24Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.1213 57.8787C32.2929 59.0503 32.2929 60.9497 31.1213 62.1213L23.1213 70.1213C21.9497 71.2929 20.0503 71.2929 18.8787 70.1213C17.7071 68.9497 17.7071 67.0503 18.8787 65.8787L26.8787 57.8787C28.0503 56.7071 29.9497 56.7071 31.1213 57.8787ZM48.8787 57.8787C50.0503 56.7071 51.9497 56.7071 53.1213 57.8787L61.1213 65.8787C62.2929 67.0503 62.2929 68.9497 61.1213 70.1213C59.9497 71.2929 58.0503 71.2929 56.8787 70.1213L48.8787 62.1213C47.7071 60.9497 47.7071 59.0503 48.8787 57.8787Z"
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
            d="M26.2888 59.8828L19.5858 66.5858C18.8047 67.3668 18.8047 68.6332 19.5858 69.4142C20.3668 70.1953 21.6332 70.1953 22.4142 69.4142L30.4142 61.4142C30.8059 61.0225 31.0012 60.5087 31 59.9952H27.9225C27.3733 59.9952 26.8275 59.9573 26.2888 59.8828ZM49 59.9952C48.9988 60.5087 49.1941 61.0225 49.5858 61.4142L57.5858 69.4142C58.3668 70.1953 59.6332 70.1953 60.4142 69.4142C61.1953 68.6332 61.1953 67.3668 60.4142 66.5858L53.7112 59.8828C53.1725 59.9573 52.6267 59.9952 52.0775 59.9952H49Z"
            fill="#828282"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.2588 57.2059C17.5592 54.9406 16 51.597 16 48.0728V23.9225C16 20.3983 17.5592 17.0546 20.2588 14.7893C22.4061 12.9876 25.1194 12 27.9225 12H52.0775C54.8806 12 57.5939 12.9876 59.7412 14.7893C62.4408 17.0546 64 20.3983 64 23.9224V48.0728C64 51.597 62.4408 54.9406 59.7412 57.2059C57.5939 59.0077 54.8806 59.9952 52.0775 59.9952H27.9225C25.1195 59.9952 22.4061 59.0077 20.2588 57.2059Z"
            fill="#6FCF97"
          />
          <path
            d="M16 24H64V40H16V24Z"
            fill="#2F80ED"
          />
          <path
            d="M40 40V24"
            stroke="#6FCF97"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="24"
            y="47"
            width="6"
            height="6"
            rx="3"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <rect
            x="50"
            y="47"
            width="6"
            height="6"
            rx="3"
            fill="#F2C94C"
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
            d="M20.2588 57.2059C17.5592 54.9406 16 51.597 16 48.0728V23.9225C16 20.3983 17.5592 17.0546 20.2588 14.7893C22.4061 12.9876 25.1195 12 27.9225 12H52.0775C54.8806 12 57.5939 12.9876 59.7412 14.7893C62.4408 17.0546 64 20.3983 64 23.9224V48.0728C64 51.597 62.4408 54.9406 59.7412 57.2059C57.5939 59.0077 54.8806 59.9952 52.0775 59.9952H27.9225C25.1195 59.9952 22.4061 59.0077 20.2588 57.2059Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 24H64V40H16V24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24 50C24 48.3431 25.3431 47 27 47C28.6569 47 30 48.3431 30 50C30 51.6569 28.6569 53 27 53C25.3431 53 24 51.6569 24 50Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50 50C50 48.3431 51.3431 47 53 47C54.6569 47 56 48.3431 56 50C56 51.6569 54.6569 53 53 53C51.3431 53 50 51.6569 50 50Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21 68L29 60M59 68L51 60M40 40V24M27.9225 59.9952H52.0775C54.8805 59.9952 57.5939 59.0077 59.7412 57.2059C62.4408 54.9406 64 51.597 64 48.0728V23.9224C64 20.3983 62.4408 17.0546 59.7412 14.7893C57.5939 12.9876 54.8805 12 52.0775 12H27.9225C25.1195 12 22.4061 12.9876 20.2588 14.7893C17.5592 17.0546 16 20.3983 16 23.9225V48.0728C16 51.597 17.5592 54.9406 20.2588 57.2059C22.4061 59.0077 25.1195 59.9952 27.9225 59.9952ZM16 24V40H64V24H16ZM27 53C25.3431 53 24 51.6569 24 50C24 48.3431 25.3431 47 27 47C28.6569 47 30 48.3431 30 50C30 51.6569 28.6569 53 27 53ZM53 53C51.3431 53 50 51.6569 50 50C50 48.3431 51.3431 47 53 47C54.6569 47 56 48.3431 56 50C56 51.6569 54.6569 53 53 53Z"
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
            d="M22 50C22 47.2386 24.2386 45 27 45C29.7614 45 32 47.2386 32 50C32 52.7614 29.7614 55 27 55C24.2386 55 22 52.7614 22 50ZM27 49C26.4477 49 26 49.4477 26 50C26 50.5523 26.4477 51 27 51C27.5523 51 28 50.5523 28 50C28 49.4477 27.5523 49 27 49Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53 45C50.2386 45 48 47.2386 48 50C48 52.7614 50.2386 55 53 55C55.7614 55 58 52.7614 58 50C58 47.2386 55.7614 45 53 45ZM52 50C52 49.4477 52.4477 49 53 49C53.5523 49 54 49.4477 54 50C54 50.5523 53.5523 51 53 51C52.4477 51 52 50.5523 52 50Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66 23.9224C66 19.8071 64.1793 15.9025 61.0267 13.2572C58.5193 11.1533 55.3508 10 52.0775 10H27.9225C24.6492 10 21.4807 11.1533 18.9733 13.2572C15.8207 15.9025 14 19.8071 14 23.9225V48.0728C14 52.1882 15.8207 56.0927 18.9733 58.738C20.6124 60.1134 22.5341 61.0825 24.5828 61.5888L19.5858 66.5858C18.8047 67.3668 18.8047 68.6332 19.5858 69.4142C20.3668 70.1953 21.6332 70.1953 22.4142 69.4142L29.8332 61.9952H50.1668L57.5858 69.4142C58.3668 70.1953 59.6332 70.1953 60.4142 69.4142C61.1953 68.6332 61.1953 67.3668 60.4142 66.5858L55.4172 61.5888C57.4659 61.0825 59.3876 60.1134 61.0267 58.738C64.1793 56.0927 66 52.1882 66 48.0728V23.9224ZM21.5444 16.3214C23.3314 14.8219 25.5897 14 27.9225 14H52.0775C54.4103 14 56.6686 14.8219 58.4556 16.3214C60.2037 17.7883 61.3773 19.7985 61.8121 22H18.1879C18.6227 19.7985 19.7963 17.7883 21.5444 16.3214ZM38 26H18V38H38V26ZM42 38V26H62V38H42ZM18 42V48.0728C18 51.0058 19.2976 53.7885 21.5444 55.6738C23.3314 57.1733 25.5897 57.9952 27.9225 57.9952H52.0775C54.4103 57.9952 56.6686 57.1733 58.4556 55.6738C60.7024 53.7885 62 51.0058 62 48.0728V42H18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreSubway = forwardRef((props, ref) => {
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

CoreSubway.displayName = 'CoreSubway'

export default CoreSubway
