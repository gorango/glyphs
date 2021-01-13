
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M16.1853 24.9633C16.9891 21.1818 22.02 19.0471 27.4221 20.1954C32.8243 21.3436 36.552 25.34 35.7482 29.1215L35.7956 57.7571C34.4177 64.2397 26.2938 68.0055 17.6503 66.1683C9.00684 64.3311 3.11696 57.5865 4.49488 51.1039L16.1853 24.9633Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.6697 14.3265C32.4512 15.1303 35.1444 17.5336 34.6851 19.6945L33.8532 23.6081C32.3463 22.0223 30.0881 20.7621 27.4222 20.1954C24.7563 19.6288 22.1809 19.8616 20.1592 20.6973L20.991 16.7837C21.4503 14.6229 24.8882 13.5227 28.6697 14.3265Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30.9049 56.7178C30.1011 60.4993 24.6323 62.5409 18.6899 61.2778C12.7475 60.0148 8.58186 55.9253 9.38564 52.1438C10.1894 48.3623 15.6583 46.3207 21.6006 47.5838C27.543 48.8469 31.7087 52.9363 30.9049 56.7178Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.6102 24.9633C62.8064 21.1818 57.7755 19.0471 52.3733 20.1954C46.9712 21.3436 43.2435 25.34 44.0472 29.1215L43.9999 57.7571C45.3778 64.2397 53.5017 68.0055 62.1452 66.1683C70.7886 64.3311 76.6785 57.5865 75.3006 51.1039L63.6102 24.9633Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M51.1257 14.3265C47.3442 15.1303 44.651 17.5336 45.1103 19.6945L45.9422 23.6081C47.4492 22.0223 49.7073 20.7621 52.3732 20.1954C55.0391 19.6288 57.6146 19.8616 59.6363 20.6973L58.8044 16.7837C58.3451 14.6229 54.9072 13.5227 51.1257 14.3265Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.8905 56.7178C49.6943 60.4994 55.1632 62.5409 61.1055 61.2778C67.0479 60.0148 71.2136 55.9253 70.4098 52.1438C69.606 48.3623 64.1371 46.3207 58.1948 47.5838C52.2524 48.8469 48.0867 52.9363 48.8905 56.7178Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.751 30.7476H44.0446"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.7773 46.7476H44.0181"
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
            d="M27.4221 20.1952C22.0199 19.047 16.989 21.1816 16.1852 24.9632L4.49482 51.1038C3.1169 57.5864 9.00678 64.331 17.6502 66.1682C26.2937 68.0054 34.4176 64.2396 35.7955 57.757L35.7482 29.1214C36.552 25.3399 32.8243 21.3435 27.4221 20.1952ZM18.6898 61.2774C24.6322 62.5405 30.101 60.4989 30.9048 56.7174C31.7086 52.9359 27.5429 48.8465 21.6006 47.5834C15.6582 46.3203 10.1893 48.3619 9.38556 52.1434C8.58177 55.9249 12.7474 60.0143 18.6898 61.2774Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.6695 14.3265C32.4511 15.1303 35.1442 17.5336 34.6849 19.6944L34.4558 20.7725C32.6844 19.3413 30.4329 18.2795 27.9419 17.75C25.4508 17.2205 22.9621 17.2747 20.7617 17.8617L20.9909 16.7837C21.4502 14.6228 24.888 13.5227 28.6695 14.3265ZM33.1361 26.981L33.0216 27.5196L19.3276 24.6089L19.4421 24.0702C19.8289 23.6853 20.3586 23.3279 21.0558 23.0321C22.5623 22.3928 24.6414 22.1602 26.9023 22.6407C29.1632 23.1213 30.9679 24.1795 32.0842 25.3762C32.6008 25.93 32.9393 26.472 33.1361 26.981Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.3733 20.1952C57.7755 19.047 62.8064 21.1816 63.6102 24.9632L75.3006 51.1038C76.6785 57.5864 70.7886 64.331 62.1452 66.1682C53.5017 68.0054 45.3778 64.2396 43.9999 57.757L44.0472 29.1214C43.2434 25.3399 46.9712 21.3435 52.3733 20.1952ZM61.1056 61.2774C55.1632 62.5405 49.6944 60.4989 48.8906 56.7174C48.0868 52.9359 52.2525 48.8465 58.1948 47.5834C64.1372 46.3203 69.6061 48.3619 70.4099 52.1434C71.2136 55.9249 67.048 60.0143 61.1056 61.2774Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.1259 14.3265C47.3444 15.1303 44.6512 17.5336 45.1105 19.6944L45.3396 20.7725C47.1111 19.3413 49.3625 18.2795 51.8536 17.75C54.3446 17.2205 56.8333 17.2748 59.0337 17.8617L58.8045 16.7837C58.3452 14.6228 54.9074 13.5227 51.1259 14.3265ZM46.6593 26.981L46.7738 27.5196L60.4678 24.6089L60.3533 24.0702C59.9665 23.6853 59.4368 23.3279 58.7396 23.0321C57.2331 22.3928 55.154 22.1602 52.8931 22.6407C50.6322 23.1213 48.8275 24.1795 47.7112 25.3762C47.1946 25.93 46.8561 26.472 46.6593 26.981Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.0446 30.7476H35.751L35.7774 46.7476H44.0182L44.0446 30.7476Z"
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
            d="M27.4221 20.1952C22.0199 19.047 16.989 21.1816 16.1852 24.9632L4.49482 51.1038C3.1169 57.5864 9.00678 64.331 17.6502 66.1682C26.2937 68.0054 34.4176 64.2396 35.7955 57.757L35.7482 29.1214C36.552 25.3399 32.8243 21.3435 27.4221 20.1952ZM18.6898 61.2774C24.6322 62.5405 30.101 60.4989 30.9048 56.7174C31.7086 52.9359 27.5429 48.8465 21.6006 47.5834C15.6582 46.3203 10.1893 48.3619 9.38556 52.1434C8.58177 55.9249 12.7474 60.0143 18.6898 61.2774Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.6695 14.3265C32.4511 15.1303 35.1442 17.5336 34.6849 19.6944L33.8531 23.608C32.3461 22.0223 30.088 20.762 27.4221 20.1954C24.7562 19.6287 22.1807 19.8615 20.159 20.6972L20.9909 16.7837C21.4502 14.6228 24.888 13.5227 28.6695 14.3265Z"
            fill="#EB5757"
          />
          <ellipse cx="20.1453" cy="54.4304" rx="11" ry="7" transform="rotate(12 20.1453 54.4304)" fill="#56CCF2"/>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.3733 20.1952C57.7755 19.047 62.8064 21.1816 63.6102 24.9632L75.3006 51.1038C76.6785 57.5864 70.7886 64.331 62.1452 66.1682C53.5017 68.0054 45.3778 64.2396 43.9999 57.757L44.0472 29.1214C43.2434 25.3399 46.9712 21.3435 52.3733 20.1952ZM61.1056 61.2774C55.1632 62.5405 49.6944 60.4989 48.8906 56.7174C48.0868 52.9359 52.2525 48.8465 58.1948 47.5834C64.1372 46.3203 69.6061 48.3619 70.4099 52.1434C71.2136 55.9249 67.048 60.0143 61.1056 61.2774Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.1259 14.3265C47.3444 15.1303 44.6512 17.5336 45.1105 19.6944L45.9423 23.608C47.4493 22.0223 49.7074 20.762 52.3733 20.1954C55.0392 19.6287 57.6147 19.8615 59.6364 20.6972L58.8045 16.7837C58.3452 14.6228 54.9074 13.5227 51.1259 14.3265Z"
            fill="#EB5757"
          />
          <ellipse rx="11" ry="7" transform="matrix(-0.978148 0.207912 0.207912 0.978148 59.6501 54.4304)" fill="#56CCF2"/>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.0446 30.7476H35.751L35.7774 46.7476H44.0182L44.0446 30.7476Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.4221 20.1954C22.02 19.0471 16.9891 21.1818 16.1853 24.9633L4.49488 51.104C3.11696 57.5866 9.00684 64.3311 17.6503 66.1683C26.2938 68.0056 34.4177 64.2398 35.7956 57.7572L35.7482 29.1216C36.552 25.34 32.8243 21.3437 27.4221 20.1954ZM18.6899 61.2776C24.6322 62.5407 30.1011 60.4991 30.9049 56.7176C31.7086 52.9361 27.543 48.8466 21.6006 47.5835C15.6582 46.3204 10.1894 48.362 9.38562 52.1435C8.58183 55.9251 12.7475 60.0145 18.6899 61.2776Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28.6696 14.3265C32.4511 15.1303 35.1443 17.5336 34.685 19.6945L33.8532 23.6081C32.3462 22.0223 30.088 20.7621 27.4221 20.1954C24.7563 19.6288 22.1808 19.8616 20.1591 20.6973L20.9909 16.7837C21.4502 14.6229 24.8881 13.5227 28.6696 14.3265Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.9049 56.7176C30.1011 60.4991 24.6322 62.5407 18.6899 61.2776C12.7475 60.0145 8.58183 55.9251 9.38562 52.1435C10.1894 48.362 15.6582 46.3204 21.6006 47.5835C27.543 48.8466 31.7086 52.9361 30.9049 56.7176Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.3732 20.1954C57.7754 19.0471 62.8063 21.1818 63.6101 24.9633L75.3005 51.104C76.6784 57.5866 70.7885 64.3311 62.145 66.1683C53.5016 68.0056 45.3777 64.2398 43.9997 57.7572L44.0471 29.1216C43.2433 25.34 46.971 21.3437 52.3732 20.1954ZM61.1055 61.2776C55.1631 62.5407 49.6943 60.4991 48.8905 56.7176C48.0867 52.9361 52.2523 48.8466 58.1947 47.5835C64.1371 46.3204 69.6059 48.362 70.4097 52.1435C71.2135 55.9251 67.0479 60.0145 61.1055 61.2776Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51.1257 14.3265C47.3442 15.1303 44.651 17.5336 45.1103 19.6945L45.9422 23.6081C47.4492 22.0223 49.7073 20.7621 52.3732 20.1954C55.0391 19.6288 57.6146 19.8616 59.6363 20.6973L58.8044 16.7837C58.3451 14.6229 54.9072 13.5227 51.1257 14.3265Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48.8905 56.7176C49.6943 60.4991 55.1631 62.5407 61.1055 61.2776C67.0479 60.0145 71.2135 55.9251 70.4097 52.1435C69.6059 48.362 64.1371 46.3204 58.1947 47.5835C52.2523 48.8466 48.0867 52.9361 48.8905 56.7176Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44.0446 30.7475H35.7509L35.7774 46.7475H44.0182L44.0446 30.7475Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27.4221 20.1954C22.02 19.0471 16.9891 21.1818 16.1853 24.9633L4.49488 51.104C3.11696 57.5866 9.00684 64.3311 17.6503 66.1683C26.2938 68.0056 34.4177 64.2398 35.7956 57.7572L35.7482 29.1216C36.552 25.34 32.8243 21.3437 27.4221 20.1954ZM27.4221 20.1954C30.088 20.7621 32.3462 22.0223 33.8532 23.6081L34.685 19.6945C35.1443 17.5336 32.4511 15.1303 28.6696 14.3265C24.8881 13.5227 21.4502 14.6229 20.9909 16.7837L20.1591 20.6973C22.1808 19.8616 24.7563 19.6288 27.4221 20.1954ZM52.3732 20.1954C57.7754 19.0471 62.8063 21.1818 63.6101 24.9633L75.3005 51.104C76.6784 57.5866 70.7885 64.3311 62.145 66.1683C53.5016 68.0056 45.3777 64.2398 43.9997 57.7572L44.0471 29.1216C43.2433 25.34 46.971 21.3437 52.3732 20.1954ZM52.3732 20.1954C49.7073 20.7621 47.4492 22.0223 45.9422 23.6081L45.1103 19.6945C44.651 17.5336 47.3442 15.1303 51.1257 14.3265C54.9072 13.5227 58.3451 14.6229 58.8044 16.7837L59.6363 20.6973C57.6146 19.8616 55.0391 19.6288 52.3732 20.1954ZM30.9049 56.7176C30.1011 60.4991 24.6322 62.5407 18.6899 61.2776C12.7475 60.0145 8.58183 55.9251 9.38562 52.1435C10.1894 48.362 15.6582 46.3205 21.6006 47.5835C27.543 48.8466 31.7086 52.9361 30.9049 56.7176ZM48.8905 56.7176C49.6943 60.4991 55.1631 62.5407 61.1055 61.2776C67.0479 60.0145 71.2135 55.9251 70.4097 52.1435C69.6059 48.362 64.1371 46.3205 58.1947 47.5835C52.2523 48.8466 48.0867 52.9361 48.8905 56.7176ZM35.7509 30.7475H44.0446L44.0182 46.7475H35.7774L35.7509 30.7475Z"
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
            d="M66.9112 46.1447C64.3033 45.1712 61.0673 44.9792 57.7893 45.6759C54.9212 46.2856 52.359 47.5038 50.4325 49.1053C50.1573 49.334 49.8951 49.5706 49.6468 49.8144C47.6798 51.7454 46.3946 54.3537 46.9831 57.1228C47.5717 59.8919 49.8068 61.752 52.3891 62.716C54.997 63.6895 58.233 63.8815 61.511 63.1848C64.7889 62.488 67.667 60.9964 69.6535 59.0463C71.6205 57.1153 72.9057 54.507 72.3172 51.7379C71.7286 48.9688 69.4935 47.1087 66.9112 46.1447ZM65.5473 49.7985C67.386 50.4849 68.2872 51.5363 68.5024 52.5488C68.7176 53.5612 68.3219 54.8883 66.9214 56.2632C65.5404 57.619 63.3646 58.8036 60.7001 59.37C58.0356 59.9363 55.5661 59.7391 53.753 59.0623C51.9143 58.3758 51.0131 57.3244 50.7979 56.312C50.5827 55.2995 50.9784 53.9724 52.3789 52.5975C53.7599 51.2417 55.9357 50.0571 58.6002 49.4907C60.9316 48.9952 63.1138 49.0842 64.8375 49.5677C65.0837 49.6367 65.3206 49.7138 65.5473 49.7985Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8842 46.1447C15.4921 45.1712 18.7282 44.9792 22.0061 45.6759C25.284 46.3727 28.1622 47.8643 30.1487 49.8144C32.1156 51.7454 33.4009 54.3537 32.8123 57.1228C32.2237 59.8919 29.9886 61.752 27.4064 62.716C27.0804 62.8377 26.7446 62.9471 26.4001 63.0442C23.9888 63.7236 21.1526 63.7944 18.2845 63.1848C15.0066 62.488 12.1284 60.9964 10.1419 59.0463C9.89603 58.8049 9.66082 58.553 9.43858 58.2914C7.88293 56.4607 6.96326 54.1608 7.47827 51.7379C8.06686 48.9688 10.3019 47.1087 12.8842 46.1447ZM13.9143 49.9313C12.2995 50.6161 11.4948 51.5996 11.293 52.5488C11.0778 53.5612 11.4735 54.8883 12.874 56.2632C14.255 57.619 16.4309 58.8036 19.0953 59.37C21.7598 59.9363 24.2294 59.7391 26.0424 59.0623C27.8811 58.3758 28.7823 57.3244 28.9975 56.312C29.2127 55.2995 28.8171 53.9724 27.4165 52.5975C26.0355 51.2417 23.8597 50.0571 21.1952 49.4907C18.5308 48.9244 16.0612 49.1216 14.2482 49.7984C14.1333 49.8413 14.022 49.8857 13.9143 49.9313Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.9902 12.5859C24.758 12.0202 26.9139 11.9595 29.0751 12.4189C31.2363 12.8783 33.1811 13.8106 34.566 15.0465C35.9035 16.24 37.0304 18.0394 36.5924 20.0997L35.9609 23.0708C37.2351 24.7106 37.9897 26.7028 37.7711 28.7973H42.0243C41.8057 26.7028 42.5603 24.7106 43.8345 23.0708L43.203 20.0997C42.7651 18.0394 43.892 16.24 45.2294 15.0465C46.6143 13.8106 48.5591 12.8783 50.7203 12.4189C52.8815 11.9595 55.0375 12.0202 56.8053 12.5859C58.5125 13.1323 60.2739 14.3178 60.7118 16.3781L61.3434 19.3491C63.3226 20.4083 64.9147 22.0905 65.4677 24.3403L77.1649 50.4963L77.2079 50.6983C78.0531 54.6746 76.634 58.5867 73.9496 61.6606C71.2657 64.7339 67.245 67.0777 62.5505 68.0755C57.856 69.0734 53.2296 68.5676 49.5278 66.8516C45.8252 65.1353 42.9376 62.1386 42.0924 58.1624L42.0494 57.9603L42.0648 48.6973H37.7307L37.746 57.9603L37.703 58.1624C36.8578 62.1386 33.9702 65.1353 30.2677 66.8516C26.5658 68.5676 21.9394 69.0734 17.2449 68.0755C12.5504 67.0777 8.52972 64.7339 5.84584 61.6606C3.16147 58.5867 1.74235 54.6746 2.58753 50.6983L2.63048 50.4963L14.3277 24.3403C14.8807 22.0905 16.4728 20.4083 18.4521 19.3491L19.0836 16.3781C19.5215 14.3178 21.2829 13.1323 22.9902 12.5859ZM37.7242 44.7973H42.0712L42.0912 32.6973H37.7042L37.7242 44.7973ZM45.9501 57.541C46.5348 59.965 48.3757 62.0189 51.1679 63.3133C54.0334 64.6416 57.7907 65.1001 61.7397 64.2607C65.6886 63.4214 68.9346 61.4742 71.012 59.0953C73.0365 56.7771 73.8827 54.152 73.4309 51.6997L61.7457 25.5706L61.7027 25.3685C61.4694 24.271 60.5837 23.2169 58.9544 22.5256C58.9335 22.5167 58.9125 22.5079 58.8914 22.4992C57.2753 21.8312 55.106 21.6079 52.7787 22.1026C50.7157 22.5411 48.9955 23.4445 47.7924 24.5269C47.6205 24.6815 47.4592 24.8398 47.3089 25.0009C46.1016 26.2952 45.7212 27.6184 45.9545 28.7159L45.9718 28.7973H45.9979L45.9501 57.541ZM33.8236 28.7973L33.8409 28.7159C34.0742 27.6184 33.6938 26.2952 32.4865 25.0009L32.4545 24.9668L32.4397 24.9511C31.2346 23.683 29.3431 22.5971 27.0168 22.1026C24.6904 21.6081 22.5208 21.8309 20.9041 22.4992C20.883 22.5079 20.862 22.5167 20.841 22.5256C19.2117 23.2169 18.326 24.271 18.0927 25.3685L18.0498 25.5706L6.36451 51.6997C5.9127 54.152 6.75897 56.7771 8.78339 59.0953C10.8608 61.4742 14.1068 63.4214 18.0558 64.2607C22.0047 65.1001 25.7621 64.6416 28.6275 63.3133C31.4198 62.0189 33.2606 59.9649 33.8453 57.541L33.7978 28.7973H33.8236ZM32.7777 19.2888L32.596 20.1434C31.192 19.2989 29.5741 18.659 27.8276 18.2878C27.7185 18.2646 27.6093 18.2426 27.5003 18.2217C25.8643 17.9085 24.2412 17.8556 22.7167 18.0435L22.8984 17.1889C22.9197 17.0884 23.107 16.6434 24.1788 16.3004C25.1901 15.9768 26.6439 15.8893 28.2642 16.2337C29.8846 16.5781 31.1771 17.2493 31.9693 17.9563C32.809 18.7056 32.799 19.1883 32.7777 19.2888ZM57.0787 18.0435L56.8971 17.1889C56.8757 17.0884 56.6885 16.6434 55.6166 16.3004C54.6053 15.9768 53.1515 15.8893 51.5312 16.2337C49.9109 16.5781 48.6184 17.2493 47.8261 17.9563C46.9864 18.7056 46.9964 19.1883 47.0178 19.2888L47.1994 20.1434C48.6036 19.2988 50.2217 18.6589 51.9678 18.2878C53.6803 17.9238 55.3854 17.846 56.9846 18.0322C57.016 18.0359 57.0474 18.0396 57.0787 18.0435Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
          />
        </>
      )
  }
}

const CoreBinoculars1 = forwardRef((props, ref) => {
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

CoreBinoculars1.displayName = 'CoreBinoculars1'

export default CoreBinoculars1
