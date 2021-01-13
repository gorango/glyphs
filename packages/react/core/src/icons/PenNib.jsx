
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M30.9999 60H48.9999C49.6246 60 50.208 59.6878 50.5546 59.1679L56.0832 50.875C58.5006 47.2489 58.7621 42.5972 56.7663 38.7231L44.3738 14.6669C43.5301 13.0292 41.8422 12 39.9999 12C38.1576 12 36.4697 13.0292 35.626 14.6669L23.2335 38.7231C21.2377 42.5972 21.4992 47.2489 23.9165 50.875L29.4452 59.1679C29.7917 59.6878 30.3751 60 30.9999 60Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.5359 40C38.0755 37.3333 41.9245 37.3333 43.4641 40C45.0037 42.6667 43.0792 46 40 46C36.9208 46 34.9963 42.6667 36.5359 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.9999 12L39.9999 38"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.6394 60C30.686 60 29.8652 60.6729 29.6782 61.6078L28.4784 67.6078C28.2309 68.8454 29.1774 70 30.4395 70H49.5601C50.8222 70 51.7688 68.8454 51.5213 67.6078L50.3213 61.6078C50.1343 60.6729 49.3135 60 48.3601 60"
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
            d="M51.4212 66.2659C51.6687 67.5035 50.7221 68.6581 49.46 68.6581H30.3394C29.0773 68.6581 28.1308 67.5034 28.3783 66.2659L29.5783 60.2659C29.591 60.202 29.6484 60.1581 29.7135 60.1581H50.1012C50.1574 60.1581 50.2069 60.196 50.2183 60.2511C50.2193 60.256 50.2204 60.261 50.2213 60.2659L51.4212 66.2659Z"
            fill="currentColor"
          />
          <path
            d="M50.1012 57.1581C50.6001 57.1581 51.0659 56.9088 51.3426 56.4937L55.983 49.5331C58.4004 45.907 58.6619 41.2553 56.6661 37.3812L44.2735 13.325C44.2354 13.2509 44.1955 13.1781 44.1539 13.1065C43.4268 11.8545 41.8997 12.7144 41.8997 14.1622L41.8997 36.0292C41.8997 36.7455 42.3142 37.3808 42.8045 37.9029C43.013 38.1249 43.2012 38.3767 43.3637 38.6581C44.9033 41.3248 42.9788 44.6581 39.8996 44.6581C36.8204 44.6581 34.8959 41.3248 36.4355 38.6581C36.598 38.3766 36.7862 38.1249 36.9948 37.9028C37.4851 37.3807 37.8997 36.7454 37.8997 36.0291V14.1622C37.8997 12.7144 36.3725 11.8545 35.6454 13.1065C35.6039 13.1781 35.564 13.2509 35.5258 13.325L23.1332 37.3812C21.1375 41.2553 21.3989 45.907 23.8163 49.5331L28.3059 56.2675C28.6769 56.8239 29.3013 57.1581 29.97 57.1581H50.1012Z"
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
            d="M31.1013 58H49.1013C49.7261 58 50.3095 57.6878 50.656 57.1679L56.1847 48.875C58.6021 45.2489 58.8635 40.5972 56.8678 36.7231L44.4752 12.6669C44.1754 12.0849 43.7689 11.5797 43.2867 11.1702C42.3202 10.3495 41.1013 11.2922 41.1013 12.5602L41.1013 34.5689C41.1013 35.484 41.7643 36.2409 42.4969 36.7891C42.9132 37.1006 43.2793 37.5042 43.5655 38C45.1051 40.6667 43.1806 44 40.1014 44C37.0222 44 35.0977 40.6667 36.6373 38C36.9236 37.5042 37.2896 37.1006 37.7058 36.7892C38.4384 36.241 39.1013 35.484 39.1013 34.569L39.1013 12.5602C39.1013 11.2922 37.8825 10.3495 36.9159 11.1702C36.4338 11.5797 36.0273 12.0849 35.7275 12.6669L23.3349 36.7231C21.3391 40.5972 21.6006 45.2489 24.018 48.875L29.5466 57.1679C29.8932 57.6878 30.4766 58 31.1013 58Z"
            fill="#56CCF2"
          />
          <path
            d="M28.5796 65.6078C28.3321 66.8454 29.2787 68 30.5407 68H49.6614C50.9234 68 51.87 66.8454 51.6225 65.6078L50.4225 59.6078C50.2356 58.6729 49.4147 58 48.4614 58H48.2548H31.9471H31.7406C30.7872 58 29.9664 58.6729 29.7794 59.6078L28.5796 65.6078Z"
            fill="#9B51E0"
            stroke="#9B51E0"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.0001 58H49.0001C49.6249 58 50.2083 57.6878 50.5548 57.1679L56.0835 48.875C58.5009 45.2489 58.7624 40.5972 56.7666 36.7231L44.374 12.6669C43.5303 11.0292 41.8424 10 40.0001 10C38.1579 10 36.47 11.0292 35.6263 12.6669L23.2337 36.7231C21.2379 40.5972 21.4994 45.2489 23.9168 48.875L29.4454 57.1679C29.792 57.6878 30.3754 58 31.0001 58ZM36.5361 38C38.0757 35.3333 41.9247 35.3333 43.4643 38C45.0039 40.6667 43.0794 44 40.0002 44C36.921 44 34.9965 40.6667 36.5361 38Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.4784 65.6078C28.2309 66.8454 29.1775 68 30.4396 68H49.5602C50.8223 68 51.7689 66.8454 51.5214 65.6078L50.3214 59.6078C50.1344 58.6729 49.3136 58 48.3602 58H31.6394C30.6861 58 29.8652 58.6729 29.6783 59.6078L28.4784 65.6078Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40.0001 10C41.8424 10 43.5303 11.0292 44.374 12.6669L56.7666 36.7231C58.7624 40.5972 58.5009 45.2489 56.0835 48.875L50.5548 57.1679C50.2083 57.6878 49.6249 58 49.0001 58H31.0001C30.3754 58 29.792 57.6878 29.4454 57.1679L23.9168 48.875C21.4994 45.2489 21.2379 40.5972 23.2337 36.7231L35.6263 12.6669C36.47 11.0292 38.1579 10 40.0001 10ZM40.0001 10L40.0001 36M43.4643 38C41.9247 35.3333 38.0757 35.3333 36.5361 38C34.9965 40.6667 36.921 44 40.0002 44C43.0794 44 45.0039 40.6667 43.4643 38ZM29.6783 59.6078L28.4784 65.6078C28.2309 66.8454 29.1775 68 30.4396 68H49.5602C50.8223 68 51.7689 66.8454 51.5214 65.6078L50.3214 59.6078C50.1344 58.6729 49.3136 58 48.3602 58H31.6394C30.6861 58 29.8652 58.6729 29.6783 59.6078Z"
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
            d="M52.2654 59.4913C52.3187 59.422 52.3699 59.3507 52.4188 59.2773L57.9474 50.9844C60.7677 46.7539 61.0728 41.327 58.7444 36.8072L46.3518 12.751C45.4802 11.0592 43.9682 9.82908 42.2 9.29511V9H38.2V9.29511C36.4318 9.82908 34.9197 11.0592 34.0482 12.751L21.6556 36.8072C19.3272 41.327 19.6322 46.7539 22.4525 50.9844L27.9812 59.2773C28.0301 59.3507 28.0813 59.4221 28.1347 59.4915C28.0409 59.722 27.9677 59.964 27.9174 60.2155L26.7174 66.2155C26.2224 68.6907 28.1155 71 30.6397 71H49.7603C52.2845 71 54.1776 68.6908 53.6827 66.2156L52.4828 60.2156C52.4325 59.964 52.3592 59.7219 52.2654 59.4913ZM48.5605 61H31.8397L30.6397 67H49.7603L48.5605 61ZM37.604 14.5828C37.7588 14.2824 37.9615 14.0164 38.2 13.7923L38.2 35.3372C36.9215 35.783 35.7713 36.6706 35.0037 38C32.6943 42 35.5811 47 40.1999 47C44.8187 47 47.7054 42 45.396 38C44.6285 36.6706 43.4784 35.7831 42.2 35.3373L42.2 13.7923C42.4384 14.0164 42.6411 14.2824 42.7959 14.5828L55.1885 38.639C56.8516 41.8675 56.6337 45.7438 54.6192 48.7656L49.1296 57H31.2703L25.7807 48.7656C23.7662 45.7438 23.5483 41.8675 25.2115 38.639L37.604 14.5828ZM41.9319 40C42.7017 41.3333 41.7395 43 40.1999 43C38.6603 43 37.698 41.3333 38.4678 40C39.2376 38.6667 41.1621 38.6667 41.9319 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePenNib = forwardRef((props, ref) => {
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

CorePenNib.displayName = 'CorePenNib'

export default CorePenNib
