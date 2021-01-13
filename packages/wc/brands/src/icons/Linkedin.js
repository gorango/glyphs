
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const BrandsLinkedin = {
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
            d="M21.8866 15.2301C21.8866 19.5913 18.1064 23.1268 13.4433 23.1268C8.78019 23.1268 5 19.5913 5 15.2301C5 10.8688 8.78019 7.33337 13.4433 7.33337C18.1064 7.33337 21.8866 10.8688 21.8866 15.2301Z"
            fill="#1275B1"
          />
          <path
            d="M6.15464 28.9312H20.5876V72.6667H6.15464V28.9312Z"
            fill="#1275B1"
          />
          <path
            d="M43.8247 28.9312H29.3918V72.6667H43.8247C43.8247 72.6667 43.8247 58.8981 43.8247 50.2894C43.8247 45.1223 45.5891 39.9325 52.6289 39.9325C60.5847 39.9325 60.5368 46.6945 60.4997 51.9331C60.4512 58.7808 60.567 65.7687 60.567 72.6667H75V49.5841C74.8778 34.8451 71.0372 28.0538 58.4021 28.0538C50.8985 28.0538 46.2473 31.4603 43.8247 34.5423V28.9312Z"
            fill="#1275B1"
          />
        `}
        ${variant === "solid" && svg`
          <path
            d="M21.8866 15.2301C21.8866 19.5913 18.1064 23.1268 13.4433 23.1268C8.78019 23.1268 5 19.5913 5 15.2301C5 10.8688 8.78019 7.33337 13.4433 7.33337C18.1064 7.33337 21.8866 10.8688 21.8866 15.2301Z"
            fill="currentColor"
          />
          <path
            d="M6.15464 28.9312H20.5876V72.6667H6.15464V28.9312Z"
            fill="currentColor"
          />
          <path
            d="M43.8247 28.9312H29.3918V72.6667H43.8247C43.8247 72.6667 43.8247 58.8981 43.8247 50.2894C43.8247 45.1223 45.5891 39.9325 52.6289 39.9325C60.5847 39.9325 60.5368 46.6945 60.4997 51.9331C60.4512 58.7808 60.567 65.7687 60.567 72.6667H75V49.5841C74.8778 34.8451 71.0372 28.0538 58.4021 28.0538C50.8985 28.0538 46.2473 31.4603 43.8247 34.5423V28.9312Z"
            fill="currentColor"
          />
        `}
        ${variant === "path" && svg`
          <path
            d="M21.8866 15.2301C21.8866 19.5913 18.1064 23.1268 13.4433 23.1268C8.78019 23.1268 5 19.5913 5 15.2301C5 10.8688 8.78019 7.33337 13.4433 7.33337C18.1064 7.33337 21.8866 10.8688 21.8866 15.2301Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M6.15464 28.9312H20.5876V72.6667H6.15464V28.9312Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M43.8247 28.9312H29.3918V72.6667H43.8247C43.8247 72.6667 43.8247 58.8981 43.8247 50.2894C43.8247 45.1223 45.5891 39.9325 52.6289 39.9325C60.5847 39.9325 60.5368 46.6945 60.4997 51.9331C60.4512 58.7808 60.567 65.7687 60.567 72.6667H75V49.5841C74.8778 34.8451 71.0372 28.0538 58.4021 28.0538C50.8985 28.0538 46.2473 31.4603 43.8247 34.5423V28.9312Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('brands-linkedin', BrandsLinkedin)
export default BrandsLinkedin
