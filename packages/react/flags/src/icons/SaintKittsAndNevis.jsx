
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0DTaa)"><path d="M120 0.078125H0V80.0781L120 0.078125Z" fill="#219653"/><path d="M0 80.0781H120V0.078125L0 80.0781Z" fill="#EB5757"/><path d="M0 80.0781L120 0.078125" stroke="#F2C94C" stroke-width="32"/><path d="M0 80.0781L120 0.078125" stroke="#333333" stroke-width="24"/><path d="M35.5172 44.4282L40.9164 49.2897L47.2085 45.657L44.2534 52.2943L49.6526 57.1558L42.427 56.3964L39.4719 63.0337L37.9613 55.927L30.7357 55.1676L37.0278 51.5349L35.5172 44.4282Z" fill="#F2F2F2"/><path d="M72.5172 19.4282L77.9164 24.2897L84.2085 20.657L81.2534 27.2943L86.6526 32.1558L79.427 31.3964L76.4719 38.0337L74.9613 30.927L67.7357 30.1676L74.0278 26.5349L72.5172 19.4282Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0DTaa"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0fPaX)"><path d="M80 0.078125H0V80.0781L80 0.078125Z" fill="#219653"/><path d="M0 80.0781H80V0.078125L0 80.0781Z" fill="#EB5757"/><path d="M-20 80.0781L100 0.078125" stroke="#F2C94C" stroke-width="32"/><path d="M-20 80.0781L100 0.078125" stroke="#333333" stroke-width="24"/><path d="M15.5172 44.4282L20.9165 49.2897L27.2085 45.657L24.2534 52.2943L29.6526 57.1558L22.427 56.3964L19.4719 63.0337L17.9613 55.927L10.7357 55.1676L17.0278 51.5349L15.5172 44.4282Z" fill="#F2F2F2"/><path d="M52.5172 19.4282L57.9165 24.2897L64.2085 20.657L61.2534 27.2943L66.6526 32.1558L59.427 31.3964L56.4719 38.0337L54.9613 30.927L47.7357 30.1676L54.0278 26.5349L52.5172 19.4282Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0fPaX"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0-cUV" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0-cUV)"><g clip-path="url(#clip0-cUV)"><path d="M80 0.0780029H0V80.078L80 0.0780029Z" fill="#219653"/><path d="M0 80.0781H80V0.078125L0 80.0781Z" fill="#EB5757"/><path d="M-20 80.0781L100 0.078125" stroke="#F2C94C" stroke-width="32"/><path d="M-20 80.0781L100 0.078125" stroke="#333333" stroke-width="24"/><path d="M15.5172 44.4282L20.9165 49.2897L27.2085 45.657L24.2534 52.2943L29.6526 57.1558L22.427 56.3964L19.4719 63.0337L17.9613 55.927L10.7357 55.1676L17.0278 51.5349L15.5172 44.4282Z" fill="#F2F2F2"/><path d="M52.5172 19.4282L57.9165 24.2897L64.2085 20.657L61.2534 27.2943L66.6526 32.1558L59.427 31.3964L56.4719 38.0337L54.9613 30.927L47.7357 30.1676L54.0278 26.5349L52.5172 19.4282Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0-cUV"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsSaintKittsAndNevis = forwardRef((props, ref) => {
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

FlagsSaintKittsAndNevis.displayName = 'FlagsSaintKittsAndNevis'

export default FlagsSaintKittsAndNevis
