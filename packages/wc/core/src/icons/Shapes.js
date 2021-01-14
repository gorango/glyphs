
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreShapes = {
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
            d="M32.9966 23C32.9966 29.6274 27.624 35 20.9966 35C14.3692 35 8.99658 29.6274 8.99658 23C8.99658 16.3726 14.3692 11 20.9966 11C27.624 11 32.9966 16.3726 32.9966 23Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M47.0972 13.1724L66.8962 32.9713"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M66.8962 13.1724L47.0972 32.9713"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M32.5178 56.1374C33.1784 56.5227 33.1784 57.4772 32.5178 57.8626L11.4984 70.1239C10.8327 70.5123 9.99658 70.0321 9.99658 69.2613L9.99658 44.7387C9.99658 43.9679 10.8327 43.4877 11.4984 43.8761L32.5178 56.1374Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M44.9966 46C44.9966 45.4477 45.4443 45 45.9966 45H67.9966C68.5489 45 68.9966 45.4477 68.9966 46V68C68.9966 68.5523 68.5489 69 67.9966 69H45.9966C45.4443 69 44.9966 68.5523 44.9966 68V46Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M21 11L22.3436 11.0755L23.6703 11.3009L24.9634 11.6734L26.2066 12.1884L27.3844 12.8393L28.4819 13.618L29.4853 14.5147L30.382 15.5181L31.1607 16.6156L31.8116 17.7934L32.3266 19.0367L32.6991 20.3298L32.9245 21.6564L33 23L32.9245 24.3436L32.6991 25.6703L32.3266 26.9634L31.8116 28.2066L31.1607 29.3844L30.382 30.4819L29.4853 31.4853L28.4819 32.382L27.3844 33.1607L26.2066 33.8116L24.9634 34.3266L23.6703 34.6991L22.3436 34.9245L21 35L19.6564 34.9245L18.3298 34.6991L17.0367 34.3266L15.7934 33.8116L14.6156 33.1607L13.5181 32.382L12.5147 31.4853L11.618 30.4819L10.8393 29.3844L10.1884 28.2066L9.6734 26.9634L9.30087 25.6703L9.07545 24.3436L9 23L9.07545 21.6564L9.30087 20.3298L9.6734 19.0367L10.1884 17.7934L10.8393 16.6156L11.618 15.5181L12.5147 14.5147L13.5181 13.618L14.6156 12.8393L15.7934 12.1884L17.0367 11.6734L18.3298 11.3009L19.6564 11.0755L21 11Z"
            fill="currentColor"
          />
          <path
            d="M21 11L21.1121 9.00315C21.0374 8.99895 20.9626 8.99895 20.8879 9.00315L21 11ZM22.3436 11.0755L22.6786 9.10371C22.6048 9.09118 22.5304 9.0828 22.4557 9.0786L22.3436 11.0755ZM23.6703 11.3009L24.2239 9.37903C24.152 9.35832 24.079 9.34166 24.0053 9.32912L23.6703 11.3009ZM24.9634 11.6734L25.7287 9.82564C25.6596 9.79701 25.5889 9.77228 25.517 9.75157L24.9634 11.6734ZM26.2066 12.1884L27.174 10.4379C27.1086 10.4017 27.0411 10.3692 26.972 10.3406L26.2066 12.1884ZM27.3844 12.8393L28.5417 11.2082C28.4807 11.1649 28.4173 11.1251 28.3518 11.0889L27.3844 12.8393ZM28.4819 13.618L29.8146 12.1267C29.7588 12.0769 29.7002 12.0302 29.6392 11.9869L28.4819 13.618ZM29.4853 14.5147L30.9766 13.182C30.9267 13.1262 30.8738 13.0733 30.818 13.0234L29.4853 14.5147ZM30.382 15.5181L32.0131 14.3608C31.9698 14.2998 31.9231 14.2412 31.8733 14.1854L30.382 15.5181ZM31.1607 16.6156L32.9111 15.6482C32.8749 15.5827 32.8351 15.5193 32.7918 15.4583L31.1607 16.6156ZM31.8116 17.7934L33.6594 17.028C33.6308 16.9589 33.5983 16.8914 33.5621 16.826L31.8116 17.7934ZM32.3266 19.0367L34.2484 18.483C34.2277 18.4111 34.203 18.3404 34.1744 18.2713L32.3266 19.0367ZM32.6991 20.3298L34.6709 19.9947C34.6583 19.921 34.6417 19.848 34.621 19.7761L32.6991 20.3298ZM32.9245 21.6564L34.9214 21.5443C34.9172 21.4696 34.9088 21.3952 34.8963 21.3214L32.9245 21.6564ZM33 23L34.9969 23.1121C35.0011 23.0374 35.0011 22.9626 34.9969 22.8879L33 23ZM32.9245 24.3436L34.8963 24.6786C34.9088 24.6048 34.9172 24.5304 34.9214 24.4557L32.9245 24.3436ZM32.6991 25.6703L34.621 26.2239C34.6417 26.152 34.6583 26.079 34.6709 26.0053L32.6991 25.6703ZM32.3266 26.9634L34.1744 27.7287C34.203 27.6596 34.2277 27.5889 34.2484 27.517L32.3266 26.9634ZM31.8116 28.2066L33.5621 29.174C33.5983 29.1086 33.6308 29.0411 33.6594 28.972L31.8116 28.2066ZM31.1607 29.3844L32.7918 30.5417C32.8351 30.4807 32.8749 30.4173 32.9111 30.3518L31.1607 29.3844ZM30.382 30.4819L31.8733 31.8146C31.9231 31.7588 31.9698 31.7002 32.0131 31.6392L30.382 30.4819ZM29.4853 31.4853L30.818 32.9766C30.8738 32.9267 30.9267 32.8738 30.9766 32.818L29.4853 31.4853ZM28.4819 32.382L29.6392 34.0131C29.7002 33.9698 29.7588 33.9231 29.8146 33.8733L28.4819 32.382ZM27.3844 33.1607L28.3518 34.9111C28.4173 34.8749 28.4807 34.8351 28.5417 34.7918L27.3844 33.1607ZM26.2066 33.8116L26.972 35.6594C27.0411 35.6308 27.1086 35.5983 27.174 35.5621L26.2066 33.8116ZM24.9634 34.3266L25.517 36.2484C25.5889 36.2277 25.6596 36.203 25.7287 36.1744L24.9634 34.3266ZM23.6703 34.6991L24.0053 36.6709C24.079 36.6583 24.152 36.6417 24.2239 36.621L23.6703 34.6991ZM22.3436 34.9245L22.4557 36.9214C22.5304 36.9172 22.6048 36.9088 22.6786 36.8963L22.3436 34.9245ZM21 35L20.8879 36.9969C20.9626 37.0011 21.0374 37.0011 21.1121 36.9969L21 35ZM19.6564 34.9245L19.3214 36.8963C19.3952 36.9088 19.4696 36.9172 19.5443 36.9214L19.6564 34.9245ZM18.3298 34.6991L17.7761 36.621C17.848 36.6417 17.921 36.6583 17.9947 36.6709L18.3298 34.6991ZM17.0367 34.3266L16.2713 36.1744C16.3404 36.203 16.4111 36.2277 16.483 36.2484L17.0367 34.3266ZM15.7934 33.8116L14.826 35.5621C14.8914 35.5983 14.9589 35.6308 15.028 35.6594L15.7934 33.8116ZM14.6156 33.1607L13.4583 34.7918C13.5193 34.8351 13.5827 34.8749 13.6482 34.9111L14.6156 33.1607ZM13.5181 32.382L12.1854 33.8733C12.2412 33.9231 12.2998 33.9698 12.3608 34.0131L13.5181 32.382ZM12.5147 31.4853L11.0234 32.818C11.0733 32.8738 11.1262 32.9267 11.182 32.9766L12.5147 31.4853ZM11.618 30.4819L9.9869 31.6392C10.0302 31.7002 10.0769 31.7588 10.1267 31.8146L11.618 30.4819ZM10.8393 29.3844L9.08886 30.3518C9.12505 30.4173 9.16489 30.4807 9.20819 30.5417L10.8393 29.3844ZM10.1884 28.2066L8.34061 28.972C8.36925 29.0411 8.40174 29.1086 8.43793 29.174L10.1884 28.2066ZM9.6734 26.9634L7.75157 27.517C7.77228 27.5889 7.79701 27.6596 7.82564 27.7287L9.6734 26.9634ZM9.30087 25.6703L7.32912 26.0053C7.34166 26.079 7.35832 26.152 7.37903 26.2239L9.30087 25.6703ZM9.07545 24.3436L7.0786 24.4557C7.0828 24.5304 7.09118 24.6048 7.10371 24.6786L9.07545 24.3436ZM9 23L7.00315 22.8879C6.99895 22.9626 6.99895 23.0374 7.00315 23.1121L9 23ZM9.07545 21.6564L7.10371 21.3214C7.09118 21.3952 7.0828 21.4696 7.0786 21.5443L9.07545 21.6564ZM9.30087 20.3298L7.37903 19.7761C7.35832 19.848 7.34166 19.921 7.32912 19.9947L9.30087 20.3298ZM9.6734 19.0367L7.82564 18.2713C7.79701 18.3404 7.77228 18.4111 7.75157 18.483L9.6734 19.0367ZM10.1884 17.7934L8.43793 16.826C8.40174 16.8914 8.36925 16.9589 8.34061 17.028L10.1884 17.7934ZM10.8393 16.6156L9.20819 15.4583C9.16489 15.5193 9.12505 15.5827 9.08886 15.6482L10.8393 16.6156ZM11.618 15.5181L10.1267 14.1854C10.0769 14.2412 10.0302 14.2998 9.9869 14.3608L11.618 15.5181ZM12.5147 14.5147L11.182 13.0234C11.1262 13.0733 11.0733 13.1262 11.0234 13.182L12.5147 14.5147ZM13.5181 13.618L12.3608 11.9869C12.2998 12.0302 12.2412 12.0769 12.1854 12.1267L13.5181 13.618ZM14.6156 12.8393L13.6482 11.0889C13.5827 11.1251 13.5193 11.1649 13.4583 11.2082L14.6156 12.8393ZM15.7934 12.1884L15.028 10.3406C14.9589 10.3692 14.8914 10.4017 14.826 10.4379L15.7934 12.1884ZM17.0367 11.6734L16.483 9.75157C16.4111 9.77228 16.3404 9.79701 16.2713 9.82564L17.0367 11.6734ZM18.3298 11.3009L17.9947 9.32912C17.921 9.34166 17.848 9.35832 17.7761 9.37903L18.3298 11.3009ZM19.6564 11.0755L19.5443 9.0786C19.4696 9.0828 19.3952 9.09118 19.3214 9.10371L19.6564 11.0755ZM20.8879 12.9969L22.2314 13.0723L22.4557 9.0786L21.1121 9.00315L20.8879 12.9969ZM22.0086 13.0472L23.3352 13.2726L24.0053 9.32912L22.6786 9.10371L22.0086 13.0472ZM23.1166 13.2227L24.4097 13.5952L25.517 9.75157L24.2239 9.37903L23.1166 13.2227ZM24.198 13.5212L25.4412 14.0361L26.972 10.3406L25.7287 9.82564L24.198 13.5212ZM25.2392 13.9388L26.4169 14.5898L28.3518 11.0889L27.174 10.4379L25.2392 13.9388ZM26.227 14.4704L27.3245 15.2491L29.6392 11.9869L28.5417 11.2082L26.227 14.4704ZM27.1492 15.1093L28.1526 16.006L30.818 13.0234L29.8146 12.1267L27.1492 15.1093ZM27.994 15.8474L28.8907 16.8508L31.8733 14.1854L30.9766 13.182L27.994 15.8474ZM28.7509 16.6755L29.5296 17.773L32.7918 15.4583L32.0131 14.3608L28.7509 16.6755ZM29.4102 17.5831L30.0612 18.7608L33.5621 16.826L32.9111 15.6482L29.4102 17.5831ZM29.9639 18.5588L30.4788 19.802L34.1744 18.2713L33.6594 17.028L29.9639 18.5588ZM30.4048 19.5903L30.7773 20.8834L34.621 19.7761L34.2484 18.483L30.4048 19.5903ZM30.7274 20.6648L30.9528 21.9914L34.8963 21.3214L34.6709 19.9947L30.7274 20.6648ZM30.9277 21.7686L31.0031 23.1121L34.9969 22.8879L34.9214 21.5443L30.9277 21.7686ZM31.0031 22.8879L30.9277 24.2314L34.9214 24.4557L34.9969 23.1121L31.0031 22.8879ZM30.9528 24.0086L30.7274 25.3352L34.6709 26.0053L34.8963 24.6786L30.9528 24.0086ZM30.7773 25.1166L30.4048 26.4097L34.2484 27.517L34.621 26.2239L30.7773 25.1166ZM30.4788 26.198L29.9639 27.4412L33.6594 28.972L34.1744 27.7287L30.4788 26.198ZM30.0612 27.2392L29.4102 28.4169L32.9111 30.3518L33.5621 29.174L30.0612 27.2392ZM29.5296 28.227L28.7509 29.3245L32.0131 31.6392L32.7918 30.5417L29.5296 28.227ZM28.8907 29.1492L27.994 30.1526L30.9766 32.818L31.8733 31.8146L28.8907 29.1492ZM28.1526 29.994L27.1492 30.8907L29.8146 33.8733L30.818 32.9766L28.1526 29.994ZM27.3245 30.7509L26.227 31.5296L28.5417 34.7918L29.6392 34.0131L27.3245 30.7509ZM26.4169 31.4102L25.2392 32.0612L27.174 35.5621L28.3518 34.9111L26.4169 31.4102ZM25.4412 31.9639L24.198 32.4788L25.7287 36.1744L26.972 35.6594L25.4412 31.9639ZM24.4097 32.4048L23.1166 32.7773L24.2239 36.621L25.517 36.2484L24.4097 32.4048ZM23.3352 32.7274L22.0086 32.9528L22.6786 36.8963L24.0053 36.6709L23.3352 32.7274ZM22.2314 32.9277L20.8879 33.0031L21.1121 36.9969L22.4557 36.9214L22.2314 32.9277ZM21.1121 33.0031L19.7686 32.9277L19.5443 36.9214L20.8879 36.9969L21.1121 33.0031ZM19.9914 32.9528L18.6648 32.7274L17.9947 36.6709L19.3214 36.8963L19.9914 32.9528ZM18.8834 32.7773L17.5903 32.4048L16.483 36.2484L17.7761 36.621L18.8834 32.7773ZM17.802 32.4788L16.5588 31.9639L15.028 35.6594L16.2713 36.1744L17.802 32.4788ZM16.7608 32.0612L15.5831 31.4102L13.6482 34.9111L14.826 35.5621L16.7608 32.0612ZM15.773 31.5296L14.6755 30.7509L12.3608 34.0131L13.4583 34.7918L15.773 31.5296ZM14.8508 30.8907L13.8474 29.994L11.182 32.9766L12.1854 33.8733L14.8508 30.8907ZM14.006 30.1526L13.1093 29.1492L10.1267 31.8146L11.0234 32.818L14.006 30.1526ZM13.2491 29.3245L12.4704 28.227L9.20819 30.5417L9.9869 31.6392L13.2491 29.3245ZM12.5898 28.4169L11.9388 27.2392L8.43793 29.174L9.08886 30.3518L12.5898 28.4169ZM12.0361 27.4412L11.5212 26.198L7.82564 27.7287L8.34061 28.972L12.0361 27.4412ZM11.5952 26.4097L11.2227 25.1166L7.37903 26.2239L7.75157 27.517L11.5952 26.4097ZM11.2726 25.3352L11.0472 24.0086L7.10371 24.6786L7.32912 26.0053L11.2726 25.3352ZM11.0723 24.2314L10.9969 22.8879L7.00315 23.1121L7.0786 24.4557L11.0723 24.2314ZM10.9969 23.1121L11.0723 21.7686L7.0786 21.5443L7.00315 22.8879L10.9969 23.1121ZM11.0472 21.9914L11.2726 20.6648L7.32912 19.9947L7.10371 21.3214L11.0472 21.9914ZM11.2227 20.8834L11.5952 19.5903L7.75157 18.483L7.37903 19.7761L11.2227 20.8834ZM11.5212 19.802L12.0361 18.5588L8.34061 17.028L7.82564 18.2713L11.5212 19.802ZM11.9388 18.7608L12.5898 17.5831L9.08886 15.6482L8.43793 16.826L11.9388 18.7608ZM12.4704 17.773L13.2491 16.6755L9.9869 14.3608L9.20819 15.4583L12.4704 17.773ZM13.1093 16.8508L14.006 15.8474L11.0234 13.182L10.1267 14.1854L13.1093 16.8508ZM13.8474 16.006L14.8508 15.1093L12.1854 12.1267L11.182 13.0234L13.8474 16.006ZM14.6755 15.2491L15.773 14.4704L13.4583 11.2082L12.3608 11.9869L14.6755 15.2491ZM15.5831 14.5898L16.7608 13.9388L14.826 10.4379L13.6482 11.0889L15.5831 14.5898ZM16.5588 14.0361L17.802 13.5212L16.2713 9.82564L15.028 10.3406L16.5588 14.0361ZM17.5903 13.5952L18.8834 13.2227L17.7761 9.37903L16.483 9.75157L17.5903 13.5952ZM18.6648 13.2726L19.9914 13.0472L19.3214 9.10371L17.9947 9.32912L18.6648 13.2726ZM19.7686 13.0723L21.1121 12.9969L20.8879 9.00315L19.5443 9.0786L19.7686 13.0723Z"
            fill="currentColor"
          />
          <path
            d="M47.1003 13.1722L56.0999 22.1717L57.8998 23.9716L66.8993 32.9712"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M66.8997 13.1722L57.9001 22.1717L56.1002 23.9716L47.1007 32.9712"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M32.5212 56.1374C33.1819 56.5227 33.1818 57.4773 32.5212 57.8626L11.5018 70.1239C10.8361 70.5123 10 70.0321 10 69.2613L10 44.7387C10 43.9679 10.8361 43.4877 11.5018 43.8761L32.5212 56.1374Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <rect
            x="45"
            y="45"
            width="24"
            height="24"
            rx="1"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M21 11L22.3436 11.0755L23.6703 11.3009L24.9634 11.6734L26.2066 12.1884L27.3844 12.8393L28.4819 13.618L29.4853 14.5147L30.382 15.5181L31.1607 16.6156L31.8116 17.7934L32.3266 19.0367L32.6991 20.3298L32.9245 21.6564L33 23L32.9245 24.3436L32.6991 25.6703L32.3266 26.9634L31.8116 28.2066L31.1607 29.3844L30.382 30.4819L29.4853 31.4853L28.4819 32.382L27.3844 33.1607L26.2066 33.8116L24.9634 34.3266L23.6703 34.6991L22.3436 34.9245L21 35L19.6564 34.9245L18.3298 34.6991L17.0367 34.3266L15.7934 33.8116L14.6156 33.1607L13.5181 32.382L12.5147 31.4853L11.618 30.4819L10.8393 29.3844L10.1884 28.2066L9.6734 26.9634L9.30087 25.6703L9.07545 24.3436L9 23L9.07545 21.6564L9.30087 20.3298L9.6734 19.0367L10.1884 17.7934L10.8393 16.6156L11.618 15.5181L12.5147 14.5147L13.5181 13.618L14.6156 12.8393L15.7934 12.1884L17.0367 11.6734L18.3298 11.3009L19.6564 11.0755L21 11Z"
            fill="#2F80ED"
          />
          <path
            d="M47.1003 13.1722L56.0999 22.1717L57.8998 23.9716L66.8993 32.9712"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M66.8997 13.1722L57.9001 22.1717L56.1002 23.9716L47.1007 32.9712"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M32.5212 56.1374C33.1819 56.5227 33.1818 57.4773 32.5212 57.8626L11.5018 70.1239C10.8361 70.5123 10 70.0321 10 69.2613L10 44.7387C10 43.9679 10.8361 43.4877 11.5018 43.8761L32.5212 56.1374Z"
            fill="#219653"
          />
          <rect
            x="45"
            y="45"
            width="24"
            height="24"
            rx="1"
            fill="#F2C94C"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M20.9966 11L22.3402 11.0755L23.6668 11.3009L24.9599 11.6734L26.2032 12.1884L27.381 12.8393L28.4785 13.618L29.4819 14.5147L30.3786 15.5181L31.1573 16.6156L31.8082 17.7934L32.3232 19.0367L32.6957 20.3298L32.9211 21.6564L32.9966 23L32.9211 24.3436L32.6957 25.6703L32.3232 26.9634L31.8082 28.2066L31.1573 29.3844L30.3786 30.4819L29.4819 31.4853L28.4785 32.382L27.381 33.1607L26.2032 33.8116L24.9599 34.3266L23.6668 34.6991L22.3402 34.9245L20.9966 35L19.653 34.9245L18.3263 34.6991L17.0332 34.3266L15.79 33.8116L14.6122 33.1607L13.5147 32.382L12.5113 31.4853L11.6146 30.4819L10.8359 29.3844L10.185 28.2066L9.66998 26.9634L9.29745 25.6703L9.07204 24.3436L8.99658 23L9.07204 21.6564L9.29745 20.3298L9.66998 19.0367L10.185 17.7934L10.8359 16.6156L11.6146 15.5181L12.5113 14.5147L13.5147 13.618L14.6122 12.8393L15.79 12.1884L17.0332 11.6734L18.3263 11.3009L19.653 11.0755L20.9966 11Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.5178 56.1374C33.1784 56.5227 33.1784 57.4773 32.5178 57.8626L11.4984 70.1239C10.8327 70.5123 9.99658 70.0321 9.99658 69.2613L9.99658 44.7387C9.99658 43.9679 10.8327 43.4877 11.4984 43.8761L32.5178 56.1374Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44.9966 46C44.9966 45.4477 45.4443 45 45.9966 45H67.9966C68.5489 45 68.9966 45.4477 68.9966 46V68C68.9966 68.5523 68.5489 69 67.9966 69H45.9966C45.4443 69 44.9966 68.5523 44.9966 68V46Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M66.896 32.9712L47.097 13.1722M47.0971 32.9712L66.8961 13.1722M20.9966 11L22.3402 11.0755L23.6668 11.3009L24.9599 11.6734L26.2032 12.1884L27.381 12.8393L28.4785 13.618L29.4819 14.5147L30.3786 15.5181L31.1573 16.6156L31.8082 17.7934L32.3232 19.0367L32.6957 20.3298L32.9211 21.6564L32.9966 23L32.9211 24.3436L32.6957 25.6703L32.3232 26.9634L31.8082 28.2066L31.1573 29.3844L30.3786 30.4819L29.4819 31.4853L28.4785 32.382L27.381 33.1607L26.2032 33.8116L24.9599 34.3266L23.6668 34.6991L22.3402 34.9245L20.9966 35L19.653 34.9245L18.3263 34.6991L17.0332 34.3266L15.79 33.8116L14.6122 33.1607L13.5147 32.382L12.5113 31.4853L11.6146 30.4819L10.8359 29.3844L10.185 28.2066L9.66998 26.9634L9.29745 25.6703L9.07204 24.3436L8.99658 23L9.07204 21.6564L9.29745 20.3298L9.66998 19.0367L10.185 17.7934L10.8359 16.6156L11.6146 15.5181L12.5113 14.5147L13.5147 13.618L14.6122 12.8393L15.79 12.1884L17.0332 11.6734L18.3263 11.3009L19.653 11.0755L20.9966 11ZM9.99658 44.7387L9.99658 69.2613C9.99658 70.0321 10.8327 70.5123 11.4984 70.1239L32.5178 57.8626C33.1784 57.4773 33.1784 56.5227 32.5178 56.1374L11.4984 43.8761C10.8327 43.4877 9.99658 43.9679 9.99658 44.7387ZM45.9966 69H67.9966C68.5489 69 68.9966 68.5523 68.9966 68V46C68.9966 45.4477 68.5489 45 67.9966 45H45.9966C45.4443 45 44.9966 45.4477 44.9966 46V68C44.9966 68.5523 45.4443 69 45.9966 69Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 23.272C7 15.54 13.268 9.27197 21 9.27197C28.732 9.27197 35 15.54 35 23.272C35 31.004 28.732 37.272 21 37.272C13.268 37.272 7 31.004 7 23.272ZM21 13.272C15.4772 13.272 11 17.7491 11 23.272C11 28.7948 15.4772 33.272 21 33.272C26.5228 33.272 31 28.7948 31 23.272C31 17.7491 26.5228 13.272 21 13.272Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.529 54.6818C35.5126 55.8389 35.5126 58.705 33.529 59.8621L12.5096 72.1235C10.5105 73.2896 8 71.8476 8 69.5333L8 45.0107C8 42.6963 10.5105 41.2544 12.5096 42.4205L33.529 54.6818ZM30.0307 57.272L12 46.754L12 67.7899L30.0307 57.272Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46 43.272C44.3431 43.272 43 44.6151 43 46.272V68.272C43 69.9288 44.3431 71.272 46 71.272H68C69.6569 71.272 71 69.9288 71 68.272V46.272C71 44.6151 69.6569 43.272 68 43.272H46ZM67 67.272H47V47.272H67V67.272Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M45.6862 12.0301C46.4673 11.249 47.7336 11.249 48.5147 12.0301L57 20.5154L65.4853 12.0301C66.2664 11.249 67.5327 11.249 68.3138 12.0301C69.0948 12.8111 69.0948 14.0774 68.3138 14.8585L59.8284 23.3438L68.3136 31.8291C69.0947 32.6101 69.0947 33.8764 68.3136 34.6575C67.5326 35.4385 66.2663 35.4385 65.4852 34.6575L57 26.1723L48.5148 34.6575C47.7337 35.4385 46.4674 35.4385 45.6864 34.6575C44.9053 33.8764 44.9053 32.6101 45.6864 31.8291L54.1716 23.3438L45.6862 14.8585C44.9052 14.0774 44.9052 12.8111 45.6862 12.0301Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-shapes', CoreShapes)
export default CoreShapes