
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreWifi2 = {
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
            d="M44.0039 60C44.0039 62.2091 42.213 64 40.0039 64C37.7948 64 36.0039 62.2091 36.0039 60C36.0039 57.7909 37.7948 56 40.0039 56C42.213 56 44.0039 57.7909 44.0039 60Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26.8745 51.7215C27.7942 50.2849 28.9458 49.0052 30.286 47.9364C32.1182 46.4753 34.256 45.4458 36.5407 44.9243C38.8254 44.4028 41.1982 44.4028 43.4828 44.9243C45.7675 45.4458 47.9053 46.4753 49.7375 47.9364C51.077 49.0046 52.2279 50.2834 53.1474 51.719"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M18.2698 41.6253C19.6331 39.8296 21.2179 38.2041 22.9917 36.7895C26.198 34.2326 29.9392 32.431 33.9373 31.5184C37.9355 30.6058 42.0879 30.6058 46.0861 31.5184C50.0842 32.431 53.8254 34.2326 57.0317 36.7895C58.8047 38.2035 60.3889 39.8282 61.7519 41.6231"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <circle
            cx="40.0039"
            cy="60"
            r="4"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30.2861 47.9364L32.1565 50.2819L32.1565 50.2819L30.2861 47.9364ZM36.5407 44.9243L37.2083 47.8491L36.5407 44.9243ZM24.348 50.104C23.4546 51.4994 23.8616 53.3548 25.257 54.2481C26.6524 55.1414 28.5078 54.7344 29.4011 53.3391L24.348 50.104ZM49.7375 47.9364L47.867 50.2819L47.867 50.2819L49.7375 47.9364ZM50.6211 53.337C51.5147 54.7322 53.3702 55.1388 54.7654 54.2452C56.1606 53.3516 56.5672 51.4961 55.6736 50.1009L50.6211 53.337ZM43.4829 44.9243L42.8153 47.8491L43.4829 44.9243ZM22.9917 36.7895L21.1212 34.4441V34.4441L22.9917 36.7895ZM33.9373 31.5184L33.2698 28.5936L33.9373 31.5184ZM15.8804 39.8113C14.8785 41.1309 15.1361 43.0129 16.4557 44.0147C17.7754 45.0166 19.6573 44.759 20.6592 43.4394L15.8804 39.8113ZM57.0317 36.7895L58.9022 34.4441V34.4441L57.0317 36.7895ZM59.3627 43.4374C60.3647 44.7569 62.2467 45.0143 63.5662 44.0123C64.8857 43.0103 65.1431 41.1283 64.1411 39.8088L59.3627 43.4374ZM46.0861 31.5184L46.7536 28.5936L46.0861 31.5184ZM32.1565 50.2819C33.6363 49.1018 35.363 48.2703 37.2083 47.8491L35.8731 41.9995C33.1491 42.6213 30.6001 43.8488 28.4156 45.5909L32.1565 50.2819ZM29.4011 53.3391C30.144 52.1787 31.074 51.1451 32.1565 50.2819L28.4156 45.5909C26.8175 46.8653 25.4446 48.3911 24.348 50.104L29.4011 53.3391ZM47.867 50.2819C48.9489 51.1446 49.8785 52.1775 50.6211 53.337L55.6736 50.1009C54.5774 48.3893 53.2051 46.8645 51.608 45.5909L47.867 50.2819ZM42.8153 47.8491C44.6606 48.2703 46.3872 49.1018 47.867 50.2819L51.608 45.5909C49.4234 43.8488 46.8745 42.6213 44.1504 41.9995L42.8153 47.8491ZM44.1504 41.9995C41.4264 41.3778 38.5972 41.3778 35.8731 41.9995L37.2083 47.8491C39.0536 47.4279 40.97 47.4279 42.8153 47.8491L44.1504 41.9995ZM24.8622 39.135C27.7161 36.8591 31.0461 35.2555 34.6049 34.4432L33.2698 28.5936C28.8322 29.6065 24.6799 31.6061 21.1212 34.4441L24.8622 39.135ZM20.6592 43.4394C21.8727 41.841 23.2833 40.3941 24.8622 39.135L21.1212 34.4441C19.1525 36.014 17.3935 37.8182 15.8804 39.8113L20.6592 43.4394ZM55.1612 39.135C56.7394 40.3936 58.1495 41.8398 59.3627 43.4374L64.1411 39.8088C62.6284 37.8167 60.87 36.0134 58.9022 34.4441L55.1612 39.135ZM45.4185 34.4432C48.9773 35.2555 52.3073 36.8591 55.1612 39.135L58.9022 34.4441C55.3435 31.6061 51.1912 29.6065 46.7536 28.5936L45.4185 34.4432ZM46.7536 28.5936C42.3161 27.5808 37.7073 27.5808 33.2698 28.5936L34.6049 34.4432C38.1637 33.6309 41.8597 33.6309 45.4185 34.4432L46.7536 28.5936Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <circle
            cx="40.0039"
            cy="60"
            r="4"
            fill="#BB6BD9"
            stroke="#BB6BD9"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M30.2861 47.9364L31.533 49.5H31.533L30.2861 47.9364ZM36.5407 44.9243L36.9858 46.8742L36.5407 44.9243ZM25.1902 50.6432C24.5946 51.5734 24.8659 52.8104 25.7962 53.4059C26.7264 54.0015 27.9634 53.7301 28.5589 52.7999L25.1902 50.6432ZM49.7375 47.9364L48.4905 49.5H48.4905L49.7375 47.9364ZM51.4632 52.7976C52.0589 53.7278 53.2959 53.9989 54.2261 53.4031C55.1562 52.8074 55.4273 51.5704 54.8315 50.6403L51.4632 52.7976ZM43.4829 44.9243L43.0378 46.8742L43.4829 44.9243ZM22.9917 36.7895L21.7447 35.2259L22.9917 36.7895ZM33.9373 31.5184L33.4923 29.5685L33.9373 31.5184ZM16.6768 40.416C16.0089 41.2957 16.1807 42.5504 17.0604 43.2183C17.9402 43.8862 19.1948 43.7145 19.8627 42.8347L16.6768 40.416ZM57.0317 36.7895L58.2787 35.2259L57.0317 36.7895ZM60.1591 42.8326C60.8271 43.7123 62.0817 43.8839 62.9614 43.2159C63.8411 42.5479 64.0127 41.2932 63.3447 40.4135L60.1591 42.8326ZM46.0861 31.5184L46.5311 29.5685L46.0861 31.5184ZM31.533 49.5C33.1303 48.2263 34.994 47.3288 36.9858 46.8742L36.0957 42.9744C33.5181 43.5628 31.1062 44.7243 29.0391 46.3727L31.533 49.5ZM28.5589 52.7999C29.3607 51.5475 30.3646 50.4318 31.533 49.5L29.0391 46.3727C27.5269 47.5786 26.2278 49.0224 25.1902 50.6432L28.5589 52.7999ZM48.4905 49.5C49.6583 50.4313 50.6616 51.5461 51.4632 52.7976L54.8315 50.6403C53.7942 49.0206 52.4957 47.5779 50.9845 46.3727L48.4905 49.5ZM43.0378 46.8742C45.0296 47.3288 46.8933 48.2263 48.4905 49.5L50.9845 46.3727C48.9174 44.7243 46.5055 43.5628 43.9279 42.9744L43.0378 46.8742ZM43.9279 42.9744C41.3503 42.3861 38.6733 42.3861 36.0957 42.9744L36.9858 46.8742C38.9775 46.4196 41.0461 46.4196 43.0378 46.8742L43.9279 42.9744ZM24.2387 38.3532C27.21 35.9836 30.6771 34.314 34.3824 33.4683L33.4923 29.5685C29.2012 30.548 25.1859 32.4816 21.7447 35.2259L24.2387 38.3532ZM19.8627 42.8347C21.1262 41.1705 22.5949 39.6641 24.2387 38.3532L21.7447 35.2259C19.841 36.744 18.1401 38.4887 16.6768 40.416L19.8627 42.8347ZM55.7847 38.3532C57.4278 39.6635 58.896 41.1693 60.1591 42.8326L63.3447 40.4135C61.8819 38.4872 60.1816 36.7434 58.2787 35.2259L55.7847 38.3532ZM45.641 33.4683C49.3463 34.314 52.8134 35.9836 55.7847 38.3532L58.2787 35.2259C54.8375 32.4816 50.8222 30.548 46.5311 29.5685L45.641 33.4683ZM46.5311 29.5685C42.24 28.5891 37.7834 28.5891 33.4923 29.5685L34.3824 33.4683C38.0876 32.6226 41.9358 32.6226 45.641 33.4683L46.5311 29.5685Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M44.0001 60C44.0001 62.2091 42.2092 64 40.0001 64C37.7909 64 36.0001 62.2091 36.0001 60C36.0001 57.7909 37.7909 56 40.0001 56C42.2092 56 44.0001 57.7909 44.0001 60Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26.8706 51.7215C27.7904 50.2849 28.9419 49.0052 30.2822 47.9364C32.1143 46.4753 34.2521 45.4458 36.5368 44.9243C38.8215 44.4028 41.1943 44.4028 43.4789 44.9243C45.7636 45.4458 47.9014 46.4753 49.7336 47.9364C51.0731 49.0046 52.224 50.2834 53.1435 51.719M18.2659 41.6253C19.6292 39.8296 21.214 38.2041 22.9878 36.7895C26.1941 34.2326 29.9352 32.431 33.9334 31.5184C37.9316 30.6058 42.084 30.6058 46.0822 31.5184C50.0803 32.431 53.8215 34.2326 57.0278 36.7895C58.8008 38.2035 60.385 39.8282 61.748 41.6231M44.0001 60C44.0001 62.2091 42.2092 64 40.0001 64C37.7909 64 36.0001 62.2091 36.0001 60C36.0001 57.7909 37.7909 56 40.0001 56C42.2092 56 44.0001 57.7909 44.0001 60Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M46.531 29.5685C42.2399 28.5891 37.7832 28.5891 33.4922 29.5685C29.201 30.548 25.1858 32.4816 21.7446 35.2259C19.8409 36.744 18.1399 38.4887 16.6767 40.416C16.0088 41.2957 16.1805 42.5504 17.0603 43.2183C17.94 43.8862 19.1947 43.7145 19.8626 42.8347C21.126 41.1705 22.5947 39.6641 24.2385 38.3532C27.2099 35.9836 30.677 34.314 34.3822 33.4683C38.0875 32.6226 41.9356 32.6226 45.6409 33.4683C49.3461 34.314 52.8132 35.9836 55.7846 38.3532C57.4277 39.6635 58.8958 41.1693 60.1589 42.8326C60.827 43.7123 62.0816 43.8839 62.9613 43.2159C63.841 42.5479 64.0126 41.2932 63.3446 40.4135C61.8818 38.4872 60.1814 36.7434 58.2786 35.2259C54.8374 32.4816 50.8221 30.548 46.531 29.5685Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43.9278 42.9744C41.3502 42.3861 38.6731 42.3861 36.0955 42.9744C33.5179 43.5628 31.106 44.7243 29.0389 46.3727C27.5268 47.5786 26.2277 49.0224 25.19 50.6432C24.5945 51.5734 24.8658 52.8104 25.796 53.4059C26.7263 54.0015 27.9632 53.7301 28.5588 52.7999C29.3606 51.5475 30.3645 50.4318 31.5329 49.5C33.1302 48.2263 34.9939 47.3288 36.9856 46.8742C38.9774 46.4196 41.0459 46.4196 43.0377 46.8742C45.0294 47.3288 46.8931 48.2263 48.4904 49.5C49.6581 50.4313 50.6615 51.5461 51.4631 52.7976C52.0588 53.7278 53.2958 53.9989 54.2259 53.4031C55.1561 52.8074 55.4272 51.5704 54.8314 50.6403C53.7941 49.0206 52.4956 47.5779 50.9843 46.3727C48.9173 44.7243 46.5054 43.5628 43.9278 42.9744Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.0038 54C36.6901 54 34.0038 56.6863 34.0038 60C34.0038 63.3137 36.6901 66 40.0038 66C43.3175 66 46.0038 63.3137 46.0038 60C46.0038 56.6863 43.3175 54 40.0038 54ZM38.0038 60C38.0038 58.8954 38.8993 58 40.0038 58C41.1084 58 42.0038 58.8954 42.0038 60C42.0038 61.1046 41.1084 62 40.0038 62C38.8993 62 38.0038 61.1046 38.0038 60Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-wifi-2', CoreWifi2)
export default CoreWifi2
