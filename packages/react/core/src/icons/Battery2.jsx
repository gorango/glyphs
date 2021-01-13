
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70H26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.5 14C47.7761 14 48 13.7761 48 13.5C48 11.567 46.433 10 44.5 10L35.5 10C33.567 10 32 11.567 32 13.5C32 13.7761 32.2239 14 32.5 14"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.1221 59C28.1221 57.8954 29.0175 57 30.1221 57H50.1221C51.2266 57 52.1221 57.8954 52.1221 59L52.1221 61C52.1221 62.1046 51.2266 63 50.1221 63H30.1221C29.0175 63 28.1221 62.1046 28.1221 61V59Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.1221 47C28.1221 45.8954 29.0175 45 30.1221 45H50.1221C51.2266 45 52.1221 45.8954 52.1221 47L52.1221 49C52.1221 50.1046 51.2266 51 50.1221 51H30.1221C29.0175 51 28.1221 50.1046 28.1221 49V47Z"
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
            d="M32.6211 14C32.3454 13.9995 32.1221 13.7758 32.1221 13.5C32.1221 11.567 33.6891 10 35.6221 10H44.6221C46.5551 10 48.1221 11.567 48.1221 13.5C48.1221 13.7758 47.8987 13.9995 47.623 14L54.1221 14C56.3312 14 58.1221 15.7909 58.1221 18L58.1221 66C58.1221 68.2091 56.3312 70 54.1221 70H26.1221C23.9129 70 22.1221 68.2091 22.1221 66L22.1221 18C22.1221 15.7909 23.9129 14 26.1221 14L32.6211 14ZM30.2441 45C29.1396 45 28.2441 45.8954 28.2441 47V49C28.2441 50.1046 29.1396 51 30.2441 51H50.2441C51.3487 51 52.2441 50.1046 52.2441 49L52.2441 47C52.2441 45.8954 51.3487 45 50.2441 45H30.2441ZM30.2441 57C29.1396 57 28.2441 57.8954 28.2441 59V61C28.2441 62.1046 29.1396 63 30.2441 63H50.2441C51.3487 63 52.2441 62.1046 52.2441 61L52.2441 59C52.2441 57.8954 51.3487 57 50.2441 57H30.2441Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70H26Z"
            fill="#2F80ED"
          />
          <path
            d="M32.5 14C32.2239 14 32 13.7761 32 13.5C32 11.567 33.567 10 35.5 10L44.5 10C46.433 10 48 11.567 48 13.5C48 13.7761 47.7761 14 47.5 14L32.5 14Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.1221 47C28.1221 45.8954 29.0175 45 30.1221 45H31.1221H49.1221H50.1221C51.2266 45 52.1221 45.8954 52.1221 47L52.1221 49C52.1221 50.1046 51.2266 51 50.1221 51H49.1221H31.1221H30.1221C29.0175 51 28.1221 50.1046 28.1221 49V47ZM28.1221 59C28.1221 57.8954 29.0175 57 30.1221 57H31.1221H49.1221H50.1221C51.2266 57 52.1221 57.8954 52.1221 59L52.1221 61C52.1221 62.1046 51.2266 63 50.1221 63H49.1221H31.1221H30.1221C29.0175 63 28.1221 62.1046 28.1221 61V59Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70H26Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.5 14C32.2239 14 32 13.7761 32 13.5C32 11.567 33.567 10 35.5 10L44.5 10C46.433 10 48 11.567 48 13.5C48 13.7761 47.7761 14 47.5 14L32.5 14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.1221 47C28.1221 45.8954 29.0175 45 30.1221 45H50.1221C51.2266 45 52.1221 45.8954 52.1221 47L52.1221 49C52.1221 50.1046 51.2266 51 50.1221 51H30.1221C29.0175 51 28.1221 50.1046 28.1221 49V47Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.1221 59C28.1221 57.8954 29.0175 57 30.1221 57H50.1221C51.2266 57 52.1221 57.8954 52.1221 59L52.1221 61C52.1221 62.1046 51.2266 63 50.1221 63H30.1221C29.0175 63 28.1221 62.1046 28.1221 61V59Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26 70C23.7909 70 22 68.2091 22 66L22 18C22 15.7909 23.7909 14 26 14L54 14C56.2091 14 58 15.7909 58 18L58 66C58 68.2091 56.2091 70 54 70H26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.5 14C32.2239 14 32 13.7761 32 13.5C32 11.567 33.567 10 35.5 10L44.5 10C46.433 10 48 11.567 48 13.5C48 13.7761 47.7761 14 47.5 14L32.5 14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.1221 47C28.1221 45.8954 29.0175 45 30.1221 45H50.1221C51.2266 45 52.1221 45.8954 52.1221 47L52.1221 49C52.1221 50.1046 51.2266 51 50.1221 51H30.1221C29.0175 51 28.1221 50.1046 28.1221 49V47Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.1221 59C28.1221 57.8954 29.0175 57 30.1221 57H50.1221C51.2266 57 52.1221 57.8954 52.1221 59L52.1221 61C52.1221 62.1046 51.2266 63 50.1221 63H30.1221C29.0175 63 28.1221 62.1046 28.1221 61V59Z"
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
            d="M30.1221 43C27.9129 43 26.1221 44.7909 26.1221 47V49C26.1221 51.2091 27.9129 53 30.1221 53H50.1221C52.3312 53 54.1221 51.2091 54.1221 49V47C54.1221 44.7909 52.3312 43 50.1221 43H30.1221ZM30.1221 47H50.1221L50.1221 49H30.1221V47Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.1221 55C27.9129 55 26.1221 56.7909 26.1221 59V61C26.1221 63.2091 27.9129 65 30.1221 65H50.1221C52.3312 65 54.1221 63.2091 54.1221 61V59C54.1221 56.7909 52.3312 55 50.1221 55H30.1221ZM30.1221 59H50.1221L50.1221 61H30.1221V59Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.5 8L44.5 8C47.0176 8 49.14 9.69149 49.793 12H54C57.3137 12 60 14.6863 60 18L60 66C60 69.3137 57.3137 72 54 72H26C22.6863 72 20 69.3137 20 66L20 18C20 14.6863 22.6863 12 26 12L30.207 12C30.86 9.69149 32.9824 8 35.5 8ZM54 16C55.1046 16 56 16.8954 56 18L56 66C56 67.1046 55.1046 68 54 68H26C24.8954 68 24 67.1046 24 66L24 18C24 16.8954 24.8954 16 26 16L54 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBattery2 = forwardRef((props, ref) => {
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

CoreBattery2.displayName = 'CoreBattery2'

export default CoreBattery2
