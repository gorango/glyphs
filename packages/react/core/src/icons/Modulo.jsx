
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M29.9798 56.9268L49.8788 23.0752M36.553 32.9143C34.6103 34.7504 31.4604 34.7504 29.5177 32.9143C27.5749 31.0782 27.5749 28.1013 29.5177 26.2652C31.4604 24.4291 34.6103 24.4291 36.553 26.2652C38.4958 28.1013 38.4958 31.0782 36.553 32.9143ZM50.4823 53.7354C48.5396 55.5715 45.3897 55.5715 43.447 53.7354C41.5042 51.8994 41.5042 48.9225 43.447 47.0864C45.3897 45.2503 48.5396 45.2503 50.4823 47.0864C52.4251 48.9225 52.4251 51.8994 50.4823 53.7354Z"
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
            d="M49.8788 23.0752L29.9798 56.9268"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29.5177 32.9144C27.5749 31.0783 27.5749 28.1014 29.5177 26.2653V26.2653C31.4604 24.4292 34.6103 24.4292 36.553 26.2653V26.2653C38.4958 28.1014 38.4958 31.0783 36.553 32.9144V32.9144C34.6103 34.7505 31.4604 34.7505 29.5177 32.9144V32.9144Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43.447 53.7357C41.5042 51.8996 41.5042 48.9227 43.447 47.0866V47.0866C45.3898 45.2505 48.5396 45.2505 50.4824 47.0866V47.0866C52.4251 48.9227 52.4251 51.8996 50.4824 53.7357V53.7357C48.5396 55.5718 45.3898 55.5718 43.447 53.7357V53.7357Z"
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
            d="M49.8788 23.0752L29.9798 56.9268"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M29.5177 32.9144C27.5749 31.0783 27.5749 28.1014 29.5177 26.2653V26.2653C31.4604 24.4292 34.6103 24.4292 36.553 26.2653V26.2653C38.4958 28.1014 38.4958 31.0783 36.553 32.9144V32.9144C34.6103 34.7505 31.4604 34.7505 29.5177 32.9144V32.9144Z"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43.447 53.7357C41.5042 51.8996 41.5042 48.9227 43.447 47.0866V47.0866C45.3898 45.2505 48.5396 45.2505 50.4824 47.0866V47.0866C52.4251 48.9227 52.4251 51.8996 50.4824 53.7357V53.7357C48.5396 55.5718 45.3898 55.5718 43.447 53.7357V53.7357Z"
            stroke="#F2C94C"
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
            d="M29.9798 56.9268L49.8788 23.0752M36.553 32.9143C34.6103 34.7504 31.4604 34.7504 29.5177 32.9143C27.5749 31.0782 27.5749 28.1013 29.5177 26.2652C31.4604 24.4291 34.6103 24.4291 36.553 26.2652C38.4958 28.1013 38.4958 31.0782 36.553 32.9143ZM50.4823 53.7354C48.5396 55.5715 45.3897 55.5715 43.447 53.7354C41.5042 51.8993 41.5042 48.9224 43.447 47.0863C45.3897 45.2503 48.5396 45.2503 50.4823 47.0863C52.4251 48.9224 52.4251 51.8993 50.4823 53.7354Z"
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
            d="M50.8923 21.3504C51.8446 21.9101 52.1627 23.1358 51.603 24.0881L31.704 57.9397C31.1443 58.8919 29.9185 59.2101 28.9663 58.6503C28.0141 58.0906 27.6959 56.8649 28.2557 55.9127L48.1546 22.061C48.7144 21.1088 49.9401 20.7906 50.8923 21.3504Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.0642 34.2874C25.3186 31.6926 25.3186 27.4856 28.0642 24.8908C30.8097 22.296 35.2611 22.296 38.0066 24.8908C40.7521 27.4856 40.7521 31.6926 38.0066 34.2874C35.2611 36.8822 30.8097 36.8822 28.0642 34.2874ZM30.9713 27.6383C29.8313 28.7157 29.8313 30.4625 30.9713 31.5399C32.1112 32.6173 33.9595 32.6173 35.0995 31.5399C36.2395 30.4625 36.2395 28.7157 35.0995 27.6383C33.9595 26.5609 32.1112 26.5609 30.9713 27.6383Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.9934 45.712C39.2479 48.3067 39.2479 52.5137 41.9934 55.1085C44.739 57.7033 49.1904 57.7033 51.9359 55.1085C54.6814 52.5137 54.6814 48.3067 51.9359 45.712C49.1904 43.1172 44.739 43.1172 41.9934 45.712ZM44.9006 52.361C43.7606 51.2836 43.7606 49.5368 44.9006 48.4594C46.0405 47.3821 47.8888 47.3821 49.0288 48.4594C50.1688 49.5368 50.1688 51.2836 49.0288 52.361C47.8888 53.4384 46.0405 53.4384 44.9006 52.361Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreModulo = forwardRef((props, ref) => {
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

CoreModulo.displayName = 'CoreModulo'

export default CoreModulo
