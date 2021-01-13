
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g opacity="0.9"><rect width="120" height="80" fill="#EB5757"/><rect x="30" width="60" height="80" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M59.7687 15L65.9094 23.1824L70.4587 21.7919L66.581 38.8791L66.6234 39.0182L71.5091 31.1767L73.2234 34.455L80.5799 33.3595L80.5801 33.3596L79.4955 40.7904L82.7403 42.5217L70.1316 50.5352L71.7686 55.9091L59.7686 52.6564L47.7686 55.9091L49.3936 50.5745L36.7271 42.5522L40.029 40.7904L38.9444 33.3595L46.301 34.455L48.0457 31.1187L52.5522 38.3766L48.7691 21.6973L53.6279 23.1824L59.7687 15Z" fill="#EB5757"/><path d="M59.7686 40.7578L59.7687 65.0002" stroke="#EB5757" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></g>
        </>
      )
    case 'square':
      return (
        <>
          <g opacity="0.9"><rect width="80" height="80" fill="#EB5757"/><rect x="10" width="60" height="80" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.7687 15L45.9094 23.1824L50.4587 21.7919L46.581 38.8791L46.6234 39.0182L51.5091 31.1767L53.2234 34.455L60.5799 33.3595L60.5801 33.3596L59.4955 40.7904L62.7403 42.5217L50.1316 50.5352L51.7686 55.9091L39.7686 52.6564L27.7686 55.9091L29.3936 50.5745L16.7271 42.5522L20.029 40.7904L18.9444 33.3595L26.301 34.455L28.0457 31.1187L32.5522 38.3766L28.7691 21.6973L33.6279 23.1824L39.7687 15Z" fill="#EB5757"/><path d="M39.7686 40.7578L39.7687 65.0002" stroke="#EB5757" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></g>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask09PoY" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask09PoY)"><g opacity="0.9"><rect width="80" height="80" fill="#EB5757"/><rect x="10" width="60" height="80" fill="#F2F2F2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.7687 15L45.9094 23.1824L50.4587 21.7919L46.581 38.8791L46.6234 39.0182L51.5091 31.1767L53.2234 34.455L60.5799 33.3595L60.5801 33.3596L59.4955 40.7904L62.7403 42.5217L50.1316 50.5352L51.7686 55.9091L39.7686 52.6564L27.7686 55.9091L29.3936 50.5745L16.7271 42.5522L20.029 40.7904L18.9444 33.3595L26.301 34.455L28.0457 31.1187L32.5522 38.3766L28.7691 21.6973L33.6279 23.1824L39.7687 15Z" fill="#EB5757"/><path d="M39.7686 40.7578L39.7687 65.0002" stroke="#EB5757" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/></g></g>
        </>
      )
  }
}

const FlagsCanada = forwardRef((props, ref) => {
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

FlagsCanada.displayName = 'FlagsCanada'

export default FlagsCanada
