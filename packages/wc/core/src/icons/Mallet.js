
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreMallet = {
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
            d="M35.4686 34.1465L34.2104 70.0038C34.0954 73.2809 36.7209 76.0001 40 76.0001C43.2791 76.0001 45.9046 73.2809 45.7896 70.0038L44.5315 34.1465"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M60 29.9159C59.0307 30.3696 58.0449 30.7907 57.0444 31.1783C51.6085 33.2842 45.8295 34.3644 40 34.3644C34.1705 34.3644 28.3915 33.2842 22.9556 31.1783C21.9551 30.7907 20.9693 30.3696 20 29.9159V8.44855C20.9693 7.99489 21.9551 7.57376 22.9556 7.18614C28.3915 5.08029 34.1705 4 40 4C45.8295 4 51.6085 5.08029 57.0444 7.18614C58.0449 7.57376 59.0307 7.99489 60 8.44855V29.9159Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.4686 34.1465L34.2104 70.0038C34.0954 73.2809 36.7209 76.0001 40 76.0001C43.2791 76.0001 45.9046 73.2809 45.7896 70.0038L44.5315 34.1465C43.0278 34.2916 41.5156 34.3646 40 34.3646C38.4844 34.3646 36.9722 34.2916 35.4686 34.1465Z"
            fill="currentColor"
          />
          <path
            d="M34.2104 70.0038L32.2117 69.9337L34.2104 70.0038ZM35.4686 34.1465L35.6607 32.1557C35.1116 32.1027 34.565 32.2789 34.1502 32.6426C33.7353 33.0062 33.4892 33.525 33.4698 34.0764L35.4686 34.1465ZM45.7896 70.0038L43.7909 70.074L45.7896 70.0038ZM44.5315 34.1465L46.5302 34.0764C46.5109 33.525 46.2647 33.0062 45.8499 32.6426C45.4351 32.2789 44.8885 32.1027 44.3394 32.1557L44.5315 34.1465ZM36.2092 70.074L37.4673 34.2166L33.4698 34.0764L32.2117 69.9337L36.2092 70.074ZM40 74.0001C37.853 74.0001 36.1339 72.2197 36.2092 70.074L32.2117 69.9337C32.057 74.3422 35.5888 78.0001 40 78.0001V74.0001ZM43.7909 70.074C43.8661 72.2197 42.1471 74.0001 40 74.0001V78.0001C44.4112 78.0001 47.9431 74.3422 47.7884 69.9337L43.7909 70.074ZM42.5327 34.2166L43.7909 70.074L47.7884 69.9337L46.5302 34.0764L42.5327 34.2166ZM44.3394 32.1557C42.8995 32.2947 41.4514 32.3646 40 32.3646V36.3646C41.5799 36.3646 43.1562 36.2885 44.7236 36.1372L44.3394 32.1557ZM40 32.3646C38.5487 32.3646 37.1006 32.2947 35.6607 32.1557L35.2765 36.1372C36.8439 36.2885 38.4202 36.3646 40 36.3646V32.3646Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60 29.9159C59.0307 30.3696 58.0449 30.7907 57.0444 31.1783C51.6085 33.2842 45.8295 34.3644 40 34.3644C34.1705 34.3644 28.3915 33.2842 22.9556 31.1783C21.9551 30.7907 20.9693 30.3696 20 29.9159V8.44855C20.9693 7.99489 21.9551 7.57376 22.9556 7.18614C28.3915 5.08029 34.1705 4 40 4C45.8295 4 51.6085 5.08029 57.0444 7.18614C58.0449 7.57376 59.0307 7.99489 60 8.44855V29.9159Z"
            fill="currentColor"
          />
          <path
            d="M60 29.9159L60.8478 31.7273C61.5508 31.3983 62 30.6921 62 29.9159H60ZM57.0444 31.1783L56.3219 29.3134H56.3219L57.0444 31.1783ZM22.9556 31.1783L23.6781 29.3134H23.6781L22.9556 31.1783ZM20 29.9159H18C18 30.6921 18.4492 31.3983 19.1522 31.7273L20 29.9159ZM20 8.44855L19.1522 6.63712C18.4492 6.96616 18 7.6723 18 8.44855H20ZM22.9556 7.18614L22.2332 5.3212L22.9556 7.18614ZM57.0444 7.18614L57.7668 5.32119V5.32119L57.0444 7.18614ZM60 8.44855H62C62 7.6723 61.5508 6.96616 60.8478 6.63712L60 8.44855ZM59.1522 28.1045C58.224 28.5389 57.28 28.9422 56.3219 29.3134L57.7668 33.0432C58.8098 32.6392 59.8373 32.2002 60.8478 31.7273L59.1522 28.1045ZM56.3219 29.3134C51.1164 31.3299 45.5824 32.3644 40 32.3644V36.3644C46.0766 36.3644 52.1006 35.2384 57.7668 33.0432L56.3219 29.3134ZM40 32.3644C34.4176 32.3644 28.8835 31.3299 23.6781 29.3134L22.2332 33.0432C27.8994 35.2384 33.9234 36.3644 40 36.3644V32.3644ZM23.6781 29.3134C22.72 28.9422 21.776 28.5389 20.8478 28.1045L19.1522 31.7273C20.1627 32.2002 21.1902 32.6392 22.2332 33.0432L23.6781 29.3134ZM22 29.9159V8.44855H18V29.9159H22ZM20.8478 10.26C21.776 9.82555 22.72 9.42227 23.6781 9.05108L22.2332 5.3212C21.1902 5.72524 20.1627 6.16422 19.1522 6.63712L20.8478 10.26ZM23.6781 9.05108C28.8835 7.03449 34.4176 6 40 6V2C33.9234 2 27.8994 3.12608 22.2332 5.3212L23.6781 9.05108ZM40 6C45.5824 6 51.1164 7.03449 56.3219 9.05108L57.7668 5.32119C52.1006 3.12608 46.0766 2 40 2V6ZM56.3219 9.05108C57.28 9.42227 58.224 9.82555 59.1522 10.26L60.8478 6.63712C59.8373 6.16422 58.8098 5.72524 57.7668 5.32119L56.3219 9.05108ZM58 8.44855V29.9159H62V8.44855H58Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.4686 34.1465L34.2104 70.0038C34.0954 73.2809 36.7209 76.0001 40 76.0001C43.2791 76.0001 45.9046 73.2809 45.7896 70.0038L44.5315 34.1465C43.0278 34.2916 41.5156 34.3646 40 34.3646C38.4844 34.3646 36.9722 34.2916 35.4686 34.1465Z"
            fill="#F2994A"
          />
          <path
            d="M34.2104 70.0038L36.2092 70.074L34.2104 70.0038ZM35.4686 34.1465L35.6607 32.1557C35.1116 32.1027 34.565 32.2789 34.1502 32.6426C33.7353 33.0062 33.4892 33.525 33.4698 34.0764L35.4686 34.1465ZM45.7896 70.0038L47.7884 69.9337L45.7896 70.0038ZM44.5315 34.1465L46.5302 34.0764C46.5109 33.525 46.2647 33.0062 45.8499 32.6426C45.4351 32.2789 44.8885 32.1027 44.3394 32.1557L44.5315 34.1465ZM36.2092 70.074L37.4673 34.2166L33.4698 34.0764L32.2117 69.9337L36.2092 70.074ZM40 74.0001C37.853 74.0001 36.1339 72.2197 36.2092 70.074L32.2117 69.9337C32.057 74.3422 35.5888 78.0001 40 78.0001V74.0001ZM43.7909 70.074C43.8662 72.2197 42.1471 74.0001 40 74.0001V78.0001C44.4112 78.0001 47.9431 74.3422 47.7884 69.9337L43.7909 70.074ZM42.5327 34.2166L43.7909 70.074L47.7884 69.9337L46.5302 34.0764L42.5327 34.2166ZM44.3394 32.1557C42.8995 32.2947 41.4514 32.3646 40 32.3646V36.3646C41.5799 36.3646 43.1562 36.2885 44.7236 36.1372L44.3394 32.1557ZM40 32.3646C38.5487 32.3646 37.1006 32.2947 35.6607 32.1557L35.2765 36.1372C36.8439 36.2885 38.4202 36.3646 40 36.3646V32.3646Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60 29.9159C59.0307 30.3696 58.0449 30.7907 57.0444 31.1783C51.6085 33.2842 45.8295 34.3644 40 34.3644C34.1705 34.3644 28.3915 33.2842 22.9556 31.1783C21.9551 30.7907 20.9693 30.3696 20 29.9159V8.44855C20.9693 7.99489 21.9551 7.57376 22.9556 7.18614C28.3915 5.08028 34.1705 4 40 4C45.8295 4 51.6085 5.08028 57.0444 7.18614C58.0449 7.57376 59.0307 7.99489 60 8.44855V29.9159Z"
            fill="#EB5757"
          />
          <path
            d="M60 29.9159L60.8478 31.7273C61.5508 31.3983 62 30.6921 62 29.9159H60ZM57.0444 31.1783L56.3219 29.3134H56.3219L57.0444 31.1783ZM22.9556 31.1783L23.6781 29.3134H23.6781L22.9556 31.1783ZM20 29.9159H18C18 30.6921 18.4492 31.3983 19.1522 31.7273L20 29.9159ZM20 8.44855L19.1522 6.63712C18.4492 6.96616 18 7.6723 18 8.44855H20ZM22.9556 7.18614L23.6781 9.05109H23.6781L22.9556 7.18614ZM57.0444 7.18614L56.3219 9.05109L57.0444 7.18614ZM60 8.44855H62C62 7.6723 61.5508 6.96616 60.8478 6.63712L60 8.44855ZM59.1522 28.1045C58.224 28.5389 57.28 28.9422 56.3219 29.3134L57.7668 33.0432C58.8098 32.6392 59.8373 32.2002 60.8478 31.7273L59.1522 28.1045ZM56.3219 29.3134C51.1165 31.3299 45.5824 32.3644 40 32.3644V36.3644C46.0766 36.3644 52.1006 35.2384 57.7668 33.0432L56.3219 29.3134ZM40 32.3644C34.4176 32.3644 28.8835 31.3299 23.6781 29.3134L22.2332 33.0432C27.8994 35.2384 33.9234 36.3644 40 36.3644V32.3644ZM23.6781 29.3134C22.72 28.9422 21.776 28.5389 20.8478 28.1045L19.1522 31.7273C20.1627 32.2002 21.1902 32.6392 22.2332 33.0432L23.6781 29.3134ZM22 29.9159V8.44855H18V29.9159H22ZM20.8478 10.26C21.776 9.82555 22.72 9.42227 23.6781 9.05109L22.2332 5.3212C21.1902 5.72524 20.1627 6.16423 19.1522 6.63712L20.8478 10.26ZM23.6781 9.05109C28.8835 7.03449 34.4176 6 40 6V2C33.9234 2 27.8994 3.12608 22.2332 5.3212L23.6781 9.05109ZM40 6C45.5824 6 51.1165 7.03449 56.3219 9.05109L57.7668 5.3212C52.1006 3.12608 46.0766 2 40 2V6ZM56.3219 9.05109C57.28 9.42227 58.224 9.82555 59.1522 10.26L60.8478 6.63712C59.8373 6.16423 58.8098 5.72525 57.7668 5.3212L56.3219 9.05109ZM58 8.44855V29.9159H62V8.44855H58Z"
            fill="#EB5757"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M35.4686 34.1465L34.2104 70.0038C34.0954 73.2809 36.7209 76.0001 40 76.0001C43.2791 76.0001 45.9046 73.2809 45.7896 70.0038L44.5315 34.1465C43.0278 34.2916 41.5156 34.3646 40 34.3646C38.4844 34.3646 36.9722 34.2916 35.4686 34.1465Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60 29.9159C59.0307 30.3696 58.0449 30.7907 57.0444 31.1783C51.6085 33.2842 45.8295 34.3646 40 34.3646C34.1705 34.3646 28.3915 33.2842 22.9556 31.1783C21.9551 30.7907 20.9693 30.3696 20 29.9159V8.44855C20.9693 7.99489 21.9551 7.57376 22.9556 7.18614C28.3915 5.08029 34.1705 4 40 4C45.8295 4 51.6085 5.08029 57.0444 7.18614C58.0449 7.57376 59.0307 7.99489 60 8.44855V29.9159Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 34.3646C41.5156 34.3646 43.0278 34.2916 44.5315 34.1465L45.7896 70.0038C45.9046 73.2809 43.2791 76.0001 40 76.0001C36.7209 76.0001 34.0954 73.2809 34.2104 70.0038L35.4686 34.1465C36.9722 34.2916 38.4844 34.3646 40 34.3646ZM40 34.3646C45.8295 34.3646 51.6085 33.2842 57.0444 31.1783C58.0449 30.7907 59.0307 30.3696 60 29.9159V8.44855C59.0307 7.99489 58.0449 7.57376 57.0444 7.18614C51.6085 5.08029 45.8295 4 40 4C34.1705 4 28.3915 5.08029 22.9556 7.18614C21.9551 7.57376 20.9693 7.99489 20 8.44855V29.9159C20.9693 30.3696 21.9551 30.7907 22.9556 31.1783C28.3915 33.2842 34.1705 34.3646 40 34.3646Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 2C33.9234 2 27.8994 3.12608 22.2332 5.3212C21.1902 5.72524 20.1627 6.16422 19.1522 6.63712C18.4492 6.96616 18 7.6723 18 8.44855V29.9159C18 30.6921 18.4492 31.3983 19.1522 31.7273C20.1627 32.2002 21.1902 32.6392 22.2332 33.0432C25.8385 34.44 29.5887 35.4039 33.4051 35.9203L32.2117 69.9337C32.057 74.3422 35.5888 78.0001 40 78.0001C44.4112 78.0001 47.9431 74.3422 47.7884 69.9337L46.5949 35.9203C50.4113 35.4039 54.1615 34.44 57.7668 33.0432C58.8098 32.6392 59.8373 32.2002 60.8478 31.7273C61.5508 31.3983 62 30.6921 62 29.9159V8.44855C62 7.6723 61.5508 6.96616 60.8478 6.63712C59.8373 6.16422 58.8098 5.72524 57.7668 5.32119C52.1006 3.12608 46.0766 2 40 2ZM23.6781 9.05108C28.8835 7.03449 34.4176 6 40 6C45.5824 6 51.1164 7.03449 56.3219 9.05108C56.8863 9.26973 57.4458 9.49952 58 9.74025V28.6242C57.4458 28.8649 56.8863 29.0947 56.3219 29.3134C51.1164 31.3299 45.5824 32.3644 40 32.3644C34.4176 32.3644 28.8835 31.3299 23.6781 29.3134C23.1137 29.0947 22.5542 28.8649 22 28.6242V9.74025C22.5542 9.49952 23.1137 9.26974 23.6781 9.05108ZM36.2092 70.074L37.3944 36.2955C38.2613 36.3415 39.1301 36.3646 40 36.3646C40.8699 36.3646 41.7388 36.3415 42.6057 36.2955L43.7909 70.074C43.8661 72.2197 42.1471 74.0001 40 74.0001C37.853 74.0001 36.1339 72.2197 36.2092 70.074Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-mallet', CoreMallet)
export default CoreMallet