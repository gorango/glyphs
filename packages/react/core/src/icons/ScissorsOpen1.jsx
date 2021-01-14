
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M29.8624 61.4268C27.9294 64.7749 23.6483 65.922 20.3002 63.989C16.9522 62.056 15.8051 57.7749 17.7381 54.4268L18.7381 52.6948C20.6711 49.3467 24.9522 48.1996 28.3002 50.1326C31.6483 52.0656 32.7954 56.3467 30.8624 59.6948L29.8624 61.4268Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30.3633 60.5592L56.3633 15.5259"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.8648 61.4268C52.7978 64.7749 57.0789 65.922 60.4269 63.989C63.775 62.056 64.9221 57.7749 62.9891 54.4268L61.9891 52.6948C60.0561 49.3467 55.775 48.1996 52.4269 50.1326C49.0789 52.0656 47.9318 56.3467 49.8648 59.6948L50.8648 61.4268Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.3638 60.5592L24.3638 15.5259"
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
            d="M30.3652 60.5588L56.3652 15.5255"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29.8643 61.4265C27.9313 64.7746 23.6502 65.9217 20.3022 63.9887V63.9887C16.9541 62.0557 15.807 57.7746 17.74 54.4265L18.74 52.6945C20.673 49.3464 24.9541 48.1993 28.3022 50.1323V50.1323C31.6502 52.0653 32.7973 56.3464 30.8643 59.6945L29.8643 61.4265Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.3638 60.5588L24.3638 15.5255"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.8647 61.4265C52.7977 64.7746 57.0788 65.9217 60.4268 63.9887V63.9887C63.7749 62.0557 64.922 57.7746 62.989 54.4265L61.989 52.6945C60.056 49.3464 55.7749 48.1993 52.4268 50.1323V50.1323C49.0788 52.0653 47.9317 56.3464 49.8647 59.6945L50.8647 61.4265Z"
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
            d="M30.3652 60.5589L56.3652 15.5256"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29.8643 61.4266C27.9313 64.7746 23.6502 65.9218 20.3022 63.9888V63.9888C16.9541 62.0558 15.807 57.7746 17.74 54.4266L18.74 52.6945C20.673 49.3465 24.9541 48.1994 28.3022 50.1324V50.1324C31.6502 52.0654 32.7973 56.3465 30.8643 59.6945L29.8643 61.4266Z"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.3638 60.5589L24.3638 15.5256"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.8647 61.4266C52.7977 64.7746 57.0788 65.9218 60.4268 63.9888V63.9888C63.7749 62.0558 64.922 57.7746 62.989 54.4266L61.989 52.6945C60.056 49.3465 55.7749 48.1994 52.4268 50.1324V50.1324C49.0788 52.0654 47.9317 56.3465 49.8647 59.6945L50.8647 61.4266Z"
            stroke="#2F80ED"
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
            d="M29.8641 61.4266C27.9311 64.7747 23.65 65.9218 20.3019 63.9888C16.9539 62.0558 15.8068 57.7747 17.7398 54.4266L18.7398 52.6946C20.6728 49.3465 24.9539 48.1994 28.3019 50.1324C31.65 52.0654 32.7971 56.3465 30.8641 59.6946L29.8641 61.4266Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50.8645 61.4266C52.7974 64.7747 57.0786 65.9218 60.4266 63.9888C63.7747 62.0558 64.9218 57.7747 62.9888 54.4266L61.9888 52.6946C60.0558 49.3465 55.7747 48.1994 52.4266 50.1324C49.0786 52.0654 47.9315 56.3465 49.8645 59.6946L50.8645 61.4266Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.3651 60.5589L56.3651 15.5256M50.3635 60.5589L24.3635 15.5256M28.3019 50.1324C31.65 52.0654 32.7971 56.3465 30.8641 59.6946L29.8641 61.4266C27.9311 64.7747 23.65 65.9218 20.3019 63.9888C16.9539 62.0558 15.8068 57.7747 17.7398 54.4266L18.7398 52.6946C20.6728 49.3465 24.9539 48.1994 28.3019 50.1324ZM52.4266 50.1324C49.0786 52.0654 47.9315 56.3465 49.8645 59.6946L50.8645 61.4266C52.7974 64.7747 57.0786 65.9218 60.4266 63.9888C63.7747 62.0558 64.9218 57.7747 62.9888 54.4266L61.9888 52.6946C60.0558 49.3465 55.7747 48.1994 52.4266 50.1324Z"
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
            d="M52.096 59.5595L52.5966 60.4265C53.9773 62.818 57.0353 63.6374 59.4267 62.2566C61.8182 60.8759 62.6376 57.818 61.2568 55.4265L60.2568 53.6945C58.8761 51.303 55.8182 50.4836 53.4267 51.8643C51.0353 53.245 50.2159 56.303 51.5966 58.6945L52.096 59.5595ZM52.096 59.5595C52.0959 59.5593 52.0962 59.5598 52.096 59.5595ZM31.5963 62.4265C29.111 66.7311 23.6067 68.206 19.302 65.7207C14.9974 63.2355 13.5225 57.7311 16.0078 53.4265L17.0078 51.6945C19.4931 47.3898 24.9974 45.915 29.302 48.4002C30.9043 49.3253 32.1145 50.6687 32.8744 52.2127L38.055 43.2397L22.6315 16.5255C22.0792 15.5689 22.407 14.3457 23.3636 13.7934C24.3201 13.2411 25.5433 13.5689 26.0956 14.5255L40.3644 39.2397L54.6331 14.5255C55.1854 13.5689 56.4086 13.2411 57.3652 13.7934C58.3218 14.3457 58.6495 15.5689 58.0972 16.5255L42.6738 43.2397L47.8544 52.2127C48.6142 50.6687 49.8244 49.3253 51.4267 48.4002C55.7313 45.915 61.2357 47.3898 63.7209 51.6945L64.7209 53.4265C67.2062 57.7311 65.7313 63.2355 61.4267 65.7207C57.1221 68.206 51.6178 66.7311 49.1325 62.4265L40.3644 47.2397L31.5963 62.4265ZM29.1322 58.6945C30.5129 56.303 29.6935 53.245 27.302 51.8643C24.9106 50.4836 21.8526 51.303 20.4719 53.6945L19.4719 55.4265C18.0912 57.818 18.9106 60.8759 21.302 62.2566C23.6935 63.6374 26.7515 62.818 28.1322 60.4265L29.1322 58.6945Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreScissorsOpen1 = forwardRef((props, ref) => {
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

CoreScissorsOpen1.displayName = 'CoreScissorsOpen1'

export default CoreScissorsOpen1
