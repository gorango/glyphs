
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreSunset1 = {
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
            d="M8 36H72"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51.4126 36.0001C51.4126 33.59 50.6496 31.2417 49.233 29.2919C47.8164 27.342 45.8188 25.8907 43.5267 25.146C41.2345 24.4012 38.7654 24.4012 36.4732 25.146C34.1811 25.8907 32.1835 27.342 30.7669 29.2919C29.3503 31.2417 28.5873 33.59 28.5873 36.0001"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40.0013 59.9999V45.9998"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M33.5355 60H46.4644C47.7691 60 48.4225 61.5774 47.5 62.5L41.7678 68.2322C40.7914 69.2085 39.2085 69.2085 38.2322 68.2322L32.5 62.5C31.5774 61.5774 32.2308 60 33.5355 60Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M15.2725 27.9656L22.8814 30.4377"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M24.7175 14.9656L29.4203 21.4377"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M39.975 10L40 18.0083"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M55.2824 14.9656L50.5958 21.4586"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M64.7274 27.9656L57.1195 30.4639"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.9644 19.4053L24.7175 14.9656L27.9367 19.4255L27.9644 19.4053ZM20.5091 29.649L15.2725 27.9656L20.4985 29.6816L20.5091 29.649ZM59.5023 29.6813L64.7274 27.9656L59.4917 29.6487L59.5023 29.6813ZM52.0635 19.4251L55.2823 14.9656L52.0358 19.4049L52.0635 19.4251ZM40.0171 15.5001L39.9999 10L39.9828 15.5001L40.0171 15.5001ZM43.5266 25.1459C45.8188 25.8907 47.8163 27.342 49.233 29.2918C50.6496 31.2416 51.4126 33.5899 51.4126 36H28.5873C28.5873 33.5899 29.3502 31.2416 30.7669 29.2918C32.1835 27.342 34.1811 25.8907 36.4732 25.1459C38.7654 24.4011 41.2345 24.4011 43.5266 25.1459Z"
            fill="currentColor"
          />
          <path
            d="M24.7175 14.9656L26.7355 13.4898C25.9222 12.3778 24.3626 12.1332 23.248 12.943C22.1335 13.7528 21.8841 15.3116 22.6904 16.4287L24.7175 14.9656ZM27.9644 19.4053L29.4342 21.4276C29.9716 21.0371 30.3314 20.4487 30.4343 19.7924C30.5371 19.1361 30.3745 18.4658 29.9824 17.9296L27.9644 19.4053ZM27.9367 19.4255L25.9095 20.8887C26.2984 21.4274 26.8858 21.7892 27.5419 21.8942C28.1981 21.9991 28.869 21.8385 29.4065 21.4478L27.9367 19.4255ZM15.2725 27.9656L16.0376 25.5855C14.726 25.1639 13.3205 25.8828 12.8948 27.193C12.4691 28.5033 13.1836 29.911 14.4925 30.3408L15.2725 27.9656ZM20.5091 29.649L22.8868 30.4214C23.092 29.7895 23.0373 29.1019 22.7348 28.5105C22.4322 27.919 21.9067 27.4723 21.2742 27.269L20.5091 29.649ZM20.4985 29.6816L19.7185 32.0569C20.3498 32.2641 21.0376 32.2116 21.63 31.9109C22.2225 31.6101 22.6709 31.0859 22.8762 30.454L20.4985 29.6816ZM64.7274 27.9656L65.5074 30.3408C66.8163 29.911 67.5308 28.5033 67.105 27.193C66.6793 25.8828 65.2738 25.1639 63.9623 25.5855L64.7274 27.9656ZM59.5023 29.6813L57.1247 30.454C57.33 31.0858 57.7784 31.61 58.3708 31.9106C58.9633 32.2113 59.651 32.2638 60.2822 32.0566L59.5023 29.6813ZM59.4917 29.6487L58.7266 27.2687C58.094 27.472 57.5685 27.9188 57.2659 28.5103C56.9634 29.1018 56.9087 29.7894 57.1141 30.4213L59.4917 29.6487ZM55.2823 14.9656L57.3095 16.4287C58.1158 15.3116 57.8664 13.7528 56.7518 12.943C55.6373 12.1332 54.0776 12.3778 53.2644 13.4898L55.2823 14.9656ZM52.0635 19.4251L50.5943 21.4478C51.1318 21.8382 51.8026 21.9986 52.4586 21.8936C53.1146 21.7886 53.7019 21.4269 54.0907 20.8882L52.0635 19.4251ZM52.0358 19.4049L50.0178 17.9291C49.6256 18.4654 49.463 19.1358 49.566 19.7923C49.6689 20.4487 50.029 21.0371 50.5666 21.4276L52.0358 19.4049ZM39.9999 10L42.4999 9.9922C42.4956 8.61454 41.3776 7.5 39.9999 7.5C38.6223 7.5 37.5042 8.61454 37.4999 9.9922L39.9999 10ZM40.0171 15.5001L40.0176 18.0001C40.6819 17.9999 41.3188 17.7354 41.7878 17.2649C42.2567 16.7944 42.5191 16.1566 42.5171 15.4923L40.0171 15.5001ZM39.9828 15.5001L37.4828 15.4923C37.4807 16.1567 37.7433 16.7947 38.2124 17.2652C38.6816 17.7358 39.3188 18.0002 39.9833 18.0001L39.9828 15.5001ZM43.5266 25.1459L44.2992 22.7683H44.2992L43.5266 25.1459ZM51.4126 36V38.5C52.7933 38.5 53.9126 37.3807 53.9126 36H51.4126ZM28.5873 36H26.0873C26.0873 37.3807 27.2065 38.5 28.5873 38.5V36ZM30.7669 29.2918L28.7443 27.8223H28.7443L30.7669 29.2918ZM36.4732 25.1459L35.7007 22.7683H35.7007L36.4732 25.1459ZM22.6996 16.4413L25.9465 20.8811L29.9824 17.9296L26.7355 13.4898L22.6996 16.4413ZM29.9638 17.9624L26.7446 13.5024L22.6904 16.4287L25.9095 20.8887L29.9638 17.9624ZM26.4946 17.3831L26.4668 17.4032L29.4065 21.4478L29.4342 21.4276L26.4946 17.3831ZM14.5073 30.3456L19.7439 32.029L21.2742 27.269L16.0376 25.5855L14.5073 30.3456ZM21.2784 27.3064L16.0524 25.5903L14.4925 30.3408L19.7185 32.0569L21.2784 27.3064ZM18.1314 28.8766L18.1208 28.9092L22.8762 30.454L22.8868 30.4214L18.1314 28.8766ZM63.9474 25.5903L58.7223 27.3061L60.2822 32.0566L65.5074 30.3408L63.9474 25.5903ZM60.2568 32.0287L65.4925 30.3456L63.9623 25.5855L58.7266 27.2687L60.2568 32.0287ZM61.8799 28.9087L61.8693 28.8761L57.1141 30.4213L57.1247 30.454L61.8799 28.9087ZM53.2552 13.5024L50.0364 17.9619L54.0907 20.8882L57.3095 16.4287L53.2552 13.5024ZM54.0537 20.8807L57.3003 16.4413L53.2644 13.4898L50.0178 17.9291L54.0537 20.8807ZM53.5328 17.4023L53.505 17.3822L50.5666 21.4276L50.5943 21.4478L53.5328 17.4023ZM37.4999 10.0078L37.5171 15.5079L42.5171 15.4923L42.4999 9.9922L37.4999 10.0078ZM42.4828 15.5079L42.4999 10.0078L37.4999 9.9922L37.4828 15.4923L42.4828 15.5079ZM40.0166 13.0001L39.9823 13.0001L39.9833 18.0001L40.0176 18.0001L40.0166 13.0001ZM51.2555 27.8223C49.5286 25.4454 47.0935 23.6762 44.2992 22.7683L42.7541 27.5235C44.5442 28.1052 46.1041 29.2385 47.2104 30.7613L51.2555 27.8223ZM53.9126 36C53.9126 33.0619 52.9825 30.1993 51.2555 27.8223L47.2104 30.7613C48.3167 32.284 48.9126 34.1178 48.9126 36H53.9126ZM28.5873 38.5H51.4126V33.5H28.5873V38.5ZM28.7443 27.8223C27.0174 30.1993 26.0873 33.0619 26.0873 36H31.0873C31.0873 34.1178 31.6831 32.284 32.7894 30.7613L28.7443 27.8223ZM35.7007 22.7683C32.9064 23.6762 30.4713 25.4454 28.7443 27.8223L32.7894 30.7613C33.8957 29.2385 35.4557 28.1052 37.2458 27.5235L35.7007 22.7683ZM44.2992 22.7683C41.5049 21.8603 38.4949 21.8603 35.7007 22.7683L37.2458 27.5235C39.0358 26.9419 40.964 26.9419 42.7541 27.5235L44.2992 22.7683Z"
            fill="currentColor"
          />
          <path
            d="M8 36H72"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M37.5013 64C37.5013 65.3807 38.6206 66.5 40.0013 66.5C41.382 66.5 42.5013 65.3807 42.5013 64H37.5013ZM42.5013 45.9997C42.5013 44.619 41.382 43.4997 40.0013 43.4997C38.6206 43.4997 37.5013 44.619 37.5013 45.9997H42.5013ZM42.5013 64V45.9997H37.5013V64H42.5013Z"
            fill="currentColor"
          />
          <path
            d="M32.9155 64L47.0845 64C47.9035 64 48.2023 65.0786 47.5 65.5L41.2862 69.2283C40.4945 69.7033 39.5055 69.7033 38.7138 69.2283L32.5 65.5C31.7977 65.0786 32.0964 64 32.9155 64Z"
            fill="currentColor"
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
            d="M40.4999 10L40.5249 18.0079L40.5005 18H40.5004L40.4749 18.0083L40.4999 10ZM29.9449 21.4297L25.2175 14.9656L29.9046 21.4593L29.9203 21.4377H29.9203L29.9449 21.4297ZM23.3967 30.4166L15.7725 27.9656L23.3814 30.4641V30.4377L23.3967 30.4166ZM57.6194 30.4377H57.6195V30.4638L65.2274 27.9656L57.604 30.4163L57.6194 30.4377ZM51.0958 21.4586L55.7823 14.9656L51.0552 21.4294L51.0806 21.4377H51.0806L51.0958 21.4586ZM44.0266 25.1459C46.3188 25.8907 48.3163 27.342 49.733 29.2918C51.1496 31.2416 51.9126 33.5899 51.9126 36H29.0873C29.0873 33.5899 29.8502 31.2416 31.2669 29.2918C32.6835 27.342 34.6811 25.8907 36.9732 25.1459C39.2654 24.4011 41.7345 24.4011 44.0266 25.1459Z"
            fill="#EB5757"
          />
          <path
            d="M40.5249 18.0079L39.9069 19.91C40.5168 20.1082 41.1848 20.0019 41.703 19.6241C42.2212 19.2464 42.5269 18.643 42.5249 18.0017L40.5249 18.0079ZM40.4999 10L42.4999 9.99376C42.4965 8.89163 41.6021 8 40.4999 8C39.3978 8 38.5034 8.89163 38.4999 9.99376L40.4999 10ZM40.5005 18L41.1185 16.0979C40.9189 16.033 40.7104 16 40.5005 16V18ZM40.5004 18V16C40.2901 16 40.0811 16.0332 39.8811 16.0983L40.5004 18ZM40.4749 18.0083L38.475 18.0021C38.473 18.6436 38.7788 19.2472 39.2974 19.6249C39.816 20.0026 40.4843 20.1087 41.0943 19.91L40.4749 18.0083ZM25.2175 14.9656L26.8319 13.7849C26.1813 12.8953 24.9336 12.6997 24.0419 13.3475C23.1503 13.9953 22.9508 15.2424 23.5958 16.1361L25.2175 14.9656ZM29.9449 21.4297L30.5629 23.3318C31.1728 23.1337 31.6507 22.655 31.848 22.0448C32.0452 21.4346 31.9378 20.7668 31.5592 20.2491L29.9449 21.4297ZM29.9046 21.4593L28.2829 22.6298C28.6582 23.1498 29.2602 23.4583 29.9015 23.4593C30.5428 23.4603 31.1457 23.1537 31.5226 22.6349L29.9046 21.4593ZM29.9203 21.4377V19.4377C29.2801 19.4377 28.6786 19.7442 28.3023 20.2621L29.9203 21.4377ZM29.9203 21.4377V23.4377C30.1302 23.4377 30.3388 23.4047 30.5383 23.3398L29.9203 21.4377ZM15.7725 27.9656L16.3846 26.0615C15.3353 25.7242 14.2109 26.2993 13.8703 27.3475C13.5298 28.3957 14.1014 29.5219 15.1485 29.8657L15.7725 27.9656ZM23.3967 30.4166L25.0148 31.5921C25.3917 31.0733 25.497 30.4052 25.2979 29.7956C25.0988 29.186 24.6194 28.7088 24.0088 28.5125L23.3967 30.4166ZM23.3814 30.4641L22.7574 32.3643C23.3667 32.5644 24.035 32.4601 24.5544 32.084C25.0739 31.7078 25.3814 31.1054 25.3814 30.4641H23.3814ZM23.3814 30.4377L21.7634 29.2621C21.5151 29.6038 21.3814 30.0153 21.3814 30.4377H23.3814ZM57.6195 30.4377H59.6195C59.6195 29.3331 58.7241 28.4377 57.6195 28.4377V30.4377ZM57.6194 30.4377L55.9993 31.6104C56.3754 32.13 56.978 32.4377 57.6194 32.4377V30.4377ZM57.6195 30.4638H55.6195C55.6195 31.1051 55.927 31.7075 56.4464 32.0836C56.9659 32.4598 57.6342 32.564 58.2435 32.364L57.6195 30.4638ZM65.2274 27.9656L65.8514 29.8657C66.8985 29.5219 67.4701 28.3957 67.1295 27.3475C66.7889 26.2993 65.6646 25.7242 64.6153 26.0615L65.2274 27.9656ZM57.604 30.4163L56.9919 28.5123C56.3819 28.7083 55.9028 29.1848 55.7034 29.7936C55.5039 30.4025 55.6082 31.07 55.9838 31.589L57.604 30.4163ZM55.7823 14.9656L57.404 16.1361C58.0491 15.2424 57.8496 13.9953 56.9579 13.3475C56.0663 12.6997 54.8186 12.8953 54.168 13.7849L55.7823 14.9656ZM51.0958 21.4586L49.4777 22.6341C49.8547 23.153 50.4576 23.4596 51.0989 23.4586C51.7402 23.4576 52.3421 23.1491 52.7175 22.6291L51.0958 21.4586ZM51.0552 21.4294L49.4408 20.2488C49.0624 20.7663 48.955 21.4338 49.1519 22.0438C49.3488 22.6539 49.8263 23.1326 50.4358 23.3311L51.0552 21.4294ZM51.0806 21.4377L50.4612 23.3394C50.6612 23.4045 50.8702 23.4377 51.0806 23.4377V21.4377ZM51.0806 21.4377L52.6986 20.2621C52.3223 19.7442 51.7208 19.4377 51.0806 19.4377V21.4377ZM44.0266 25.1459L44.6447 23.2438H44.6447L44.0266 25.1459ZM51.9126 36V38C53.0172 38 53.9126 37.1046 53.9126 36H51.9126ZM29.0873 36H27.0873C27.0873 37.1046 27.9827 38 29.0873 38V36ZM31.2669 29.2918L29.6488 28.1162L29.6488 28.1162L31.2669 29.2918ZM36.9732 25.1459L36.3552 23.2438H36.3552L36.9732 25.1459ZM42.5249 18.0017L42.4999 9.99376L38.4999 10.0062L38.5249 18.0142L42.5249 18.0017ZM39.8824 19.9021L39.9069 19.91L41.143 16.1058L41.1185 16.0979L39.8824 19.9021ZM40.5004 20H40.5005V16H40.5004V20ZM41.0943 19.91L41.1198 19.9017L39.8811 16.0983L39.8556 16.1066L41.0943 19.91ZM38.4999 9.99376L38.475 18.0021L42.4749 18.0145L42.4999 10.0062L38.4999 9.99376ZM23.6032 16.1462L28.3305 22.6103L31.5592 20.2491L26.8319 13.7849L23.6032 16.1462ZM31.5263 20.2888L26.8392 13.795L23.5958 16.1361L28.2829 22.6298L31.5263 20.2888ZM28.3023 20.2621L28.2866 20.2837L31.5226 22.6349L31.5383 22.6133L28.3023 20.2621ZM29.9203 19.4377H29.9203V23.4377H29.9203V19.4377ZM29.3269 19.5276L29.3023 19.5356L30.5383 23.3398L30.5629 23.3318L29.3269 19.5276ZM15.1604 29.8696L22.7847 32.3206L24.0088 28.5125L16.3846 26.0615L15.1604 29.8696ZM24.0054 28.5639L16.3964 26.0654L15.1485 29.8657L22.7574 32.3643L24.0054 28.5639ZM21.3814 30.4377V30.4641H25.3814V30.4377H21.3814ZM21.7787 29.241L21.7634 29.2621L24.9994 31.6133L25.0148 31.5921L21.7787 29.241ZM57.6195 28.4377H57.6194V32.4377H57.6195V28.4377ZM59.6195 30.4638V30.4377H55.6195V30.4638H59.6195ZM64.6034 26.0654L56.9955 28.5636L58.2435 32.364L65.8514 29.8657L64.6034 26.0654ZM58.216 32.3203L65.8395 29.8696L64.6153 26.0615L56.9919 28.5123L58.216 32.3203ZM59.2396 29.265L59.2241 29.2436L55.9838 31.589L55.9993 31.6104L59.2396 29.265ZM54.1607 13.795L49.4741 20.2881L52.7175 22.6291L57.404 16.1361L54.1607 13.795ZM52.6695 22.61L57.3967 16.1462L54.168 13.7849L49.4408 20.2488L52.6695 22.61ZM51.6999 19.536L51.6745 19.5278L50.4358 23.3311L50.4612 23.3394L51.6999 19.536ZM51.0806 19.4377H51.0806V23.4377H51.0806V19.4377ZM52.7138 20.283L52.6986 20.2621L49.4626 22.6133L49.4777 22.6341L52.7138 20.283ZM51.351 28.1162C49.6861 25.8247 47.3385 24.1191 44.6447 23.2438L43.4086 27.048C45.2991 27.6623 46.9466 28.8592 48.1149 30.4674L51.351 28.1162ZM53.9126 36C53.9126 33.1675 53.0159 30.4078 51.351 28.1162L48.1149 30.4674C49.2833 32.0755 49.9126 34.0122 49.9126 36H53.9126ZM29.0873 38H51.9126V34H29.0873V38ZM29.6488 28.1162C27.984 30.4077 27.0873 33.1675 27.0873 36H31.0873C31.0873 34.0122 31.7165 32.0755 32.8849 30.4674L29.6488 28.1162ZM36.3552 23.2438C33.6613 24.1191 31.3137 25.8247 29.6488 28.1162L32.8849 30.4674C34.0533 28.8592 35.7008 27.6623 37.5913 27.048L36.3552 23.2438ZM44.6447 23.2438C41.9508 22.3685 39.049 22.3685 36.3552 23.2438L37.5912 27.048C39.4817 26.4338 41.5181 26.4338 43.4086 27.048L44.6447 23.2438Z"
            fill="#F2C94C"
          />
          <path
            d="M8.5 36H72.5"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M38.5013 64C38.5013 65.1046 39.3968 66 40.5013 66C41.6059 66 42.5013 65.1046 42.5013 64H38.5013ZM42.5013 45.9997C42.5013 44.8951 41.6059 43.9997 40.5013 43.9997C39.3968 43.9997 38.5013 44.8951 38.5013 45.9997H42.5013ZM42.5013 64V45.9997H38.5013V64H42.5013Z"
            fill="#2F80ED"
          />
          <path
            d="M33.4155 64L47.5845 64C48.4035 64 48.7023 65.0786 48 65.5L41.7862 69.2283C40.9945 69.7033 40.0055 69.7033 39.2138 69.2283L33 65.5C32.2977 65.0786 32.5964 64 33.4155 64Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M39.9999 10L40.0249 18.0079L40.0005 18L39.9749 18.0083L39.9999 10Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29.4449 21.4297L24.7175 14.9656L29.4046 21.4593L29.4203 21.4377L29.4449 21.4297Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22.8967 30.4166L15.2725 27.9656L22.8814 30.4641V30.4377L22.8967 30.4166Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M57.1195 30.4377V30.4638L64.7274 27.9656L57.104 30.4163L57.1195 30.4377Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M50.5958 21.4586L55.2823 14.9656L50.5552 21.4294L50.5806 21.4377L50.5958 21.4586Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M43.5266 25.1459C45.8188 25.8907 47.8163 27.342 49.233 29.2918C50.6496 31.2416 51.4126 33.5899 51.4126 36H28.5873C28.5873 33.5899 29.3502 31.2416 30.7669 29.2918C32.1835 27.342 34.1811 25.8907 36.4732 25.1459C38.7654 24.4011 41.2345 24.4011 43.5266 25.1459Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.9155 64H47.0845C47.9036 64 48.2023 65.0786 47.5 65.5L41.2862 69.2283C40.4945 69.7033 39.5055 69.7033 38.7138 69.2283L32.5 65.5C31.7977 65.0786 32.0964 64 32.9155 64Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M8 36H72M40.0013 64V45.9997M40.0249 18.0079L39.9999 10L39.9749 18.0083L40.0005 18L40.0249 18.0079ZM24.7175 14.9656L29.4449 21.4297L29.4203 21.4377L29.4046 21.4593L24.7175 14.9656ZM15.2725 27.9656L22.8967 30.4166L22.8814 30.4377V30.4641L15.2725 27.9656ZM57.1195 30.4377V30.4638L64.7274 27.9656L57.104 30.4163L57.1195 30.4377ZM55.2823 14.9656L50.5958 21.4586L50.5806 21.4377L50.5552 21.4294L55.2823 14.9656ZM49.233 29.2918C47.8163 27.342 45.8188 25.8907 43.5266 25.1459C41.2345 24.4011 38.7654 24.4011 36.4732 25.1459C34.1811 25.8907 32.1835 27.342 30.7669 29.2918C29.3502 31.2416 28.5873 33.5899 28.5873 36H51.4126C51.4126 33.5899 50.6496 31.2416 49.233 29.2918ZM47.0845 64H32.9155C32.0964 64 31.7977 65.0786 32.5 65.5L38.7138 69.2283C39.5055 69.7033 40.4945 69.7033 41.2862 69.2283L47.5 65.5C48.2023 65.0786 47.9036 64 47.0845 64Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M41.9999 9.99376C41.9965 8.89163 41.1021 8 39.9999 8C38.8978 8 38.0034 8.89163 37.9999 9.99376L37.975 18.0021C37.973 18.6436 38.2788 19.2472 38.7974 19.6249C39.1546 19.8851 39.5829 20.0164 40.0143 20.0079C40.4361 20.0101 40.8536 19.8788 41.203 19.6241C41.7212 19.2464 42.0269 18.643 42.0249 18.0017L41.9999 9.99376Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M26.3319 13.7849C25.6813 12.8953 24.4336 12.6997 23.5419 13.3475C22.6503 13.9953 22.4508 15.2424 23.0958 16.1361L27.7829 22.6298C28.1582 23.1498 28.7602 23.4583 29.4015 23.4593C29.842 23.46 30.2644 23.3155 30.6079 23.0568C30.9524 22.8105 31.2145 22.4578 31.348 22.0448C31.5452 21.4346 31.4378 20.7668 31.0592 20.2491L26.3319 13.7849Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M56.904 16.1361C57.5491 15.2424 57.3496 13.9953 56.4579 13.3475C55.5663 12.6997 54.3186 12.8953 53.668 13.7849L53.6607 13.795L48.9408 20.2488C48.5624 20.7663 48.455 21.4338 48.6519 22.0438C48.7875 22.464 49.0562 22.8218 49.4094 23.0687C49.7498 23.3195 50.1656 23.4592 50.5989 23.4586C51.2402 23.4576 51.8421 23.1491 52.2175 22.6291L56.8967 16.1462L56.904 16.1361Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.8552 23.2438C33.1613 24.1191 30.8137 25.8247 29.1488 28.1162C27.8793 29.8637 27.0564 31.8834 26.7372 34H8C6.89543 34 6 34.8954 6 36C6 37.1046 6.89543 38 8 38H72C73.1046 38 74 37.1046 74 36C74 34.8954 73.1046 34 72 34H53.2627C52.9435 31.8834 52.1206 29.8637 50.851 28.1162C49.1861 25.8247 46.8385 24.1191 44.1447 23.2438C41.4508 22.3685 38.549 22.3685 35.8552 23.2438ZM49.1977 34C48.9221 32.7326 48.3859 31.5284 47.6149 30.4674C46.4466 28.8592 44.7991 27.6623 42.9086 27.048C41.0181 26.4338 38.9817 26.4338 37.0913 27.048C35.2008 27.6623 33.5533 28.8592 32.3849 30.4674C31.614 31.5284 31.0778 32.7326 30.8022 34H49.1977Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M15.8846 26.0615C14.8353 25.7242 13.7109 26.2993 13.3703 27.3475C13.0298 28.3957 13.6014 29.5219 14.6485 29.8657L22.2574 32.3643C22.8667 32.5644 23.535 32.4601 24.0544 32.084C24.4097 31.8267 24.6659 31.4636 24.7923 31.0546C24.928 30.6514 24.9333 30.21 24.7979 29.7956C24.5988 29.186 24.1194 28.7088 23.5088 28.5125L15.8846 26.0615Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M65.3514 29.8657C66.3985 29.5219 66.9701 28.3957 66.6295 27.3475C66.2889 26.2993 65.1646 25.7242 64.1153 26.0615L64.1034 26.0654L56.4919 28.5123C55.8819 28.7083 55.4028 29.1848 55.2034 29.7936C55.0666 30.2112 55.0726 30.6563 55.2111 31.0623C55.3384 31.468 55.5935 31.8281 55.9464 32.0836C56.4659 32.4598 57.1342 32.564 57.7435 32.364L65.3395 29.8696L65.3514 29.8657Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.0013 58H33.5355C30.449 58 28.9033 61.7317 31.0858 63.9142L36.818 69.6464C38.5754 71.4038 41.4246 71.4038 43.182 69.6464L48.9142 63.9142C51.0967 61.7317 49.551 58 46.4645 58H42.0013V45.9998C42.0013 44.8952 41.1059 43.9998 40.0013 43.9998C38.8968 43.9998 38.0013 44.8952 38.0013 45.9998V58ZM34.8284 62L39.6464 66.818C39.8417 67.0133 40.1583 67.0133 40.3536 66.818L45.1716 62H34.8284Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-sunset-1', CoreSunset1)
export default CoreSunset1
