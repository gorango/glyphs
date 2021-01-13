
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M66 44.2871L54.7078 45.9003C44.9521 47.2939 35.0479 47.2939 25.2922 45.9003L14 44.2871V60C14 61.1046 14.8954 62 16 62H64C65.1046 62 66 61.1046 66 60V44.2871Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M12 28C12 26.8954 12.8954 26 14 26H66C67.1046 26 68 26.8954 68 28V42.2654C68 43.2607 67.2681 44.1046 66.2828 44.2453L54.7078 45.8989C44.9521 47.2926 35.0479 47.2926 25.2922 45.8989L13.7172 44.2453C12.7319 44.1046 12 43.2607 12 42.2654V28Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35 46.8237V49.9995C35 51.104 35.8954 51.9995 37 51.9995H43C44.1046 51.9995 45 51.104 45 49.9995V46.8237C41.6686 46.9841 38.3314 46.9841 35 46.8237Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48 26V24C48 20.6863 45.3137 18 42 18H38C34.6863 18 32 20.6863 32 24V26"
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
            d="M14 47.8214V60.0001C14 61.1047 14.8954 62.0001 16 62.0001H64C65.1046 62.0001 66 61.1047 66 60.0001V47.8214L55.2028 49.3638C52.4758 49.7534 49.7376 50.0376 46.9942 50.2165C46.8816 52.3248 45.1364 53.9997 43 53.9997H37C34.8636 53.9997 33.1184 52.3248 33.0058 50.2165C30.2624 50.0376 27.5242 49.7534 24.7972 49.3638L14 47.8214Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38 15C33.0294 15 29 19.0294 29 24V26H14C12.8954 26 12 26.8954 12 28V42.2654C12 43.2607 12.7319 44.1046 13.7172 44.2453L25.2922 45.8989C35.0479 47.2926 44.9521 47.2926 54.7078 45.8989L66.2828 44.2453C67.2681 44.1046 68 43.2607 68 42.2654V28C68 26.8954 67.1046 26 66 26H51V24C51 19.0294 46.9706 15 42 15H38ZM45 26V24C45 22.3431 43.6569 21 42 21H38C36.3431 21 35 22.3431 35 24V26H45Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M48 26V24C48 20.6863 45.3137 18 42 18H38C34.6863 18 32 20.6863 32 24V26"
            stroke="#333333"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9246 26.0014L64.0754 26.0014C64.0504 26.0005 64.0252 26 64 26L16 26C15.9748 26 15.9496 26.0005 15.9246 26.0014ZM66 44.2871L54.7078 45.9003C44.9521 47.2939 35.0479 47.2939 25.2922 45.9003L14 44.2871L14 60C14 61.1046 14.8954 62 16 62L64 62C65.1046 62 66 61.1046 66 60V44.2871Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35 46.824V49.9997C35 51.1043 35.8954 51.9997 37 51.9997H43C44.1046 51.9997 45 51.1043 45 49.9997V46.824C41.6686 46.9843 38.3314 46.9843 35 46.824Z"
            fill="#EB5757"
          />
          <path
            d="M12 28C12 26.8954 12.8954 26 14 26L66 26C67.1046 26 68 26.8954 68 28V42.2654C68 43.2607 67.2681 44.1046 66.2828 44.2453L54.7078 45.8989C44.9521 47.2926 35.0479 47.2926 25.2922 45.8989L13.7172 44.2453C12.7319 44.1046 12 43.2607 12 42.2654L12 28Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M15.9246 26.0014H64.0754C64.0504 26.0005 64.0252 26 64 26H16C15.9748 26 15.9496 26.0005 15.9246 26.0014Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M66 44.2871L54.7078 45.9003C44.9521 47.2939 35.0479 47.2939 25.2922 45.9003L14 44.2871V60C14 61.1046 14.8954 62 16 62H64C65.1046 62 66 61.1046 66 60V44.2871Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35 46.8239V49.9996C35 51.1042 35.8954 51.9996 37 51.9996H43C44.1046 51.9996 45 51.1042 45 49.9996V46.8239C41.6686 46.9842 38.3314 46.9842 35 46.8239Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12 28C12 26.8954 12.8954 26 14 26H66C67.1046 26 68 26.8954 68 28V42.2654C68 43.2607 67.2681 44.1046 66.2828 44.2453L54.7078 45.8989C44.9521 47.2926 35.0479 47.2926 25.2922 45.8989L13.7172 44.2453C12.7319 44.1046 12 43.2607 12 42.2654V28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48 26V24C48 20.6863 45.3137 18 42 18H38C34.6863 18 32 20.6863 32 24V26M15.9246 26.0014H64.0754C64.0504 26.0005 64.0252 26 64 26H16C15.9748 26 15.9496 26.0005 15.9246 26.0014ZM66 44.2871L54.7078 45.9003C44.9521 47.2939 35.0479 47.2939 25.2922 45.9003L14 44.2871V60C14 61.1046 14.8954 62 16 62H64C65.1046 62 66 61.1046 66 60V44.2871ZM35 46.8239V49.9996C35 51.1042 35.8954 51.9996 37 51.9996H43C44.1046 51.9996 45 51.1042 45 49.9996V46.8239C41.6686 46.9842 38.3314 46.9842 35 46.8239ZM54.7078 45.8989L66.2828 44.2453C67.2681 44.1046 68 43.2607 68 42.2654V28C68 26.8954 67.1046 26 66 26H14C12.8954 26 12 26.8954 12 28V42.2654C12 43.2607 12.7319 44.1046 13.7172 44.2453L25.2922 45.8989C35.0479 47.2926 44.9521 47.2926 54.7078 45.8989Z"
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
            d="M38 16C33.5817 16 30 19.5817 30 24H14C11.7909 24 10 25.7909 10 28V42.2654C10 43.7316 10.7941 45.0335 12 45.7302V60C12 62.2091 13.7909 64 16 64H64C66.2091 64 68 62.2091 68 60V45.7302C69.2059 45.0335 70 43.7316 70 42.2654V28C70 25.7909 68.2091 24 66 24H50C50 19.5817 46.4183 16 42 16H38ZM46 24C46 21.7909 44.2091 20 42 20H38C35.7909 20 34 21.7909 34 24H46ZM15.8493 28C15.8743 28.0009 15.8994 28.0014 15.9246 28.0014H64.0754C64.1006 28.0014 64.1257 28.0009 64.1507 28H66V42.2654L54.425 43.919C51.2637 44.3706 48.0865 44.673 44.9038 44.8262C41.6365 44.9835 38.3635 44.9835 35.0962 44.8262C31.9135 44.673 28.7363 44.3706 25.575 43.919L14 42.2654V28H15.8493ZM43 48.9031C41.0004 48.9597 38.9996 48.9597 37 48.9031V49.9996H43V48.9031ZM33 49.9996V48.7141C30.3295 48.5374 27.664 48.2594 25.0093 47.8802L16 46.5931V60H64V46.5931L54.9907 47.8802C52.336 48.2594 49.6705 48.5374 47 48.7141V49.9996C47 52.2087 45.2091 53.9996 43 53.9996H37C34.7909 53.9996 33 52.2087 33 49.9996Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBriefcase = forwardRef((props, ref) => {
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

CoreBriefcase.displayName = 'CoreBriefcase'

export default CoreBriefcase