
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M39.9998 13C33.8098 16.1734 26.9135 17.8608 19.8641 17.8608C18.9124 17.8608 17.9634 17.8301 17.0186 17.7691C15.7991 23.3474 15.6641 29.1518 16.6707 34.8601C18.4725 45.0788 23.8171 54.336 31.7659 61.0058C34.3145 63.1443 37.0786 64.973 39.9999 66.4707C42.9213 64.973 45.6854 63.1443 48.234 61.0058C56.1827 54.336 61.5273 45.0788 63.3292 34.8601C64.3357 29.1518 64.2008 23.3474 62.9812 17.769C62.0364 17.8301 61.0874 17.8608 60.1356 17.8608C53.0862 17.8608 46.1899 16.1734 39.9998 13Z"
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
            d="M39.9998 13C33.8098 16.1734 26.9135 17.8608 19.8641 17.8608C18.9124 17.8608 17.9634 17.8301 17.0186 17.7691C15.7991 23.3474 15.6641 29.1518 16.6707 34.8601C18.4725 45.0788 23.8171 54.336 31.7659 61.0058C34.3145 63.1443 37.0786 64.973 39.9999 66.4707C42.9213 64.973 45.6854 63.1443 48.2339 61.0058C56.1827 54.336 61.5273 45.0788 63.3292 34.8601C64.3357 29.1518 64.2008 23.3474 62.9812 17.769C62.0364 17.8301 61.0874 17.8608 60.1356 17.8608C53.0862 17.8608 46.1899 16.1734 39.9998 13Z"
            fill="currentColor"
          />
          <path
            d="M39.9998 13L40.9123 11.2203C40.3394 10.9266 39.6602 10.9266 39.0874 11.2203L39.9998 13ZM17.0186 17.7691L17.1475 15.7732C16.161 15.7095 15.2759 16.3761 15.0648 17.3419L17.0186 17.7691ZM16.6707 34.8601L14.7011 35.2074L16.6707 34.8601ZM31.7659 61.0058L33.0515 59.4737L31.7659 61.0058ZM39.9999 66.4707L39.0875 68.2504C39.6603 68.5441 40.3395 68.5441 40.9123 68.2504L39.9999 66.4707ZM48.2339 61.0058L49.5195 62.5379L48.2339 61.0058ZM63.3292 34.8601L65.2988 35.2074L63.3292 34.8601ZM62.9812 17.769L64.9351 17.3419C64.7239 16.3761 63.8388 15.7095 62.8523 15.7732L62.9812 17.769ZM39.0874 11.2203C33.1778 14.2499 26.594 15.8608 19.8641 15.8608V19.8608C27.233 19.8608 34.4418 18.0969 40.9123 14.7797L39.0874 11.2203ZM19.8641 15.8608C18.9555 15.8608 18.0495 15.8315 17.1475 15.7732L16.8898 19.7649C17.8774 19.8287 18.8693 19.8608 19.8641 19.8608V15.8608ZM15.0648 17.3419C13.79 23.1729 13.6489 29.2404 14.7011 35.2074L18.6403 34.5128C17.6794 29.0632 17.8082 23.5218 18.9725 18.1962L15.0648 17.3419ZM14.7011 35.2074C16.5845 45.8892 22.1714 55.5658 30.4803 62.5379L33.0515 59.4737C25.4629 53.1061 20.3605 44.2684 18.6403 34.5128L14.7011 35.2074ZM30.4803 62.5379C33.1444 64.7733 36.0337 66.6849 39.0875 68.2504L40.9123 64.691C38.1234 63.2611 35.4846 61.5153 33.0515 59.4737L30.4803 62.5379ZM40.9123 68.2504C43.9661 66.6849 46.8555 64.7733 49.5195 62.5379L46.9484 59.4737C44.5152 61.5153 41.8765 63.2611 39.0875 64.691L40.9123 68.2504ZM49.5195 62.5379C57.8285 55.5658 63.4153 45.8892 65.2988 35.2074L61.3596 34.5128C59.6394 44.2684 54.5369 53.1061 46.9484 59.4737L49.5195 62.5379ZM65.2988 35.2074C66.3509 29.2404 66.2099 23.1729 64.9351 17.3419L61.0274 18.1962C62.1917 23.5218 62.3205 29.0632 61.3596 34.5128L65.2988 35.2074ZM62.8523 15.7732C61.9503 15.8315 61.0443 15.8608 60.1356 15.8608V19.8608C61.1305 19.8608 62.1224 19.8287 63.1101 19.7649L62.8523 15.7732ZM60.1356 15.8608C53.4056 15.8608 46.8219 14.2499 40.9123 11.2203L39.0874 14.7797C45.5579 18.0969 52.7667 19.8608 60.1356 19.8608V15.8608Z"
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
            d="M39.9998 13C33.8098 16.1734 26.9135 17.8608 19.8641 17.8608C18.9124 17.8608 17.9634 17.8301 17.0186 17.7691C15.7991 23.3474 15.6641 29.1518 16.6707 34.8601C18.4725 45.0788 23.8171 54.336 31.7659 61.0058C34.3145 63.1443 37.0786 64.973 39.9999 66.4707C42.9213 64.973 45.6854 63.1443 48.2339 61.0058C56.1827 54.336 61.5273 45.0788 63.3292 34.8601C64.3357 29.1518 64.2008 23.3474 62.9812 17.769C62.0364 17.8301 61.0874 17.8608 60.1356 17.8608C53.0862 17.8608 46.1899 16.1734 39.9998 13Z"
            fill="#EB5757"
          />
          <path
            d="M39.9998 13L40.9123 11.2203C40.3394 10.9266 39.6602 10.9266 39.0874 11.2203L39.9998 13ZM17.0186 17.7691L17.1475 15.7732C16.161 15.7095 15.2759 16.3761 15.0648 17.3419L17.0186 17.7691ZM16.6707 34.8601L14.7011 35.2074L16.6707 34.8601ZM31.7659 61.0058L33.0515 59.4737L31.7659 61.0058ZM39.9999 66.4707L39.0875 68.2504C39.6603 68.5441 40.3395 68.5441 40.9123 68.2504L39.9999 66.4707ZM48.2339 61.0058L49.5195 62.5379L48.2339 61.0058ZM63.3292 34.8601L65.2988 35.2074V35.2074L63.3292 34.8601ZM62.9812 17.769L64.9351 17.3419C64.7239 16.3761 63.8388 15.7095 62.8523 15.7732L62.9812 17.769ZM39.0874 11.2203C33.1778 14.2499 26.594 15.8608 19.8641 15.8608V19.8608C27.233 19.8608 34.4418 18.097 40.9123 14.7797L39.0874 11.2203ZM19.8641 15.8608C18.9555 15.8608 18.0495 15.8315 17.1475 15.7732L16.8898 19.7649C17.8774 19.8287 18.8693 19.8608 19.8641 19.8608V15.8608ZM15.0648 17.3419C13.79 23.1729 13.6489 29.2404 14.7011 35.2074L18.6403 34.5128C17.6794 29.0632 17.8082 23.5218 18.9725 18.1962L15.0648 17.3419ZM14.7011 35.2074C16.5845 45.8892 22.1714 55.5658 30.4803 62.5379L33.0515 59.4737C25.4629 53.1061 20.3605 44.2684 18.6403 34.5128L14.7011 35.2074ZM30.4803 62.5379C33.1444 64.7733 36.0337 66.6849 39.0875 68.2504L40.9123 64.691C38.1234 63.2611 35.4846 61.5153 33.0515 59.4737L30.4803 62.5379ZM40.9123 68.2504C43.9661 66.6849 46.8555 64.7733 49.5195 62.5379L46.9484 59.4737C44.5152 61.5153 41.8765 63.2611 39.0875 64.691L40.9123 68.2504ZM49.5195 62.5379C57.8285 55.5658 63.4153 45.8892 65.2988 35.2074L61.3596 34.5128C59.6394 44.2684 54.5369 53.1061 46.9484 59.4737L49.5195 62.5379ZM65.2988 35.2074C66.3509 29.2404 66.2099 23.1729 64.9351 17.3419L61.0274 18.1962C62.1917 23.5218 62.3205 29.0632 61.3596 34.5128L65.2988 35.2074ZM62.8523 15.7732C61.9503 15.8315 61.0443 15.8608 60.1356 15.8608V19.8608C61.1305 19.8608 62.1224 19.8287 63.1101 19.7649L62.8523 15.7732ZM60.1356 15.8608C53.4056 15.8608 46.8219 14.2499 40.9123 11.2203L39.0874 14.7797C45.5579 18.097 52.7667 19.8608 60.1356 19.8608V15.8608Z"
            fill="#EB5757"
          />
          <g clip-path="url(#clip00SNy)"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.9999 23.2373C36.5072 25.1816 32.5509 26.2242 28.4938 26.2242C27.9185 26.2242 27.3452 26.2032 26.775 26.1617C26.1045 29.4411 26.0268 32.836 26.5688 36.1831L26.823 37.7531C27.7555 43.5117 30.6063 48.7863 34.913 52.7212L35.55 53.3032C36.9143 54.5498 38.409 55.6225 40 56.5082C41.5909 55.6225 43.0857 54.5498 44.4499 53.3032L45.0869 52.7212C49.3936 48.7863 52.2444 43.5117 53.1769 37.7531L53.4311 36.1831C53.9731 32.836 53.8954 29.4411 53.2249 26.1617C52.6547 26.2032 52.0814 26.2242 51.506 26.2242C47.4489 26.2242 43.4926 25.1816 39.9999 23.2373Z" fill="#F2994A"/><path d="M39.9999 23.2373L40.9727 21.4898C40.3679 21.1531 39.6319 21.1531 39.0271 21.4898L39.9999 23.2373ZM26.775 26.1617L26.9203 24.167C25.9178 24.094 25.0169 24.7763 24.8156 25.7611L26.775 26.1617ZM26.5688 36.1831L24.5945 36.5028L26.5688 36.1831ZM26.823 37.7531L28.7973 37.4334L26.823 37.7531ZM34.913 52.7212L33.5639 54.1977L33.5639 54.1977L34.913 52.7212ZM35.55 53.3032L36.899 51.8267L36.899 51.8267L35.55 53.3032ZM40 56.5082L39.0272 58.2556C39.632 58.5923 40.3679 58.5923 40.9727 58.2556L40 56.5082ZM44.4499 53.3032L43.1009 51.8267V51.8267L44.4499 53.3032ZM45.0869 52.7212L43.7379 51.2447H43.7379L45.0869 52.7212ZM53.1769 37.7531L55.1512 38.0728L53.1769 37.7531ZM53.4311 36.1831L55.4054 36.5028L53.4311 36.1831ZM53.2249 26.1617L55.1844 25.7611C54.983 24.7763 54.0821 24.094 53.0796 24.167L53.2249 26.1617ZM39.0271 21.4898C35.8296 23.2698 32.2078 24.2242 28.4938 24.2242V28.2242C32.8939 28.2242 37.1848 27.0934 40.9727 24.9848L39.0271 21.4898ZM28.4938 24.2242C27.9671 24.2242 27.4423 24.205 26.9203 24.167L26.6298 28.1564C27.2482 28.2015 27.8699 28.2242 28.4938 28.2242V24.2242ZM24.8156 25.7611C24.0969 29.2761 24.0136 32.9151 24.5945 36.5028L28.5431 35.8634C28.04 32.7569 28.1122 29.606 28.7345 26.5623L24.8156 25.7611ZM24.5945 36.5028L24.8488 38.0728L28.7973 37.4334L28.5431 35.8634L24.5945 36.5028ZM24.8488 38.0728C25.8533 44.2764 28.9245 49.9587 33.5639 54.1977L36.2621 51.2447C32.2882 47.6139 29.6578 42.7469 28.7973 37.4334L24.8488 38.0728ZM33.5639 54.1977L34.2009 54.7797L36.899 51.8267L36.262 51.2447L33.5639 54.1977ZM34.2009 54.7797C35.6805 56.1316 37.3017 57.2951 39.0272 58.2556L40.9727 54.7607C39.5164 53.9499 38.148 52.9679 36.899 51.8267L34.2009 54.7797ZM40.9727 58.2556C42.6983 57.2951 44.3194 56.1316 45.799 54.7797L43.1009 51.8267C41.8519 52.9679 40.4836 53.9499 39.0272 54.7607L40.9727 58.2556ZM45.799 54.7797L46.436 54.1977L43.7379 51.2447L43.1009 51.8267L45.799 54.7797ZM46.436 54.1977C51.0755 49.9587 54.1466 44.2764 55.1512 38.0728L51.2026 37.4334C50.3422 42.7469 47.7117 47.6139 43.7379 51.2447L46.436 54.1977ZM55.1512 38.0728L55.4054 36.5028L51.4568 35.8634L51.2026 37.4334L55.1512 38.0728ZM55.4054 36.5028C55.9864 32.9151 55.903 29.2761 55.1844 25.7611L51.2654 26.5623C51.8878 29.606 51.9599 32.7569 51.4568 35.8634L55.4054 36.5028ZM53.0796 24.167C52.5576 24.205 52.0328 24.2242 51.506 24.2242V28.2242C52.13 28.2242 52.7517 28.2014 53.3702 28.1564L53.0796 24.167ZM51.506 24.2242C47.792 24.2242 44.1702 23.2698 40.9727 21.4898L39.0271 24.9848C42.815 27.0934 47.1059 28.2242 51.506 28.2242V24.2242Z" fill="#F2994A"/></g>
          <defs><clipPath id="clip00SNy"><rect width="32" height="37.3335" fill="white" transform="translate(24 21.333)"/></clipPath></defs>
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M39.9998 13C33.8098 16.1734 26.9135 17.8608 19.8641 17.8608C18.9124 17.8608 17.9634 17.8301 17.0186 17.7691C15.7991 23.3474 15.6641 29.1518 16.6707 34.8601C18.4725 45.0788 23.8171 54.336 31.7659 61.0058C34.3145 63.1443 37.0786 64.973 39.9999 66.4707C42.9213 64.973 45.6854 63.1443 48.234 61.0058C56.1827 54.336 61.5273 45.0788 63.3292 34.8601C64.3357 29.1518 64.2008 23.3474 62.9812 17.769C62.0364 17.8301 61.0874 17.8608 60.1356 17.8608C53.0862 17.8608 46.1899 16.1734 39.9998 13Z"
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
            d="M39.0876 11.4849C39.6604 11.1912 40.3396 11.1912 40.9124 11.4849C46.822 14.5146 53.4058 16.1255 60.1358 16.1255C61.0445 16.1255 61.9505 16.0961 62.8525 16.0379C63.839 15.9741 64.7241 16.6408 64.9352 17.6065C66.2101 23.4375 66.3511 29.5051 65.299 35.472C63.4155 46.1538 57.8287 55.8305 49.5197 62.8025C46.8557 65.0379 43.9663 66.9495 40.9125 68.5151C40.3397 68.8088 39.6605 68.8088 39.0877 68.5151C36.0339 66.9495 33.1446 65.0379 30.4805 62.8025C22.1715 55.8305 16.5847 46.1538 14.7012 35.472C13.6491 29.5051 13.7902 23.4376 15.065 17.6065C15.2761 16.6408 16.1612 15.9742 17.1477 16.0379C18.0497 16.0961 18.9556 16.1255 19.8643 16.1255C26.5942 16.1255 33.178 14.5146 39.0876 11.4849ZM40 15.4995C33.7675 18.5227 26.8886 20.1255 19.8643 20.1255C19.4579 20.1255 19.0519 20.1201 18.6466 20.1094C17.7934 24.9245 17.7783 29.8879 18.6405 34.7774C20.3607 44.5331 25.4631 53.3708 33.0517 59.7383C35.2179 61.556 37.5471 63.1392 40.0001 64.4736C42.4532 63.1392 44.7823 61.556 46.9486 59.7383C54.5371 53.3708 59.6396 44.5331 61.3598 34.7774C62.2219 29.8879 62.2068 24.9246 61.3537 20.1094C60.9482 20.1201 60.5422 20.1255 60.1358 20.1255C53.1114 20.1255 46.2325 18.5227 40 15.4995Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreShield2 = forwardRef((props, ref) => {
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

CoreShield2.displayName = 'CoreShield2'

export default CoreShield2
