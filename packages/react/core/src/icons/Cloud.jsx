
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40.7183 19.9998C45.1616 19.9998 49.4515 21.765 52.6438 24.9066C55.836 28.0482 57.6698 32.3092 57.7413 36.7518L57.7671 38.3534C59.6471 38.8421 61.3812 39.8246 62.7782 41.2216C64.8411 43.2845 66 46.0824 66 48.9998C66 51.9171 64.8411 54.715 62.7782 56.7779C60.7153 58.8408 57.9174 59.9998 55 59.9998H48C47.9898 59.9998 47.9796 59.9997 47.9694 59.9996H38.0493C38.0329 59.9998 38.0165 59.9999 38 59.9999H28C24.287 59.9999 20.726 58.5249 18.1005 55.8994C15.475 53.2739 14 49.713 14 45.9999C14 42.2869 15.475 38.726 18.1005 36.1004C19.9441 34.2569 22.2489 32.9806 24.7436 32.3839C25.456 29.5802 26.895 26.9959 28.9507 24.9066C32.0419 21.765 36.275 19.9998 40.7183 19.9998Z"
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
            d="M40.7183 20C45.1616 20 49.4515 21.7652 52.6438 24.9068C55.836 28.0484 57.6698 32.3094 57.7413 36.7521L57.7671 38.3537C59.6471 38.8424 61.3812 39.8248 62.7782 41.2218C64.8411 43.2847 66 46.0826 66 49C66 51.9174 64.8411 54.7153 62.7782 56.7782C60.7153 58.8411 57.9174 60 55 60H51H50.4436H48C47.9898 60 47.9796 60 47.9694 59.9999H38.0493C38.0329 60.0001 38.0165 60.0002 38 60.0002L33.799 60.0002H32H28C24.287 60.0002 20.726 58.5252 18.1005 55.8997C15.475 53.2742 14 49.7132 14 46.0002C14 42.2872 15.475 38.7262 18.1005 36.1007C19.9441 34.2571 22.2489 32.9808 24.7436 32.3841C25.456 29.5805 26.895 26.9961 28.9507 24.9068C32.0419 21.7652 36.275 20 40.7183 20Z"
            fill="currentColor"
          />
          <path
            d="M52.6438 24.9068L51.2409 26.3323L51.2409 26.3323L52.6438 24.9068ZM57.7413 36.7521L55.7416 36.7842L57.7413 36.7521ZM57.7671 38.3537L55.7673 38.3859L55.7918 39.9067L57.2639 40.2894L57.7671 38.3537ZM62.7782 41.2218L64.1924 39.8076L64.1924 39.8076L62.7782 41.2218ZM47.9694 59.9999L47.9844 57.9999L47.9769 57.9999H47.9694V59.9999ZM38.0493 59.9999V57.9999H38.0372L38.0251 58L38.0493 59.9999ZM18.1005 55.8997L19.5147 54.4855L19.5147 54.4855L18.1005 55.8997ZM18.1005 36.1007L19.5147 37.5149H19.5147L18.1005 36.1007ZM24.7436 32.3841L25.2089 34.3292L26.3844 34.0481L26.6821 32.8766L24.7436 32.3841ZM28.9507 24.9068L30.3763 26.3096L28.9507 24.9068ZM54.0466 23.4814C50.4837 19.9749 45.6912 18 40.7183 18V22C44.6319 22 48.4194 23.5555 51.2409 26.3323L54.0466 23.4814ZM59.741 36.7199C59.661 31.7477 57.6096 26.9877 54.0466 23.4814L51.2409 26.3323C54.0625 29.1091 55.6786 32.8711 55.7416 36.7842L59.741 36.7199ZM59.7668 38.3215L59.741 36.7199L55.7416 36.7842L55.7673 38.3859L59.7668 38.3215ZM64.1924 39.8076C62.5413 38.1565 60.4919 36.9955 58.2702 36.418L57.2639 40.2894C58.8023 40.6892 60.221 41.4931 61.364 42.636L64.1924 39.8076ZM68 49C68 45.5522 66.6304 42.2456 64.1924 39.8076L61.364 42.636C63.0518 44.3239 64 46.6131 64 49H68ZM64.1924 58.1924C66.6304 55.7544 68 52.4478 68 49H64C64 51.3869 63.0518 53.6761 61.364 55.364L64.1924 58.1924ZM55 62C58.4478 62 61.7544 60.6304 64.1924 58.1924L61.364 55.364C59.6761 57.0518 57.3869 58 55 58V62ZM51 62H55V58H51V62ZM50.4436 62H51V58H50.4436V62ZM48 62H50.4436V58H48V62ZM47.9544 61.9998C47.9696 61.9999 47.9848 62 48 62V58C47.9948 58 47.9896 58 47.9844 57.9999L47.9544 61.9998ZM47.9694 57.9999H38.0493V61.9999H47.9694V57.9999ZM38 62.0002C38.0245 62.0002 38.049 62 38.0735 61.9997L38.0251 58C38.0168 58.0001 38.0084 58.0002 38 58.0002V62.0002ZM33.799 62.0002L38 62.0002V58.0002L33.799 58.0002V62.0002ZM32 62.0002H33.799V58.0002H32V62.0002ZM28 62.0002H32V58.0002H28V62.0002ZM16.6863 57.3139C19.6869 60.3145 23.7565 62.0002 28 62.0002V58.0002C24.8174 58.0002 21.7652 56.7359 19.5147 54.4855L16.6863 57.3139ZM12 46.0002C12 50.2436 13.6857 54.3133 16.6863 57.3139L19.5147 54.4855C17.2643 52.235 16 49.1828 16 46.0002H12ZM16.6863 34.6865C13.6857 37.6871 12 41.7567 12 46.0002H16C16 42.8176 17.2643 39.7653 19.5147 37.5149L16.6863 34.6865ZM24.2784 30.439C21.4274 31.1209 18.7933 32.5795 16.6863 34.6865L19.5147 37.5149C21.0949 35.9348 23.0703 34.8408 25.2089 34.3292L24.2784 30.439ZM27.5251 23.5041C25.2175 25.8493 23.6037 28.7491 22.8052 31.8916L26.6821 32.8766C27.3083 30.4119 28.5724 28.1429 30.3763 26.3096L27.5251 23.5041ZM40.7183 18C35.7439 18 30.9957 19.977 27.5251 23.5041L30.3763 26.3096C33.0881 23.5535 36.8062 22 40.7183 22V18Z"
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
            d="M40.7183 20C45.1616 20 49.4515 21.7652 52.6438 24.9068C55.836 28.0484 57.6698 32.3094 57.7413 36.7521L57.7671 38.3537C59.6471 38.8424 61.3812 39.8248 62.7782 41.2218C64.8411 43.2847 66 46.0826 66 49C66 51.9174 64.8411 54.7153 62.7782 56.7782C60.7153 58.8411 57.9174 60 55 60H51H50.4436H48C47.9898 60 47.9796 60 47.9694 59.9999H38.0493C38.0329 60.0001 38.0165 60.0002 38 60.0002L33.799 60.0002H32H28C24.287 60.0002 20.726 58.5252 18.1005 55.8997C15.475 53.2742 14 49.7132 14 46.0002C14 42.2872 15.475 38.7262 18.1005 36.1007C19.9441 34.2571 22.2489 32.9808 24.7437 32.3841C25.456 29.5805 26.895 26.9961 28.9507 24.9068C32.0419 21.7652 36.275 20 40.7183 20Z"
            fill="#56CCF2"
          />
          <path
            d="M40.7185 20.0002C36.2752 20.0002 32.0421 21.7655 28.9509 24.9071C25.8598 28.0487 24.1631 32.3104 24.2346 36.7531C24.3061 41.1957 26.1399 45.4575 29.3321 48.5991C32.5244 51.7407 36.8143 53.5059 41.2576 53.5059C42.461 53.5059 43.6489 53.3764 44.8029 53.1252C44.2777 51.8269 44.0002 50.4279 44.0002 49.0002C44.0002 46.0829 45.1591 43.285 47.222 41.2221C49.2849 39.1592 52.0828 38.0002 55.0002 38.0002C55.9156 38.0002 56.8193 38.1144 57.6922 38.3347C57.7334 37.8111 57.7501 37.2834 57.7415 36.7531C57.67 32.3104 55.8362 28.0487 52.644 24.9071C49.4517 21.7655 45.1618 20.0002 40.7185 20.0002Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M40.7183 19.9998C45.1616 19.9998 49.4515 21.765 52.6438 24.9066C55.836 28.0482 57.6698 32.3092 57.7413 36.7518L57.7671 38.3534C59.6471 38.8421 61.3812 39.8246 62.7782 41.2216C64.8411 43.2845 66 46.0824 66 48.9998C66 51.9171 64.8411 54.715 62.7782 56.7779C60.7153 58.8408 57.9174 59.9998 55 59.9998H48C47.9898 59.9998 47.9796 59.9997 47.9694 59.9996H38.0493C38.0329 59.9998 38.0165 59.9999 38 59.9999H28C24.287 59.9999 20.726 58.5249 18.1005 55.8994C15.475 53.2739 14 49.713 14 45.9999C14 42.2869 15.475 38.726 18.1005 36.1004C19.9441 34.2569 22.2489 32.9806 24.7437 32.3839C25.456 29.5802 26.895 26.9959 28.9507 24.9066C32.0419 21.765 36.275 19.9998 40.7183 19.9998Z"
            fill="currentColor"
            fill-opacity="0.25"
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
            d="M27.5251 23.5041C30.9957 19.977 35.7439 18 40.7183 18C45.6912 18 50.4837 19.9749 54.0466 23.4814C57.6096 26.9877 59.661 31.7477 59.741 36.7199L59.7439 36.8965C61.3957 37.5439 62.9135 38.5288 64.1924 39.8076C66.6304 42.2456 68 45.5522 68 49C68 52.4478 66.6304 55.7544 64.1924 58.1924C61.7544 60.6304 58.4478 62 55 62H48L47.9694 61.9999H38.0602C38.0401 62.0001 38.0201 62.0002 38 62.0002H28C23.7565 62.0002 19.6869 60.3145 16.6863 57.3139C13.6857 54.3133 12 50.2436 12 46.0002C12 41.7567 13.6857 37.6871 16.6863 34.6865C18.5077 32.8651 20.7229 31.5282 23.1317 30.7588C24.0056 28.0534 25.4976 25.5647 27.5251 23.5041ZM40.7183 22C36.8062 22 33.0881 23.5535 30.3763 26.3096C28.5724 28.1429 27.3083 30.4119 26.6821 32.8766L26.3844 34.0481L25.2089 34.3293C23.0703 34.8408 21.0949 35.9348 19.5147 37.5149C17.2643 39.7653 16 42.8176 16 46.0002C16 49.1828 17.2643 52.235 19.5147 54.4855C21.7652 56.7359 24.8174 58.0002 28 58.0002H38L38.0251 58L38.0372 57.9999H47.9769L47.9844 57.9999L48 58H55C57.3869 58 59.6761 57.0518 61.364 55.364C63.0518 53.6761 64 51.3869 64 49C64 46.6131 63.0518 44.3239 61.364 42.636C60.221 41.4931 58.8023 40.6892 57.2639 40.2894L55.7918 39.9067L55.7416 36.7842C55.6786 32.8711 54.0625 29.1091 51.2409 26.3323C48.4194 23.5555 44.6319 22 40.7183 22Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCloud = forwardRef((props, ref) => {
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

CoreCloud.displayName = 'CoreCloud'

export default CoreCloud
