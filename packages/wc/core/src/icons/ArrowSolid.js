
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreArrowSolid = {
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
            d="M52 40.0002H58.2763C61.9294 40.0002 63.759 35.5834 61.1758 33.0002L43.8881 15.7125C41.8378 13.6622 38.5137 13.6622 36.4635 15.7125L19.1758 33.0002C16.5926 35.5834 18.4221 40.0002 22.0753 40.0002H28L28 64.0002C28 65.1048 28.8954 66.0002 30 66.0002L50 66.0002C51.1046 66.0002 52 65.1048 52 64.0002V40.0002Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.9999 40.0004H23.7543C20.5071 40.0004 18.8808 36.0743 21.177 33.7782L36.1314 18.8238C38.1816 16.7736 41.5057 16.7736 43.556 18.8238L58.5103 33.7782C60.8065 36.0743 59.1803 40.0004 55.933 40.0004H51.9999L51.9999 52.4449L51.9999 62.4449C51.9999 63.5494 51.1045 64.4449 49.9999 64.4449L29.9999 64.4449C28.8953 64.4449 27.9999 63.5494 27.9999 62.4449V52.4449V40.0004Z"
            fill="currentColor"
          />
          <path
            d="M27.9999 40.0004V38.5004C28.8283 38.5004 29.4999 39.172 29.4999 40.0004H27.9999ZM21.177 33.7782L22.2377 34.8388L21.177 33.7782ZM36.1314 18.8238L37.192 19.8845L36.1314 18.8238ZM43.556 18.8238L44.6166 17.7632V17.7632L43.556 18.8238ZM58.5103 33.7782L59.571 32.7175L59.571 32.7175L58.5103 33.7782ZM51.9999 40.0004H50.4999C50.4999 39.172 51.1715 38.5004 51.9999 38.5004V40.0004ZM51.9999 52.4449H53.4999H51.9999ZM51.9999 62.4449H53.4999H51.9999ZM49.9999 64.4449V65.9449H49.9999L49.9999 64.4449ZM29.9999 64.4449V62.9449V64.4449ZM23.7543 38.5004H27.9999V41.5004H23.7543V38.5004ZM22.2377 34.8388C20.8864 36.1901 21.8434 38.5004 23.7543 38.5004V41.5004C19.1707 41.5004 16.8752 35.9586 20.1163 32.7175L22.2377 34.8388ZM37.192 19.8845L22.2377 34.8388L20.1163 32.7175L35.0707 17.7632L37.192 19.8845ZM42.4953 19.8845C41.0308 18.42 38.6565 18.42 37.192 19.8845L35.0707 17.7632C37.7067 15.1271 41.9806 15.1271 44.6166 17.7632L42.4953 19.8845ZM57.4497 34.8388L42.4953 19.8845L44.6166 17.7632L59.571 32.7175L57.4497 34.8388ZM55.933 38.5004C57.8439 38.5004 58.8009 36.19 57.4497 34.8388L59.571 32.7175C62.8121 35.9586 60.5166 41.5004 55.933 41.5004V38.5004ZM51.9999 38.5004H55.933V41.5004H51.9999V38.5004ZM50.4999 52.4449L50.4999 40.0004H53.4999L53.4999 52.4449H50.4999ZM50.4999 62.4449V52.4449H53.4999L53.4999 62.4449H50.4999ZM49.9999 62.9449C50.2761 62.9449 50.4999 62.721 50.4999 62.4449L53.4999 62.4449C53.4999 64.3778 51.9329 65.9449 49.9999 65.9449V62.9449ZM29.9999 62.9449L49.9999 62.9449L49.9999 65.9449L29.9999 65.9449V62.9449ZM29.4999 62.4449C29.4999 62.721 29.7238 62.9449 29.9999 62.9449V65.9449C28.0669 65.9449 26.4999 64.3778 26.4999 62.4449H29.4999ZM29.4999 52.4449V62.4449H26.4999V52.4449H29.4999ZM29.4999 40.0004V52.4449H26.4999V40.0004H29.4999Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52 54L52 38C52 36.8954 51.1046 36 50 36L30 36C28.8954 36 28 36.8954 28 38V54L28 64C28 65.1046 28.8954 66 30 66H50C51.1046 66 52 65.1046 52 64L52 54Z"
            fill="#56CCF2"
          />
          <path
            d="M21.7237 40L57.9247 40C61.5779 40 63.4074 35.5832 60.8242 33L43.5365 15.7123C41.4863 13.6621 38.1622 13.6621 36.1119 15.7123L18.8242 33C16.241 35.5832 18.0706 40 21.7237 40Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M52 40.0002H58.2763C61.9294 40.0002 63.759 35.5834 61.1758 33.0002L43.8881 15.7125C41.8378 13.6622 38.5137 13.6622 36.4635 15.7125L19.1758 33.0002C16.5926 35.5834 18.4221 40.0002 22.0753 40.0002H28L28 64.0002C28 65.1048 28.8954 66.0002 30 66.0002L50 66.0002C51.1046 66.0002 52 65.1048 52 64.0002V40.0002Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.48 14.5302C42.4534 11.5036 37.5464 11.5036 34.5198 14.5302L17.2321 31.8179C13.074 35.976 16.019 43.0856 21.8994 43.0856H25.6757V64.5856C25.6757 67.0709 27.6904 69.0856 30.1757 69.0856L50.1757 69.0856C52.6609 69.0856 54.6757 67.0709 54.6757 64.5856V43.0856H58.1004C63.9808 43.0856 66.9257 35.976 62.7677 31.8179L45.48 14.5302ZM38.0553 18.0657C39.1293 16.9918 40.8705 16.9918 41.9444 18.0657L59.2321 35.3534C60.2404 36.3617 59.5263 38.0856 58.1004 38.0856H52.1757C50.795 38.0856 49.6757 39.2049 49.6757 40.5856V64.0856L30.6757 64.0856V40.5856C30.6757 39.2049 29.5564 38.0856 28.1757 38.0856H21.8994C20.4735 38.0856 19.7594 36.3617 20.7677 35.3534L38.0553 18.0657Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-arrow-solid', CoreArrowSolid)
export default CoreArrowSolid
