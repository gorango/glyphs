
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreGamepad = {
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
            d="M56.4156 22.0251C59.5337 21.7474 62.7088 22.3042 65.5982 23.6957C70.4154 26.0155 73.914 30.4027 75.1038 35.6153C76.2935 40.8279 75.0448 46.2986 71.7113 50.4787C68.3777 54.6589 63.322 57.0936 57.9753 57.0936C52.8661 57.0936 48.0225 54.8703 44.6935 51.0251H36.7473C36.6867 51.1037 36.6255 51.1819 36.5635 51.2596C33.1444 55.547 27.9591 58.0441 22.4753 58.0441C16.9916 58.0441 11.8063 55.547 8.38723 51.2596C4.96818 46.9722 3.68751 41.3613 4.90776 36.015C6.128 30.6688 9.71636 26.1691 14.657 23.7898C17.3877 22.4748 20.3672 21.8866 23.3205 22.0251L56.4156 22.0251Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22.4753 29.5222C23.8561 29.5222 24.9753 30.6415 24.9753 32.0222V36.5222H29.4753C30.8561 36.5222 31.9753 37.6415 31.9753 39.0222C31.9753 40.4029 30.8561 41.5222 29.4753 41.5222H24.9753V46.0222C24.9753 47.4029 23.8561 48.5222 22.4753 48.5222C21.0946 48.5222 19.9753 47.4029 19.9753 46.0222V41.5222H15.4753C14.0946 41.5222 12.9753 40.4029 12.9753 39.0222C12.9753 37.6415 14.0946 36.5222 15.4753 36.5222H19.9753V32.0222C19.9753 30.6415 21.0946 29.5222 22.4753 29.5222Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M48.9752 37.0223C50.0797 35.9177 51.8706 35.9177 52.9752 37.0223C54.0797 38.1268 54.0797 39.9177 52.9752 41.0223C51.8706 42.1268 50.0797 42.1268 48.9752 41.0223C47.8706 39.9177 47.8706 38.1268 48.9752 37.0223Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M55.9752 44.0223C57.0797 42.9177 58.8706 42.9177 59.9752 44.0223C61.0797 45.1268 61.0797 46.9177 59.9752 48.0223C58.8706 49.1268 57.0797 49.1268 55.9752 48.0223C54.8706 46.9177 54.8706 45.1268 55.9752 44.0223Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M55.9752 30.0223C57.0797 28.9177 58.8706 28.9177 59.9752 30.0223C61.0797 31.1268 61.0797 32.9177 59.9752 34.0223C58.8706 35.1268 57.0797 35.1268 55.9752 34.0223C54.8706 32.9177 54.8706 31.1268 55.9752 30.0223Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M62.9752 37.0223C64.0797 35.9177 65.8706 35.9177 66.9752 37.0223C68.0797 38.1268 68.0797 39.9177 66.9752 41.0223C65.8706 42.1268 64.0797 42.1268 62.9752 41.0223C61.8706 39.9177 61.8706 38.1268 62.9752 37.0223Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.9597 22.0693C59.0779 21.7916 62.253 22.3484 65.1424 23.7399C69.9596 26.0597 73.4582 30.4468 74.6479 35.6594C75.8377 40.872 74.589 46.3427 71.2554 50.5229C67.9219 54.7031 62.8662 57.1378 57.5195 57.1378C52.4103 57.1378 47.5667 54.9145 44.2377 51.0693H36.2915C36.2309 51.1479 36.1696 51.2261 36.1077 51.3038C32.6886 55.5912 27.5033 58.0883 22.0195 58.0883C16.5358 58.0883 11.3505 55.5912 7.93142 51.3038C4.51237 47.0164 3.2317 41.4055 4.45195 36.0592C5.67219 30.713 9.26055 26.2133 14.2012 23.834C16.9319 22.519 19.9114 21.9307 22.8647 22.0693L55.9597 22.0693ZM22.0195 29.5664C23.4002 29.5664 24.5195 30.6857 24.5195 32.0664V36.5664H29.0195C30.4002 36.5664 31.5195 37.6857 31.5195 39.0664C31.5195 40.4471 30.4002 41.5664 29.0195 41.5664H24.5195V46.0664C24.5195 47.4471 23.4002 48.5664 22.0195 48.5664C20.6388 48.5664 19.5195 47.4471 19.5195 46.0664V41.5664L15.0195 41.5664C13.6388 41.5664 12.5195 40.4471 12.5195 39.0664C12.5195 37.6857 13.6388 36.5664 15.0195 36.5664L19.5195 36.5664V32.0664C19.5195 30.6857 20.6388 29.5664 22.0195 29.5664ZM55.5195 30.0664C56.6241 28.9618 58.415 28.9618 59.5195 30.0664C60.6241 31.171 60.6241 32.9618 59.5195 34.0664C58.415 35.171 56.6241 35.171 55.5195 34.0664C54.415 32.9618 54.415 31.171 55.5195 30.0664ZM52.5195 37.0664C51.415 35.9618 49.6241 35.9618 48.5195 37.0664C47.415 38.171 47.415 39.9618 48.5195 41.0664C49.6241 42.171 51.415 42.171 52.5195 41.0664C53.6241 39.9618 53.6241 38.171 52.5195 37.0664ZM59.5195 44.0664C58.415 42.9618 56.6241 42.9618 55.5195 44.0664C54.415 45.171 54.415 46.9618 55.5195 48.0664C56.6241 49.171 58.415 49.171 59.5195 48.0664C60.6241 46.9618 60.6241 45.171 59.5195 44.0664ZM66.5195 37.0664C65.415 35.9618 63.6241 35.9618 62.5195 37.0664C61.415 38.171 61.415 39.9618 62.5195 41.0664C63.6241 42.171 65.415 42.171 66.5195 41.0664C67.6241 39.9618 67.6241 38.171 66.5195 37.0664Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.9597 22.0693C59.0779 21.7916 62.253 22.3484 65.1424 23.7399C69.9596 26.0597 73.4582 30.4468 74.6479 35.6594C75.8377 40.872 74.589 46.3427 71.2554 50.5229C67.9219 54.7031 62.8662 57.1378 57.5195 57.1378C52.4103 57.1378 47.5667 54.9145 44.2377 51.0693L36.2915 51.0693C36.2309 51.1479 36.1696 51.2261 36.1077 51.3038C32.6886 55.5912 27.5033 58.0883 22.0195 58.0883C16.5358 58.0883 11.3505 55.5912 7.93142 51.3038C4.51237 47.0164 3.2317 41.4055 4.45195 36.0592C5.67219 30.713 9.26055 26.2133 14.2012 23.834C16.9319 22.519 19.9114 21.9307 22.8647 22.0693L55.9597 22.0693Z"
            fill="#9B51E0"
          />
          <path
            d="M65.1424 23.7399L64.2746 25.5418V25.5418L65.1424 23.7399ZM55.9597 22.0693V24.0693C56.019 24.0693 56.0782 24.0667 56.1372 24.0614L55.9597 22.0693ZM74.6479 35.6594L76.5978 35.2144L74.6479 35.6594ZM71.2554 50.5229L69.6918 49.2759L69.6918 49.2759L71.2554 50.5229ZM44.2377 51.0693L45.7498 49.7603C45.3699 49.3215 44.8181 49.0693 44.2377 49.0693V51.0693ZM36.2915 51.0693V49.0693C35.6713 49.0693 35.0861 49.3571 34.7075 49.8483L36.2915 51.0693ZM36.1077 51.3038L34.544 50.0568L34.544 50.0568L36.1077 51.3038ZM7.93142 51.3038L9.49509 50.0568L7.93142 51.3038ZM4.45195 36.0592L6.4018 36.5042L4.45195 36.0592ZM14.2012 23.834L15.069 25.6359L14.2012 23.834ZM22.8647 22.0693L22.771 24.0671C22.8022 24.0686 22.8335 24.0693 22.8647 24.0693V22.0693ZM66.0102 21.9379C62.7918 20.388 59.255 19.7679 55.7823 20.0772L56.1372 24.0614C58.9007 23.8153 61.7142 24.3088 64.2746 25.5418L66.0102 21.9379ZM76.5978 35.2144C75.2726 29.4084 71.3757 24.5218 66.0102 21.9379L64.2746 25.5418C68.5434 27.5975 71.6438 31.4853 72.6981 36.1045L76.5978 35.2144ZM72.8191 51.7699C76.5322 47.1139 77.923 41.0204 76.5978 35.2144L72.6981 36.1045C73.7524 40.7237 72.6459 45.5716 69.6918 49.2759L72.8191 51.7699ZM57.5195 59.1378C63.4748 59.1378 69.106 56.4259 72.8191 51.7699L69.6918 49.2759C66.7377 52.9803 62.2575 55.1378 57.5195 55.1378V59.1378ZM42.7257 52.3784C46.4337 56.6614 51.8286 59.1378 57.5195 59.1378V55.1378C52.992 55.1378 48.6997 53.1676 45.7498 49.7603L42.7257 52.3784ZM44.2377 49.0693L36.2915 49.0693V53.0693L44.2377 53.0693V49.0693ZM37.6713 52.5508C37.7402 52.4644 37.8082 52.3776 37.8755 52.2904L34.7075 49.8483C34.6536 49.9182 34.5991 49.9877 34.544 50.0568L37.6713 52.5508ZM22.0195 60.0883C28.1119 60.0883 33.8728 57.314 37.6713 52.5508L34.544 50.0568C31.5044 53.8683 26.8946 56.0883 22.0195 56.0883V60.0883ZM6.36776 52.5508C10.1663 57.314 15.9272 60.0883 22.0195 60.0883V56.0883C17.1445 56.0883 12.5347 53.8683 9.49509 50.0568L6.36776 52.5508ZM2.50209 35.6142C1.14641 41.5538 2.56922 47.7875 6.36776 52.5508L9.49509 50.0568C6.45552 46.2453 5.31699 41.2571 6.4018 36.5042L2.50209 35.6142ZM13.3335 22.0321C7.8444 24.6754 3.85777 29.6745 2.50209 35.6142L6.4018 36.5042C7.48661 31.7514 10.6767 27.7512 15.069 25.6359L13.3335 22.0321ZM22.9585 20.0715C19.6777 19.9176 16.3672 20.5711 13.3335 22.0321L15.069 25.6359C17.4966 24.4669 20.1452 23.9439 22.771 24.0671L22.9585 20.0715ZM22.8647 24.0693L55.9597 24.0693V20.0693L22.8647 20.0693V24.0693Z"
            fill="#9B51E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0195 29.5664C23.4002 29.5664 24.5195 30.6857 24.5195 32.0664V36.5664H29.0195C30.4002 36.5664 31.5195 37.6857 31.5195 39.0664C31.5195 40.4471 30.4002 41.5664 29.0195 41.5664H24.5195V46.0664C24.5195 47.4471 23.4002 48.5664 22.0195 48.5664C20.6388 48.5664 19.5195 47.4471 19.5195 46.0664L19.5195 41.5664L15.0195 41.5664C13.6388 41.5664 12.5195 40.4471 12.5195 39.0664C12.5195 37.6857 13.6388 36.5664 15.0195 36.5664L19.5195 36.5664V32.0664C19.5195 30.6857 20.6388 29.5664 22.0195 29.5664Z"
            fill="#F2F2F2"
          />
          <path
            d="M48.5195 37.0664C49.6241 35.9618 51.415 35.9618 52.5195 37.0664C53.6241 38.171 53.6241 39.9618 52.5195 41.0664C51.415 42.171 49.6241 42.171 48.5195 41.0664C47.415 39.9618 47.415 38.171 48.5195 37.0664Z"
            fill="#56CCF2"
          />
          <path
            d="M55.5195 44.0664C56.6241 42.9618 58.415 42.9618 59.5195 44.0664C60.6241 45.171 60.6241 46.9618 59.5195 48.0664C58.415 49.171 56.6241 49.171 55.5195 48.0664C54.415 46.9618 54.415 45.171 55.5195 44.0664Z"
            fill="#56CCF2"
          />
          <path
            d="M55.5195 30.0664C56.6241 28.9618 58.415 28.9618 59.5195 30.0664C60.6241 31.171 60.6241 32.9618 59.5195 34.0664C58.415 35.171 56.6241 35.171 55.5195 34.0664C54.415 32.9618 54.415 31.171 55.5195 30.0664Z"
            fill="#56CCF2"
          />
          <path
            d="M62.5195 37.0664C63.6241 35.9618 65.415 35.9618 66.5195 37.0664C67.6241 38.171 67.6241 39.9618 66.5195 41.0664C65.415 42.171 63.6241 42.171 62.5195 41.0664C61.415 39.9618 61.415 38.171 62.5195 37.0664Z"
            fill="#56CCF2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M56.4156 22.0251C59.5337 21.7474 62.7088 22.3042 65.5982 23.6957C70.4154 26.0155 73.914 30.4027 75.1038 35.6153C76.2935 40.8279 75.0448 46.2986 71.7113 50.4787C68.3777 54.6589 63.322 57.0936 57.9753 57.0936C52.8661 57.0936 48.0225 54.8703 44.6935 51.0251H36.7473C36.6867 51.1037 36.6255 51.1819 36.5635 51.2596C33.1444 55.547 27.9591 58.0441 22.4753 58.0441C16.9916 58.0441 11.8063 55.547 8.38723 51.2596C4.96818 46.9722 3.68751 41.3613 4.90776 36.015C6.128 30.6688 9.71636 26.1691 14.657 23.7898C17.3877 22.4748 20.3672 21.8866 23.3205 22.0251L56.4156 22.0251Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22.4753 29.5222C23.8561 29.5222 24.9753 30.6415 24.9753 32.0222V36.5222H29.4753C30.8561 36.5222 31.9753 37.6415 31.9753 39.0222C31.9753 40.4029 30.8561 41.5222 29.4753 41.5222H24.9753V46.0222C24.9753 47.4029 23.8561 48.5222 22.4753 48.5222C21.0946 48.5222 19.9753 47.4029 19.9753 46.0222V41.5222H15.4753C14.0946 41.5222 12.9753 40.4029 12.9753 39.0222C12.9753 37.6415 14.0946 36.5222 15.4753 36.5222H19.9753V32.0222C19.9753 30.6415 21.0946 29.5222 22.4753 29.5222Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48.9753 37.0222C50.0799 35.9176 51.8708 35.9176 52.9753 37.0222C54.0799 38.1268 54.0799 39.9176 52.9753 41.0222C51.8708 42.1268 50.0799 42.1268 48.9753 41.0222C47.8708 39.9176 47.8708 38.1268 48.9753 37.0222Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55.9753 44.0222C57.0799 42.9176 58.8708 42.9176 59.9753 44.0222C61.0799 45.1268 61.0799 46.9176 59.9753 48.0222C58.8708 49.1268 57.0799 49.1268 55.9753 48.0222C54.8708 46.9176 54.8708 45.1268 55.9753 44.0222Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M55.9753 30.0222C57.0799 28.9176 58.8708 28.9176 59.9753 30.0222C61.0799 31.1268 61.0799 32.9176 59.9753 34.0222C58.8708 35.1268 57.0799 35.1268 55.9753 34.0222C54.8708 32.9176 54.8708 31.1268 55.9753 30.0222Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M62.9753 37.0222C64.0799 35.9176 65.8708 35.9176 66.9753 37.0222C68.0799 38.1268 68.0799 39.9176 66.9753 41.0222C65.8708 42.1268 64.0799 42.1268 62.9753 41.0222C61.8708 39.9176 61.8708 38.1268 62.9753 37.0222Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M56.4156 22.0251C59.5337 21.7474 62.7088 22.3042 65.5982 23.6957C70.4154 26.0155 73.914 30.4027 75.1038 35.6153C76.2935 40.8279 75.0448 46.2986 71.7113 50.4787C68.3777 54.6589 63.322 57.0936 57.9753 57.0936C52.8661 57.0936 48.0225 54.8703 44.6935 51.0251H36.7473C36.6867 51.1037 36.6255 51.1819 36.5635 51.2596C33.1444 55.547 27.9591 58.0441 22.4753 58.0441C16.9916 58.0441 11.8063 55.547 8.38723 51.2596C4.96818 46.9722 3.68751 41.3613 4.90776 36.015C6.128 30.6688 9.71636 26.1691 14.657 23.7898C17.3877 22.4748 20.3672 21.8866 23.3205 22.0251L56.4156 22.0251Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M22.4753 29.5222C23.8561 29.5222 24.9753 30.6415 24.9753 32.0222V36.5222H29.4753C30.8561 36.5222 31.9753 37.6415 31.9753 39.0222C31.9753 40.4029 30.8561 41.5222 29.4753 41.5222H24.9753V46.0222C24.9753 47.4029 23.8561 48.5222 22.4753 48.5222C21.0946 48.5222 19.9753 47.4029 19.9753 46.0222V41.5222H15.4753C14.0946 41.5222 12.9753 40.4029 12.9753 39.0222C12.9753 37.6415 14.0946 36.5222 15.4753 36.5222H19.9753V32.0222C19.9753 30.6415 21.0946 29.5222 22.4753 29.5222Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M48.9753 37.0222C50.0799 35.9176 51.8708 35.9176 52.9753 37.0222C54.0799 38.1268 54.0799 39.9176 52.9753 41.0222C51.8708 42.1268 50.0799 42.1268 48.9753 41.0222C47.8708 39.9176 47.8708 38.1268 48.9753 37.0222Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M55.9753 44.0222C57.0799 42.9176 58.8708 42.9176 59.9753 44.0222C61.0799 45.1268 61.0799 46.9176 59.9753 48.0222C58.8708 49.1268 57.0799 49.1268 55.9753 48.0222C54.8708 46.9176 54.8708 45.1268 55.9753 44.0222Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M55.9753 30.0222C57.0799 28.9176 58.8708 28.9176 59.9753 30.0222C61.0799 31.1268 61.0799 32.9176 59.9753 34.0222C58.8708 35.1268 57.0799 35.1268 55.9753 34.0222C54.8708 32.9176 54.8708 31.1268 55.9753 30.0222Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M62.9753 37.0222C64.0799 35.9176 65.8708 35.9176 66.9753 37.0222C68.0799 38.1268 68.0799 39.9176 66.9753 41.0222C65.8708 42.1268 64.0799 42.1268 62.9753 41.0222C61.8708 39.9176 61.8708 38.1268 62.9753 37.0222Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5195 32.0664C17.5195 29.5811 19.5343 27.5664 22.0195 27.5664C24.5048 27.5664 26.5195 29.5811 26.5195 32.0664V34.5664H29.0195C31.5048 34.5664 33.5195 36.5811 33.5195 39.0664C33.5195 41.5517 31.5048 43.5664 29.0195 43.5664H26.5195V46.0664C26.5195 48.5517 24.5048 50.5664 22.0195 50.5664C19.5343 50.5664 17.5195 48.5517 17.5195 46.0664V43.5664H15.0195C12.5343 43.5664 10.5195 41.5517 10.5195 39.0664C10.5195 36.5811 12.5343 34.5664 15.0195 34.5664H17.5195V32.0664ZM22.0195 31.5664C21.7434 31.5664 21.5195 31.7903 21.5195 32.0664V36.5664C21.5195 37.671 20.6241 38.5664 19.5195 38.5664H15.0195C14.7434 38.5664 14.5195 38.7903 14.5195 39.0664C14.5195 39.3425 14.7434 39.5664 15.0195 39.5664H19.5195C20.6241 39.5664 21.5195 40.4618 21.5195 41.5664V46.0664C21.5195 46.3425 21.7434 46.5664 22.0195 46.5664C22.2957 46.5664 22.5195 46.3425 22.5195 46.0664V41.5664C22.5195 40.4618 23.415 39.5664 24.5195 39.5664H29.0195C29.2957 39.5664 29.5195 39.3425 29.5195 39.0664C29.5195 38.7903 29.2957 38.5664 29.0195 38.5664H24.5195C23.415 38.5664 22.5195 37.671 22.5195 36.5664V32.0664C22.5195 31.7903 22.2957 31.5664 22.0195 31.5664Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.9338 28.6522C59.0481 26.7666 55.991 26.7666 54.1053 28.6522C52.2197 30.5378 52.2197 33.595 54.1053 35.4806C55.991 37.3662 59.0481 37.3662 60.9338 35.4806C62.8194 33.595 62.8194 30.5378 60.9338 28.6522ZM56.9338 31.4806C57.2573 31.1571 57.7818 31.1571 58.1053 31.4806C58.4289 31.8041 58.4289 32.3287 58.1053 32.6522C57.7818 32.9757 57.2573 32.9757 56.9338 32.6522C56.6102 32.3287 56.6102 31.8041 56.9338 31.4806Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.9338 35.6522C52.0481 33.7666 48.991 33.7666 47.1053 35.6522C45.2197 37.5378 45.2197 40.595 47.1053 42.4806C48.991 44.3662 52.0481 44.3662 53.9338 42.4806C55.8194 40.595 55.8194 37.5378 53.9338 35.6522ZM49.9338 38.4806C50.2573 38.1571 50.7818 38.1571 51.1053 38.4806C51.4289 38.8041 51.4289 39.3287 51.1053 39.6522C50.7818 39.9757 50.2573 39.9757 49.9338 39.6522C49.6102 39.3287 49.6102 38.8041 49.9338 38.4806Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.9338 35.6522C66.0481 33.7666 62.991 33.7666 61.1053 35.6522C59.2197 37.5378 59.2197 40.595 61.1053 42.4806C62.991 44.3662 66.0481 44.3662 67.9338 42.4806C69.8194 40.595 69.8194 37.5378 67.9338 35.6522ZM63.9338 38.4806C64.2573 38.1571 64.7818 38.1571 65.1053 38.4806C65.4289 38.8041 65.4289 39.3287 65.1053 39.6522C64.7818 39.9757 64.2573 39.9757 63.9338 39.6522C63.6102 39.3287 63.6102 38.8041 63.9338 38.4806Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.9338 42.6522C59.0481 40.7666 55.991 40.7666 54.1053 42.6522C52.2197 44.5378 52.2197 47.595 54.1053 49.4806C55.991 51.3662 59.0481 51.3662 60.9338 49.4806C62.8194 47.595 62.8194 44.5378 60.9338 42.6522ZM56.9338 45.4806C57.2573 45.1571 57.7818 45.1571 58.1053 45.4806C58.4289 45.8041 58.4289 46.3287 58.1053 46.6522C57.7818 46.9757 57.2573 46.9757 56.9338 46.6522C56.6102 46.3287 56.6102 45.8041 56.9338 45.4806Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.8733 20.0693C59.3168 19.7788 62.8199 20.4016 66.0102 21.9379C71.3757 24.5218 75.2726 29.4084 76.5978 35.2144C77.923 41.0204 76.5322 47.1139 72.8191 51.7699C69.1061 56.4259 63.4749 59.1378 57.5196 59.1378C52.142 59.1378 47.0287 56.9266 43.3533 53.0693H37.2434C33.4477 57.5147 27.8874 60.0883 22.0196 60.0883C15.9272 60.0883 10.1663 57.314 6.36778 52.5508C2.56924 47.7875 1.14642 41.5538 2.50211 35.6142C3.85779 29.6745 7.84442 24.6754 13.3335 22.0321C16.3524 20.5782 19.6453 19.924 22.9104 20.0693L55.8733 20.0693ZM64.2746 25.5418C61.7142 24.3088 58.9007 23.8153 56.1372 24.0614C56.0782 24.0667 56.019 24.0693 55.9598 24.0693H22.8647C22.8335 24.0693 22.8022 24.0686 22.771 24.0671C20.1452 23.9439 17.4966 24.4669 15.069 25.6359C10.6767 27.7512 7.48663 31.7514 6.40182 36.5042C5.31701 41.2571 6.45554 46.2453 9.4951 50.0568C12.5347 53.8683 17.1445 56.0883 22.0196 56.0883C26.8946 56.0883 31.5044 53.8683 34.544 50.0568C34.5991 49.9877 34.6536 49.9182 34.7075 49.8483C35.0861 49.3571 35.6713 49.0693 36.2915 49.0693H44.2377C44.8181 49.0693 45.3699 49.3215 45.7498 49.7603C48.6997 53.1676 52.992 55.1378 57.5196 55.1378C62.2576 55.1378 66.7377 52.9803 69.6918 49.2759C72.6459 45.5716 73.7524 40.7237 72.6981 36.1045C71.6438 31.4853 68.5434 27.5975 64.2746 25.5418Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-gamepad', CoreGamepad)
export default CoreGamepad
