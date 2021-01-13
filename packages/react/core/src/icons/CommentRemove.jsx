
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
            d="M52 40H28"
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
            d="M66 40C66 54.3594 54.3594 66 40 66L16 66L20.4369 57.1261C16.4291 52.5518 14 46.5596 14 40C14 25.6406 25.6406 14 40 14C54.3594 14 66 25.6406 66 40ZM28 37.5C26.6193 37.5 25.5 38.6193 25.5 40C25.5 41.3807 26.6193 42.5 28 42.5H52C53.3807 42.5 54.5 41.3807 54.5 40C54.5 38.6193 53.3807 37.5 52 37.5H28Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-opacity="0.25"
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
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
            fill="#F2994A"
          />
          <path
            d="M40 66V68V66ZM20.4369 57.1261L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082L20.4369 57.1261ZM16 66L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L16 66ZM64 40C64 53.2548 53.2548 64 40 64V68C55.464 68 68 55.464 68 40H64ZM40 16C53.2548 16 64 26.7452 64 40H68C68 24.536 55.464 12 40 12V16ZM16 40C16 26.7452 26.7452 16 40 16V12C24.536 12 12 24.536 12 40H16ZM21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40H12C12 47.0627 14.6176 53.519 18.9326 58.4441L21.9412 55.8082ZM17.7889 66.8944L22.2258 58.0206L18.6481 56.2317L14.2111 65.1056L17.7889 66.8944ZM40 64L16 64L16 68L40 68V64Z"
            fill="#F2994A"
          />
          <path
            d="M28 40L38.9091 40L41.0909 40L52 40"
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
            d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52 40H28M66 40C66 54.3594 54.3594 66 40 66L16 66L20.4369 57.1261C16.4291 52.5518 14 46.5596 14 40C14 25.6406 25.6406 14 40 14C54.3594 14 66 25.6406 66 40Z"
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
            d="M28 38C26.8954 38 26 38.8954 26 40C26 41.1046 26.8954 42 28 42H52C53.1046 42 54 41.1046 54 40C54 38.8954 53.1046 38 52 38H28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 12C24.536 12 12 24.536 12 40C12 46.5748 14.2684 52.6242 18.063 57.4019L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L40 68C55.464 68 68 55.464 68 40C68 24.536 55.464 12 40 12ZM16 40C16 26.7452 26.7452 16 40 16C53.2548 16 64 26.7452 64 40C64 53.2548 53.2548 64 40 64L19.2361 64L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCommentRemove = forwardRef((props, ref) => {
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

CoreCommentRemove.displayName = 'CoreCommentRemove'

export default CoreCommentRemove
