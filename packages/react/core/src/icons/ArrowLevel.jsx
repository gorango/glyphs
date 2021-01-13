
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M29.6569 27.9995L50.3432 27.9995C52.4307 27.9995 53.4762 25.4756 52.0001 23.9995L42.1214 14.1209C40.9498 12.9493 39.0503 12.9493 37.8787 14.1209L28.0001 23.9995C26.524 25.4756 27.5694 27.9995 29.6569 27.9995Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40 28L40 59.9995C40 64.4178 43.5817 67.9995 48 67.9995H52"
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
            d="M37.0005 28C37.0005 26.3431 38.3436 25 40.0005 25C41.6573 25 43.0005 26.3431 43.0005 28H37.0005ZM52.0005 64.9995C53.6573 64.9995 55.0005 66.3427 55.0005 67.9995C55.0005 69.6564 53.6573 70.9995 52.0005 70.9995V64.9995ZM43.0005 28L43.0005 59.9995H37.0005L37.0005 28H43.0005ZM48.0005 64.9995H52.0005V70.9995H48.0005V64.9995ZM43.0005 59.9995C43.0005 62.7609 45.2391 64.9995 48.0005 64.9995V70.9995C41.9254 70.9995 37.0005 66.0746 37.0005 59.9995H43.0005Z"
            fill="currentColor"
          />
          <path
            d="M29.6573 28L50.3436 28C52.4312 28 53.4766 25.4761 52.0005 24L42.1218 14.1213C40.9502 12.9497 39.0507 12.9497 37.8792 14.1213L28.0005 24C26.5244 25.4761 27.5698 28 29.6573 28Z"
            fill="currentColor"
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
            d="M38.0005 28C38.0005 26.8954 38.8959 26 40.0005 26C41.1051 26 42.0005 26.8954 42.0005 28H38.0005ZM52.0005 65.9995C53.1051 65.9995 54.0005 66.8949 54.0005 67.9995C54.0005 69.1041 53.1051 69.9995 52.0005 69.9995V65.9995ZM42.0005 28L42.0005 59.9995H38.0005L38.0005 28H42.0005ZM48.0005 65.9995H52.0005V69.9995H48.0005V65.9995ZM42.0005 59.9995C42.0005 63.3132 44.6868 65.9995 48.0005 65.9995V69.9995C42.4776 69.9995 38.0005 65.5224 38.0005 59.9995H42.0005Z"
            fill="#56CCF2"
          />
          <path
            d="M29.6573 28L50.3436 28C52.4312 28 53.4766 25.4761 52.0005 24L42.1218 14.1213C40.9502 12.9497 39.0507 12.9497 37.8792 14.1213L28.0005 24C26.5244 25.4761 27.5698 28 29.6573 28Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M29.6569 28H50.3432C52.4307 28 53.4762 25.4761 52.0001 24L42.1214 14.1214C40.9498 12.9498 39.0503 12.9498 37.8787 14.1214L28.0001 24C26.524 25.4761 27.5694 28 29.6569 28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40.0001 28.0005V60C40.0001 64.4183 43.5818 68 48.0001 68H52.0001M50.3432 28H29.6569C27.5694 28 26.524 25.4761 28.0001 24L37.8787 14.1214C39.0503 12.9498 40.9498 12.9498 42.1214 14.1214L52.0001 24C53.4762 25.4761 52.4307 28 50.3432 28Z"
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
            d="M36.1106 11.9395C38.2585 9.79164 41.7409 9.79164 43.8888 11.9395L53.7675 21.8182C56.8185 24.8692 54.6576 30.086 50.3429 30.086H42.4997L42.4997 59.586C42.4997 62.6235 44.9621 65.086 47.9997 65.086H51.9997C53.3804 65.086 54.4997 66.2053 54.4997 67.586C54.4997 68.9667 53.3804 70.086 51.9997 70.086H47.9997C42.2007 70.086 37.4997 65.385 37.4997 59.586L37.4997 30.086L29.6566 30.086C25.3418 30.086 23.1809 24.8692 26.2319 21.8182L36.1106 11.9395ZM40.3533 15.4751C40.158 15.2798 39.8414 15.2798 39.6462 15.4751L30.0352 25.086L49.9642 25.086L40.3533 15.4751Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowLevel = forwardRef((props, ref) => {
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

CoreArrowLevel.displayName = 'CoreArrowLevel'

export default CoreArrowLevel
