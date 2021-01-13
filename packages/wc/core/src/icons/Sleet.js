
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreSleet = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 80 80"
      transform="${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>        
        ${variant === "path" && svg`
          <path
            d="M33.3886 49.5727H23.2203L23.2129 49.5726H20.3731C17.1314 49.5726 14.0191 48.3004 11.7056 46.0295L11.6235 45.9488C9.30573 43.6737 8 40.5624 8 37.3146C8 34.0669 9.30573 30.9555 11.6235 28.6804L11.7056 28.5998C13.5867 26.7533 15.9959 25.5671 18.5734 25.1882C18.6316 24.817 18.7097 24.4475 18.8078 24.0813C19.5518 21.3034 21.3869 18.9393 23.9092 17.5099C26.4315 16.0804 29.4348 15.7025 32.2576 16.459C32.9854 16.654 33.686 16.9204 34.3501 17.2511L35.1356 15.9156C37.2774 12.2743 40.7991 9.61635 44.9174 8.53318C48.986 7.46306 53.3056 8.01715 56.9366 10.0749L57.0644 10.1474C60.6954 12.2051 63.344 15.6001 64.4342 19.5938C65.0248 21.7573 65.132 24.0011 64.7757 26.1778C66.0682 26.7693 67.261 27.5844 68.2944 28.5987L68.3765 28.6794C70.6943 30.9545 72 34.0658 72 37.3136C72 40.5613 70.6943 43.6727 68.3765 45.9478L68.2944 46.0284C65.9809 48.2993 62.8686 49.5715 59.6269 49.5715H56.8111C56.8067 49.5719 56.8024 49.5721 56.798 49.5723C56.7925 49.5725 56.7869 49.5727 56.7813 49.5727H46.6117"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40.0003 36L52 60.6345L40.0003 72L28 60.6345L40.0003 36Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.4342 19.5938C63.344 15.6001 60.6954 12.2051 57.0644 10.1474L56.9366 10.0749C53.3056 8.01715 48.986 7.46306 44.9174 8.53318C40.7991 9.61635 37.2774 12.2743 35.1356 15.9156L34.3501 17.2511C33.686 16.9204 32.9854 16.654 32.2576 16.459C29.4348 15.7025 26.4315 16.0804 23.9092 17.5099C21.3869 18.9393 19.5518 21.3034 18.8078 24.0813C18.7097 24.4475 18.6316 24.817 18.5734 25.1882C15.9959 25.5671 13.5867 26.7533 11.7056 28.5998L11.6235 28.6804C9.30573 30.9555 8 34.0669 8 37.3146C8 40.5624 9.30573 43.6737 11.6235 45.9488L11.7056 46.0295C14.0191 48.3004 17.1314 49.5726 20.3731 49.5726H23.2129L23.2203 49.5727H30.0516L37.3033 34.6862C37.8058 33.6546 38.8528 33 40.0003 33C41.1478 33 42.1948 33.6546 42.6973 34.6862L49.9487 49.5727H56.7813C56.7869 49.5727 56.7925 49.5725 56.798 49.5723C56.8024 49.5721 56.8067 49.5719 56.8111 49.5715H59.6269C62.8686 49.5715 65.9809 48.2993 68.2944 46.0284L68.3765 45.9478C70.6943 43.6727 72 40.5613 72 37.3136C72 34.0658 70.6943 30.9545 68.3765 28.6794L68.2944 28.5987C67.261 27.5844 66.0682 26.7693 64.7757 26.1778C65.132 24.0011 65.0248 21.7573 64.4342 19.5938ZM43.2747 49.5727L40.0002 42.8504L36.7256 49.5727H43.2747Z"
            fill="currentColor"
          />
          <path
            d="M40.0003 36L52 60.6345L40.0003 72L28 60.6345L40.0003 36Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.4342 19.5938C63.344 15.6001 60.6954 12.2051 57.0644 10.1474L56.9366 10.0749C53.3056 8.01715 48.986 7.46306 44.9174 8.53318C40.7991 9.61635 37.2774 12.2743 35.1356 15.9156L34.3501 17.2511C33.686 16.9204 32.9854 16.654 32.2576 16.459C29.4348 15.7025 26.4315 16.0804 23.9092 17.5099C21.3869 18.9393 19.5518 21.3034 18.8078 24.0813C18.7097 24.4475 18.6316 24.817 18.5734 25.1882C15.9959 25.5671 13.5867 26.7533 11.7056 28.5998L11.6235 28.6804C9.30573 30.9555 8 34.0669 8 37.3146C8 40.5624 9.30573 43.6737 11.6235 45.9488L11.7056 46.0295C14.0191 48.3004 17.1314 49.5726 20.3731 49.5726H23.2129L23.2203 49.5727H33.3886L40.0003 36L46.6117 49.5727H56.7813C56.7869 49.5727 56.7925 49.5725 56.798 49.5723C56.8024 49.5721 56.8067 49.5719 56.8111 49.5715H59.6269C62.8686 49.5715 65.9809 48.2993 68.2944 46.0284L68.3765 45.9478C70.6943 43.6727 72 40.5613 72 37.3136C72 34.0658 70.6943 30.9545 68.3765 28.6794L68.2944 28.5987C67.261 27.5844 66.0682 26.7693 64.7757 26.1778C65.132 24.0011 65.0248 21.7573 64.4342 19.5938Z"
            fill="#2F80ED"
          />
          <path
            d="M40.0003 36L52 60.6345L40.0003 72L28 60.6345L40.0003 36Z"
            fill="#56CCF2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M64.4342 19.5938C63.344 15.6001 60.6954 12.2051 57.0644 10.1474L56.9366 10.0749C53.3056 8.01715 48.986 7.46306 44.9174 8.53318C40.7991 9.61635 37.2774 12.2743 35.1356 15.9156L34.3501 17.2511C33.686 16.9204 32.9854 16.654 32.2576 16.459C29.4348 15.7025 26.4315 16.0804 23.9092 17.5099C21.3869 18.9393 19.5518 21.3034 18.8078 24.0813C18.7097 24.4475 18.6316 24.817 18.5734 25.1882C15.9959 25.5671 13.5867 26.7533 11.7056 28.5998L11.6235 28.6804C9.30573 30.9555 8 34.0669 8 37.3146C8 40.5624 9.30573 43.6737 11.6235 45.9488L11.7056 46.0295C14.0191 48.3004 17.1314 49.5726 20.3731 49.5726H23.2129L23.2203 49.5727H33.3886L40.0003 36L46.6117 49.5727H56.7813C56.7869 49.5727 56.7925 49.5725 56.798 49.5723C56.8024 49.5721 56.8067 49.5719 56.8111 49.5715H59.6269C62.8686 49.5715 65.9809 48.2993 68.2944 46.0284L68.3765 45.9478C70.6943 43.6727 72 40.5613 72 37.3136C72 34.0658 70.6943 30.9545 68.3765 28.6794L68.2944 28.5987C67.261 27.5844 66.0682 26.7693 64.7757 26.1778C65.132 24.0011 65.0248 21.7573 64.4342 19.5938Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40.0003 36L52 60.6345L40.0003 72L28 60.6345L40.0003 36Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40.0003 36L33.3886 49.5727H23.2203L23.2129 49.5726H20.3731C17.1314 49.5726 14.0191 48.3004 11.7056 46.0295L11.6235 45.9488C9.30573 43.6737 8 40.5624 8 37.3146C8 34.0669 9.30573 30.9555 11.6235 28.6804L11.7056 28.5998C13.5867 26.7533 15.9959 25.5671 18.5734 25.1882C18.6316 24.817 18.7097 24.4475 18.8078 24.0813C19.5518 21.3034 21.3869 18.9393 23.9092 17.5099C26.4315 16.0804 29.4348 15.7025 32.2576 16.459C32.9854 16.654 33.686 16.9204 34.3501 17.2511L35.1356 15.9156C37.2774 12.2743 40.7991 9.61635 44.9174 8.53318C48.986 7.46306 53.3056 8.01715 56.9366 10.0749L57.0644 10.1474C60.6954 12.2051 63.344 15.6001 64.4342 19.5938C65.0248 21.7573 65.132 24.0011 64.7757 26.1778C66.0682 26.7693 67.261 27.5844 68.2944 28.5987L68.3765 28.6794C70.6943 30.9545 72 34.0658 72 37.3136C72 40.5613 70.6943 43.6727 68.3765 45.9478L68.2944 46.0284C65.9809 48.2993 62.8686 49.5715 59.6269 49.5715H56.8111C56.8067 49.5719 56.8024 49.5721 56.798 49.5723C56.7925 49.5725 56.7869 49.5727 56.7813 49.5727H46.6117L40.0003 36ZM40.0003 36L52 60.6345L40.0003 72L28 60.6345L40.0003 36Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.1896 51.5726L26.202 59.7586C25.8196 60.5437 25.9907 61.4861 26.6247 62.0866L38.625 73.4521C39.3964 74.1826 40.6043 74.1826 41.3756 73.452L53.3753 62.0865C54.0093 61.486 54.1804 60.5437 53.798 59.7586L49.8106 51.5726H56.7813C56.8056 51.5726 56.83 51.5723 56.8545 51.5715H59.6269C63.3926 51.5715 67.008 50.0936 69.6954 47.4557L69.7775 47.375C72.4784 44.7239 74 41.0982 74 37.3136C74 33.529 72.4784 29.9033 69.7776 27.2521L69.6954 27.1714C68.855 26.3465 67.9237 25.635 66.9256 25.0466C67.083 23.0533 66.8997 21.0312 66.3636 19.0671C65.1318 14.5548 62.1407 10.7254 58.0505 8.40734L57.9227 8.33491C53.8338 6.01762 48.9773 5.39732 44.4086 6.59894C39.8433 7.79972 35.9247 10.7252 33.5047 14.7453C33.2644 14.6658 33.0211 14.593 32.7753 14.5271C29.4501 13.636 25.9062 14.0792 22.9231 15.7699C19.963 17.4474 17.7954 20.2178 16.8978 23.4831C14.4306 24.098 12.1491 25.362 10.3046 27.1725L10.2225 27.2531C7.52159 29.9043 6 33.53 6 37.3146C6 41.0992 7.52158 44.7249 10.2224 47.3761L10.3046 47.4567C12.992 50.0947 16.6074 51.5726 20.3731 51.5726H23.2129L23.2203 51.5726H30.1896ZM55.9505 11.8149C52.7774 10.0167 48.9947 9.52877 45.4261 10.4674C41.8139 11.4175 38.7312 13.7474 36.8595 16.9295L36.074 18.2651C35.5413 19.1707 34.3988 19.5098 33.4584 19.0414C32.9132 18.7698 32.3379 18.551 31.7399 18.3908C29.4195 17.7689 26.9567 18.0816 24.8953 19.2499C22.8352 20.4174 21.3438 22.3433 20.7397 24.5987C20.66 24.8963 20.5965 25.1966 20.5492 25.4983C20.4134 26.3634 19.7307 27.0396 18.8643 27.1669C16.7034 27.4846 14.6836 28.4791 13.1067 30.0271L13.0245 30.1077C11.0899 32.0067 10 34.6038 10 37.3146C10 40.0255 11.0899 42.6225 13.0245 44.5215L13.1067 44.6022C15.0462 46.506 17.6554 47.5726 20.3731 47.5726H23.2129L23.2203 47.5726H32.1382L38.2023 35.1241C38.5373 34.4364 39.2353 34 40.0003 34C40.7653 34 41.4633 34.4364 41.7983 35.1241L47.8621 47.5726H56.7442C56.7665 47.5719 56.7888 47.5715 56.8111 47.5715H59.6269C62.3446 47.5715 64.9538 46.5049 66.8933 44.6011L66.9755 44.5205C68.9101 42.6215 70 40.0244 70 37.3136C70 34.6027 68.9101 32.0057 66.9755 30.1067L66.8933 30.026C66.027 29.1756 65.0271 28.4923 63.9435 27.9964C63.1238 27.6213 62.6564 26.7443 62.802 25.8547C63.1125 23.9576 63.0188 22.0037 62.5048 20.1205C61.5562 16.6454 59.25 13.6848 56.0783 11.8873L55.9505 11.8149ZM44.815 50.4513L44.8136 50.4485L40.0003 40.5669L35.1866 50.4485L35.1857 50.4504L30.4406 60.1913L40.0003 69.2453L49.5595 60.1913L44.815 50.4513Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-sleet', CoreSleet)
export default CoreSleet
