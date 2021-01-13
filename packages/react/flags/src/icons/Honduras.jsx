
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0V0pH)"><path d="M120 0.0791016H0V79.9214H120V0.0791016Z" fill="#F2F2F2"/><path d="M120.234 0H0V26H120.234V0Z" fill="#2F80ED"/><path d="M120.234 54H0V80H120.234V54Z" fill="#2F80ED"/><path d="M47 29.9414L47.8981 32.7H50.8042L48.4531 34.4048L49.3511 37.1634L47 35.4585L44.6489 37.1634L45.5469 34.4048L43.1958 32.7H46.1019L47 29.9414Z" fill="#2F80ED"/><path d="M47 43.9141L47.8981 46.6726L50.8042 46.6726L48.4531 48.3775L49.3511 51.136L47 49.4312L44.6489 51.136L45.5469 48.3775L43.1958 46.6726L46.1019 46.6726L47 43.9141Z" fill="#2F80ED"/><path d="M72 29.9414L72.8981 32.7H75.8042L73.4531 34.4048L74.3511 37.1634L72 35.4585L69.6489 37.1634L70.5469 34.4048L68.1958 32.7H71.1019L72 29.9414Z" fill="#2F80ED"/><path d="M72 43.9141L72.8981 46.6726L75.8042 46.6726L73.4531 48.3775L74.3511 51.136L72 49.4312L69.6489 51.136L70.5469 48.3775L68.1958 46.6726L71.1019 46.6726L72 43.9141Z" fill="#2F80ED"/><path d="M60 36.9277L60.8981 39.6863H63.8042L61.4531 41.3912L62.3511 44.1497L60 42.4448L57.6489 44.1497L58.5469 41.3912L56.1958 39.6863H59.1019L60 36.9277Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0V0pH"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0q0J3)"><path d="M80 0.0791016H0V79.9214H80V0.0791016Z" fill="#F2F2F2"/><path d="M80.1562 0H0V26H80.1562V0Z" fill="#2F80ED"/><path d="M80.1562 54H0V80H80.1562V54Z" fill="#2F80ED"/><path d="M27 29.9415L27.8981 32.7001H30.8042L28.4531 34.4049L29.3511 37.1635L27 35.4586L24.6489 37.1635L25.5469 34.4049L23.1958 32.7001H26.1019L27 29.9415Z" fill="#2F80ED"/><path d="M27 43.9142L27.8981 46.6727L30.8042 46.6727L28.4531 48.3776L29.3511 51.1362L27 49.4313L24.6489 51.1362L25.5469 48.3776L23.1958 46.6727L26.1019 46.6727L27 43.9142Z" fill="#2F80ED"/><path d="M52 29.9415L52.8981 32.7001H55.8042L53.4531 34.4049L54.3511 37.1635L52 35.4586L49.6489 37.1635L50.5469 34.4049L48.1958 32.7001H51.1019L52 29.9415Z" fill="#2F80ED"/><path d="M52 43.9142L52.8981 46.6727L55.8042 46.6727L53.4531 48.3776L54.3511 51.1362L52 49.4313L49.6489 51.1362L50.5469 48.3776L48.1958 46.6727L51.1019 46.6727L52 43.9142Z" fill="#2F80ED"/><path d="M40 36.9279L40.8981 39.6864H43.8042L41.4531 41.3913L42.3511 44.1498L40 42.4449L37.6489 44.1498L38.5469 41.3913L36.1958 39.6864H39.1019L40 36.9279Z" fill="#2F80ED"/></g>
          <defs><clipPath id="clip0q0J3"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0bONr" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0bONr)"><g clip-path="url(#clip0bONr)"><path d="M80 0.0791016H0V79.9214H80V0.0791016Z" fill="#F2F2F2"/><path d="M80.1562 0H0V26H80.1562V0Z" fill="#2F80ED"/><path d="M80.1562 54H0V80H80.1562V54Z" fill="#2F80ED"/><path d="M27 29.9415L27.8981 32.7001H30.8042L28.4531 34.4049L29.3511 37.1635L27 35.4586L24.6489 37.1635L25.5469 34.4049L23.1958 32.7001H26.1019L27 29.9415Z" fill="#2F80ED"/><path d="M27 43.9142L27.8981 46.6727L30.8042 46.6727L28.4531 48.3776L29.3511 51.1362L27 49.4313L24.6489 51.1362L25.5469 48.3776L23.1958 46.6727L26.1019 46.6727L27 43.9142Z" fill="#2F80ED"/><path d="M52 29.9415L52.8981 32.7001H55.8042L53.4531 34.4049L54.3511 37.1635L52 35.4586L49.6489 37.1635L50.5469 34.4049L48.1958 32.7001H51.1019L52 29.9415Z" fill="#2F80ED"/><path d="M52 43.9142L52.8981 46.6727L55.8042 46.6727L53.4531 48.3776L54.3511 51.1362L52 49.4313L49.6489 51.1362L50.5469 48.3776L48.1958 46.6727L51.1019 46.6727L52 43.9142Z" fill="#2F80ED"/><path d="M40 36.9279L40.8981 39.6864H43.8042L41.4531 41.3913L42.3511 44.1498L40 42.4449L37.6489 44.1498L38.5469 41.3913L36.1958 39.6864H39.1019L40 36.9279Z" fill="#2F80ED"/></g></g>
          <defs><clipPath id="clip0bONr"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsHonduras = forwardRef((props, ref) => {
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

FlagsHonduras.displayName = 'FlagsHonduras'

export default FlagsHonduras
