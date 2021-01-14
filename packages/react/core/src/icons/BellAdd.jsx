
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M27.6274 17C23.384 17 19.3143 18.6857 16.3137 21.6863L15.6863 22.3137C12.6857 25.3143 11 29.384 11 33.6274V36.5656C11 41.9665 8.85449 47.1461 5.03546 50.9651C4.37247 51.6281 4 52.5273 4 53.4649C4 55.4173 5.58276 57.0001 7.53519 57.0001H48.4648C50.4172 57.0001 52 55.4173 52 53.4649C52 52.5273 51.6275 51.6281 50.9645 50.9651C47.1455 47.1461 45 41.9665 45 36.5656V33.6274C45 29.384 43.3143 25.3143 40.3137 22.3137L39.6863 21.6863C36.6857 18.6857 32.616 17 28.3726 17H27.6274Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21.7549 57C21.3124 57.9211 21.0718 58.9434 21.0718 60C21.0718 62.4752 22.3923 64.7624 24.5359 66C26.6795 67.2376 29.3205 67.2376 31.4641 66C33.6077 64.7624 34.9282 62.4752 34.9282 60C34.9282 58.9434 34.6876 57.9211 34.245 57"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 17.0829V14C30 12.8954 29.1046 12 28 12C26.8954 12 26 12.8954 26 14V17.0829"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M75.8926 22H55.8926"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65.8926 32L65.8926 12"
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
            d="M21.0718 60C21.0718 62.4752 22.3923 64.7624 24.5359 66C26.6795 67.2376 29.3205 67.2376 31.4641 66C33.6077 64.7624 34.9282 62.4752 34.9282 60H21.0718Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.6274 17C23.384 17 19.3143 18.6857 16.3137 21.6863L15.6863 22.3137C12.6857 25.3143 11 29.384 11 33.6274V36.5656C11 41.9665 8.85449 47.1461 5.03546 50.9651C4.37247 51.6281 4 52.5273 4 53.4649C4 55.4173 5.58276 57.0001 7.53519 57.0001L48.4648 57.0001C50.4172 57.0001 52 55.4173 52 53.4649C52 52.5273 51.6275 51.6281 50.9645 50.9651C47.1455 47.1461 45 41.9665 45 36.5656V33.6274C45 29.384 43.3143 25.3143 40.3137 22.3137L39.6863 21.6863C36.6857 18.6857 32.616 17 28.3726 17H27.6274Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 17.0829V14C30 12.8954 29.1046 12 28 12C26.8954 12 26 12.8954 26 14V17.0829C26.5383 17.0279 27.0814 17 27.6274 17H28.3726C28.9186 17 29.4617 17.0279 30 17.0829Z"
            fill="currentColor"
          />
          <path
            d="M55.8926 22L64.9835 22L66.8017 22L75.8926 22"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65.8926 12L65.8926 21.0909L65.8926 22.9091L65.8926 32"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.7549 57C21.3124 57.9211 21.0718 58.9434 21.0718 60C21.0718 62.4752 22.3923 64.7624 24.5359 66C26.6795 67.2376 29.3205 67.2376 31.4641 66C33.6077 64.7624 34.9282 62.4752 34.9282 60C34.9282 58.9434 34.6876 57.9211 34.245 57H21.7549Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.6274 17C23.384 17 19.3143 18.6857 16.3137 21.6863L15.6863 22.3137C12.6857 25.3143 11 29.384 11 33.6274V36.5656C11 41.9665 8.85449 47.1461 5.03546 50.9651C4.37247 51.6281 4 52.5273 4 53.4649C4 55.4173 5.58276 57.0001 7.53519 57.0001L48.4648 57.0001C50.4172 57.0001 52 55.4173 52 53.4649C52 52.5273 51.6275 51.6281 50.9645 50.9651C47.1455 47.1461 45 41.9665 45 36.5656V33.6274C45 29.384 43.3143 25.3143 40.3137 22.3137L39.6863 21.6863C36.6857 18.6857 32.616 17 28.3726 17H27.6274Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 17.0829V14C30 12.8954 29.1046 12 28 12C26.8954 12 26 12.8954 26 14V17.0829C26.5383 17.0279 27.0814 17 27.6274 17H28.3726C28.9186 17 29.4617 17.0279 30 17.0829Z"
            fill="#F2994A"
          />
          <path
            d="M55.8926 22L64.9835 22L66.8017 22L75.8926 22"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65.8926 12L65.8926 21.0909L65.8926 22.9091L65.8926 32"
            stroke="#EB5757"
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
            d="M21.755 57C21.3124 57.9211 21.0718 58.9434 21.0718 60C21.0718 62.4752 22.3923 64.7624 24.5359 66C26.6795 67.2376 29.3205 67.2376 31.4641 66C33.6077 64.7624 34.9282 62.4752 34.9282 60C34.9282 58.9434 34.6876 57.9211 34.245 57H21.755Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27.6274 17C23.384 17 19.3143 18.6857 16.3137 21.6863L15.6863 22.3137C12.6857 25.3143 11 29.384 11 33.6274V36.5656C11 41.9665 8.85449 47.1461 5.03546 50.9651C4.37247 51.6281 4 52.5273 4 53.4649C4 55.4173 5.58276 57.0001 7.53519 57.0001H48.4648C50.4172 57.0001 52 55.4173 52 53.4649C52 52.5273 51.6275 51.6281 50.9645 50.9651C47.1455 47.1461 45 41.9665 45 36.5656V33.6274C45 29.384 43.3143 25.3143 40.3137 22.3137L39.6863 21.6863C36.6857 18.6857 32.616 17 28.3726 17H27.6274Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 17.0829V14C30 12.8954 29.1046 12 28 12C26.8954 12 26 12.8954 26 14V17.0829C26.5383 17.0279 27.0814 17 27.6274 17H28.3726C28.9186 17 29.4617 17.0279 30 17.0829Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27.6274 17C23.384 17 19.3143 18.6857 16.3137 21.6863L15.6863 22.3137C12.6857 25.3143 11 29.384 11 33.6274V36.5656C11 41.9665 8.85449 47.1461 5.03546 50.9651C4.37247 51.6281 4 52.5273 4 53.4649C4 55.4173 5.58276 57.0001 7.53519 57.0001H48.4648C50.4172 57.0001 52 55.4173 52 53.4649C52 52.5273 51.6275 51.6281 50.9645 50.9651C47.1455 47.1461 45 41.9665 45 36.5656V33.6274C45 29.384 43.3143 25.3143 40.3137 22.3137L39.6863 21.6863C36.6857 18.6857 32.616 17 28.3726 17M27.6274 17H28.3726M27.6274 17C27.0814 17 26.5383 17.0279 26 17.0829V14C26 12.8954 26.8954 12 28 12C29.1046 12 30 12.8954 30 14V17.0829C29.4617 17.0279 28.9186 17 28.3726 17M75.8926 22H55.8926M65.8926 32V12M21.0718 60C21.0718 58.9434 21.3124 57.9211 21.755 57H34.245C34.6876 57.9211 34.9282 58.9434 34.9282 60C34.9282 62.4752 33.6077 64.7624 31.4641 66C29.3205 67.2376 26.6795 67.2376 24.5359 66C22.3923 64.7624 21.0718 62.4752 21.0718 60Z"
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
            d="M28 10C25.7909 10 24 11.7909 24 14V15.3692C20.5781 16.0733 17.407 17.7646 14.8995 20.2721L14.2721 20.8995C10.8964 24.2752 9 28.8535 9 33.6274V36.5656C9 41.436 7.06521 46.107 3.62126 49.5508C2.58319 50.5889 2 51.9968 2 53.4649C2 56.5219 4.47819 59.0001 7.53519 59.0001H19.1279C19.0907 59.3298 19.0718 59.6636 19.0718 60C19.0718 63.1897 20.7735 66.1372 23.5359 67.7321C26.2983 69.3269 29.7017 69.3269 32.4641 67.7321C35.2265 66.1372 36.9282 63.1897 36.9282 60C36.9282 59.6636 36.9093 59.3298 36.8721 59.0001H48.4648C51.5218 59.0001 54 56.5219 54 53.4649C54 51.9968 53.4168 50.5889 52.3787 49.5508C48.9348 46.107 47 41.436 47 36.5656V33.6274C47 28.8535 45.1036 24.2752 41.7279 20.8995L41.1005 20.2721C38.593 17.7646 35.4219 16.0733 32 15.3692V14C32 11.7909 30.2091 10 28 10ZM29.7966 19.0726C29.3256 19.0244 28.8504 19 28.3726 19H27.6274C27.1496 19 26.6744 19.0244 26.2034 19.0726C23.0135 19.3986 20.0156 20.8128 17.7279 23.1005L17.1005 23.7279C14.475 26.3534 13 29.9144 13 33.6274V36.5656C13 42.4969 10.6438 48.1853 6.44966 52.3793C6.16175 52.6672 6 53.0577 6 53.4649C6 54.3127 6.68733 55.0001 7.53519 55.0001H48.4648C49.3127 55.0001 50 54.3127 50 53.4649C50 53.0577 49.8383 52.6672 49.5503 52.3793C45.3562 48.1853 43 42.4969 43 36.5656V33.6274C43 29.9144 41.525 26.3534 38.8995 23.7279L38.2721 23.1005C35.9844 20.8128 32.9865 19.3986 29.7966 19.0726ZM23.0718 60C23.0718 59.6601 23.1068 59.3254 23.1741 59.0001H32.8259C32.8932 59.3254 32.9282 59.6601 32.9282 60C32.9282 61.7607 31.9889 63.3876 30.4641 64.2679C28.9393 65.1483 27.0607 65.1483 25.5359 64.2679C24.0111 63.3876 23.0718 61.7607 23.0718 60Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53.8926 22C53.8926 20.8954 54.788 20 55.8926 20H63.8926V12C63.8926 10.8954 64.788 10 65.8926 10C66.9972 10 67.8926 10.8954 67.8926 12V20L75.8926 20C76.9971 20 77.8926 20.8954 77.8926 22C77.8926 23.1046 76.9971 24 75.8926 24L67.8926 24V32C67.8926 33.1046 66.9971 34 65.8926 34C64.788 34 63.8926 33.1046 63.8926 32V24H55.8926C54.788 24 53.8926 23.1046 53.8926 22Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBellAdd = forwardRef((props, ref) => {
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

CoreBellAdd.displayName = 'CoreBellAdd'

export default CoreBellAdd