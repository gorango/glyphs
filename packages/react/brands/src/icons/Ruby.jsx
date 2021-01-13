
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
            d="M56.4847 49.6017L22.2284 69.9995L66.5838 66.9813L70 22.1313L56.4847 49.6017Z"
            fill="url(#paint0_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66.6564 66.9513L62.844 40.5649L52.4597 54.3153L66.6564 66.9513Z"
            fill="url(#paint1_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66.7079 66.9506L38.7781 64.752L22.3767 69.9421L66.7079 66.9506Z"
            fill="url(#paint2_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.4162 69.9492L29.3934 47.0278L14.0399 50.32L22.4162 69.9492Z"
            fill="url(#paint3_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.5433 29.5293L51.1759 15.3052L46.3397 30.9839L68.5433 29.5293Z"
            fill="url(#paint4_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.4216 10.2331L50.2071 15.8936L43.7629 10.1572L60.4216 10.2331Z"
            fill="url(#paint5_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 58.0079L14.279 50.1822L10.8176 40.8594L10 58.0079Z"
            fill="url(#paint6_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.5875 40.5648L14.0701 50.4707L29.2026 47.0662L46.4791 30.9654L51.3547 15.4358L43.6776 10L30.6256 14.8983C26.5134 18.7337 18.5338 26.3225 18.2461 26.4652C17.9615 26.611 12.9769 36.0583 10.5875 40.5648Z"
            fill="white"
          />
          <path
            d="M29.3058 46.9702L46.4793 30.9654L46.4869 30.9409L52.4571 54.3912L29.3058 46.9702Z"
            fill="url(#paint7_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.8158 22.7689C31.7282 13.9076 43.2176 8.67229 47.6268 13.1333C52.0333 17.5942 47.3603 28.4354 38.448 37.2936C29.5357 46.1518 18.1886 51.6756 13.7824 47.2147C9.37315 42.7567 13.9035 31.627 22.8158 22.7689Z"
            fill="url(#paint8_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.4161 69.9391L29.3388 46.9448L52.3298 54.3514C44.017 62.168 34.7716 68.776 22.4161 69.9391Z"
            fill="url(#paint9_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.5094 30.92L52.4116 54.3637C59.3555 47.0421 65.5878 39.1709 68.64 29.4351L46.5094 30.92Z"
            fill="url(#paint10_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.5798 29.5547C70.9419 22.4062 71.487 12.1511 60.3486 10.2471L51.2091 15.3093L68.5798 29.5547Z"
            fill="url(#paint11_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 57.9049C10.3271 69.703 18.8154 69.8788 22.4312 69.9823L14.0791 50.4224L10 57.9049Z"
            fill="#9E1209"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.5424 30.9565C51.8783 34.2453 62.6322 40.8502 62.8502 40.9717C63.1891 41.163 67.4865 33.7047 68.4617 29.4897L46.5424 30.9565Z"
            fill="url(#paint12_radialCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.3298 46.9448L38.5844 64.8495C44.0565 61.8735 48.3416 58.2476 52.2663 54.3636L29.3298 46.9448Z"
            fill="url(#paint13_radialCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.0429 50.4463L12.7317 66.1038C15.2058 69.4928 18.6096 69.7873 22.18 69.5231C19.5969 63.0761 14.4366 50.1851 14.0429 50.4463Z"
            fill="url(#paint14_linearCWSt)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.1548 15.3483L69.5396 17.9356C68.5585 13.7661 65.5453 11.0756 60.4093 10.2344L51.1548 15.3483Z"
            fill="url(#paint15_linearCWSt)"
          />
          <defs><linearGradient id="paint0_linearCWSt" x1="62.715" y1="75.4562" x2="50.0041" y2="53.0767" gradientUnits="userSpaceOnUse"><stop stop-color="#FB7655"/><stop offset="0.41" stop-color="#E42B1E"/><stop offset="0.99" stop-color="#990000"/><stop offset="1" stop-color="#990000"/></linearGradient><linearGradient id="paint1_linearCWSt" x1="69.0203" y1="56.6317" x2="52.6794" y2="45.6964" gradientUnits="userSpaceOnUse"><stop stop-color="#871101"/><stop offset="0.99" stop-color="#911209"/><stop offset="1" stop-color="#911209"/></linearGradient><linearGradient id="paint2_linearCWSt" x1="55.9684" y1="76.1353" x2="39.628" y2="65.2003" gradientUnits="userSpaceOnUse"><stop stop-color="#871101"/><stop offset="0.99" stop-color="#911209"/><stop offset="1" stop-color="#911209"/></linearGradient><linearGradient id="paint3_linearCWSt" x1="21.7185" y1="48.6861" x2="24.2611" y2="65.1646" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.23" stop-color="#E57252"/><stop offset="0.46" stop-color="#DE3B20"/><stop offset="0.99" stop-color="#A60003"/><stop offset="1" stop-color="#A60003"/></linearGradient><linearGradient id="paint4_linearCWSt" x1="54.5474" y1="17.7501" x2="57.3515" y2="29.801" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.18" stop-color="#E46342"/><stop offset="0.4" stop-color="#C82410"/><stop offset="0.99" stop-color="#A80D00"/><stop offset="1" stop-color="#A80D00"/></linearGradient><linearGradient id="paint5_linearCWSt" x1="46.0299" y1="13.5042" x2="58.0634" y2="7.50413" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.54" stop-color="#C81F11"/><stop offset="0.99" stop-color="#BF0905"/><stop offset="1" stop-color="#BF0905"/></linearGradient><linearGradient id="paint6_linearCWSt" x1="11.182" y1="44.4836" x2="12.1768" y2="54.4157" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.31" stop-color="#DE4024"/><stop offset="0.99" stop-color="#BF190B"/><stop offset="1" stop-color="#BF190B"/></linearGradient><linearGradient id="paint7_linearCWSt" x1="39.1122" y1="33.2966" x2="40.0491" y2="50.1158" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.23" stop-color="#E4714E"/><stop offset="0.56" stop-color="#BE1A0D"/><stop offset="0.99" stop-color="#A80D00"/><stop offset="1" stop-color="#A80D00"/></linearGradient><linearGradient id="paint8_linearCWSt" x1="4.38076" y1="57.1006" x2="51.0198" y2="9.27584" gradientUnits="userSpaceOnUse"><stop stop-color="#BD0012"/><stop offset="0.07" stop-color="white"/><stop offset="0.17" stop-color="white"/><stop offset="0.27" stop-color="#C82F1C"/><stop offset="0.33" stop-color="#820C01"/><stop offset="0.46" stop-color="#A31601"/><stop offset="0.72" stop-color="#B31301"/><stop offset="0.99" stop-color="#E82609"/><stop offset="1" stop-color="#E82609"/></linearGradient><linearGradient id="paint9_linearCWSt" x1="40.0029" y1="61.9382" x2="25.9904" y2="58.4894" gradientUnits="userSpaceOnUse"><stop stop-color="#8C0C01"/><stop offset="0.54" stop-color="#990C00"/><stop offset="0.99" stop-color="#A80D0E"/><stop offset="1" stop-color="#A80D0E"/></linearGradient><linearGradient id="paint10_linearCWSt" x1="64.0633" y1="45.0787" x2="51.5882" y2="33.9287" gradientUnits="userSpaceOnUse"><stop stop-color="#7E110B"/><stop offset="0.99" stop-color="#9E0C00"/><stop offset="1" stop-color="#9E0C00"/></linearGradient><linearGradient id="paint11_linearCWSt" x1="68.6354" y1="24.5583" x2="62.4182" y2="17.9302" gradientUnits="userSpaceOnUse"><stop stop-color="#79130D"/><stop offset="0.99" stop-color="#9E120B"/><stop offset="1" stop-color="#9E120B"/></linearGradient><radialGradient id="paint12_radialCWSt" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(53.5568 34.1081) scale(15.2499 15.2923)"><stop stop-color="#A80D00"/><stop offset="0.99" stop-color="#7E0E08"/><stop offset="1" stop-color="#7E0E08"/></radialGradient><radialGradient id="paint13_radialCWSt" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.4376 54.2606) scale(20.2727 20.3291)"><stop stop-color="#A30C00"/><stop offset="0.99" stop-color="#800E08"/><stop offset="1" stop-color="#800E08"/></radialGradient><linearGradient id="paint14_linearCWSt" x1="18.0766" y1="69.9258" x2="12.9991" y2="52.7473" gradientUnits="userSpaceOnUse"><stop stop-color="#8B2114"/><stop offset="0.43" stop-color="#9E100A"/><stop offset="0.99" stop-color="#B3100C"/><stop offset="1" stop-color="#B3100C"/></linearGradient><linearGradient id="paint15_linearCWSt" x1="56.8301" y1="12.9759" x2="68.1657" y2="17.9657" gradientUnits="userSpaceOnUse"><stop stop-color="#B31000"/><stop offset="0.44" stop-color="#910F08"/><stop offset="0.99" stop-color="#791C12"/><stop offset="1" stop-color="#791C12"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M24.226 24.1874C28.5393 19.8988 33.4257 16.5442 37.6682 14.8062C39.793 13.9358 41.655 13.5126 43.1454 13.511C44.6162 13.5094 45.5825 13.9106 46.2039 14.539C47.5088 15.86 47.847 18.597 46.1723 22.8288C44.566 26.8877 41.3508 31.5889 37.0381 35.8753C32.7125 40.1746 27.8516 43.6035 23.6371 45.411C21.5256 46.3166 19.6823 46.7693 18.2102 46.7927C16.7617 46.8157 15.8175 46.4293 15.2053 45.8095L15.2043 45.8085C14.6445 45.2425 14.2578 44.4066 14.1252 43.3008L17.8378 32.108C19.5013 29.4526 21.665 26.7328 24.226 24.1874Z"
            fill="currentColor"
          />
          <path
            d="M17.8365 32.11C17.8369 32.1093 17.8373 32.1086 17.8378 32.108L20.3405 24.5627C20.3403 24.5629 20.3406 24.5626 20.3405 24.5627L17.8365 32.11Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.1249 43.2984C14.125 43.2992 14.1251 43.3 14.1252 43.3008L12.3604 48.6213C13.9512 50.2313 16.0773 50.827 18.2737 50.7922C20.4469 50.7576 22.8236 50.1122 25.2137 49.0872C26.5007 48.5352 27.8224 47.8598 29.1563 47.0787L29.3082 47.0461L29.3289 46.9776C32.9032 44.8618 36.5569 41.9933 39.8579 38.7124C42.2014 36.3831 44.2796 33.904 46 31.412C47.6561 29.0131 48.981 26.6017 49.8916 24.3007C51.6798 19.7821 52.1513 14.868 49.0497 11.728C48.364 11.0343 47.5767 10.5249 46.726 10.1709L60.4216 10.2333L60.4173 10.2357C65.5484 11.0784 68.559 13.7683 69.5396 17.9356L69.5268 17.9338C69.8802 19.2928 70.0053 20.7406 69.9635 22.2058L70.0001 22.1315L66.6104 66.6328L66.6557 66.9465L66.7079 66.9506L66.5855 66.9589L66.5838 66.9814L22.2284 69.9996L22.2655 69.9776C18.5733 69.8712 10.3684 69.5281 10.0029 58.0026L10 58.0079L10.0019 57.9689L10 57.9049L10.0054 57.895L10.5848 45.7426C10.9511 46.8062 11.5285 47.7799 12.3594 48.6204L14.1249 43.2984ZM51.278 15.3656L51.25 15.3617L51.3547 15.4358L51.3507 15.4483L66.9874 28.2549L66.9896 28.2504L51.278 15.3656ZM46.4953 30.9737L46.5225 30.9719L48.9832 40.7459L46.4953 30.9737ZM66.5869 66.9411L66.6506 66.9461L66.5906 66.8927L66.5869 66.9411Z"
            fill="currentColor"
          />
          <path
            d="M29.2451 47.0265C29.2174 47.0428 29.1897 47.0591 29.1621 47.0753L29.2025 47.0662L29.2451 47.0265Z"
            fill="currentColor"
          />
          <path
            d="M14.1249 43.2984C13.9467 41.8076 14.2299 39.8264 15.1723 37.3546C15.8086 35.6857 16.7073 33.9127 17.8365 32.11L14.1249 43.2984Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M22.2284 69.9996L66.5838 66.9814L70.0001 22.1315M52.4597 54.3154L66.6564 66.9513L63.0228 41.24C62.8047 41.1186 51.8783 34.2455 46.5424 30.9567L68.4616 29.4899M38.7781 64.752L66.7079 66.9506L22.3767 69.9421M46.4791 30.9654L29.2025 47.0662L14.0701 50.4707L10.5875 40.5648C12.9768 36.0583 17.9614 26.611 18.2461 26.4652C18.5338 26.3225 26.5134 18.7337 30.6255 14.8983L43.6776 10L51.3547 15.4358L46.4791 30.9654ZM46.4791 30.9654L29.3058 46.9701L52.4571 54.3911L46.4869 30.9409L46.4791 30.9654ZM22.4162 69.9492L29.3934 47.0279L14.0399 50.32L22.4162 69.9492ZM68.5433 29.5292L51.1759 15.3051L46.3397 30.9838L68.5433 29.5292ZM60.4216 10.2333L50.2071 15.8938L43.7629 10.1574L60.4216 10.2333ZM10 58.0079L14.279 50.1822L10.8176 40.8594L10 58.0079ZM22.8158 22.7691C31.7282 13.9079 43.2176 8.67253 47.6268 13.1335C52.0333 17.5945 47.3603 28.4357 38.448 37.2939C29.5357 46.152 18.1886 51.6759 13.7824 47.2149C9.37313 42.757 13.9035 31.6273 22.8158 22.7691ZM22.4161 69.9389L29.3388 46.9446L52.3298 54.3513C44.017 62.1678 34.7716 68.7758 22.4161 69.9389ZM46.5094 30.92L52.4116 54.3636C59.3555 47.0421 65.5878 39.1708 68.6401 29.435L46.5094 30.92ZM68.5798 29.5545C70.9419 22.406 71.487 12.1509 60.3485 10.2468L51.2091 15.3091L68.5798 29.5545ZM10 57.9049C10.3271 69.7029 18.8154 69.8788 22.4312 69.9823L14.0791 50.4223L10 57.9049ZM29.3299 46.9446L38.5844 64.8493C44.0565 61.8733 48.3416 58.2474 52.2663 54.3634L29.3299 46.9446ZM14.0429 50.4461L12.7317 66.1035C15.2058 69.4925 18.6096 69.7871 22.18 69.5229C19.5969 63.0759 14.4366 50.1849 14.0429 50.4461ZM51.1548 15.3483L69.5396 17.9356C68.5585 13.7661 65.5453 11.0756 60.4093 10.2344L51.1548 15.3483Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsRuby = forwardRef((props, ref) => {
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

BrandsRuby.displayName = 'BrandsRuby'

export default BrandsRuby
