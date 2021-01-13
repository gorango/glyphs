
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreCertificate = {
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
            d="M43.9038 16.5125C43.2422 14.9877 41.7386 14.001 40.0765 14.001C38.4143 14.001 36.9107 14.9877 36.2491 16.5125L34.712 20.0556L31.6093 17.7558C30.274 16.766 28.4785 16.6633 27.039 17.4944C25.5995 18.3255 24.7907 19.9317 24.9802 21.5831L25.4205 25.42L21.5836 24.9797C19.9322 24.7902 18.3259 25.599 17.4949 27.0385C16.6638 28.478 16.7665 30.2735 17.7562 31.6088L20.0561 34.7115L16.513 36.2486C14.9881 36.9102 14.0015 38.4138 14.0015 40.076C14.0015 41.7382 14.9881 43.2418 16.513 43.9033L20.0561 45.4404L17.7562 48.5431C16.7665 49.8785 16.6638 51.674 17.4949 53.1135C18.3259 54.553 19.9322 55.3618 21.5836 55.1723L25.4205 54.7319L24.9802 58.5689C24.7907 60.2202 25.5995 61.8265 27.039 62.6576C28.4785 63.4887 30.274 63.386 31.6093 62.3962L34.712 60.0964L36.2491 63.6394C36.9107 65.1643 38.4143 66.151 40.0765 66.151C41.7386 66.151 43.2422 65.1643 43.9038 63.6394L45.4409 60.0964L48.5436 62.3962C49.879 63.386 51.6745 63.4887 53.114 62.6576C54.5535 61.8265 55.3623 60.2202 55.1728 58.5689L54.7324 54.7319L58.5693 55.1723C60.2207 55.3618 61.827 54.553 62.6581 53.1135C63.4892 51.674 63.3865 49.8785 62.3967 48.5431L60.0969 45.4404L63.6399 43.9033C65.1648 43.2418 66.1515 41.7382 66.1515 40.076C66.1515 38.4138 65.1648 36.9102 63.6399 36.2486L60.0969 34.7115L62.3967 31.6088C63.3865 30.2735 63.4892 28.478 62.6581 27.0385C61.827 25.599 60.2207 24.7902 58.5693 24.9797L54.7324 25.42L55.1728 21.5831C55.3623 19.9317 54.5535 18.3255 53.114 17.4944C51.6745 16.6633 49.879 16.766 48.5436 17.7558L45.4409 20.0556L43.9038 16.5125Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.9421 16.5121C43.2608 14.9419 41.7124 13.9258 40.0007 13.9258C38.289 13.9258 36.7406 14.9419 36.0593 16.5121L34.6053 19.8638L31.6702 17.6882C30.295 16.6689 28.4461 16.5632 26.9637 17.419C25.4813 18.2749 24.6484 19.929 24.8435 21.6296L25.2601 25.2592L21.6304 24.8427C19.9299 24.6475 18.2758 25.4804 17.4199 26.9628C16.564 28.4452 16.6698 30.2942 17.6891 31.6693L19.8646 34.6044L16.513 36.0585C14.9427 36.7398 13.9266 38.2882 13.9266 39.9999C13.9266 41.7116 14.9427 43.26 16.513 43.9412L19.8646 45.3953L17.6891 48.3304C16.6698 49.7055 16.564 51.5545 17.4199 53.0369C18.2758 54.5193 19.9299 55.3522 21.6304 55.157L25.2601 54.7405L24.8435 58.3701C24.6484 60.0707 25.4813 61.7248 26.9637 62.5807C28.4461 63.4365 30.295 63.3308 31.6702 62.3115L34.6053 60.1359L36.0593 63.4876C36.7406 65.0579 38.289 66.0739 40.0007 66.0739C41.7124 66.0739 43.2608 65.0579 43.9421 63.4876L45.3962 60.1359L48.3312 62.3115C49.7064 63.3308 51.5554 63.4365 53.0377 62.5807C54.5201 61.7248 55.353 60.0707 55.1579 58.3701L54.7413 54.7405L58.371 55.157C60.0715 55.3522 61.7257 54.5193 62.5815 53.0369C63.4374 51.5545 63.3316 49.7055 62.3123 48.3304L60.1368 45.3953L63.4884 43.9412C65.0587 43.26 66.0748 41.7116 66.0748 39.9999C66.0748 38.2882 65.0587 36.7398 63.4884 36.0585L60.1368 34.6044L62.3123 31.6693C63.3316 30.2942 63.4374 28.4452 62.5815 26.9628C61.7257 25.4804 60.0715 24.6475 58.371 24.8427L54.7413 25.2592L55.1579 21.6296C55.353 19.929 54.5201 18.2749 53.0377 17.419C51.5554 16.5632 49.7064 16.6689 48.3312 17.6882L45.3962 19.8638L43.9421 16.5121Z"
            fill="currentColor"
          />
          <path
            d="M43.9421 16.5121L41.6486 17.5072V17.5072L43.9421 16.5121ZM36.0593 16.5121L33.7659 15.5171V15.5171L36.0593 16.5121ZM34.6053 19.8638L33.1166 21.8722L35.6457 23.7469L36.8987 20.8588L34.6053 19.8638ZM31.6702 17.6882L33.1589 15.6798L31.6702 17.6882ZM26.9637 17.419L28.2137 19.5841V19.5841L26.9637 17.419ZM24.8435 21.6296L27.3272 21.3445V21.3445L24.8435 21.6296ZM25.2601 25.2592L24.9751 27.7429L28.1027 28.1019L27.7438 24.9742L25.2601 25.2592ZM21.6304 24.8427L21.9155 22.359H21.9155L21.6304 24.8427ZM17.4199 26.9628L15.2548 25.7128L15.2548 25.7128L17.4199 26.9628ZM17.6891 31.6693L15.6807 33.158H15.6807L17.6891 31.6693ZM19.8646 34.6044L20.8596 36.8979L23.7478 35.6449L21.8731 33.1157L19.8646 34.6044ZM16.513 36.0585L17.508 38.352H17.508L16.513 36.0585ZM16.513 43.9412L15.518 46.2347H15.518L16.513 43.9412ZM19.8646 45.3953L21.8731 46.884L23.7478 44.3548L20.8596 43.1018L19.8646 45.3953ZM17.6891 48.3304L15.6807 46.8417H15.6807L17.6891 48.3304ZM21.6304 55.157L21.3454 52.6733L21.3454 52.6733L21.6304 55.157ZM25.2601 54.7405L27.7438 55.0255L28.1027 51.8978L24.9751 52.2568L25.2601 54.7405ZM24.8435 58.3701L27.3272 58.6552L24.8435 58.3701ZM26.9637 62.5807L25.7137 64.7457L25.7137 64.7457L26.9637 62.5807ZM31.6702 62.3115L30.1815 60.3031L31.6702 62.3115ZM34.6053 60.1359L36.8987 59.1409L35.6457 56.2528L33.1166 58.1275L34.6053 60.1359ZM36.0593 63.4876L33.7659 64.4826L36.0593 63.4876ZM43.9421 63.4876L41.6486 62.4926V62.4926L43.9421 63.4876ZM45.3962 60.1359L46.8848 58.1275L44.3557 56.2528L43.1027 59.1409L45.3962 60.1359ZM48.3312 62.3115L46.8425 64.3199L48.3312 62.3115ZM53.0377 62.5807L54.2877 64.7457L54.2877 64.7457L53.0377 62.5807ZM55.1579 58.3701L52.6742 58.6552L52.6742 58.6552L55.1579 58.3701ZM54.7413 54.7405L55.0264 52.2568L51.8987 51.8978L52.2576 55.0255L54.7413 54.7405ZM58.371 55.157L58.656 52.6733L58.656 52.6733L58.371 55.157ZM62.5815 53.0369L64.7466 54.2869L64.7466 54.2869L62.5815 53.0369ZM62.3123 48.3304L64.3208 46.8417L62.3123 48.3304ZM60.1368 45.3953L59.1418 43.1018L56.2537 44.3548L58.1283 46.884L60.1368 45.3953ZM63.4884 43.9412L64.4834 46.2347L63.4884 43.9412ZM63.4884 36.0585L64.4834 33.765L63.4884 36.0585ZM60.1368 34.6044L58.1283 33.1157L56.2537 35.6449L59.1418 36.8979L60.1368 34.6044ZM62.3123 31.6693L64.3208 33.158L62.3123 31.6693ZM62.5815 26.9628L64.7466 25.7128L64.7466 25.7128L62.5815 26.9628ZM58.371 24.8427L58.0859 22.359L58.371 24.8427ZM54.7413 25.2592L52.2576 24.9742L51.8987 28.1019L55.0264 27.7429L54.7413 25.2592ZM55.1579 21.6296L52.6742 21.3445L52.6742 21.3446L55.1579 21.6296ZM53.0377 17.419L54.2877 15.254V15.254L53.0377 17.419ZM48.3312 17.6882L46.8425 15.6798V15.6798L48.3312 17.6882ZM45.3962 19.8638L43.1027 20.8588L44.3557 23.7469L46.8848 21.8722L45.3962 19.8638ZM40.0007 16.4258C40.7164 16.4258 41.3638 16.8506 41.6486 17.5072L46.2355 15.5171C45.1578 13.0331 42.7085 11.4258 40.0007 11.4258V16.4258ZM38.3528 17.5072C38.6376 16.8506 39.285 16.4258 40.0007 16.4258V11.4258C37.293 11.4258 34.8436 13.0331 33.7659 15.5171L38.3528 17.5072ZM36.8987 20.8588L38.3528 17.5072L33.7659 15.5171L32.3118 18.8688L36.8987 20.8588ZM30.1815 19.6967L33.1166 21.8722L36.094 17.8554L33.1589 15.6798L30.1815 19.6967ZM28.2137 19.5841C28.8335 19.2263 29.6065 19.2705 30.1815 19.6967L33.1589 15.6798C30.9836 14.0674 28.0586 13.9001 25.7137 15.254L28.2137 19.5841ZM27.3272 21.3445C27.2456 20.6335 27.5939 19.9419 28.2137 19.5841L25.7137 15.254C23.3687 16.6079 22.0511 19.2245 22.3598 21.9146L27.3272 21.3445ZM27.7438 24.9742L27.3272 21.3445L22.3598 21.9146L22.7764 25.5443L27.7438 24.9742ZM21.3454 27.3264L24.9751 27.7429L25.5451 22.7755L21.9155 22.359L21.3454 27.3264ZM19.585 28.2128C19.9428 27.593 20.6344 27.2448 21.3454 27.3264L21.9155 22.359C19.2254 22.0503 16.6087 23.3678 15.2548 25.7128L19.585 28.2128ZM19.6975 30.1806C19.2713 29.6057 19.2271 28.8326 19.585 28.2128L15.2548 25.7128C13.901 28.0578 14.0683 30.9827 15.6807 33.158L19.6975 30.1806ZM21.8731 33.1157L19.6975 30.1806L15.6807 33.158L17.8562 36.0931L21.8731 33.1157ZM17.508 38.352L20.8596 36.8979L18.8696 32.3109L15.518 33.765L17.508 38.352ZM16.4266 39.9999C16.4266 39.2842 16.8515 38.6368 17.508 38.352L15.518 33.765C13.034 34.8427 11.4266 37.2921 11.4266 39.9999H16.4266ZM17.508 41.6478C16.8515 41.3629 16.4266 40.7155 16.4266 39.9999H11.4266C11.4266 42.7076 13.034 45.157 15.518 46.2347L17.508 41.6478ZM20.8596 43.1018L17.508 41.6478L15.518 46.2347L18.8696 47.6888L20.8596 43.1018ZM19.6975 49.8191L21.8731 46.884L17.8562 43.9066L15.6807 46.8417L19.6975 49.8191ZM19.585 51.7869C19.2271 51.1671 19.2713 50.394 19.6975 49.8191L15.6807 46.8417C14.0683 49.017 13.901 51.9419 15.2548 54.2869L19.585 51.7869ZM21.3454 52.6733C20.6344 52.7549 19.9428 52.4067 19.585 51.7869L15.2548 54.2869C16.6087 56.6319 19.2254 57.9494 21.9155 57.6407L21.3454 52.6733ZM24.9751 52.2568L21.3454 52.6733L21.9155 57.6407L25.5451 57.2242L24.9751 52.2568ZM27.3272 58.6552L27.7438 55.0255L22.7764 54.4554L22.3598 58.0851L27.3272 58.6552ZM28.2137 60.4156C27.5939 60.0578 27.2456 59.3662 27.3272 58.6552L22.3598 58.0851C22.0511 60.7752 23.3687 63.3919 25.7137 64.7457L28.2137 60.4156ZM30.1815 60.3031C29.6065 60.7292 28.8335 60.7734 28.2137 60.4156L25.7137 64.7457C28.0586 66.0996 30.9836 65.9323 33.1589 64.3199L30.1815 60.3031ZM33.1166 58.1275L30.1815 60.3031L33.1589 64.3199L36.094 62.1443L33.1166 58.1275ZM38.3528 62.4926L36.8987 59.1409L32.3118 61.1309L33.7659 64.4826L38.3528 62.4926ZM40.0007 63.5739C39.285 63.5739 38.6376 63.1491 38.3528 62.4926L33.7659 64.4826C34.8436 66.9666 37.293 68.5739 40.0007 68.5739V63.5739ZM41.6486 62.4926C41.3638 63.1491 40.7164 63.5739 40.0007 63.5739V68.5739C42.7084 68.5739 45.1578 66.9666 46.2355 64.4826L41.6486 62.4926ZM43.1027 59.1409L41.6486 62.4926L46.2355 64.4826L47.6896 61.1309L43.1027 59.1409ZM49.8199 60.3031L46.8848 58.1275L43.9075 62.1443L46.8425 64.3199L49.8199 60.3031ZM51.7877 60.4156C51.168 60.7734 50.3949 60.7292 49.8199 60.3031L46.8425 64.3199C49.0179 65.9323 51.9428 66.0996 54.2877 64.7457L51.7877 60.4156ZM52.6742 58.6552C52.7558 59.3662 52.4075 60.0578 51.7877 60.4156L54.2877 64.7457C56.6327 63.3919 57.9503 60.7752 57.6416 58.0851L52.6742 58.6552ZM52.2576 55.0255L52.6742 58.6552L57.6416 58.0851L57.225 54.4554L52.2576 55.0255ZM58.656 52.6733L55.0264 52.2568L54.4563 57.2242L58.0859 57.6407L58.656 52.6733ZM60.4165 51.7869C60.0586 52.4067 59.367 52.7549 58.656 52.6733L58.0859 57.6407C60.776 57.9494 63.3927 56.6319 64.7466 54.2869L60.4165 51.7869ZM60.3039 49.8191C60.7301 50.394 60.7743 51.1671 60.4165 51.7869L64.7466 54.2869C66.1005 51.9419 65.9332 49.017 64.3208 46.8417L60.3039 49.8191ZM58.1283 46.884L60.3039 49.8191L64.3208 46.8417L62.1452 43.9066L58.1283 46.884ZM62.4934 41.6478L59.1418 43.1018L61.1318 47.6888L64.4834 46.2347L62.4934 41.6478ZM63.5748 39.9999C63.5748 40.7155 63.15 41.3629 62.4934 41.6478L64.4834 46.2347C66.9675 45.157 68.5748 42.7076 68.5748 39.9999H63.5748ZM62.4934 38.352C63.15 38.6368 63.5748 39.2842 63.5748 39.9999H68.5748C68.5748 37.2921 66.9675 34.8427 64.4834 33.765L62.4934 38.352ZM59.1418 36.8979L62.4934 38.352L64.4834 33.765L61.1318 32.311L59.1418 36.8979ZM60.3039 30.1806L58.1283 33.1157L62.1452 36.0931L64.3208 33.158L60.3039 30.1806ZM60.4165 28.2128C60.7743 28.8326 60.7301 29.6057 60.3039 30.1806L64.3208 33.158C65.9332 30.9827 66.1005 28.0578 64.7466 25.7128L60.4165 28.2128ZM58.656 27.3264C59.367 27.2448 60.0586 27.593 60.4165 28.2128L64.7466 25.7128C63.3927 23.3679 60.776 22.0503 58.0859 22.359L58.656 27.3264ZM55.0264 27.7429L58.656 27.3264L58.0859 22.359L54.4563 22.7755L55.0264 27.7429ZM52.6742 21.3446L52.2576 24.9742L57.225 25.5443L57.6416 21.9146L52.6742 21.3446ZM51.7877 19.5841C52.4075 19.9419 52.7558 20.6335 52.6742 21.3445L57.6416 21.9146C57.9503 19.2245 56.6327 16.6078 54.2877 15.254L51.7877 19.5841ZM49.8199 19.6967C50.3949 19.2705 51.168 19.2263 51.7877 19.5841L54.2877 15.254C51.9428 13.9001 49.0179 14.0674 46.8425 15.6798L49.8199 19.6967ZM46.8848 21.8722L49.8199 19.6967L46.8425 15.6798L43.9075 17.8554L46.8848 21.8722ZM41.6486 17.5072L43.1027 20.8588L47.6896 18.8688L46.2355 15.5171L41.6486 17.5072Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.9421 16.5121C43.2608 14.9419 41.7124 13.9258 40.0007 13.9258C38.289 13.9258 36.7406 14.9419 36.0593 16.5121L34.6053 19.8638L31.6702 17.6882C30.295 16.6689 28.4461 16.5632 26.9637 17.419C25.4813 18.2749 24.6484 19.929 24.8435 21.6296L25.2601 25.2592L21.6304 24.8427C19.9299 24.6475 18.2758 25.4804 17.4199 26.9628C16.564 28.4452 16.6698 30.2942 17.6891 31.6693L19.8646 34.6044L16.513 36.0585C14.9427 36.7398 13.9266 38.2882 13.9266 39.9999C13.9266 41.7116 14.9427 43.26 16.513 43.9412L19.8646 45.3953L17.6891 48.3304C16.6698 49.7055 16.564 51.5545 17.4199 53.0369C18.2758 54.5193 19.9299 55.3522 21.6304 55.157L25.2601 54.7405L24.8435 58.3701C24.6484 60.0707 25.4813 61.7248 26.9637 62.5807C28.4461 63.4365 30.295 63.3308 31.6702 62.3115L34.6053 60.1359L36.0593 63.4876C36.7406 65.0579 38.289 66.0739 40.0007 66.0739C41.7124 66.0739 43.2608 65.0579 43.9421 63.4876L45.3962 60.1359L48.3312 62.3115C49.7064 63.3308 51.5554 63.4365 53.0377 62.5807C54.5201 61.7248 55.353 60.0707 55.1579 58.3701L54.7413 54.7405L58.371 55.157C60.0715 55.3522 61.7257 54.5193 62.5815 53.0369C63.4374 51.5545 63.3316 49.7055 62.3123 48.3304L60.1368 45.3953L63.4884 43.9412C65.0587 43.26 66.0748 41.7116 66.0748 39.9999C66.0748 38.2882 65.0587 36.7398 63.4884 36.0585L60.1368 34.6044L62.3123 31.6693C63.3316 30.2942 63.4374 28.4452 62.5815 26.9628C61.7257 25.4804 60.0715 24.6475 58.371 24.8427L54.7413 25.2592L55.1579 21.6296C55.353 19.929 54.5201 18.2749 53.0377 17.419C51.5554 16.5632 49.7064 16.6689 48.3312 17.6882L45.3962 19.8638L43.9421 16.5121Z"
            fill="#F2994A"
          />
          <path
            d="M43.9421 16.5121L41.9714 17.3671V17.3671L43.9421 16.5121ZM36.0593 16.5121L34.0887 15.6572L34.0887 15.6572L36.0593 16.5121ZM34.6053 19.8638L33.3261 21.5896L35.4993 23.2004L36.5759 20.7188L34.6053 19.8638ZM31.6702 17.6882L32.9494 15.9625L31.6702 17.6882ZM26.9637 17.419L28.0377 19.2794V19.2794L26.9637 17.419ZM24.8435 21.6296L26.9777 21.3847V21.3847L24.8435 21.6296ZM25.2601 25.2592L25.0152 27.3934L27.7027 27.7018L27.3942 25.0143L25.2601 25.2592ZM21.6304 24.8427L21.8754 22.7085H21.8754L21.6304 24.8427ZM17.4199 26.9628L15.5595 25.8887L15.5595 25.8887L17.4199 26.9628ZM17.6891 31.6693L15.9633 32.9485L17.6891 31.6693ZM19.8646 34.6044L20.7196 36.5751L23.2012 35.4985L21.5904 33.3252L19.8646 34.6044ZM16.513 36.0585L17.368 38.0292H17.368L16.513 36.0585ZM16.513 43.9412L15.658 45.9119L15.658 45.9119L16.513 43.9412ZM19.8646 45.3953L21.5904 46.6745L23.2012 44.5013L20.7196 43.4246L19.8646 45.3953ZM17.6891 48.3304L15.9633 47.0512L17.6891 48.3304ZM21.6304 55.157L21.3855 53.0229H21.3855L21.6304 55.157ZM25.2601 54.7405L27.3942 54.9854L27.7026 52.2979L25.0152 52.6063L25.2601 54.7405ZM24.8435 58.3701L26.9777 58.615L24.8435 58.3701ZM26.9637 62.5807L25.8896 64.441L25.8896 64.441L26.9637 62.5807ZM31.6702 62.3115L30.391 60.5857L31.6702 62.3115ZM34.6053 60.1359L36.5759 59.281L35.4993 56.7993L33.3261 58.4102L34.6053 60.1359ZM36.0593 63.4876L34.0887 64.3425V64.3425L36.0593 63.4876ZM43.9421 63.4876L41.9714 62.6326H41.9714L43.9421 63.4876ZM45.3962 60.1359L46.6753 58.4102L44.5021 56.7993L43.4255 59.281L45.3962 60.1359ZM48.3312 62.3115L47.0521 64.0372L47.0521 64.0372L48.3312 62.3115ZM53.0377 62.5807L54.1118 64.441L53.0377 62.5807ZM55.1579 58.3701L53.0237 58.615V58.615L55.1579 58.3701ZM54.7413 54.7405L54.9862 52.6063L52.2988 52.2979L52.6072 54.9854L54.7413 54.7405ZM58.371 55.157L58.6159 53.0229H58.6159L58.371 55.157ZM62.5815 53.0369L64.4419 54.111L62.5815 53.0369ZM62.3123 48.3304L64.0381 47.0512L64.0381 47.0512L62.3123 48.3304ZM60.1368 45.3953L59.2818 43.4246L56.8002 44.5013L58.411 46.6745L60.1368 45.3953ZM63.4884 43.9412L64.3434 45.9119H64.3434L63.4884 43.9412ZM63.4884 36.0585L64.3434 34.0878H64.3434L63.4884 36.0585ZM60.1368 34.6044L58.411 33.3252L56.8002 35.4985L59.2818 36.5751L60.1368 34.6044ZM62.3123 31.6693L64.0381 32.9485L62.3123 31.6693ZM62.5815 26.9628L64.4419 25.8887L64.4419 25.8887L62.5815 26.9628ZM58.371 24.8427L58.1261 22.7085L58.371 24.8427ZM54.7413 25.2592L52.6072 25.0143L52.2988 27.7018L54.9862 27.3934L54.7413 25.2592ZM55.1579 21.6296L53.0237 21.3847V21.3847L55.1579 21.6296ZM53.0377 17.419L54.1118 15.5587V15.5587L53.0377 17.419ZM48.3312 17.6882L47.0521 15.9625L47.0521 15.9625L48.3312 17.6882ZM45.3962 19.8638L43.4255 20.7188L44.5021 23.2004L46.6753 21.5896L45.3962 19.8638ZM40.0007 16.0739C40.8566 16.0739 41.6308 16.582 41.9714 17.3671L45.9127 15.6572C44.8909 13.3017 42.5683 11.7776 40.0007 11.7776V16.0739ZM38.03 17.3671C38.3707 16.582 39.1449 16.0739 40.0007 16.0739V11.7776C37.4332 11.7776 35.1106 13.3017 34.0887 15.6572L38.03 17.3671ZM36.5759 20.7188L38.03 17.3671L34.0887 15.6572L32.6346 19.0088L36.5759 20.7188ZM30.391 19.414L33.3261 21.5896L35.8844 18.138L32.9494 15.9625L30.391 19.414ZM28.0377 19.2794C28.7789 18.8515 29.7034 18.9043 30.391 19.414L32.9494 15.9625C30.8867 14.4335 28.1132 14.2749 25.8896 15.5587L28.0377 19.2794ZM26.9777 21.3847C26.8801 20.5344 27.2966 19.7073 28.0377 19.2794L25.8896 15.5587C23.666 16.8425 22.4167 19.3237 22.7094 21.8745L26.9777 21.3847ZM27.3942 25.0143L26.9777 21.3847L22.7094 21.8745L23.1259 25.5042L27.3942 25.0143ZM21.3855 26.9768L25.0152 27.3934L25.505 23.1251L21.8754 22.7085L21.3855 26.9768ZM19.2803 28.0369C19.7082 27.2957 20.5353 26.8792 21.3855 26.9768L21.8754 22.7085C19.3245 22.4158 16.8433 23.6652 15.5595 25.8887L19.2803 28.0369ZM19.4148 30.3901C18.9052 29.7026 18.8523 28.7781 19.2803 28.0369L15.5595 25.8887C14.2758 28.1123 14.4344 30.8858 15.9633 32.9485L19.4148 30.3901ZM21.5904 33.3252L19.4148 30.3901L15.9633 32.9485L18.1389 35.8836L21.5904 33.3252ZM17.368 38.0292L20.7196 36.5751L19.0097 32.6337L15.658 34.0878L17.368 38.0292ZM16.0748 39.9999C16.0748 39.144 16.5828 38.3698 17.368 38.0292L15.658 34.0878C13.3026 35.1097 11.7785 37.4323 11.7785 39.9999H16.0748ZM17.368 41.9705C16.5828 41.6299 16.0748 40.8557 16.0748 39.9999H11.7785C11.7785 42.5674 13.3026 44.89 15.658 45.9119L17.368 41.9705ZM20.7196 43.4246L17.368 41.9705L15.658 45.9119L19.0097 47.366L20.7196 43.4246ZM19.4148 49.6096L21.5904 46.6745L18.1389 44.1161L15.9633 47.0512L19.4148 49.6096ZM19.2803 51.9628C18.8523 51.2216 18.9052 50.2971 19.4148 49.6096L15.9633 47.0512C14.4344 49.1139 14.2758 51.8874 15.5595 54.111L19.2803 51.9628ZM21.3855 53.0229C20.5352 53.1205 19.7082 52.704 19.2803 51.9628L15.5595 54.111C16.8433 56.3345 19.3245 57.5839 21.8754 57.2912L21.3855 53.0229ZM25.0152 52.6063L21.3855 53.0229L21.8754 57.2912L25.505 56.8746L25.0152 52.6063ZM26.9777 58.615L27.3942 54.9854L23.1259 54.4956L22.7094 58.1252L26.9777 58.615ZM28.0377 60.7203C27.2966 60.2924 26.8801 59.4653 26.9777 58.615L22.7094 58.1252C22.4167 60.676 23.666 63.1572 25.8896 64.441L28.0377 60.7203ZM30.391 60.5857C29.7034 61.0954 28.7789 61.1482 28.0377 60.7203L25.8896 64.441C28.1132 65.7248 30.8867 65.5662 32.9494 64.0372L30.391 60.5857ZM33.3261 58.4102L30.391 60.5857L32.9494 64.0372L35.8844 61.8617L33.3261 58.4102ZM38.03 62.6326L36.5759 59.281L32.6346 60.9909L34.0887 64.3425L38.03 62.6326ZM40.0007 63.9258C39.1449 63.9258 38.3707 63.4177 38.03 62.6326L34.0887 64.3425C35.1106 66.698 37.4332 68.2221 40.0007 68.2221V63.9258ZM41.9714 62.6326C41.6308 63.4177 40.8566 63.9258 40.0007 63.9258V68.2221C42.5683 68.2221 44.8909 66.698 45.9127 64.3425L41.9714 62.6326ZM43.4255 59.281L41.9714 62.6326L45.9127 64.3425L47.3668 60.9909L43.4255 59.281ZM49.6104 60.5857L46.6753 58.4102L44.117 61.8617L47.0521 64.0372L49.6104 60.5857ZM51.9637 60.7203C51.2225 61.1482 50.298 61.0954 49.6104 60.5857L47.0521 64.0372C49.1148 65.5662 51.8882 65.7248 54.1118 64.441L51.9637 60.7203ZM53.0237 58.615C53.1213 59.4653 52.7049 60.2924 51.9637 60.7203L54.1118 64.441C56.3354 63.1572 57.5848 60.676 57.292 58.1252L53.0237 58.615ZM52.6072 54.9854L53.0237 58.615L57.292 58.1252L56.8755 54.4956L52.6072 54.9854ZM58.6159 53.0229L54.9862 52.6063L54.4964 56.8746L58.1261 57.2912L58.6159 53.0229ZM60.7212 51.9628C60.2932 52.704 59.4662 53.1205 58.6159 53.0229L58.1261 57.2912C60.6769 57.5839 63.1581 56.3345 64.4419 54.111L60.7212 51.9628ZM60.5866 49.6096C61.0962 50.2971 61.1491 51.2216 60.7212 51.9628L64.4419 54.111C65.7256 51.8874 65.567 49.1139 64.0381 47.0512L60.5866 49.6096ZM58.411 46.6745L60.5866 49.6096L64.0381 47.0512L61.8625 44.1161L58.411 46.6745ZM62.6334 41.9705L59.2818 43.4246L60.9917 47.366L64.3434 45.9119L62.6334 41.9705ZM63.9266 39.9999C63.9266 40.8557 63.4186 41.6299 62.6334 41.9705L64.3434 45.9119C66.6988 44.89 68.2229 42.5674 68.2229 39.9999H63.9266ZM62.6334 38.0292C63.4186 38.3698 63.9266 39.144 63.9266 39.9999H68.2229C68.2229 37.4323 66.6988 35.1097 64.3434 34.0878L62.6334 38.0292ZM59.2818 36.5751L62.6334 38.0292L64.3434 34.0878L60.9917 32.6337L59.2818 36.5751ZM60.5866 30.3901L58.411 33.3252L61.8625 35.8836L64.0381 32.9485L60.5866 30.3901ZM60.7212 28.0369C61.1491 28.7781 61.0962 29.7026 60.5866 30.3901L64.0381 32.9485C65.567 30.8858 65.7256 28.1123 64.4419 25.8887L60.7212 28.0369ZM58.6159 26.9768C59.4662 26.8792 60.2932 27.2957 60.7212 28.0369L64.4419 25.8887C63.1581 23.6652 60.6769 22.4158 58.1261 22.7085L58.6159 26.9768ZM54.9862 27.3934L58.6159 26.9768L58.1261 22.7085L54.4964 23.1251L54.9862 27.3934ZM53.0237 21.3847L52.6072 25.0143L56.8755 25.5042L57.292 21.8745L53.0237 21.3847ZM51.9637 19.2794C52.7049 19.7073 53.1213 20.5344 53.0237 21.3847L57.292 21.8745C57.5848 19.3237 56.3354 16.8425 54.1118 15.5587L51.9637 19.2794ZM49.6104 19.414C50.298 18.9043 51.2225 18.8515 51.9637 19.2794L54.1118 15.5587C51.8882 14.2749 49.1148 14.4335 47.0521 15.9625L49.6104 19.414ZM46.6753 21.5896L49.6104 19.414L47.0521 15.9625L44.117 18.138L46.6753 21.5896ZM41.9714 17.3671L43.4255 20.7188L47.3668 19.0088L45.9127 15.6572L41.9714 17.3671Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.482 25.7007C42.0531 24.712 41.0782 24.0723 40.0004 24.0723C38.9227 24.0723 37.9478 24.712 37.5188 25.7007L36.6844 27.624L35.0001 26.3756C34.1343 25.7338 32.9701 25.6672 32.0368 26.2061C31.1034 26.745 30.579 27.7865 30.7019 28.8572L30.9409 30.9401L28.8581 30.701C27.7873 30.5781 26.7458 31.1026 26.207 32.0359C25.6681 32.9693 25.7347 34.1334 26.3765 34.9993L27.6249 36.6836L25.7016 37.518C24.7129 37.9469 24.0731 38.9218 24.0731 39.9996C24.0731 41.0773 24.7129 42.0522 25.7016 42.4812L27.6249 43.3156L26.3765 44.9999C25.7347 45.8657 25.6681 47.0299 26.207 47.9632C26.7458 48.8966 27.7873 49.421 28.8581 49.2981L30.9409 49.0591L30.7019 51.1419C30.579 52.2126 31.1034 53.2541 32.0368 53.793C32.9701 54.3319 34.1343 54.2653 35.0001 53.6235L36.6844 52.3751L37.5188 54.2984C37.9478 55.2871 38.9227 55.9269 40.0004 55.9269C41.0782 55.9269 42.0531 55.2871 42.482 54.2984L43.3164 52.3751L45.0007 53.6235C45.8665 54.2653 47.0307 54.3319 47.9641 53.793C48.8974 53.2541 49.4218 52.2126 49.299 51.1419L49.0599 49.0591L51.1428 49.2981C52.2135 49.421 53.255 48.8966 53.7939 47.9632C54.3327 47.0299 54.2662 45.8657 53.6244 44.9999L52.3759 43.3156L54.2993 42.4812C55.288 42.0522 55.9277 41.0773 55.9277 39.9996C55.9277 38.9218 55.288 37.9469 54.2993 37.518L52.3759 36.6836L53.6244 34.9993C54.2662 34.1334 54.3327 32.9693 53.7939 32.0359C53.255 31.1026 52.2135 30.5781 51.1428 30.701L49.0599 30.9401L49.299 28.8572C49.4218 27.7865 48.8974 26.745 47.9641 26.2061C47.0307 25.6672 45.8665 25.7338 45.0007 26.3756L43.3164 27.624L42.482 25.7007Z"
            fill="#F2F2F2"
          />
          <path
            d="M42.482 25.7007L41.2412 26.239V26.239L42.482 25.7007ZM37.5188 25.7007L38.7596 26.239V26.239L37.5188 25.7007ZM36.6844 27.624L35.879 28.7106L37.2473 29.7249L37.9252 28.1623L36.6844 27.624ZM35.0001 26.3756L34.1947 27.4622L35.0001 26.3756ZM32.0368 26.2061L32.713 27.3775L32.0368 26.2061ZM30.7019 28.8572L29.3582 29.0114L29.3582 29.0114L30.7019 28.8572ZM30.9409 30.9401L30.7867 32.2838L32.4788 32.478L32.2846 30.7858L30.9409 30.9401ZM28.8581 30.701L29.0123 29.3573L29.0123 29.3573L28.8581 30.701ZM26.207 32.0359L27.3783 32.7122L27.3783 32.7122L26.207 32.0359ZM26.3765 34.9993L25.2899 35.8047L25.2899 35.8047L26.3765 34.9993ZM27.6249 36.6836L28.1632 37.9244L29.7257 37.2465L28.7115 35.8781L27.6249 36.6836ZM25.7016 37.518L26.2399 38.7588H26.2399L25.7016 37.518ZM25.7016 42.4812L26.2399 41.2404H26.2399L25.7016 42.4812ZM27.6249 43.3156L28.7115 44.121L29.7257 42.7527L28.1632 42.0748L27.6249 43.3156ZM26.3765 44.9999L25.2899 44.1945H25.2899L26.3765 44.9999ZM26.207 47.9632L25.0356 48.6395L25.0356 48.6395L26.207 47.9632ZM28.8581 49.2981L29.0123 50.6418H29.0123L28.8581 49.2981ZM30.9409 49.0591L32.2846 49.2133L32.4788 47.5212L30.7867 47.7154L30.9409 49.0591ZM30.7019 51.1419L29.3582 50.9877L29.3582 50.9877L30.7019 51.1419ZM32.0368 53.793L32.713 52.6217L32.713 52.6217L32.0368 53.793ZM35.0001 53.6235L34.1947 52.5369L35.0001 53.6235ZM36.6844 52.3751L37.9252 51.8368L37.2473 50.2743L35.879 51.2885L36.6844 52.3751ZM37.5188 54.2984L38.7596 53.7601L37.5188 54.2984ZM42.482 54.2984L41.2412 53.7601V53.7601L42.482 54.2984ZM43.3164 52.3751L44.1218 51.2885L42.7535 50.2743L42.0756 51.8368L43.3164 52.3751ZM45.0007 53.6235L45.8061 52.5369L45.0007 53.6235ZM49.299 51.1419L50.6427 50.9877V50.9877L49.299 51.1419ZM49.0599 49.0591L49.2141 47.7154L47.522 47.5212L47.7162 49.2133L49.0599 49.0591ZM51.1428 49.2981L50.9886 50.6418H50.9886L51.1428 49.2981ZM53.7939 47.9632L54.9652 48.6395L54.9652 48.6395L53.7939 47.9632ZM53.6244 44.9999L52.5378 45.8053L53.6244 44.9999ZM52.3759 43.3156L51.8376 42.0748L50.2751 42.7527L51.2894 44.121L52.3759 43.3156ZM54.2993 42.4812L53.761 41.2404H53.761L54.2993 42.4812ZM54.2993 37.518L53.761 38.7588L54.2993 37.518ZM52.3759 36.6836L51.2894 35.8781L50.2751 37.2465L51.8376 37.9244L52.3759 36.6836ZM53.6244 34.9993L52.5378 34.1939V34.1939L53.6244 34.9993ZM53.7939 32.0359L52.6225 32.7122L52.6225 32.7122L53.7939 32.0359ZM51.1428 30.701L50.9886 29.3573L50.9886 29.3573L51.1428 30.701ZM49.0599 30.9401L47.7162 30.7858L47.522 32.478L49.2141 32.2838L49.0599 30.9401ZM49.299 28.8572L50.6427 29.0114L49.299 28.8572ZM47.9641 26.2061L48.6403 25.0348L48.6403 25.0348L47.9641 26.2061ZM45.0007 26.3756L44.1953 25.289L44.1953 25.289L45.0007 26.3756ZM43.3164 27.624L42.0756 28.1623L42.7535 29.7249L44.1218 28.7106L43.3164 27.624ZM40.0004 25.4248C40.5393 25.4248 41.0267 25.7447 41.2412 26.239L43.7228 25.1624C43.0794 23.6794 41.617 22.7197 40.0004 22.7197V25.4248ZM38.7596 26.239C38.9741 25.7447 39.4615 25.4248 40.0004 25.4248V22.7197C38.3838 22.7197 36.9214 23.6794 36.278 25.1624L38.7596 26.239ZM37.9252 28.1623L38.7596 26.239L36.278 25.1624L35.4436 27.0857L37.9252 28.1623ZM34.1947 27.4622L35.879 28.7106L37.4898 26.5374L35.8055 25.289L34.1947 27.4622ZM32.713 27.3775C33.1797 27.108 33.7618 27.1413 34.1947 27.4622L35.8055 25.289C34.5068 24.3264 32.7605 24.2265 31.3605 25.0348L32.713 27.3775ZM32.0456 28.703C31.9842 28.1676 32.2464 27.6469 32.713 27.3775L31.3605 25.0348C29.9605 25.8431 29.1738 27.4053 29.3582 29.0114L32.0456 28.703ZM32.2846 30.7858L32.0456 28.703L29.3582 29.0114L29.5972 31.0943L32.2846 30.7858ZM28.7038 32.0447L30.7867 32.2838L31.0951 29.5963L29.0123 29.3573L28.7038 32.0447ZM27.3783 32.7122C27.6477 32.2455 28.1685 31.9833 28.7038 32.0447L29.0123 29.3573C27.4062 29.173 25.8439 29.9596 25.0356 31.3596L27.3783 32.7122ZM27.463 34.1939C27.1422 33.7609 27.1089 33.1789 27.3783 32.7122L25.0356 31.3596C24.2273 32.7597 24.3272 34.5059 25.2899 35.8047L27.463 34.1939ZM28.7115 35.8781L27.463 34.1939L25.2899 35.8047L26.5383 37.489L28.7115 35.8781ZM26.2399 38.7588L28.1632 37.9244L27.0866 35.4428L25.1633 36.2772L26.2399 38.7588ZM25.4257 39.9996C25.4257 39.4607 25.7455 38.9732 26.2399 38.7588L25.1633 36.2772C23.6802 36.9206 22.7206 38.383 22.7206 39.9996H25.4257ZM26.2399 41.2404C25.7455 41.0259 25.4257 40.5384 25.4257 39.9996H22.7206C22.7206 41.6162 23.6802 43.0786 25.1633 43.722L26.2399 41.2404ZM28.1632 42.0748L26.2399 41.2404L25.1633 43.722L27.0866 44.5564L28.1632 42.0748ZM27.463 45.8053L28.7115 44.121L26.5383 42.5102L25.2899 44.1945L27.463 45.8053ZM27.3783 47.287C27.1089 46.8203 27.1422 46.2382 27.463 45.8053L25.2899 44.1945C24.3272 45.4932 24.2273 47.2395 25.0356 48.6395L27.3783 47.287ZM28.7038 47.9544C28.1685 48.0158 27.6477 47.7536 27.3783 47.2869L25.0356 48.6395C25.8439 50.0395 27.4062 50.8262 29.0123 50.6418L28.7038 47.9544ZM30.7867 47.7154L28.7038 47.9544L29.0123 50.6418L31.0951 50.4028L30.7867 47.7154ZM32.0456 51.2961L32.2846 49.2133L29.5972 48.9049L29.3582 50.9877L32.0456 51.2961ZM32.713 52.6217C32.2464 52.3522 31.9842 51.8315 32.0456 51.2961L29.3582 50.9877C29.1738 52.5938 29.9605 54.156 31.3605 54.9643L32.713 52.6217ZM34.1947 52.5369C33.7618 52.8578 33.1797 52.8911 32.713 52.6217L31.3605 54.9643C32.7605 55.7727 34.5068 55.6728 35.8055 54.7101L34.1947 52.5369ZM35.879 51.2885L34.1947 52.5369L35.8055 54.7101L37.4898 53.4617L35.879 51.2885ZM38.7596 53.7601L37.9252 51.8368L35.4436 52.9134L36.278 54.8367L38.7596 53.7601ZM40.0004 54.5743C39.4615 54.5743 38.9741 54.2545 38.7596 53.7601L36.278 54.8367C36.9214 56.3198 38.3838 57.2794 40.0004 57.2794V54.5743ZM41.2412 53.7601C41.0267 54.2545 40.5393 54.5743 40.0004 54.5743V57.2794C41.617 57.2794 43.0794 56.3198 43.7228 54.8367L41.2412 53.7601ZM42.0756 51.8368L41.2412 53.7601L43.7228 54.8367L44.5572 52.9134L42.0756 51.8368ZM45.8061 52.5369L44.1218 51.2885L42.511 53.4617L44.1953 54.7101L45.8061 52.5369ZM47.2878 52.6217C46.8211 52.8911 46.239 52.8578 45.8061 52.5369L44.1953 54.7101C45.494 55.6728 47.2403 55.7727 48.6403 54.9643L47.2878 52.6217ZM47.9553 51.2961C48.0167 51.8315 47.7545 52.3522 47.2878 52.6217L48.6403 54.9643C50.0404 54.156 50.827 52.5938 50.6427 50.9877L47.9553 51.2961ZM47.7162 49.2133L47.9553 51.2961L50.6427 50.9877L50.4037 48.9049L47.7162 49.2133ZM51.297 47.9544L49.2141 47.7154L48.9057 50.4028L50.9886 50.6418L51.297 47.9544ZM52.6225 47.2869C52.3531 47.7536 51.8323 48.0158 51.297 47.9544L50.9886 50.6418C52.5946 50.8262 54.1569 50.0395 54.9652 48.6395L52.6225 47.2869ZM52.5378 45.8053C52.8587 46.2382 52.892 46.8203 52.6225 47.287L54.9652 48.6395C55.7735 47.2395 55.6736 45.4932 54.711 44.1945L52.5378 45.8053ZM51.2894 44.121L52.5378 45.8053L54.711 44.1945L53.4625 42.5102L51.2894 44.121ZM53.761 41.2404L51.8376 42.0748L52.9143 44.5564L54.8376 43.722L53.761 41.2404ZM54.5752 39.9996C54.5752 40.5384 54.2553 41.0259 53.761 41.2404L54.8376 43.722C56.3206 43.0786 57.2803 41.6162 57.2803 39.9996H54.5752ZM53.761 38.7588C54.2553 38.9732 54.5752 39.4607 54.5752 39.9996H57.2803C57.2803 38.383 56.3206 36.9206 54.8376 36.2772L53.761 38.7588ZM51.8376 37.9244L53.761 38.7588L54.8376 36.2772L52.9143 35.4428L51.8376 37.9244ZM52.5378 34.1939L51.2894 35.8781L53.4625 37.489L54.711 35.8047L52.5378 34.1939ZM52.6225 32.7122C52.892 33.1789 52.8587 33.7609 52.5378 34.1939L54.711 35.8047C55.6736 34.5059 55.7735 32.7597 54.9652 31.3596L52.6225 32.7122ZM51.297 32.0447C51.8323 31.9833 52.3531 32.2455 52.6225 32.7122L54.9652 31.3596C54.1569 29.9596 52.5946 29.173 50.9886 29.3573L51.297 32.0447ZM49.2141 32.2838L51.297 32.0447L50.9886 29.3573L48.9057 29.5963L49.2141 32.2838ZM47.9553 28.703L47.7162 30.7858L50.4037 31.0943L50.6427 29.0114L47.9553 28.703ZM47.2878 27.3775C47.7545 27.6469 48.0167 28.1676 47.9553 28.703L50.6427 29.0114C50.827 27.4053 50.0404 25.8431 48.6403 25.0348L47.2878 27.3775ZM45.8061 27.4622C46.239 27.1413 46.8211 27.108 47.2878 27.3775L48.6403 25.0348C47.2403 24.2265 45.494 24.3264 44.1953 25.289L45.8061 27.4622ZM44.1218 28.7106L45.8061 27.4622L44.1953 25.289L42.511 26.5374L44.1218 28.7106ZM41.2412 26.239L42.0756 28.1623L44.5572 27.0857L43.7228 25.1624L41.2412 26.239Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M43.9421 16.5121C43.2608 14.9419 41.7124 13.9258 40.0007 13.9258C38.289 13.9258 36.7406 14.9419 36.0593 16.5121L34.6053 19.8638L31.6702 17.6882C30.295 16.6689 28.4461 16.5632 26.9637 17.419C25.4813 18.2749 24.6484 19.929 24.8435 21.6296L25.2601 25.2592L21.6304 24.8427C19.9299 24.6475 18.2758 25.4804 17.4199 26.9628C16.564 28.4452 16.6698 30.2942 17.6891 31.6693L19.8646 34.6044L16.513 36.0585C14.9427 36.7398 13.9266 38.2882 13.9266 39.9999C13.9266 41.7116 14.9427 43.26 16.513 43.9412L19.8646 45.3953L17.6891 48.3304C16.6698 49.7055 16.564 51.5545 17.4199 53.0369C18.2758 54.5193 19.9299 55.3522 21.6304 55.157L25.2601 54.7405L24.8435 58.3701C24.6484 60.0707 25.4813 61.7248 26.9637 62.5807C28.4461 63.4365 30.295 63.3308 31.6702 62.3115L34.6053 60.1359L36.0593 63.4876C36.7406 65.0579 38.289 66.0739 40.0007 66.0739C41.7124 66.0739 43.2608 65.0579 43.9421 63.4876L45.3962 60.1359L48.3312 62.3115C49.7064 63.3308 51.5554 63.4365 53.0377 62.5807C54.5201 61.7248 55.353 60.0707 55.1579 58.3701L54.7413 54.7405L58.371 55.157C60.0715 55.3522 61.7257 54.5193 62.5815 53.0369C63.4374 51.5545 63.3316 49.7055 62.3123 48.3304L60.1368 45.3953L63.4884 43.9412C65.0587 43.26 66.0748 41.7116 66.0748 39.9999C66.0748 38.2882 65.0587 36.7398 63.4884 36.0585L60.1368 34.6044L62.3123 31.6693C63.3316 30.2942 63.4374 28.4452 62.5815 26.9628C61.7257 25.4804 60.0715 24.6475 58.371 24.8427L54.7413 25.2592L55.1579 21.6296C55.353 19.929 54.5201 18.2749 53.0377 17.419C51.5554 16.5632 49.7064 16.6689 48.3312 17.6882L45.3962 19.8638L43.9421 16.5121Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.0007 11.9258C37.4922 11.9258 35.223 13.4149 34.2246 15.7161L33.7729 16.7573L32.8611 16.0815C30.8458 14.5877 28.1361 14.4327 25.9637 15.687C23.7912 16.9413 22.5706 19.3654 22.8566 21.8576L22.986 22.9851L21.8585 22.8557C19.3663 22.5697 16.9421 23.7904 15.6878 25.9628C14.4336 28.1353 14.5886 30.845 16.0823 32.8603L16.7582 33.772L15.717 34.2237C13.4157 35.2221 11.9266 37.4913 11.9266 39.9999C11.9266 42.5084 13.4157 44.7776 15.717 45.776L16.7582 46.2277L16.0823 47.1394C14.5886 49.1547 14.4336 51.8644 15.6878 54.0369C16.9421 56.2093 19.3663 57.43 21.8585 57.144L22.986 57.0146L22.8566 58.1421C22.5706 60.6343 23.7912 63.0585 25.9637 64.3127C28.1361 65.567 30.8458 65.412 32.8611 63.9182L33.7729 63.2424L34.2246 64.2836C35.223 66.5849 37.4922 68.0739 40.0007 68.0739C42.5092 68.0739 44.7784 66.5849 45.7768 64.2836L46.2285 63.2424L47.1403 63.9182C49.1556 65.412 51.8653 65.567 54.0377 64.3127C56.2102 63.0584 57.4308 60.6343 57.1448 58.1421L57.0154 57.0146L58.1429 57.144C60.6351 57.43 63.0593 56.2093 64.3136 54.0369C65.5678 51.8644 65.4129 49.1547 63.9191 47.1394L63.2433 46.2277L64.2844 45.776C66.5857 44.7776 68.0748 42.5084 68.0748 39.9999C68.0748 37.4913 66.5857 35.2221 64.2844 34.2237L63.2433 33.772L63.9191 32.8603C65.4129 30.845 65.5678 28.1353 64.3136 25.9628C63.0593 23.7904 60.6351 22.5697 58.143 22.8557L57.0154 22.9851L57.1448 21.8576C57.4308 19.3654 56.2102 16.9413 54.0377 15.687C51.8653 14.4327 49.1556 14.5877 47.1403 16.0815L46.2285 16.7573L45.7768 15.7161C44.7784 13.4149 42.5092 11.9258 40.0007 11.9258ZM40.0007 15.9258C39.0858 15.9258 38.2582 16.4689 37.8941 17.3082L35.4376 22.9703L30.4792 19.295C29.7442 18.7502 28.756 18.6937 27.9637 19.1511C27.1714 19.6085 26.7262 20.4926 26.8305 21.4016L27.5342 27.5333L21.4024 26.8296C20.4935 26.7253 19.6094 27.1705 19.152 27.9628C18.6945 28.7551 18.751 29.7434 19.2958 30.4784L22.9711 35.4368L17.309 37.8933C16.4697 38.2574 15.9266 39.085 15.9266 39.9999C15.9266 40.9147 16.4697 41.7423 17.309 42.1064L22.9711 44.5629L19.2958 49.5213C18.751 50.2563 18.6945 51.2446 19.152 52.0369C19.6094 52.8292 20.4935 53.2744 21.4024 53.1701L27.5342 52.4664L26.8305 58.5982C26.7262 59.5071 27.1714 60.3912 27.9637 60.8486C28.756 61.306 29.7442 61.2495 30.4792 60.7047L35.4376 57.0294L37.8941 62.6916C38.2582 63.5309 39.0858 64.0739 40.0007 64.0739C40.9156 64.0739 41.7432 63.5309 42.1073 62.6916L44.5638 57.0294L49.5222 60.7047C50.2572 61.2495 51.2454 61.3061 52.0377 60.8486C52.8301 60.3912 53.2752 59.5071 53.1709 58.5982L52.4672 52.4664L58.599 53.1701C59.5079 53.2744 60.392 52.8292 60.8495 52.0369C61.3069 51.2446 61.2504 50.2563 60.7056 49.5214L57.0303 44.5629L62.6924 42.1064C63.5317 41.7423 64.0748 40.9147 64.0748 39.9999C64.0748 39.085 63.5317 38.2574 62.6924 37.8933L57.0303 35.4368L60.7056 30.4784C61.2504 29.7434 61.3069 28.7551 60.8495 27.9628C60.392 27.1705 59.5079 26.7253 58.599 26.8296L52.4672 27.5333L53.1709 21.4016C53.2752 20.4926 52.8301 19.6085 52.0377 19.1511C51.2454 18.6937 50.2572 18.7502 49.5222 19.295L44.5638 22.9703L42.1073 17.3082C41.7432 16.4689 40.9156 15.9258 40.0007 15.9258Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-certificate', CoreCertificate)
export default CoreCertificate
