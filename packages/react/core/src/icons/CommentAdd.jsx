
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.8711 40H27.8711"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.8711 52L39.8711 28"
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
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66ZM25.3711 40C25.3711 38.6193 26.4904 37.5 27.8711 37.5H37.3711V28C37.3711 26.6193 38.4904 25.5 39.8711 25.5C41.2518 25.5 42.3711 26.6193 42.3711 28V37.5H51.8711C53.2518 37.5 54.3711 38.6193 54.3711 40C54.3711 41.3807 53.2518 42.5 51.8711 42.5H42.3711V52C42.3711 53.3807 41.2518 54.5 39.8711 54.5C38.4904 54.5 37.3711 53.3807 37.3711 52V42.5H27.8711C26.4904 42.5 25.3711 41.3807 25.3711 40Z"
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
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
            fill="#9B51E0"
          />
          <path
            d="M40 66V68V66ZM20.4369 57.1261L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082L20.4369 57.1261ZM16 66L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L16 66ZM64 40C64 53.2548 53.2548 64 40 64V68C55.464 68 68 55.464 68 40H64ZM40 16C53.2548 16 64 26.7452 64 40H68C68 24.536 55.464 12 40 12V16ZM16 40C16 26.7452 26.7452 16 40 16V12C24.536 12 12 24.536 12 40H16ZM21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40H12C12 47.0627 14.6176 53.519 18.9326 58.4441L21.9412 55.8082ZM17.7889 66.8944L22.2258 58.0206L18.6481 56.2317L14.2111 65.1056L17.7889 66.8944ZM40 64L16 64L16 68L40 68V64Z"
            fill="#9B51E0"
          />
          <path
            d="M27.8711 40L38.7802 40L40.962 40L51.8711 40"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.8711 28L39.8711 38.9091L39.8711 41.0909L39.8711 52"
            stroke="#56CCF2"
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
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51.8711 40H27.8711M39.8711 52V28M66 40C66 54.3594 54.3594 66 40 66L16 66L20.4369 57.1261C16.4291 52.5518 14 46.5596 14 40C14 25.6406 25.6406 14 40 14C54.3594 14 66 25.6406 66 40Z"
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
            d="M25.8711 40C25.8711 38.8954 26.7665 38 27.8711 38H37.8711V28C37.8711 26.8954 38.7665 26 39.8711 26C40.9757 26 41.8711 26.8954 41.8711 28V38H51.8711C52.9757 38 53.8711 38.8954 53.8711 40C53.8711 41.1046 52.9757 42 51.8711 42H41.8711V52C41.8711 53.1046 40.9757 54 39.8711 54C38.7665 54 37.8711 53.1046 37.8711 52V42H27.8711C26.7665 42 25.8711 41.1046 25.8711 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 40C12 24.536 24.536 12 40 12C55.464 12 68 24.536 68 40C68 55.464 55.464 68 40 68L16 68C15.3068 68 14.6631 67.6411 14.2987 67.0515C13.9343 66.4618 13.9012 65.7255 14.2111 65.1056L18.063 57.4019C14.2684 52.6242 12 46.5748 12 40ZM40 16C26.7452 16 16 26.7452 16 40C16 46.0564 18.2407 51.5845 21.9412 55.8082C22.4767 56.4193 22.5892 57.2938 22.2258 58.0206L19.2361 64L40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCommentAdd = forwardRef((props, ref) => {
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

CoreCommentAdd.displayName = 'CoreCommentAdd'

export default CoreCommentAdd
