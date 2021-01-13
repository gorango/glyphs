
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16 50L16 64C16 66.2091 17.7909 68 20 68H60C62.2091 68 64 66.2091 64 64V50"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 35.9997L56.4013 35.9997C59.5401 35.9997 61.0824 32.1785 58.8229 29.9997L43.8005 15.5138C41.7668 13.5527 38.5458 13.5527 36.5121 15.5138L21.4896 29.9997C19.2302 32.1784 20.7725 35.9997 23.9112 35.9997H32L32 53.9997C32 55.1043 32.8955 55.9997 34 55.9997L46 55.9997C47.1046 55.9997 48 55.1043 48 53.9997L48 35.9997Z"
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
            d="M16 50L16 50.5L16 64C16 66.2091 17.7909 68 20 68L60 68C62.2091 68 64 66.2091 64 64L64 50.5L64 50"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48 35.9997L56.4013 35.9997C59.5401 35.9997 61.0824 32.1785 58.8229 29.9997L43.8005 15.5138C41.7668 13.5527 38.5458 13.5527 36.5121 15.5138L21.4896 29.9997C19.2302 32.1784 20.7725 35.9997 23.9112 35.9997L32 35.9997L32 47.9997L32 53.9997C32 55.1043 32.8955 55.9997 34 55.9997L46 55.9997C47.1046 55.9997 48 55.1043 48 53.9997L48 47.9997L48 35.9997Z"
            fill="currentColor"
          />
          <path
            d="M48 35.9997V33.9997C46.8955 33.9997 46 34.8952 46 35.9997L48 35.9997ZM58.8229 29.9997L60.2112 28.56L58.8229 29.9997ZM43.8005 15.5138L45.1888 14.0741V14.0741L43.8005 15.5138ZM36.5121 15.5138L35.1238 14.0741L35.1238 14.0741L36.5121 15.5138ZM21.4896 29.9997L20.1013 28.56H20.1013L21.4896 29.9997ZM32 35.9997L34 35.9997C34 34.8952 33.1046 33.9997 32 33.9997L32 35.9997ZM32 47.9997L34 47.9997L32 47.9997ZM56.4013 33.9997L48 33.9997V37.9997L56.4013 37.9997L56.4013 33.9997ZM57.4347 31.4394C58.3988 32.3691 57.7407 33.9997 56.4013 33.9997L56.4013 37.9997C61.3395 37.9997 63.7659 31.9878 60.2112 28.56L57.4347 31.4394ZM42.4122 16.9535L57.4347 31.4394L60.2112 28.56L45.1888 14.0741L42.4122 16.9535ZM37.9003 16.9535C39.1593 15.7395 41.1532 15.7395 42.4122 16.9535L45.1888 14.0741C42.3803 11.3659 37.9323 11.3659 35.1238 14.0741L37.9003 16.9535ZM22.8779 31.4394L37.9003 16.9535L35.1238 14.0741L20.1013 28.56L22.8779 31.4394ZM23.9112 33.9997C22.5719 33.9997 21.9137 32.3691 22.8779 31.4394L20.1013 28.56C16.5466 31.9878 18.9731 37.9997 23.9112 37.9997L23.9112 33.9997ZM32 33.9997L23.9112 33.9997L23.9112 37.9997L32 37.9997L32 33.9997ZM34 47.9997L34 35.9997L30 35.9997L30 47.9997L34 47.9997ZM34 53.9997L34 47.9997L30 47.9997L30 53.9997L34 53.9997ZM34 53.9997L30 53.9997C30 56.2089 31.7909 57.9997 34 57.9997L34 53.9997ZM46 53.9997L34 53.9997L34 57.9997L46 57.9997L46 53.9997ZM46 53.9997L46 57.9997C48.2092 57.9997 50 56.2089 50 53.9997L46 53.9997ZM46 47.9997L46 53.9997L50 53.9997L50 47.9997L46 47.9997ZM46 35.9997L46 47.9997L50 47.9997L50 35.9997L46 35.9997Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M16 50L16 50.5L16 64C16 66.2091 17.7909 68 20 68L60 68C62.2091 68 64 66.2091 64 64L64 50.5L64 50"
            stroke="#56CCF2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48 35.9997L56.4013 35.9997C59.5401 35.9997 61.0824 32.1785 58.8229 29.9997L43.8005 15.5138C41.7668 13.5527 38.5458 13.5527 36.5121 15.5138L21.4896 29.9997C19.2302 32.1784 20.7725 35.9997 23.9112 35.9997L32 35.9997L32 47.9997L32 53.9997C32 55.1043 32.8955 55.9997 34 55.9997L46 55.9997C47.1046 55.9997 48 55.1043 48 53.9997L48 47.9997L48 35.9997Z"
            fill="#56CCF2"
          />
          <path
            d="M48 35.9997V33.9997C46.8955 33.9997 46 34.8952 46 35.9997L48 35.9997ZM58.8229 29.9997L60.2112 28.56L58.8229 29.9997ZM43.8005 15.5138L45.1888 14.0741V14.0741L43.8005 15.5138ZM36.5121 15.5138L35.1238 14.0741V14.0741L36.5121 15.5138ZM21.4896 29.9997L20.1013 28.56H20.1013L21.4896 29.9997ZM32 35.9997L34 35.9997C34 34.8952 33.1046 33.9997 32 33.9997L32 35.9997ZM32 47.9997L34 47.9997L32 47.9997ZM56.4013 33.9997L48 33.9997V37.9997L56.4013 37.9997L56.4013 33.9997ZM57.4347 31.4394C58.3988 32.3691 57.7407 33.9997 56.4013 33.9997L56.4013 37.9997C61.3395 37.9997 63.7659 31.9878 60.2112 28.56L57.4347 31.4394ZM42.4122 16.9535L57.4347 31.4394L60.2112 28.56L45.1888 14.0741L42.4122 16.9535ZM37.9003 16.9535C39.1593 15.7395 41.1532 15.7395 42.4122 16.9535L45.1888 14.0741C42.3803 11.3659 37.9323 11.3659 35.1238 14.0741L37.9003 16.9535ZM22.8779 31.4394L37.9003 16.9535L35.1238 14.0741L20.1013 28.56L22.8779 31.4394ZM23.9112 33.9997C22.5719 33.9997 21.9137 32.3691 22.8779 31.4394L20.1013 28.56C16.5466 31.9878 18.9731 37.9997 23.9112 37.9997L23.9112 33.9997ZM32 33.9997L23.9112 33.9997L23.9112 37.9997L32 37.9997L32 33.9997ZM34 47.9997L34 35.9997L30 35.9997L30 47.9997L34 47.9997ZM34 53.9997L34 47.9997L30 47.9997L30 53.9997L34 53.9997ZM34 53.9997L30 53.9997C30 56.2089 31.7909 57.9997 34 57.9997L34 53.9997ZM46 53.9997L34 53.9997L34 57.9997L46 57.9997L46 53.9997ZM46 53.9997L46 57.9997C48.2092 57.9997 50 56.2089 50 53.9997L46 53.9997ZM46 47.9997L46 53.9997L50 53.9997L50 47.9997L46 47.9997ZM46 35.9997L46 47.9997L50 47.9997L50 35.9997L46 35.9997Z"
            fill="#56CCF2"
          />
          <path
            d="M56.4013 36L23.9112 36C20.7724 36 19.2301 32.1787 21.4896 30L36.512 15.5141C38.5457 13.553 41.7667 13.553 43.8004 15.5141L58.8229 30C61.0823 32.1787 59.54 36 56.4013 36Z"
            fill="#2F80ED"
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
            d="M48 36.0002H56.4013C59.5401 36.0002 61.0823 32.1789 58.8229 30.0002L43.8005 15.5143C41.7667 13.5532 38.5458 13.5532 36.512 15.5143L21.4896 30.0002C19.2302 32.1789 20.7724 36.0002 23.9112 36.0002H32L32 54.0002C32 55.1048 32.8954 56.0002 34 56.0002H46C47.1046 56.0002 48 55.1048 48 54.0002L48 36.0002Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16 50.0002L16 64.0002C16 66.2093 17.7909 68.0002 20 68.0002H60C62.2091 68.0002 64 66.2093 64 64.0002V50.0002M56.4013 36.0002H48L48 54.0002C48 55.1048 47.1046 56.0002 46 56.0002H34C32.8954 56.0002 32 55.1048 32 54.0002L32 36.0002H23.9112C20.7724 36.0002 19.2302 32.1789 21.4896 30.0002L36.512 15.5143C38.5458 13.5532 41.7667 13.5532 43.8005 15.5143L58.8229 30.0002C61.0823 32.1789 59.5401 36.0002 56.4013 36.0002Z"
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
            d="M45.5358 13.7147C42.5336 10.8197 37.7789 10.8197 34.7767 13.7147L19.7542 28.2006C15.8757 31.9406 18.5232 38.5002 23.9112 38.5002H29.5L29.5 54.0002C29.5 56.4855 31.5147 58.5002 34 58.5002L46 58.5002C48.4853 58.5002 50.5 56.4855 50.5 54.0002V38.5002H56.4013C61.7893 38.5002 64.4368 31.9406 60.5583 28.2006L45.5358 13.7147ZM38.2474 17.3139C39.3127 16.2866 40.9998 16.2866 42.0651 17.3139L57.0876 31.7998C57.7279 32.4173 57.2908 33.5002 56.4013 33.5002H48C46.6193 33.5002 45.5 34.6195 45.5 36.0002V53.5002L34.5 53.5002L34.5 36.0002C34.5 34.6195 33.3807 33.5002 32 33.5002H23.9112C23.0217 33.5002 22.5846 32.4173 23.2249 31.7998L38.2474 17.3139Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20 65.5002C19.1716 65.5002 18.5 64.8286 18.5 64.0002L18.5 50.0002C18.5 48.6195 17.3807 47.5002 16 47.5002C14.6193 47.5002 13.5 48.6195 13.5 50.0002L13.5 64.0002C13.5 67.5901 16.4101 70.5002 20 70.5002L60 70.5002C63.5899 70.5002 66.5 67.5901 66.5 64.0002V50.0002C66.5 48.6195 65.3807 47.5002 64 47.5002C62.6193 47.5002 61.5 48.6195 61.5 50.0002V64.0002C61.5 64.8286 60.8284 65.5002 60 65.5002L20 65.5002Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowSolidBracketStart = forwardRef((props, ref) => {
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

CoreArrowSolidBracketStart.displayName = 'CoreArrowSolidBracketStart'

export default CoreArrowSolidBracketStart
