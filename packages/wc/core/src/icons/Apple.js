
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreApple = {
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
            d="M58.1877 29.5964C56.0647 28.407 53.6779 27.7675 51.2447 27.7361C49.0088 27.7072 46.7961 28.1927 44.7776 29.155L44.0596 29.4974C42.5897 30.1982 41.2244 31.0938 39.9998 32.1578C38.7751 31.0939 37.4099 30.1982 35.94 29.4974L35.222 29.1551C33.2035 28.1928 30.9909 27.7073 28.7549 27.7361C26.3217 27.7675 23.9349 28.4071 21.812 29.5965C19.8612 30.6895 18.1877 32.2163 16.9208 34.0589L16.4702 34.7144C15.1664 36.6107 14.2382 38.7394 13.736 40.9852L13.5049 42.0185C12.9445 44.5243 12.799 47.105 13.0742 49.6578L13.2128 50.9444C13.4781 53.406 14.1227 55.8117 15.1238 58.0761L15.647 59.2597C16.6851 61.6081 18.1015 63.7703 19.8396 65.6602L20.5565 66.4395C22.1143 68.1333 23.9825 69.5128 26.0597 70.5031L26.7777 70.8455C28.7962 71.8078 31.0089 72.2933 33.2448 72.2644C35.6065 72.234 37.9244 71.6306 39.9999 70.5075C42.0753 71.6305 44.3931 72.2339 46.7548 72.2644C48.9908 72.2932 51.2034 71.8077 53.2219 70.8454L53.9399 70.5031C56.0172 69.5127 57.8853 68.1333 59.4432 66.4395L60.16 65.6601C61.8981 63.7703 63.3145 61.6081 64.3526 59.2597L64.8759 58.0761C65.8769 55.8116 66.5215 53.4059 66.7868 50.9444L66.9255 49.6577C67.2006 47.1049 67.0551 44.5242 66.4947 42.0185L66.2636 40.9851C65.7614 38.7393 64.8333 36.6106 63.5295 34.7143L63.0788 34.0588C61.8119 32.2162 60.1385 30.6894 58.1877 29.5964Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52.102 9.36996C52.3192 10.1529 52.4559 10.9579 52.5094 11.7745L52.5196 11.93C52.6178 13.4292 52.4148 14.9448 51.9206 16.4004L51.8466 16.6185C51.3705 18.0208 50.6055 19.3354 49.5949 20.4877L49.4814 20.6171C48.479 21.7601 47.2384 22.707 45.8393 23.3969C44.4011 24.1061 42.8287 24.5274 41.2286 24.6323C39.9597 24.7155 38.6967 24.5982 37.4933 24.2873C37.1305 23.0101 36.9885 21.6952 37.0739 20.3927L37.0841 20.237C37.1866 18.6731 37.5943 17.1518 38.2874 15.7461L38.3564 15.6062C39.0209 14.2587 39.9545 13.0477 41.1102 12.0341L41.2836 11.8821C42.3969 10.9057 43.7166 10.1497 45.1678 9.65704L45.3311 9.60161C46.7705 9.11293 48.3182 8.91318 49.8747 9.01518C50.6269 9.06448 51.3731 9.18373 52.102 9.36996Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.1877 29.5964C56.0647 28.407 53.6779 27.7675 51.2447 27.7361C49.0088 27.7072 46.7961 28.1927 44.7776 29.155L44.0596 29.4974C42.5897 30.1982 41.2244 31.0938 39.9998 32.1578C38.7751 31.0939 37.4099 30.1982 35.94 29.4974L35.222 29.1551C33.2035 28.1928 30.9909 27.7073 28.7549 27.7361C26.3217 27.7675 23.9349 28.4071 21.812 29.5965C19.8612 30.6895 18.1877 32.2163 16.9208 34.0589L16.4702 34.7144C15.1664 36.6107 14.2382 38.7394 13.736 40.9852L13.5049 42.0185C12.9445 44.5243 12.799 47.105 13.0742 49.6578L13.2128 50.9444C13.4781 53.406 14.1227 55.8117 15.1238 58.0761L15.647 59.2597C16.6851 61.6081 18.1015 63.7703 19.8396 65.6602L20.5565 66.4395C22.1143 68.1333 23.9825 69.5128 26.0597 70.5031L26.7777 70.8455C28.7962 71.8078 31.0089 72.2933 33.2448 72.2644C35.6065 72.234 37.9244 71.6306 39.9999 70.5075C42.0753 71.6305 44.3931 72.2339 46.7548 72.2644C48.9908 72.2932 51.2034 71.8077 53.2219 70.8454L53.9399 70.5031C56.0172 69.5127 57.8853 68.1333 59.4432 66.4395L60.16 65.6601C61.8981 63.7703 63.3145 61.6081 64.3526 59.2597L64.8759 58.0761C65.8769 55.8116 66.5215 53.4059 66.7868 50.9444L66.9255 49.6577C67.2006 47.1049 67.0551 44.5242 66.4947 42.0185L66.2636 40.9851C65.7614 38.7393 64.8333 36.6106 63.5295 34.7143L63.0788 34.0588C61.8119 32.2162 60.1385 30.6894 58.1877 29.5964Z"
            fill="currentColor"
          />
          <path
            d="M51.2447 27.7361L51.2189 29.7359L51.2447 27.7361ZM58.1877 29.5964L59.1652 27.8516V27.8516L58.1877 29.5964ZM44.7776 29.155L43.9169 27.3497V27.3497L44.7776 29.155ZM44.0596 29.4974L44.9203 31.3027V31.3027L44.0596 29.4974ZM39.9998 32.1578L38.6881 33.6676L39.9998 34.8072L41.3115 33.6676L39.9998 32.1578ZM35.94 29.4974L35.0793 31.3027L35.0793 31.3027L35.94 29.4974ZM35.222 29.1551L36.0827 27.3498L36.0827 27.3498L35.222 29.1551ZM28.7549 27.7361L28.7807 29.736H28.7807L28.7549 27.7361ZM21.812 29.5965L20.8344 27.8517L20.8344 27.8517L21.812 29.5965ZM16.9208 34.0589L15.2728 32.9258L16.9208 34.0589ZM16.4702 34.7144L14.8221 33.5813L16.4702 34.7144ZM13.736 40.9852L11.7842 40.5487L11.7842 40.5487L13.736 40.9852ZM13.5049 42.0185L15.4567 42.455H15.4567L13.5049 42.0185ZM13.0742 49.6578L15.0626 49.4435H15.0626L13.0742 49.6578ZM13.2128 50.9444L11.2243 51.1588V51.1588L13.2128 50.9444ZM15.1238 58.0761L16.953 57.2675L15.1238 58.0761ZM15.647 59.2597L13.8177 60.0684H13.8177L15.647 59.2597ZM19.8396 65.6602L18.3676 67.0141L18.3676 67.0141L19.8396 65.6602ZM20.5565 66.4395L22.0285 65.0856L22.0285 65.0856L20.5565 66.4395ZM26.0597 70.5031L26.9204 68.6978L26.9204 68.6978L26.0597 70.5031ZM26.7777 70.8455L25.917 72.6508H25.917L26.7777 70.8455ZM33.2448 72.2644L33.219 70.2646H33.219L33.2448 72.2644ZM39.9999 70.5075L40.9517 68.7485L39.9999 68.2335L39.0481 68.7485L39.9999 70.5075ZM46.7548 72.2644L46.7806 70.2645L46.7548 72.2644ZM53.2219 70.8454L54.0826 72.6507L54.0826 72.6507L53.2219 70.8454ZM53.9399 70.5031L53.0792 68.6978L53.0792 68.6978L53.9399 70.5031ZM59.4432 66.4395L60.9152 67.7934L60.9152 67.7934L59.4432 66.4395ZM60.16 65.6601L58.6879 64.3062L58.6879 64.3062L60.16 65.6601ZM64.3526 59.2597L62.5234 58.451V58.451L64.3526 59.2597ZM64.8759 58.0761L63.0466 57.2674V57.2674L64.8759 58.0761ZM66.7868 50.9444L68.7753 51.1587V51.1587L66.7868 50.9444ZM66.9255 49.6577L64.937 49.4434V49.4434L66.9255 49.6577ZM66.4947 42.0185L64.5429 42.455L64.5429 42.455L66.4947 42.0185ZM66.2636 40.9851L68.2154 40.5486L68.2154 40.5486L66.2636 40.9851ZM63.5295 34.7143L61.8814 35.8474L61.8814 35.8474L63.5295 34.7143ZM63.0788 34.0588L64.7269 32.9257V32.9257L63.0788 34.0588ZM51.2189 29.7359C53.3186 29.763 55.3782 30.3149 57.2101 31.3413L59.1652 27.8516C56.7513 26.4991 54.0373 25.7719 51.2705 25.7362L51.2189 29.7359ZM45.6384 30.9604C47.3801 30.1299 49.2895 29.711 51.2189 29.7359L51.2705 25.7362C48.7281 25.7034 46.2121 26.2555 43.9169 27.3497L45.6384 30.9604ZM44.9203 31.3027L45.6384 30.9604L43.9169 27.3497L43.1989 27.692L44.9203 31.3027ZM41.3115 33.6676C42.4001 32.7218 43.6137 31.9257 44.9203 31.3027L43.1989 27.692C41.5657 28.4707 40.0488 29.4659 38.6881 30.6481L41.3115 33.6676ZM35.0793 31.3027C36.3859 31.9257 37.5995 32.7218 38.6881 33.6676L41.3115 30.6481C39.9508 29.4659 38.4339 28.4708 36.8007 27.6921L35.0793 31.3027ZM34.3613 30.9604L35.0793 31.3027L36.8007 27.6921L36.0827 27.3498L34.3613 30.9604ZM28.7807 29.736C30.7102 29.7111 32.6195 30.13 34.3613 30.9604L36.0827 27.3498C33.7875 26.2555 31.2716 25.7035 28.7291 25.7363L28.7807 29.736ZM22.7895 31.3413C24.6215 30.3149 26.681 29.7631 28.7807 29.736L28.7291 25.7363C25.9623 25.772 23.2484 26.4992 20.8344 27.8517L22.7895 31.3413ZM18.5689 35.192C19.6621 33.6019 21.1061 32.2845 22.7895 31.3413L20.8344 27.8517C18.6162 29.0945 16.7133 30.8306 15.2728 32.9258L18.5689 35.192ZM18.1182 35.8475L18.5689 35.192L15.2728 32.9258L14.8221 33.5813L18.1182 35.8475ZM15.6878 41.4217C16.1342 39.4253 16.9593 37.5331 18.1182 35.8475L14.8221 33.5813C13.3735 35.6882 12.3422 38.0534 11.7842 40.5487L15.6878 41.4217ZM15.4567 42.455L15.6878 41.4217L11.7842 40.5487L11.5531 41.582L15.4567 42.455ZM15.0626 49.4435C14.8109 47.1081 14.944 44.7473 15.4567 42.455L11.5531 41.582C10.945 44.3012 10.7871 47.1018 11.0857 49.8721L15.0626 49.4435ZM15.2013 50.7301L15.0626 49.4435L11.0857 49.8721L11.2243 51.1588L15.2013 50.7301ZM16.953 57.2675C16.0354 55.1918 15.4445 52.9866 15.2013 50.7301L11.2243 51.1588C11.5118 53.8255 12.2101 56.4316 13.2945 58.8848L16.953 57.2675ZM17.4762 58.4511L16.953 57.2675L13.2945 58.8848L13.8177 60.0684L17.4762 58.4511ZM21.3117 64.3063C19.7216 62.5774 18.4259 60.5994 17.4762 58.4511L13.8177 60.0684C14.9443 62.6168 16.4813 64.9632 18.3676 67.0141L21.3117 64.3063ZM22.0285 65.0856L21.3117 64.3063L18.3676 67.0141L19.0844 67.7934L22.0285 65.0856ZM26.9204 68.6978C25.0739 67.8175 23.4133 66.5913 22.0285 65.0856L19.0844 67.7934C20.8153 69.6754 22.891 71.2081 25.199 72.3085L26.9204 68.6978ZM27.6385 69.0401L26.9204 68.6978L25.199 72.3085L25.917 72.6508L27.6385 69.0401ZM33.219 70.2646C31.2896 70.2895 29.3802 69.8706 27.6385 69.0401L25.917 72.6508C28.2122 73.745 30.7282 74.2971 33.2706 74.2643L33.219 70.2646ZM39.0481 68.7485C37.2571 69.7176 35.257 70.2383 33.219 70.2646L33.2706 74.2643C35.9561 74.2296 38.5918 73.5435 40.9517 72.2665L39.0481 68.7485ZM46.7806 70.2645C44.7427 70.2382 42.7426 69.7176 40.9517 68.7485L39.0481 72.2665C41.408 73.5435 44.0436 74.2295 46.729 74.2642L46.7806 70.2645ZM52.3612 69.0401C50.6194 69.8705 48.7101 70.2894 46.7806 70.2645L46.729 74.2642C49.2715 74.297 51.7874 73.745 54.0826 72.6507L52.3612 69.0401ZM53.0792 68.6978L52.3612 69.0401L54.0826 72.6507L54.8006 72.3084L53.0792 68.6978ZM57.9711 65.0856C56.5863 66.5912 54.9257 67.8174 53.0792 68.6978L54.8006 72.3084C57.1086 71.208 59.1843 69.6753 60.9152 67.7934L57.9711 65.0856ZM58.6879 64.3062L57.9711 65.0856L60.9152 67.7934L61.632 67.014L58.6879 64.3062ZM62.5234 58.451C61.5737 60.5994 60.278 62.5774 58.6879 64.3062L61.632 67.014C63.5183 64.9632 65.0553 62.6168 66.1819 60.0683L62.5234 58.451ZM63.0466 57.2674L62.5234 58.451L66.1819 60.0683L66.7051 58.8847L63.0466 57.2674ZM64.7983 50.7301C64.5551 52.9865 63.9642 55.1917 63.0466 57.2674L66.7051 58.8847C67.7895 56.4316 68.4879 53.8254 68.7753 51.1587L64.7983 50.7301ZM64.937 49.4434L64.7983 50.7301L68.7753 51.1587L68.914 49.8721L64.937 49.4434ZM64.5429 42.455C65.0556 44.7472 65.1887 47.1081 64.937 49.4434L68.914 49.8721C69.2126 47.1017 69.0546 44.3012 68.4465 41.582L64.5429 42.455ZM64.3119 41.4216L64.5429 42.455L68.4465 41.582L68.2154 40.5486L64.3119 41.4216ZM61.8814 35.8474C63.0404 37.5331 63.8654 39.4253 64.3119 41.4216L68.2154 40.5486C67.6574 38.0533 66.6261 35.6882 65.1775 33.5812L61.8814 35.8474ZM61.4307 35.1919L61.8814 35.8474L65.1775 33.5812L64.7269 32.9257L61.4307 35.1919ZM57.2101 31.3413C58.8935 32.2844 60.3375 33.6019 61.4307 35.1919L64.7269 32.9257C63.2863 30.8305 61.3835 29.0944 59.1652 27.8516L57.2101 31.3413Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.102 9.36979C52.3191 10.1528 52.4558 10.9577 52.5093 11.7743L52.5195 11.9298C52.6178 13.429 52.4147 14.9446 51.9205 16.4003L51.8465 16.6183C51.3704 18.0207 50.6054 19.3352 49.5948 20.4875L49.4813 20.617C48.4789 21.7599 47.2383 22.7068 45.8392 23.3967C44.4011 24.1059 42.8286 24.5273 41.2285 24.6322C39.9596 24.7153 38.6966 24.598 37.4932 24.2871C37.1305 23.0099 36.9884 21.695 37.0738 20.3925L37.084 20.2368C37.1865 18.6729 37.5942 17.1516 38.2873 15.746L38.3564 15.606C39.0208 14.2586 39.9544 13.0475 41.1101 12.034L41.2835 11.8819C42.3968 10.9055 43.7165 10.1495 45.1677 9.65687L45.331 9.60144C46.7704 9.11277 48.3181 8.91301 49.8746 9.01501C50.6268 9.06431 51.373 9.18356 52.102 9.36979Z"
            fill="currentColor"
          />
          <path
            d="M52.102 9.36979L54.1401 8.91055L53.8452 7.8468L52.6748 7.54781L52.102 9.36979ZM52.5093 11.7743L54.6065 11.6627L54.6065 11.6627L52.5093 11.7743ZM52.5195 11.9298L50.4223 12.0415L50.4223 12.0415L52.5195 11.9298ZM51.9205 16.4003L53.9294 16.9544L53.9294 16.9544L51.9205 16.4003ZM51.8465 16.6183L49.8376 16.0642L49.8376 16.0642L51.8465 16.6183ZM49.5948 20.4875L51.2429 21.662L51.2429 21.6619L49.5948 20.4875ZM49.4813 20.617L47.8332 19.4425L47.8332 19.4425L49.4813 20.617ZM45.8392 23.3967L44.8309 21.7353L44.8309 21.7353L45.8392 23.3967ZM41.2285 24.6322L41.0761 22.7434L41.2285 24.6322ZM37.4932 24.2871L35.458 24.7568L35.7567 25.8085L36.9144 26.1076L37.4932 24.2871ZM37.0738 20.3925L39.171 20.5042L39.171 20.5042L37.0738 20.3925ZM37.084 20.2368L34.9868 20.1251L34.9868 20.1251L37.084 20.2368ZM38.2873 15.746L36.3676 14.9767L36.3676 14.9767L38.2873 15.746ZM38.3564 15.606L40.2761 16.3753L40.2761 16.3753L38.3564 15.606ZM41.1101 12.034L42.5752 13.3913L42.5752 13.3913L41.1101 12.034ZM41.2835 11.8819L39.8184 10.5246L39.8184 10.5246L41.2835 11.8819ZM45.1677 9.65687L44.4273 7.88464L44.4273 7.88464L45.1677 9.65687ZM45.331 9.60144L46.0714 11.3737L46.0714 11.3737L45.331 9.60144ZM49.8746 9.01501L49.7222 10.9038L49.8746 9.01501ZM50.0638 9.82904C50.2491 10.4972 50.3662 11.1858 50.4121 11.886L54.6065 11.6627C54.5454 10.7297 54.3891 9.80832 54.1401 8.91055L50.0638 9.82904ZM50.4121 11.886L50.4223 12.0415L54.6167 11.8181L54.6065 11.6627L50.4121 11.886ZM50.4223 12.0415C50.5056 13.3127 50.3336 14.6029 49.9116 15.8461L53.9294 16.9544C54.4957 15.2863 54.7299 13.5454 54.6167 11.8181L50.4223 12.0415ZM49.9116 15.8461L49.8376 16.0642L53.8554 17.1725L53.9294 16.9544L49.9116 15.8461ZM49.8376 16.0642C49.4381 17.241 48.7956 18.3452 47.9468 19.3131L51.2429 21.6619C52.4152 20.3252 53.3028 18.8004 53.8554 17.1724L49.8376 16.0642ZM47.9468 19.3131L47.8332 19.4425L51.1294 21.7914L51.2429 21.662L47.9468 19.3131ZM47.8332 19.4425C47.0032 20.3889 45.9792 21.1691 44.8309 21.7353L46.8476 25.0581C48.4974 24.2445 49.9545 23.131 51.1294 21.7914L47.8332 19.4425ZM44.8309 21.7353C43.6508 22.3173 42.3695 22.6586 41.0761 22.7434L41.3809 26.5209C43.2877 26.3959 45.1513 25.8946 46.8476 25.0581L44.8309 21.7353ZM41.0761 22.7434C40.0507 22.8106 39.0353 22.7155 38.0721 22.4667L36.9144 26.1076C38.3579 26.4805 39.8686 26.6201 41.3809 26.5209L41.0761 22.7434ZM39.5285 23.8174C39.2189 22.7274 39.0986 21.6086 39.171 20.5042L34.9766 20.2808C34.8782 21.7815 35.0421 23.2924 35.458 24.7568L39.5285 23.8174ZM39.171 20.5042L39.1812 20.3485L34.9868 20.1251L34.9766 20.2808L39.171 20.5042ZM39.1812 20.3485C39.2692 19.0074 39.6183 17.7092 40.2071 16.5152L36.3676 14.9767C35.57 16.5941 35.1039 18.3385 34.9868 20.1251L39.1812 20.3485ZM40.2071 16.5152L40.2761 16.3753L36.4366 14.8368L36.3676 14.9767L40.2071 16.5152ZM40.2761 16.3753C40.8336 15.2448 41.614 14.2342 42.5752 13.3913L39.6451 10.6766C38.2948 11.8609 37.2081 13.2723 36.4366 14.8368L40.2761 16.3753ZM42.5752 13.3913L42.7485 13.2392L39.8184 10.5246L39.6451 10.6766L42.5752 13.3913ZM42.7485 13.2392C43.655 12.4443 44.7281 11.8297 45.9082 11.4291L44.4273 7.88464C42.7049 8.46933 41.1387 9.36672 39.8184 10.5246L42.7485 13.2392ZM45.9082 11.4291L46.0714 11.3737L44.5905 7.82921L44.4273 7.88464L45.9082 11.4291ZM46.0714 11.3737C47.2219 10.9831 48.4647 10.8214 49.7222 10.9038L50.0269 7.12624C48.1716 7.00466 46.319 7.24243 44.5905 7.82921L46.0714 11.3737ZM49.7222 10.9038C50.3303 10.9436 50.9356 11.0402 51.5291 11.1918L52.6748 7.54781C51.8104 7.32696 50.9234 7.18499 50.0269 7.12624L49.7222 10.9038Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.1877 29.5964C56.0647 28.407 53.6779 27.7675 51.2447 27.7361C49.0088 27.7072 46.7961 28.1927 44.7776 29.155L44.0596 29.4974C42.5897 30.1982 41.2244 31.0938 39.9998 32.1578C38.7751 31.0939 37.4099 30.1982 35.94 29.4974L35.222 29.1551C33.2035 28.1928 30.9909 27.7073 28.7549 27.7361C26.3217 27.7675 23.9349 28.4071 21.812 29.5965C19.8612 30.6895 18.1877 32.2163 16.9208 34.0589L16.4702 34.7144C15.1664 36.6107 14.2382 38.7394 13.736 40.9852L13.5049 42.0185C12.9445 44.5243 12.799 47.105 13.0742 49.6578L13.2128 50.9444C13.4781 53.406 14.1227 55.8117 15.1238 58.0761L15.647 59.2597C16.6851 61.6081 18.1015 63.7703 19.8396 65.6602L20.5565 66.4395C22.1143 68.1333 23.9825 69.5128 26.0597 70.5031L26.7777 70.8455C28.7962 71.8078 31.0089 72.2933 33.2448 72.2644C35.6065 72.234 37.9244 71.6306 39.9999 70.5075C42.0753 71.6305 44.3931 72.2339 46.7548 72.2644C48.9908 72.2932 51.2034 71.8077 53.2219 70.8454L53.9399 70.5031C56.0172 69.5127 57.8853 68.1333 59.4432 66.4395L60.16 65.6601C61.8981 63.7703 63.3145 61.6081 64.3526 59.2597L64.8759 58.0761C65.8769 55.8116 66.5215 53.4059 66.7868 50.9444L66.9255 49.6577C67.2006 47.1049 67.0551 44.5242 66.4947 42.0185L66.2636 40.9851C65.7614 38.7393 64.8333 36.6106 63.5295 34.7143L63.0788 34.0588C61.8119 32.2162 60.1385 30.6894 58.1877 29.5964Z"
            fill="#EB5757"
          />
          <path
            d="M51.2447 27.7361L51.2189 29.7359L51.2447 27.7361ZM58.1877 29.5964L59.1652 27.8516V27.8516L58.1877 29.5964ZM44.7776 29.155L43.9169 27.3497V27.3497L44.7776 29.155ZM44.0596 29.4974L44.9203 31.3027V31.3027L44.0596 29.4974ZM39.9998 32.1578L38.6881 33.6676L39.9998 34.8072L41.3115 33.6676L39.9998 32.1578ZM35.94 29.4974L35.0793 31.3027L35.0793 31.3027L35.94 29.4974ZM35.222 29.1551L36.0827 27.3498L36.0827 27.3498L35.222 29.1551ZM28.7549 27.7361L28.7807 29.736H28.7807L28.7549 27.7361ZM21.812 29.5965L20.8344 27.8517L20.8344 27.8517L21.812 29.5965ZM16.9208 34.0589L15.2728 32.9258L15.2728 32.9258L16.9208 34.0589ZM16.4702 34.7144L14.8221 33.5813L16.4702 34.7144ZM13.736 40.9852L11.7842 40.5487H11.7842L13.736 40.9852ZM13.5049 42.0185L15.4567 42.455L15.4567 42.455L13.5049 42.0185ZM13.0742 49.6578L15.0626 49.4435V49.4435L13.0742 49.6578ZM13.2128 50.9444L11.2243 51.1588L11.2243 51.1588L13.2128 50.9444ZM15.1238 58.0761L16.953 57.2675L16.953 57.2675L15.1238 58.0761ZM15.647 59.2597L13.8177 60.0684H13.8177L15.647 59.2597ZM19.8396 65.6602L18.3676 67.0141L18.3676 67.0141L19.8396 65.6602ZM20.5565 66.4395L22.0285 65.0856H22.0285L20.5565 66.4395ZM26.0597 70.5031L26.9204 68.6978L26.9204 68.6978L26.0597 70.5031ZM26.7777 70.8455L25.917 72.6508H25.917L26.7777 70.8455ZM33.2448 72.2644L33.219 70.2646H33.219L33.2448 72.2644ZM39.9999 70.5075L40.9517 68.7485L39.9999 68.2335L39.0481 68.7485L39.9999 70.5075ZM46.7548 72.2644L46.7806 70.2645L46.7548 72.2644ZM53.2219 70.8454L54.0826 72.6507L54.0826 72.6507L53.2219 70.8454ZM53.9399 70.5031L53.0792 68.6978L53.0792 68.6978L53.9399 70.5031ZM59.4432 66.4395L60.9152 67.7934L60.9152 67.7934L59.4432 66.4395ZM60.16 65.6601L58.6879 64.3062L58.6879 64.3062L60.16 65.6601ZM64.3526 59.2597L62.5234 58.451V58.451L64.3526 59.2597ZM64.8759 58.0761L63.0466 57.2674V57.2674L64.8759 58.0761ZM66.7868 50.9444L68.7753 51.1587V51.1587L66.7868 50.9444ZM66.9255 49.6577L64.937 49.4434V49.4434L66.9255 49.6577ZM66.4947 42.0185L64.5429 42.455L64.5429 42.455L66.4947 42.0185ZM66.2636 40.9851L68.2154 40.5486L68.2154 40.5486L66.2636 40.9851ZM63.5295 34.7143L61.8814 35.8474L61.8814 35.8474L63.5295 34.7143ZM63.0788 34.0588L64.7269 32.9257V32.9257L63.0788 34.0588ZM51.2189 29.7359C53.3186 29.763 55.3782 30.3149 57.2101 31.3413L59.1652 27.8516C56.7513 26.4991 54.0373 25.7719 51.2705 25.7362L51.2189 29.7359ZM45.6384 30.9604C47.3801 30.1299 49.2895 29.711 51.2189 29.7359L51.2705 25.7362C48.7281 25.7034 46.2121 26.2555 43.9169 27.3497L45.6384 30.9604ZM44.9203 31.3027L45.6384 30.9604L43.9169 27.3497L43.1989 27.692L44.9203 31.3027ZM41.3115 33.6676C42.4001 32.7218 43.6137 31.9257 44.9203 31.3027L43.1989 27.692C41.5657 28.4707 40.0488 29.4659 38.6881 30.6481L41.3115 33.6676ZM35.0793 31.3027C36.3859 31.9257 37.5995 32.7218 38.6881 33.6676L41.3115 30.6481C39.9508 29.4659 38.4339 28.4708 36.8007 27.6921L35.0793 31.3027ZM34.3613 30.9604L35.0793 31.3027L36.8007 27.6921L36.0827 27.3498L34.3613 30.9604ZM28.7807 29.736C30.7102 29.7111 32.6195 30.13 34.3613 30.9604L36.0827 27.3498C33.7875 26.2555 31.2716 25.7035 28.7291 25.7363L28.7807 29.736ZM22.7895 31.3413C24.6215 30.3149 26.681 29.7631 28.7807 29.736L28.7291 25.7363C25.9623 25.772 23.2484 26.4992 20.8344 27.8517L22.7895 31.3413ZM18.5689 35.192C19.6621 33.6019 21.1061 32.2845 22.7895 31.3413L20.8344 27.8517C18.6162 29.0945 16.7133 30.8306 15.2728 32.9258L18.5689 35.192ZM18.1182 35.8475L18.5689 35.192L15.2728 32.9258L14.8221 33.5813L18.1182 35.8475ZM15.6878 41.4217C16.1342 39.4253 16.9593 37.5331 18.1182 35.8475L14.8221 33.5813C13.3735 35.6882 12.3422 38.0534 11.7842 40.5487L15.6878 41.4217ZM15.4567 42.455L15.6878 41.4217L11.7842 40.5487L11.5531 41.582L15.4567 42.455ZM15.0626 49.4435C14.8109 47.1081 14.944 44.7473 15.4567 42.455L11.5531 41.582C10.945 44.3012 10.7871 47.1018 11.0857 49.8721L15.0626 49.4435ZM15.2013 50.7301L15.0626 49.4435L11.0857 49.8721L11.2243 51.1588L15.2013 50.7301ZM16.953 57.2675C16.0354 55.1918 15.4445 52.9866 15.2013 50.7301L11.2243 51.1588C11.5118 53.8255 12.2101 56.4316 13.2945 58.8848L16.953 57.2675ZM17.4762 58.4511L16.953 57.2675L13.2945 58.8848L13.8177 60.0684L17.4762 58.4511ZM21.3117 64.3063C19.7216 62.5774 18.4259 60.5994 17.4762 58.4511L13.8177 60.0684C14.9443 62.6168 16.4813 64.9632 18.3676 67.0141L21.3117 64.3063ZM22.0285 65.0856L21.3117 64.3063L18.3676 67.0141L19.0844 67.7934L22.0285 65.0856ZM26.9204 68.6978C25.0739 67.8175 23.4133 66.5913 22.0285 65.0856L19.0844 67.7934C20.8153 69.6754 22.891 71.2081 25.199 72.3085L26.9204 68.6978ZM27.6385 69.0401L26.9204 68.6978L25.199 72.3085L25.917 72.6508L27.6385 69.0401ZM33.219 70.2646C31.2896 70.2895 29.3802 69.8706 27.6385 69.0401L25.917 72.6508C28.2122 73.745 30.7282 74.2971 33.2706 74.2643L33.219 70.2646ZM39.0481 68.7485C37.2571 69.7176 35.257 70.2383 33.219 70.2646L33.2706 74.2643C35.9561 74.2296 38.5918 73.5435 40.9517 72.2665L39.0481 68.7485ZM46.7806 70.2645C44.7427 70.2382 42.7426 69.7176 40.9517 68.7485L39.0481 72.2665C41.408 73.5435 44.0436 74.2295 46.729 74.2642L46.7806 70.2645ZM52.3612 69.0401C50.6194 69.8705 48.7101 70.2894 46.7806 70.2645L46.729 74.2642C49.2715 74.297 51.7874 73.745 54.0826 72.6507L52.3612 69.0401ZM53.0792 68.6978L52.3612 69.0401L54.0826 72.6507L54.8006 72.3084L53.0792 68.6978ZM57.9711 65.0856C56.5863 66.5912 54.9257 67.8174 53.0792 68.6978L54.8006 72.3084C57.1086 71.208 59.1843 69.6753 60.9152 67.7934L57.9711 65.0856ZM58.6879 64.3062L57.9711 65.0856L60.9152 67.7934L61.632 67.014L58.6879 64.3062ZM62.5234 58.451C61.5737 60.5994 60.278 62.5774 58.6879 64.3062L61.632 67.014C63.5183 64.9632 65.0553 62.6168 66.1819 60.0683L62.5234 58.451ZM63.0466 57.2674L62.5234 58.451L66.1819 60.0683L66.7051 58.8847L63.0466 57.2674ZM64.7983 50.7301C64.5551 52.9865 63.9642 55.1917 63.0466 57.2674L66.7051 58.8847C67.7895 56.4316 68.4879 53.8254 68.7753 51.1587L64.7983 50.7301ZM64.937 49.4434L64.7983 50.7301L68.7753 51.1587L68.914 49.8721L64.937 49.4434ZM64.5429 42.455C65.0556 44.7472 65.1887 47.1081 64.937 49.4434L68.914 49.8721C69.2126 47.1017 69.0546 44.3012 68.4465 41.582L64.5429 42.455ZM64.3119 41.4216L64.5429 42.455L68.4465 41.582L68.2154 40.5486L64.3119 41.4216ZM61.8814 35.8474C63.0404 37.5331 63.8654 39.4253 64.3119 41.4216L68.2154 40.5486C67.6574 38.0533 66.6261 35.6882 65.1775 33.5812L61.8814 35.8474ZM61.4307 35.1919L61.8814 35.8474L65.1775 33.5812L64.7269 32.9257L61.4307 35.1919ZM57.2101 31.3413C58.8935 32.2844 60.3375 33.6019 61.4307 35.1919L64.7269 32.9257C63.2863 30.8305 61.3835 29.0944 59.1652 27.8516L57.2101 31.3413Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M52.102 9.3698C52.3191 10.1528 52.4558 10.9577 52.5093 11.7743L52.5195 11.9298C52.6178 13.429 52.4147 14.9446 51.9205 16.4003L51.8465 16.6183C51.3704 18.0207 50.6054 19.3352 49.5948 20.4875L49.4813 20.617C48.4789 21.7599 47.2383 22.7068 45.8392 23.3967C44.4011 24.1059 42.8286 24.5273 41.2285 24.6322C39.9596 24.7153 38.6966 24.598 37.4932 24.2871C37.1305 23.0099 36.9884 21.695 37.0738 20.3925L37.084 20.2368C37.1865 18.6729 37.5942 17.1516 38.2873 15.746L38.3564 15.606C39.0208 14.2586 39.9544 13.0475 41.1101 12.034L41.2835 11.8819C42.3968 10.9055 43.7165 10.1495 45.1677 9.65687L45.331 9.60144C46.7704 9.11277 48.3181 8.91301 49.8746 9.01501C50.6268 9.06431 51.373 9.18356 52.102 9.3698Z"
            fill="#219653"
          />
          <path
            d="M52.102 9.3698L54.1401 8.91055L53.8452 7.8468L52.6748 7.54781L52.102 9.3698ZM52.5093 11.7743L54.6065 11.6627L54.6065 11.6627L52.5093 11.7743ZM52.5195 11.9298L50.4223 12.0415L50.4223 12.0415L52.5195 11.9298ZM51.9205 16.4003L53.9294 16.9544L53.9294 16.9544L51.9205 16.4003ZM51.8465 16.6183L49.8376 16.0642L49.8376 16.0642L51.8465 16.6183ZM49.5948 20.4875L51.2429 21.662L51.2429 21.6619L49.5948 20.4875ZM49.4813 20.617L47.8332 19.4425L47.8332 19.4425L49.4813 20.617ZM45.8392 23.3967L44.8309 21.7353L44.8309 21.7353L45.8392 23.3967ZM41.2285 24.6322L41.0761 22.7434L41.2285 24.6322ZM37.4932 24.2871L35.458 24.7568L35.7567 25.8085L36.9144 26.1076L37.4932 24.2871ZM37.0738 20.3925L39.171 20.5042L39.171 20.5042L37.0738 20.3925ZM37.084 20.2368L34.9868 20.1251L34.9868 20.1251L37.084 20.2368ZM38.2873 15.746L36.3676 14.9767L36.3676 14.9767L38.2873 15.746ZM38.3564 15.606L40.2761 16.3753L38.3564 15.606ZM41.1101 12.034L42.5752 13.3913L42.5752 13.3913L41.1101 12.034ZM41.2835 11.8819L39.8184 10.5246L39.8184 10.5246L41.2835 11.8819ZM45.1677 9.65687L44.4273 7.88464L44.4273 7.88464L45.1677 9.65687ZM45.331 9.60144L46.0714 11.3737L46.0714 11.3737L45.331 9.60144ZM49.8746 9.01501L49.7222 10.9038L49.7222 10.9038L49.8746 9.01501ZM50.0638 9.82904C50.2491 10.4972 50.3662 11.1858 50.4121 11.886L54.6065 11.6627C54.5454 10.7297 54.3891 9.80832 54.1401 8.91055L50.0638 9.82904ZM50.4121 11.886L50.4223 12.0415L54.6167 11.8181L54.6065 11.6627L50.4121 11.886ZM50.4223 12.0415C50.5056 13.3127 50.3336 14.6029 49.9116 15.8461L53.9294 16.9544C54.4957 15.2863 54.7299 13.5454 54.6167 11.8181L50.4223 12.0415ZM49.9116 15.8461L49.8376 16.0642L53.8554 17.1725L53.9294 16.9544L49.9116 15.8461ZM49.8376 16.0642C49.4381 17.241 48.7956 18.3452 47.9468 19.3131L51.2429 21.6619C52.4152 20.3252 53.3028 18.8004 53.8554 17.1724L49.8376 16.0642ZM47.9468 19.3131L47.8332 19.4425L51.1294 21.7914L51.2429 21.662L47.9468 19.3131ZM47.8332 19.4425C47.0032 20.3889 45.9792 21.1691 44.8309 21.7353L46.8476 25.0581C48.4974 24.2445 49.9545 23.131 51.1294 21.7914L47.8332 19.4425ZM44.8309 21.7353C43.6508 22.3173 42.3695 22.6586 41.0761 22.7434L41.3809 26.5209C43.2877 26.3959 45.1513 25.8946 46.8476 25.0581L44.8309 21.7353ZM41.0761 22.7434C40.0507 22.8106 39.0353 22.7155 38.0721 22.4667L36.9144 26.1076C38.3579 26.4805 39.8686 26.6201 41.3809 26.5209L41.0761 22.7434ZM39.5285 23.8174C39.2189 22.7274 39.0986 21.6086 39.171 20.5042L34.9766 20.2808C34.8782 21.7815 35.0421 23.2924 35.458 24.7568L39.5285 23.8174ZM39.171 20.5042L39.1812 20.3485L34.9868 20.1251L34.9766 20.2808L39.171 20.5042ZM39.1812 20.3485C39.2692 19.0074 39.6183 17.7092 40.2071 16.5152L36.3676 14.9767C35.57 16.5941 35.1039 18.3385 34.9868 20.1251L39.1812 20.3485ZM40.2071 16.5152L40.2761 16.3753L36.4366 14.8368L36.3676 14.9767L40.2071 16.5152ZM40.2761 16.3753C40.8336 15.2448 41.614 14.2342 42.5752 13.3913L39.6451 10.6766C38.2948 11.8609 37.2081 13.2723 36.4366 14.8368L40.2761 16.3753ZM42.5752 13.3913L42.7485 13.2392L39.8184 10.5246L39.6451 10.6766L42.5752 13.3913ZM42.7485 13.2393C43.655 12.4443 44.7281 11.8297 45.9082 11.4291L44.4273 7.88464C42.7049 8.46933 41.1387 9.36672 39.8184 10.5246L42.7485 13.2393ZM45.9082 11.4291L46.0714 11.3737L44.5905 7.82921L44.4273 7.88464L45.9082 11.4291ZM46.0714 11.3737C47.2219 10.9831 48.4647 10.8214 49.7222 10.9038L50.0269 7.12624C48.1716 7.00466 46.319 7.24243 44.5905 7.82921L46.0714 11.3737ZM49.7222 10.9038C50.3303 10.9436 50.9356 11.0402 51.5291 11.1918L52.6748 7.54781C51.8104 7.32696 50.9234 7.18499 50.0269 7.12624L49.7222 10.9038Z"
            fill="#219653"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M58.1877 29.5962C56.0647 28.4068 53.6779 27.7673 51.2447 27.7359C49.0088 27.707 46.7961 28.1925 44.7776 29.1548L44.0596 29.4972C42.5897 30.198 41.2244 31.0936 39.9998 32.1576C38.7751 31.0936 37.4099 30.198 35.94 29.4972L35.222 29.1549C33.2035 28.1926 30.9909 27.7071 28.7549 27.7359C26.3217 27.7673 23.9349 28.4069 21.812 29.5963C19.8612 30.6893 18.1877 32.216 16.9208 34.0587L16.4702 34.7141C15.1664 36.6105 14.2382 38.7392 13.736 40.985L13.5049 42.0183C12.9445 44.524 12.799 47.1047 13.0742 49.6576L13.2128 50.9442C13.4781 53.4058 14.1227 55.8115 15.1238 58.0759L15.647 59.2595C16.6851 61.6079 18.1015 63.7701 19.8396 65.66L20.5565 66.4393C22.1143 68.1331 23.9825 69.5126 26.0597 70.5029L26.7777 70.8453C28.7962 71.8076 31.0089 72.2931 33.2448 72.2642C35.6065 72.2337 37.9244 71.6304 39.9999 70.5073C42.0753 71.6303 44.3931 72.2337 46.7548 72.2641C48.9908 72.293 51.2034 71.8075 53.2219 70.8452L53.9399 70.5029C56.0172 69.5125 57.8853 68.1331 59.4432 66.4393L60.16 65.6599C61.8981 63.7701 63.3145 61.6079 64.3526 59.2595L64.8759 58.0759C65.8769 55.8114 66.5215 53.4057 66.7868 50.9442L66.9255 49.6575C67.2006 47.1047 67.0551 44.524 66.4947 42.0182L66.2636 40.9849C65.7614 38.7391 64.8333 36.6104 63.5295 34.7141L63.0788 34.0586C61.8119 32.216 60.1385 30.6892 58.1877 29.5962Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52.1022 9.36996C52.3193 10.1529 52.4561 10.9579 52.5096 11.7745L52.5198 11.93C52.618 13.4292 52.4149 14.9448 51.9208 16.4004L51.8467 16.6185C51.3707 18.0208 50.6057 19.3354 49.5951 20.4877L49.4815 20.6171C48.4791 21.7601 47.2385 22.707 45.8395 23.3969C44.4013 24.1061 42.8288 24.5274 41.2287 24.6323C39.9599 24.7155 38.6968 24.5982 37.4935 24.2873C37.1307 23.0101 36.9887 21.6952 37.0741 20.3927L37.0843 20.237C37.1868 18.6731 37.5944 17.1518 38.2876 15.7461L38.3566 15.6062C39.0211 14.2587 39.9547 13.0477 41.1104 12.0341L41.2837 11.8821C42.3971 10.9057 43.7168 10.1497 45.1679 9.65704L45.3312 9.60161C46.7707 9.11293 48.3184 8.91318 49.8748 9.01518C50.6271 9.06448 51.3733 9.18373 52.1022 9.36996Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58.1877 29.5962C56.0647 28.4068 53.6779 27.7673 51.2447 27.7359C49.0088 27.707 46.7961 28.1925 44.7776 29.1548L44.0596 29.4972C42.5897 30.198 41.2244 31.0936 39.9998 32.1576C38.7751 31.0936 37.4099 30.198 35.94 29.4972L35.222 29.1549C33.2035 28.1926 30.9909 27.7071 28.7549 27.7359C26.3217 27.7673 23.9349 28.4069 21.812 29.5963C19.8612 30.6893 18.1877 32.216 16.9208 34.0587L16.4702 34.7141C15.1664 36.6105 14.2382 38.7392 13.736 40.985L13.5049 42.0183C12.9445 44.524 12.799 47.1047 13.0742 49.6576L13.2128 50.9442C13.4781 53.4058 14.1227 55.8115 15.1238 58.0759L15.647 59.2595C16.6851 61.6079 18.1015 63.7701 19.8396 65.66L20.5565 66.4393C22.1143 68.1331 23.9825 69.5126 26.0597 70.5029L26.7777 70.8453C28.7962 71.8076 31.0089 72.2931 33.2448 72.2642C35.6065 72.2337 37.9244 71.6304 39.9999 70.5073C42.0753 71.6303 44.3931 72.2337 46.7548 72.2641C48.9908 72.293 51.2034 71.8075 53.2219 70.8452L53.9399 70.5029C56.0172 69.5125 57.8853 68.1331 59.4432 66.4393L60.16 65.6599C61.8981 63.7701 63.3145 61.6079 64.3526 59.2595L64.8759 58.0759C65.8769 55.8114 66.5215 53.4057 66.7868 50.9442L66.9255 49.6575C67.2006 47.1047 67.0551 44.524 66.4947 42.0182L66.2636 40.9849C65.7614 38.7391 64.8333 36.6104 63.5295 34.7141L63.0788 34.0586C61.8119 32.216 60.1385 30.6892 58.1877 29.5962Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M52.1022 9.36996C52.3193 10.1529 52.4561 10.9579 52.5096 11.7745L52.5198 11.93C52.618 13.4292 52.4149 14.9448 51.9208 16.4004L51.8467 16.6185C51.3707 18.0208 50.6057 19.3354 49.5951 20.4877L49.4815 20.6171C48.4791 21.7601 47.2385 22.707 45.8395 23.3969C44.4013 24.1061 42.8288 24.5274 41.2287 24.6323C39.9599 24.7155 38.6968 24.5982 37.4935 24.2873C37.1307 23.0101 36.9887 21.6952 37.0741 20.3927L37.0843 20.237C37.1868 18.6731 37.5944 17.1518 38.2876 15.7461L38.3566 15.6062C39.0211 14.2587 39.9547 13.0477 41.1104 12.0341L41.2837 11.8821C42.3971 10.9057 43.7168 10.1497 45.1679 9.65704L45.3312 9.60161C46.7707 9.11293 48.3184 8.91318 49.8748 9.01518C50.6271 9.06448 51.3733 9.18373 52.1022 9.36996Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.1404 8.91091L53.8454 7.84716L52.6751 7.54817C51.8106 7.32732 50.9236 7.18535 50.0272 7.12661C48.1718 7.00502 46.3192 7.2428 44.5908 7.82957L44.4275 7.885C42.7052 8.4697 41.139 9.36708 39.8187 10.525L39.6453 10.677C38.2951 11.8612 37.2084 13.2726 36.4368 14.8372L36.3678 14.9771C35.5703 16.5944 35.1042 18.3388 34.987 20.1255L34.9768 20.2812C34.8785 21.7819 35.0423 23.2928 35.4582 24.7572L35.7569 25.8088L36.9146 26.1079C38.3581 26.4809 39.8688 26.6204 41.3811 26.5213C43.288 26.3963 45.1516 25.8949 46.8478 25.0585C48.4976 24.2449 49.9548 23.1313 51.1296 21.7918L51.2432 21.6623C52.4155 20.3256 53.303 18.8007 53.8557 17.1728L53.9297 16.9548C54.496 15.2867 54.7302 13.5457 54.617 11.8185L54.6068 11.663C54.5457 10.73 54.3894 9.80868 54.1404 8.91091ZM49.7225 10.9041C49.9184 10.917 50.1141 10.9357 50.3092 10.9603C50.3575 11.2662 50.3919 11.5751 50.4123 11.8864L50.4225 12.0418C50.5058 13.3131 50.3339 14.6033 49.9118 15.8465L49.8378 16.0645C49.4383 17.2413 48.7958 18.3456 47.947 19.3134L47.8335 19.4429C47.0035 20.3893 45.9795 21.1694 44.8312 21.7357C43.651 22.3177 42.3697 22.659 41.0764 22.7438C40.4706 22.7835 39.8683 22.7665 39.2783 22.6947C39.1595 21.9666 39.1236 21.2325 39.1713 20.5046L39.1815 20.3489C39.2694 19.0077 39.6186 17.7095 40.2074 16.5155L40.2764 16.3756C40.8338 15.2452 41.6143 14.2346 42.5754 13.3916L42.7488 13.2396C43.6552 12.4446 44.7283 11.8301 45.9084 11.4295L46.0717 11.374C47.2222 10.9835 48.4649 10.8217 49.7225 10.9041Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.2705 25.7362C48.7281 25.7034 46.2121 26.2555 43.9169 27.3497L43.1989 27.692C42.0729 28.2289 41.0021 28.8686 39.9998 29.6017C38.9974 28.8687 37.9267 28.2289 36.8007 27.6921L36.0827 27.3498C33.7875 26.2555 31.2716 25.7035 28.7291 25.7363C25.9623 25.772 23.2484 26.4992 20.8344 27.8517C18.6162 29.0945 16.7133 30.8305 15.2728 32.9258L14.8221 33.5812C13.3735 35.6882 12.3422 38.0534 11.7842 40.5487L11.5531 41.582C10.945 44.3012 10.7871 47.1018 11.0857 49.8721L11.2243 51.1588C11.5118 53.8254 12.2101 56.4316 13.2945 58.8847L13.8177 60.0683C14.9443 62.6168 16.4813 64.9632 18.3676 67.0141L19.0844 67.7934C20.8153 69.6754 22.891 71.2081 25.199 72.3084L25.917 72.6508C28.2122 73.745 30.7282 74.2971 33.2706 74.2642C35.6004 74.2342 37.8926 73.7138 39.9999 72.7427C42.1071 73.7138 44.3993 74.2341 46.729 74.2642C49.2715 74.297 51.7874 73.7449 54.0826 72.6507L54.8006 72.3084C57.1086 71.208 59.1843 69.6753 60.9152 67.7934L61.632 67.014C63.5183 64.9632 65.0553 62.6168 66.1819 60.0683L66.7051 58.8847C67.7895 56.4315 68.4879 53.8254 68.7753 51.1587L68.914 49.872C69.2125 47.1017 69.0546 44.3012 68.4465 41.582L68.2154 40.5486C67.6574 38.0533 66.6261 35.6882 65.1775 33.5812L64.7269 32.9257C63.2863 30.8305 61.3835 29.0944 59.1652 27.8516C56.7513 26.4991 54.0373 25.7719 51.2705 25.7362ZM45.6384 30.9603C47.3801 30.1299 49.2895 29.711 51.2189 29.7359C53.3186 29.763 55.3782 30.3148 57.2101 31.3412C58.8935 32.2844 60.3375 33.6019 61.4308 35.1919L61.8814 35.8474C63.0404 37.533 63.8654 39.4253 64.3119 41.4216L64.5429 42.4549C65.0556 44.7472 65.1887 47.108 64.937 49.4434L64.7983 50.73C64.5551 52.9865 63.9642 55.1917 63.0466 57.2674L62.5234 58.451C61.5737 60.5994 60.278 62.5773 58.6879 64.3062L57.9711 65.0855C56.5863 66.5912 54.9257 67.8174 53.0792 68.6977L52.3612 69.0401C50.6194 69.8705 48.7101 70.2894 46.7806 70.2645C44.7427 70.2382 42.7426 69.7176 40.9517 68.7485L39.9999 68.2335L39.0481 68.7485C37.2571 69.7176 35.257 70.2383 33.219 70.2646C31.2896 70.2895 29.3802 69.8705 27.6385 69.0401L26.9204 68.6978C25.0739 67.8175 23.4133 66.5913 22.0285 65.0856L21.3117 64.3063C19.7216 62.5774 18.4259 60.5994 17.4762 58.4511L16.953 57.2675C16.0354 55.1917 15.4445 52.9865 15.2013 50.7301L15.0626 49.4435C14.8109 47.1081 14.944 44.7473 15.4567 42.455L15.6878 41.4216C16.1342 39.4253 16.9593 37.5331 18.1182 35.8474L18.5689 35.192C19.6621 33.6019 21.1061 32.2844 22.7895 31.3413C24.6215 30.3149 26.681 29.7631 28.7807 29.736C30.7102 29.7111 32.6195 30.13 34.3613 30.9604L35.0793 31.3027C36.3859 31.9257 37.5995 32.7218 38.6881 33.6676L39.9998 34.8072L41.3115 33.6676C42.4001 32.7218 43.6137 31.9256 44.9203 31.3027L45.6384 30.9603Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-apple', CoreApple)
export default CoreApple