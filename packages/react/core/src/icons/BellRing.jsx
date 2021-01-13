
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M39.6274 18.5C35.384 18.5 31.3143 20.1857 28.3137 23.1863L27.6863 23.8137C24.6857 26.8143 23 30.884 23 35.1274V38.0656C23 43.4665 20.8545 48.6461 17.0355 52.4651C16.3725 53.1281 16 54.0273 16 54.9649C16 56.9173 17.5828 58.5001 19.5352 58.5001H60.4648C62.4172 58.5001 64 56.9173 64 54.9649C64 54.0273 63.6275 53.1281 62.9645 52.4651C59.1455 48.6461 57 43.4665 57 38.0656V35.1274C57 30.884 55.3143 26.8143 52.3137 23.8137L51.6863 23.1863C48.6857 20.1857 44.616 18.5 40.3726 18.5H39.6274Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33.7549 58.5C33.3124 59.4211 33.0718 60.4434 33.0718 61.5C33.0718 63.9752 34.3923 66.2624 36.5359 67.5C38.6795 68.7376 41.3205 68.7376 43.4641 67.5C45.6077 66.2624 46.9282 63.9752 46.9282 61.5C46.9282 60.4434 46.6876 59.4211 46.245 58.5"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42 18.5829V15.5C42 14.3954 41.1046 13.5 40 13.5C38.8954 13.5 38 14.3954 38 15.5V18.5829"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.9999 34.5001C63.9999 31.3484 63.3791 28.2275 62.173 25.3157C60.9669 22.4039 59.1991 19.7581 56.9705 17.5295"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 34.5001C16 31.3484 16.6208 28.2275 17.8269 25.3157C19.033 22.4039 20.8008 19.7581 23.0294 17.5295"
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
            d="M33.0718 61.5C33.0718 63.9752 34.3923 66.2624 36.5359 67.5C38.6795 68.7376 41.3205 68.7376 43.4641 67.5C45.6077 66.2624 46.9282 63.9752 46.9282 61.5H33.0718Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.6274 18.5C35.384 18.5 31.3143 20.1857 28.3137 23.1863L27.6863 23.8137C24.6857 26.8143 23 30.884 23 35.1274V38.0656C23 43.4665 20.8545 48.6461 17.0355 52.4651C16.3725 53.1281 16 54.0273 16 54.9649C16 56.9173 17.5828 58.5001 19.5352 58.5001L60.4648 58.5001C62.4172 58.5001 64 56.9173 64 54.9649C64 54.0273 63.6275 53.1281 62.9645 52.4651C59.1455 48.6461 57 43.4665 57 38.0656V35.1274C57 30.884 55.3143 26.8143 52.3137 23.8137L51.6863 23.1863C48.6857 20.1857 44.616 18.5 40.3726 18.5H39.6274Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 18.5829V15.5C42 14.3954 41.1046 13.5 40 13.5C38.8954 13.5 38 14.3954 38 15.5V18.5829C38.5383 18.5279 39.0814 18.5 39.6274 18.5H40.3726C40.9186 18.5 41.4617 18.5279 42 18.5829Z"
            fill="currentColor"
          />
          <path
            d="M64 34.5C64 31.3483 63.3792 28.2274 62.1731 25.3156C60.967 22.4038 59.1992 19.758 56.9706 17.5294"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 34.5C16 31.3483 16.6208 28.2274 17.8269 25.3156C19.033 22.4038 20.8008 19.758 23.0294 17.5294"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.7549 58.5C33.3124 59.4211 33.0718 60.4434 33.0718 61.5C33.0718 63.9752 34.3923 66.2624 36.5359 67.5C38.6795 68.7376 41.3205 68.7376 43.4641 67.5C45.6077 66.2624 46.9282 63.9752 46.9282 61.5C46.9282 60.4434 46.6876 59.4211 46.245 58.5H33.7549Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.6274 18.5C35.384 18.5 31.3143 20.1857 28.3137 23.1863L27.6863 23.8137C24.6857 26.8143 23 30.884 23 35.1274V38.0656C23 43.4665 20.8545 48.6461 17.0355 52.4651C16.3725 53.1281 16 54.0273 16 54.9649C16 56.9173 17.5828 58.5001 19.5352 58.5001L60.4648 58.5001C62.4172 58.5001 64 56.9173 64 54.9649C64 54.0273 63.6275 53.1281 62.9645 52.4651C59.1455 48.6461 57 43.4665 57 38.0656V35.1274C57 30.884 55.3143 26.8143 52.3137 23.8137L51.6863 23.1863C48.6857 20.1857 44.616 18.5 40.3726 18.5H39.6274Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42 18.5829V15.5C42 14.3954 41.1046 13.5 40 13.5C38.8954 13.5 38 14.3954 38 15.5V18.5829C38.5383 18.5279 39.0814 18.5 39.6274 18.5H40.3726C40.9186 18.5 41.4617 18.5279 42 18.5829Z"
            fill="#F2994A"
          />
          <path
            d="M64 34.5C64 31.3483 63.3792 28.2274 62.1731 25.3156C60.967 22.4038 59.1992 19.758 56.9706 17.5294"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 34.5C16 31.3483 16.6208 28.2274 17.8269 25.3156C19.033 22.4038 20.8008 19.758 23.0294 17.5294"
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
            d="M33.755 58.5C33.3124 59.4211 33.0718 60.4434 33.0718 61.5C33.0718 63.9752 34.3923 66.2624 36.5359 67.5C38.6795 68.7376 41.3205 68.7376 43.4641 67.5C45.6077 66.2624 46.9282 63.9752 46.9282 61.5C46.9282 60.4434 46.6876 59.4211 46.245 58.5H33.755Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.6274 18.5C35.384 18.5 31.3143 20.1857 28.3137 23.1863L27.6863 23.8137C24.6857 26.8143 23 30.884 23 35.1274V38.0656C23 43.4665 20.8545 48.6461 17.0355 52.4651C16.3725 53.1281 16 54.0273 16 54.9649C16 56.9173 17.5828 58.5001 19.5352 58.5001H60.4648C62.4172 58.5001 64 56.9173 64 54.9649C64 54.0273 63.6275 53.1281 62.9645 52.4651C59.1455 48.6461 57 43.4665 57 38.0656V35.1274C57 30.884 55.3143 26.8143 52.3137 23.8137L51.6863 23.1863C48.6857 20.1857 44.616 18.5 40.3726 18.5H39.6274Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M42 18.5829V15.5C42 14.3954 41.1046 13.5 40 13.5C38.8954 13.5 38 14.3954 38 15.5V18.5829C38.5383 18.5279 39.0814 18.5 39.6274 18.5H40.3726C40.9186 18.5 41.4617 18.5279 42 18.5829Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.6274 18.5C35.384 18.5 31.3143 20.1857 28.3137 23.1863L27.6863 23.8137C24.6857 26.8143 23 30.884 23 35.1274V38.0656C23 43.4665 20.8545 48.6461 17.0355 52.4651C16.3725 53.1281 16 54.0273 16 54.9649C16 56.9173 17.5828 58.5001 19.5352 58.5001H60.4648C62.4172 58.5001 64 56.9173 64 54.9649C64 54.0273 63.6275 53.1281 62.9645 52.4651C59.1455 48.6461 57 43.4665 57 38.0656V35.1274C57 30.884 55.3143 26.8143 52.3137 23.8137L51.6863 23.1863C48.6857 20.1857 44.616 18.5 40.3726 18.5M39.6274 18.5H40.3726M39.6274 18.5C39.0814 18.5 38.5383 18.5279 38 18.5829V15.5C38 14.3954 38.8954 13.5 40 13.5C41.1046 13.5 42 14.3954 42 15.5V18.5829C41.4617 18.5279 40.9186 18.5 40.3726 18.5M64 34.5C64 31.3483 63.3792 28.2274 62.1731 25.3156C60.967 22.4038 59.1992 19.758 56.9706 17.5294M16 34.5C16 31.3483 16.6208 28.2274 17.8269 25.3156C19.033 22.4038 20.8008 19.758 23.0294 17.5294M33.0718 61.5C33.0718 60.4434 33.3124 59.4211 33.755 58.5H46.245C46.6876 59.4211 46.9282 60.4434 46.9282 61.5C46.9282 63.9752 45.6077 66.2624 43.4641 67.5C41.3205 68.7376 38.6795 68.7376 36.5359 67.5C34.3923 66.2624 33.0718 63.9752 33.0718 61.5Z"
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
            d="M40 11.5C37.7909 11.5 36 13.2909 36 15.5V16.8692C32.5781 17.5733 29.407 19.2646 26.8995 21.7721L26.2721 22.3995C22.8964 25.7752 21 30.3535 21 35.1274V38.0656C21 42.936 19.0652 47.607 15.6213 51.0508C14.5832 52.0889 14 53.4968 14 54.9649C14 58.0219 16.4782 60.5001 19.5352 60.5001H31.1279C31.0907 60.8298 31.0718 61.1636 31.0718 61.5C31.0718 64.6897 32.7735 67.6372 35.5359 69.2321C38.2983 70.8269 41.7017 70.8269 44.4641 69.2321C47.2265 67.6372 48.9282 64.6897 48.9282 61.5C48.9282 61.1636 48.9093 60.8298 48.8721 60.5001H60.4648C63.5218 60.5001 66 58.0219 66 54.9649C66 53.4968 65.4168 52.0889 64.3787 51.0508C60.9348 47.607 59 42.936 59 38.0656V35.1274C59 30.3535 57.1036 25.7752 53.7279 22.3995L53.1005 21.7721C50.593 19.2646 47.4219 17.5733 44 16.8692V15.5C44 13.2909 42.2091 11.5 40 11.5ZM41.7966 20.5726C41.3256 20.5244 40.8504 20.5 40.3726 20.5H39.6274C39.1496 20.5 38.6744 20.5244 38.2034 20.5726C35.0135 20.8986 32.0156 22.3128 29.7279 24.6005L29.1005 25.2279C26.475 27.8534 25 31.4144 25 35.1274V38.0656C25 43.9969 22.6438 49.6853 18.4497 53.8793C18.1617 54.1672 18 54.5577 18 54.9649C18 55.8127 18.6873 56.5001 19.5352 56.5001H60.4648C61.3127 56.5001 62 55.8127 62 54.9649C62 54.5577 61.8383 54.1672 61.5503 53.8793C57.3562 49.6853 55 43.9969 55 38.0656V35.1274C55 31.4144 53.525 27.8534 50.8995 25.2279L50.2721 24.6005C47.9844 22.3128 44.9865 20.8986 41.7966 20.5726ZM35.0718 61.5C35.0718 61.1601 35.1068 60.8254 35.1741 60.5001H44.8259C44.8932 60.8254 44.9282 61.1601 44.9282 61.5C44.9282 63.2607 43.9889 64.8876 42.4641 65.7679C40.9393 66.6483 39.0607 66.6483 37.5359 65.7679C36.0111 64.8876 35.0718 63.2607 35.0718 61.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M55.5563 16.1152C56.3374 15.3342 57.6037 15.3342 58.3848 16.1152C60.7991 18.5295 62.7142 21.3958 64.0209 24.5502C65.3275 27.7047 66 31.0856 66 34.5C66 35.6046 65.1046 36.5 64 36.5C62.8954 36.5 62 35.6046 62 34.5C62 31.6109 61.431 28.7501 60.3253 26.081C59.2197 23.4118 57.5992 20.9865 55.5564 18.9437C54.7753 18.1626 54.7753 16.8963 55.5563 16.1152Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M21.6152 16.1152C22.3963 15.3342 23.6626 15.3342 24.4437 16.1152C25.2247 16.8963 25.2247 18.1626 24.4436 18.9437C22.4008 20.9865 20.7803 23.4118 19.6747 26.081C18.569 28.7501 18 31.6109 18 34.5C18 35.6046 17.1046 36.5 16 36.5C14.8954 36.5 14 35.6046 14 34.5C14 31.0856 14.6725 27.7047 15.9791 24.5502C17.2858 21.3958 19.2009 18.5295 21.6152 16.1152Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBellRing = forwardRef((props, ref) => {
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

CoreBellRing.displayName = 'CoreBellRing'

export default CoreBellRing
