
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCog1 = {
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
            d="M34.3098 12.5008C37.7768 11.8327 41.3425 11.8331 44.8095 12.5019C45.4546 12.6264 45.9797 13.0849 46.221 13.696L47.859 17.8438C48.0592 18.3508 48.4596 18.7501 48.9561 18.9752C49.6308 19.281 50.2941 19.6214 50.9436 19.9964C51.5934 20.3716 52.2203 20.7762 52.8229 21.2079C53.2661 21.5254 53.8121 21.6725 54.3514 21.5924L58.7596 20.9374C59.4096 20.8408 60.0694 21.0665 60.4997 21.5632C62.8126 24.2327 64.5956 27.3222 65.7497 30.6605C65.9644 31.2813 65.8298 31.9652 65.4213 32.4796L62.6505 35.9691C62.3115 36.3961 62.1659 36.9424 62.2192 37.4849C62.2916 38.2218 62.3284 38.9661 62.3284 39.7156C62.3284 40.4657 62.2915 41.2105 62.219 41.9478C62.1657 42.4904 62.3113 43.0368 62.6503 43.4637L65.4195 46.9512C65.8281 47.4657 65.9626 48.1498 65.7478 48.7707C64.5926 52.1098 62.8082 55.1999 60.4936 57.8695C60.0633 58.3659 59.4037 58.5913 58.7539 58.4948L54.3493 57.8403C53.8101 57.7602 53.2641 57.9073 52.8209 58.2247C52.219 58.6559 51.5927 59.06 50.9436 59.4348C50.2944 59.8096 49.6313 60.1499 48.9569 60.4556C48.4604 60.6807 48.0601 61.08 47.8598 61.587L46.2242 65.729C45.9829 66.34 45.4579 66.7985 44.8129 66.923C41.3437 67.5928 37.7756 67.5932 34.3064 66.9242C33.6612 66.7998 33.136 66.3413 32.8946 65.7301L31.2588 61.5876C31.0585 61.0805 30.6582 60.6812 30.1616 60.4562C29.4868 60.1503 28.8233 59.8098 28.1738 59.4348C27.5247 59.06 26.8985 58.656 26.2966 58.2248C25.8534 57.9074 25.3074 57.7604 24.7682 57.8405L20.3599 58.4955C19.7101 58.592 19.0505 58.3666 18.6202 57.8703C16.3064 55.2018 14.5225 52.1132 13.3671 48.7756C13.1521 48.1546 13.2866 47.4704 13.6952 46.9557L16.4671 43.4649C16.8062 43.0379 16.9518 42.4915 16.8984 41.9489C16.8258 41.2112 16.7889 40.466 16.7889 39.7156C16.7889 38.9657 16.8258 38.221 16.8983 37.4838C16.9516 36.9413 16.806 36.3949 16.467 35.968L13.6934 32.4751C13.2849 31.9605 13.1504 31.2765 13.3652 30.6556C14.5195 27.3188 16.302 24.2308 18.6141 21.5624C19.0444 21.0658 19.7042 20.8402 20.3542 20.9367L24.7661 21.5923C25.3054 21.6724 25.8514 21.5253 26.2946 21.2078C26.8971 20.7761 27.5239 20.3716 28.1738 19.9964C28.8236 19.6212 29.4873 19.2807 30.1624 18.9747C30.659 18.7496 31.0594 18.3503 31.2597 17.8432L32.8978 13.6949C33.1392 13.0837 33.6645 12.6251 34.3098 12.5008Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46.4848 27.7129C42.1976 25.2376 36.9156 25.2376 32.6284 27.7129C28.3412 30.1881 25.7002 34.7624 25.7002 39.7129C25.7002 44.6633 28.3412 49.2376 32.6284 51.7129C36.9156 54.1881 42.1976 54.1881 46.4848 51.7129C50.772 49.2376 53.413 44.6633 53.413 39.7129C53.413 34.7624 50.772 30.1881 46.4848 27.7129Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.8978 13.6949C33.1392 13.0837 33.6645 12.6251 34.3098 12.5008C37.7768 11.8327 41.3425 11.8331 44.8095 12.5019C45.4546 12.6264 45.9797 13.0849 46.221 13.696L47.859 17.8438C48.0592 18.3508 48.4596 18.7501 48.9561 18.9752C49.6308 19.281 50.2941 19.6214 50.9436 19.9964C51.5934 20.3716 52.2203 20.7762 52.8229 21.2079C53.2661 21.5254 53.8121 21.6725 54.3514 21.5924L58.7596 20.9374C59.4096 20.8408 60.0694 21.0665 60.4997 21.5632C62.8126 24.2327 64.5956 27.3222 65.7497 30.6605C65.9644 31.2813 65.8298 31.9652 65.4213 32.4796L62.6505 35.9691C62.3115 36.396 62.1659 36.9424 62.2192 37.4849C62.2916 38.2218 62.3284 38.9661 62.3284 39.7156C62.3284 40.4657 62.2915 41.2105 62.219 41.9478C62.1657 42.4904 62.3113 43.0368 62.6503 43.4637L65.4195 46.9512C65.8281 47.4657 65.9626 48.1498 65.7478 48.7707C64.5926 52.1098 62.8082 55.1999 60.4936 57.8695C60.0633 58.3659 59.4037 58.5913 58.7539 58.4948L54.3493 57.8403C53.8101 57.7602 53.2641 57.9073 52.8209 58.2247C52.219 58.6559 51.5927 59.06 50.9436 59.4348C50.2944 59.8096 49.6313 60.1499 48.9569 60.4556C48.4604 60.6807 48.0601 61.08 47.8598 61.587L46.2242 65.729C45.9829 66.34 45.4579 66.7985 44.8129 66.923C41.3437 67.5928 37.7756 67.5932 34.3064 66.9242C33.6612 66.7998 33.136 66.3413 32.8946 65.7301L31.2588 61.5876C31.0585 61.0805 30.6582 60.6812 30.1616 60.4562C29.4868 60.1503 28.8233 59.8098 28.1738 59.4348C27.5247 59.06 26.8985 58.656 26.2966 58.2248C25.8534 57.9074 25.3074 57.7604 24.7682 57.8405L20.3599 58.4955C19.7101 58.592 19.0505 58.3666 18.6202 57.8703C16.3064 55.2018 14.5225 52.1132 13.3671 48.7756C13.1521 48.1546 13.2866 47.4704 13.6952 46.9557L16.4671 43.4649C16.8062 43.0379 16.9518 42.4915 16.8984 41.9489C16.8258 41.2112 16.7889 40.466 16.7889 39.7156C16.7889 38.9657 16.8258 38.221 16.8983 37.4838C16.9516 36.9413 16.806 36.3949 16.467 35.968L13.6934 32.4751C13.2849 31.9605 13.1504 31.2765 13.3652 30.6556C14.5195 27.3188 16.302 24.2308 18.6141 21.5624C19.0444 21.0658 19.7042 20.8402 20.3542 20.9367L24.7661 21.5923C25.3054 21.6724 25.8514 21.5253 26.2946 21.2078C26.8971 20.7761 27.524 20.3716 28.1738 19.9964C28.8236 19.6212 29.4873 19.2807 30.1624 18.9747C30.659 18.7496 31.0594 18.3503 31.2597 17.8432L32.8978 13.6949ZM46.4848 27.7132C42.1976 25.2379 36.9156 25.2379 32.6284 27.7132C28.3412 30.1884 25.7002 34.7627 25.7002 39.7132C25.7002 44.6636 28.3412 49.2379 32.6284 51.7132C36.9156 54.1884 42.1976 54.1884 46.4848 51.7132C50.772 49.2379 53.413 44.6636 53.413 39.7132C53.413 34.7627 50.772 30.1884 46.4848 27.7132Z"
            fill="currentColor"
          />
          <path
            d="M50.9436 19.9964L51.9436 18.2644L50.9436 19.9964ZM28.1738 59.4348L29.1738 57.7028H29.1738L28.1738 59.4348ZM28.1738 19.9964L27.1738 18.2644L28.1738 19.9964ZM32.6284 27.7132L33.6284 29.4452V29.4452L32.6284 27.7132ZM46.4848 27.7132L47.4848 25.9811L46.4848 27.7132ZM32.6284 51.7132L31.6284 53.4452H31.6284L32.6284 51.7132ZM46.4848 51.7132L47.4848 53.4452L46.4848 51.7132ZM20.3542 20.9367L20.0602 22.915L20.3542 20.9367ZM16.4671 43.4649L14.9009 42.2212L16.4671 43.4649ZM13.3671 48.7756L15.257 48.1214L13.3671 48.7756ZM13.6952 46.9557L15.2615 48.1994L13.6952 46.9557ZM20.3599 58.4955L20.0659 56.5172L20.3599 58.4955ZM18.6202 57.8703L17.1091 59.1805L18.6202 57.8703ZM26.2966 58.2248L25.132 59.8508L26.2966 58.2248ZM24.7682 57.8405L24.4743 55.8622L24.7682 57.8405ZM31.2588 61.5876L29.3986 62.3222L31.2588 61.5876ZM34.3064 66.9242L34.685 64.9604L34.3064 66.9242ZM32.8946 65.7301L31.0344 66.4647L32.8946 65.7301ZM46.2242 65.729L44.364 64.9945L46.2242 65.729ZM44.8129 66.923L44.4338 64.9593L44.8129 66.923ZM48.9569 60.4556L48.1311 58.6341L48.9569 60.4556ZM47.8598 61.587L45.9996 60.8524L47.8598 61.587ZM65.4195 46.9512L66.9858 45.7075L65.4195 46.9512ZM62.6503 43.4637L61.084 44.7074L62.6503 43.4637ZM62.6505 35.9691L64.2167 37.2128L62.6505 35.9691ZM62.2192 37.4849L64.2096 37.2893L62.2192 37.4849ZM65.7497 30.6605L63.8595 31.314L65.7497 30.6605ZM65.4213 32.4796L66.9876 33.7233L65.4213 32.4796ZM24.7661 21.5923L24.4722 23.5706L24.7661 21.5923ZM26.2946 21.2078L27.4594 22.8336L26.2946 21.2078ZM52.8229 21.2079L51.6581 22.8337L52.8229 21.2079ZM13.3652 30.6556L11.4751 30.0017L13.3652 30.6556ZM47.859 17.8438L49.7192 17.1092L47.859 17.8438ZM48.9561 18.9752L48.1304 20.7968L48.9561 18.9752ZM54.3493 57.8403L54.6432 55.8621L54.3493 57.8403ZM52.8209 58.2247L51.6563 56.5988L52.8209 58.2247ZM16.467 35.968L14.9007 37.2117L16.467 35.968ZM32.8978 13.6949L34.758 14.4295L32.8978 13.6949ZM60.4997 21.5632L58.9882 22.8728L60.4997 21.5632ZM60.4936 57.8695L58.9825 56.5594L60.4936 57.8695ZM58.7539 58.4948L58.4599 60.4731L58.7539 58.4948ZM44.8095 12.5019L45.1883 10.5381L44.8095 12.5019ZM46.221 13.696L44.3608 14.4306L46.221 13.696ZM45.1883 10.5381C41.4713 9.82104 37.6485 9.82062 33.9313 10.5369L34.6882 14.4646C37.9051 13.8448 41.2138 13.8451 44.4306 14.4657L45.1883 10.5381ZM49.7192 17.1092L48.0812 12.9614L44.3608 14.4306L45.9987 18.5784L49.7192 17.1092ZM51.9436 18.2644C51.2373 17.8566 50.5158 17.4863 49.7818 17.1536L48.1304 20.7968C48.7457 21.0758 49.3509 21.3863 49.9436 21.7285L51.9436 18.2644ZM53.9877 19.5821C53.3321 19.1124 52.6503 18.6724 51.9436 18.2644L49.9436 21.7285C50.5366 22.0708 51.1085 22.4399 51.6581 22.8337L53.9877 19.5821ZM58.4656 18.9591L54.0575 19.6141L54.6453 23.5707L59.0535 22.9157L58.4656 18.9591ZM67.6399 30.0069C66.4025 26.4278 64.4911 23.1156 62.0113 20.2535L58.9882 22.8728C61.1342 25.3497 62.7886 28.2165 63.8595 31.314L67.6399 30.0069ZM64.2167 37.2128L66.9876 33.7233L63.8551 31.2359L61.0842 34.7254L64.2167 37.2128ZM64.3284 39.7156C64.3284 38.9005 64.2884 38.0909 64.2096 37.2893L60.2288 37.6805C60.2948 38.3526 60.3284 39.0316 60.3284 39.7156H64.3284ZM64.2094 42.1435C64.2883 41.3414 64.3284 40.5313 64.3284 39.7156H60.3284C60.3284 40.4001 60.2948 41.0795 60.2286 41.7521L64.2094 42.1435ZM66.9858 45.7075L64.2166 42.22L61.084 44.7074L63.8533 48.1949L66.9858 45.7075ZM62.0047 59.1797C64.4863 56.3174 66.3993 53.0046 67.6379 49.4246L63.8577 48.1168C62.7858 51.215 61.1301 54.0823 58.9825 56.5594L62.0047 59.1797ZM54.0553 59.8186L58.4599 60.4731L59.0478 56.5165L54.6432 55.8621L54.0553 59.8186ZM51.9436 61.1669C52.6495 60.7593 53.3307 60.3197 53.9855 59.8507L51.6563 56.5988C51.1073 56.9921 50.536 57.3607 49.9436 57.7028L51.9436 61.1669ZM49.7827 62.2772C50.5164 61.9446 51.2376 61.5745 51.9436 61.1669L49.9436 57.7028C49.3512 58.0448 48.7462 58.3552 48.1311 58.6341L49.7827 62.2772ZM48.0844 66.4636L49.7201 62.3216L45.9996 60.8524L44.364 64.9945L48.0844 66.4636ZM33.9277 68.888C37.6472 69.6052 41.4726 69.6048 45.192 68.8868L44.4338 64.9593C41.2149 65.5807 37.904 65.5811 34.685 64.9604L33.9277 68.888ZM29.3986 62.3222L31.0344 66.4647L34.7548 64.9955L33.119 60.853L29.3986 62.3222ZM27.1738 61.1669C27.8802 61.5747 28.6018 61.945 29.3359 62.2778L30.9873 58.6346C30.3718 58.3556 29.7665 58.045 29.1738 57.7028L27.1738 61.1669ZM25.132 59.8508C25.7868 60.3198 26.4679 60.7593 27.1738 61.1669L29.1738 57.7028C28.5814 57.3608 28.0102 56.9921 27.4612 56.5989L25.132 59.8508ZM20.6538 60.4738L25.0622 59.8188L24.4743 55.8622L20.0659 56.5172L20.6538 60.4738ZM11.4771 49.4299C12.7159 53.0082 14.6284 56.3194 17.1091 59.1805L20.1313 56.5601C17.9845 54.0841 16.3291 51.2181 15.257 48.1214L11.4771 49.4299ZM14.9009 42.2212L12.129 45.712L15.2615 48.1994L18.0334 44.7086L14.9009 42.2212ZM14.7889 39.7156C14.7889 40.5317 14.8291 41.3422 14.908 42.1447L18.8888 41.7531C18.8226 41.0802 18.7889 40.4004 18.7889 39.7156H14.7889ZM14.9078 37.2881C14.829 38.0901 14.7889 38.9001 14.7889 39.7156H18.7889C18.7889 39.0313 18.8225 38.3519 18.8887 37.6795L14.9078 37.2881ZM12.1272 33.7188L14.9007 37.2117L18.0332 34.7243L15.2597 31.2314L12.1272 33.7188ZM17.1026 20.2527C14.6237 23.1136 12.7126 26.4243 11.4751 30.0017L15.2553 31.3094C16.3263 28.2134 17.9803 25.348 20.1256 22.8721L17.1026 20.2527ZM25.06 19.614L20.6481 18.9585L20.0602 22.915L24.4722 23.5706L25.06 19.614ZM27.1738 18.2644C26.4671 18.6723 25.7853 19.1123 25.1298 19.5819L27.4594 22.8336C28.009 22.4399 28.5808 22.0708 29.1738 21.7285L27.1738 18.2644ZM29.3368 17.1531C28.6024 17.4859 27.8804 17.8564 27.1738 18.2644L29.1738 21.7285C29.7668 21.3861 30.3723 21.0754 30.988 20.7963L29.3368 17.1531ZM31.0376 12.9603L29.3995 17.1086L33.1199 18.5778L34.758 14.4295L31.0376 12.9603ZM33.6284 29.4452C37.2968 27.3273 41.8164 27.3273 45.4848 29.4452L47.4848 25.9811C42.5788 23.1486 36.5344 23.1486 31.6284 25.9811L33.6284 29.4452ZM27.7002 39.7132C27.7002 35.4773 29.96 31.5631 33.6284 29.4452L31.6284 25.9811C26.7224 28.8136 23.7002 34.0482 23.7002 39.7132H27.7002ZM33.6284 49.9811C29.96 47.8632 27.7002 43.949 27.7002 39.7132H23.7002C23.7002 45.3781 26.7224 50.6127 31.6284 53.4452L33.6284 49.9811ZM45.4848 49.9811C41.8164 52.099 37.2968 52.099 33.6284 49.9811L31.6284 53.4452C36.5344 56.2777 42.5788 56.2777 47.4848 53.4452L45.4848 49.9811ZM51.413 39.7132C51.413 43.949 49.1532 47.8632 45.4848 49.9811L47.4848 53.4452C52.3908 50.6127 55.413 45.3781 55.413 39.7132H51.413ZM45.4848 29.4452C49.1532 31.5631 51.413 35.4773 51.413 39.7132H55.413C55.413 34.0482 52.3908 28.8136 47.4848 25.9811L45.4848 29.4452ZM30.988 20.7963C31.9208 20.3736 32.7146 19.604 33.1199 18.5778L29.3995 17.1086C29.4013 17.104 29.4014 17.107 29.3926 17.116C29.383 17.1258 29.365 17.1403 29.3368 17.1531L30.988 20.7963ZM20.1256 22.8721C20.1054 22.8954 20.0834 22.9074 20.0704 22.912C20.059 22.9161 20.0558 22.9144 20.0602 22.915L20.6481 18.9585C19.3635 18.7676 18.0079 19.2079 17.1026 20.2527L20.1256 22.8721ZM18.0334 44.7086C18.7195 43.8445 18.9891 42.7722 18.8888 41.7531L14.908 42.1447C14.911 42.1755 14.9075 42.1984 14.9038 42.2115C14.9004 42.2237 14.8977 42.2251 14.9009 42.2212L18.0334 44.7086ZM15.257 48.1214C15.2671 48.1505 15.2665 48.1756 15.264 48.1891C15.2618 48.201 15.2587 48.2029 15.2615 48.1994L12.129 45.712C11.3213 46.7291 11.0249 48.1234 11.4771 49.4299L15.257 48.1214ZM20.0659 56.5172C20.0615 56.5179 20.0647 56.5161 20.0761 56.5202C20.0891 56.5248 20.1111 56.5368 20.1313 56.5601L17.1091 59.1805C18.0145 60.2246 19.3697 60.6646 20.6538 60.4738L20.0659 56.5172ZM27.4612 56.5989C26.6288 56.0027 25.5655 55.7001 24.4743 55.8622L25.0622 59.8188C25.0572 59.8195 25.0598 59.8179 25.072 59.821C25.0853 59.8244 25.1068 59.8328 25.132 59.8508L27.4612 56.5989ZM33.119 60.853C32.7138 59.8268 31.92 59.0573 30.9873 58.6346L29.3359 62.2778C29.3641 62.2905 29.3822 62.305 29.3917 62.3148C29.4005 62.3238 29.4004 62.3269 29.3986 62.3222L33.119 60.853ZM34.685 64.9604C34.7153 64.9662 34.7367 64.9793 34.7472 64.9882C34.7564 64.9961 34.7565 64.9997 34.7548 64.9955L31.0344 66.4647C31.5114 67.6725 32.5704 68.6263 33.9277 68.888L34.685 64.9604ZM44.364 64.9945C44.3623 64.9986 44.3625 64.995 44.3716 64.9871C44.3821 64.9782 44.4035 64.9651 44.4338 64.9593L45.192 68.8868C46.5489 68.6248 47.6076 67.6712 48.0844 66.4636L44.364 64.9945ZM48.1311 58.6341C47.1985 59.0568 46.4048 59.8263 45.9996 60.8524L49.7201 62.3216C49.7182 62.3263 49.7181 62.3232 49.7269 62.3142C49.7365 62.3044 49.7545 62.2899 49.7827 62.2772L48.1311 58.6341ZM63.8533 48.1949C63.8561 48.1984 63.8529 48.1964 63.8507 48.1846C63.8482 48.171 63.8476 48.146 63.8577 48.1168L67.6379 49.4246C68.0898 48.1183 67.7933 46.7244 66.9858 45.7075L63.8533 48.1949ZM60.2286 41.7521C60.1284 42.7712 60.3979 43.8434 61.084 44.7074L64.2166 42.22C64.2197 42.2239 64.217 42.2225 64.2136 42.2103C64.2099 42.1972 64.2064 42.1743 64.2094 42.1435L60.2286 41.7521ZM61.0842 34.7254C60.3982 35.5894 60.1286 36.6615 60.2288 37.6805L64.2096 37.2893C64.2066 37.2585 64.2101 37.2356 64.2138 37.2225C64.2172 37.2104 64.2199 37.2089 64.2167 37.2128L61.0842 34.7254ZM63.8595 31.314C63.8494 31.2848 63.85 31.2598 63.8525 31.2462C63.8547 31.2344 63.8578 31.2324 63.8551 31.2359L66.9876 33.7233C67.7949 32.7066 68.0915 31.313 67.6399 30.0069L63.8595 31.314ZM24.4722 23.5706C25.5636 23.7327 26.6269 23.43 27.4594 22.8336L25.1298 19.5819C25.1047 19.5999 25.0831 19.6084 25.0699 19.6117C25.0577 19.6149 25.0551 19.6133 25.06 19.614L24.4722 23.5706ZM51.6581 22.8337C52.4906 23.4301 53.5539 23.7328 54.6453 23.5707L54.0575 19.6141C54.0624 19.6134 54.0598 19.615 54.0476 19.6119C54.0344 19.6085 54.0128 19.6001 53.9877 19.5821L51.6581 22.8337ZM15.2597 31.2314C15.2569 31.2278 15.26 31.2298 15.2622 31.2417C15.2647 31.2552 15.2653 31.2803 15.2553 31.3094L11.4751 30.0017C11.0232 31.308 11.3197 32.7019 12.1272 33.7188L15.2597 31.2314ZM45.9987 18.5784C46.404 19.6045 47.1977 20.374 48.1304 20.7968L49.7818 17.1536C49.7537 17.1409 49.7356 17.1264 49.726 17.1166C49.7172 17.1076 49.7173 17.1045 49.7192 17.1092L45.9987 18.5784ZM54.6432 55.8621C53.552 55.6999 52.4887 56.0026 51.6563 56.5988L53.9855 59.8507C54.0107 59.8327 54.0323 59.8243 54.0455 59.8209C54.0577 59.8177 54.0603 59.8194 54.0553 59.8186L54.6432 55.8621ZM18.8887 37.6795C18.9888 36.6605 18.7193 35.5883 18.0332 34.7243L14.9007 37.2117C14.8976 37.2077 14.9003 37.2092 14.9037 37.2213C14.9074 37.2345 14.9109 37.2574 14.9078 37.2881L18.8887 37.6795ZM33.9313 10.5369C32.5738 10.7985 31.5146 11.7524 31.0376 12.9603L34.758 14.4295C34.7597 14.4253 34.7595 14.429 34.7504 14.4368C34.7399 14.4457 34.7185 14.4588 34.6882 14.4646L33.9313 10.5369ZM59.0535 22.9157C59.058 22.915 59.0547 22.9168 59.0434 22.9127C59.0304 22.9081 59.0084 22.8961 58.9882 22.8728L62.0113 20.2535C61.106 19.2086 59.7503 18.7683 58.4656 18.9591L59.0535 22.9157ZM58.9825 56.5594C59.0027 56.5361 59.0247 56.5241 59.0377 56.5195C59.049 56.5155 59.0523 56.5172 59.0478 56.5165L58.4599 60.4731C59.7441 60.6639 61.0994 60.2239 62.0047 59.1797L58.9825 56.5594ZM44.4306 14.4657C44.4003 14.4599 44.3789 14.4468 44.3685 14.4379C44.3593 14.43 44.3591 14.4264 44.3608 14.4306L48.0812 12.9614C47.6043 11.7537 46.5455 10.8 45.1883 10.5381L44.4306 14.4657Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.8978 13.6949C33.1392 13.0837 33.6645 12.6251 34.3098 12.5008C37.7768 11.8327 41.3425 11.8331 44.8095 12.5019C45.4546 12.6264 45.9797 13.0849 46.221 13.696L47.859 17.8438C48.0592 18.3508 48.4596 18.7501 48.9561 18.9752C49.6308 19.281 50.2941 19.6214 50.9436 19.9964C51.5934 20.3716 52.2203 20.7762 52.8229 21.2079C53.2661 21.5254 53.8121 21.6725 54.3514 21.5924L58.7596 20.9374C59.4096 20.8408 60.0694 21.0665 60.4997 21.5632C62.8126 24.2327 64.5956 27.3222 65.7497 30.6605C65.9644 31.2813 65.8298 31.9652 65.4213 32.4796L62.6505 35.9691C62.3115 36.396 62.1659 36.9424 62.2192 37.4849C62.2916 38.2218 62.3284 38.9661 62.3284 39.7156C62.3284 40.4657 62.2915 41.2105 62.219 41.9478C62.1657 42.4904 62.3113 43.0368 62.6503 43.4637L65.4195 46.9512C65.8281 47.4657 65.9626 48.1498 65.7478 48.7707C64.5926 52.1098 62.8082 55.1999 60.4936 57.8695C60.0633 58.3659 59.4037 58.5913 58.7539 58.4948L54.3493 57.8403C53.8101 57.7602 53.2641 57.9073 52.8209 58.2247C52.219 58.6559 51.5927 59.06 50.9436 59.4348C50.2944 59.8096 49.6313 60.1499 48.9569 60.4556C48.4604 60.6807 48.0601 61.08 47.8598 61.587L46.2242 65.729C45.9829 66.34 45.4579 66.7985 44.8129 66.923C41.3437 67.5928 37.7756 67.5932 34.3064 66.9242C33.6612 66.7998 33.136 66.3413 32.8946 65.7301L31.2588 61.5876C31.0585 61.0805 30.6582 60.6812 30.1616 60.4562C29.4868 60.1503 28.8233 59.8098 28.1738 59.4348C27.5247 59.06 26.8985 58.656 26.2966 58.2248C25.8534 57.9074 25.3074 57.7604 24.7682 57.8405L20.3599 58.4955C19.7101 58.592 19.0505 58.3666 18.6202 57.8703C16.3064 55.2018 14.5225 52.1132 13.3671 48.7756C13.1521 48.1546 13.2866 47.4704 13.6952 46.9557L16.4671 43.4649C16.8062 43.0379 16.9518 42.4915 16.8984 41.9489C16.8258 41.2112 16.7889 40.466 16.7889 39.7156C16.7889 38.9657 16.8258 38.221 16.8983 37.4838C16.9516 36.9413 16.806 36.3949 16.467 35.968L13.6934 32.4751C13.2849 31.9605 13.1504 31.2765 13.3652 30.6556C14.5195 27.3188 16.302 24.2308 18.6141 21.5624C19.0444 21.0658 19.7042 20.8402 20.3542 20.9367L24.7661 21.5923C25.3054 21.6724 25.8514 21.5253 26.2946 21.2078C26.8971 20.7761 27.524 20.3716 28.1738 19.9964C28.8236 19.6212 29.4873 19.2807 30.1624 18.9747C30.659 18.7496 31.0594 18.3503 31.2597 17.8432L32.8978 13.6949ZM46.4848 27.7132C42.1976 25.2379 36.9156 25.2379 32.6284 27.7132C28.3412 30.1884 25.7002 34.7627 25.7002 39.7132C25.7002 44.6636 28.3412 49.2379 32.6284 51.7132C36.9156 54.1884 42.1976 54.1884 46.4848 51.7132C50.772 49.2379 53.413 44.6636 53.413 39.7132C53.413 34.7627 50.772 30.1884 46.4848 27.7132Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "duo" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.8978 13.6949C33.1392 13.0837 33.6645 12.6251 34.3098 12.5008C37.7768 11.8327 41.3425 11.8331 44.8095 12.5019C45.4546 12.6264 45.9797 13.0849 46.221 13.696L47.859 17.8438C48.0592 18.3508 48.4596 18.7501 48.9561 18.9752C49.6308 19.281 50.2941 19.6214 50.9436 19.9964C51.5934 20.3716 52.2203 20.7762 52.8229 21.2079C53.2661 21.5254 53.8121 21.6725 54.3514 21.5924L58.7596 20.9374C59.4096 20.8408 60.0694 21.0665 60.4997 21.5632C62.8126 24.2327 64.5956 27.3222 65.7497 30.6605C65.9644 31.2813 65.8298 31.9652 65.4213 32.4796L62.6505 35.9691C62.3115 36.3961 62.1659 36.9424 62.2192 37.4849C62.2916 38.2218 62.3284 38.9661 62.3284 39.7156C62.3284 40.4657 62.2915 41.2105 62.219 41.9478C62.1657 42.4904 62.3113 43.0368 62.6503 43.4637L65.4195 46.9512C65.8281 47.4657 65.9626 48.1498 65.7478 48.7707C64.5926 52.1098 62.8082 55.1999 60.4936 57.8695C60.0633 58.3659 59.4037 58.5913 58.7539 58.4948L54.3493 57.8403C53.8101 57.7602 53.2641 57.9073 52.8209 58.2247C52.219 58.6559 51.5927 59.06 50.9436 59.4348C50.2944 59.8096 49.6313 60.1499 48.9569 60.4556C48.4604 60.6807 48.0601 61.08 47.8598 61.587L46.2242 65.729C45.9829 66.34 45.4579 66.7985 44.8129 66.923C41.3437 67.5928 37.7756 67.5932 34.3064 66.9242C33.6612 66.7998 33.136 66.3413 32.8946 65.7301L31.2588 61.5876C31.0585 61.0805 30.6582 60.6812 30.1616 60.4562C29.4868 60.1503 28.8233 59.8098 28.1738 59.4348C27.5247 59.06 26.8985 58.656 26.2966 58.2248C25.8534 57.9074 25.3074 57.7604 24.7682 57.8405L20.3599 58.4955C19.7101 58.592 19.0505 58.3666 18.6202 57.8703C16.3064 55.2018 14.5225 52.1132 13.3671 48.7756C13.1521 48.1546 13.2866 47.4704 13.6952 46.9557L16.4671 43.4649C16.8062 43.0379 16.9518 42.4915 16.8984 41.9489C16.8258 41.2112 16.7889 40.466 16.7889 39.7156C16.7889 38.9657 16.8258 38.221 16.8983 37.4838C16.9516 36.9413 16.806 36.3949 16.467 35.968L13.6934 32.4751C13.2849 31.9605 13.1504 31.2765 13.3652 30.6556C14.5195 27.3188 16.302 24.2308 18.6141 21.5624C19.0444 21.0658 19.7042 20.8402 20.3542 20.9367L24.7661 21.5923C25.3054 21.6724 25.8514 21.5253 26.2946 21.2078C26.8971 20.7761 27.5239 20.3716 28.1738 19.9964C28.8236 19.6212 29.4873 19.2807 30.1624 18.9747C30.659 18.7496 31.0594 18.3503 31.2597 17.8432L32.8978 13.6949ZM46.4848 27.7132C42.1976 25.2379 36.9156 25.2379 32.6284 27.7132C28.3412 30.1884 25.7002 34.7627 25.7002 39.7132C25.7002 44.6636 28.3412 49.2379 32.6284 51.7132C36.9156 54.1884 42.1976 54.1884 46.4848 51.7132C50.772 49.2379 53.413 44.6636 53.413 39.7132C53.413 34.7627 50.772 30.1884 46.4848 27.7132Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M14.8998 42.2224L12.1289 45.712C11.3213 46.7291 11.0248 48.1234 11.4771 49.4299C12.7158 53.0082 14.6284 56.3194 17.1091 59.1805C18.0144 60.2246 19.3696 60.6646 20.6538 60.4738L25.0606 59.819C25.0606 59.819 25.0659 59.8194 25.072 59.821C25.0852 59.8244 25.1068 59.8328 25.1319 59.8508C25.7867 60.3198 26.4678 60.7593 27.1737 61.1669C27.8801 61.5747 28.6017 61.945 29.3359 62.2778L29.3991 62.3236L31.0344 66.4647C31.5113 67.6725 32.5703 68.6263 33.9276 68.888C37.6472 69.6052 41.4725 69.6048 45.1919 68.8868C46.5489 68.6248 47.6075 67.6712 48.0843 66.4636L49.7194 62.323C49.7194 62.323 49.7224 62.3187 49.7269 62.3142C49.7364 62.3044 49.7545 62.2899 49.7826 62.2772C50.5163 61.9446 51.2375 61.5745 51.9435 61.1669C52.6495 60.7593 53.3306 60.3197 53.9855 59.8507C54.0106 59.8327 54.0322 59.8243 54.0454 59.8209C54.0515 59.8193 54.0568 59.8189 54.0568 59.8189L58.4599 60.4731C59.7441 60.6639 61.0993 60.2239 62.0047 59.1797C64.4862 56.3174 66.3992 53.0046 67.6378 49.4246C68.0897 48.1183 67.7932 46.7244 66.9857 45.7075L64.2175 42.2212C64.2175 42.2212 64.2152 42.2164 64.2135 42.2103C64.2099 42.1972 64.2063 42.1743 64.2094 42.1435C64.2882 41.3414 64.3284 40.5313 64.3284 39.7156C64.3284 38.9005 64.2883 38.0909 64.2095 37.2893C64.2065 37.2585 64.21 37.2356 64.2137 37.2225C64.2154 37.2164 64.2176 37.2116 64.2176 37.2116L66.9875 33.7233C67.7948 32.7066 68.0914 31.313 67.6399 30.0069C66.4025 26.4278 64.491 23.1156 62.0112 20.2535C61.1059 19.2086 59.7502 18.7683 58.4656 18.9591L54.0589 19.6139L53.9876 19.5821C53.3321 19.1124 52.6502 18.6724 51.9435 18.2644C51.2372 17.8566 50.5157 17.4863 49.7817 17.1536C49.7536 17.1409 49.7355 17.1264 49.726 17.1166C49.7216 17.1121 49.7185 17.1078 49.7185 17.1078L48.0812 12.9614C47.6043 11.7537 46.5454 10.8 45.1883 10.5381C41.4712 9.82104 37.6485 9.82062 33.9313 10.5369C32.5738 10.7985 31.5145 11.7524 31.0375 12.9603L29.4 17.1072M14.8998 42.2224L14.9008 42.2212M14.8998 42.2224C14.8998 42.2224 14.9021 42.2176 14.9038 42.2115C14.9075 42.1984 14.911 42.1755 14.9079 42.1447C14.829 41.3422 14.7888 40.5317 14.7888 39.7156C14.7888 38.9001 14.8289 38.0901 14.9078 37.2881C14.9108 37.2574 14.9073 37.2345 14.9036 37.2213C14.9019 37.2152 14.8997 37.2105 14.8997 37.2105M14.8997 37.2105L14.9006 37.2117M14.8997 37.2105L12.1271 33.7188C11.3196 32.7019 11.0231 31.308 11.475 30.0017C12.7126 26.4243 14.6236 23.1136 17.1025 20.2527C18.0078 19.2079 19.3635 18.7676 20.6481 18.9585L25.0584 19.6138M25.0584 19.6138L25.06 19.614M25.0584 19.6138C25.0584 19.6138 25.0637 19.6133 25.0698 19.6117C25.0831 19.6084 25.1046 19.5999 25.1298 19.5819C25.7853 19.1123 26.467 18.6723 27.1737 18.2644C27.8804 17.8564 28.6023 17.4859 29.3367 17.1531C29.3649 17.1403 29.383 17.1258 29.3925 17.116C29.3969 17.1115 29.4 17.1072 29.4 17.1072M29.4 17.1072L29.3994 17.1086M33.1198 18.5778L34.7486 14.453C37.9264 13.8486 41.1924 13.849 44.37 14.4541L45.9987 18.5784C46.4039 19.6045 47.1977 20.374 48.1303 20.7968C48.7457 21.0758 49.3508 21.3863 49.9435 21.7285C50.5365 22.0708 51.1084 22.4399 51.658 22.8337C52.4905 23.4301 53.5539 23.7328 54.6453 23.5707L59.0284 22.9194C61.1414 25.3701 62.7746 28.2 63.8392 31.2558L61.0841 34.7254C60.3981 35.5894 60.1286 36.6615 60.2287 37.6805C60.2948 38.3526 60.3284 39.0316 60.3284 39.7156C60.3284 40.4001 60.2947 41.0795 60.2286 41.7521C60.1284 42.7712 60.3979 43.8434 61.084 44.7074L63.8374 48.175C62.7718 51.2315 61.1373 54.062 59.0227 56.5128L54.6432 55.8621C53.5519 55.6999 52.4887 56.0026 51.6562 56.5988C51.1072 56.9921 50.5359 57.3607 49.9435 57.7028C49.3511 58.0448 48.7462 58.3552 48.131 58.6341C47.1985 59.0568 46.4048 59.8263 45.9996 60.8524L44.3732 64.9709C41.1935 65.5768 37.9252 65.5772 34.7455 64.972L33.1189 60.853C32.7137 59.8268 31.9199 59.0573 30.9872 58.6346C30.3717 58.3556 29.7665 58.045 29.1737 57.7028C28.5814 57.3608 28.0101 56.9921 27.4611 56.5989C26.6287 56.0027 25.5655 55.7001 24.4742 55.8622L20.0909 56.5135C17.9771 54.0637 16.343 51.2346 15.2772 48.1796L18.0333 44.7086C18.7195 43.8445 18.989 42.7722 18.8887 41.7531C18.8225 41.0802 18.7888 40.4004 18.7888 39.7156C18.7888 39.0313 18.8225 38.3519 18.8886 37.6795C18.9888 36.6605 18.7193 35.5883 18.0332 34.7243L15.2754 31.2512C16.3402 28.1969 17.973 25.3684 20.0852 22.9187L24.4721 23.5706C25.5635 23.7327 26.6269 23.43 27.4593 22.8336C28.0089 22.4399 28.5807 22.0708 29.1737 21.7285C29.7667 21.3861 30.3722 21.0754 30.988 20.7963C31.9207 20.3736 32.7146 19.604 33.1198 18.5778ZM33.6283 29.4452C37.2967 27.3273 41.8164 27.3273 45.4847 29.4452C49.1531 31.5631 51.4129 35.4773 51.4129 39.7132C51.4129 43.949 49.1531 47.8632 45.4847 49.9811C41.8164 52.099 37.2967 52.099 33.6283 49.9811C29.9599 47.8632 27.7001 43.949 27.7001 39.7132C27.7001 35.4773 29.9599 31.5631 33.6283 29.4452ZM47.4847 25.9811C42.5787 23.1486 36.5343 23.1486 31.6283 25.9811C26.7223 28.8136 23.7001 34.0482 23.7001 39.7132C23.7001 45.3781 26.7223 50.6127 31.6283 53.4452C36.5343 56.2777 42.5787 56.2777 47.4847 53.4452C52.3907 50.6127 55.4129 45.3781 55.4129 39.7132C55.4129 34.0482 52.3907 28.8136 47.4847 25.9811Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-cog-1', CoreCog1)
export default CoreCog1
