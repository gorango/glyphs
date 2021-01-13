
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreBinoculars = {
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
            d="M6 49.0003C6 45.2872 7.47516 41.726 10.1007 39.1005C12.7261 36.4751 16.2871 35 20 35C23.7129 35 27.2739 36.4751 29.8993 39.1005C32.5248 41.726 34 45.2872 34 49.0003C34 52.7132 32.525 56.2741 29.8996 58.8996C27.2741 61.525 23.7129 63 20 63C16.2871 63 12.7259 61.525 10.1004 58.8996C7.47496 56.2741 6 52.7132 6 49.0003Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M34 49.0003V27C34 25.1435 33.2624 23.363 31.9497 22.0503C30.637 20.7376 28.8565 20 27 20C25.1436 20 23.3631 20.7376 22.0504 22.0503C20.7376 23.363 20 25.1436 20 27.0001C20 27.0475 20.0005 27.0948 20.0015 27.142C17.8061 27.5615 15.8595 28.8884 14.6723 30.8359L7.90698 41.9339L7.9132 41.9356C7.9059 41.9481 7.89862 41.9606 7.89136 41.9731M34 49.0003L33.9991 49.1622C33.9997 49.1083 34 49.0543 34 49.0003Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M74 49.0003C74 45.2872 72.5248 41.726 69.8993 39.1005C67.2739 36.4751 63.7129 35 60 35C56.2871 35 52.7261 36.4751 50.1007 39.1005C47.4752 41.726 46 45.2872 46 49.0003C46 52.7132 47.475 56.2741 50.1004 58.8996C52.7259 61.525 56.2871 63 60 63C63.7129 63 67.2741 61.525 69.8996 58.8996C72.525 56.2741 74 52.7132 74 49.0003Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46.0002 49.0003V27C46.0003 25.1435 46.7379 23.363 48.0506 22.0503C49.3633 20.7376 51.1438 20 53.0002 20C54.8567 20 56.6372 20.7376 57.9499 22.0503C59.2627 23.363 60.0002 25.1436 60.0002 27.0001C60.0002 27.0475 59.9998 27.0948 59.9988 27.142C62.1941 27.5615 64.1407 28.8884 65.328 30.8359L72.0933 41.9339L72.0871 41.9356C72.0944 41.9481 72.1016 41.9606 72.1089 41.9731M46.0002 49.0003L46.0012 49.1622C46.0006 49.1083 46.0002 49.0543 46.0002 49.0003Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 29C46 27.4087 45.3677 25.8826 44.2426 24.7574C43.1174 23.6322 41.5912 23 40 23C38.4088 23 36.8826 23.6322 35.7574 24.7574C34.6322 25.8826 34 27.4088 34 29.0001L34 29.0199"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M46 43.0001C46 41.4088 45.3678 39.8826 44.2426 38.7574C43.1174 37.6322 41.5912 37 40 37C38.4088 37 36.8826 37.6322 35.7574 38.7574C34.6322 39.8826 34 41.4088 34 43.0001C34 44.5914 34.6321 46.1175 35.7573 47.2427C36.8825 48.3679 38.4087 49 40 49C41.5913 49 43.1175 48.3679 44.2427 47.2427C45.3679 46.1175 46 44.5914 46 43.0001Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 27.0001C20 25.1436 20.7376 23.363 22.0504 22.0503C23.3631 20.7376 25.1436 20 27 20C28.8565 20 30.637 20.7376 31.9497 22.0503C33.2624 23.363 34 25.1435 34 27V27.0001V49.0003C34 45.2872 32.5249 41.726 29.8993 39.1005C27.2739 36.4751 23.7129 35 20 35C16.2871 35 12.7261 36.4751 10.1007 39.1005C9.24583 39.9554 8.51293 40.9094 7.9132 41.9356L7.90698 41.9339L14.6723 30.8359C15.8595 28.8884 17.8061 27.5615 20.0015 27.142C20.0005 27.0948 20 27.0475 20 27.0001ZM33.9991 49.1622L34 49.1625V49.0003C34 49.0543 33.9997 49.1083 33.9991 49.1622Z"
            fill="currentColor"
          />
          <path
            d="M22.0504 22.0503L19.929 19.9289L19.929 19.9289L22.0504 22.0503ZM31.9497 22.0503L34.071 19.929L34.071 19.9289L31.9497 22.0503ZM34 27H37L37 26.9999L34 27ZM10.1007 39.1005L12.222 41.2219H12.222L10.1007 39.1005ZM7.9132 41.9356L7.11264 44.8268C8.42447 45.19 9.81645 44.6245 10.5033 43.4493L7.9132 41.9356ZM7.90698 41.9339L5.34542 40.3723C4.85569 41.1757 4.77121 42.1623 5.11723 43.0372C5.46325 43.9121 6.19968 44.574 7.10642 44.8251L7.90698 41.9339ZM14.6723 30.8359L17.2339 32.3975H17.2339L14.6723 30.8359ZM20.0015 27.142L20.5644 30.0887C22.0011 29.8143 23.0304 28.5437 23.0008 27.0813L20.0015 27.142ZM33.9991 49.1622L30.9993 49.1276C30.9835 50.4888 31.8863 51.69 33.1983 52.0534L33.9991 49.1622ZM34 49.1625L33.1992 52.0536C34.1023 52.3038 35.0704 52.1176 35.8163 51.5502C36.5621 50.9829 37 50.0996 37 49.1625H34ZM19.929 19.9289C18.0537 21.8043 17 24.3479 17 27.0001H23C23 25.9393 23.4215 24.9218 24.1717 24.1716L19.929 19.9289ZM27 17C24.3479 17 21.8043 18.0537 19.929 19.9289L24.1717 24.1716C24.9218 23.4214 25.9393 23 27 23V17ZM34.071 19.9289C32.1957 18.0537 29.6522 17 27 17V23C28.0608 23 29.0782 23.4215 29.8284 24.1716L34.071 19.9289ZM37 26.9999C37 24.3478 35.9463 21.8042 34.071 19.929L29.8283 24.1716C30.5785 24.9217 31 25.9393 31 27.0001L37 26.9999ZM37 27.0001V27H31V27.0001H37ZM37 49.0003V27.0001H31V49.0003H37ZM27.778 41.2219C29.841 43.2848 31 46.0829 31 49.0003H37C37 44.4915 35.2088 40.1673 32.0207 36.9792L27.778 41.2219ZM20 38C22.9172 38 25.7152 39.159 27.778 41.2219L32.0207 36.9792C28.8327 33.7912 24.5086 32 20 32V38ZM12.222 41.2219C14.2849 39.159 17.0828 38 20 38V32C15.4914 32 11.1674 33.7912 7.97936 36.9792L12.222 41.2219ZM10.5033 43.4493C10.9745 42.6431 11.5502 41.8936 12.222 41.2219L7.97936 36.9792C6.94144 38.0171 6.05141 39.1757 5.32311 40.4218L10.5033 43.4493ZM7.10642 44.8251L7.11264 44.8268L8.71376 39.0444L8.70754 39.0427L7.10642 44.8251ZM12.1107 29.2744L5.34542 40.3723L10.4685 43.4954L17.2339 32.3975L12.1107 29.2744ZM19.4385 24.1953C16.4201 24.772 13.7434 26.5961 12.1107 29.2744L17.2339 32.3975C17.9756 31.1806 19.1922 30.3509 20.5644 30.0887L19.4385 24.1953ZM17 27.0001C17 27.0678 17.0007 27.1353 17.0021 27.2028L23.0008 27.0813C23.0003 27.0543 23 27.0272 23 27.0001H17ZM33.1983 52.0534L33.1992 52.0536L34.8008 46.2714L34.7999 46.2711L33.1983 52.0534ZM37 49.1625V49.0003H31V49.1625H37ZM31 49.0003C31 49.0427 30.9998 49.0851 30.9993 49.1276L36.9989 49.1969C36.9996 49.1314 37 49.0659 37 49.0003H31Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.0002 27.0001C60.0002 25.1436 59.2626 23.363 57.9499 22.0503C56.6372 20.7376 54.8567 20 53.0002 20C51.1438 20 49.3633 20.7376 48.0506 22.0503C46.7379 23.363 46.0003 25.1435 46.0002 27V27.0001V49.0003C46.0002 45.2872 47.4754 41.726 50.1009 39.1005C52.7263 36.4751 56.2873 35 60.0002 35C63.7131 35 67.2741 36.4751 69.8996 39.1005C70.7544 39.9554 71.4873 40.9094 72.087 41.9356L72.0933 41.9339L65.328 30.8359C64.1407 28.8884 62.1941 27.5615 59.9988 27.142C59.9998 27.0948 60.0002 27.0475 60.0002 27.0001ZM46.0012 49.1622L46.0002 49.1625V49.0003C46.0002 49.0543 46.0005 49.1083 46.0012 49.1622Z"
            fill="currentColor"
          />
          <path
            d="M57.9499 22.0503L60.0712 19.9289L60.0712 19.9289L57.9499 22.0503ZM48.0506 22.0503L45.9293 19.929L45.9293 19.9289L48.0506 22.0503ZM46.0002 27H43.0002L43.0002 26.9999L46.0002 27ZM69.8996 39.1005L67.7782 41.2219H67.7782L69.8996 39.1005ZM72.087 41.9356L72.8876 44.8268C71.5758 45.19 70.1838 44.6245 69.497 43.4493L72.087 41.9356ZM72.0933 41.9339L74.6548 40.3723C75.1446 41.1757 75.229 42.1623 74.883 43.0372C74.537 43.9121 73.8006 44.574 72.8938 44.8251L72.0933 41.9339ZM65.328 30.8359L62.7664 32.3975H62.7664L65.328 30.8359ZM59.9988 27.142L59.4358 30.0887C57.9991 29.8143 56.9698 28.5437 56.9994 27.0813L59.9988 27.142ZM46.0012 49.1622L49.001 49.1276C49.0167 50.4888 48.1139 51.69 46.802 52.0534L46.0012 49.1622ZM46.0002 49.1625L46.801 52.0536C45.8979 52.3038 44.9298 52.1176 44.184 51.5502C43.4381 50.9829 43.0002 50.0996 43.0002 49.1625H46.0002ZM60.0712 19.9289C61.9465 21.8043 63.0002 24.3479 63.0002 27.0001H57.0002C57.0002 25.9393 56.5787 24.9218 55.8286 24.1716L60.0712 19.9289ZM53.0002 17C55.6524 17 58.1959 18.0537 60.0712 19.9289L55.8286 24.1716C55.0784 23.4214 54.061 23 53.0002 23V17ZM45.9293 19.9289C47.8045 18.0537 50.3481 17 53.0002 17V23C51.9395 23 50.922 23.4215 50.1719 24.1716L45.9293 19.9289ZM43.0002 26.9999C43.0003 24.3478 44.054 21.8042 45.9293 19.929L50.1719 24.1716C49.4217 24.9217 49.0003 25.9393 49.0002 27.0001L43.0002 26.9999ZM43.0002 27.0001V27H49.0002V27.0001H43.0002ZM43.0002 49.0003V27.0001H49.0002V49.0003H43.0002ZM52.2222 41.2219C50.1593 43.2848 49.0002 46.0829 49.0002 49.0003H43.0002C43.0002 44.4915 44.7915 40.1673 47.9796 36.9792L52.2222 41.2219ZM60.0002 38C57.083 38 54.2851 39.159 52.2222 41.2219L47.9796 36.9792C51.1676 33.7912 55.4916 32 60.0002 32V38ZM67.7782 41.2219C65.7154 39.159 62.9174 38 60.0002 38V32C64.5088 32 68.8329 33.7912 72.0209 36.9792L67.7782 41.2219ZM69.497 43.4493C69.0258 42.6431 68.45 41.8936 67.7782 41.2219L72.0209 36.9792C73.0588 38.0171 73.9488 39.1757 74.6771 40.4218L69.497 43.4493ZM72.8938 44.8251L72.8876 44.8268L71.2865 39.0444L71.2927 39.0427L72.8938 44.8251ZM67.8895 29.2744L74.6548 40.3723L69.5317 43.4954L62.7664 32.3975L67.8895 29.2744ZM60.5618 24.1953C63.5802 24.772 66.2568 26.5961 67.8895 29.2744L62.7664 32.3975C62.0246 31.1806 60.8081 30.3509 59.4358 30.0887L60.5618 24.1953ZM63.0002 27.0001C63.0002 27.0678 62.9995 27.1353 62.9982 27.2028L56.9994 27.0813C57 27.0543 57.0002 27.0272 57.0002 27.0001H63.0002ZM46.802 52.0534L46.801 52.0536L45.1994 46.2714L45.2004 46.2711L46.802 52.0534ZM43.0002 49.1625V49.0003H49.0002V49.1625H43.0002ZM49.0002 49.0003C49.0002 49.0427 49.0005 49.0851 49.001 49.1276L43.0014 49.1969C43.0006 49.1314 43.0002 49.0659 43.0002 49.0003H49.0002Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.2426 24.7574C45.3677 25.8826 46 27.4087 46 29H46V43H46C46 41.4087 45.3677 39.8826 44.2426 38.7574C43.1174 37.6322 41.5912 37 40 37C38.4088 37 36.8826 37.6322 35.7574 38.7574C34.6369 39.8779 34.0052 41.3962 34 42.9804V29.0199L34 29.0001C34 27.4088 34.6322 25.8826 35.7574 24.7574C36.8826 23.6322 38.4088 23 40 23C41.5912 23 43.1174 23.6322 44.2426 24.7574Z"
            fill="currentColor"
          />
          <path
            d="M46 29L43 29.0001L43.0001 32H46V29ZM44.2426 24.7574L46.3639 22.6361L46.3639 22.6361L44.2426 24.7574ZM46 29H49V26H46V29ZM46 43V46H49V43H46ZM46 43L43 43.0001L43.0001 46H46V43ZM44.2426 38.7574L46.3639 36.6361L46.3639 36.6361L44.2426 38.7574ZM35.7574 38.7574L37.8788 40.8787H37.8788L35.7574 38.7574ZM34 42.9804H31L37 42.9902L34 42.9804ZM34 29.0199H37L37 29.0149L34 29.0199ZM34 29.0001H31L31 29.0051L34 29.0001ZM35.7574 24.7574L37.8788 26.8787H37.8788L35.7574 24.7574ZM49 28.9999C48.9999 26.613 48.0516 24.3238 46.3639 22.6361L42.1212 26.8787C42.6839 27.4413 43 28.2045 43 29.0001L49 28.9999ZM46 26H46V32H46V26ZM49 43V29H43V43H49ZM46 46H46V40H46V46ZM49 42.9999C48.9999 40.613 48.0516 38.3238 46.3639 36.6361L42.1212 40.8787C42.6839 41.4413 43 42.2045 43 43.0001L49 42.9999ZM46.3639 36.6361C44.6761 34.9483 42.3869 34 40 34V40C40.7955 40 41.5586 40.3161 42.1212 40.8787L46.3639 36.6361ZM40 34C37.6131 34 35.3239 34.9483 33.6361 36.6361L37.8788 40.8787C38.4414 40.3161 39.2045 40 40 40V34ZM33.6361 36.6361C31.9553 38.3169 31.0079 40.5942 31 42.9705L37 42.9902C37.0026 42.1982 37.3184 41.439 37.8788 40.8787L33.6361 36.6361ZM31 29.0199V42.9804H37V29.0199H31ZM31 29.0051L31 29.0248L37 29.0149L37 28.9952L31 29.0051ZM33.6361 22.6361C31.9483 24.3238 31 26.6131 31 29.0001H37C37 28.2045 37.3161 27.4413 37.8788 26.8787L33.6361 22.6361ZM40 20C37.6131 20 35.3239 20.9483 33.6361 22.6361L37.8788 26.8787C38.4414 26.3161 39.2045 26 40 26V20ZM46.3639 22.6361C44.6761 20.9483 42.3869 20 40 20V26C40.7955 26 41.5586 26.3161 42.1212 26.8787L46.3639 22.6361Z"
            fill="currentColor"
          />
          <path
            d="M42.1214 45.1214C42.6839 44.5588 43 43.7958 43 43.0001H49C49 45.387 48.0518 47.6762 46.364 49.364L42.1214 45.1214ZM40 46C40.7957 46 41.5588 45.6839 42.1214 45.1214L46.364 49.364C44.6762 51.0519 42.3868 52 40 52V46ZM37.8786 45.1214C38.4412 45.6839 39.2043 46 40 46V52C37.6132 52 35.3238 51.0519 33.636 49.364L37.8786 45.1214ZM37 43.0001C37 43.7958 37.3161 44.5588 37.8786 45.1214L33.636 49.364C31.9482 47.6762 31 45.387 31 43.0001H37ZM37.8788 40.8787C37.3161 41.4413 37 42.2045 37 43.0001H31C31 40.6131 31.9483 38.3238 33.6361 36.6361L37.8788 40.8787ZM40 40C39.2045 40 38.4414 40.3161 37.8788 40.8787L33.6361 36.6361C35.3239 34.9483 37.6131 34 40 34V40ZM42.1212 40.8787C41.5586 40.3161 40.7955 40 40 40V34C42.3869 34 44.6761 34.9483 46.3639 36.6361L42.1212 40.8787ZM46.3639 36.6361C48.0517 38.3238 49 40.6131 49 43.0001H43C43 42.2045 42.6839 41.4413 42.1212 40.8787L46.3639 36.6361Z"
            fill="currentColor"
          />
          <path
            d="M12.2217 56.7783C10.1589 54.7154 9 51.9176 9 49.0003H3C3 53.5088 4.79102 57.8328 7.97909 61.0209L12.2217 56.7783ZM20 60C17.0826 60 14.2845 58.8411 12.2217 56.7783L7.97909 61.0209C11.1672 64.209 15.4915 66 20 66V60ZM27.7783 56.7783C25.7155 58.8411 22.9174 60 20 60V66C24.5085 66 28.8328 64.209 32.0209 61.0209L27.7783 56.7783ZM31 49.0003C31 51.9176 29.8411 54.7154 27.7783 56.7783L32.0209 61.0209C35.209 57.8328 37 53.5088 37 49.0003H31ZM27.778 41.2219C29.8409 43.2848 31 46.0829 31 49.0003H37C37 44.4915 35.2087 40.1673 32.0207 36.9792L27.778 41.2219ZM20 38C22.9172 38 25.7152 39.159 27.778 41.2219L32.0207 36.9792C28.8327 33.7912 24.5086 32 20 32V38ZM12.222 41.2219C14.2848 39.159 17.0828 38 20 38V32C15.4914 32 11.1673 33.7912 7.97935 36.9792L12.222 41.2219ZM7.97935 36.9792C4.79125 40.1673 3 44.4915 3 49.0003H9C9 46.0829 10.1591 43.2848 12.222 41.2219L7.97935 36.9792Z"
            fill="currentColor"
          />
          <path
            d="M67.7783 56.7783C69.8411 54.7154 71 51.9176 71 49.0003H77C77 53.5088 75.209 57.8328 72.0209 61.0209L67.7783 56.7783ZM60 60C62.9174 60 65.7155 58.8411 67.7783 56.7783L72.0209 61.0209C68.8328 64.209 64.5085 66 60 66V60ZM52.2217 56.7783C54.2845 58.8411 57.0826 60 60 60V66C55.4915 66 51.1672 64.209 47.9791 61.0209L52.2217 56.7783ZM49 49.0003C49 51.9176 50.1589 54.7154 52.2217 56.7783L47.9791 61.0209C44.791 57.8328 43 53.5088 43 49.0003H49ZM52.222 41.2219C50.1591 43.2848 49 46.0829 49 49.0003H43C43 44.4915 44.7913 40.1673 47.9793 36.9792L52.222 41.2219ZM60 38C57.0828 38 54.2848 39.159 52.222 41.2219L47.9793 36.9792C51.1673 33.7912 55.4914 32 60 32V38ZM67.778 41.2219C65.7152 39.159 62.9172 38 60 38V32C64.5086 32 68.8327 33.7912 72.0207 36.9792L67.778 41.2219ZM72.0207 36.9792C75.2087 40.1673 77 44.4915 77 49.0003H71C71 46.0829 69.8409 43.2848 67.778 41.2219L72.0207 36.9792Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 27.0001C20 25.1436 20.7376 23.363 22.0504 22.0503C23.3631 20.7376 25.1436 20 27 20C28.8565 20 30.637 20.7376 31.9497 22.0503C33.2624 23.363 34 25.1435 34 27V27.0001V49.0003C34 45.2872 32.5249 41.726 29.8993 39.1005C27.2739 36.4751 23.7129 35 20 35C16.2871 35 12.7261 36.4751 10.1007 39.1005C9.22795 39.9733 8.48232 40.9494 7.87573 42.0001C7.88816 41.9786 7.90065 41.9571 7.9132 41.9356L7.90698 41.9339L14.6723 30.8359C15.8595 28.8884 17.8061 27.5615 20.0015 27.142C20.0005 27.0948 20 27.0475 20 27.0001ZM33.9991 49.1622L34 49.1625V49.0003C34 49.0543 33.9997 49.1083 33.9991 49.1622Z"
            fill="#9B51E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.0002 27.0001C60.0002 25.1436 59.2626 23.363 57.9499 22.0503C56.6372 20.7376 54.8567 20 53.0002 20C51.1438 20 49.3633 20.7376 48.0506 22.0503C46.7379 23.363 46.0003 25.1435 46.0002 27V27.0001V49.0003C46.0002 45.2872 47.4754 41.726 50.1009 39.1005C52.7263 36.4751 56.2873 35 60.0002 35C63.7131 35 67.2741 36.4751 69.8996 39.1005C70.7723 39.9733 71.5179 40.9494 72.1245 42.0001C72.1121 41.9786 72.0996 41.9571 72.087 41.9356L72.0933 41.9339L65.328 30.8359C64.1407 28.8884 62.1941 27.5615 59.9988 27.142C59.9998 27.0948 60.0002 27.0475 60.0002 27.0001ZM46.0012 49.1622L46.0002 49.1625V49.0003C46.0002 49.0543 46.0005 49.1083 46.0012 49.1622Z"
            fill="#9B51E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.2426 24.7574C45.3677 25.8826 46 27.4087 46 29H46V43H46C46 41.4087 45.3677 39.8826 44.2426 38.7574C43.1174 37.6322 41.5912 37 40 37C38.4088 37 36.8826 37.6322 35.7574 38.7574C34.6369 39.8779 34.0052 41.3962 34 42.9804V29.0199L34 29.0001C34 27.4088 34.6322 25.8826 35.7574 24.7574C36.8826 23.6322 38.4088 23 40 23C41.5912 23 43.1174 23.6322 44.2426 24.7574Z"
            fill="#BB6BD9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46 43.0001C46 41.4088 45.3678 39.8826 44.2426 38.7574C43.1174 37.6322 41.5912 37 40 37C38.4088 37 36.8826 37.6322 35.7574 38.7574C34.6322 39.8826 34 41.4088 34 43.0001C34 44.5914 34.6321 46.1175 35.7573 47.2427C36.8825 48.3679 38.4087 49 40 49C41.5913 49 43.1175 48.3679 44.2427 47.2427C45.3679 46.1175 46 44.5914 46 43.0001Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 49.0003C6 45.2872 7.47516 41.726 10.1007 39.1005C12.7261 36.4751 16.2871 35 20 35C23.7129 35 27.2739 36.4751 29.8993 39.1005C32.5248 41.726 34 45.2872 34 49.0003C34 52.7132 32.525 56.2741 29.8996 58.8996C27.2741 61.525 23.7129 63 20 63C16.2871 63 12.7259 61.525 10.1004 58.8996C7.47496 56.2741 6 52.7132 6 49.0003Z"
            fill="#56CCF2"
          />
          <path
            d="M11.5146 57.4854C9.26426 55.235 8 52.1828 8 49.0003H4C4 53.2436 5.68567 57.3133 8.6862 60.3138L11.5146 57.4854ZM20 61C16.8174 61 13.765 59.7357 11.5146 57.4854L8.6862 60.3138C11.6868 63.3144 15.7567 65 20 65V61ZM28.4854 57.4854C26.235 59.7357 23.1826 61 20 61V65C24.2433 65 28.3132 63.3144 31.3138 60.3138L28.4854 57.4854ZM32 49.0003C32 52.1828 30.7357 55.235 28.4854 57.4854L31.3138 60.3138C34.3143 57.3133 36 53.2436 36 49.0003H32ZM28.4851 40.5147C30.7356 42.7652 32 45.8177 32 49.0003H36C36 44.7568 34.3141 40.6869 31.3135 37.6863L28.4851 40.5147ZM20 37C23.1824 37 26.2347 38.2644 28.4851 40.5147L31.3135 37.6863C28.3131 34.6858 24.2434 33 20 33V37ZM11.5149 40.5147C13.7653 38.2644 16.8176 37 20 37V33C15.7566 33 11.6869 34.6858 8.68645 37.6863L11.5149 40.5147ZM8.68645 37.6863C5.68589 40.6869 4 44.7568 4 49.0003H8C8 45.8177 9.26443 42.7652 11.5149 40.5147L8.68645 37.6863Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74 49.0003C74 45.2872 72.5248 41.726 69.8993 39.1005C67.2739 36.4751 63.7129 35 60 35C56.2871 35 52.7261 36.4751 50.1007 39.1005C47.4752 41.726 46 45.2872 46 49.0003C46 52.7132 47.475 56.2741 50.1004 58.8996C52.7259 61.525 56.2871 63 60 63C63.7129 63 67.2741 61.525 69.8996 58.8996C72.525 56.2741 74 52.7132 74 49.0003Z"
            fill="#56CCF2"
          />
          <path
            d="M68.4854 57.4854C70.7357 55.235 72 52.1828 72 49.0003H76C76 53.2436 74.3143 57.3133 71.3138 60.3138L68.4854 57.4854ZM60 61C63.1826 61 66.235 59.7357 68.4854 57.4854L71.3138 60.3138C68.3132 63.3144 64.2433 65 60 65V61ZM51.5146 57.4854C53.765 59.7357 56.8174 61 60 61V65C55.7567 65 51.6868 63.3144 48.6862 60.3138L51.5146 57.4854ZM48 49.0003C48 52.1828 49.2643 55.235 51.5146 57.4854L48.6862 60.3138C45.6857 57.3133 44 53.2436 44 49.0003H48ZM51.5149 40.5147C49.2644 42.7652 48 45.8177 48 49.0003H44C44 44.7568 45.6859 40.6869 48.6865 37.6863L51.5149 40.5147ZM60 37C56.8176 37 53.7653 38.2644 51.5149 40.5147L48.6865 37.6863C51.6869 34.6858 55.7566 33 60 33V37ZM68.4851 40.5147C66.2347 38.2644 63.1824 37 60 37V33C64.2434 33 68.3131 34.6858 71.3135 37.6863L68.4851 40.5147ZM71.3135 37.6863C74.3141 40.6869 76 44.7568 76 49.0003H72C72 45.8177 70.7356 42.7652 68.4851 40.5147L71.3135 37.6863Z"
            fill="#2F80ED"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M20 27.5001C20 25.6436 20.7376 23.863 22.0504 22.5503C23.3631 21.2376 25.1436 20.5 27 20.5C28.8565 20.5 30.637 21.2376 31.9497 22.5503C33.2624 23.863 34 25.6435 34 27.5V49.5003C34 45.7872 32.5249 42.226 29.8993 39.6005C27.2739 36.9751 23.7129 35.5 20 35.5C16.2871 35.5 12.7261 36.9751 10.1007 39.6005C9.24583 40.4554 8.51293 41.4094 7.9132 42.4356L7.90698 42.4339L14.6723 31.3359C15.8595 29.3884 17.8061 28.0615 20.0015 27.642C20.0005 27.5948 20 27.5475 20 27.5001Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M33.9991 49.6622L34 49.5003C34 49.5543 33.9997 49.6083 33.9991 49.6622Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60.0002 27.5001C60.0002 25.6436 59.2626 23.863 57.9499 22.5503C56.6372 21.2376 54.8567 20.5 53.0002 20.5C51.1438 20.5 49.3633 21.2376 48.0506 22.5503C46.7379 23.863 46.0003 25.6435 46.0002 27.5V49.5003C46.0002 45.7872 47.4754 42.226 50.1009 39.6005C52.7263 36.9751 56.2873 35.5 60.0002 35.5C63.7131 35.5 67.2741 36.9751 69.8996 39.6005C70.7544 40.4554 71.4873 41.4094 72.087 42.4356L72.0933 42.4339L65.328 31.3359C64.1407 29.3884 62.1941 28.0615 59.9988 27.642C59.9997 27.5948 60.0002 27.5475 60.0002 27.5001Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.0012 49.6622L46.0002 49.5003C46.0002 49.5543 46.0005 49.6083 46.0012 49.6622Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44.2426 25.2574C45.3677 26.3826 46 27.9087 46 29.5L46 43.5C46 41.9087 45.3677 40.3826 44.2426 39.2574C43.1174 38.1322 41.5912 37.5 40 37.5C38.4088 37.5 36.8826 38.1322 35.7574 39.2574C34.6369 40.3779 34.0052 41.8962 34 43.4804V29.5199L34 29.5001C34 27.9088 34.6322 26.3826 35.7574 25.2574C36.8826 24.1322 38.4088 23.5 40 23.5C41.5912 23.5 43.1174 24.1322 44.2426 25.2574Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46 43.5C46 41.9087 45.3677 40.3826 44.2426 39.2574C43.1174 38.1322 41.5912 37.5 40 37.5C38.4088 37.5 36.8826 38.1322 35.7574 39.2574C34.6322 40.3826 34 41.9088 34 43.5001C34 45.0914 34.6321 46.6175 35.7573 47.7427C36.8825 48.8679 38.4087 49.5 40 49.5C41.5913 49.5 43.1175 48.8679 44.2427 47.7427C45.3679 46.6175 46 45.0913 46 43.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M6 49.5003C6 45.7872 7.47517 42.226 10.1007 39.6005C12.7261 36.9751 16.2871 35.5 20 35.5C23.7129 35.5 27.2739 36.9751 29.8993 39.6005C32.5249 42.226 34 45.7872 34 49.5003C34 53.2132 32.525 56.7741 29.8996 59.3996C27.2741 62.025 23.7129 63.5 20 63.5C16.2871 63.5 12.7259 62.025 10.1004 59.3996C7.47496 56.7741 6 53.2132 6 49.5003Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M74 49.5003C74 45.7872 72.5251 42.226 69.8996 39.6005C67.2741 36.9751 63.7131 35.5 60.0002 35.5C56.2873 35.5 52.7263 36.9751 50.1009 39.6005C47.4754 42.226 46.0002 45.7872 46.0002 49.5003C46.0002 53.2132 47.475 56.7741 50.1004 59.3996C52.7259 62.025 56.2871 63.5 60 63.5C63.7129 63.5 67.2741 62.025 69.8996 59.3996C72.525 56.7741 74 53.2132 74 49.5003Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34 49.5003V27.5C34 25.6435 33.2624 23.863 31.9497 22.5503C30.637 21.2376 28.8565 20.5 27 20.5C25.1436 20.5 23.3631 21.2376 22.0504 22.5503C20.7376 23.863 20 25.6436 20 27.5001C20 27.5475 20.0005 27.5948 20.0015 27.642C17.8061 28.0615 15.8595 29.3884 14.6723 31.3359L7.90698 42.4339L7.9132 42.4356C8.51293 41.4094 9.24583 40.4554 10.1007 39.6005M34 49.5003C34 45.7872 32.5249 42.226 29.8993 39.6005C27.2739 36.9751 23.7129 35.5 20 35.5C16.2871 35.5 12.7261 36.9751 10.1007 39.6005M34 49.5003L33.9991 49.6622C33.9997 49.6083 34 49.5543 34 49.5003ZM34 49.5003C34 53.2132 32.525 56.7741 29.8996 59.3996C27.2741 62.025 23.7129 63.5 20 63.5C16.2871 63.5 12.7259 62.025 10.1004 59.3996C7.47496 56.7741 6 53.2132 6 49.5003C6 45.7872 7.47517 42.226 10.1007 39.6005M46.0002 49.5003V27.5C46.0003 25.6435 46.7379 23.863 48.0506 22.5503C49.3633 21.2376 51.1438 20.5 53.0002 20.5C54.8567 20.5 56.6372 21.2376 57.9499 22.5503C59.2626 23.863 60.0002 25.6436 60.0002 27.5001C60.0002 27.5475 59.9997 27.5948 59.9988 27.642C62.1941 28.0615 64.1407 29.3884 65.328 31.3359L72.0933 42.4339L72.087 42.4356C71.4873 41.4094 70.7544 40.4554 69.8996 39.6005M46.0002 49.5003C46.0002 45.7872 47.4754 42.226 50.1009 39.6005C52.7263 36.9751 56.2873 35.5 60.0002 35.5C63.7131 35.5 67.2741 36.9751 69.8996 39.6005M46.0002 49.5003L46.0012 49.6622C46.0005 49.6083 46.0002 49.5543 46.0002 49.5003ZM46.0002 49.5003C46.0002 53.2132 47.475 56.7741 50.1004 59.3996C52.7259 62.025 56.2871 63.5 60 63.5C63.7129 63.5 67.2741 62.025 69.8996 59.3996C72.525 56.7741 74 53.2132 74 49.5003C74 45.7872 72.5251 42.226 69.8996 39.6005M46 43.5L46 29.5C46 27.9087 45.3677 26.3826 44.2426 25.2574C43.1174 24.1322 41.5912 23.5 40 23.5C38.4088 23.5 36.8826 24.1322 35.7574 25.2574C34.6322 26.3826 34 27.9088 34 29.5001L34 29.5199V43.4804C34.0052 41.8962 34.6369 40.3779 35.7574 39.2574M46 43.5C46 41.9087 45.3677 40.3826 44.2426 39.2574C43.1174 38.1322 41.5912 37.5 40 37.5C38.4088 37.5 36.8826 38.1322 35.7574 39.2574M46 43.5C46 45.0913 45.3679 46.6175 44.2427 47.7427C43.1175 48.8679 41.5913 49.5 40 49.5C38.4087 49.5 36.8825 48.8679 35.7573 47.7427C34.6321 46.6175 34 45.0914 34 43.5001C34 41.9088 34.6322 40.3826 35.7574 39.2574"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M60 65C59.4696 65 58.942 64.9737 58.4189 64.9217C54.7561 64.5581 51.3117 62.9393 48.6862 60.3138C46.3496 57.9772 44.8104 54.9923 44.2436 51.7818C42.9814 52.5716 41.5127 53 40 53C38.4873 53 37.0186 52.5716 35.7564 51.7818C35.1896 54.9923 33.6504 57.9772 31.3138 60.3138C28.3132 63.3144 24.2433 65 20 65C15.7567 65 11.6868 63.3144 8.6862 60.3138C5.68567 57.3133 4 53.2436 4 49.0003C4 46.8096 4.4493 44.6653 5.29674 42.6905C5.31369 42.651 5.3308 42.6116 5.34807 42.5722L5.37408 42.5132C5.45437 42.3322 5.53802 42.1527 5.625 41.9747C5.77401 41.6698 5.93277 41.3695 6.10111 41.0743C6.13052 41.0125 6.16325 40.9519 6.19926 40.8929L12.9646 29.7949C14.1688 27.8195 15.9978 26.3551 18.1107 25.5929C18.406 23.7272 19.2837 21.9885 20.6361 20.6361C22.3239 18.9483 24.6131 18 27 18C29.3869 18 31.6761 18.9483 33.3639 20.6361C34.4039 21.6761 35.1632 22.9445 35.5928 24.3235C36.8908 23.4667 38.4213 23 40 23C41.5787 23 43.1094 23.4667 44.4074 24.3236C44.837 22.9446 45.5963 21.6761 46.6364 20.6361C48.3241 18.9483 50.6133 18 53.0002 18C55.3872 18 57.6764 18.9483 59.3641 20.6361C60.7166 21.9885 61.5942 23.7272 61.8896 25.5929C64.0024 26.3551 65.8315 27.8195 67.0357 29.7949L73.801 40.8929C73.837 40.9519 73.8697 41.0125 73.8991 41.0743C75.2641 43.4681 76.0002 46.1962 76.0002 49.0003C76.0002 53.2436 74.3146 57.3133 71.314 60.3138C68.753 62.8748 65.413 64.478 61.851 64.8927M60 65C60.6215 65 61.2397 64.9638 61.851 64.8927M60 65L61.851 64.8927M60.0002 61C60.4805 61 60.9579 60.9712 61.43 60.9146C64.0858 60.5959 66.5747 59.396 68.4854 57.4854C70.7357 55.235 72 52.1828 72 49.0003C72 45.8177 70.7356 42.7652 68.4851 40.5147C66.2347 38.2644 63.1824 37 60 37C56.8176 37 53.7653 38.2644 51.5149 40.5147C49.2825 42.7471 48.0204 45.7687 48.0002 48.9237V49.0768M60.0002 61C59.6025 61 59.2066 60.9802 58.8142 60.9413M60.0002 61L58.8142 60.9413M48.0002 49.0768C48.0003 49.0879 48.0004 49.099 48.0005 49.1101M48.0002 49.0768L48.0005 49.1101M48.0005 49.1101C48.0008 49.1198 48.0009 49.1295 48.001 49.1391C48.0372 52.2714 49.2973 55.2678 51.5149 57.4854C53.4839 59.4544 56.0671 60.6685 58.8142 60.9413M27 22C25.674 22 24.4022 22.5268 23.4646 23.4645C22.5269 24.4022 22 25.6741 22 27.0001C22 27.034 22.0003 27.0678 22.001 27.1016C22.0208 28.0765 21.3346 28.9235 20.3768 29.1065C18.7302 29.4211 17.2702 30.4165 16.38 31.8769L15.2569 33.7192C16.7791 33.2467 18.3769 33 20 33C24.2434 33 28.3131 34.6858 31.3135 37.6863C31.5506 37.9234 31.7795 38.1672 32 38.4172V27C32 25.674 31.4731 24.4022 30.5354 23.4645C29.5978 22.5268 28.326 22 27 22ZM48.0002 38.4169V27.0001C48.0003 25.6741 48.5271 24.4022 49.4648 23.4645C50.4025 22.5268 51.6743 22 53.0002 22C54.3262 22 55.598 22.5268 56.5357 23.4645C57.4734 24.4022 58.0002 25.6741 58.0002 27.0001C58.0002 27.034 57.9999 27.0678 57.9992 27.1016C57.9795 28.0765 58.6657 28.9235 59.6235 29.1065C61.2701 29.4211 62.73 30.4165 63.6203 31.8769L64.7434 33.7193C63.2211 33.2467 61.6232 33 60 33C55.7566 33 51.6869 34.6858 48.6865 37.6863C48.4495 37.9233 48.2207 38.167 48.0002 38.4169ZM32 49.0003C32 45.8177 30.7356 42.7652 28.4851 40.5147C26.2347 38.2644 23.1824 37 20 37C16.8176 37 13.7653 38.2644 11.5149 40.5147C10.7822 41.2475 10.154 42.0652 9.63991 42.9448C8.57502 44.7668 8 46.854 8 49.0003C8 52.1828 9.26426 55.235 11.5146 57.4854C13.765 59.7357 16.8174 61 20 61C23.1826 61 26.235 59.7357 28.4854 57.4854C28.7626 57.2082 29.0248 56.9188 29.2716 56.6185C30.9989 54.5166 31.9675 51.8799 31.9992 49.1391C31.9997 49.0929 32 49.0466 32 49.0003ZM37.1715 47.8285C36.4214 47.0784 36 46.061 36 45.0001L36 44.987C36.0035 43.9309 36.4246 42.9186 37.1717 42.1716C37.9218 41.4215 38.9392 41 40 41C41.0608 41 42.0782 41.4215 42.8283 42.1716C43.5785 42.9217 44 43.9393 44 45.0001C44 46.061 43.5786 47.0784 42.8285 47.8285C42.0784 48.5785 41.0609 49 40 49C38.9391 49 37.9216 48.5785 37.1715 47.8285ZM44 38.0719C42.7942 37.3757 41.4165 37 40 37C38.5836 37 37.2058 37.3757 36 38.0718L36 31.0199L36 31.0001V30.9987C36.0004 29.9384 36.4218 28.9214 37.1717 28.1716C37.9218 27.4215 38.9392 27 40 27C41.0608 27 42.0782 27.4215 42.8283 28.1716C43.5785 28.9217 44 29.9392 44 31L44 38.0719Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-binoculars', CoreBinoculars)
export default CoreBinoculars
