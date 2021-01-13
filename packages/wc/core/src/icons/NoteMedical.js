
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreNoteMedical = {
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
            d="M22 13H30C30 15.2091 31.7909 17 34 17H46C48.2091 17 50 15.2091 50 13H58C60.2091 13 62 14.7909 62 17V65C62 67.2091 60.2091 69 58 69H22C19.7909 69 18 67.2091 18 65V17C18 14.7909 19.7909 13 22 13Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30 13C30 10.7909 31.7909 9 34 9H46C48.2091 9 50 10.7909 50 13C50 15.2091 48.2091 17 46 17H34C31.7909 17 30 15.2091 30 13Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M37 8C37 7.44772 37.4477 7 38 7H42C42.5523 7 43 7.44772 43 8C43 8.55228 42.5523 9 42 9H38C37.4477 9 37 8.55228 37 8Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M35.9999 52.3078C35.9999 53.4123 36.8954 54.3078 37.9999 54.3078H41.9999C43.1045 54.3078 43.9999 53.4123 43.9999 52.3078L43.9999 46.0385C43.9999 46.0174 44.0171 46.0002 44.0383 46.0002H50.3075C51.4121 46.0002 52.3075 45.1048 52.3075 44.0002V40.0002C52.3075 38.8956 51.4121 38.0002 50.3075 38.0002H44.0385C44.0172 38.0002 43.9999 37.9829 43.9999 37.9616L44 31.6924C44 30.5878 43.1045 29.6924 42 29.6924L38 29.6924C36.8954 29.6924 36 30.5878 36 31.6924L35.9999 37.9616C35.9999 37.9829 35.9827 38.0002 35.9614 38.0002H29.6921C28.5876 38.0002 27.6921 38.8956 27.6921 40.0002L27.6921 44.0002C27.6921 45.1048 28.5876 46.0002 29.6921 46.0002L35.9616 46.0002C35.9828 46.0002 35.9999 46.0174 35.9999 46.0385V52.3078Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 13H22C19.7909 13 18 14.7909 18 17V65C18 67.2091 19.7909 69 22 69H58C60.2091 69 62 67.2091 62 65V17C62 14.7909 60.2091 13 58 13H50C50 15.2091 48.2091 17 46 17H34C31.7909 17 30 15.2091 30 13ZM36 52.3077V46.0384C36 46.0173 35.9828 46.0001 35.9616 46.0001H29.6922C28.5876 46.0001 27.6922 45.1047 27.6922 44.0001V40.0001C27.6922 38.8955 28.5876 38.0001 29.6922 38.0001H35.9614C35.9827 38.0001 36 37.9828 36 37.9615L36 31.6923C36 30.5877 36.8954 29.6923 38 29.6923L42 29.6923C43.1046 29.6923 44 30.5877 44 31.6923L44 37.9615C44 37.9828 44.0173 38.0001 44.0386 38.0001H50.3076C51.4121 38.0001 52.3076 38.8955 52.3076 40.0001V44.0001C52.3076 45.1047 51.4121 46.0001 50.3076 46.0001L44.0383 46.0001C44.0171 46.0001 44 46.0173 44 46.0384V52.3077C44 53.4122 43.1045 54.3077 42 54.3077H38C36.8954 54.3077 36 53.4122 36 52.3077Z"
            fill="currentColor"
          />
          <path
            d="M30 13C30 10.7909 31.7909 9 34 9H46C48.2091 9 50 10.7909 50 13C50 15.2091 48.2091 17 46 17H34C31.7909 17 30 15.2091 30 13Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
          />
          <path
            d="M37 8C37 7.44772 37.4477 7 38 7H42C42.5523 7 43 7.44772 43 8C43 8.55228 42.5523 9 42 9H38C37.4477 9 37 8.55228 37 8Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 13L30 13C30 15.2091 31.7909 17 34 17H46C48.2091 17 50 15.2091 50 13L58 13C60.2091 13 62 14.7909 62 17L62 65C62 67.2091 60.2091 69 58 69H22C19.7909 69 18 67.2091 18 65L18 17C18 14.7909 19.7909 13 22 13Z"
            fill="#F2F2F2"
          />
          <path
            d="M30 13H31.5V11.5H30V13ZM50 13V11.5H48.5V13H50ZM30 11.5L22 11.5V14.5L30 14.5V11.5ZM34 15.5C32.6193 15.5 31.5 14.3807 31.5 13H28.5C28.5 16.0376 30.9624 18.5 34 18.5V15.5ZM46 15.5H34V18.5H46V15.5ZM48.5 13C48.5 14.3807 47.3807 15.5 46 15.5V18.5C49.0376 18.5 51.5 16.0376 51.5 13H48.5ZM58 11.5L50 11.5V14.5L58 14.5V11.5ZM63.5 17C63.5 13.9624 61.0376 11.5 58 11.5V14.5C59.3807 14.5 60.5 15.6193 60.5 17H63.5ZM63.5 65L63.5 17H60.5L60.5 65H63.5ZM58 70.5C61.0376 70.5 63.5 68.0376 63.5 65H60.5C60.5 66.3807 59.3807 67.5 58 67.5V70.5ZM22 70.5H58V67.5H22L22 70.5ZM16.5 65C16.5 68.0376 18.9624 70.5 22 70.5L22 67.5C20.6193 67.5 19.5 66.3807 19.5 65H16.5ZM16.5 17L16.5 65H19.5L19.5 17H16.5ZM22 11.5C18.9624 11.5 16.5 13.9624 16.5 17H19.5C19.5 15.6193 20.6193 14.5 22 14.5V11.5Z"
            fill="#E0E0E0"
          />
          <rect
            x="30"
            y="9"
            width="20"
            height="8"
            rx="4"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
          />
          <rect
            x="37"
            y="7"
            width="6"
            height="2"
            rx="1"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.9999 50.3078V52.3078C35.9999 53.4123 36.8954 54.3078 37.9999 54.3078H41.9999C43.1045 54.3078 43.9999 53.4123 43.9999 52.3078V50.3078V48.0001V47.7693V47.5385V47.3078V47.077V46.8462V46.6155V46.3847V46.1539V46.0385C43.9999 46.0174 44.0171 46.0002 44.0383 46.0002H44.1537H44.3844H44.6152H44.846H45.0768H48.3075H50.3075C51.4121 46.0002 52.3075 45.1048 52.3075 44.0002V40.0002C52.3075 38.8956 51.4121 38.0002 50.3075 38.0002H48.3075H45.0768H44.846H44.6152H44.3844H44.1537H44.0385C44.0172 38.0002 43.9999 37.9829 43.9999 37.9616V37.8462V37.7308V37.6155V37.5001V37.3847V37.2693V37.1539V37.0385V36.9232V36.6924V36.4616V36.2308V36.0001V35.7693V35.5385V35.5385L43.9999 35.3078V35.3077V35.077L43.9999 33.6924L44 31.6924C44 30.5878 43.1045 29.6924 42 29.6924L38 29.6924C36.8954 29.6924 36 30.5878 36 31.6924L35.9999 33.6924L35.9999 35.077V35.3078V35.3078L35.9999 35.5385V35.5386V35.7693V36.0001V36.2308V36.4616V36.6924V36.9232V37.0385V37.1539V37.2693V37.3847V37.5001V37.6155V37.7308V37.8462V37.9616C35.9999 37.9829 35.9827 38.0002 35.9614 38.0002H35.846H31.6921H29.6921C28.5876 38.0002 27.6921 38.8956 27.6921 40.0002L27.6921 44.0002C27.6921 45.1048 28.5876 46.0002 29.6921 46.0002H31.6921L35.846 46.0002H35.9616C35.9828 46.0002 35.9999 46.0174 35.9999 46.0385V46.1539V46.3847V46.6155V46.8462V47.077V47.3078V47.5385V47.7693V48.0001V50.3078Z"
            fill="#EB5757"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M22 13.5H30C30 15.7091 31.7909 17.5 34 17.5H46C48.2091 17.5 50 15.7091 50 13.5H58C60.2091 13.5 62 15.2909 62 17.5V65.5C62 67.7091 60.2091 69.5 58 69.5H22C19.7909 69.5 18 67.7091 18 65.5V17.5C18 15.2909 19.7909 13.5 22 13.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 13.5C30 11.2909 31.7909 9.5 34 9.5H46C48.2091 9.5 50 11.2909 50 13.5C50 15.7091 48.2091 17.5 46 17.5H34C31.7909 17.5 30 15.7091 30 13.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37 8.5C37 7.94772 37.4477 7.5 38 7.5H42C42.5523 7.5 43 7.94772 43 8.5C43 9.05228 42.5523 9.5 42 9.5H38C37.4477 9.5 37 9.05228 37 8.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 52.8077C36 53.9122 36.8954 54.8077 38 54.8077H42C43.1045 54.8077 44 53.9122 44 52.8077V46.5384C44 46.5173 44.0171 46.5001 44.0383 46.5001H50.3076C51.4121 46.5001 52.3076 45.6047 52.3076 44.5001V40.5001C52.3076 39.3955 51.4121 38.5001 50.3076 38.5001H44.0386C44.0173 38.5001 44 38.4828 44 38.4615L44 32.1923C44 31.0877 43.1046 30.1923 42 30.1923L38 30.1923C36.8954 30.1923 36 31.0877 36 32.1923L36 38.4615C36 38.4828 35.9827 38.5001 35.9614 38.5001H29.6922C28.5876 38.5001 27.6922 39.3955 27.6922 40.5001V44.5001C27.6922 45.6047 28.5876 46.5001 29.6922 46.5001L35.9616 46.5001C35.9828 46.5001 36 46.5173 36 46.5384V52.8077Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 13.5H22C19.7909 13.5 18 15.2909 18 17.5V65.5C18 67.7091 19.7909 69.5 22 69.5H58C60.2091 69.5 62 67.7091 62 65.5V17.5C62 15.2909 60.2091 13.5 58 13.5H50M30 13.5C30 15.7091 31.7909 17.5 34 17.5H46C48.2091 17.5 50 15.7091 50 13.5M30 13.5C30 11.2909 31.7909 9.5 34 9.5H46C48.2091 9.5 50 11.2909 50 13.5M38 9.5H42C42.5523 9.5 43 9.05228 43 8.5C43 7.94772 42.5523 7.5 42 7.5H38C37.4477 7.5 37 7.94772 37 8.5C37 9.05228 37.4477 9.5 38 9.5ZM44 46.5384C44 46.5172 44.0171 46.5001 44.0383 46.5001H50.3076C51.4121 46.5001 52.3076 45.6047 52.3076 44.5001V40.5001C52.3076 39.3955 51.4121 38.5001 50.3076 38.5001H44.0386C44.0173 38.5001 44 38.4828 44 38.4615L44 32.1923C44 31.0877 43.1046 30.1923 42 30.1923L38 30.1923C36.8954 30.1923 36 31.0877 36 32.1923L36 38.4615C36 38.4828 35.9827 38.5001 35.9614 38.5001H29.6922C28.5876 38.5001 27.6922 39.3955 27.6922 40.5001V44.5001C27.6922 45.6047 28.5876 46.5001 29.6922 46.5001L35.9616 46.5001C35.9828 46.5001 36 46.5172 36 46.5384V52.8077C36 53.9122 36.8954 54.8077 38 54.8077H42C43.1045 54.8077 44 53.9122 44 52.8077V46.5384Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38 27.6923C35.7908 27.6923 34 29.4831 34 31.6923L34 36L29.6922 36.0001C27.483 36.0001 25.6922 37.7909 25.6922 40.0001V44.0001C25.6922 46.2092 27.483 48.0001 29.6922 48.0001H34V52.3077C34 54.5168 35.7908 56.3077 38 56.3077H42C44.2091 56.3077 46 54.5168 46 52.3077V48.0001H50.3076C52.5167 48.0001 54.3076 46.2092 54.3076 44.0001V40.0001C54.3076 37.7909 52.5167 36.0001 50.3076 36.0001H46L46 31.6923C46 29.4831 44.2091 27.6923 42 27.6923L38 27.6923ZM38 31.6923L42 31.6923L42 37.9615C42 39.0874 42.9127 40.0001 44.0386 40.0001H50.3076V44.0001L44.0383 44.0001C42.9126 44.0001 42 44.9127 42 46.0384V52.3077H38V46.0384C38 44.9127 37.0874 44.0001 35.9616 44.0001H29.6922V40.0001H35.9614C37.0873 40.0001 38 39.0874 38 37.9615L38 31.6923Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46 7H44.8293C44.4175 5.83481 43.3062 5 42 5H38C36.6938 5 35.5825 5.83481 35.1707 7H34C31.3876 7 29.1651 8.66962 28.3414 11H22C18.6863 11 16 13.6863 16 17V65C16 68.3137 18.6863 71 22 71H58C61.3137 71 64 68.3137 64 65V17C64 13.6863 61.3137 11 58 11H51.6586C50.8349 8.66962 48.6124 7 46 7ZM34 11H46C47.1046 11 48 11.8954 48 13C48 14.1046 47.1046 15 46 15H34C32.8954 15 32 14.1046 32 13C32 11.8954 32.8954 11 34 11ZM28.3414 15H22C20.8954 15 20 15.8954 20 17V65C20 66.1046 20.8954 67 22 67H58C59.1046 67 60 66.1046 60 65V17C60 15.8954 59.1046 15 58 15H51.6586C50.8349 17.3304 48.6124 19 46 19H34C31.5147 19 29.3824 17.489 28.4715 15.3355C28.4249 15.2253 28.3815 15.1134 28.3414 15Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-note-medical', CoreNoteMedical)
export default CoreNoteMedical
