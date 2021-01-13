
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreLeaf = {
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
            d="M11.7822 68.7986L12.0873 67.8051C14.7149 59.2485 19.3889 51.4041 25.721 44.9237L26.8397 43.7787C32.7362 37.744 40.067 33.2261 48.166 30.6352L49.4999 30.2085"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M37.3102 62.0496C37.3734 62.0501 37.4366 62.0503 37.4999 62.0503C47.3939 62.0503 56.5911 56.6407 61.4999 48.0503C66.4188 39.4422 66.4188 28.6584 61.4999 20.0503C59.2723 16.152 56.1616 12.9088 52.5035 10.5288C52.1656 11.6879 51.6937 12.8177 51.0878 13.8948L50.9125 14.2064C48.1869 19.0519 43.0597 22.0506 37.5002 22.0506C37.315 22.0506 37.1303 22.0473 36.9461 22.0406V22.0501H35.8247C28.7994 22.0501 22.2893 25.736 18.6748 31.7601C14.8747 38.0938 14.8747 46.0063 18.6748 52.34C22.2893 58.3641 28.7994 62.0501 35.8247 62.0501H37.1771C37.2215 62.0501 37.2659 62.0499 37.3102 62.0496Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.8103 61.5501C36.8735 61.5505 36.9367 61.5508 37 61.5508C46.894 61.5508 56.0912 56.1412 61 47.5508C65.9189 38.9427 65.9189 28.1589 61 19.5508C58.7724 15.6525 55.6617 12.4093 52.0035 10.0293C51.6656 11.1884 51.1938 12.3181 50.5879 13.3952L50.4126 13.7069C47.687 18.5524 42.5597 21.5511 37.0002 21.5511C36.8151 21.5511 36.6304 21.5477 36.4462 21.5411V21.5505H35.3248C28.2995 21.5505 21.7894 25.2365 18.1749 31.2606C14.3748 37.5943 14.3748 45.5068 18.1749 51.8405C21.7894 57.8646 28.2995 61.5505 35.3248 61.5505H36.6772C36.7216 61.5505 36.766 61.5504 36.8103 61.5501ZM52.1267 28.7088C52.6163 30.1101 51.6134 31.6939 49.8866 32.2463L48.5527 32.673C41.0833 35.0624 34.2784 39.2417 28.7698 44.8793L27.6511 46.0243C21.6853 52.1299 17.239 59.5656 14.7303 67.735L14.4252 68.7285C13.9685 70.216 12.1911 71.2295 10.4553 70.9923C8.71957 70.7551 7.68276 69.357 8.13954 67.8695L8.44462 66.8761C11.1911 57.9323 16.0928 49.6793 22.7912 42.8239L23.91 41.6789C30.1944 35.2473 38.0509 30.3906 46.7797 27.5983L48.1135 27.1716C49.8403 26.6192 51.6371 27.3074 52.1267 28.7088Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.8102 61.5501C36.8734 61.5505 36.9366 61.5508 36.9999 61.5508C46.8939 61.5508 56.0911 56.1412 60.9999 47.5508C65.9188 38.9427 65.9188 28.1589 60.9999 19.5508C58.7723 15.6525 55.6616 12.4093 52.0035 10.0293C51.6656 11.1884 51.1937 12.3181 50.5878 13.3952L50.4125 13.7069C47.6869 18.5524 42.5597 21.5511 37.0002 21.5511C36.815 21.5511 36.6303 21.5477 36.4461 21.5411V21.5505H35.3247C28.2994 21.5505 21.7893 25.2365 18.1749 31.2606C14.3747 37.5943 14.3747 45.5068 18.1748 51.8405C21.7893 57.8646 28.2994 61.5505 35.3247 61.5505H36.6771C36.7215 61.5505 36.7659 61.5504 36.8102 61.5501Z"
            fill="#219653"
          />
          <path
            d="M36.8102 61.5501L36.8242 59.5502C36.8152 59.5501 36.8061 59.5501 36.797 59.5501L36.8102 61.5501ZM60.9999 47.5508L62.7364 48.543L60.9999 47.5508ZM60.9999 19.5508L59.2634 20.543L59.2634 20.543L60.9999 19.5508ZM52.0035 10.0293L53.0941 8.35286C52.5637 8.00777 51.9013 7.93407 51.3079 8.15413C50.7146 8.37418 50.2605 8.86204 50.0834 9.46956L52.0035 10.0293ZM50.5878 13.3952L52.3309 14.3758L52.331 14.3758L50.5878 13.3952ZM50.4125 13.7069L48.6694 12.7264L48.6693 12.7264L50.4125 13.7069ZM36.4461 21.5411L36.5179 19.5424C35.9754 19.5229 35.4482 19.7248 35.0575 20.1018C34.6668 20.4787 34.4461 20.9983 34.4461 21.5411H36.4461ZM36.4461 21.5505V23.5505C37.5507 23.5505 38.4461 22.6551 38.4461 21.5505H36.4461ZM18.1749 31.2606L19.8898 32.2896L18.1749 31.2606ZM18.1748 51.8405L19.8898 50.8115L18.1748 51.8405ZM36.7962 63.5501C36.8641 63.5505 36.932 63.5508 36.9999 63.5508V59.5508C36.9413 59.5508 36.8828 59.5506 36.8242 59.5502L36.7962 63.5501ZM36.9999 63.5508C47.6216 63.5508 57.4765 57.7479 62.7364 48.543L59.2634 46.5585C54.7057 54.5345 46.1662 59.5508 36.9999 59.5508V63.5508ZM62.7364 48.543C68.0066 39.3201 68.0066 27.7815 62.7364 18.5585L59.2634 20.543C63.831 28.5363 63.831 38.5652 59.2634 46.5585L62.7364 48.543ZM62.7364 18.5585C60.3478 14.3784 57.0134 10.9027 53.0941 8.35286L50.9128 11.7057C54.3099 13.9158 57.1969 16.9266 59.2634 20.543L62.7364 18.5585ZM50.0834 9.46956C49.7878 10.4835 49.375 11.4719 48.8447 12.4147L52.331 14.3758C53.0123 13.1644 53.5433 11.8934 53.9235 10.589L50.0834 9.46956ZM48.8447 12.4147L48.6694 12.7264L52.1556 14.6874L52.3309 14.3758L48.8447 12.4147ZM48.6693 12.7264C46.298 16.9421 41.8371 19.5511 37.0002 19.5511V23.5511C43.2822 23.5511 49.0758 20.1627 52.1557 14.6874L48.6693 12.7264ZM37.0002 19.5511C36.8389 19.5511 36.6782 19.5482 36.5179 19.5424L36.3744 23.5398C36.5824 23.5473 36.791 23.5511 37.0002 23.5511V19.5511ZM34.4461 21.5411V21.5505H38.4461V21.5411H34.4461ZM35.3247 23.5505H36.4461V19.5505H35.3247V23.5505ZM19.8898 32.2896C23.1429 26.8679 29.002 23.5505 35.3247 23.5505V19.5505C27.5969 19.5505 20.4358 23.6051 16.4599 30.2316L19.8898 32.2896ZM19.8898 50.8115C16.4697 45.1112 16.4697 37.9899 19.8898 32.2896L16.4599 30.2316C12.2797 37.1986 12.2797 45.9024 16.4599 52.8694L19.8898 50.8115ZM35.3247 59.5505C29.002 59.5505 23.1428 56.2332 19.8898 50.8115L16.4599 52.8694C20.4358 59.496 27.5969 63.5505 35.3247 63.5505V59.5505ZM36.6771 59.5505H35.3247V63.5505H36.6771V59.5505ZM36.797 59.5501C36.757 59.5504 36.717 59.5505 36.6771 59.5505V63.5505C36.726 63.5505 36.7748 63.5504 36.8235 63.5501L36.797 59.5501Z"
            fill="#219653"
          />
          <path
            d="M9.18692 68.0128C8.8824 69.0044 9.5736 69.9365 10.7308 70.0947C11.8879 70.2528 13.0729 69.5771 13.3774 68.5854L9.18692 68.0128ZM11.5872 67.3056L9.492 67.0193L9.492 67.0193L11.5872 67.3056ZM25.2209 44.4242L23.6009 43.3574L23.6009 43.3574L25.2209 44.4242ZM26.3396 43.2792L27.9596 44.346L27.9596 44.346L26.3396 43.2792ZM47.666 30.1357L47.0749 28.4442L47.0749 28.4442L47.666 30.1357ZM49.5909 31.4006C50.742 31.0323 51.4107 29.9765 51.0842 29.0422C50.7578 28.108 49.56 27.6492 48.4088 28.0175L49.5909 31.4006ZM13.3774 68.5854L13.6825 67.592L9.492 67.0193L9.18692 68.0128L13.3774 68.5854ZM26.8408 45.491L27.9596 44.346L24.7197 42.2124L23.6009 43.3574L26.8408 45.491ZM48.257 31.8273L49.5909 31.4006L48.4088 28.0175L47.0749 28.4442L48.257 31.8273ZM27.9596 44.346C33.5975 38.576 40.5777 34.2839 48.257 31.8273L47.0749 28.4442C38.5561 31.1693 30.8748 35.9131 24.7197 42.2124L27.9596 44.346ZM13.6825 67.592C16.2308 59.2935 20.753 51.7215 26.8408 45.491L23.6009 43.3574C17.0246 50.0878 12.1988 58.2046 9.492 67.0193L13.6825 67.592Z"
            fill="#F2994A"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M37.3102 62.0501C37.3734 62.0505 37.4366 62.0508 37.4998 62.0508C47.3938 62.0508 56.591 56.6412 61.4998 48.0508C66.4187 39.4427 66.4187 28.6589 61.4998 20.0508C59.2722 16.1525 56.1615 12.9093 52.5034 10.5293C52.1655 11.6884 51.6936 12.8181 51.0877 13.8952L50.9124 14.2069C48.1868 19.0524 43.0596 22.0511 37.5001 22.0511C37.3149 22.0511 37.1302 22.0477 36.9461 22.0411V22.0505H35.8246C28.7994 22.0505 22.2892 25.7365 18.6748 31.7606C14.8746 38.0943 14.8746 46.0068 18.6748 52.3405C22.2892 58.3646 28.7994 62.0505 35.8246 62.0505H37.177C37.2214 62.0505 37.2658 62.0504 37.3102 62.0501Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M11.7822 68.7989L12.0873 67.8054C14.7149 59.2488 19.3889 51.4045 25.721 44.924L26.8397 43.779C32.7362 37.7444 40.067 33.2264 48.166 30.6355L49.4999 30.2088M37.3102 62.0501C37.3734 62.0505 37.4366 62.0508 37.4998 62.0508C47.3938 62.0508 56.591 56.6412 61.4998 48.0508C66.4187 39.4427 66.4187 28.6589 61.4998 20.0508C59.2722 16.1525 56.1615 12.9093 52.5034 10.5293C52.1655 11.6884 51.6936 12.8181 51.0877 13.8952L50.9124 14.2069C48.1868 19.0524 43.0596 22.0511 37.5001 22.0511C37.3149 22.0511 37.1302 22.0477 36.9461 22.0411V22.0505H35.8246C28.7994 22.0505 22.2892 25.7365 18.6748 31.7606C14.8746 38.0943 14.8746 46.0068 18.6748 52.3405C22.2892 58.3646 28.7994 62.0505 35.8246 62.0505H37.177C37.2214 62.0505 37.2658 62.0504 37.3102 62.0501Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.0942 8.35287C52.5637 8.00778 51.9013 7.93407 51.308 8.15413C50.7147 8.37419 50.2605 8.86205 50.0834 9.46957C49.7878 10.4835 49.375 11.4719 48.8447 12.4147L48.6694 12.7264C46.298 16.9421 41.8371 19.5511 37.0002 19.5511C36.839 19.5511 36.6782 19.5482 36.5179 19.5424C36.4288 19.5392 36.34 19.542 36.2523 19.5506H35.3247C27.597 19.5506 20.4358 23.6051 16.4599 30.2316C12.347 37.0865 12.2808 45.6227 16.2613 52.5317C13.3411 57.0371 11.0608 61.911 9.49218 67.0192L9.1871 68.0127C8.88258 69.0044 9.57379 69.9365 10.731 70.0946C11.8881 70.2527 13.073 69.577 13.3776 68.5854L13.6826 67.5919C14.9253 63.5454 16.6372 59.6716 18.7712 56.0419C22.9066 60.7665 28.9211 63.5506 35.3247 63.5506L36.7191 63.5505L36.8099 63.5502C36.8733 63.5506 36.9366 63.5508 36.9999 63.5508C47.6216 63.5508 57.4765 57.7479 62.7364 48.5431C68.0067 39.3201 68.0067 27.7815 62.7364 18.5585C60.3478 14.3784 57.0134 10.9027 53.0942 8.35287ZM21.0396 52.5025C24.4214 56.9148 29.6889 59.5506 35.3247 59.5506H36.6771C36.7171 59.5506 36.757 59.5504 36.797 59.5502L36.8243 59.5502C36.8828 59.5506 36.9413 59.5508 36.9999 59.5508C46.1662 59.5508 54.7057 54.5345 59.2634 46.5585C63.831 38.5652 63.831 28.5363 59.2634 20.5431C57.6235 17.6731 55.4668 15.1846 52.9485 13.1749C52.7586 13.5809 52.5528 13.9815 52.331 14.3758L52.1557 14.6874C49.0758 20.1627 43.2822 23.5511 37.0002 23.5511C36.8604 23.5511 36.7208 23.5494 36.5814 23.5461C36.5367 23.549 36.4916 23.5506 36.4462 23.5506H35.3247C29.002 23.5506 23.1429 26.8679 19.8899 32.2896C16.855 37.3478 16.5131 43.5249 18.8643 48.8352C20.3223 46.9247 21.9034 45.0948 23.6011 43.3573L24.7199 42.2124C30.875 35.913 38.5563 31.1693 47.0751 28.4441L48.409 28.0174C49.5602 27.6491 50.758 28.1079 51.0844 29.0422C51.4108 29.9764 50.7422 31.0323 49.5911 31.4005L48.2572 31.8272C40.5779 34.2838 33.5977 38.576 27.9598 44.346L26.841 45.4909C24.7094 47.6725 22.7698 50.0184 21.0396 52.5025Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-leaf', CoreLeaf)
export default CoreLeaf
