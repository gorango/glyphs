
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreGlobeStandWest = {
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
            d="M53 71.4373L37 71.4373L21 71.4373"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M37 71.4373V65"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M23.9904 52.9337L20.261 58.1217C19.9386 58.5702 20.0399 59.1966 20.4991 59.5036C24.237 62.0031 28.5319 63.6411 33.0742 64.2392C40.848 65.2626 48.71 63.156 54.9306 58.3827C61.1512 53.6095 65.2209 46.5606 66.2443 38.7868C67.2678 31.013 65.1612 23.151 60.3879 16.9304C57.5988 13.2956 54.0327 10.3951 49.9989 8.40767C49.5035 8.16357 48.9104 8.38904 48.6832 8.89245L46.0535 14.7194"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M39.894 13.1463C45.7244 13.9139 51.011 16.9662 54.591 21.6316C58.1709 26.2971 59.7509 32.1935 58.9833 38.0239C58.2157 43.8543 55.1634 49.1409 50.498 52.7208C45.8325 56.3008 39.936 57.8807 34.1057 57.1132C28.2753 56.3456 22.9887 53.2933 19.4087 48.6279C15.8288 43.9624 14.2489 38.0659 15.0164 32.2356C15.784 26.4052 18.8363 21.1186 23.5017 17.5386C28.1672 13.9587 34.0637 12.3787 39.894 13.1463Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M29.1749 14.3819C29.5026 14.6862 29.7635 15.064 29.9317 15.4933L30.165 16.0888C30.5602 17.0976 30.55 18.2202 30.1366 19.2217L29.5818 20.5656C28.9776 22.0292 28.8324 23.6418 29.1655 25.1897L30.041 29.2596C30.2716 30.3311 30.8599 31.2923 31.7092 31.9851L32.5482 32.6695C32.9228 32.975 33.1725 33.4073 33.2498 33.8845C33.4059 34.8469 32.8368 35.7793 31.9095 36.0804L31.8025 36.1151C31.2845 36.2833 30.8517 36.6456 30.595 37.1259L29.7063 38.788C29.0923 39.9364 28.8618 41.2511 29.0484 42.5398C29.2448 43.896 28.979 45.2789 28.2938 46.4656L26.5568 49.4741C26.1997 50.0926 25.9574 50.7706 25.8414 51.4753L25.5986 52.9509C25.5669 53.1433 25.5929 53.3408 25.6733 53.5185C26.0049 54.2514 27.0265 54.3018 27.4287 53.6052L28.8187 51.1976C29.1325 50.6541 29.6456 50.2542 30.2492 50.0824L39.126 47.5567C39.8825 47.3414 40.5255 46.8401 40.9187 46.159L41.0933 45.8566C41.6535 44.8863 41.5157 43.6642 40.7536 42.843C40.4406 42.5057 40.2245 42.09 40.1283 41.64L39.9974 41.028C39.7271 39.764 38.9611 38.6613 37.871 37.9668L37.4817 37.7187C36.382 37.0181 35.613 35.9018 35.3501 34.6245L35.2362 34.0707C35.1274 33.5419 34.8712 33.0546 34.4973 32.6651L33.7934 31.9321C33.328 31.4474 33.239 30.7135 33.575 30.1315C33.9919 29.4094 34.9153 29.162 35.6374 29.5789L36.8078 30.2546C37.0187 30.3764 37.1646 30.5856 37.2059 30.8257C37.3416 31.6134 38.4091 31.7614 38.754 31.0403L38.7727 31.0013C38.8757 30.7858 39.0663 30.6248 39.296 30.5592L47.3361 28.2639C47.8871 28.1066 48.3082 27.6607 48.4336 27.1015C48.5687 26.4998 48.3378 25.8748 47.8439 25.5054L47.0415 24.9052C46.876 24.7814 46.7569 24.6056 46.7035 24.4059C46.5075 23.6733 45.5595 23.4785 45.0904 24.0743L44.7092 24.5586C44.3606 25.0015 43.7554 25.1505 43.2409 24.9203L42.5952 24.6312C41.9915 24.361 41.547 23.8264 41.3915 23.1835L41.1501 22.1857C40.9796 21.481 41.3756 20.7627 42.0625 20.5306C42.6535 20.331 43.041 19.7644 43.0128 19.1413L42.9948 18.7445C42.9704 18.2065 42.7222 17.7033 42.3101 17.3567L37.2116 13.0674C37.1654 13.0285 37.1187 12.9902 37.0717 12.9524"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47.6236 16.9992C46.7646 17.1452 46.2565 18.0432 46.5736 18.8547L48.0437 22.6168C48.1165 22.8032 48.253 22.9578 48.4289 23.0532C49.0312 23.38 49.7521 22.8938 49.6749 22.213L49.2199 18.1996C49.131 17.4154 48.4016 16.8669 47.6236 16.9992Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44.7415 14.3449C43.2235 13.7799 41.637 13.3788 40.0073 13.1562C40.0502 13.3129 40.1373 13.4586 40.2654 13.5732L42.5578 15.624C43.067 16.0795 43.8387 16.0748 44.3422 15.6131C44.7156 15.2707 44.8388 14.7844 44.7415 14.3449Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M54.5987 21.6274C54.5277 21.5349 54.4561 21.443 54.3838 21.3518C54.242 21.4592 54.1107 21.5842 53.9934 21.7261C53.5285 22.2884 53.3531 23.0356 53.519 23.7461L53.7649 24.7986C53.9205 25.4646 53.8036 26.1651 53.4401 26.7445C53.1027 27.2823 52.9783 27.9345 53.0883 28.5598C53.3562 30.0818 54.8685 31.0772 56.3649 30.6911L58.6067 30.1128"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M39.5 65.1296C39.5 63.7489 38.3807 62.6296 37 62.6296C35.6193 62.6296 34.5 63.7489 34.5 65.1296H39.5ZM53 74.067C54.3807 74.067 55.5 72.9477 55.5 71.567C55.5 70.1863 54.3807 69.067 53 69.067V74.067ZM21 69.067C19.6193 69.067 18.5 70.1863 18.5 71.567C18.5 72.9477 19.6193 74.067 21 74.067L21 69.067ZM39.5 71.567V65.1296H34.5V71.567H39.5ZM37 74.067L53 74.067V69.067L37 69.067V74.067ZM37 69.067L21 69.067L21 74.067L37 74.067L37 69.067Z"
            fill="currentColor"
          />
          <path
            d="M20.261 58.2513L18.2311 56.7921H18.2311L20.261 58.2513ZM20.4991 59.6332L21.8887 57.555L21.8887 57.555L20.4991 59.6332ZM23.9904 53.0633L25.4496 51.0333L23.4197 49.5741L21.9605 51.604L23.9904 53.0633ZM34.0389 57.0429L33.7125 59.5215H33.7125L34.0389 57.0429ZM58.9164 37.9536L61.3951 38.2799V38.2799L58.9164 37.9536ZM54.5241 21.5613L52.5408 23.0832L54.5241 21.5613ZM46.0535 14.8489L43.7748 13.8206L42.7465 16.0992L45.0252 17.1276L46.0535 14.8489ZM48.6832 9.02204L50.9619 10.0504L48.6832 9.02204ZM49.9989 8.53726L51.1039 6.29468L49.9989 8.53726ZM60.3879 17.06L58.4046 18.5819L60.3879 17.06ZM66.2443 38.9164L63.7657 38.5901V38.5901L66.2443 38.9164ZM54.9306 58.5123L56.4525 60.4957L54.9306 58.5123ZM33.0742 64.3687L32.7479 66.8474H32.7479L33.0742 64.3687ZM18.2311 56.7921C17.1162 58.3429 17.4287 60.5875 19.1094 61.7113L21.8887 57.555C22.6512 58.0648 22.761 59.0566 22.2909 59.7105L18.2311 56.7921ZM21.9605 51.604L18.2311 56.7921L22.2909 59.7105L26.0204 54.5225L21.9605 51.604ZM34.3652 54.5642C31.1183 54.1368 28.0615 52.9108 25.4496 51.0333L22.5312 55.0932C25.8065 57.4476 29.6403 58.9853 33.7125 59.5215L34.3652 54.5642ZM48.9093 50.6672C44.7698 53.8435 39.5382 55.2453 34.3652 54.5642L33.7125 59.5215C40.2003 60.3756 46.7616 58.6175 51.9531 54.6339L48.9093 50.6672ZM56.4378 37.6273C55.7568 42.8003 53.0487 47.4909 48.9093 50.6672L51.9531 54.6339C57.1445 50.6504 60.5409 44.7677 61.3951 38.2799L56.4378 37.6273ZM52.5408 23.0832C55.717 27.2226 57.1189 32.4543 56.4378 37.6273L61.3951 38.2799C62.2492 31.7922 60.4911 25.2309 56.5075 20.0394L52.5408 23.0832ZM45.0252 17.1276C47.957 18.4508 50.5471 20.4851 52.5408 23.0832L56.5075 20.0394C54.0071 16.7808 50.7585 14.2295 47.0819 12.5703L45.0252 17.1276ZM46.4045 7.99367L43.7748 13.8206L48.3322 15.8773L50.9619 10.0504L46.4045 7.99367ZM51.1039 6.29468C49.2902 5.40111 47.1901 6.2528 46.4045 7.99367L50.9619 10.0504C50.6306 10.7845 49.7168 11.1852 48.894 10.7798L51.1039 6.29468ZM62.3713 15.5381C59.3463 11.5958 55.4785 8.45008 51.1039 6.29468L48.894 10.7798C52.5868 12.5993 55.8513 15.2544 58.4046 18.5819L62.3713 15.5381ZM68.723 39.2427C69.8329 30.8115 67.5482 22.2847 62.3713 15.5381L58.4046 18.5819C62.7742 24.2765 64.7026 31.4737 63.7657 38.5901L68.723 39.2427ZM56.4525 60.4957C63.1992 55.3188 67.613 47.6739 68.723 39.2427L63.7657 38.5901C62.8288 45.7066 59.1033 52.1593 53.4087 56.5289L56.4525 60.4957ZM32.7479 66.8474C41.1791 67.9573 49.7059 65.6726 56.4525 60.4957L53.4087 56.5289C47.7142 60.8986 40.517 62.827 33.4005 61.8901L32.7479 66.8474ZM19.1094 61.7113C23.1633 64.4221 27.8214 66.1988 32.7479 66.8474L33.4005 61.8901C29.2423 61.3427 25.3108 59.8432 21.8887 57.555L19.1094 61.7113Z"
            fill="currentColor"
          />
          <path
            d="M39.8941 13.1462C45.7245 13.9137 51.0111 16.966 54.5911 21.6314V21.6314C58.171 26.2969 59.7509 32.1934 58.9834 38.0237V38.0237C58.2158 43.8541 55.1635 49.1408 50.4981 52.7207V52.7207C45.8326 56.3006 39.9361 57.8806 34.1058 57.113V57.113C28.2754 56.3454 22.9888 53.2932 19.4088 48.6277V48.6277C15.8289 43.9623 14.2489 38.0658 15.0165 32.2354V32.2354C15.7841 26.405 18.8364 21.1184 23.5018 17.5385V17.5385C28.1673 13.9585 34.0637 12.3786 39.8941 13.1462V13.1462Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.7415 14.3448C43.2235 13.7798 41.637 13.3787 40.0073 13.1562C40.0502 13.3129 40.1373 13.4586 40.2654 13.5732L42.5578 15.624C43.067 16.0795 43.8387 16.0748 44.3422 15.613C44.7156 15.2707 44.8388 14.7844 44.7415 14.3448ZM29.1748 14.3818C31.6888 13.4326 34.3647 12.9445 37.0716 12.9524C37.1186 12.9902 37.1652 13.0285 37.2114 13.0674L42.31 17.3566C42.7221 17.7033 42.9703 18.2065 42.9947 18.7444L43.0127 19.1413C43.0409 19.7644 42.6534 20.331 42.0624 20.5306C41.3755 20.7627 40.9795 21.4809 41.15 22.1857L41.3914 23.1834C41.5469 23.8263 41.9914 24.3609 42.5951 24.6312L43.2408 24.9202C43.7553 25.1505 44.3604 25.0014 44.7091 24.5586L45.0903 24.0743C45.5594 23.4784 46.5073 23.6733 46.7034 24.4058C46.7568 24.6055 46.8758 24.7814 47.0414 24.9052L47.8438 25.5054C48.3376 25.8748 48.5685 26.4997 48.4335 27.1015C48.308 27.6606 47.887 28.1065 47.336 28.2638L39.2959 30.5592C39.0662 30.6248 38.8756 30.7857 38.7725 31.0012L38.7539 31.0402C38.409 31.7614 37.3415 31.6134 37.2058 30.8256C37.1645 30.5856 37.0186 30.3764 36.8077 30.2546L35.6373 29.5789C34.9152 29.1619 33.9918 29.4094 33.5749 30.1315C33.2389 30.7134 33.3279 31.4474 33.7933 31.9321L34.4971 32.6651C34.8711 33.0546 35.1272 33.5418 35.2361 34.0707L35.35 34.6245C35.6128 35.9017 36.3819 37.018 37.4816 37.7187L37.8709 37.9667C38.961 38.6612 39.727 39.764 39.9973 41.0279L40.1282 41.64C40.2244 42.09 40.4405 42.5056 40.7535 42.843C41.5156 43.6642 41.6534 44.8863 41.0932 45.8566L40.9186 46.1589C40.5253 46.8401 39.8824 47.3414 39.1259 47.5566L30.249 50.0824C29.6454 50.2541 29.1324 50.6541 28.8186 51.1976L27.4286 53.6052C27.0264 54.3018 26.0047 54.2513 25.6732 53.5184C25.5928 53.3408 25.5668 53.1433 25.5984 52.9509L25.8413 51.4753C25.9572 50.7705 26.1996 50.0926 26.5567 49.4741L28.2937 46.4656C28.9788 45.2788 29.2446 43.896 29.0483 42.5398C28.8617 41.251 29.0922 39.9364 29.7062 38.788L30.5948 37.1258C30.8516 36.6455 31.2844 36.2833 31.8024 36.1151L31.9093 36.0804C32.8366 35.7793 33.4058 34.8469 33.2497 33.8845C33.1723 33.4073 32.9227 32.975 32.5481 32.6694L31.7091 31.9851C30.8598 31.2923 30.2715 30.3311 30.0409 29.2596L29.1653 25.1897C28.8323 23.6417 28.9775 22.0291 29.5817 20.5656L30.1365 19.2217C30.5499 18.2202 30.5601 17.0976 30.1649 16.0887L29.9316 15.4933C29.7634 15.064 29.5025 14.6862 29.1748 14.3818ZM54.3836 21.3517C54.4559 21.443 54.5276 21.5348 54.5986 21.6273C56.5434 24.1618 57.8979 27.0596 58.6065 30.1127L56.3647 30.6911C54.8683 31.0771 53.356 30.0818 53.0882 28.5597C52.9781 27.9344 53.1025 27.2822 53.4399 26.7444C53.8034 26.1651 53.9203 25.4645 53.7647 24.7985L53.5189 23.7461C53.3529 23.0356 53.5284 22.2884 53.9932 21.7261C54.1106 21.5842 54.2418 21.4592 54.3836 21.3517ZM47.6234 16.9991C46.7645 17.1451 46.2563 18.0432 46.5734 18.8547L48.0435 22.6168C48.1164 22.8031 48.2528 22.9577 48.4287 23.0532C49.031 23.3799 49.7519 22.8938 49.6747 22.2129L49.2197 18.1995C49.1308 17.4153 48.4014 16.8669 47.6234 16.9991Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M39 65.1296C39 64.0251 38.1046 63.1296 37 63.1296C35.8954 63.1296 35 64.0251 35 65.1296H39ZM53 73.567C54.1046 73.567 55 72.6715 55 71.567C55 70.4624 54.1046 69.567 53 69.567V73.567ZM21 69.567C19.8954 69.567 19 70.4624 19 71.567C19 72.6715 19.8954 73.567 21 73.567L21 69.567ZM39 71.567V65.1296H35V71.567H39ZM37 73.567L53 73.567V69.567L37 69.567V73.567ZM37 69.567L21 69.567L21 73.567L37 73.567V69.567Z"
            fill="#828282"
          />
          <path
            d="M20.261 58.2513L18.6371 57.0839H18.6371L20.261 58.2513ZM20.4991 59.6332L21.6108 57.9706L21.6108 57.9706L20.4991 59.6332ZM23.9904 53.0633L25.1578 51.4393L23.5339 50.2719L22.3665 51.8959L23.9904 53.0633ZM34.0389 57.0429L34.2999 55.06H34.2999L34.0389 57.0429ZM50.4312 52.6505L49.2136 51.0638H49.2136L50.4312 52.6505ZM58.9164 37.9536L56.9336 37.6926L56.9335 37.6926L58.9164 37.9536ZM54.5241 21.5613L52.9374 22.7788L54.5241 21.5613ZM46.0535 14.8489L44.2306 14.0262L43.4079 15.8492L45.2308 16.6719L46.0535 14.8489ZM48.6832 9.02203L50.5062 9.84473L48.6832 9.02203ZM49.9989 8.53726L49.115 10.3313L49.9989 8.53726ZM60.3879 17.06L61.9746 15.8425L60.3879 17.06ZM66.2443 38.9164L64.2615 38.6554V38.6554L66.2443 38.9164ZM54.9306 58.5123L53.7131 56.9256L54.9306 58.5123ZM33.0742 64.3687L33.3353 62.3858H33.3353L33.0742 64.3687ZM18.6371 57.0839C17.6807 58.4143 17.951 60.3352 19.3874 61.2957L21.6108 57.9706C22.1289 58.3171 22.1965 58.9852 21.885 59.4187L18.6371 57.0839ZM22.3665 51.8959L18.6371 57.0839L21.885 59.4187L25.6144 54.2306L22.3665 51.8959ZM34.2999 55.06C30.9705 54.6216 27.836 53.3645 25.1578 51.4393L22.8231 54.6872C26.032 56.9939 29.7881 58.5005 33.7778 59.0257L34.2999 55.06ZM49.2136 51.0638C44.969 54.3209 39.6044 55.7583 34.2999 55.06L33.7778 59.0257C40.1341 59.8626 46.5624 58.1401 51.6487 54.2373L49.2136 51.0638ZM56.9335 37.6926C56.2352 42.997 53.4583 47.8068 49.2136 51.0638L51.6487 54.2373C56.735 50.3344 60.0625 44.5709 60.8993 38.2147L56.9335 37.6926ZM52.9374 22.7788C56.1945 27.0235 57.6319 32.3881 56.9336 37.6926L60.8993 38.2147C61.7361 31.8584 60.0137 25.4301 56.1108 20.3438L52.9374 22.7788ZM45.2308 16.6719C48.2372 18.0287 50.8931 20.1147 52.9374 22.7788L56.1108 20.3438C53.6611 17.1513 50.4783 14.6516 46.8763 13.026L45.2308 16.6719ZM46.8602 8.19934L44.2306 14.0262L47.8765 15.6716L50.5062 9.84473L46.8602 8.19934ZM50.8829 6.7432C49.3329 5.97952 47.5342 6.70596 46.8602 8.19934L50.5062 9.84473C50.2866 10.3313 49.6741 10.6068 49.115 10.3313L50.8829 6.7432ZM61.9746 15.8425C58.9968 11.9617 55.1894 8.865 50.8829 6.7432L49.115 10.3313C52.876 12.1844 56.2008 14.8886 58.8012 18.2775L61.9746 15.8425ZM68.2272 39.1775C69.3199 30.8778 67.0708 22.4839 61.9746 15.8425L58.8012 18.2775C63.2516 24.0773 65.2157 31.4074 64.2615 38.6554L68.2272 39.1775ZM56.1482 60.099C62.7896 55.0029 67.1346 47.4772 68.2272 39.1775L64.2615 38.6554C63.3072 45.9033 59.5129 52.4753 53.7131 56.9256L56.1482 60.099ZM32.8132 66.3516C41.1129 67.4443 49.5067 65.1952 56.1482 60.099L53.7131 56.9256C47.9133 61.376 40.5832 63.3401 33.3353 62.3858L32.8132 66.3516ZM19.3873 61.2957C23.378 63.9642 27.9635 65.7132 32.8132 66.3516L33.3353 62.3858C29.1002 61.8283 25.096 60.3011 21.6108 57.9706L19.3873 61.2957Z"
            fill="#828282"
          />
          <path
            d="M39.8941 13.1462C45.7245 13.9137 51.0111 16.966 54.5911 21.6314C58.171 26.2969 59.7509 32.1934 58.9834 38.0237C58.2158 43.8541 55.1635 49.1408 50.4981 52.7207C45.8326 56.3006 39.9361 57.8806 34.1058 57.113C28.2754 56.3454 22.9888 53.2932 19.4088 48.6277C15.8289 43.9623 14.2489 38.0658 15.0165 32.2354C15.7841 26.405 18.8364 21.1184 23.5018 17.5385C28.1673 13.9585 34.0637 12.3786 39.8941 13.1462Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.7414 14.3448C43.2235 13.7798 41.637 13.3787 40.0073 13.1562C40.0502 13.3129 40.1373 13.4585 40.2654 13.5731L42.5578 15.6239C43.067 16.0795 43.8386 16.0748 44.3422 15.613C44.7156 15.2706 44.8388 14.7844 44.7414 14.3448ZM29.1748 14.3818C31.6888 13.4326 34.3646 12.9445 37.0716 12.9523C37.1186 12.9901 37.1652 13.0285 37.2114 13.0673L42.31 17.3566C42.7221 17.7033 42.9703 18.2065 42.9947 18.7444L43.0127 19.1413C43.0409 19.7644 42.6534 20.331 42.0624 20.5306C41.3755 20.7626 40.9795 21.4809 41.15 22.1857L41.3913 23.1834C41.5469 23.8263 41.9914 24.3609 42.5951 24.6311L43.2408 24.9202C43.7553 25.1505 44.3604 25.0014 44.7091 24.5585L45.0903 24.0743C45.5594 23.4784 46.5073 23.6732 46.7034 24.4058C46.7568 24.6055 46.8758 24.7814 47.0413 24.9052L47.8438 25.5054C48.3376 25.8747 48.5685 26.4997 48.4335 27.1015C48.308 27.6606 47.887 28.1065 47.336 28.2638L39.2959 30.5592C39.0662 30.6247 38.8756 30.7857 38.7725 31.0012L38.7539 31.0402C38.409 31.7613 37.3415 31.6133 37.2058 30.8256C37.1645 30.5856 37.0186 30.3763 36.8077 30.2546L35.6373 29.5788C34.9152 29.1619 33.9918 29.4093 33.5748 30.1315C33.2389 30.7134 33.3279 31.4474 33.7933 31.9321L34.4971 32.6651C34.8711 33.0545 35.1272 33.5418 35.2361 34.0706L35.35 34.6245C35.6128 35.9017 36.3818 37.018 37.4816 37.7187L37.8709 37.9667C38.961 38.6612 39.727 39.7639 39.9973 41.0279L40.1282 41.64C40.2244 42.09 40.4405 42.5056 40.7535 42.8429C41.5156 43.6642 41.6533 44.8863 41.0932 45.8565L40.9186 46.1589C40.5253 46.8401 39.8823 47.3414 39.1259 47.5566L30.249 50.0823C29.6454 50.2541 29.1324 50.6541 28.8186 51.1976L27.4286 53.6051C27.0264 54.3018 26.0047 54.2513 25.6731 53.5184C25.5928 53.3408 25.5668 53.1433 25.5984 52.9508L25.8413 51.4752C25.9572 50.7705 26.1996 50.0926 26.5567 49.4741L28.2937 46.4655C28.9788 45.2788 29.2446 43.896 29.0483 42.5398C28.8617 41.251 29.0922 39.9363 29.7062 38.788L30.5948 37.1258C30.8516 36.6455 31.2844 36.2833 31.8024 36.1151L31.9093 36.0803C32.8366 35.7792 33.4058 34.8468 33.2497 33.8845C33.1723 33.4073 32.9227 32.975 32.5481 32.6694L31.7091 31.9851C30.8598 31.2923 30.2714 30.3311 30.0409 29.2595L29.1653 25.1896C28.8323 23.6417 28.9775 22.0291 29.5817 20.5655L30.1364 19.2216C30.5499 18.2201 30.5601 17.0975 30.1648 16.0887L29.9316 15.4932C29.7634 15.0639 29.5025 14.6862 29.1748 14.3818ZM54.3836 21.3517C54.4559 21.4429 54.5276 21.5348 54.5986 21.6273C56.5433 24.1618 57.8979 27.0596 58.6065 30.1127L56.3647 30.691C54.8683 31.0771 53.356 30.0818 53.0881 28.5597C52.9781 27.9344 53.1025 27.2822 53.4399 26.7444C53.8034 26.165 53.9203 25.4645 53.7647 24.7985L53.5188 23.746C53.3529 23.0356 53.5284 22.2884 53.9932 21.726C54.1105 21.5841 54.2418 21.4591 54.3836 21.3517ZM47.6234 16.9991C46.7645 17.1451 46.2563 18.0431 46.5734 18.8547L48.0435 22.6167C48.1163 22.8031 48.2528 22.9577 48.4287 23.0531C49.031 23.3799 49.7519 22.8937 49.6747 22.2129L49.2197 18.1995C49.1308 17.4153 48.4014 16.8668 47.6234 16.9991Z"
            fill="#6FCF97"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M20.4992 59.6334C20.04 59.3264 19.9387 58.7 20.2611 58.2516L23.9905 53.0636C26.9341 55.1795 30.3794 56.5614 34.0389 57.0432C39.8693 57.8107 45.7658 56.2308 50.4313 52.6508C55.0967 49.0709 58.149 43.7843 58.9165 37.9539C59.6841 32.1235 58.1042 26.2271 54.5242 21.5616C52.2772 18.6333 49.3578 16.3405 46.0536 14.8492L48.6833 9.02233C48.9105 8.51892 49.5036 8.29346 49.999 8.53756C54.0328 10.525 57.5989 13.4254 60.388 17.0603C65.1613 23.2809 67.2679 31.1429 66.2444 38.9167C65.221 46.6905 61.1513 53.7394 54.9307 58.5126C48.7101 63.2859 40.8481 65.3925 33.0743 64.369C28.532 63.771 24.2371 62.133 20.4992 59.6334Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.8943 13.1464C45.7246 13.914 51.0113 16.9662 54.5912 21.6317C58.1711 26.2971 59.7511 32.1936 58.9835 38.024C58.2159 43.8544 55.1637 49.141 50.4982 52.7209C45.8328 56.3009 39.9363 57.8808 34.1059 57.1132C28.2756 56.3456 22.9889 53.2934 19.409 48.628C15.8291 43.9625 14.2491 38.066 15.0167 32.2356C15.7843 26.4053 18.8365 21.1186 23.502 17.5387C28.1674 13.9588 34.0639 12.3788 39.8943 13.1464Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44.7417 14.3451C43.2238 13.7801 41.6372 13.379 40.0076 13.1565C40.0504 13.3132 40.1375 13.4588 40.2656 13.5734L42.558 15.6242C43.0672 16.0798 43.8389 16.0751 44.3425 15.6133C44.7159 15.2709 44.839 14.7846 44.7417 14.3451Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29.1751 14.3821C31.6891 13.4329 34.3649 12.9448 37.0718 12.9526C37.1188 12.9904 37.1655 13.0288 37.2117 13.0676L42.3102 17.3569C42.7223 17.7036 42.9706 18.2068 42.9949 18.7447L43.0129 19.1416C43.0411 19.7647 42.6536 20.3312 42.0627 20.5309C41.3757 20.7629 40.9797 21.4812 41.1502 22.186L41.3916 23.1837C41.5471 23.8266 41.9916 24.3612 42.5953 24.6314L43.2411 24.9205C43.7555 25.1508 44.3607 25.0017 44.7093 24.5588L45.0905 24.0746C45.5596 23.4787 46.5076 23.6735 46.7036 24.4061C46.757 24.6058 46.8761 24.7817 47.0416 24.9055L47.844 25.5057C48.3379 25.875 48.5688 26.5 48.4337 27.1017C48.3083 27.6609 47.8872 28.1068 47.3362 28.2641L39.2961 30.5594C39.0664 30.625 38.8758 30.786 38.7728 31.0015L38.7541 31.0405C38.4093 31.7616 37.3417 31.6136 37.2061 30.8259C37.1647 30.5859 37.0188 30.3766 36.8079 30.2548L35.6375 29.5791C34.9154 29.1622 33.992 29.4096 33.5751 30.1318C33.2391 30.7137 33.3282 31.4476 33.7936 31.9324L34.4974 32.6654C34.8713 33.0548 35.1275 33.5421 35.2363 34.0709L35.3502 34.6248C35.6131 35.902 36.3821 37.0183 37.4819 37.719L37.8711 37.967C38.9613 38.6615 39.7272 39.7642 39.9975 41.0282L40.1284 41.6403C40.2246 42.0903 40.4407 42.5059 40.7537 42.8432C41.5158 43.6645 41.6536 44.8866 41.0934 45.8568L40.9188 46.1592C40.5256 46.8403 39.8826 47.3416 39.1261 47.5569L30.2493 50.0826C29.6457 50.2544 29.1326 50.6544 28.8188 51.1979L27.4288 53.6054C27.0266 54.3021 26.005 54.2516 25.6734 53.5187C25.593 53.341 25.567 53.1436 25.5987 52.9511L25.8415 51.4755C25.9575 50.7708 26.1998 50.0929 26.5569 49.4744L28.2939 46.4658C28.9791 45.2791 29.2449 43.8963 29.0485 42.54C28.8619 41.2513 29.0924 39.9366 29.7064 38.7883L30.5951 37.1261C30.8518 36.6458 31.2846 36.2836 31.8026 36.1154L31.9096 36.0806C32.8369 35.7795 33.406 34.8471 33.2499 33.8847C33.1726 33.4076 32.9229 32.9753 32.5483 32.6697L31.7093 31.9853C30.86 31.2926 30.2717 30.3314 30.0412 29.2598L29.1656 25.1899C28.8325 23.642 28.9777 22.0294 29.5819 20.5658L30.1367 19.2219C30.5501 18.2204 30.5603 17.0978 30.1651 16.089L29.9318 15.4935C29.7636 15.0642 29.5027 14.6865 29.1751 14.3821Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M54.3839 21.352C54.4562 21.4432 54.5278 21.5351 54.5988 21.6276C56.5436 24.1621 57.8981 27.0599 58.6067 30.113L56.365 30.6913C54.8685 31.0774 53.3562 30.082 53.0884 28.56C52.9784 27.9347 53.1028 27.2825 53.4402 26.7447C53.8036 26.1653 53.9205 25.4648 53.765 24.7988L53.5191 23.7463C53.3531 23.0359 53.5286 22.2886 53.9935 21.7263C54.1108 21.5844 54.242 21.4594 54.3839 21.352Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.6237 16.9994C46.7647 17.1454 46.2565 18.0434 46.5737 18.8549L48.0438 22.617C48.1166 22.8034 48.253 22.958 48.4289 23.0534C49.0312 23.3802 49.7522 22.894 49.675 22.2132L49.22 18.1998C49.1311 17.4156 48.4017 16.8671 47.6237 16.9994Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.0001 71.5672V65.1298M37.0001 71.5672H53.0001M37.0001 71.5672L21.0001 71.5672M20.2611 58.2516C19.9387 58.7 20.04 59.3264 20.4992 59.6334C24.2371 62.133 28.532 63.771 33.0743 64.369C40.8481 65.3925 48.7101 63.2859 54.9307 58.5126C61.1513 53.7394 65.221 46.6905 66.2444 38.9167C67.2679 31.1429 65.1613 23.2809 60.388 17.0603C57.5989 13.4254 54.0328 10.525 49.999 8.53756C49.5036 8.29346 48.9105 8.51892 48.6833 9.02233L46.0536 14.8492C49.3578 16.3405 52.2772 18.6333 54.5242 21.5616C58.1042 26.2271 59.6841 32.1235 58.9165 37.9539C58.149 43.7843 55.0967 49.0709 50.4313 52.6508C45.7658 56.2308 39.8693 57.8107 34.0389 57.0432C30.3794 56.5614 26.9341 55.1795 23.9905 53.0636L20.2611 58.2516ZM23.502 17.5387C28.1674 13.9588 34.0639 12.3788 39.8943 13.1464C45.7246 13.914 51.0113 16.9662 54.5912 21.6317C58.1711 26.2971 59.7511 32.1936 58.9835 38.024C58.2159 43.8544 55.1637 49.141 50.4982 52.7209C45.8328 56.3009 39.9363 57.8808 34.1059 57.1132C28.2756 56.3457 22.9889 53.2934 19.409 48.628C15.8291 43.9625 14.2491 38.066 15.0167 32.2356C15.7843 26.4053 18.8365 21.1186 23.502 17.5387ZM40.0076 13.1565C41.6372 13.379 43.2238 13.7801 44.7417 14.3451C44.839 14.7846 44.7159 15.2709 44.3425 15.6133C43.8389 16.0751 43.0672 16.0798 42.558 15.6242L40.2656 13.5734C40.1375 13.4588 40.0504 13.3132 40.0076 13.1565ZM29.1751 14.3821C31.6891 13.4329 34.3649 12.9448 37.0718 12.9526C37.1188 12.9904 37.1655 13.0288 37.2117 13.0676L42.3102 17.3569C42.7223 17.7036 42.9706 18.2068 42.9949 18.7447L43.0129 19.1416C43.0411 19.7647 42.6536 20.3312 42.0627 20.5309C41.3757 20.7629 40.9797 21.4812 41.1502 22.186L41.3916 23.1837C41.5471 23.8266 41.9916 24.3612 42.5953 24.6314L43.2411 24.9205C43.7555 25.1508 44.3607 25.0017 44.7093 24.5588L45.0905 24.0746C45.5596 23.4787 46.5076 23.6735 46.7036 24.4061C46.757 24.6058 46.8761 24.7817 47.0416 24.9055L47.844 25.5057C48.3379 25.875 48.5688 26.5 48.4337 27.1017C48.3083 27.6609 47.8872 28.1068 47.3362 28.2641L39.2961 30.5594C39.0664 30.625 38.8758 30.786 38.7728 31.0015L38.7541 31.0405C38.4093 31.7616 37.3417 31.6136 37.2061 30.8259C37.1647 30.5859 37.0188 30.3766 36.8079 30.2548L35.6375 29.5791C34.9154 29.1622 33.992 29.4096 33.5751 30.1318C33.2391 30.7137 33.3282 31.4476 33.7936 31.9324L34.4974 32.6654C34.8713 33.0548 35.1275 33.5421 35.2363 34.0709L35.3502 34.6248C35.6131 35.902 36.3821 37.0183 37.4819 37.719L37.8711 37.967C38.9613 38.6615 39.7272 39.7642 39.9975 41.0282L40.1284 41.6403C40.2246 42.0903 40.4407 42.5059 40.7537 42.8432C41.5158 43.6645 41.6536 44.8866 41.0934 45.8568L40.9188 46.1592C40.5256 46.8403 39.8826 47.3416 39.1261 47.5569L30.2493 50.0826C29.6457 50.2544 29.1326 50.6544 28.8188 51.1979L27.4288 53.6054C27.0266 54.3021 26.005 54.2516 25.6734 53.5187C25.593 53.341 25.567 53.1436 25.5987 52.9511L25.8415 51.4755C25.9575 50.7708 26.1998 50.0929 26.5569 49.4744L28.2939 46.4658C28.9791 45.2791 29.2449 43.8963 29.0485 42.54C28.8619 41.2513 29.0924 39.9366 29.7064 38.7883L30.5951 37.1261C30.8518 36.6458 31.2846 36.2836 31.8026 36.1154L31.9096 36.0806C32.8369 35.7795 33.406 34.8471 33.2499 33.8847C33.1726 33.4076 32.9229 32.9753 32.5483 32.6697L31.7093 31.9853C30.86 31.2926 30.2717 30.3314 30.0412 29.2598L29.1656 25.1899C28.8325 23.642 28.9777 22.0294 29.5819 20.5658L30.1367 19.2219C30.5501 18.2204 30.5603 17.0978 30.1651 16.089L29.9318 15.4935C29.7636 15.0642 29.5027 14.6865 29.1751 14.3821ZM54.3839 21.352C54.4562 21.4432 54.5278 21.5351 54.5988 21.6276C56.5436 24.1621 57.8981 27.0599 58.6067 30.113L56.365 30.6913C54.8685 31.0774 53.3562 30.082 53.0884 28.56C52.9784 27.9347 53.1028 27.2825 53.4402 26.7447C53.8036 26.1653 53.9205 25.4648 53.765 24.7988L53.5191 23.7463C53.3531 23.0359 53.5286 22.2886 53.9935 21.7263C54.1108 21.5844 54.242 21.4594 54.3839 21.352ZM46.5737 18.8549C46.2565 18.0434 46.7647 17.1454 47.6237 16.9994C48.4017 16.8671 49.131 17.4156 49.22 18.1998L49.675 22.2132C49.7522 22.894 49.0312 23.3802 48.4289 23.0534C48.253 22.958 48.1166 22.8034 48.0438 22.617L46.5737 18.8549Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.9746 15.8426C58.9967 11.9618 55.1893 8.86508 50.8828 6.74328C49.3328 5.97961 47.5341 6.70605 46.8602 8.19943L45.0037 12.3132C43.4456 11.767 41.8243 11.378 40.1627 11.1592C40.1126 11.1526 40.0624 11.1462 40.0123 11.1399C39.9631 11.1338 39.914 11.1294 39.865 11.1269C38.9816 11.0215 38.0972 10.9653 37.2156 10.9574C37.1709 10.9543 37.1259 10.9526 37.0809 10.9525C34.238 10.9438 31.4268 11.4369 28.7744 12.3977C28.7511 12.4061 28.728 12.4149 28.7051 12.4242C26.4187 13.2594 24.2511 14.4426 22.2842 15.9518C17.1979 19.8547 13.8704 25.6182 13.0336 31.9744C12.1967 38.3307 13.9192 44.759 17.822 49.8453C18.8423 51.175 19.9897 52.3844 21.2417 53.4606L18.637 57.084C17.6807 58.4143 17.9509 60.3353 19.3873 61.2958C23.378 63.9643 27.9634 65.7132 32.8131 66.3517C33.5417 66.4476 34.2711 66.5178 34.9999 66.5626V69.567L20.9999 69.567C19.8953 69.567 18.9999 70.4624 18.9999 71.567C18.9999 72.6716 19.8953 73.567 20.9999 73.567L52.9999 73.567C54.1044 73.567 54.9999 72.6716 54.9999 71.567C54.9999 70.4624 54.1044 69.567 52.9999 69.567H38.9999V66.5541C45.1829 66.1483 51.1598 63.9268 56.1481 60.0991C62.7895 55.003 67.1345 47.4773 68.2272 39.1776C69.3198 30.8778 67.0707 22.484 61.9746 15.8426ZM28.3387 16.9104C27.0673 17.5148 25.8533 18.2551 24.7193 19.1253C20.4746 22.3823 17.6977 27.1921 16.9993 32.4965C16.301 37.801 17.7384 43.1656 20.9955 47.4103C21.8796 48.5625 22.8781 49.6065 23.9699 50.5302L24.0432 50.0848C24.0823 49.847 24.1641 49.6183 24.2846 49.4096L27.2727 44.234L26.7816 40.8425C26.7205 40.4201 26.796 39.9893 26.9972 39.6129L29.2313 35.4343C29.475 34.9785 29.8857 34.6347 30.3773 34.4751L31.2501 34.1917L29.1329 32.4648C28.781 32.1777 28.5373 31.7795 28.4418 31.3356L26.6987 23.2336C26.6135 22.8373 26.6506 22.4244 26.8053 22.0498L28.6251 17.6414L28.3387 16.9104ZM29.596 53.8512C31.0973 54.4374 32.6754 54.8462 34.2998 55.0601C39.6043 55.7584 44.9689 54.3209 49.2136 51.0639C53.4582 47.8069 56.2351 42.9971 56.9335 37.6926C57.1577 35.9896 57.1618 34.2804 56.9561 32.6041L54.0888 33.3438C53.5488 33.4831 52.9753 33.3906 52.5064 33.0887C52.0376 32.7869 51.7161 32.303 51.6194 31.7538L50.946 27.9266C50.8602 27.4389 50.9583 26.9366 51.2215 26.5171L51.8706 25.4825L51.6779 24.6577C51.5277 24.9876 51.2879 25.2765 50.9761 25.4868C50.8593 25.5655 50.7361 25.6308 50.6086 25.6824C50.6705 25.9631 50.6723 26.2589 50.6069 26.5505L50.1814 28.4466C50.0211 29.1611 49.4831 29.7308 48.779 29.9319L40.3501 32.3382L39.4472 34.2263C39.097 34.9585 38.3427 35.4011 37.5434 35.361L37.5495 35.3907L40.6494 37.3656C41.1012 37.6534 41.4186 38.1103 41.5306 38.6341L42.1158 41.3709L43.5015 42.864C44.0984 43.5073 44.2063 44.4645 43.7675 45.2245L42.0374 48.2211C41.7776 48.6712 41.3527 49.0025 40.8527 49.1447L30.6347 52.0521L29.596 53.8512ZM55.5133 27.2029C55.7212 27.6947 55.9094 28.194 56.0774 28.6998L55.184 28.9303L55.0188 27.9911L55.5133 27.2029ZM60.5892 29.8491C60.5808 29.7864 60.5693 29.7235 60.5547 29.6606C59.7822 26.3323 58.3055 23.173 56.1853 20.4099C56.0938 20.2906 56.0012 20.1724 55.9077 20.0551C55.8675 20.0047 55.8251 19.9565 55.7808 19.9107C55.3588 19.3899 54.9168 18.8887 54.4564 18.408C52.7564 16.619 50.8012 15.1101 48.665 13.9243L50.0648 10.8225C53.4362 12.6494 56.4219 15.1769 58.8012 18.2776C63.2515 24.0774 65.2156 31.4075 64.2614 38.6555C63.3072 45.9034 59.5128 52.4754 53.713 56.9257C47.9133 61.376 40.5831 63.3401 33.3352 62.3859C29.4604 61.8758 25.7787 60.5539 22.511 58.5478L24.4804 55.8082C27.3139 57.5237 30.4971 58.6552 33.8446 59.096C40.2009 59.9328 46.6292 58.2103 51.7155 54.3075C56.8018 50.4046 60.1294 44.6411 60.9662 38.2849C61.34 35.4453 61.2031 32.5914 60.5892 29.8491ZM51.7199 21.3371L51.714 21.3442C51.6754 21.3908 51.6392 21.4389 51.6054 21.4883L51.5701 21.1775C51.6203 21.2304 51.6702 21.2836 51.7199 21.3371ZM32.1054 15.5593C33.4947 15.2118 34.9216 15.0121 36.3621 14.9665L40.9239 18.8043L40.2087 19.0459C39.2271 19.3775 38.6612 20.4039 38.9048 21.4109L39.694 24.673C39.8395 25.2748 40.2556 25.7753 40.8208 26.0283L43.2988 27.1375C43.4011 27.1833 43.5055 27.2198 43.6111 27.2474L38.3856 28.7392C38.3399 28.7523 38.2948 28.7669 38.2504 28.7831C38.2147 28.7592 38.178 28.7364 38.1406 28.7148L35.3297 27.092C34.3732 26.5397 33.15 26.8675 32.5977 27.824L32.0004 28.8586L30.7401 23.0008L32.6294 18.4241C32.8264 17.947 32.8312 17.4121 32.6429 16.9315L32.1054 15.5593ZM45.0453 20.4392L45.2249 20.8989C45.0289 21.0125 44.8508 21.1602 44.7002 21.3385C44.8843 21.0748 45.0049 20.7669 45.0453 20.4392ZM43.7004 22.0884C44.0333 21.9759 44.321 21.7819 44.545 21.5337L43.5093 22.8493L43.351 22.7784L43.2231 22.2496L43.7004 22.0884ZM45.6875 26.5491L45.7662 26.4491L45.9434 26.5816L45.5664 26.6892C45.6086 26.6447 45.649 26.598 45.6875 26.5491ZM32.3789 38.0307L33.9707 37.5139C34.1312 37.8363 34.3773 38.1125 34.6865 38.3094L37.7941 40.2893L38.3194 42.7459C38.3948 43.0983 38.564 43.4239 38.8092 43.6881L39.5653 44.5029L38.9786 45.5192L29.6105 48.1847L31.0835 45.6335C31.308 45.2446 31.3951 44.7914 31.3308 44.3469L30.8345 40.9195L32.3789 38.0307Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-globe-stand-west', CoreGlobeStandWest)
export default CoreGlobeStandWest
