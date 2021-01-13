
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M53 71.4373L37 71.4373L21 71.4373"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 71.4373V65"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.9904 52.9337L20.261 58.1217C19.9386 58.5702 20.0399 59.1966 20.4991 59.5036C24.237 62.0031 28.5319 63.6411 33.0742 64.2392C40.848 65.2626 48.71 63.156 54.9306 58.3827C61.1512 53.6095 65.2209 46.5606 66.2443 38.7868C67.2678 31.013 65.1612 23.151 60.3879 16.9304C57.5988 13.2956 54.0327 10.3951 49.9989 8.40767C49.5035 8.16357 48.9104 8.38904 48.6832 8.89245L46.0535 14.7194"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M39.8943 13.0167C45.7246 13.7843 51.0113 16.8365 54.5912 21.502C58.1711 26.1674 59.7511 32.0639 58.9835 37.8943C58.2159 43.7246 55.1637 49.0113 50.4982 52.5912C45.8328 56.1711 39.9363 57.7511 34.1059 56.9835C28.2756 56.2159 22.9889 53.1637 19.409 48.4982C15.8291 43.8328 14.2491 37.9363 15.0167 32.1059C15.7843 26.2756 18.8365 20.9889 23.502 17.409C28.1674 13.8291 34.0639 12.2491 39.8943 13.0167Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.8422 28.0467C48.7164 36.5979 44.2398 44.3517 37.3971 49.6022C34.3008 51.9781 30.8349 53.7534 27.1755 54.8808C26.3193 54.4577 25.4912 53.9797 24.6967 53.4498C23.8428 49.7161 23.647 45.8258 24.1565 41.9553C25.2823 33.4041 29.7589 25.6504 36.6016 20.3998C39.6967 18.0249 43.1612 16.2501 46.8191 15.1226C47.6771 15.5464 48.5069 16.0255 49.303 16.5565C50.1561 20.289 50.3516 24.1778 49.8422 28.0467Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M15.2373 30.7493L51.5612 51.7209"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.0901 17.7317L58.9083 38.4113"
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
            d="M39.5 65C39.5 63.6193 38.3807 62.5 37 62.5C35.6193 62.5 34.5 63.6193 34.5 65H39.5ZM53 73.9373C54.3807 73.9373 55.5 72.8181 55.5 71.4373C55.5 70.0566 54.3807 68.9373 53 68.9373V73.9373ZM21 68.9373C19.6193 68.9373 18.5 70.0566 18.5 71.4373C18.5 72.8181 19.6193 73.9373 21 73.9373L21 68.9373ZM39.5 71.4373V65H34.5V71.4373H39.5ZM37 73.9373L53 73.9373V68.9373L37 68.9373V73.9373ZM37 68.9373L21 68.9373L21 73.9373L37 73.9373L37 68.9373Z"
            fill="currentColor"
          />
          <path
            d="M20.261 58.1217L18.2311 56.6624H18.2311L20.261 58.1217ZM20.4991 59.5035L21.8887 57.4253L21.8887 57.4253L20.4991 59.5035ZM23.9904 52.9336L25.4496 50.9037L23.4197 49.4445L21.9605 51.4744L23.9904 52.9336ZM34.0389 56.9132L34.3652 54.4346H34.3652L34.0389 56.9132ZM50.4312 52.5209L48.9093 50.5375L50.4312 52.5209ZM58.9164 37.824L56.4378 37.4977V37.4977L58.9164 37.824ZM54.5241 21.4317L52.5408 22.9536L54.5241 21.4317ZM46.0535 14.7193L43.7748 13.6909L42.7465 15.9696L45.0252 16.998L46.0535 14.7193ZM48.6832 8.8924L50.9619 9.92076L48.6832 8.8924ZM49.9989 8.40762L51.1039 6.16504L49.9989 8.40762ZM60.3879 16.9304L62.3713 15.4085V15.4085L60.3879 16.9304ZM66.2443 38.7868L63.7657 38.4605V38.4605L66.2443 38.7868ZM54.9306 58.3827L53.4087 56.3993H53.4087L54.9306 58.3827ZM33.0742 64.2391L33.4005 61.7605H33.4005L33.0742 64.2391ZM18.2311 56.6624C17.1162 58.2133 17.4287 60.4579 19.1094 61.5817L21.8887 57.4253C22.6512 57.9352 22.761 58.927 22.2909 59.5809L18.2311 56.6624ZM21.9605 51.4744L18.2311 56.6624L22.2909 59.5809L26.0204 54.3929L21.9605 51.4744ZM34.3652 54.4346C31.1183 54.0071 28.0615 52.7812 25.4496 50.9037L22.5312 54.9636C25.8065 57.3179 29.6403 58.8557 33.7125 59.3918L34.3652 54.4346ZM48.9093 50.5375C44.7698 53.7138 39.5382 55.1156 34.3652 54.4346L33.7125 59.3918C40.2003 60.246 46.7616 58.4879 51.9531 54.5043L48.9093 50.5375ZM56.4378 37.4977C55.7568 42.6707 53.0487 47.3612 48.9093 50.5375L51.9531 54.5043C57.1445 50.5207 60.5409 44.638 61.3951 38.1503L56.4378 37.4977ZM52.5408 22.9536C55.717 27.093 57.1189 32.3247 56.4378 37.4977L61.3951 38.1503C62.2492 31.6626 60.4911 25.1012 56.5075 19.9098L52.5408 22.9536ZM45.0252 16.998C47.957 18.3212 50.5471 20.3554 52.5408 22.9536L56.5075 19.9098C54.0071 16.6512 50.7585 14.0999 47.0819 12.4406L45.0252 16.998ZM46.4045 7.86403L43.7748 13.6909L48.3322 15.7477L50.9619 9.92076L46.4045 7.86403ZM51.1039 6.16504C49.2902 5.27147 47.1901 6.12316 46.4045 7.86403L50.9619 9.92076C50.6306 10.6548 49.7168 11.0556 48.894 10.6502L51.1039 6.16504ZM62.3713 15.4085C59.3463 11.4662 55.4785 8.32044 51.1039 6.16504L48.894 10.6502C52.5868 12.4696 55.8513 15.1248 58.4046 18.4523L62.3713 15.4085ZM68.723 39.1131C69.8329 30.6819 67.5482 22.1551 62.3713 15.4085L58.4046 18.4523C62.7742 24.1469 64.7026 31.344 63.7657 38.4605L68.723 39.1131ZM56.4525 60.3661C63.1992 55.1892 67.613 47.5443 68.723 39.1131L63.7657 38.4605C62.8288 45.5769 59.1033 52.0297 53.4087 56.3993L56.4525 60.3661ZM32.7479 66.7177C41.1791 67.8277 49.7059 65.5429 56.4525 60.3661L53.4087 56.3993C47.7141 60.7689 40.517 62.6974 33.4005 61.7605L32.7479 66.7177ZM19.1094 61.5817C23.1633 64.2925 27.8214 66.0691 32.7479 66.7177L33.4005 61.7605C29.2423 61.213 25.3108 59.7136 21.8887 57.4253L19.1094 61.5817Z"
            fill="currentColor"
          />
          <path
            d="M39.8941 13.0165C45.7245 13.7841 51.0111 16.8364 54.5911 21.5018V21.5018C58.171 26.1673 59.7509 32.0637 58.9834 37.8941V37.8941C58.2158 43.7245 55.1635 49.0111 50.4981 52.591V52.591C45.8326 56.171 39.9361 57.7509 34.1058 56.9834V56.9834C28.2754 56.2158 22.9888 53.1635 19.4088 48.4981V48.4981C15.8289 43.8326 14.2489 37.9361 15.0165 32.1058V32.1058C15.7841 26.2754 18.8364 20.9888 23.5018 17.4088V17.4088C28.1673 13.8289 34.0637 12.2489 39.8941 13.0165V13.0165Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.3969 49.6021L38.9188 51.5855L37.3969 49.6021ZM49.842 28.0466L52.3206 28.3729L52.3206 28.3729L49.842 28.0466ZM27.1753 54.8807L26.0677 57.1219C26.6407 57.4051 27.3005 57.4581 27.9114 57.2699L27.1753 54.8807ZM24.6965 53.4497L22.2594 54.0071C22.4019 54.6302 22.7777 55.175 23.3095 55.5297L24.6965 53.4497ZM24.1563 41.9552L21.6777 41.6289L21.6777 41.6289L24.1563 41.9552ZM36.6014 20.3997L38.1233 22.3831L36.6014 20.3997ZM46.8189 15.1224L47.9262 12.881C47.3531 12.5979 46.6933 12.5451 46.0825 12.7334L46.8189 15.1224ZM49.3029 16.5564L51.74 15.9994C51.5976 15.3762 51.2219 14.8313 50.6901 14.4766L49.3029 16.5564ZM38.9188 51.5855C46.2875 45.9313 51.1083 37.5815 52.3206 28.3729L47.3634 27.7203C46.3242 35.6141 42.1917 42.7718 35.875 47.6188L38.9188 51.5855ZM27.9114 57.2699C31.852 56.0558 35.5846 54.144 38.9188 51.5855L35.875 47.6188C33.0167 49.812 29.8173 51.4507 26.4392 52.4915L27.9114 57.2699ZM23.3095 55.5297C24.1936 56.1192 25.115 56.6511 26.0677 57.1219L28.2829 52.6394C27.5232 52.264 26.7885 51.8399 26.0835 51.3697L23.3095 55.5297ZM21.6777 41.6289C21.129 45.7968 21.3399 49.9863 22.2594 54.0071L27.1336 52.8924C26.3453 49.4456 26.1646 45.8545 26.6349 42.2815L21.6777 41.6289ZM35.0795 18.4163C27.7108 24.0705 22.89 32.4203 21.6777 41.6289L26.6349 42.2815C27.6742 34.3877 31.8067 27.23 38.1233 22.3831L35.0795 18.4163ZM46.0825 12.7334C42.1435 13.9475 38.4125 15.8588 35.0795 18.4163L38.1233 22.3831C40.9805 20.1907 44.1786 18.5524 47.5553 17.5115L46.0825 12.7334ZM50.6901 14.4766C49.8042 13.8857 48.8809 13.3527 47.9262 12.881L45.7116 17.3639C46.4729 17.74 47.2092 18.165 47.9156 18.6362L50.6901 14.4766ZM52.3206 28.3729C52.8691 24.2066 52.6586 20.0187 51.74 15.9994L46.8657 17.1134C47.6532 20.559 47.8336 24.1487 47.3634 27.7203L52.3206 28.3729Z"
            fill="currentColor"
          />
          <path
            d="M13.9874 32.9141L50.3113 53.8857L52.8113 49.5556L16.4874 28.584L13.9874 32.9141ZM21.8403 19.8965L57.6584 40.5761L60.1584 36.246L24.3403 15.5664L21.8403 19.8965Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M39 65C39 63.8954 38.1046 63 37 63C35.8954 63 35 63.8954 35 65H39ZM53 73.4373C54.1046 73.4373 55 72.5419 55 71.4373C55 70.3328 54.1046 69.4373 53 69.4373V73.4373ZM21 69.4373C19.8954 69.4373 19 70.3328 19 71.4373C19 72.5419 19.8954 73.4373 21 73.4373L21 69.4373ZM39 71.4373V65H35V71.4373H39ZM37 73.4373L53 73.4373V69.4373L37 69.4373V73.4373ZM37 69.4373L21 69.4373L21 73.4373L37 73.4373V69.4373Z"
            fill="#828282"
          />
          <path
            d="M20.261 58.1217L18.6371 56.9543H18.6371L20.261 58.1217ZM20.4991 59.5035L21.6108 57.841L21.6108 57.841L20.4991 59.5035ZM23.9904 52.9336L25.1578 51.3097L23.5339 50.1423L22.3665 51.7662L23.9904 52.9336ZM34.0389 56.9132L34.2999 54.9303H34.2999L34.0389 56.9132ZM50.4312 52.5209L49.2136 50.9342H49.2136L50.4312 52.5209ZM58.9164 37.824L56.9336 37.5629L56.9335 37.5629L58.9164 37.824ZM54.5241 21.4317L52.9374 22.6492L54.5241 21.4317ZM46.0535 14.7193L44.2306 13.8966L43.4079 15.7195L45.2308 16.5422L46.0535 14.7193ZM48.6832 8.89239L50.5062 9.71509L48.6832 8.89239ZM49.9989 8.40762L49.115 10.2017L49.9989 8.40762ZM60.3879 16.9304L61.9746 15.7128L60.3879 16.9304ZM66.2443 38.7868L64.2615 38.5257V38.5257L66.2443 38.7868ZM54.9306 58.3827L53.7131 56.796L54.9306 58.3827ZM33.0742 64.2391L33.3353 62.2562H33.3353L33.0742 64.2391ZM18.6371 56.9543C17.6807 58.2846 17.951 60.2056 19.3874 61.1661L21.6108 57.841C22.1289 58.1874 22.1965 58.8556 21.885 59.289L18.6371 56.9543ZM22.3665 51.7662L18.6371 56.9543L21.885 59.289L25.6144 54.101L22.3665 51.7662ZM34.2999 54.9303C30.9705 54.492 27.836 53.2348 25.1578 51.3097L22.8231 54.5576C26.032 56.8643 29.7881 58.3709 33.7778 58.8961L34.2999 54.9303ZM49.2136 50.9342C44.969 54.1912 39.6044 55.6287 34.2999 54.9303L33.7778 58.8961C40.1341 59.7329 46.5624 58.0104 51.6487 54.1076L49.2136 50.9342ZM56.9335 37.5629C56.2352 42.8674 53.4583 47.6772 49.2136 50.9342L51.6487 54.1076C56.735 50.2048 60.0625 44.4413 60.8993 38.085L56.9335 37.5629ZM52.9374 22.6492C56.1945 26.8938 57.6319 32.2584 56.9336 37.5629L60.8993 38.085C61.7361 31.7288 60.0137 25.3004 56.1108 20.2141L52.9374 22.6492ZM45.2308 16.5422C48.2372 17.899 50.8931 19.985 52.9374 22.6492L56.1108 20.2141C53.6611 17.0216 50.4783 14.522 46.8763 12.8963L45.2308 16.5422ZM46.8602 8.0697L44.2306 13.8966L47.8765 15.542L50.5062 9.71509L46.8602 8.0697ZM50.8829 6.61356C49.3329 5.84988 47.5342 6.57632 46.8602 8.0697L50.5062 9.71509C50.2866 10.2016 49.6741 10.4772 49.115 10.2017L50.8829 6.61356ZM61.9746 15.7128C58.9968 11.8321 55.1894 8.73536 50.8829 6.61356L49.115 10.2017C52.876 12.0547 56.2008 14.7589 58.8012 18.1479L61.9746 15.7128ZM68.2272 39.0478C69.3199 30.7481 67.0708 22.3543 61.9746 15.7128L58.8012 18.1479C63.2516 23.9477 65.2157 31.2778 64.2615 38.5257L68.2272 39.0478ZM56.1482 59.9694C62.7896 54.8733 67.1346 47.3475 68.2272 39.0478L64.2615 38.5257C63.3072 45.7737 59.5129 52.3457 53.7131 56.796L56.1482 59.9694ZM32.8132 66.222C41.1129 67.3147 49.5067 65.0655 56.1482 59.9694L53.7131 56.796C47.9133 61.2463 40.5832 63.2104 33.3353 62.2562L32.8132 66.222ZM19.3873 61.1661C23.378 63.8346 27.9635 65.5835 32.8132 66.222L33.3353 62.2562C29.1002 61.6987 25.096 60.1715 21.6108 57.841L19.3873 61.1661Z"
            fill="#828282"
          />
          <path
            d="M39.8941 13.0165C45.7245 13.7841 51.0111 16.8364 54.5911 21.5018C58.171 26.1673 59.7509 32.0637 58.9834 37.8941C58.2158 43.7245 55.1635 49.0111 50.4981 52.591C45.8326 56.171 39.9361 57.7509 34.1058 56.9834C28.2754 56.2158 22.9888 53.1635 19.4088 48.4981C15.8289 43.8326 14.2489 37.9361 15.0165 32.1058C15.7841 26.2754 18.8364 20.9888 23.5018 17.4088C28.1673 13.8289 34.0637 12.2489 39.8941 13.0165Z"
            fill="#2F80ED"
            stroke="#2F80ED"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.1736 41.6941C23.3686 32.617 28.1206 24.3864 35.384 18.813C38.0414 16.7739 40.9554 15.1515 44.0269 13.9725C46.8541 14.9174 49.4629 16.4234 51.695 18.3991C52.2102 21.6497 52.2624 24.9856 51.825 28.3077C50.63 37.3848 45.8781 45.6154 38.6146 51.1889C35.9559 53.229 33.0404 54.8519 29.9671 56.0311C27.142 55.0864 24.5352 53.5815 22.3044 51.6074C21.7885 48.3553 21.736 45.0178 22.1736 41.6941ZM37.8191 21.9864C40.7113 19.7671 43.9471 18.1062 47.3636 17.0474C48.1554 20.5365 48.3352 24.1703 47.8593 27.7856C46.8027 35.8109 42.6014 43.0878 36.1795 48.0154C33.2874 50.2347 30.0515 51.8956 26.635 52.9544C25.8432 49.4653 25.6634 45.8315 26.1394 42.2162C27.1959 34.1909 31.3973 26.914 37.8191 21.9864Z"
            fill="#F2F2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5132 19.1303C22.138 18.5205 22.8015 17.9452 23.5012 17.4083C23.9436 17.0688 24.3971 16.7473 24.8606 16.4441L59.1381 36.2342C59.1072 36.7872 59.0555 37.3407 58.9827 37.8936C58.8676 38.768 58.7011 39.6302 58.4855 40.4763L21.5132 19.1303ZM14.9277 32.8797C14.9525 32.6215 14.9819 32.3633 15.0159 32.1053C15.1674 30.9545 15.4079 29.8248 15.7323 28.7254L53.0663 50.2802C52.2763 51.1108 51.4183 51.8839 50.4974 52.5905C50.291 52.749 50.0821 52.9035 49.8709 53.0541L14.9277 32.8797Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M20.4992 59.5036C20.04 59.1966 19.9387 58.5702 20.2611 58.1217L23.9905 52.9337C26.9341 55.0496 30.3794 56.4315 34.0389 56.9133C39.8693 57.6808 45.7658 56.1009 50.4313 52.521C55.0967 48.941 58.149 43.6544 58.9165 37.824C59.6841 31.9937 58.1042 26.0972 54.5242 21.4317C52.2772 18.5034 49.3578 16.2106 46.0536 14.7194L48.6833 8.89245C48.9105 8.38904 49.5036 8.16357 49.999 8.40767C54.0328 10.3951 57.5989 13.2956 60.388 16.9304C65.1613 23.151 67.2679 31.013 66.2444 38.7868C65.221 46.5606 61.1513 53.6095 54.9307 58.3827C48.7101 63.156 40.8481 65.2626 33.0743 64.2392C28.532 63.6411 24.2371 62.0031 20.4992 59.5036Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M39.8943 13.0165C45.7246 13.7841 51.0113 16.8364 54.5912 21.5018C58.1711 26.1673 59.7511 32.0637 58.9835 37.8941C58.2159 43.7245 55.1637 49.0111 50.4982 52.591C45.8328 56.171 39.9363 57.7509 34.1059 56.9833C28.2756 56.2158 22.9889 53.1635 19.409 48.4981C15.8291 43.8326 14.2491 37.9361 15.0167 32.1058C15.7843 26.2754 18.8365 20.9888 23.502 17.4088C28.1674 13.8289 34.0639 12.2489 39.8943 13.0165Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M49.8423 28.0466C48.7165 36.5978 44.2398 44.3516 37.3972 49.6021C34.3009 51.978 30.8349 53.7533 27.1755 54.8807C26.3193 54.4576 25.4913 53.9796 24.6967 53.4497C23.8428 49.716 23.647 45.8257 24.1566 41.9552C25.2823 33.404 29.759 25.6503 36.6016 20.3997C39.6967 18.0248 43.1613 16.2499 46.8191 15.1225C47.6772 15.5463 48.5069 16.0253 49.3031 16.5564C50.1562 20.2889 50.3516 24.1777 49.8423 28.0466Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.0001 71.4373V64.9999M37.0001 71.4373H53.0001M37.0001 71.4373L21.0001 71.4373M15.2375 30.7491L51.5614 51.7207M23.0903 17.7315L58.9085 38.4111M20.2611 58.1217C19.9387 58.5702 20.04 59.1966 20.4992 59.5036C24.2371 62.0031 28.532 63.6411 33.0743 64.2392C40.8481 65.2626 48.7101 63.156 54.9307 58.3827C61.1513 53.6095 65.221 46.5606 66.2444 38.7868C67.2679 31.013 65.1613 23.151 60.388 16.9304C57.5989 13.2956 54.0328 10.3951 49.999 8.40767C49.5036 8.16357 48.9105 8.38904 48.6833 8.89245L46.0536 14.7194C49.3578 16.2106 52.2772 18.5034 54.5242 21.4317C58.1042 26.0972 59.6841 31.9937 58.9165 37.824C58.149 43.6544 55.0967 48.941 50.4313 52.521C45.7658 56.1009 39.8693 57.6808 34.0389 56.9133C30.3794 56.4315 26.9341 55.0496 23.9905 52.9337L20.2611 58.1217ZM23.502 17.4088C28.1674 13.8289 34.0639 12.2489 39.8943 13.0165C45.7246 13.7841 51.0113 16.8364 54.5912 21.5018C58.1711 26.1673 59.7511 32.0637 58.9835 37.8941C58.2159 43.7245 55.1637 49.0111 50.4982 52.591C45.8328 56.171 39.9363 57.7509 34.1059 56.9833C28.2756 56.2158 22.9889 53.1635 19.409 48.4981C15.8291 43.8326 14.2491 37.9361 15.0167 32.1058C15.7843 26.2754 18.8365 20.9888 23.502 17.4088ZM37.3972 49.6021C44.2398 44.3516 48.7165 36.5978 49.8423 28.0466C50.3516 24.1777 50.1562 20.2889 49.3031 16.5564C48.5069 16.0253 47.6772 15.5463 46.8191 15.1225C43.1613 16.2499 39.6967 18.0248 36.6016 20.3997C29.759 25.6503 25.2823 33.404 24.1566 41.9552C23.647 45.8257 23.8428 49.716 24.6967 53.4497C25.4913 53.9796 26.3193 54.4576 27.1755 54.8807C30.8349 53.7533 34.3009 51.978 37.3972 49.6021Z"
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
            d="M50.8831 6.61364C55.1895 8.73544 58.997 11.8321 61.9748 15.7129C67.071 22.3544 69.3201 30.7482 68.2274 39.0479C67.1347 47.3476 62.7898 54.8733 56.1483 59.9695C51.16 63.7971 45.1832 66.0187 39.0001 66.4245V69.4374H53.0001C54.1047 69.4374 55.0001 70.3328 55.0001 71.4374C55.0001 72.5419 54.1047 73.4373 53.0001 73.4373L21.0001 73.4374C19.8955 73.4374 19.0001 72.5419 19.0001 71.4374C19.0001 70.3328 19.8955 69.4374 21.0001 69.4374L35.0001 69.4374V66.4329C34.2713 66.3882 33.542 66.318 32.8134 66.2221C27.9637 65.5836 23.3782 63.8347 19.3875 61.1661C17.9511 60.2057 17.6809 58.2847 18.6372 56.9544L21.2419 53.331C19.99 52.2548 18.8426 51.0453 17.8223 49.7157C13.9195 44.6294 12.197 38.2011 13.0338 31.8448C13.8706 25.4885 17.1982 19.725 22.2845 15.8222C27.3707 11.9194 33.7991 10.1969 40.1553 11.0337C41.8188 11.2527 43.4417 11.6423 45.0013 12.1894L46.8604 8.06979C47.5344 6.57641 49.3331 5.84997 50.8831 6.61364ZM26.4693 52.1769C26.774 52.3618 27.0836 52.5386 27.3977 52.7071C30.5332 51.6444 33.5035 50.069 36.1797 48.0155C36.8813 47.4771 37.5565 46.9107 38.2039 46.3183L26.5967 39.6169C26.4076 40.473 26.2548 41.3402 26.1395 42.2164C25.6987 45.564 25.8202 48.9273 26.4693 52.1769ZM27.7537 35.6661L41.0466 43.3407C43.4555 40.4499 45.3112 37.1355 46.5166 33.5661L33.4831 26.0413C30.9948 28.87 29.0526 32.1344 27.7537 35.6661ZM29.9582 24.0062C27.5411 26.886 25.6111 30.141 24.2443 33.6399L17.52 29.7576C18.5082 26.0854 20.5172 22.7599 23.3203 20.1737L29.9582 24.0062ZM32.7851 21.0195L26.8272 17.5797C30.6707 15.335 35.1732 14.4123 39.6332 14.9995C40.13 15.0649 40.6224 15.1485 41.1096 15.2499C39.1038 16.2407 37.185 17.4312 35.3841 18.8131C34.478 19.5084 33.611 20.245 32.7851 21.0195ZM36.4264 23.1218L47.573 29.5573C47.6855 28.9713 47.7811 28.3805 47.8594 27.7857C48.3016 24.4267 48.1778 21.0519 47.5229 17.792C47.2328 17.6146 46.9382 17.4445 46.6394 17.282C43.4898 18.3448 40.5062 19.9247 37.8192 21.9865C37.3426 22.3522 36.8782 22.7309 36.4264 23.1218ZM50.0415 35.6012C48.7563 39.1346 46.9025 42.4336 44.556 45.3669L51.1934 49.1989C53.8834 46.5106 55.7635 43.1107 56.6068 39.3917L50.0415 35.6012ZM57.106 35.0611L51.2144 31.6596C51.4719 30.5578 51.6762 29.4394 51.8251 28.3078C52.1213 26.0579 52.193 23.8017 52.0484 21.57C52.3562 21.9182 52.6528 22.2781 52.9376 22.6493C55.6825 26.2265 57.1351 30.5993 57.106 35.0611ZM47.8553 51.8905L41.8161 48.4038C40.8123 49.3919 39.7439 50.3225 38.6147 51.1889C36.8389 52.5515 34.9486 53.728 32.9731 54.7105C33.4115 54.7983 33.8541 54.8717 34.3001 54.9304C39.0532 55.5562 43.8547 54.467 47.8553 51.8905ZM16.8522 33.9909L22.9844 37.5313C22.6309 38.894 22.3594 40.2839 22.1737 41.6943C21.8774 43.9447 21.8058 46.2015 21.9506 48.4338C21.6192 48.0626 21.3007 47.6781 20.9957 47.2806C18.0709 43.469 16.6134 38.7542 16.8522 33.9909ZM33.8449 58.9663C31.2295 58.622 28.7145 57.856 26.3881 56.7193C26.3549 56.705 26.322 56.6899 26.2894 56.6738C25.672 56.3686 25.0679 56.0373 24.479 55.6808L22.5113 58.4181C25.7789 60.4243 29.4606 61.7462 33.3355 62.2563C40.5834 63.2105 47.9135 61.2464 53.7133 56.7961C59.5131 52.3457 63.3074 45.7737 64.2616 38.5258C65.2158 31.2779 63.2517 23.9478 58.8014 18.148C56.4221 15.0472 53.4365 12.5197 50.0651 10.6929L48.6653 13.7947C50.8014 14.9805 52.7567 16.4893 54.4566 18.2783C55.0637 18.9121 55.6386 19.5815 56.1779 20.2844C60.0808 25.3706 61.8032 31.799 60.9664 38.1552C60.1296 44.5115 56.802 50.275 51.7158 54.1778C46.6295 58.0807 40.2011 59.8031 33.8449 58.9663Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGlobeStand1 = forwardRef((props, ref) => {
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

CoreGlobeStand1.displayName = 'CoreGlobeStand1'

export default CoreGlobeStand1
