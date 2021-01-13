
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsGo = {
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
        ${variant === "color" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.7648 34.0688C43.9169 34.306 43.0569 34.5466 42.0615 34.8172C41.5751 34.9548 41.4646 34.986 41.0121 34.436C40.4693 33.7879 40.0712 33.3686 39.3113 32.9874C37.0316 31.8057 34.8242 32.1488 32.7616 33.5592C30.3009 35.2365 29.0344 37.7142 29.0705 40.8019C29.1067 43.8515 31.097 46.3674 33.9557 46.7867C36.4164 47.1297 38.479 46.2149 40.1074 44.2708C40.433 43.8517 40.7228 43.3937 41.0845 42.8604H34.1005C33.3406 42.8604 33.1596 42.3648 33.4129 41.7168C33.8834 40.5351 34.7518 38.5529 35.2584 37.5618C35.367 37.333 35.6203 36.9518 36.1631 36.9518H47.8081C48.3311 35.2058 49.1798 33.5561 50.312 31.995C52.9536 28.3356 56.138 26.4296 60.4442 25.6291C64.1353 24.9429 67.6092 25.3241 70.7574 27.5732C73.6161 29.6316 75.3893 32.4143 75.8597 36.0738C76.4749 41.2199 75.0636 45.4131 71.6982 48.9963C69.3099 51.5503 66.3788 53.1513 63.0135 53.8756C62.3715 54.0008 61.7296 54.0603 61.0979 54.1187C60.7681 54.1492 60.4412 54.1795 60.1186 54.2187C56.8256 54.1425 53.8221 53.1513 51.2891 50.8642C49.5077 49.2421 48.2806 47.2486 47.6707 44.9278C47.2475 45.8282 46.7414 46.6906 46.1506 47.5109C43.5451 51.1323 40.1436 53.3813 35.8374 53.9913C32.2911 54.4868 28.9982 53.7625 26.1033 51.4754C23.4255 49.3407 21.9056 46.5198 21.5076 43.0128C21.0371 38.8578 22.1951 35.1221 24.5834 31.8438C27.1527 28.2987 30.5542 26.0497 34.7156 25.2492C38.1172 24.6011 41.374 25.0204 44.3051 27.117C46.2229 28.4512 47.598 30.2809 48.5027 32.4919C48.7198 32.8349 48.5751 33.0255 48.1408 33.1399C46.8726 33.4792 45.8281 33.7714 44.7648 34.0688ZM68.7058 38.4107C68.7129 38.5388 68.7204 38.6737 68.7309 38.8184C68.55 42.0967 66.994 44.5363 64.1353 46.0992C62.2174 47.1285 60.2271 47.2428 58.2369 46.328C55.6314 45.1081 54.2563 42.0967 54.9077 39.1234C55.7038 35.5401 57.875 33.2911 61.2403 32.4906C64.6781 31.652 67.971 33.7866 68.6224 37.5605C68.6736 37.8304 68.6886 38.1003 68.7058 38.4107Z"
            fill="#00ACD7"
          />
          <path
            d="M9.50036 33.6356C9.42799 33.75 9.46418 33.8262 9.60892 33.8262L20.3859 33.8643C20.4944 33.8643 20.6753 33.75 20.7477 33.6356L21.3629 32.6445C21.4353 32.5301 21.3991 32.4158 21.2543 32.4158H10.6583C10.5136 32.4158 10.3327 32.492 10.2603 32.6064L9.50036 33.6356Z"
            fill="#00ACD7"
          />
          <path
            d="M4.03619 37.1424C3.96381 37.2568 4 37.333 4.14475 37.333L18.9384 37.2949C19.0831 37.2949 19.2279 37.2187 19.2641 37.0662L19.5535 36.1513C19.5897 36.037 19.5174 35.9226 19.3726 35.9226H5.19415C5.04941 35.9226 4.86848 35.9988 4.7961 36.1132L4.03619 37.1424Z"
            fill="#00ACD7"
          />
          <path
            d="M12.7933 40.6114C12.7209 40.7258 12.7571 40.8401 12.9018 40.8401L18.4679 40.8783C18.5765 40.8783 18.7212 40.7639 18.7212 40.6114L18.7936 39.6966C18.7936 39.5441 18.7212 39.4297 18.5765 39.4297H13.6618C13.517 39.4297 13.3723 39.5441 13.2999 39.6584L12.7933 40.6114Z"
            fill="#00ACD7"
          />
        `}
        ${variant === "solid" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.7648 34.0688C43.9169 34.306 43.0569 34.5466 42.0615 34.8172C41.5751 34.9548 41.4646 34.986 41.0121 34.436C40.4693 33.7879 40.0712 33.3686 39.3113 32.9874C37.0316 31.8057 34.8242 32.1488 32.7616 33.5592C30.3009 35.2365 29.0344 37.7142 29.0705 40.8019C29.1067 43.8515 31.097 46.3674 33.9557 46.7867C36.4164 47.1297 38.479 46.2149 40.1074 44.2708C40.433 43.8517 40.7228 43.3937 41.0845 42.8604H34.1005C33.3406 42.8604 33.1596 42.3648 33.4129 41.7168C33.8833 40.5351 34.7518 38.5529 35.2584 37.5618C35.367 37.333 35.6203 36.9518 36.1631 36.9518H47.8081C48.3311 35.2058 49.1798 33.5561 50.312 31.995C52.9536 28.3356 56.138 26.4296 60.4442 25.6291C64.1353 24.9429 67.6092 25.3241 70.7574 27.5732C73.6161 29.6316 75.3893 32.4143 75.8597 36.0738C76.4749 41.2199 75.0636 45.4131 71.6982 48.9963C69.3099 51.5503 66.3788 53.1513 63.0135 53.8756C62.3715 54.0008 61.7296 54.0603 61.0979 54.1187C60.7681 54.1492 60.4412 54.1795 60.1186 54.2187C56.8256 54.1425 53.8221 53.1513 51.2891 50.8642C49.5077 49.2421 48.2806 47.2486 47.6707 44.9278C47.2475 45.8282 46.7414 46.6906 46.1506 47.5109C43.5451 51.1323 40.1436 53.3813 35.8374 53.9913C32.2911 54.4868 28.9982 53.7625 26.1033 51.4754C23.4255 49.3407 21.9056 46.5198 21.5076 43.0128C21.0371 38.8578 22.1951 35.1221 24.5834 31.8438C27.1527 28.2987 30.5542 26.0497 34.7156 25.2492C38.1172 24.6011 41.374 25.0204 44.3051 27.117C46.2229 28.4512 47.598 30.2809 48.5027 32.4919C48.7198 32.8349 48.5751 33.0255 48.1408 33.1399C46.8726 33.4792 45.8281 33.7714 44.7648 34.0688ZM68.7058 38.4107C68.7129 38.5388 68.7204 38.6737 68.7309 38.8184C68.55 42.0967 66.994 44.5363 64.1353 46.0992C62.2174 47.1285 60.2271 47.2428 58.2369 46.328C55.6314 45.1081 54.2563 42.0967 54.9077 39.1234C55.7038 35.5401 57.875 33.2911 61.2403 32.4906C64.6781 31.652 67.971 33.7866 68.6224 37.5605C68.6736 37.8304 68.6886 38.1003 68.7058 38.4107Z"
            fill="currentColor"
          />
          <path
            d="M9.50036 33.6356C9.42799 33.75 9.46418 33.8262 9.60892 33.8262L20.3859 33.8643C20.4944 33.8643 20.6753 33.75 20.7477 33.6356L21.3629 32.6445C21.4353 32.5301 21.3991 32.4158 21.2543 32.4158H10.6583C10.5136 32.4158 10.3327 32.492 10.2603 32.6064L9.50036 33.6356Z"
            fill="currentColor"
          />
          <path
            d="M4.03619 37.1424C3.96381 37.2568 4 37.333 4.14475 37.333L18.9384 37.2949C19.0831 37.2949 19.2279 37.2187 19.2641 37.0662L19.5535 36.1513C19.5897 36.037 19.5174 35.9226 19.3726 35.9226H5.19415C5.04941 35.9226 4.86848 35.9988 4.7961 36.1132L4.03619 37.1424Z"
            fill="currentColor"
          />
          <path
            d="M12.7933 40.6114C12.7209 40.7258 12.7571 40.8401 12.9018 40.8401L18.4679 40.8783C18.5765 40.8783 18.7212 40.7639 18.7212 40.6114L18.7936 39.6966C18.7936 39.5441 18.7212 39.4297 18.5765 39.4297H13.6618C13.517 39.4297 13.3723 39.5441 13.2999 39.6584L12.7933 40.6114Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.7648 34.0688C43.9169 34.306 43.0569 34.5466 42.0615 34.8172C41.5751 34.9548 41.4646 34.986 41.0121 34.436C40.4693 33.7879 40.0712 33.3686 39.3113 32.9874C37.0316 31.8057 34.8242 32.1488 32.7616 33.5592C30.3009 35.2365 29.0344 37.7142 29.0705 40.8019C29.1067 43.8515 31.097 46.3674 33.9557 46.7867C36.4164 47.1297 38.479 46.2149 40.1074 44.2708C40.433 43.8517 40.7228 43.3937 41.0845 42.8604H34.1005C33.3406 42.8604 33.1596 42.3648 33.4129 41.7168C33.8833 40.5351 34.7518 38.5529 35.2584 37.5618C35.367 37.333 35.6203 36.9518 36.1631 36.9518H47.8081C48.3311 35.2058 49.1798 33.5561 50.312 31.995C52.9536 28.3356 56.138 26.4296 60.4442 25.6291C64.1353 24.9429 67.6092 25.3241 70.7574 27.5732C73.6161 29.6316 75.3893 32.4143 75.8597 36.0738C76.4749 41.2199 75.0636 45.4131 71.6982 48.9963C69.3099 51.5503 66.3788 53.1513 63.0135 53.8756C62.3715 54.0008 61.7296 54.0603 61.0979 54.1187C60.7681 54.1492 60.4412 54.1795 60.1186 54.2187C56.8256 54.1424 53.8221 53.1513 51.2891 50.8642C49.5077 49.2421 48.2806 47.2486 47.6707 44.9278C47.2475 45.8282 46.7414 46.6906 46.1506 47.5109C43.5451 51.1323 40.1436 53.3813 35.8374 53.9913C32.2911 54.4868 28.9982 53.7625 26.1033 51.4754C23.4255 49.3407 21.9056 46.5198 21.5076 43.0128C21.0371 38.8578 22.1951 35.1221 24.5834 31.8438C27.1527 28.2987 30.5542 26.0497 34.7156 25.2492C38.1172 24.6011 41.374 25.0204 44.3051 27.117C46.2229 28.4512 47.598 30.2809 48.5027 32.4919C48.7198 32.8349 48.5751 33.0255 48.1408 33.1399C46.8726 33.4792 45.8281 33.7714 44.7648 34.0688ZM68.7058 38.4107C68.7129 38.5388 68.7204 38.6737 68.7309 38.8184C68.55 42.0967 66.994 44.5363 64.1353 46.0992C62.2174 47.1285 60.2271 47.2428 58.2369 46.328C55.6314 45.1081 54.2563 42.0967 54.9077 39.1234C55.7038 35.5401 57.875 33.2911 61.2403 32.4906C64.6781 31.652 67.971 33.7866 68.6224 37.5605C68.6736 37.8304 68.6886 38.1003 68.7058 38.4107Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M9.50036 33.6356C9.42799 33.75 9.46418 33.8262 9.60892 33.8262L20.3859 33.8643C20.4944 33.8643 20.6753 33.75 20.7477 33.6356L21.3629 32.6445C21.4353 32.5301 21.3991 32.4158 21.2543 32.4158H10.6583C10.5136 32.4158 10.3327 32.492 10.2603 32.6064L9.50036 33.6356Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M4.03619 37.1424C3.96381 37.2568 4 37.333 4.14475 37.333L18.9384 37.2949C19.0831 37.2949 19.2279 37.2187 19.2641 37.0662L19.5535 36.1513C19.5897 36.037 19.5174 35.9226 19.3726 35.9226H5.19415C5.04941 35.9226 4.86848 35.9988 4.7961 36.1132L4.03619 37.1424Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12.7933 40.6114C12.7209 40.7258 12.7571 40.8401 12.9018 40.8401L18.4679 40.8783C18.5765 40.8783 18.7212 40.7639 18.7212 40.6114L18.7936 39.6966C18.7936 39.5441 18.7212 39.4297 18.5765 39.4297H13.6618C13.517 39.4297 13.3723 39.5441 13.2999 39.6584L12.7933 40.6114Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-go', BrandsGo)
export default BrandsGo
