
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M29.2037 48.5727H23.2203L23.2129 48.5726H20.3731C17.1314 48.5726 14.0191 47.3004 11.7056 45.0295L11.6235 44.9488C9.30573 42.6737 8 39.5624 8 36.3146C8 33.0669 9.30573 29.9555 11.6235 27.6804L11.7056 27.5998C13.5867 25.7533 15.9959 24.5671 18.5734 24.1882C18.6316 23.817 18.7097 23.4475 18.8078 23.0813C19.5518 20.3034 21.3869 17.9393 23.9092 16.5099C26.4315 15.0804 29.4348 14.7025 32.2576 15.459C32.9854 15.654 33.686 15.9204 34.3501 16.2511L35.1356 14.9156C37.2774 11.2743 40.7991 8.61635 44.9174 7.53318C48.986 6.46306 53.3056 7.01715 56.9366 9.07492L57.0644 9.14735C60.6954 11.2051 63.344 14.6001 64.4342 18.5938C65.0248 20.7573 65.132 23.0011 64.7757 25.1778C66.0682 25.7693 67.261 26.5844 68.2944 27.5987L68.3765 27.6794C70.6943 29.9545 72 33.0658 72 36.3136C72 39.5613 70.6943 42.6727 68.3765 44.9478L68.2944 45.0284C65.9809 47.2993 62.8686 48.5715 59.6269 48.5715H56.8111C56.8067 48.5719 56.8024 48.5721 56.798 48.5723C56.7925 48.5725 56.7869 48.5727 56.7813 48.5727H42.6131"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38.3005 38.0282C38.9472 37.1969 40.2755 37.5528 40.4199 38.5961L41.0303 43.0073L42.8189 49.2956C43.4303 51.4448 43.0099 53.7711 41.6976 55.5797C40.5787 57.1217 38.8848 58.1701 37.0037 58.4721C34.979 58.7973 32.9118 58.2434 31.3209 56.9494C29.8429 55.7473 28.9001 53.9924 28.7021 52.0975C28.47 49.8751 29.269 47.6503 30.8731 46.0947L35.5662 41.5432L38.3005 38.0282Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.9475 55.3742C52.5782 54.5925 53.837 54.9298 53.9923 55.9221L54.2381 57.492C54.4345 58.7467 54.7208 59.9857 55.0947 61.1994L56.1461 64.6122C56.7068 66.4321 56.3617 68.4105 55.2178 69.9331C54.2711 71.1934 52.8626 72.026 51.3021 72.248L51.1148 72.2747C49.3881 72.5203 47.6358 72.0508 46.2633 70.9747L46.1144 70.858C44.8739 69.8854 44.0705 68.4601 43.8807 66.8953C43.6514 65.0048 44.3417 63.1189 45.7373 61.8231L48.3542 59.3933C49.2849 58.5292 50.1523 57.5993 50.9498 56.6109L51.9475 55.3742Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22.7215 57.7802C23.3682 56.9488 24.6965 57.3047 24.8409 58.3481L25.2021 60.9577L26.5435 65.6739C27.002 67.2858 26.6867 69.0305 25.7025 70.3869C24.8634 71.5435 23.5929 72.3297 22.1821 72.5563C20.6636 72.8001 19.1132 72.3847 17.92 71.4143C16.8115 70.5127 16.1044 69.1965 15.9559 67.7754C15.7818 66.1085 16.3811 64.4399 17.5841 63.2732L21.104 59.8596L22.7215 57.7802Z"
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
            d="M64.4342 18.5938C63.344 14.6001 60.6954 11.2051 57.0644 9.14735L56.9366 9.07492C53.3056 7.01715 48.986 6.46306 44.9174 7.53318C40.7991 8.61635 37.2774 11.2743 35.1356 14.9156L34.3501 16.2511C33.686 15.9204 32.9854 15.654 32.2576 15.459C29.4348 14.7025 26.4315 15.0804 23.9092 16.5099C21.3869 17.9393 19.5518 20.3034 18.8078 23.0813C18.7097 23.4475 18.6316 23.817 18.5734 24.1882C15.9959 24.5671 13.5867 25.7533 11.7056 27.5998L11.6235 27.6804C9.30573 29.9555 8 33.0669 8 36.3146C8 39.5624 9.30573 42.6737 11.6235 44.9488L11.7056 45.0295C14.0191 47.3004 17.1314 48.5726 20.3731 48.5726H23.2129L23.2203 48.5727H26.0395C26.5219 46.835 27.4568 45.2286 28.7843 43.9412L33.3268 39.5358L35.9323 36.1863C38.2083 33.2604 42.8832 34.5131 43.3913 38.185L43.973 42.3884L45.7043 48.4749C45.7135 48.5075 45.7226 48.54 45.7315 48.5727H56.7813C56.7869 48.5727 56.7925 48.5725 56.798 48.5723C56.8024 48.5721 56.8067 48.5719 56.8111 48.5715H59.6269C62.8686 48.5715 65.9809 47.2993 68.2944 45.0284L68.3765 44.9478C70.6943 42.6727 72 39.5613 72 36.3136C72 33.0658 70.6943 29.9545 68.3765 27.6794L68.2944 27.5987C67.261 26.5844 66.0682 25.7693 64.7757 25.1778C65.132 23.0011 65.0248 20.7573 64.4342 18.5938ZM39.4941 48.5727L38.1445 43.8282C38.1063 43.6938 38.0775 43.557 38.0584 43.4186L38.0357 43.2545L37.9339 43.3853C37.8482 43.4955 37.7548 43.5996 37.6545 43.6969L32.9614 48.2483C32.8551 48.3514 32.7547 48.4597 32.6605 48.5727H39.4941Z"
            fill="currentColor"
          />
          <path
            d="M38.3 38.0283C38.9467 37.1969 40.275 37.5529 40.4194 38.5962L41.0298 43.0074L42.8185 49.2956C43.4298 51.4449 43.0094 53.7712 41.6971 55.5797C40.5783 57.1218 38.8844 58.1701 37.0033 58.4722C34.9786 58.7973 32.9113 58.2434 31.3204 56.9495C29.8424 55.7474 28.8996 53.9925 28.7017 52.0976C28.4695 49.8752 29.2686 47.6504 30.8726 46.0948L35.5657 41.5433L38.3 38.0283Z"
            fill="currentColor"
          />
          <path
            d="M51.9474 55.3743C52.5781 54.5926 53.8369 54.9299 53.9923 55.9222L54.238 57.4921C54.4344 58.7468 54.7207 59.9858 55.0946 61.1995L56.146 64.6122C56.7067 66.4322 56.3616 68.4106 55.2178 69.9332C54.271 71.1934 52.8626 72.0261 51.3021 72.2481L51.1147 72.2748C49.388 72.5204 47.6358 72.0509 46.2632 70.9748L46.1143 70.858C44.8738 69.8855 44.0704 68.4602 43.8806 66.8954C43.6514 65.0049 44.3417 63.119 45.7372 61.8232L48.3541 59.3934C49.2848 58.5292 50.1522 57.5994 50.9497 56.611L51.9474 55.3743Z"
            fill="currentColor"
          />
          <path
            d="M22.7217 57.7802C23.3684 56.9488 24.6967 57.3048 24.8411 58.3481L25.2022 60.9577L26.5437 65.6739C27.0022 67.2858 26.6869 69.0305 25.7027 70.387C24.8635 71.5435 23.5931 72.3298 22.1823 72.5563C20.6637 72.8002 19.1133 72.3847 17.9201 71.4143C16.8116 70.5127 16.1045 69.1965 15.9561 67.7754C15.7819 66.1085 16.3812 64.44 17.5843 63.2732L21.1041 59.8596L22.7217 57.7802Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.4342 18.5938C63.344 14.6001 60.6954 11.2051 57.0644 9.14735L56.9366 9.07492C53.3056 7.01715 48.986 6.46306 44.9174 7.53318C40.7991 8.61635 37.2774 11.2743 35.1356 14.9156L34.3501 16.2511C33.686 15.9204 32.9854 15.654 32.2576 15.459C29.4348 14.7025 26.4315 15.0804 23.9092 16.5099C21.3869 17.9393 19.5518 20.3034 18.8078 23.0813C18.7097 23.4475 18.6316 23.817 18.5734 24.1882C15.9959 24.5671 13.5867 25.7533 11.7056 27.5998L11.6235 27.6804C9.30573 29.9555 8 33.0669 8 36.3146C8 39.5624 9.30573 42.6737 11.6235 44.9488L11.7056 45.0295C14.0191 47.3004 17.1314 48.5726 20.3731 48.5726H23.2129L23.2203 48.5727H29.2037C29.579 47.6502 30.1424 46.8031 30.8729 46.0948L35.566 41.5433L38.3002 38.0283C38.9469 37.197 40.2752 37.5529 40.4196 38.5962L41.0301 43.0074L42.6131 48.5727H56.7813C56.7869 48.5727 56.7925 48.5725 56.798 48.5723C56.8024 48.5721 56.8067 48.5719 56.8111 48.5715H59.6269C62.8686 48.5715 65.9809 47.2993 68.2944 45.0284L68.3765 44.9478C70.6943 42.6727 72 39.5613 72 36.3136C72 33.0658 70.6943 29.9545 68.3765 27.6794L68.2944 27.5987C67.261 26.5844 66.0682 25.7693 64.7757 25.1778C65.132 23.0011 65.0248 20.7573 64.4342 18.5938Z"
            fill="#2F80ED"
          />
          <path
            d="M38.3 38.0283C38.9467 37.1969 40.275 37.5529 40.4194 38.5962L41.0298 43.0074L42.8185 49.2956C43.4298 51.4449 43.0094 53.7712 41.6971 55.5797C40.5783 57.1218 38.8844 58.1701 37.0033 58.4722C34.9786 58.7973 32.9113 58.2434 31.3204 56.9495C29.8424 55.7474 28.8996 53.9925 28.7017 52.0976C28.4695 49.8752 29.2686 47.6504 30.8726 46.0948L35.5657 41.5433L38.3 38.0283Z"
            fill="#56CCF2"
          />
          <path
            d="M51.9474 55.3743C52.5781 54.5926 53.8369 54.9299 53.9923 55.9222L54.238 57.4921C54.4344 58.7468 54.7207 59.9858 55.0946 61.1995L56.146 64.6122C56.7067 66.4322 56.3616 68.4106 55.2178 69.9332C54.271 71.1934 52.8626 72.0261 51.3021 72.2481L51.1147 72.2748C49.388 72.5204 47.6358 72.0509 46.2632 70.9748L46.1143 70.858C44.8738 69.8855 44.0704 68.4602 43.8806 66.8954C43.6514 65.0049 44.3417 63.119 45.7372 61.8232L48.3541 59.3934C49.2848 58.5292 50.1522 57.5994 50.9497 56.611L51.9474 55.3743Z"
            fill="#56CCF2"
          />
          <path
            d="M22.7217 57.7802C23.3684 56.9488 24.6967 57.3048 24.8411 58.3481L25.2022 60.9577L26.5437 65.6739C27.0022 67.2858 26.6869 69.0305 25.7027 70.387C24.8635 71.5435 23.5931 72.3298 22.1823 72.5563C20.6637 72.8002 19.1133 72.3847 17.9201 71.4143C16.8116 70.5127 16.1045 69.1965 15.9561 67.7754C15.7819 66.1085 16.3812 64.44 17.5843 63.2732L21.1041 59.8596L22.7217 57.7802Z"
            fill="#56CCF2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M64.4342 18.5938C63.344 14.6001 60.6954 11.2051 57.0644 9.14735L56.9366 9.07492C53.3056 7.01715 48.986 6.46306 44.9174 7.53318C40.7991 8.61635 37.2774 11.2743 35.1356 14.9156L34.3501 16.2511C33.686 15.9204 32.9854 15.654 32.2576 15.459C29.4348 14.7025 26.4315 15.0804 23.9092 16.5099C21.3869 17.9393 19.5518 20.3034 18.8078 23.0813C18.7097 23.4475 18.6316 23.817 18.5734 24.1882C15.9959 24.5671 13.5867 25.7533 11.7056 27.5998L11.6235 27.6804C9.30573 29.9555 8 33.0669 8 36.3146C8 39.5624 9.30573 42.6737 11.6235 44.9488L11.7056 45.0295C14.0191 47.3004 17.1314 48.5726 20.3731 48.5726H23.2129L23.2203 48.5727H29.2037C29.579 47.6502 30.1424 46.8031 30.8729 46.0948L35.566 41.5433L37.1228 39.542C38.209 38.1456 40.44 38.7434 40.6825 40.4958L41.0301 43.0074L42.6131 48.5727H56.7813C56.7869 48.5727 56.7925 48.5725 56.798 48.5723C56.8024 48.5721 56.8067 48.5719 56.8111 48.5715H59.6269C62.8686 48.5715 65.9809 47.2993 68.2944 45.0284L68.3765 44.9478C70.6943 42.6727 72 39.5613 72 36.3136C72 33.0658 70.6943 29.9545 68.3765 27.6794L68.2944 27.5987C67.261 26.5844 66.0682 25.7693 64.7757 25.1778C65.132 23.0011 65.0248 20.7573 64.4342 18.5938Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.1228 39.542C38.209 38.1456 40.44 38.7434 40.6825 40.4958L41.0301 43.0074L42.8187 49.2957C43.43 51.4449 43.0097 53.7712 41.6974 55.5798C40.5785 57.1218 38.8846 58.1702 37.0035 58.4722C34.9788 58.7974 32.9116 58.2434 31.3207 56.9495C29.8426 55.7474 28.8999 53.9925 28.7019 52.0976C28.4697 49.8752 29.2688 47.6504 30.8729 46.0948L35.566 41.5433L37.1228 39.542Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51.9475 55.3743C52.5782 54.5926 53.837 54.9298 53.9923 55.9222L54.1031 56.6297C54.3894 58.4586 54.8066 60.2645 55.3517 62.0336L56.1461 64.6122C56.7068 66.4322 56.3616 68.4106 55.2178 69.9332C54.2711 71.1934 52.8626 72.026 51.3021 72.2481L51.1148 72.2747C49.388 72.5204 47.6358 72.0509 46.2632 70.9747L46.1143 70.858C44.8739 69.8855 44.0705 68.4601 43.8807 66.8954C43.6514 65.0049 44.3417 63.1189 45.7373 61.8232L47.7146 59.9872C49.0711 58.7277 50.3354 57.3723 51.4978 55.9316L51.9475 55.3743Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21.5443 59.2939C22.6305 57.8975 24.8615 58.4953 25.104 60.2477L25.2022 60.9577L26.5437 65.6739C27.0022 67.2858 26.6869 69.0305 25.7027 70.387C24.8636 71.5435 23.5931 72.3298 22.1823 72.5563C20.6638 72.8002 19.1133 72.3847 17.9202 71.4143C16.8117 70.5127 16.1046 69.1965 15.9561 67.7754C15.782 66.1085 16.3813 64.44 17.5843 63.2732L21.1042 59.8596L21.5443 59.2939Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.8729 46.0948C30.1424 46.8031 29.579 47.6502 29.2037 48.5727H23.2203L23.2129 48.5726H20.3731C17.1314 48.5726 14.0191 47.3004 11.7056 45.0295L11.6235 44.9488C9.30573 42.6737 8 39.5624 8 36.3146C8 33.0669 9.30573 29.9555 11.6235 27.6804L11.7056 27.5998C13.5867 25.7533 15.9959 24.5671 18.5734 24.1882C18.6316 23.817 18.7097 23.4475 18.8078 23.0813C19.5518 20.3034 21.3869 17.9393 23.9092 16.5099C26.4315 15.0804 29.4348 14.7025 32.2576 15.459C32.9854 15.654 33.686 15.9204 34.3501 16.2511L35.1356 14.9156C37.2774 11.2743 40.7991 8.61635 44.9174 7.53318C48.986 6.46306 53.3056 7.01715 56.9366 9.07492L57.0644 9.14735C60.6954 11.2051 63.344 14.6001 64.4342 18.5938C65.0248 20.7573 65.132 23.0011 64.7757 25.1778C66.0682 25.7693 67.261 26.5844 68.2944 27.5987L68.3765 27.6794C70.6943 29.9545 72 33.0658 72 36.3136C72 39.5613 70.6943 42.6727 68.3765 44.9478L68.2944 45.0284C65.9809 47.2993 62.8686 48.5715 59.6269 48.5715H56.8111C56.8067 48.5719 56.8024 48.5721 56.798 48.5723C56.7925 48.5725 56.7869 48.5727 56.7813 48.5727H42.6131L41.0301 43.0074M30.8729 46.0948L35.566 41.5433L37.1228 39.542C38.209 38.1456 40.44 38.7434 40.6825 40.4958L41.0301 43.0074M30.8729 46.0948C29.2688 47.6504 28.4697 49.8752 28.7019 52.0976C28.8999 53.9925 29.8426 55.7474 31.3207 56.9495C32.9116 58.2434 34.9788 58.7974 37.0035 58.4722C38.8846 58.1702 40.5785 57.1218 41.6974 55.5798C43.0097 53.7712 43.43 51.4449 42.8187 49.2957L41.0301 43.0074M47.7146 59.9872L45.7373 61.8232C44.3417 63.1189 43.6514 65.0049 43.8807 66.8954C44.0705 68.4601 44.8739 69.8855 46.1143 70.858L46.2632 70.9747C47.6358 72.0509 49.388 72.5204 51.1148 72.2747L51.3021 72.2481C52.8626 72.026 54.2711 71.1934 55.2178 69.9332C56.3616 68.4106 56.7068 66.4322 56.1461 64.6122L55.3517 62.0336C54.8066 60.2645 54.3894 58.4586 54.1031 56.6297L53.9923 55.9222C53.837 54.9298 52.5782 54.5926 51.9475 55.3743L51.4978 55.9316C50.3354 57.3723 49.0711 58.7277 47.7146 59.9872ZM25.2022 60.9577L26.5437 65.6739C27.0022 67.2858 26.6869 69.0305 25.7027 70.387C24.8636 71.5435 23.5931 72.3298 22.1823 72.5563C20.6638 72.8002 19.1133 72.3847 17.9202 71.4143C16.8117 70.5127 16.1046 69.1965 15.9561 67.7754C15.782 66.1085 16.3813 64.44 17.5843 63.2732L21.1042 59.8596L21.5443 59.2939C22.6305 57.8975 24.8615 58.4953 25.104 60.2477L25.2022 60.9577Z"
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
            d="M26.6939 50.5726C26.6467 51.1456 26.6522 51.7256 26.7127 52.3054C26.9652 54.7221 28.1664 56.962 30.0587 58.5011C32.0916 60.1545 34.7333 60.8624 37.3206 60.4469C39.729 60.0602 41.8891 58.721 43.3161 56.7543C44.6202 54.9571 45.2336 52.7576 45.0676 50.5726H56.7813C56.8056 50.5726 56.83 50.5723 56.8545 50.5715H59.6269C63.3926 50.5715 67.008 49.0936 69.6954 46.4557L69.7775 46.375C72.4784 43.7239 74 40.0982 74 36.3136C74 32.529 72.4784 28.9033 69.7776 26.2521L69.6954 26.1714C68.855 25.3465 67.9237 24.635 66.9256 24.0466C67.083 22.0533 66.8997 20.0312 66.3636 18.0671C65.1318 13.5548 62.1407 9.72537 58.0505 7.40734L57.9227 7.33491C53.8338 5.01762 48.9773 4.39732 44.4086 5.59894C39.8433 6.79972 35.9247 9.72521 33.5047 13.7453C33.2644 13.6658 33.0211 13.593 32.7753 13.5271C29.4501 12.636 25.9062 13.0792 22.9231 14.7699C19.963 16.4474 17.7954 19.2178 16.8978 22.4831C14.4306 23.098 12.1491 24.362 10.3046 26.1725L10.2225 26.2531C7.52159 28.9043 6 32.53 6 36.3146C6 40.0992 7.52158 43.7249 10.2224 46.3761L10.3046 46.4567C12.992 49.0947 16.6074 50.5726 20.3731 50.5726H23.2129L23.2203 50.5726H26.6939ZM55.9505 10.8149C52.7774 9.01666 48.9947 8.52877 45.4261 9.46737C41.8139 10.4175 38.7312 12.7474 36.8595 15.9295L36.074 17.2651C35.5413 18.1707 34.3988 18.5098 33.4584 18.0414C32.9132 17.7698 32.3379 17.551 31.7399 17.3908C29.4195 16.7689 26.9567 17.0816 24.8953 18.2499C22.8352 19.4174 21.3438 21.3433 20.7397 23.5987C20.66 23.8963 20.5965 24.1966 20.5492 24.4983C20.4134 25.3634 19.7307 26.0396 18.8643 26.1669C16.7034 26.4846 14.6836 27.4791 13.1067 29.0271L13.0245 29.1077C11.0899 31.0067 10 33.6038 10 36.3146C10 39.0255 11.0899 41.6225 13.0245 43.5215L13.1067 43.6022C15.0462 45.506 17.6554 46.5726 20.3731 46.5726H23.2129L23.2203 46.5726H27.9703C28.2044 46.1784 28.4684 45.8003 28.7612 45.4421C28.9845 45.169 29.2244 44.9074 29.4805 44.659L34.0732 40.2049L36.7216 36.8003C38.4545 34.5726 42.0139 35.5263 42.4008 38.322L42.992 42.5947L44.1235 46.5726H56.7442C56.7665 46.5719 56.7888 46.5715 56.8111 46.5715H59.6269C62.3446 46.5715 64.9538 45.5049 66.8933 43.6011L66.9755 43.5205C68.9101 41.6215 70 39.0244 70 36.3136C70 33.6027 68.9101 31.0057 66.9755 29.1067L66.8933 29.026C66.027 28.1756 65.0271 27.4923 63.9435 26.9964C63.1238 26.6213 62.6564 25.7443 62.802 24.8547C63.1125 22.9576 63.0188 21.0037 62.5048 19.1205C61.5562 15.6454 59.25 12.6848 56.0783 10.8873L55.9505 10.8149ZM39.1064 43.5546C39.0809 43.465 39.0617 43.3738 39.049 43.2815L38.7014 40.77L37.1446 42.7713C37.0874 42.8448 37.0252 42.9142 36.9584 42.979L32.2652 47.5305C31.1057 48.655 30.5221 50.2722 30.6911 51.8898C30.8345 53.2628 31.5189 54.5327 32.5826 55.3979C33.7315 56.3323 35.2243 56.7323 36.6864 56.4975C38.0402 56.2801 39.2679 55.5225 40.0786 54.4052C41.0338 53.0888 41.3369 51.3964 40.895 49.8428L39.1064 43.5546Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.8222 58.0739C26.4353 55.2782 22.876 54.3245 21.1431 56.5522L19.6114 58.5212L16.1919 61.8375C14.5443 63.4354 13.7296 65.7115 13.9669 67.9832C14.1699 69.9262 15.1354 71.7273 16.6582 72.9658C18.2934 74.2958 20.4183 74.8652 22.4994 74.531C24.4375 74.2198 26.1742 73.1427 27.3215 71.5615C28.6628 69.7129 29.0954 67.3343 28.4674 65.1267L27.1642 60.545L26.8222 58.0739ZM23.1229 60.5218L22.6828 61.0876C22.6256 61.1611 22.5634 61.2305 22.4966 61.2953L18.9767 64.7089C18.2182 65.4445 17.8343 66.5055 17.9453 67.5675C18.0392 68.4668 18.4879 69.298 19.1822 69.8627C19.9333 70.4736 20.9093 70.7351 21.8652 70.5816C22.7487 70.4397 23.5529 69.9442 24.0839 69.2124C24.711 68.3481 24.9091 67.2373 24.62 66.221L23.2786 61.5048C23.2531 61.4153 23.2339 61.3241 23.2211 61.2318L23.1229 60.5218Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.9682 55.6128C55.5445 52.9062 52.1112 51.9863 50.391 54.1184L49.3932 55.3551C48.6559 56.2689 47.8538 57.1287 46.9933 57.9277L44.3764 60.3575C42.5113 62.0892 41.5888 64.6096 41.8952 67.1362C42.1489 69.2273 43.2226 71.1322 44.8803 72.4319L45.0293 72.5487C46.8306 73.961 49.1303 74.5771 51.3965 74.2547L51.5838 74.2281C53.6693 73.9314 55.5516 72.8186 56.8169 71.1344C58.3455 69.0996 58.8068 66.4556 58.0574 64.0233L57.006 60.6106C56.6603 59.4884 56.3956 58.3428 56.214 57.1827L55.9682 55.6128ZM52.3114 58.1056C51.5079 59.0798 50.6406 59.9996 49.715 60.859L47.0981 63.2888C46.1721 64.1486 45.714 65.4001 45.8661 66.6546C45.9921 67.6929 46.5252 68.6387 47.3483 69.284L47.4972 69.4008C48.441 70.1407 49.6458 70.4635 50.833 70.2946L51.0203 70.268C52.0559 70.1207 52.9905 69.5681 53.6188 68.7319C54.3778 67.7215 54.6068 66.4087 54.2347 65.201L53.1833 61.7883C52.8115 60.5813 52.5202 59.351 52.3114 58.1056Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreRain1 = forwardRef((props, ref) => {
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

CoreRain1.displayName = 'CoreRain1'

export default CoreRain1
