
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M25.6854 62.5691L54.1126 17.4336M35.0758 30.5523C32.3004 33.0004 27.8006 33.0004 25.0253 30.5523C22.2499 28.1042 22.2499 24.135 25.0253 21.6868C27.8006 19.2387 32.3004 19.2387 35.0758 21.6868C37.8511 24.135 37.8511 28.1042 35.0758 30.5523ZM54.9748 58.3139C52.1994 60.762 47.6996 60.762 44.9242 58.3139C42.1489 55.8657 42.1489 51.8965 44.9242 49.4484C47.6996 47.0003 52.1994 47.0003 54.9748 49.4484C57.7501 51.8965 57.7501 55.8657 54.9748 58.3139Z"
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
            d="M54.1125 17.4336L25.6854 62.5691"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.0253 30.5519C22.2499 28.1037 22.2499 24.1345 25.0253 21.6864V21.6864C27.8006 19.2383 32.3004 19.2383 35.0758 21.6864V21.6864C37.8511 24.1345 37.8511 28.1037 35.0758 30.5519V30.5519C32.3004 33 27.8006 33 25.0253 30.5519V30.5519Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44.9242 58.3136C42.1489 55.8655 42.1489 51.8963 44.9242 49.4481V49.4481C47.6996 47 52.1994 47 54.9747 49.4481V49.4481C57.7501 51.8963 57.7501 55.8655 54.9747 58.3136V58.3136C52.1994 60.7617 47.6996 60.7617 44.9242 58.3136V58.3136Z"
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
            d="M54.1125 17.4336L25.6854 62.5691"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M25.0253 30.5519C22.2499 28.1037 22.2499 24.1345 25.0253 21.6864V21.6864C27.8006 19.2383 32.3004 19.2383 35.0758 21.6864V21.6864C37.8511 24.1345 37.8511 28.1037 35.0758 30.5519V30.5519C32.3004 33 27.8006 33 25.0253 30.5519V30.5519Z"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44.9242 58.3136C42.1489 55.8655 42.1489 51.8963 44.9242 49.4481V49.4481C47.6996 47 52.1994 47 54.9747 49.4481V49.4481C57.7501 51.8963 57.7501 55.8655 54.9747 58.3136V58.3136C52.1994 60.7617 47.6996 60.7617 44.9242 58.3136V58.3136Z"
            stroke="#F2994A"
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
            d="M25.6854 62.5691L54.1126 17.4336M35.0758 30.5523C32.3004 33.0004 27.8006 33.0004 25.0253 30.5523C22.2499 28.1041 22.2499 24.135 25.0253 21.6868C27.8006 19.2387 32.3004 19.2387 35.0758 21.6868C37.8511 24.135 37.8511 28.1041 35.0758 30.5523ZM54.9748 58.3138C52.1994 60.762 47.6996 60.762 44.9242 58.3138C42.1489 55.8657 42.1489 51.8965 44.9242 49.4484C47.6996 47.0003 52.1994 47.0003 54.9748 49.4484C57.7501 51.8965 57.7501 55.8657 54.9748 58.3138Z"
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
            d="M55.1784 15.7396C56.1131 16.3282 56.3936 17.5631 55.8049 18.4978L27.3778 63.6333C26.7891 64.5679 25.5543 64.8484 24.6196 64.2597C23.685 63.6711 23.4045 62.4362 23.9931 61.5016L52.4203 16.366C53.0089 15.4314 54.2438 15.1509 55.1784 15.7396Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.5254 31.8736C19.9217 28.6948 19.9217 23.5409 23.5254 20.3621C27.1292 17.1833 32.9719 17.1833 36.5757 20.3621C40.1794 23.5409 40.1794 28.6948 36.5757 31.8736C32.9719 35.0524 27.1292 35.0524 23.5254 31.8736ZM26.5252 23.0082C24.5782 24.7256 24.5782 27.5101 26.5252 29.2276C28.4722 30.945 31.6289 30.945 33.5759 29.2276C35.5229 27.5101 35.5229 24.7256 33.5759 23.0082C31.6289 21.2907 28.4722 21.2907 26.5252 23.0082Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.4244 48.1237C39.8207 51.3025 39.8207 56.4564 43.4244 59.6352C47.0281 62.814 52.8709 62.814 56.4747 59.6352C60.0784 56.4564 60.0784 51.3025 56.4747 48.1237C52.8709 44.9449 47.0281 44.9449 43.4244 48.1237ZM46.4242 56.9891C44.4771 55.2717 44.4771 52.4872 46.4242 50.7697C48.3712 49.0523 51.5279 49.0523 53.4749 50.7697C55.4219 52.4872 55.4219 55.2717 53.4749 56.9891C51.5279 58.7066 48.3712 58.7066 46.4242 56.9891Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePercent = forwardRef((props, ref) => {
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

CorePercent.displayName = 'CorePercent'

export default CorePercent
