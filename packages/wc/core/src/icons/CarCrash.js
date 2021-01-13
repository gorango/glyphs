
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCarCrash = {
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
            d="M7.21159 48.641C6.06806 44.3733 8.60072 39.9866 12.8684 38.843L47.6418 29.5256C51.9095 28.382 56.2962 30.9147 57.4397 35.1824L58.9926 40.978C59.5644 43.1118 58.2981 45.3052 56.1642 45.8769L13.6635 57.265C11.5296 57.8367 9.33627 56.5704 8.76451 54.4366L7.21159 48.641Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M12.665 57.4025L14.0878 62.7123C14.3737 63.7792 15.4704 64.4124 16.5373 64.1265L22.3328 62.5736C23.3998 62.2877 24.0329 61.191 23.7471 60.1241L22.3569 54.936L13.6636 57.2654C13.33 57.3548 12.9951 57.3992 12.665 57.4025Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47.4712 48.2065L48.8613 53.3946C49.1472 54.4615 50.2439 55.0947 51.3108 54.8088L57.1064 53.2559C58.1733 52.97 58.8065 51.8733 58.5206 50.8064L57.0978 45.4966C56.8104 45.6588 56.4981 45.7878 56.1645 45.8771L47.4712 48.2065Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M49.4585 29.0391L11.0518 39.3302L12.1961 28.9661C12.558 25.6893 14.8929 22.97 18.0773 22.1167L34.7675 17.6446C37.9519 16.7913 41.3336 17.9789 43.2854 20.6358L49.4585 29.0391Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M14.3281 48.1537C13.8992 46.5533 14.849 44.9083 16.4494 44.4794C18.0498 44.0506 19.6948 45.0004 20.1236 46.6008C20.5524 48.2011 19.6027 49.8462 18.0023 50.275C16.4019 50.7038 14.7569 49.7541 14.3281 48.1537Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51.0333 38.3185C50.6045 36.7181 48.9595 35.7684 47.3591 36.1972C45.7587 36.626 44.8089 38.271 45.2377 39.8714C45.6666 41.4718 47.3116 42.4216 48.912 41.9928C50.5124 41.5639 51.4621 39.9189 51.0333 38.3185Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52.5928 16.7061L58.6487 20.0724L63.6269 15.2534L65.5288 21.9159L72.4565 22.0286L69.0902 28.0845L73.9092 33.0627L67.2467 34.9646L67.134 41.8923"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M49.4587 29.0388L50.1057 31.4537C50.9033 31.2399 51.5439 30.6462 51.8175 29.8672C52.0911 29.0881 51.9623 28.2242 51.4735 27.5588L49.4587 29.0388ZM11.052 39.3299L8.56709 39.0555C8.47647 39.8762 8.79692 40.6887 9.42338 41.2266C10.0498 41.7645 10.9015 41.9584 11.699 41.7447L11.052 39.3299ZM12.1964 28.9658L14.6813 29.2402L14.6813 29.2402L12.1964 28.9658ZM18.0775 22.1164L18.7245 24.5312L18.0775 22.1164ZM34.7677 17.6443L34.1206 15.2295L34.7677 17.6443ZM43.2856 20.6355L41.2708 22.1156L41.2708 22.1156L43.2856 20.6355ZM48.8116 26.624L10.4049 36.9151L11.699 41.7447L50.1057 31.4537L48.8116 26.624ZM9.71147 28.6914L8.56709 39.0555L13.5369 39.6043L14.6813 29.2402L9.71147 28.6914ZM17.4304 19.7016C13.2509 20.8215 10.1864 24.3906 9.71147 28.6914L14.6813 29.2402C14.93 26.9874 16.5353 25.1178 18.7245 24.5312L17.4304 19.7016ZM34.1206 15.2295L17.4304 19.7016L18.7245 24.5312L35.4147 20.0591L34.1206 15.2295ZM45.3004 19.1554C42.7387 15.6682 38.3002 14.1096 34.1206 15.2295L35.4147 20.0591C37.604 19.4725 39.929 20.2889 41.2708 22.1156L45.3004 19.1554ZM51.4735 27.5588L45.3004 19.1554L41.2708 22.1156L47.4439 30.5189L51.4735 27.5588Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.3248 59.8652L14.0876 62.7123C14.3735 63.7792 15.4702 64.4124 16.5371 64.1265L22.3327 62.5736C23.3996 62.2877 24.0328 61.191 23.7469 60.1241L23.0038 57.3508L14.3105 59.6802C13.982 59.7682 13.6527 59.8294 13.3248 59.8652ZM48.1179 50.6215L48.861 53.3948C49.1469 54.4617 50.2435 55.0949 51.3105 54.809L57.106 53.2561C58.1729 52.9702 58.8061 51.8735 58.5202 50.8066L57.7574 47.9595C57.4555 48.0925 57.1397 48.2041 56.8112 48.2922L48.1179 50.6215ZM55.9478 43.2708C55.8186 43.355 55.6741 43.4205 55.5171 43.4625L47.1985 45.6915C47.3018 45.5793 47.4371 45.4941 47.5954 45.4517L55.6447 43.2949C55.7465 43.2676 55.8489 43.2604 55.9478 43.2708ZM12.5475 54.8999C12.6279 54.8414 12.7203 54.7965 12.822 54.7692L20.8714 52.6124C21.0296 52.57 21.1895 52.5761 21.335 52.6216L13.0164 54.8506C12.8594 54.8926 12.7015 54.9082 12.5475 54.8999Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.21167 48.641C6.06813 44.3733 8.60079 39.9866 12.8685 38.843L47.6418 29.5255C51.9096 28.382 56.2963 30.9147 57.4398 35.1824L58.9927 40.9779C59.5645 43.1118 58.2982 45.3052 56.1643 45.8769L13.6636 57.265C11.5297 57.8367 9.33635 56.5704 8.76458 54.4365L7.21167 48.641ZM14.232 47.7952C13.8031 46.1948 14.7529 44.5498 16.3533 44.1209C17.9537 43.6921 19.5987 44.6419 20.0275 46.2423C20.4563 47.8427 19.5066 49.4877 17.9062 49.9165C16.3058 50.3453 14.6608 49.3956 14.232 47.7952ZM47.2629 35.8387C48.8633 35.4099 50.5083 36.3597 50.9371 37.96C51.366 39.5604 50.4162 41.2055 48.8158 41.6343C47.2154 42.0631 45.5704 41.1134 45.1416 39.513C44.7128 37.9126 45.6625 36.2676 47.2629 35.8387Z"
            fill="currentColor"
          />
          <path
            d="M52.5928 16.7061L58.6487 20.0724L63.6269 15.2534L65.5288 21.9159L72.4565 22.0285L69.0902 28.0844L73.9092 33.0627L67.2467 34.9645L67.134 41.8922"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.4587 29.0388L11.052 39.3299L12.1964 28.9658C12.5582 25.689 14.8931 22.9697 18.0775 22.1164L34.7677 17.6443C37.9521 16.791 41.3338 17.9786 43.2856 20.6355L49.4587 29.0388Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.665 57.4023L14.0878 62.7121C14.3737 63.7791 15.4704 64.4122 16.5373 64.1264L22.3328 62.5734C23.3998 62.2876 24.0329 61.1909 23.7471 60.1239L22.3569 54.9359L13.6636 57.2652C13.33 57.3546 12.9951 57.3991 12.665 57.4023ZM47.471 48.2066L48.8611 53.3947C49.147 54.4616 50.2437 55.0948 51.3106 54.8089L57.1062 53.256C58.1731 52.9701 58.8063 51.8734 58.5204 50.8065L57.0976 45.4967C56.8102 45.6589 56.4978 45.7878 56.1643 45.8772L47.471 48.2066Z"
            fill="#828282"
          />
          <path
            d="M7.21167 48.641C6.06813 44.3733 8.60079 39.9866 12.8685 38.843L47.6418 29.5255C51.9096 28.382 56.2963 30.9147 57.4398 35.1824L58.9927 40.9779C59.5645 43.1118 58.2982 45.3052 56.1643 45.8769L13.6636 57.265C11.5297 57.8367 9.33635 56.5704 8.76458 54.4365L7.21167 48.641Z"
            fill="#EB5757"
          />
          <rect
            x="13.5518"
            y="45.2559"
            width="6"
            height="6"
            rx="3"
            transform="rotate(-15 13.5518 45.2559)"
            fill="#F2C94C"
          />
          <rect
            width="6"
            height="6"
            rx="3"
            transform="matrix(-0.965926 0.258819 0.258819 0.965926 50.2568 35.4209)"
            fill="#F2C94C"
          />
          <path
            d="M52.5928 16.7061L58.6487 20.0724L63.6269 15.2534L65.5288 21.9159L72.4565 22.0285L69.0902 28.0844L73.9092 33.0627L67.2467 34.9645L67.134 41.8922"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M49.4584 29.039L11.0517 39.3301L12.1961 28.966C12.5579 25.6892 14.8928 22.9699 18.0772 22.1166L34.7674 17.6445C37.9518 16.7912 41.3335 17.9788 43.2853 20.6357L49.4584 29.039Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M12.665 57.4024L14.0877 62.7122C14.3736 63.7791 15.4703 64.4123 16.5372 64.1264L22.3328 62.5735C23.3997 62.2876 24.0329 61.1909 23.747 60.124L22.3568 54.9359L13.6635 57.2653C13.33 57.3546 12.995 57.3991 12.665 57.4024Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.4709 48.2066L48.861 53.3947C49.1469 54.4616 50.2436 55.0948 51.3105 54.8089L57.1061 53.256C58.173 52.9701 58.8062 51.8734 58.5203 50.8065L57.0975 45.4967C56.8101 45.6589 56.4978 45.7879 56.1642 45.8772L47.4709 48.2066Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M7.21159 48.6412C6.06806 44.3735 8.60072 39.9868 12.8684 38.8433L47.6418 29.5258C51.9095 28.3823 56.2962 30.9149 57.4397 35.1827L58.9926 40.9782C59.5644 43.1121 58.2981 45.3055 56.1642 45.8772L13.6635 57.2653C11.5296 57.837 9.33627 56.5707 8.76451 54.4368L7.21159 48.6412Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14.3279 48.1539C13.8991 46.5535 14.8489 44.9085 16.4493 44.4797C18.0497 44.0508 19.6947 45.0006 20.1235 46.601C20.5523 48.2014 19.6026 49.8464 18.0022 50.2752C16.4018 50.704 14.7568 49.7543 14.3279 48.1539Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51.0331 38.3188C50.6043 36.7184 48.9593 35.7686 47.3589 36.1974C45.7585 36.6263 44.8087 38.2713 45.2376 39.8717C45.6664 41.4721 47.3114 42.4218 48.9118 41.993C50.5122 41.5642 51.4619 39.9192 51.0331 38.3188Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M13.6635 57.2653L22.3568 54.9359L23.747 60.124C24.0329 61.1909 23.3997 62.2876 22.3328 62.5735L16.5372 64.1264C15.4703 64.4123 14.3736 63.7791 14.0877 62.7122L12.665 57.4024C12.995 57.3991 13.33 57.3546 13.6635 57.2653ZM13.6635 57.2653L56.1642 45.8772M13.6635 57.2653C11.5296 57.837 9.33627 56.5707 8.76451 54.4368L7.21159 48.6412C6.06806 44.3735 8.60072 39.9868 12.8684 38.8433L47.6418 29.5258C51.9095 28.3823 56.2962 30.9149 57.4397 35.1827L58.9926 40.9782C59.5644 43.1121 58.2981 45.3055 56.1642 45.8772M56.1642 45.8772C56.4978 45.7879 56.8101 45.6589 57.0975 45.4967L58.5203 50.8065C58.8062 51.8734 58.173 52.9701 57.1061 53.256L51.3105 54.8089C50.2436 55.0948 49.1469 54.4616 48.861 53.3947L47.4709 48.2066L56.1642 45.8772ZM52.5927 16.7061L58.6486 20.0724L63.6269 15.2534L65.5287 21.9159L72.4564 22.0286L69.0901 28.0845L73.9091 33.0627L67.2466 34.9646L67.1339 41.8923M49.4584 29.039L11.0517 39.3301L12.1961 28.966C12.5579 25.6892 14.8928 22.9699 18.0772 22.1166L34.7674 17.6445C37.9518 16.7912 41.3335 17.9788 43.2853 20.6357L49.4584 29.039ZM18.0022 50.2752C16.4018 50.704 14.7568 49.7543 14.3279 48.1539C13.8991 46.5535 14.8489 44.9085 16.4493 44.4797C18.0497 44.0508 19.6947 45.0006 20.1235 46.601C20.5523 48.2014 19.6026 49.8464 18.0022 50.2752ZM48.9118 41.993C50.5122 41.5642 51.4619 39.9192 51.0331 38.3188C50.6043 36.7184 48.9593 35.7686 47.3589 36.1974C45.7585 36.6263 44.8087 38.2713 45.2376 39.8717C45.6664 41.4721 47.3114 42.4218 48.9118 41.993Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M53.5644 14.9581C52.599 14.4214 51.3813 14.769 50.8446 15.7344C50.308 16.6999 50.6556 17.9176 51.621 18.4542L57.6769 21.8205C58.447 22.2486 59.4066 22.1223 60.0396 21.5095L62.6198 19.0118L63.6055 22.4649C63.8474 23.3122 64.6152 23.9014 65.4962 23.9157L69.0868 23.9741L67.342 27.1128C66.9139 27.8829 67.0403 28.8424 67.6531 29.4755L70.1507 32.0557L66.6976 33.0414C65.8504 33.2833 65.2612 34.0511 65.2469 34.9321L65.1342 41.8598C65.1163 42.9642 65.997 43.8741 67.1014 43.892C68.2059 43.91 69.1157 43.0292 69.1337 41.9248L69.2222 36.4805L74.4581 34.986C75.134 34.793 75.659 34.2594 75.8409 33.5804C76.0229 32.9014 75.835 32.1768 75.3461 31.6717L71.559 27.7595L74.2045 23.0003C74.546 22.3859 74.5399 21.6374 74.1885 21.0286C73.837 20.4198 73.1918 20.0403 72.4889 20.0289L67.0447 19.9403L65.5501 14.7045C65.3571 14.0286 64.8235 13.5035 64.1445 13.3216C63.4655 13.1397 62.7409 13.3275 62.2359 13.8164L58.3236 17.6035L53.5644 14.9581Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9316 42.5478C13.2643 43.2626 11.6814 46.0042 12.3961 48.6716C13.1108 51.3389 15.8525 52.9218 18.5198 52.2071C21.1871 51.4924 22.7701 48.7507 22.0553 46.0834C21.3406 43.416 18.599 41.8331 15.9316 42.5478ZM16.2598 47.6363C16.1169 47.1028 16.4334 46.5545 16.9669 46.4115C17.5004 46.2686 18.0487 46.5852 18.1916 47.1186C18.3346 47.6521 18.018 48.2005 17.4845 48.3434C16.9511 48.4863 16.4027 48.1698 16.2598 47.6363Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.965 37.8012C52.2503 35.1338 49.5086 33.5509 46.8413 34.2656C44.1739 34.9803 42.591 37.722 43.3057 40.3894C44.0204 43.0567 46.7621 44.6396 49.4294 43.9249C52.0968 43.2102 53.6797 40.4685 52.965 37.8012ZM47.8765 38.1293C48.41 37.9864 48.9583 38.303 49.1013 38.8364C49.2442 39.3699 48.9276 39.9182 48.3942 40.0612C47.8607 40.2041 47.3124 39.8875 47.1694 39.3541C47.0265 38.8206 47.3431 38.2723 47.8765 38.1293Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5596 20.1848C13.5791 21.2514 10.6604 24.6505 10.2081 28.7466L9.13996 38.4206C5.83526 40.7726 4.16824 45.0107 5.27975 49.1589L6.83266 54.9545C7.40746 57.0997 9.0748 58.6603 11.0756 59.1982L12.1559 63.2298C12.7276 65.3637 14.921 66.63 17.0548 66.0583L22.8504 64.5054C24.9843 63.9336 26.2506 61.7402 25.6788 59.6064L24.8063 56.3501L46.0567 50.6561L46.9292 53.9123C47.501 56.0462 49.6943 57.3125 51.8282 56.7408L57.6237 55.1879C59.7576 54.6161 61.0239 52.4228 60.4522 50.2889L59.3719 46.2573C60.8357 44.791 61.4993 42.6058 60.9245 40.4606L59.3716 34.6651C58.2601 30.5168 54.6972 27.6799 50.6591 27.2954L44.8971 19.4517C42.4574 16.1306 38.2302 14.6461 34.2497 15.7127L17.5596 20.1848ZM46.114 27.8647L13.3608 36.6409L14.184 29.1856C14.4554 26.728 16.2065 24.6885 18.5948 24.0485L35.285 19.5764C37.6733 18.9365 40.2096 19.8271 41.6734 21.8198L46.114 27.8647ZM9.14345 48.1236C8.28604 44.9237 10.1843 41.6346 13.3835 40.7759L48.1594 31.4577C51.3602 30.6 54.6502 32.4995 55.5079 35.7003L57.0608 41.4959C57.3467 42.5628 56.7135 43.6595 55.6466 43.9454L13.1459 55.3334C12.0789 55.6193 10.9822 54.9861 10.6964 53.9192L9.14345 48.1236ZM16.0196 62.1946L15.1471 58.9383L20.9426 57.3854L21.8151 60.6416L16.0196 62.1946ZM50.7929 52.8771L49.9204 49.6209L55.716 48.0679L56.5885 51.3242L50.7929 52.8771Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-car-crash', CoreCarCrash)
export default CoreCarCrash
