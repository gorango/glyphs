
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M34 18C34 14.6863 36.6863 12 40 12C43.3137 12 46 14.6863 46 18C46 21.3137 43.3137 24 40 24C36.6863 24 34 21.3137 34 18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.2197 22.6592L34.4235 23.0204C30.6876 23.7716 28 27.0535 28 30.8641V47.4996C28 52.2539 30.8851 56.3344 35 58.0858"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43.5747 22.8188L44.5765 23.0203C48.3124 23.7715 51 27.0534 51 30.8641V47.4995C51 52.6304 47.6398 56.9764 43 58.4572"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35 52C35 49.7909 36.7909 48 39 48C41.2091 48 43 49.7909 43 52V64C43 66.2091 41.2091 68 39 68C36.7909 68 35 66.2091 35 64V52Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M34.544 15.5H25C23.6193 15.5 22.5 16.6193 22.5 18C22.5 19.3807 23.6193 20.5 25 20.5H34.544"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.4561 20.5H55.0001C56.3808 20.5 57.5001 19.3807 57.5001 18C57.5001 16.6193 56.3808 15.5 55.0001 15.5H45.4561"
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
            d="M27.5 30.8641C27.5 27.7809 29.2593 25.044 31.9098 23.7134C33.6436 26.0129 36.3982 27.4995 39.5 27.4995C42.4226 27.4995 45.037 26.1797 46.7797 24.1036C49.0414 25.5365 50.5 28.0568 50.5 30.8641V47.4995C50.5 50.4833 49.3636 53.2018 47.5 55.2456V51.9999C47.5 47.0294 43.4706 42.9999 38.5 42.9999C33.5294 42.9999 29.5 47.0294 29.5 51.9999V53.9822C28.2381 52.1364 27.5 49.9042 27.5 47.4995V30.8641Z"
            fill="currentColor"
          />
          <path
            d="M31.9098 23.7134L34.3052 21.9073C33.4329 20.7504 31.8586 20.3822 30.5638 21.0323L31.9098 23.7134ZM46.7797 24.1036L48.3853 21.5694C47.1161 20.7653 45.4479 21.0241 44.4819 22.1748L46.7797 24.1036ZM47.5 55.2456H44.5C44.5 56.4842 45.2612 57.5954 46.4161 58.0429C47.571 58.4904 48.8823 58.1821 49.7168 57.2669L47.5 55.2456ZM29.5 53.9822L27.0235 55.6754C27.766 56.7613 29.1293 57.2369 30.3861 56.8483C31.643 56.4597 32.5 55.2977 32.5 53.9822H29.5ZM30.5638 21.0323C26.9207 22.8612 24.5 26.6227 24.5 30.8641H30.5C30.5 28.9392 31.598 27.2267 33.2557 26.3945L30.5638 21.0323ZM39.5 24.4995C37.3796 24.4995 35.4965 23.4874 34.3052 21.9073L29.5144 25.5195C31.7906 28.5385 35.4168 30.4995 39.5 30.4995V24.4995ZM44.4819 22.1748C43.2848 23.6009 41.4988 24.4995 39.5 24.4995V30.4995C43.3465 30.4995 46.7892 28.7585 49.0775 26.0323L44.4819 22.1748ZM53.5 30.8641C53.5 27.002 51.4922 23.5378 48.3853 21.5694L45.1741 26.6378C46.5907 27.5353 47.5 29.1117 47.5 30.8641H53.5ZM53.5 47.4995V30.8641H47.5V47.4995H53.5ZM49.7168 57.2669C52.0645 54.6921 53.5 51.26 53.5 47.4995H47.5C47.5 49.7067 46.6627 51.7114 45.2832 53.2242L49.7168 57.2669ZM44.5 51.9999V55.2456H50.5V51.9999H44.5ZM38.5 45.9999C41.8137 45.9999 44.5 48.6862 44.5 51.9999H50.5C50.5 45.3725 45.1274 39.9999 38.5 39.9999V45.9999ZM32.5 51.9999C32.5 48.6862 35.1863 45.9999 38.5 45.9999V39.9999C31.8726 39.9999 26.5 45.3725 26.5 51.9999H32.5ZM32.5 53.9822V51.9999H26.5V53.9822H32.5ZM24.5 47.4995C24.5 50.5273 25.4314 53.3467 27.0235 55.6754L31.9765 52.289C31.0447 50.9262 30.5 49.281 30.5 47.4995H24.5ZM24.5 30.8641V47.4995H30.5V30.8641H24.5Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.044 15.5C33.6947 16.2611 33.5 17.1078 33.5 18C33.5 18.8922 33.6947 19.7389 34.044 20.5H24.5C23.1193 20.5 22 19.3807 22 18C22 16.6193 23.1193 15.5 24.5 15.5H34.044ZM44.956 20.5C45.3053 19.7389 45.5 18.8922 45.5 18C45.5 17.1078 45.3053 16.2611 44.956 15.5H54.5C55.8807 15.5 57 16.6193 57 18C57 19.3807 55.8807 20.5 54.5 20.5H44.956Z"
            fill="currentColor"
          />
          <path
            d="M34.044 15.5L35.4073 16.1257C35.6205 15.6613 35.5825 15.1203 35.3067 14.6902C35.0308 14.2601 34.555 14 34.044 14V15.5ZM34.044 20.5V22C34.555 22 35.0308 21.7399 35.3067 21.3098C35.5825 20.8797 35.6205 20.3387 35.4073 19.8743L34.044 20.5ZM44.956 20.5L43.5927 19.8743C43.3795 20.3387 43.4175 20.8797 43.6933 21.3098C43.9692 21.7399 44.445 22 44.956 22V20.5ZM44.956 15.5V14C44.445 14 43.9692 14.2601 43.6933 14.6902C43.4175 15.1203 43.3795 15.6613 43.5927 16.1257L44.956 15.5ZM35 18C35 17.3281 35.1463 16.6944 35.4073 16.1257L32.6808 14.8743C32.2432 15.8277 32 16.8875 32 18H35ZM35.4073 19.8743C35.1463 19.3056 35 18.6719 35 18H32C32 19.1125 32.2432 20.1723 32.6808 21.1257L35.4073 19.8743ZM24.5 22H34.044V19H24.5V22ZM20.5 18C20.5 20.2091 22.2909 22 24.5 22V19C23.9477 19 23.5 18.5523 23.5 18H20.5ZM24.5 14C22.2909 14 20.5 15.7909 20.5 18H23.5C23.5 17.4477 23.9477 17 24.5 17V14ZM34.044 14H24.5V17H34.044V14ZM44 18C44 18.6719 43.8537 19.3056 43.5927 19.8743L46.3192 21.1257C46.7568 20.1723 47 19.1125 47 18H44ZM43.5927 16.1257C43.8537 16.6944 44 17.3281 44 18H47C47 16.8875 46.7568 15.8277 46.3192 14.8743L43.5927 16.1257ZM44.956 17H54.5V14H44.956V17ZM54.5 17C55.0523 17 55.5 17.4477 55.5 18H58.5C58.5 15.7909 56.7091 14 54.5 14V17ZM55.5 18C55.5 18.5523 55.0523 19 54.5 19V22C56.7091 22 58.5 20.2091 58.5 18H55.5ZM54.5 19H44.956V22H54.5V19Z"
            fill="currentColor"
          />
          <rect
            x="34.5"
            y="48"
            width="8"
            height="20"
            rx="4"
            fill="currentColor"
          />
          <rect
            x="33.5"
            y="12"
            width="12"
            height="12"
            rx="6"
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
            d="M33.9235 23.0204L35.7197 22.6592C36.7515 23.4973 38.0671 23.9995 39.5 23.9995C40.8394 23.9995 42.0763 23.5607 43.0747 22.8189L44.0765 23.0204C47.8124 23.7716 50.5 27.0534 50.5 30.8641V47.4995C50.5 52.6304 47.1398 56.9765 42.5 58.4572V52C42.5 49.7909 40.7091 48 38.5 48C36.2909 48 34.5 49.7909 34.5 52V58.0858C30.3851 56.3344 27.5 52.2539 27.5 47.4995V30.8641C27.5 27.0534 30.1876 23.7716 33.9235 23.0204Z"
            fill="#2F80ED"
          />
          <path
            d="M35.7197 22.6592L36.9807 21.1068C36.5175 20.7305 35.9105 20.5808 35.3255 20.6984L35.7197 22.6592ZM33.9235 23.0204L33.5292 21.0596L33.9235 23.0204ZM43.0747 22.8189L43.469 20.8582C42.9135 20.7465 42.3367 20.8756 41.8819 21.2135L43.0747 22.8189ZM44.0765 23.0204L44.4708 21.0596V21.0596L44.0765 23.0204ZM42.5 58.4572H40.5C40.5 59.0956 40.8047 59.6956 41.3202 60.0722C41.8357 60.4488 42.4999 60.5566 43.1081 60.3626L42.5 58.4572ZM34.5 58.0858L33.7168 59.926C34.3345 60.189 35.043 60.1244 35.6031 59.7541C36.1631 59.3838 36.5 58.7572 36.5 58.0858H34.5ZM35.3255 20.6984L33.5292 21.0596L34.3178 24.9811L36.114 24.6199L35.3255 20.6984ZM39.5 21.9995C38.5429 21.9995 37.6691 21.6659 36.9807 21.1068L34.4588 24.2116C35.834 25.3286 37.5914 25.9995 39.5 25.9995V21.9995ZM41.8819 21.2135C41.2166 21.7078 40.3953 21.9995 39.5 21.9995V25.9995C41.2835 25.9995 42.9359 25.4136 44.2674 24.4243L41.8819 21.2135ZM44.4708 21.0596L43.469 20.8582L42.6804 24.7797L43.6822 24.9811L44.4708 21.0596ZM52.5 30.8641C52.5 26.1009 49.1406 21.9986 44.4708 21.0596L43.6822 24.9811C46.4842 25.5446 48.5 28.006 48.5 30.8641H52.5ZM52.5 47.4995V30.8641H48.5V47.4995H52.5ZM43.1081 60.3626C48.5529 58.6249 52.5 53.5258 52.5 47.4995H48.5C48.5 51.7351 45.7268 55.3281 41.8919 56.5519L43.1081 60.3626ZM40.5 52V58.4572H44.5V52H40.5ZM38.5 50C39.6046 50 40.5 50.8954 40.5 52H44.5C44.5 48.6863 41.8137 46 38.5 46V50ZM36.5 52C36.5 50.8954 37.3954 50 38.5 50V46C35.1863 46 32.5 48.6863 32.5 52H36.5ZM36.5 58.0858V52H32.5V58.0858H36.5ZM25.5 47.4995C25.5 53.0839 28.8902 57.8717 33.7168 59.926L35.2832 56.2455C31.88 54.797 29.5 51.4239 29.5 47.4995H25.5ZM25.5 30.8641V47.4995H29.5V30.8641H25.5ZM33.5292 21.0596C28.8594 21.9986 25.5 26.1009 25.5 30.8641H29.5C29.5 28.006 31.5158 25.5446 34.3178 24.9811L33.5292 21.0596Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.8414 16C33.6203 16.6256 33.5 17.2987 33.5 18C33.5 18.7013 33.6203 19.3744 33.8414 20H24.5C23.3954 20 22.5 19.1046 22.5 18C22.5 16.8954 23.3954 16 24.5 16H33.8414ZM45.1586 20C45.3797 19.3744 45.5 18.7013 45.5 18C45.5 17.2987 45.3797 16.6256 45.1586 16H54.5C55.6046 16 56.5 16.8954 56.5 18C56.5 19.1046 55.6046 20 54.5 20H45.1586Z"
            fill="#828282"
          />
          <rect
            x="34.5"
            y="48"
            width="8"
            height="20"
            rx="4"
            fill="#828282"
          />
          <rect
            x="33.5"
            y="12"
            width="12"
            height="12"
            rx="6"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M34.4235 23.0204L36.2197 22.6592C37.2515 23.4973 38.5671 23.9996 40 23.9996C41.3394 23.9996 42.5763 23.5607 43.5747 22.8189L44.5765 23.0204C48.3124 23.7716 51 27.0535 51 30.8641V47.4996C51 52.6304 47.6398 56.9765 43 58.4573V52C43 49.7909 41.2091 48 39 48C36.7909 48 35 49.7909 35 52V58.0858C30.8851 56.3344 28 52.2539 28 47.4996V30.8641C28 27.0535 30.6876 23.7716 34.4235 23.0204Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34.544 15.5C34.1947 16.2611 34 17.1078 34 18C34 18.8922 34.1947 19.7389 34.544 20.5H25C23.6193 20.5 22.5 19.3807 22.5 18C22.5 16.6193 23.6193 15.5 25 15.5H34.544Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M45.456 20.5C45.8053 19.7389 46 18.8922 46 18C46 17.1078 45.8053 16.2611 45.456 15.5H55C56.3807 15.5 57.5 16.6193 57.5 18C57.5 19.3807 56.3807 20.5 55 20.5H45.456Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35 52C35 49.7909 36.7909 48 39 48C41.2091 48 43 49.7909 43 52V64C43 66.2091 41.2091 68 39 68C36.7909 68 35 66.2091 35 64V52Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 18C34 14.6863 36.6863 12 40 12C43.3137 12 46 14.6863 46 18C46 21.3137 43.3137 23.9996 40 23.9996C36.6863 23.9996 34 21.3137 34 18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 23.9996C38.5671 23.9996 37.2515 23.4973 36.2197 22.6592L34.4235 23.0204C30.6876 23.7716 28 27.0535 28 30.8641V47.4996C28 52.2539 30.8851 56.3344 35 58.0858V52M40 23.9996C41.3394 23.9996 42.5763 23.5607 43.5747 22.8189L44.5765 23.0204C48.3124 23.7716 51 27.0535 51 30.8641V47.4996C51 52.6304 47.6398 56.9765 43 58.4573V52M40 23.9996C36.6863 23.9996 34 21.3137 34 18M40 23.9996C43.3137 23.9996 46 21.3137 46 18M43 52C43 49.7909 41.2091 48 39 48C36.7909 48 35 49.7909 35 52M43 52V64C43 66.2091 41.2091 68 39 68C36.7909 68 35 66.2091 35 64V52M34 18C34 17.1078 34.1947 16.2611 34.544 15.5H25C23.6193 15.5 22.5 16.6193 22.5 18C22.5 19.3807 23.6193 20.5 25 20.5H34.544C34.1947 19.7389 34 18.8922 34 18ZM34 18C34 14.6863 36.6863 12 40 12C43.3137 12 46 14.6863 46 18M46 18C46 18.8922 45.8053 19.7389 45.456 20.5H55C56.3807 20.5 57.5 19.3807 57.5 18C57.5 16.6193 56.3807 15.5 55 15.5H45.456C45.8053 16.2611 46 17.1078 46 18Z"
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
            d="M32.8847 13.5H24.5C22.0147 13.5 20 15.5147 20 18C20 20.4853 22.0147 22.5 24.5 22.5H30.0165C27.2658 24.3049 25.5 27.4108 25.5 30.8641V47.4996C25.5 52.6017 28.3301 57.0391 32.5 59.3341V64C32.5 67.3137 35.1863 70 38.5 70C41.8137 70 44.5 67.3137 44.5 64V59.8315C49.2128 57.7263 52.5 52.999 52.5 47.4996V30.8641C52.5 27.4108 50.7342 24.3049 47.9835 22.5H54.5C56.9853 22.5 59 20.4853 59 18C59 15.5147 56.9853 13.5 54.5 13.5H46.1153C44.6753 11.3872 42.2497 10 39.5 10C36.7503 10 34.3247 11.3872 32.8847 13.5ZM31.5154 17.5C31.5052 17.6654 31.5 17.8321 31.5 18C31.5 18.1679 31.5052 18.3346 31.5154 18.5H24.5C24.2239 18.5 24 18.2761 24 18C24 17.7239 24.2239 17.5 24.5 17.5H31.5154ZM36.9593 21.0896C36.0682 20.356 35.5 19.2444 35.5 18C35.5 15.7909 37.2909 14 39.5 14C41.7091 14 43.5 15.7909 43.5 18C43.5 19.3077 42.8724 20.4689 41.9021 21.1987C41.8953 21.2036 41.8886 21.2085 41.8819 21.2135C41.4566 21.5295 40.9675 21.7627 40.4362 21.8898C40.1363 21.9616 39.823 21.9996 39.5 21.9996C38.77 21.9996 38.0885 21.8055 37.5008 21.4653C37.3179 21.3595 37.1441 21.2395 36.9807 21.1068C36.9736 21.101 36.9665 21.0953 36.9593 21.0896ZM47.4846 18.5C47.4948 18.3346 47.5 18.1679 47.5 18C47.5 17.8321 47.4948 17.6654 47.4846 17.5H54.5C54.7761 17.5 55 17.7239 55 18C55 18.2761 54.7761 18.5 54.5 18.5H47.4846ZM35.2678 24.7901C36.4954 25.5569 37.9459 26 39.5 26C40.9493 26 42.3086 25.6146 43.481 24.9407L43.6822 24.9811C46.4842 25.5446 48.5 28.006 48.5 30.8641V47.4996C48.5 50.6948 46.9217 53.5244 44.5 55.2471V52C44.5 48.6863 41.8137 46 38.5 46C35.3934 46 32.8382 48.361 32.531 51.3866C32.5105 51.5883 32.5 51.7929 32.5 52V54.4283C30.6524 52.6941 29.5 50.2303 29.5 47.4996V30.8641C29.5 28.006 31.5158 25.5446 34.3178 24.9811L35.2678 24.7901ZM40.5 52V64C40.5 65.1046 39.6046 66 38.5 66C37.3954 66 36.5 65.1046 36.5 64V52C36.5 50.8955 37.3954 50 38.5 50C39.6003 50 40.493 50.8885 40.5 51.9871L40.5 52Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreScooter = forwardRef((props, ref) => {
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

CoreScooter.displayName = 'CoreScooter'

export default CoreScooter
