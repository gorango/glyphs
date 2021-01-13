
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsBitcoin = {
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
        ${variant === "color" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M72 40.0016C72 57.6756 57.6731 72.0031 40 72.0031C22.3269 72.0031 8 57.6756 8 40.0016C8 22.3276 22.3269 8 40 8C57.6731 8 72 22.3276 72 40.0016ZM47.6879 28.112C52.1392 29.6407 55.3954 31.9297 54.7566 36.1895C54.2926 39.3088 52.5571 40.8174 50.251 41.3456C53.4148 42.9864 54.493 46.1002 53.4911 49.8653C51.5889 55.2836 47.0672 55.7398 41.0531 54.6073L39.5928 60.4318L36.0675 59.5554L37.5077 53.8089C36.5938 53.5828 35.6597 53.3407 34.6975 53.0826L33.2513 58.8571L29.73 57.9807L31.1883 52.1442L24.0875 50.3595L25.8391 46.3378C25.8391 46.3378 28.4384 47.0241 28.4022 46.974C29.4006 47.2201 29.8445 46.5719 30.0192 46.1417L33.9764 30.333C34.0206 29.5867 33.7615 28.6463 32.3333 28.2901C32.3875 28.2521 29.7722 27.6558 29.7722 27.6558L30.7102 23.9042L37.8211 25.659L39.2674 19.8885L42.7907 20.7649L41.3745 26.4213C42.3226 26.6354 43.2748 26.8535 44.2008 27.0836L45.6069 21.4632L49.1322 22.3396L47.6879 28.112ZM39.2524 37.7383C41.6538 38.375 46.8792 39.7604 47.79 36.1279C48.7192 32.4113 43.6425 31.2888 41.1568 30.7393L41.1567 30.7392C40.8751 30.677 40.6267 30.622 40.4241 30.5715L38.6685 37.5865C38.8356 37.6278 39.0321 37.6799 39.2522 37.7383L39.2524 37.7383ZM36.5315 49.0329C39.4078 49.7905 45.6983 51.4476 46.6992 47.4448C47.7237 43.3521 41.6247 41.9889 38.6488 41.3238L38.6486 41.3237L38.6479 41.3236C38.3157 41.2493 38.0226 41.1838 37.7826 41.1241L35.8461 48.8554C36.0428 48.9041 36.2732 48.9648 36.531 49.0327L36.5315 49.0329L36.5315 49.0329Z"
            fill="#F7931A"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M39.2524 37.7364C41.6538 38.3731 46.8792 39.7585 47.79 36.1259C48.7192 32.4094 43.6425 31.2869 41.1568 30.7373C40.8751 30.675 40.6267 30.6201 40.4241 30.5696L38.6685 37.5845C38.8356 37.6259 39.0322 37.678 39.2524 37.7364Z"
            fill="currentColor"
          />
          <path
            d="M36.5315 49.0309C39.4078 49.7886 45.6983 51.4456 46.6992 47.4429C47.7237 43.3502 41.6247 41.987 38.6488 41.3218C38.3166 41.2476 38.0226 41.1819 37.7826 41.1222L35.8461 48.8535C36.0428 48.9022 36.2737 48.963 36.5315 49.0309Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M72 39.9996C72 57.6736 57.6731 72.0012 40 72.0012C22.3269 72.0012 8 57.6736 8 39.9996C8 22.3256 22.3269 7.99805 40 7.99805C57.6731 7.99805 72 22.3256 72 39.9996ZM47.6879 28.1101C52.1392 29.6387 55.3954 31.9277 54.7566 36.1875C54.2926 39.3068 52.5571 40.8155 50.251 41.3437C53.4148 42.9844 54.493 46.0982 53.4911 49.8633C51.5889 55.2816 47.0672 55.7378 41.0531 54.6053L39.5928 60.4298L36.0675 59.5534L37.5077 53.807C36.5938 53.5809 35.6597 53.3388 34.6975 53.0807L33.2513 58.8551L29.73 57.9788L31.1883 52.1423L24.0875 50.3575L25.8391 46.3358C25.8391 46.3358 28.4384 47.0221 28.4022 46.9721C29.4006 47.2182 29.8445 46.5699 30.0192 46.1397L33.9764 30.331C34.0206 29.5847 33.7615 28.6443 32.3333 28.2882C32.3875 28.2501 29.7722 27.6539 29.7722 27.6539L30.7102 23.9023L37.8211 25.657L39.2674 19.8866L42.7907 20.763L41.3745 26.4194C42.3226 26.6335 43.2748 26.8515 44.2008 27.0816L45.6069 21.4613L49.1322 22.3376L47.6879 28.1101Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M39.2524 37.7364C41.6538 38.3731 46.8792 39.7585 47.79 36.1259C48.7192 32.4094 43.6425 31.2869 41.1568 30.7373C40.8751 30.675 40.6267 30.6201 40.4241 30.5696L38.6685 37.5845C38.8356 37.6259 39.0322 37.678 39.2524 37.7364Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M36.5315 49.0309C39.4078 49.7886 45.6983 51.4456 46.6992 47.4429C47.7237 43.3502 41.6247 41.987 38.6488 41.3218C38.3166 41.2476 38.0226 41.1819 37.7826 41.1222L35.8461 48.8535C36.0428 48.9022 36.2737 48.963 36.5315 49.0309Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M72 39.9996C72 57.6736 57.6731 72.0012 40 72.0012C22.3269 72.0012 8 57.6736 8 39.9996C8 22.3256 22.3269 7.99805 40 7.99805C57.6731 7.99805 72 22.3256 72 39.9996ZM47.6879 28.1101C52.1392 29.6387 55.3954 31.9277 54.7566 36.1875C54.2926 39.3068 52.5571 40.8155 50.251 41.3437C53.4148 42.9844 54.493 46.0982 53.4911 49.8633C51.5889 55.2816 47.0672 55.7378 41.0531 54.6053L39.5928 60.4298L36.0675 59.5534L37.5077 53.807C36.5938 53.5809 35.6597 53.3388 34.6975 53.0807L33.2513 58.8551L29.73 57.9788L31.1883 52.1423L24.0875 50.3575L25.8391 46.3358C25.8391 46.3358 28.4384 47.0221 28.4022 46.9721C29.4006 47.2182 29.8445 46.5699 30.0192 46.1397L33.9764 30.331C34.0206 29.5847 33.7615 28.6443 32.3333 28.2882C32.3875 28.2501 29.7722 27.6539 29.7722 27.6539L30.7102 23.9023L37.8211 25.657L39.2674 19.8866L42.7907 20.763L41.3745 26.4194C42.3226 26.6335 43.2748 26.8515 44.2008 27.0816L45.6069 21.4613L49.1322 22.3376L47.6879 28.1101Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-bitcoin', BrandsBitcoin)
export default BrandsBitcoin
