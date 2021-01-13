
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreArrowSolidCircle = {
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
            d="M68 40C68 55.464 55.464 68 40 68C24.536 68 12 55.464 12 40C12 24.536 24.536 12 40 12C55.464 12 68 24.536 68 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46.3999 40.0002H50.9341C53.0266 40.0002 54.0548 37.4527 52.5485 36.0002L43.0195 26.8114C41.3925 25.2425 38.8157 25.2425 37.1887 26.8114L27.6597 36.0002C26.1534 37.4527 27.1816 40.0002 29.2741 40.0002H33.5999L33.5999 52.8007C33.5999 53.6844 34.3163 54.4007 35.1999 54.4007H44.7999C45.6836 54.4007 46.3999 53.6844 46.3999 52.8007V40.0002Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 68C55.464 68 68 55.464 68 40C68 24.536 55.464 12 40 12C24.536 12 12 24.536 12 40C12 55.464 24.536 68 40 68ZM50.9342 39.9998H46.4V52.8004C46.4 53.684 45.6837 54.4004 44.8 54.4004H35.2C34.3163 54.4004 33.6 53.684 33.6 52.8004L33.6 39.9998H29.2741C27.1816 39.9998 26.1534 37.4523 27.6597 35.9998L37.1888 26.8111C38.8158 25.2422 41.3926 25.2422 43.0195 26.8111L52.5486 35.9998C54.0549 37.4523 53.0267 39.9998 50.9342 39.9998Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M40 12L43.135 12.1761L46.2306 12.702L49.2478 13.5713L52.1487 14.7729L54.8969 16.2917L57.4577 18.1087L59.799 20.201L61.8913 22.5423L63.7083 25.1031L65.2271 27.8513L66.4287 30.7522L67.298 33.7694L67.8239 36.865L68 40L67.8239 43.135L67.298 46.2306L66.4287 49.2478L65.2271 52.1487L63.7083 54.8969L61.8913 57.4577L59.799 59.799L57.4577 61.8913L54.8969 63.7083L52.1487 65.2271L49.2478 66.4287L46.2306 67.298L43.135 67.8239L40 68L36.865 67.8239L33.7694 67.298L30.7522 66.4287L27.8513 65.2271L25.1031 63.7083L22.5423 61.8913L20.201 59.799L18.1087 57.4577L16.2917 54.8969L14.7729 52.1487L13.5713 49.2478L12.702 46.2306L12.1761 43.135L12 40L12.1761 36.865L12.702 33.7694L13.5713 30.7522L14.7729 27.8513L16.2917 25.1031L18.1087 22.5423L20.201 20.201L22.5423 18.1087L25.1031 16.2917L27.8513 14.7729L30.7522 13.5713L33.7694 12.702L36.865 12.1761L40 12Z"
            fill="#56CCF2"
          />
          <path
            d="M40 12L40.1121 10.0031C40.0374 9.99895 39.9626 9.99895 39.8879 10.0031L40 12ZM43.135 12.1761L43.47 10.2043C43.3963 10.1918 43.3218 10.1834 43.2471 10.1792L43.135 12.1761ZM46.2306 12.702L46.7843 10.7802C46.7124 10.7595 46.6394 10.7428 46.5656 10.7303L46.2306 12.702ZM49.2478 13.5713L50.0132 11.7235C49.9441 11.6949 49.8734 11.6701 49.8015 11.6494L49.2478 13.5713ZM52.1487 14.7729L53.1162 13.0224C53.0507 12.9862 52.9832 12.9537 52.9141 12.9251L52.1487 14.7729ZM54.8969 16.2917L56.0542 14.6606C55.9932 14.6173 55.9298 14.5775 55.8643 14.5413L54.8969 16.2917ZM57.4577 18.1087L58.7904 16.6174C58.7346 16.5676 58.6761 16.5209 58.6151 16.4776L57.4577 18.1087ZM59.799 20.201L61.2903 18.8683C61.2404 18.8125 61.1875 18.7596 61.1317 18.7097L59.799 20.201ZM61.8913 22.5423L63.5224 21.3849C63.4791 21.3239 63.4324 21.2654 63.3826 21.2096L61.8913 22.5423ZM63.7083 25.1031L65.4587 24.1357C65.4225 24.0702 65.3827 24.0068 65.3394 23.9458L63.7083 25.1031ZM65.2271 27.8513L67.0749 27.0859C67.0463 27.0168 67.0138 26.9493 66.9776 26.8838L65.2271 27.8513ZM66.4287 30.7522L68.3506 30.1985C68.3299 30.1266 68.3051 30.0559 68.2765 29.9868L66.4287 30.7522ZM67.298 33.7694L69.2697 33.4344C69.2572 33.3606 69.2405 33.2876 69.2198 33.2157L67.298 33.7694ZM67.8239 36.865L69.8208 36.7529C69.8166 36.6782 69.8082 36.6037 69.7957 36.53L67.8239 36.865ZM68 40L69.9969 40.1121C70.001 40.0374 70.001 39.9626 69.9969 39.8879L68 40ZM67.8239 43.135L69.7957 43.47C69.8082 43.3963 69.8166 43.3218 69.8208 43.2471L67.8239 43.135ZM67.298 46.2306L69.2198 46.7843C69.2405 46.7124 69.2572 46.6394 69.2697 46.5656L67.298 46.2306ZM66.4287 49.2478L68.2765 50.0132C68.3051 49.9441 68.3299 49.8734 68.3506 49.8015L66.4287 49.2478ZM65.2271 52.1487L66.9776 53.1162C67.0138 53.0507 67.0463 52.9832 67.0749 52.9141L65.2271 52.1487ZM63.7083 54.8969L65.3394 56.0542C65.3827 55.9932 65.4225 55.9298 65.4587 55.8643L63.7083 54.8969ZM61.8913 57.4577L63.3826 58.7904C63.4324 58.7346 63.4791 58.6761 63.5224 58.6151L61.8913 57.4577ZM59.799 59.799L61.1317 61.2903C61.1875 61.2404 61.2404 61.1875 61.2903 61.1317L59.799 59.799ZM57.4577 61.8913L58.6151 63.5224C58.6761 63.4791 58.7346 63.4324 58.7904 63.3826L57.4577 61.8913ZM54.8969 63.7083L55.8643 65.4587C55.9298 65.4225 55.9932 65.3827 56.0542 65.3394L54.8969 63.7083ZM52.1487 65.2271L52.9141 67.0749C52.9832 67.0463 53.0507 67.0138 53.1162 66.9776L52.1487 65.2271ZM49.2478 66.4287L49.8015 68.3506C49.8734 68.3299 49.9441 68.3051 50.0132 68.2765L49.2478 66.4287ZM46.2306 67.298L46.5656 69.2697C46.6394 69.2572 46.7124 69.2405 46.7843 69.2198L46.2306 67.298ZM43.135 67.8239L43.2471 69.8208C43.3218 69.8166 43.3963 69.8082 43.47 69.7957L43.135 67.8239ZM40 68L39.8879 69.9969C39.9626 70.001 40.0374 70.001 40.1121 69.9969L40 68ZM36.865 67.8239L36.53 69.7957C36.6037 69.8082 36.6782 69.8166 36.7529 69.8208L36.865 67.8239ZM33.7694 67.298L33.2157 69.2198C33.2876 69.2405 33.3606 69.2572 33.4344 69.2697L33.7694 67.298ZM30.7522 66.4287L29.9868 68.2765C30.0559 68.3051 30.1266 68.3299 30.1985 68.3506L30.7522 66.4287ZM27.8513 65.2271L26.8838 66.9776C26.9493 67.0138 27.0168 67.0463 27.0859 67.0749L27.8513 65.2271ZM25.1031 63.7083L23.9458 65.3394C24.0068 65.3827 24.0702 65.4225 24.1357 65.4587L25.1031 63.7083ZM22.5423 61.8913L21.2096 63.3826C21.2654 63.4324 21.3239 63.4791 21.3849 63.5224L22.5423 61.8913ZM20.201 59.799L18.7097 61.1317C18.7596 61.1875 18.8125 61.2404 18.8683 61.2903L20.201 59.799ZM18.1087 57.4577L16.4776 58.6151C16.5209 58.6761 16.5676 58.7346 16.6174 58.7904L18.1087 57.4577ZM16.2917 54.8969L14.5413 55.8643C14.5775 55.9298 14.6173 55.9932 14.6606 56.0542L16.2917 54.8969ZM14.7729 52.1487L12.9251 52.9141C12.9537 52.9832 12.9862 53.0507 13.0224 53.1162L14.7729 52.1487ZM13.5713 49.2478L11.6494 49.8015C11.6701 49.8734 11.6949 49.9441 11.7235 50.0132L13.5713 49.2478ZM12.702 46.2306L10.7303 46.5656C10.7428 46.6394 10.7595 46.7124 10.7802 46.7843L12.702 46.2306ZM12.1761 43.135L10.1792 43.2471C10.1834 43.3218 10.1918 43.3963 10.2043 43.47L12.1761 43.135ZM12 40L10.0031 39.8879C9.99895 39.9626 9.99895 40.0374 10.0031 40.1121L12 40ZM12.1761 36.865L10.2043 36.53C10.1918 36.6037 10.1834 36.6782 10.1792 36.7529L12.1761 36.865ZM12.702 33.7694L10.7802 33.2157C10.7595 33.2876 10.7428 33.3606 10.7303 33.4344L12.702 33.7694ZM13.5713 30.7522L11.7235 29.9868C11.6949 30.0559 11.6701 30.1266 11.6494 30.1985L13.5713 30.7522ZM14.7729 27.8513L13.0224 26.8838C12.9862 26.9493 12.9537 27.0168 12.9251 27.0859L14.7729 27.8513ZM16.2917 25.1031L14.6606 23.9458C14.6173 24.0068 14.5775 24.0702 14.5413 24.1357L16.2917 25.1031ZM18.1087 22.5423L16.6174 21.2096C16.5676 21.2654 16.5209 21.3239 16.4776 21.3849L18.1087 22.5423ZM20.201 20.201L18.8683 18.7097C18.8125 18.7596 18.7596 18.8125 18.7097 18.8683L20.201 20.201ZM22.5423 18.1087L21.3849 16.4776C21.3239 16.5209 21.2654 16.5676 21.2096 16.6174L22.5423 18.1087ZM25.1031 16.2917L24.1357 14.5413C24.0702 14.5775 24.0068 14.6173 23.9458 14.6606L25.1031 16.2917ZM27.8513 14.7729L27.0859 12.9251C27.0168 12.9537 26.9493 12.9862 26.8838 13.0224L27.8513 14.7729ZM30.7522 13.5713L30.1985 11.6494C30.1266 11.6701 30.0559 11.6949 29.9868 11.7235L30.7522 13.5713ZM33.7694 12.702L33.4344 10.7303C33.3606 10.7428 33.2876 10.7595 33.2157 10.7802L33.7694 12.702ZM36.865 12.1761L36.7529 10.1792C36.6782 10.1834 36.6037 10.1918 36.53 10.2043L36.865 12.1761ZM39.8879 13.9969L43.0229 14.1729L43.2471 10.1792L40.1121 10.0031L39.8879 13.9969ZM42.8 14.1478L45.8956 14.6738L46.5656 10.7303L43.47 10.2043L42.8 14.1478ZM45.6769 14.6239L48.6941 15.4931L49.8015 11.6494L46.7843 10.7802L45.6769 14.6239ZM48.4824 15.419L51.3834 16.6206L52.9141 12.9251L50.0132 11.7235L48.4824 15.419ZM51.1813 16.5233L53.9295 18.0422L55.8643 14.5413L53.1162 13.0224L51.1813 16.5233ZM53.7396 17.9228L56.3004 19.7398L58.6151 16.4776L56.0542 14.6606L53.7396 17.9228ZM56.125 19.6L58.4663 21.6923L61.1317 18.7097L58.7904 16.6174L56.125 19.6ZM58.3077 21.5337L60.4 23.875L63.3826 21.2096L61.2903 18.8683L58.3077 21.5337ZM60.2602 23.6996L62.0772 26.2604L65.3394 23.9458L63.5224 21.3849L60.2602 23.6996ZM61.9578 26.0705L63.4767 28.8187L66.9776 26.8838L65.4587 24.1357L61.9578 26.0705ZM63.3794 28.6166L64.581 31.5176L68.2765 29.9868L67.0749 27.0859L63.3794 28.6166ZM64.5069 31.3059L65.3761 34.3231L69.2198 33.2157L68.3506 30.1985L64.5069 31.3059ZM65.3262 34.1044L65.8522 37.2L69.7957 36.53L69.2697 33.4344L65.3262 34.1044ZM65.8271 36.9771L66.0031 40.1121L69.9969 39.8879L69.8208 36.7529L65.8271 36.9771ZM66.0031 39.8879L65.8271 43.0229L69.8208 43.2471L69.9969 40.1121L66.0031 39.8879ZM65.8522 42.8L65.3262 45.8956L69.2697 46.5656L69.7957 43.47L65.8522 42.8ZM65.3761 45.6769L64.5069 48.6941L68.3506 49.8015L69.2198 46.7843L65.3761 45.6769ZM64.581 48.4824L63.3794 51.3834L67.0749 52.9141L68.2765 50.0132L64.581 48.4824ZM63.4767 51.1813L61.9578 53.9295L65.4587 55.8643L66.9776 53.1162L63.4767 51.1813ZM62.0772 53.7396L60.2602 56.3004L63.5224 58.6151L65.3394 56.0542L62.0772 53.7396ZM60.4 56.125L58.3077 58.4663L61.2903 61.1317L63.3826 58.7904L60.4 56.125ZM58.4663 58.3077L56.125 60.4L58.7904 63.3826L61.1317 61.2903L58.4663 58.3077ZM56.3004 60.2602L53.7396 62.0772L56.0542 65.3394L58.6151 63.5224L56.3004 60.2602ZM53.9295 61.9578L51.1813 63.4767L53.1162 66.9776L55.8643 65.4587L53.9295 61.9578ZM51.3834 63.3794L48.4824 64.581L50.0132 68.2765L52.9141 67.0749L51.3834 63.3794ZM48.6941 64.5069L45.6769 65.3761L46.7843 69.2198L49.8015 68.3506L48.6941 64.5069ZM45.8956 65.3262L42.8 65.8522L43.47 69.7957L46.5656 69.2697L45.8956 65.3262ZM43.0229 65.8271L39.8879 66.0031L40.1121 69.9969L43.2471 69.8208L43.0229 65.8271ZM40.1121 66.0031L36.9771 65.8271L36.7529 69.8208L39.8879 69.9969L40.1121 66.0031ZM37.2 65.8522L34.1044 65.3262L33.4344 69.2697L36.53 69.7957L37.2 65.8522ZM34.3231 65.3761L31.3059 64.5069L30.1985 68.3506L33.2157 69.2198L34.3231 65.3761ZM31.5176 64.581L28.6166 63.3794L27.0859 67.0749L29.9868 68.2765L31.5176 64.581ZM28.8187 63.4767L26.0705 61.9578L24.1357 65.4587L26.8838 66.9776L28.8187 63.4767ZM26.2604 62.0772L23.6996 60.2602L21.3849 63.5224L23.9458 65.3394L26.2604 62.0772ZM23.875 60.4L21.5337 58.3077L18.8683 61.2903L21.2096 63.3826L23.875 60.4ZM21.6923 58.4663L19.6 56.125L16.6174 58.7904L18.7097 61.1317L21.6923 58.4663ZM19.7398 56.3004L17.9228 53.7396L14.6606 56.0542L16.4776 58.6151L19.7398 56.3004ZM18.0422 53.9295L16.5233 51.1813L13.0224 53.1162L14.5413 55.8643L18.0422 53.9295ZM16.6206 51.3834L15.419 48.4824L11.7235 50.0132L12.9251 52.9141L16.6206 51.3834ZM15.4931 48.6941L14.6239 45.6769L10.7802 46.7843L11.6494 49.8015L15.4931 48.6941ZM14.6738 45.8956L14.1478 42.8L10.2043 43.47L10.7303 46.5656L14.6738 45.8956ZM14.1729 43.0229L13.9969 39.8879L10.0031 40.1121L10.1792 43.2471L14.1729 43.0229ZM13.9969 40.1121L14.1729 36.9771L10.1792 36.7529L10.0031 39.8879L13.9969 40.1121ZM14.1478 37.2L14.6738 34.1044L10.7303 33.4344L10.2043 36.53L14.1478 37.2ZM14.6239 34.3231L15.4931 31.3059L11.6494 30.1985L10.7802 33.2157L14.6239 34.3231ZM15.419 31.5176L16.6206 28.6166L12.9251 27.0859L11.7235 29.9868L15.419 31.5176ZM16.5233 28.8187L18.0422 26.0705L14.5413 24.1357L13.0224 26.8838L16.5233 28.8187ZM17.9228 26.2604L19.7398 23.6996L16.4776 21.3849L14.6606 23.9458L17.9228 26.2604ZM19.6 23.875L21.6923 21.5337L18.7097 18.8683L16.6174 21.2096L19.6 23.875ZM21.5337 21.6923L23.875 19.6L21.2096 16.6174L18.8683 18.7097L21.5337 21.6923ZM23.6996 19.7398L26.2604 17.9228L23.9458 14.6606L21.3849 16.4776L23.6996 19.7398ZM26.0705 18.0422L28.8187 16.5233L26.8838 13.0224L24.1357 14.5413L26.0705 18.0422ZM28.6166 16.6206L31.5176 15.419L29.9868 11.7235L27.0859 12.9251L28.6166 16.6206ZM31.3059 15.4931L34.3231 14.6239L33.2157 10.7802L30.1985 11.6494L31.3059 15.4931ZM34.1044 14.6738L37.2 14.1478L36.53 10.2043L33.4344 10.7303L34.1044 14.6738ZM36.9771 14.1729L40.1121 13.9969L39.8879 10.0031L36.7529 10.1792L36.9771 14.1729Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.3999 40.0002H50.9341C53.0266 40.0002 54.0548 37.4527 52.5485 36.0002L43.0195 26.8114C41.3925 25.2425 38.8157 25.2425 37.1887 26.8114L27.6597 36.0002C26.1534 37.4527 27.1816 40.0002 29.2741 40.0002H33.5999L33.5999 48.0007L33.5999 52.8007C33.5999 53.6844 34.3163 54.4007 35.1999 54.4007H44.7999C45.6836 54.4007 46.3999 53.6844 46.3999 52.8007V48.0007L46.3999 40.0002Z"
            fill="#9B51E0"
          />
          <path
            d="M46.3999 40.0002V38.0002C45.8695 38.0002 45.3608 38.2109 44.9857 38.586C44.6107 38.961 44.3999 39.4697 44.3999 40.0002H46.3999ZM52.5485 36.0002L51.1603 37.4399L52.5485 36.0002ZM43.0195 26.8114L41.6312 28.2511L41.6312 28.2511L43.0195 26.8114ZM37.1887 26.8114L38.577 28.2511V28.2511L37.1887 26.8114ZM27.6597 36.0002L26.2714 34.5605L26.2714 34.5605L27.6597 36.0002ZM33.5999 40.0002H35.5999C35.5999 38.8956 34.7045 38.0002 33.5999 38.0002V40.0002ZM33.5999 48.0007H31.5999H33.5999ZM33.5999 52.8007H35.5999H33.5999ZM46.3999 48.0007H48.3999H46.3999ZM50.9341 38.0002H46.3999V42.0002H50.9341V38.0002ZM51.1603 37.4399C51.2341 37.511 51.2528 37.5663 51.26 37.605C51.2693 37.6551 51.2657 37.7232 51.2362 37.7963C51.2067 37.8694 51.162 37.9209 51.1206 37.9505C51.0885 37.9733 51.0367 38.0002 50.9341 38.0002V42.0002C54.826 42.0002 56.7384 37.262 53.9368 34.5605L51.1603 37.4399ZM41.6312 28.2511L51.1603 37.4399L53.9368 34.5605L44.4077 25.3717L41.6312 28.2511ZM38.577 28.2511C39.4292 27.4293 40.779 27.4293 41.6312 28.2511L44.4077 25.3717C42.006 23.0558 38.2022 23.0558 35.8005 25.3717L38.577 28.2511ZM29.0479 37.4399L38.577 28.2511L35.8005 25.3717L26.2714 34.5605L29.0479 37.4399ZM29.2741 38.0002C29.1715 38.0002 29.1197 37.9733 29.0876 37.9505C29.0462 37.9209 29.0015 37.8694 28.972 37.7963C28.9425 37.7232 28.9389 37.6551 28.9482 37.605C28.9554 37.5663 28.9741 37.511 29.0479 37.4399L26.2714 34.5605C23.4698 37.262 25.3822 42.0002 29.2741 42.0002V38.0002ZM33.5999 38.0002H29.2741V42.0002H33.5999V38.0002ZM35.5999 48.0007V40.0002H31.5999L31.5999 48.0007H35.5999ZM35.5999 52.8007L35.5999 48.0007H31.5999L31.5999 52.8007H35.5999ZM35.1999 52.4007C35.4209 52.4007 35.5999 52.5798 35.5999 52.8007H31.5999C31.5999 54.7889 33.2117 56.4007 35.1999 56.4007V52.4007ZM44.7999 52.4007H35.1999V56.4007H44.7999V52.4007ZM44.3999 52.8007C44.3999 52.5798 44.579 52.4007 44.7999 52.4007V56.4007C46.7882 56.4007 48.3999 54.7889 48.3999 52.8007H44.3999ZM44.3999 48.0007V52.8007H48.3999V48.0007H44.3999ZM44.3999 40.0002L44.3999 48.0007H48.3999L48.3999 40.0002H44.3999Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M40 12L43.135 12.1761L46.2306 12.702L49.2478 13.5713L52.1487 14.7729L54.8969 16.2917L57.4577 18.1087L59.799 20.201L61.8913 22.5423L63.7083 25.1031L65.2271 27.8513L66.4287 30.7522L67.298 33.7694L67.8239 36.865L68 40L67.8239 43.135L67.298 46.2306L66.4287 49.2478L65.2271 52.1487L63.7083 54.8969L61.8913 57.4577L59.799 59.799L57.4577 61.8913L54.8969 63.7083L52.1487 65.2271L49.2478 66.4287L46.2306 67.298L43.135 67.8239L40 68L36.865 67.8239L33.7694 67.298L30.7522 66.4287L27.8513 65.2271L25.1031 63.7083L22.5423 61.8913L20.201 59.799L18.1087 57.4577L16.2917 54.8969L14.7729 52.1487L13.5713 49.2478L12.702 46.2306L12.1761 43.135L12 40L12.1761 36.865L12.702 33.7694L13.5713 30.7522L14.7729 27.8513L16.2917 25.1031L18.1087 22.5423L20.201 20.201L22.5423 18.1087L25.1031 16.2917L27.8513 14.7729L30.7522 13.5713L33.7694 12.702L36.865 12.1761L40 12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.4 39.9998H50.9342C53.0267 39.9998 54.0549 37.4523 52.5486 35.9998L43.0195 26.8111C41.3926 25.2422 38.8158 25.2422 37.1888 26.8111L27.6597 35.9998C26.1534 37.4523 27.1816 39.9998 29.2741 39.9998H33.6V52.8004C33.6 53.684 34.3163 54.4004 35.2 54.4004H44.8C45.6837 54.4004 46.4 53.684 46.4 52.8004V39.9998Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 12L43.135 12.1761L46.2306 12.702L49.2478 13.5713L52.1487 14.7729L54.8969 16.2917L57.4577 18.1087L59.799 20.201L61.8913 22.5423L63.7083 25.1031L65.2271 27.8513L66.4287 30.7522L67.298 33.7694L67.8239 36.865L68 40L67.8239 43.135L67.298 46.2306L66.4287 49.2478L65.2271 52.1487L63.7083 54.8969L61.8913 57.4577L59.799 59.799L57.4577 61.8913L54.8969 63.7083L52.1487 65.2271L49.2478 66.4287L46.2306 67.298L43.135 67.8239L40 68L36.865 67.8239L33.7694 67.298L30.7522 66.4287L27.8513 65.2271L25.1031 63.7083L22.5423 61.8913L20.201 59.799L18.1087 57.4577L16.2917 54.8969L14.7729 52.1487L13.5713 49.2478L12.702 46.2306L12.1761 43.135L12 40L12.1761 36.865L12.702 33.7694L13.5713 30.7522L14.7729 27.8513L16.2917 25.1031L18.1087 22.5423L20.201 20.201L22.5423 18.1087L25.1031 16.2917L27.8513 14.7729L30.7522 13.5713L33.7694 12.702L36.865 12.1761L40 12Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46.4 39.9998H50.9342C53.0267 39.9998 54.0549 37.4523 52.5486 35.9998L43.0195 26.8111C41.3926 25.2422 38.8158 25.2422 37.1888 26.8111L27.6597 35.9998C26.1534 37.4523 27.1816 39.9998 29.2741 39.9998H33.6V52.8004C33.6 53.684 34.3163 54.4004 35.2 54.4004H44.8C45.6837 54.4004 46.4 53.684 46.4 52.8004V39.9998Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.4078 25.3714C42.0061 23.0554 38.2023 23.0554 35.8005 25.3714L26.2715 34.5601C23.4699 37.2616 25.3822 41.9998 29.2741 41.9998H31.6L31.6 52.8004C31.6 54.7886 33.2118 56.4004 35.2 56.4004H44.8C46.7882 56.4004 48.4 54.7886 48.4 52.8004V41.9998H50.9342C54.8261 41.9998 56.7384 37.2616 53.9369 34.5601L44.4078 25.3714ZM38.5771 28.2507C39.4293 27.429 40.779 27.429 41.6313 28.2507L51.1603 37.4395C51.2342 37.5107 51.2528 37.566 51.2601 37.6047C51.2694 37.6547 51.2658 37.7229 51.2363 37.7959C51.2068 37.869 51.1621 37.9206 51.1206 37.9501C51.0886 37.973 51.0367 37.9998 50.9342 37.9998H46.4C45.2954 37.9998 44.4 38.8952 44.4 39.9998V52.4004H35.6L35.6 39.9998C35.6 38.8952 34.7046 37.9998 33.6 37.9998H29.2741C29.1716 37.9998 29.1198 37.973 29.0877 37.9501C29.0462 37.9206 29.0015 37.869 28.972 37.7959C28.9425 37.7229 28.9389 37.6547 28.9483 37.6047C28.9555 37.566 28.9742 37.5107 29.048 37.4395L38.5771 28.2507Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10ZM14 40C14 25.6406 25.6406 14 40 14C54.3594 14 66 25.6406 66 40C66 54.3594 54.3594 66 40 66C25.6406 66 14 54.3594 14 40Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-arrow-solid-circle', CoreArrowSolidCircle)
export default CoreArrowSolidCircle
