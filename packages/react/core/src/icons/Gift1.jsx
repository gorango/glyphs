
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M24 24H56V68H24V24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 58V34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="1 8"
          />
          <path
            d="M29.6077 18L39.9884 23.9969"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34 13.6077L39.9915 23.9915"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.0001 12L39.9969 23.9884"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.0085 23.9915L46.0001 13.6077"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.3924 18L40.0085 23.9915"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <rect
            x="24"
            y="24"
            width="32"
            height="44"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 9.5C41.3805 9.5 42.4997 10.6189 42.5 11.9994V12.0006L42.5007 14.6673L43.8346 12.3583L43.8353 12.3571C44.5258 11.1618 46.0545 10.7524 47.25 11.4426C48.4455 12.1329 48.8553 13.6614 48.1654 14.8571L48.1648 14.8583L46.832 17.168L49.1418 15.8353L49.1429 15.8346C50.3386 15.1447 51.8672 15.5545 52.5574 16.75C53.1971 17.858 52.8923 19.2521 51.8927 20H28.1073C27.1078 19.2521 26.803 17.858 27.4427 16.75C28.1329 15.5545 29.6615 15.1447 30.8572 15.8346L30.8583 15.8353L33.168 17.168L31.8353 14.8583L31.8346 14.8571C31.1447 13.6614 31.5545 12.1329 32.75 11.4426C33.9455 10.7524 35.4742 11.1618 36.1648 12.3571L36.1654 12.3583L37.4993 14.6673L37.5 12.0006V11.9994C37.5004 10.6189 38.6196 9.5 40 9.5Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="24"
            y="24"
            width="32"
            height="44"
            fill="#6FCF97"
            stroke="#6FCF97"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 34V58"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="1 8"
          />
          <path
            d="M40 12L42 11.9995C41.9997 10.8951 41.1044 10 40 10C38.8956 10 38.0003 10.8951 38 11.9995L40 12ZM40.0031 23.9884L38.0031 23.9889C38.0033 24.8939 38.6113 25.686 39.4855 25.9203C40.3596 26.1545 41.2822 25.7725 41.7349 24.9889L40.0031 23.9884ZM39.9969 23.9884L38.2651 24.9889C38.7178 25.7725 39.6404 26.1545 40.5145 25.9203C41.3887 25.686 41.9967 24.8939 41.9969 23.9889L39.9969 23.9884ZM34 13.6077L35.7318 12.6072C35.1794 11.651 33.9564 11.3235 33 11.8756C32.0436 12.4278 31.7158 13.6507 32.2677 14.6072L34 13.6077ZM39.9915 23.9915L38.992 25.7238C39.7759 26.1761 40.7658 26.0457 41.4057 25.4057C42.0457 24.7658 42.1761 23.7759 41.7238 22.992L39.9915 23.9915ZM29.6077 18L30.6072 16.2677C29.6507 15.7158 28.4278 16.0436 27.8756 17C27.3235 17.9564 27.651 19.1794 28.6072 19.7318L29.6077 18ZM39.9884 23.9969L39.9889 25.9969C40.8939 25.9967 41.686 25.3887 41.9203 24.5145C42.1545 23.6404 41.7725 22.7178 40.9889 22.2651L39.9884 23.9969ZM28 24L27.9995 22C26.895 22.0003 25.9999 22.8958 26 24.0003C26.0001 25.1047 26.8955 26 28 26L28 24ZM52 24V26C53.1045 26 53.9999 25.1047 54 24.0003C54.0001 22.8958 53.105 22.0003 52.0005 22L52 24ZM40.0116 23.9969L39.0111 22.2651C38.2275 22.7178 37.8455 23.6404 38.0797 24.5145C38.314 25.3887 39.1061 25.9967 40.0111 25.9969L40.0116 23.9969ZM50.3923 18L51.3928 19.7318C52.349 19.1794 52.6765 17.9564 52.1244 17C51.5722 16.0436 50.3493 15.7158 49.3928 16.2677L50.3923 18ZM40.0085 23.9915L38.2762 22.992C37.8239 23.7759 37.9543 24.7658 38.5943 25.4057C39.2342 26.0457 40.2241 26.1761 41.008 25.7238L40.0085 23.9915ZM46 13.6077L47.7323 14.6072C48.2842 13.6507 47.9564 12.4278 47 11.8756C46.0436 11.3235 44.8206 11.651 44.2682 12.6072L46 13.6077ZM38 12.0005L38.0031 23.9889L42.0031 23.9879L42 11.9995L38 12.0005ZM41.9969 23.9889L42 12.0005L38 11.9995L37.9969 23.9879L41.9969 23.9889ZM32.2682 14.6081L38.2651 24.9889L41.7287 22.988L35.7318 12.6072L32.2682 14.6081ZM41.7238 22.992L35.7323 12.6081L32.2677 14.6072L38.2592 24.9911L41.7238 22.992ZM28.6081 19.7323L38.992 25.7238L40.9911 22.2592L30.6072 16.2677L28.6081 19.7323ZM40.9889 22.2651L30.6081 16.2682L28.6072 19.7318L38.988 25.7287L40.9889 22.2651ZM28.0005 26L39.9889 25.9969L39.9879 21.9969L27.9995 22L28.0005 26ZM28 26H52V22H28V26ZM40.0111 25.9969L51.9995 26L52.0005 22L40.0121 21.9969L40.0111 25.9969ZM49.3919 16.2682L39.0111 22.2651L41.012 25.7287L51.3928 19.7318L49.3919 16.2682ZM41.008 25.7238L51.3919 19.7323L49.3928 16.2677L39.0089 22.2592L41.008 25.7238ZM44.2677 12.6081L38.2762 22.992L41.7408 24.9911L47.7323 14.6072L44.2677 12.6081ZM41.7349 24.9889L47.7318 14.6081L44.2682 12.6072L38.2713 22.988L41.7349 24.9889Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M24 24H56V68H24V24Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 58V34"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="1 8"
          />
          <path
            d="M40.0031 23.9884L40 12L39.9969 23.9884L34 13.6077L39.9915 23.9915L29.6077 18L39.9884 23.9969L28 24H52L40.0116 23.9969L50.3923 18L40.0085 23.9915L46 13.6077L40.0031 23.9884Z"
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
            d="M40 32C41.1046 32 42 32.8954 42 34V34.4444C42 35.549 41.1046 36.4444 40 36.4444C38.8954 36.4444 38 35.549 38 34.4444V34C38 32.8954 38.8954 32 40 32Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 39.5556C41.1046 39.5556 42 40.451 42 41.5556V42.4444C42 43.549 41.1046 44.4444 40 44.4444C38.8954 44.4444 38 43.549 38 42.4444V41.5556C38 40.451 38.8954 39.5556 40 39.5556Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 47.5556C41.1046 47.5556 42 48.451 42 49.5556V50.4444C42 51.549 41.1046 52.4444 40 52.4444C38.8954 52.4444 38 51.549 38 50.4444V49.5556C38 48.451 38.8954 47.5556 40 47.5556Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 55.5556C41.1046 55.5556 42 56.451 42 57.5556V58C42 59.1046 41.1046 60 40 60C38.8954 60 38 59.1046 38 58V57.5556C38 56.451 38.8954 55.5556 40 55.5556Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 11.9995C41.9997 10.8951 41.1044 10 40 10C38.8956 10 38.0003 10.8951 38 11.9995L37.9988 16.5315L35.7318 12.6072C35.1794 11.651 33.9564 11.3235 33 11.8756C32.0436 12.4278 31.7158 13.6507 32.2677 14.6072L34.5327 18.5327L30.6072 16.2677C29.6507 15.7158 28.4278 16.0436 27.8756 17C27.3235 17.9564 27.651 19.1794 28.6072 19.7318L32.5315 21.9988L24 22C22.8954 22 22 22.8954 22 24V68C22 69.1046 22.8954 70 24 70H56C57.1046 70 58 69.1046 58 68V24C58 22.8954 57.1046 22 56 22L47.4685 21.9988L51.3928 19.7318C52.349 19.1794 52.6765 17.9564 52.1244 17C51.5722 16.0436 50.3493 15.7158 49.3928 16.2677L45.4673 18.5327L47.7318 14.6081L47.7323 14.6072C48.2842 13.6507 47.9564 12.4278 47 11.8756C46.0436 11.3235 44.8206 11.651 44.2682 12.6072L44.2677 12.6081L42.0012 16.5315L42 11.9995ZM26 26V66H54V26H26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGift1 = forwardRef((props, ref) => {
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

CoreGift1.displayName = 'CoreGift1'

export default CoreGift1
