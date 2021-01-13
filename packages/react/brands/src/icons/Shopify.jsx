
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.9713 29.0983C32.9342 29.0983 32.8624 29.0983 32.8253 29.0983C32.2096 29.0232 31.7028 28.459 31.7028 27.8197C31.6657 27.2178 31.3392 13.1518 39.274 9.95511C41.267 9.16523 43.1166 9.31558 44.6744 10.4817C46.5932 11.8732 47.9705 14.6563 48.8038 18.7181C49.3824 21.5765 49.4912 24.0586 49.4912 24.1715C49.5283 24.7731 49.0585 25.2247 48.4404 25.1117C47.8247 25.0364 47.3178 24.4724 47.3178 23.8706C47.209 21.3132 46.3757 14.2803 43.6236 12.2492C42.7532 11.6099 41.6651 11.5346 40.362 12.0612C33.5498 14.8066 33.8762 28.0077 33.8762 28.1581C33.8762 28.6847 33.5153 29.0983 32.9713 29.0983Z"
            fill="#595961"
          />
          <path
            opacity="0.46"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.2738 10.5568C42.8248 9.50359 41.1235 9.35324 39.274 10.0678C36.0496 11.3841 33.7674 14.8443 32.6448 20.1097C31.8115 23.9833 31.9202 27.4811 31.9202 27.6315C31.9202 27.8195 31.9919 28.0077 32.1378 28.1581C32.2812 28.3084 32.4271 28.4214 32.6076 28.4214C32.6447 28.4214 32.6818 28.4214 32.7164 28.4214C33.0428 28.4214 33.2975 28.1581 33.2975 27.8195C33.2975 27.6691 32.9712 14.2424 39.964 11.4217C41.3759 10.8577 42.6072 10.9328 43.6235 11.685C46.5561 13.8287 47.4264 21.0875 47.5352 23.6826C47.5352 24.0586 47.8617 24.4348 48.2598 24.4722C48.6233 24.5099 48.9125 24.2466 48.9125 23.8706C48.8754 23.4193 48.4774 13.6408 44.2738 10.5568Z"
            fill="#B2B2C2"
          />
          <path
            opacity="0.46"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.6449 27.97C32.6078 27.97 32.6078 27.97 32.5732 27.97C32.3556 27.9324 32.1726 27.7067 32.138 27.4811C32.138 27.3305 32.0292 23.9082 32.8625 20.0343C33.948 14.8819 36.2327 11.4593 39.3829 10.1805C41.1583 9.46588 42.7533 9.61648 44.1306 10.5944C48.1883 13.5654 48.5864 23.1936 48.5864 23.6072C48.5864 23.8329 48.4059 23.9832 48.1883 23.9458C47.9707 23.9082 47.7901 23.7202 47.753 23.4569C47.753 23.3439 47.3549 13.904 43.6953 11.196C42.6074 10.4064 41.2672 10.2934 39.7465 10.8951C32.6449 13.8663 32.9713 27.4811 32.9713 27.6314C33.006 27.8194 32.8625 27.97 32.6449 27.97Z"
            fill="#B2B2C2"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.5801 17.2138C35.8694 16.6498 36.1586 16.0855 36.4133 15.4839C36.3045 15.6719 35.58 17.6276 33.3694 17.3267C33.3323 17.3267 34.6726 17.7403 35.5801 17.2138Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.7815 19.6206C34.9991 19.0188 35.2166 18.3795 35.3625 17.7778C35.2908 18.0035 34.9273 20.0343 32.6079 20.0343C32.6079 20.0343 33.9482 20.2976 34.7815 19.6206Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.4987 14.7693C47.2094 14.0921 46.8829 13.4528 46.5565 12.7759C46.6653 13.0015 47.7534 15.1453 46.522 16.6871C46.522 16.6871 47.4641 15.9352 47.4987 14.7693Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.508 11.3844C44.9269 10.8955 44.3482 10.4442 43.7671 10.0305C43.9847 10.2185 45.9059 11.61 45.7971 13.7164C45.76 13.7164 46.0866 12.4752 45.508 11.3844Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.6309 15.1448C37.0661 14.6935 37.427 14.2046 37.8251 13.678C37.6817 13.8283 36.485 15.3704 34.3486 14.8062C34.3486 14.8062 35.58 15.4834 36.6309 15.1448Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.9712 13.4149C38.4781 13.0389 38.9479 12.6627 39.4202 12.249C39.2397 12.362 37.7537 13.6029 35.689 12.7003C35.689 12.7003 36.8832 13.5652 37.9712 13.4149Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9271 12.1734C40.5428 11.9854 41.1239 11.7598 41.7025 11.5341C41.4849 11.6092 39.6377 12.2861 37.8252 10.8569C37.8623 10.8569 38.8045 11.9854 39.9271 12.1734Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.7023 11.4971C42.2092 11.5724 42.7161 11.6101 43.223 11.6477C43.0425 11.6101 41.4475 11.4971 40.5425 9.99268C40.5425 9.99268 40.9061 11.0082 41.7023 11.4971Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.8044 12.3236C44.1654 12.7375 44.5659 13.1511 44.9987 13.5271C44.8552 13.3768 43.6239 12.1356 43.9132 10.5938C43.8761 10.5938 43.478 11.4587 43.8044 12.3236Z"
            fill="#595961"
          />
          <path
            opacity="0.74"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.1883 23.4192C48.1883 23.0054 47.7902 13.4901 43.8413 10.5944C43.0797 10.0301 42.2464 9.76685 41.376 9.76685C40.7232 9.76685 40.0357 9.91719 39.3112 10.2181C36.1586 11.4593 33.948 14.8066 32.8625 19.9214C32.0292 23.7576 32.138 27.1802 32.138 27.3305C32.138 27.4435 32.2468 27.5562 32.3556 27.5562H32.3901C32.4989 27.5562 32.5732 27.4811 32.5732 27.3682C32.5732 27.2178 32.2097 13.4901 39.4917 10.5567C41.0866 9.91719 42.464 10.0301 43.6237 10.8951C47.3896 13.6407 47.7901 23.2313 47.7901 23.344C47.7901 23.4569 47.899 23.5696 48.0078 23.5696C48.0078 23.5696 48.0077 23.5696 48.0423 23.5696C48.1165 23.6072 48.1883 23.5319 48.1883 23.4192Z"
            fill="url(#paint0_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.8043 18.7183C47.971 14.6564 46.5937 11.9108 44.6749 10.4816C43.624 9.72963 42.499 9.39103 41.2676 9.46633C42.2468 9.54138 43.1518 9.87997 43.9851 10.4816C45.9063 11.8734 47.2837 14.6564 48.117 18.7183C48.6956 21.5766 48.8043 24.0587 48.8043 24.1717C48.8043 24.623 48.5867 24.9615 48.2232 25.0742C48.2974 25.1119 48.3692 25.1119 48.4063 25.1119C49.022 25.1872 49.4918 24.7733 49.4572 24.1717C49.4918 24.0587 49.3829 21.6143 48.8043 18.7183Z"
            fill="url(#paint1_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.6749 12.0613C32.8627 14.8067 33.189 28.0078 33.189 28.1582C33.189 28.6095 32.9714 28.9481 32.6079 29.0608C32.6821 29.0984 32.7168 29.0984 32.791 29.0984C32.8256 29.0984 32.8997 29.0984 32.9344 29.0984C33.4783 29.0984 33.8393 28.6848 33.8393 28.1582C33.8393 28.0078 33.5155 14.8444 40.3253 12.099C40.7975 11.911 41.2326 11.798 41.6307 11.7604C41.0496 11.6477 40.3994 11.7604 39.6749 12.0613Z"
            fill="url(#paint2_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.9984 15.3331L19.2753 25.1866C19.2753 25.1866 17.9722 25.5629 17.6458 25.9765C17.3194 26.3902 17.2477 27.556 17.2477 27.556L12.5 65.542L48.1513 72.4622L50.9059 15.2954C50.5078 15.2201 50.1072 15.2954 49.9984 15.3331Z"
            fill="url(#paint3_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.6161 20.2222C60.6161 20.2222 60.579 19.9213 60.3985 19.8086C60.2526 19.6956 60.0721 19.6956 60.0721 19.6956L55.0352 19.3196L51.341 15.5211C51.1951 15.4081 51.0493 15.3331 50.8687 15.2954L48.1167 72.4622L67.4258 68.137L60.6161 20.2222Z"
            fill="url(#paint4_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.3186 47.0754C36.7746 46.3231 36.1243 45.6462 35.4715 45.0443C34.8187 44.4427 34.1314 43.9537 33.4415 43.5024C32.9717 43.2015 32.5365 42.9006 32.173 42.5996C31.812 42.2989 31.5226 41.998 31.305 41.7347C31.0874 41.4337 30.9069 41.1704 30.7981 40.8698C30.6893 40.5688 30.6522 40.2679 30.6522 39.9669C30.6522 39.5533 30.761 39.1396 30.9069 38.8011C31.0503 38.4627 31.305 38.1618 31.5572 37.8985C31.849 37.6352 32.173 37.4472 32.5735 37.2968C32.9716 37.1462 33.4414 37.0712 33.9483 37.0335C34.4923 36.9959 35.0363 37.0335 35.5432 37.0712C36.0501 37.1086 36.5224 37.2215 36.9922 37.3342C37.4274 37.4472 37.8625 37.5975 38.2236 37.7481C38.587 37.8985 38.948 38.0488 39.2027 38.1994L41.5939 30.8279C41.2329 30.6399 40.7977 30.4517 40.3254 30.339C39.8185 30.1884 39.2745 30.0757 38.6588 30.0004C38.0431 29.9253 37.3903 29.8877 36.7029 29.8877C36.0155 29.8877 35.2911 29.9253 34.5295 30.038C32.9 30.2637 31.4485 30.715 30.1454 31.3919C28.914 32.0314 27.8259 32.8587 26.9209 33.8743C26.0505 34.8521 25.3631 35.9804 24.8562 37.2592C24.3839 38.5004 24.0947 39.8919 24.0229 41.3961C23.9859 42.2989 24.0575 43.1262 24.2751 43.8784C24.4556 44.6307 24.7474 45.3453 25.1455 46.0222C25.5065 46.6991 25.9788 47.301 26.4857 47.865C26.9926 48.4292 27.6083 48.9558 28.224 49.4448C28.7309 49.8208 29.1661 50.1968 29.5296 50.5353C29.8906 50.8739 30.1824 51.2123 30.3976 51.5885C30.6151 51.9269 30.761 52.2655 30.8698 52.6415C30.9786 52.98 31.0157 53.356 30.9786 53.7323C30.9786 54.1083 30.8699 54.4843 30.724 54.7852C30.5806 55.0861 30.3975 55.3871 30.1082 55.6127C29.856 55.8384 29.5297 55.9887 29.1662 56.064C28.8052 56.1391 28.37 56.1767 27.8977 56.1017C27.3562 56.0264 26.8121 55.876 26.3052 55.6501C25.7983 55.4621 25.289 55.1988 24.8192 54.9356C24.3494 54.6725 23.9142 54.3716 23.5507 54.1083C23.1526 53.845 22.8262 53.544 22.574 53.3184L20.9419 58.9224C21.1966 59.2984 21.5577 59.6369 21.9558 59.9753C22.3564 60.3139 22.8262 60.6522 23.3702 60.9908C23.9142 61.2918 24.4928 61.5925 25.1085 61.8557C25.7242 62.119 26.414 62.3447 27.1014 62.5329H27.1386H27.1731H27.2102H27.2474C28.731 62.8713 30.1453 62.9466 31.4855 62.7586C32.8628 62.5703 34.1313 62.0814 35.2168 61.3294C36.3394 60.5395 37.2468 59.4864 37.9342 58.0948C38.6241 56.7033 39.0222 55.0108 39.0939 53.0927C39.131 51.8892 38.9852 50.8363 38.6588 49.8584C38.3324 48.7302 37.8626 47.865 37.3186 47.0754Z"
            fill="url(#paint5_linearfnFT)"
          />
          <path
            opacity="0.226763"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.1766 59.2287C21.0925 59.1291 21.0133 59.0272 20.9416 58.9226L22.5736 53.3187C22.5959 53.3396 22.6206 53.3612 22.6453 53.3834C22.8876 53.5999 23.1894 53.8696 23.5504 54.1085C23.9139 54.3718 24.3491 54.6728 24.8189 54.9361C25.2887 55.1991 25.7979 55.4624 26.3049 55.6507C26.8118 55.8763 27.3559 56.0266 27.8974 56.1019C28.3697 56.177 28.8048 56.1396 29.1659 56.0643C29.5293 55.989 29.8557 55.8386 30.1079 55.613C30.3972 55.3874 30.5803 55.0864 30.7237 54.7855C30.8696 54.4845 30.9783 54.1085 30.9783 53.7325C31.0154 53.3563 30.9783 52.9803 30.8695 52.6417C30.7607 52.2657 30.6148 51.9271 30.3972 51.5888C30.192 51.2313 29.92 50.9079 29.5812 50.5861C29.7592 50.7871 29.9101 50.9935 30.0362 51.2125C30.2538 51.5511 30.3972 51.8895 30.506 52.2657C30.6148 52.6041 30.6519 52.9803 30.6149 53.3563C30.6149 53.7325 30.5061 54.1085 30.3627 54.4095C30.2168 54.7104 30.0362 55.0111 29.7469 55.2368C29.4922 55.4624 29.1659 55.613 28.8049 55.688C28.4414 55.7633 28.0062 55.801 27.5364 55.7257C26.9924 55.6506 26.4483 55.5001 25.9414 55.2744C25.4345 55.0864 24.9276 54.8231 24.4553 54.5598C23.9855 54.2965 23.5504 53.9958 23.1894 53.7325C22.8259 53.4936 22.5242 53.2239 22.2819 53.0074C22.2572 52.9852 22.2348 52.9636 22.2101 52.9427L20.5806 58.5464C20.7413 58.7858 20.9466 59.01 21.1766 59.2287ZM26.5151 47.8995C26.3791 47.7649 26.248 47.6283 26.1219 47.4893C25.615 46.925 25.1452 46.3234 24.7818 45.6465C24.3837 44.9693 24.0943 44.2547 23.9138 43.5027C23.6962 42.7505 23.622 41.9229 23.6591 41.0204C23.7308 39.5159 24.0226 38.1244 24.4924 36.8832C24.9993 35.6046 25.6893 34.4764 26.5572 33.4985C27.4647 32.483 28.5501 31.6555 29.7815 31.0162C31.087 30.3393 32.5361 29.888 34.1656 29.6623C34.9272 29.5494 35.6517 29.5117 36.3391 29.5117C37.029 29.5117 37.6818 29.5494 38.2975 29.6247C38.9132 29.7 39.4572 29.8127 39.9641 29.9633C40.4339 30.076 40.8691 30.2639 41.2326 30.4519L41.1757 30.6279C40.9136 30.514 40.6268 30.4113 40.3251 30.3392C39.8182 30.1889 39.2742 30.076 38.6585 30.0007C38.0428 29.9256 37.39 29.888 36.7026 29.888C36.0151 29.888 35.2907 29.9256 34.5291 30.0383C32.8996 30.264 31.4481 30.7152 30.145 31.3924C28.9136 32.0317 27.8256 32.859 26.9206 33.8745C26.0502 34.8524 25.3628 35.9806 24.8559 37.2594C24.3836 38.5006 24.0943 39.8921 24.0226 41.3964C23.9855 42.2992 24.0572 43.1265 24.2748 43.8787C24.4553 44.6309 24.7471 45.3455 25.1452 46.0225C25.5062 46.6994 25.9785 47.3013 26.4854 47.8653C26.4952 47.8766 26.5052 47.8882 26.5151 47.8995ZM31.4357 41.889C31.6335 42.1127 31.8809 42.3563 32.1727 42.5999C32.5361 42.9008 32.9713 43.2018 33.4412 43.5027C34.131 43.954 34.8184 44.4429 35.4712 45.0446C35.6616 45.2198 35.8495 45.4011 36.0374 45.5891C35.7358 45.2648 35.4217 44.958 35.1076 44.6686C34.4573 44.0667 33.7676 43.5778 33.0801 43.1265C32.6079 42.8255 32.1727 42.5248 31.8117 42.2239C31.6757 42.1117 31.5519 41.9995 31.4357 41.889Z"
            fill="black"
          />
          <path
            opacity="0.41"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56.2667 61.8189L55.0353 19.3198L54.8177 19.0942L55.3989 61.217C55.3989 61.217 50.2903 69.2654 49.5287 69.0398C48.4061 68.7014 51.7392 15.9349 51.7392 15.9349L51.3758 15.5589C51.2324 15.446 51.0494 15.3709 50.906 15.3333L48.1885 71.7101L48.1514 72.5L49.0934 71.2588L56.2667 61.8189Z"
            fill="url(#paint6_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.3897 17.7781C41.9569 19.5456 41.413 21.2004 41.0149 22.216C40.7602 22.8179 41.0496 23.3818 41.5936 23.4571C42.1746 23.5324 42.8249 23.1185 43.0425 22.5169C43.0796 22.404 44.0563 19.9595 44.6745 17.0635V17.0259L42.3897 17.7781Z"
            fill="url(#paint7_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.0505 23.0429C25.5436 24.1711 25.0367 25.149 24.6732 25.826C24.3493 26.3902 24.5298 26.9918 25.0738 27.1422C25.6153 27.3304 26.3397 26.9918 26.6661 26.4276C26.7032 26.3525 27.7542 24.5097 28.6963 22.1777L26.0505 23.0429Z"
            fill="url(#paint8_linearfnFT)"
          />
          <path
            opacity="0.32"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.1514 72.4621L56.2667 61.8184L67.5002 68.1369L48.1514 72.4621Z"
            fill="url(#paint9_linearfnFT)"
          />
          <path
            opacity="0.19"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.1514 72.4621L56.195 61.8184L67.5002 68.1369L48.1514 72.4621Z"
            fill="url(#paint10_linearfnFT)"
          />
          <path
            opacity="0.19"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.1514 72.4621L56.195 61.8184L67.5002 68.1369L48.1514 72.4621Z"
            fill="url(#paint11_linearfnFT)"
          />
          <path
            opacity="0.6"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.2533 42.6754C44.4569 48.5801 47.283 54.9737 48.6949 61.1794L50.9056 15.2579C50.5075 15.1829 50.1069 15.2579 49.9981 15.2956L19.275 25.1871C19.275 25.1871 18.9856 25.2621 18.6221 25.4127C26.4135 28.1958 34.2026 34.1757 40.2533 42.6754Z"
            fill="url(#paint12_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.433 19.8462C60.616 19.9968 60.6161 20.2225 60.6161 20.2225L67.3541 68.0994L56.2665 61.7811L55.0352 19.2822L60.0003 19.6582C60.0349 19.6959 60.2525 19.6959 60.433 19.8462Z"
            fill="url(#paint13_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.6369 19.9595C59.6369 19.9595 59.8545 19.9595 60.035 20.1475C60.2155 20.2981 60.2525 20.5238 60.2525 20.5238L66.8843 67.8744L67.3912 68.1753L60.6506 20.2605C60.6506 20.2605 60.616 20.0348 60.4701 19.8845C60.2896 19.7339 60.035 19.7339 60.035 19.7339L55.0723 19.3579L59.6369 19.9595Z"
            fill="url(#paint14_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 65.5412L48.1513 72.4614L49.892 33.272L16.9335 34.2088L12.5 65.5412Z"
            fill="url(#paint15_linearfnFT)"
          />
          <path
            opacity="0.3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.2032 25.7347C23.8793 26.6488 24.1982 27.6092 24.9202 27.8804C25.6398 28.1513 26.4855 27.6302 26.8119 26.7163C27.1358 25.8024 26.8144 24.8417 26.0949 24.5708C25.3753 24.2996 24.5271 24.8208 24.2032 25.7347Z"
            fill="white"
          />
          <path
            opacity="0.89"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.1638 25.3008C23.8398 26.2147 24.1612 27.1754 24.8808 27.4463C25.6003 27.7175 26.4485 27.1963 26.7724 26.2824C27.0964 25.3683 26.7774 24.4076 26.0554 24.1367C25.3359 23.8655 24.4902 24.3867 24.1638 25.3008Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.0725 19.3196L51.3758 15.5211C51.2324 15.4081 51.0494 15.3331 50.906 15.2954L48.1514 72.4622L56.3038 61.7808L55.0725 19.3196Z"
            fill="url(#paint16_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.9982 15.3336L19.2751 25.1872C19.2751 25.1872 17.972 25.5634 17.6456 25.9771C17.6085 26.0147 17.6083 26.0523 17.5737 26.09L48.5492 17.214C48.8039 17.1387 49.4196 16.9131 49.3479 18.7559L47.4636 72.3874L48.1165 72.5003L50.8686 15.3336C50.5076 15.2206 50.107 15.2959 49.9982 15.3336Z"
            fill="url(#paint17_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.9982 15.3336L19.2751 25.1872C19.2751 25.1872 17.972 25.5634 17.6456 25.9771C17.6085 26.0147 17.6083 26.0523 17.5737 26.09L24.747 24.0213L49.4196 16.0858C49.5284 16.0482 49.9265 15.9729 50.3246 16.0482L47.6072 72.3874L48.1165 72.5003L50.8686 15.3336C50.5076 15.2206 50.107 15.2959 49.9982 15.3336Z"
            fill="url(#paint18_linearfnFT)"
          />
          <path
            opacity="0.32"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57.8986 62.7212L56.2666 61.781L48.1167 72.4621L48.5494 72.3492C48.5494 72.3492 55.7251 62.7589 56.3754 62.4579C56.8477 62.2699 57.8986 62.7212 57.8986 62.7212Z"
            fill="url(#paint19_linearfnFT)"
          />
          <path
            opacity="0.57"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.1514 72.4621L56.3038 61.781C56.2667 61.8187 51.1235 67.648 48.1514 72.4621Z"
            fill="url(#paint20_linearfnFT)"
          />
          <path
            opacity="0.46"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.4999 68.1369L56.3035 61.8184C56.2664 61.8184 57.572 62.044 67.4999 68.1369Z"
            fill="url(#paint21_linearfnFT)"
          />
          <path
            opacity="0.3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.7678 21.9846C40.4414 22.8987 40.7628 23.8594 41.4824 24.1306C42.2044 24.4017 43.0501 23.8806 43.374 22.9667C43.7004 22.0525 43.379 21.0918 42.6594 20.8207C41.9399 20.5498 41.0917 21.0707 40.7678 21.9846Z"
            fill="white"
          />
          <path
            opacity="0.89"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.7282 21.5525C40.4043 22.4667 40.7258 23.4273 41.4454 23.6985C42.1649 23.9694 43.0129 23.4485 43.3369 22.5344C43.6608 21.6205 43.3418 20.6598 42.6222 20.3886C41.9002 20.1175 41.0546 20.6386 40.7282 21.5525Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.4718 27.1427C25.4347 27.1427 25.363 27.1427 25.3259 27.1427C24.7473 27.0677 24.3492 26.5034 24.4209 25.8642C24.4926 25.2623 26.5573 11.1962 35.0361 7.99954C37.1725 7.20966 38.985 7.36001 40.3623 8.52613C42.0289 9.91765 42.9339 12.7007 43.0798 16.7626C43.1886 19.6209 42.8623 22.103 42.8623 22.2159C42.7906 22.8176 42.2466 23.2691 41.6655 23.1562C41.0869 23.0809 40.6516 22.5169 40.7604 21.915C41.0868 19.3576 41.4478 12.3247 39.0221 10.2936C38.2605 9.65436 37.2097 9.57906 35.7978 10.1056C28.5157 12.851 26.5944 26.0521 26.5944 26.1648C26.4485 26.7291 26.0158 27.1427 25.4718 27.1427Z"
            fill="#595961"
          />
          <path
            opacity="0.46"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9274 8.60097C38.6589 7.54804 36.9923 7.39769 34.9993 8.11228C31.5574 9.4285 28.6592 12.8885 26.6662 18.1162C25.1826 21.9901 24.6733 25.4877 24.6733 25.6383C24.6387 25.8263 24.7105 26.0143 24.8193 26.1649C24.9281 26.3152 25.0739 26.4282 25.2544 26.4282C25.289 26.4282 25.3261 26.4282 25.3632 26.4282C25.6896 26.4282 25.9788 26.1649 26.0159 25.8263C26.0505 25.676 27.9719 12.2492 35.4716 9.4285C36.9923 8.86427 38.2236 8.93957 39.094 9.6918C41.6656 11.8356 41.3046 19.0941 40.9782 21.6891C40.9411 22.0654 41.1958 22.4414 41.5569 22.479C41.9203 22.5167 42.2813 22.2534 42.3184 21.8774C42.3555 21.4635 43.624 11.6852 39.9274 8.60097Z"
            fill="#B2B2C2"
          />
          <path
            opacity="0.81"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.3258 26.0145C25.2887 26.0145 25.2887 26.0145 25.2541 26.0145C25.0365 25.9768 24.8905 25.7512 24.9276 25.5255C24.9647 25.3749 25.4346 21.9526 26.9207 18.0787C28.9137 12.9263 31.7399 9.50372 35.1077 8.2249C37.029 7.51031 38.5868 7.66091 39.7811 8.63879C43.3319 11.6098 42.1005 21.238 42.0288 21.6517C41.9917 21.8773 41.8113 22.0277 41.5566 21.9902C41.3414 21.9526 41.1956 21.7646 41.1956 21.5013C41.1956 21.3884 42.4269 11.9484 39.2396 9.24043C38.2975 8.52584 36.992 8.45079 35.3996 9.05243C27.754 11.9484 25.761 25.5255 25.761 25.6759C25.7239 25.8639 25.5434 26.0145 25.3258 26.0145Z"
            fill="#B2B2C2"
          />
          <path
            opacity="0.42"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.1079 15.2577C30.506 14.6937 30.8694 14.1295 31.2304 13.5278C31.087 13.7158 30.0361 15.6716 27.8626 15.3706C27.8255 15.3706 29.0941 15.7843 30.1079 15.2577Z"
            fill="#595961"
          />
          <path
            opacity="0.42"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.8767 17.6643C29.2031 17.0625 29.5294 16.4232 29.7816 15.8215C29.6728 16.0472 28.9483 18.078 26.666 18.078C26.666 18.078 27.9346 18.3413 28.8767 17.6643Z"
            fill="#595961"
          />
          <path
            opacity="0.42"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.9346 20.1476C28.2239 19.5081 28.4416 18.8688 28.6592 18.2295C28.5504 18.4551 28.1523 20.5236 25.7612 20.7869C25.7612 20.7492 27.0643 20.8998 27.9346 20.1476Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.4266 12.8132C42.2461 12.136 42.0655 11.4968 41.8108 10.8198C41.8825 11.0455 42.6071 13.1892 41.1235 14.7311C41.1235 14.7311 42.209 13.9791 42.4266 12.8132Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.0149 9.42808C40.508 8.93915 39.9986 8.48786 39.4917 8.07422C39.6747 8.26222 41.3759 9.65373 40.9061 11.7598C40.869 11.7598 41.413 10.5187 41.0149 9.42808Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.7906 16.2733C42.7535 15.5964 42.6448 14.8818 42.536 14.2046C42.536 14.4679 42.8995 16.6869 41.1587 17.8905C41.1587 17.8905 42.3554 17.3639 42.7906 16.2733Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.9713 19.8089C43.0083 19.132 43.0083 18.4174 42.9713 17.7405C42.9713 18.0038 43.0083 20.2228 41.1587 21.2381C41.1587 21.2007 42.4273 20.8245 42.9713 19.8089Z"
            fill="#595961"
          />
          <path
            opacity="0.42"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.1012 22.8923C27.3188 22.2154 27.4648 21.5385 27.6082 20.8989C27.5365 21.1246 27.2101 23.2683 24.9995 23.7949C25.0366 23.7949 26.3396 23.7573 27.1012 22.8923Z"
            fill="#595961"
          />
          <path
            opacity="0.42"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.4855 13.1885C31.9924 12.7372 32.4646 12.2483 32.8998 11.7217C32.7168 11.872 31.2678 13.4141 29.2402 12.8499C29.2749 12.8499 30.3975 13.5271 31.4855 13.1885Z"
            fill="#595961"
          />
          <path
            opacity="0.42"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.1145 11.4593C33.6955 11.0833 34.2396 10.7071 34.7811 10.2935C34.566 10.4064 32.8993 11.6473 30.978 10.7447C30.978 10.7447 31.9919 11.6097 33.1145 11.4593Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.325 10.2183C35.9778 10.0301 36.5936 9.80444 37.2093 9.57879C36.9917 9.65409 35.0358 10.331 33.4409 8.90186C33.4409 8.90186 34.2024 10.0301 35.325 10.2183Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.1727 9.54157C37.682 9.61686 38.189 9.65452 38.6959 9.69217C38.5154 9.65452 36.9575 9.54158 36.2676 8.03711C36.3047 8.03711 36.4852 9.05263 37.1727 9.54157Z"
            fill="#595961"
          />
          <path
            opacity="0.62"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.1309 10.3683C39.4573 10.7819 39.7812 11.1956 40.1076 11.5718C39.9988 11.4212 38.985 10.1803 39.4919 8.63818C39.529 8.63818 38.985 9.50336 39.1309 10.3683Z"
            fill="#595961"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.6303 21.4634C41.6649 21.0498 42.8989 11.5346 39.4569 8.63857C38.8041 8.07457 38.0079 7.81128 37.1375 7.81128C36.4847 7.81128 35.7602 7.96163 34.9987 8.26257C31.6655 9.50374 28.8762 12.851 26.9203 17.9658C25.4342 21.802 24.9643 25.2246 24.9272 25.3749C24.9272 25.4876 24.9991 25.6006 25.1079 25.6006H25.1449C25.2537 25.6006 25.3254 25.5253 25.3254 25.4126C25.3625 25.262 27.3183 11.5345 35.1073 8.60091C36.7739 7.96163 38.1883 8.07457 39.2021 8.93951C42.4982 11.6849 41.2669 21.2754 41.2323 21.3884C41.2323 21.5011 41.304 21.614 41.4128 21.614C41.4128 21.614 41.4127 21.614 41.4474 21.614C41.5562 21.6517 41.6303 21.5764 41.6303 21.4634Z"
            fill="url(#paint22_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.0795 16.7622C42.9336 12.7004 42.0286 9.95473 40.362 8.52556C39.457 7.77357 38.3691 7.43498 37.1377 7.51027C38.0798 7.58533 38.9477 7.92392 39.6747 8.52556C41.3413 9.91733 42.2462 12.7004 42.3896 16.7622C42.4984 19.6206 42.1745 22.1027 42.1745 22.2156C42.1004 22.6669 41.811 23.0055 41.4475 23.1182C41.5217 23.1558 41.5563 23.1558 41.6305 23.1558C42.2091 23.2311 42.7531 22.8172 42.8249 22.2156C42.8619 22.1027 43.1883 19.6582 43.0795 16.7622Z"
            fill="url(#paint23_linearfnFT)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.0729 10.1053C27.7908 12.8507 25.8696 26.0518 25.8696 26.2022C25.7979 26.6535 25.506 26.9921 25.145 27.1048C25.2167 27.1424 25.2538 27.1424 25.3255 27.1424C25.3626 27.1424 25.4344 27.1424 25.4715 27.1424C26.0155 27.1424 26.4481 26.7288 26.5223 26.2022C26.5569 26.0518 28.4412 12.8884 35.7232 10.1427C36.2326 9.95475 36.6654 9.84204 37.066 9.8044C36.522 9.7291 35.832 9.84204 35.0729 10.1053Z"
            fill="url(#paint24_linearfnFT)"
          />
          <defs><linearGradient id="paint0_linearfnFT" x1="34.0271" y1="9.85174" x2="32.8908" y2="25.3222" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.65"/><stop offset="1" stop-color="white" stop-opacity="0.01"/></linearGradient><linearGradient id="paint1_linearfnFT" x1="42.3308" y1="18.707" x2="50.3308" y2="25.714" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint2_linearfnFT" x1="39.1234" y1="26.8129" x2="47.5912" y2="18.9257" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint3_linearfnFT" x1="28.345" y1="3.7961" x2="-4.54454" y2="41.6921" gradientUnits="userSpaceOnUse"><stop stop-color="#B8D26E"/><stop offset="1" stop-color="#7FB525"/></linearGradient><linearGradient id="paint4_linearfnFT" x1="73.3355" y1="13.2835" x2="55.2851" y2="13.6187" gradientUnits="userSpaceOnUse"><stop stop-color="#B4E034"/><stop offset="1" stop-color="#60A927"/></linearGradient><linearGradient id="paint5_linearfnFT" x1="19.6462" y1="38.5525" x2="4.84721" y2="74.591" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="#CECEEB"/></linearGradient><linearGradient id="paint6_linearfnFT" x1="40.8644" y1="127.304" x2="64.3029" y2="127.257" gradientUnits="userSpaceOnUse"><stop stop-color="#1D1D1B" stop-opacity="0.5"/><stop offset="0.038033" stop-color="#1D1D1B" stop-opacity="0.4837"/><stop offset="0.4243" stop-color="#1D1D1B" stop-opacity="0.3185"/><stop offset="1" stop-color="#1D1D1B" stop-opacity="0.01"/></linearGradient><linearGradient id="paint7_linearfnFT" x1="43.5865" y1="14.5017" x2="39.698" y2="16.5945" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint8_linearfnFT" x1="27.2844" y1="20.7085" x2="24.551" y2="23.0576" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint9_linearfnFT" x1="53.9474" y1="68.165" x2="54.2241" y2="71.8129" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint10_linearfnFT" x1="47.4862" y1="62.8245" x2="48.1278" y2="72.309" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.5"/><stop offset="0.0896271" stop-color="white" stop-opacity="0.4552"/><stop offset="1" stop-color="white" stop-opacity="0.01"/></linearGradient><linearGradient id="paint11_linearfnFT" x1="46.2523" y1="64.2997" x2="47.3936" y2="74.4311" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint12_linearfnFT" x1="41.7739" y1="6.00968" x2="12.5042" y2="22.9381" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.5"/><stop offset="1" stop-color="white" stop-opacity="0.01"/></linearGradient><linearGradient id="paint13_linearfnFT" x1="47.4218" y1="94.4836" x2="73.2564" y2="94.5358" gradientUnits="userSpaceOnUse"><stop stop-color="#1D1D1B" stop-opacity="0.5"/><stop offset="0.0896271" stop-color="#1D1D1B" stop-opacity="0.4552"/><stop offset="1" stop-color="#1D1D1B" stop-opacity="0.01"/></linearGradient><linearGradient id="paint14_linearfnFT" x1="65.9224" y1="17.9327" x2="62.2525" y2="18.8319" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.4"/><stop offset="1" stop-color="white" stop-opacity="0.01"/></linearGradient><linearGradient id="paint15_linearfnFT" x1="32.9961" y1="72.88" x2="34.9045" y2="63.6797" gradientUnits="userSpaceOnUse"><stop stop-color="#1D1D1B" stop-opacity="0.5"/><stop offset="0.0896271" stop-color="#1D1D1B" stop-opacity="0.4552"/><stop offset="1" stop-color="#1D1D1B" stop-opacity="0.01"/></linearGradient><linearGradient id="paint16_linearfnFT" x1="44.0294" y1="126.133" x2="67.5521" y2="126.153" gradientUnits="userSpaceOnUse"><stop stop-color="#1D1D1B" stop-opacity="0.5"/><stop offset="1" stop-color="#1D1D1B" stop-opacity="0.01"/></linearGradient><linearGradient id="paint17_linearfnFT" x1="22.534" y1="12.0193" x2="11.1255" y2="55.8502" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.5"/><stop offset="1" stop-color="white" stop-opacity="0.01"/></linearGradient><linearGradient id="paint18_linearfnFT" x1="22.534" y1="12.0193" x2="11.1255" y2="55.8502" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.5"/><stop offset="1" stop-color="white" stop-opacity="0.01"/></linearGradient><linearGradient id="paint19_linearfnFT" x1="50.221" y1="57.9655" x2="41.2037" y2="70.3766" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.5"/><stop offset="0.0896271" stop-color="white" stop-opacity="0.4552"/><stop offset="1" stop-color="white" stop-opacity="0.01"/></linearGradient><linearGradient id="paint20_linearfnFT" x1="52.941" y1="60.8189" x2="52.0482" y2="62.8202" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint21_linearfnFT" x1="61.7953" y1="63.4651" x2="61.7513" y2="64.003" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint22_linearfnFT" x1="29.3237" y1="6.54525" x2="25.4255" y2="21.9452" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.65"/><stop offset="1" stop-color="white" stop-opacity="0.01"/></linearGradient><linearGradient id="paint23_linearfnFT" x1="38.0476" y1="15.4288" x2="44.8288" y2="22.323" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient><linearGradient id="paint24_linearfnFT" x1="33.713" y1="25.5814" x2="43.0822" y2="15.9592" gradientUnits="userSpaceOnUse"><stop stop-opacity="0.01"/><stop offset="1" stop-opacity="0.4"/></linearGradient></defs>
        </>
      )
  }
}

const BrandsShopify = forwardRef((props, ref) => {
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

BrandsShopify.displayName = 'BrandsShopify'

export default BrandsShopify
