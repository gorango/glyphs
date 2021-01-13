
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CorePlug = {
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
            d="M58.3409 35C59.2572 35 60 34.2572 60 33.3409V29C60 27.8954 59.1046 27 58 27H22C20.8954 27 20 27.8954 20 29V33.3409C20 34.2572 20.7428 35 21.6591 35C22.5754 35 23.3094 35.7448 23.4042 36.6562C23.5626 38.1784 23.9399 39.6833 24.5362 41.1229L24.7359 41.605C26.3598 45.5254 29.4746 48.6402 33.395 50.2641L33.8771 50.4638C37.7975 52.0877 42.2025 52.0877 46.1229 50.4638L46.605 50.2641C50.5254 48.6402 53.6402 45.5254 55.2641 41.605L55.4638 41.1229C56.0601 39.6833 56.4374 38.1784 56.5958 36.6562C56.6906 35.7448 57.4245 35 58.3409 35Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M33 27V17C33 15.3431 31.6569 14 30 14C28.3431 14 27 15.3431 27 17V27"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M53 27V17C53 15.3431 51.6569 14 50 14C48.3431 14 47 15.3431 47 17V27"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M40 51.6818L40 63"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 14C31.6569 14 33 15.3431 33 17V25C33 26.1046 32.1046 27 31 27H29C27.8954 27 27 26.1046 27 25V17C27 15.3431 28.3431 14 30 14ZM51 27C52.1046 27 53 26.1046 53 25V17C53 15.3431 51.6569 14 50 14C48.3431 14 47 15.3431 47 17V25C47 26.1046 47.8954 27 49 27H51Z"
            fill="currentColor"
          />
          <path
            d="M33.5 17C33.5 15.067 31.933 13.5 30 13.5V14.5C31.3807 14.5 32.5 15.6193 32.5 17H33.5ZM33.5 25V17H32.5V25H33.5ZM31 26.5H29V27.5H31V26.5ZM26.5 17V25H27.5V17H26.5ZM30 13.5C28.067 13.5 26.5 15.067 26.5 17H27.5C27.5 15.6193 28.6193 14.5 30 14.5V13.5ZM53.5 25V17H52.5V25H53.5ZM53.5 17C53.5 15.067 51.933 13.5 50 13.5V14.5C51.3807 14.5 52.5 15.6193 52.5 17H53.5ZM50 13.5C48.067 13.5 46.5 15.067 46.5 17H47.5C47.5 15.6193 48.6193 14.5 50 14.5V13.5ZM46.5 17V25H47.5V17H46.5ZM51 26.5H49V27.5H51V26.5ZM46.5 25C46.5 26.3807 47.6193 27.5 49 27.5V26.5C48.1716 26.5 47.5 25.8284 47.5 25H46.5ZM52.5 25C52.5 25.8284 51.8284 26.5 51 26.5V27.5C52.3807 27.5 53.5 26.3807 53.5 25H52.5ZM29 26.5C28.1716 26.5 27.5 25.8284 27.5 25H26.5C26.5 26.3807 27.6193 27.5 29 27.5V26.5ZM32.5 25C32.5 25.8284 31.8284 26.5 31 26.5V27.5C32.3807 27.5 33.5 26.3807 33.5 25H32.5Z"
            fill="currentColor"
          />
          <path
            d="M40 53V63"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.3409 35C59.2572 35 60 34.2572 60 33.3409V29C60 27.8954 59.1046 27 58 27H54.6059L25.3941 27H22C20.8954 27 20 27.8954 20 29V33.3409C20 34.2572 20.7428 35 21.6591 35C22.5754 35 23.3094 35.7448 23.4042 36.6562C23.5626 38.1784 23.9399 39.6833 24.5362 41.1229L24.7359 41.605C26.3598 45.5254 29.4746 48.6402 33.395 50.2641L33.8771 50.4638C37.7975 52.0877 42.2025 52.0877 46.1229 50.4638L46.605 50.2641C50.5254 48.6402 53.6402 45.5254 55.2641 41.605L55.4638 41.1229C56.0601 39.6833 56.4374 38.1784 56.5958 36.6562C56.6906 35.7448 57.4245 35 58.3409 35Z"
            fill="currentColor"
          />
          <path
            d="M24.5362 41.1229L22.6884 41.8883L22.6884 41.8883L24.5362 41.1229ZM24.7359 41.605L26.5836 40.8396L24.7359 41.605ZM33.395 50.2641L34.1604 48.4164H34.1604L33.395 50.2641ZM33.8771 50.4638L33.1117 52.3116H33.1117L33.8771 50.4638ZM46.1229 50.4638L45.3576 48.616H45.3576L46.1229 50.4638ZM46.605 50.2641L47.3703 52.1119H47.3704L46.605 50.2641ZM55.2641 41.605L57.1119 42.3704L57.1119 42.3703L55.2641 41.605ZM55.4638 41.1229L53.616 40.3576L53.616 40.3576L55.4638 41.1229ZM56.5958 36.6562L54.6065 36.4492L56.5958 36.6562ZM23.4042 36.6562L21.4149 36.8631L23.4042 36.6562ZM58 29V33.3409H62V29H58ZM54.6059 29H58V25H54.6059V29ZM25.3941 29L54.6059 29V25L25.3941 25V29ZM22 29H25.3941V25H22V29ZM22 33.3409V29H18V33.3409H22ZM26.384 40.3576C25.8622 39.0978 25.532 37.7811 25.3935 36.4492L21.4149 36.8631C21.5931 38.5757 22.0176 40.2688 22.6884 41.8883L26.384 40.3576ZM26.5836 40.8396L26.384 40.3576L22.6884 41.8883L22.8881 42.3704L26.5836 40.8396ZM34.1604 48.4164C30.73 46.9954 28.0045 44.27 26.5836 40.8396L22.8881 42.3704C24.715 46.7809 28.2191 50.285 32.6296 52.1119L34.1604 48.4164ZM34.6424 48.616L34.1604 48.4164L32.6296 52.1119L33.1117 52.3116L34.6424 48.616ZM45.3576 48.616C41.9272 50.037 38.0728 50.037 34.6424 48.616L33.1117 52.3116C37.5222 54.1384 42.4778 54.1384 46.8883 52.3116L45.3576 48.616ZM45.8396 48.4164L45.3576 48.616L46.8883 52.3116L47.3703 52.1119L45.8396 48.4164ZM53.4164 40.8396C51.9954 44.27 49.27 46.9954 45.8396 48.4164L47.3704 52.1119C51.7809 50.285 55.285 46.7809 57.1119 42.3704L53.4164 40.8396ZM53.616 40.3576L53.4164 40.8396L57.1119 42.3703L57.3116 41.8883L53.616 40.3576ZM54.6065 36.4492C54.468 37.7811 54.1378 39.0978 53.616 40.3576L57.3116 41.8883C57.9823 40.2689 58.4069 38.5757 58.5851 36.8631L54.6065 36.4492ZM58.5851 36.8631C58.5836 36.8771 58.5777 36.8978 58.5517 36.923C58.5368 36.9374 58.5113 36.9569 58.4728 36.9732C58.4324 36.9902 58.386 37 58.3409 37V33C56.274 33 54.7938 34.6494 54.6065 36.4492L58.5851 36.8631ZM22 25C19.7909 25 18 26.7909 18 29H22H22V25ZM21.6591 37C21.6139 37 21.5676 36.9902 21.5272 36.9732C21.4887 36.9569 21.4632 36.9374 21.4483 36.923C21.4223 36.8978 21.4164 36.8771 21.4149 36.8631L25.3935 36.4492C25.2062 34.6494 23.726 33 21.6591 33V37ZM58 33.3409C58 33.1526 58.1526 33 58.3409 33V37C60.3617 37 62 35.3617 62 33.3409H58ZM18 33.3409C18 35.3618 19.6383 37 21.6591 37V33C21.8474 33 22 33.1526 22 33.3409H18ZM62 29C62 26.7909 60.2091 25 58 25V29H58H62Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 14C31.6569 14 33 15.3431 33 17V25C33 26.1046 32.1046 27 31 27H29C27.8954 27 27 26.1046 27 25V17C27 15.3431 28.3431 14 30 14ZM51 27C52.1046 27 53 26.1046 53 25V17C53 15.3431 51.6569 14 50 14C48.3431 14 47 15.3431 47 17V25C47 26.1046 47.8954 27 49 27H51Z"
            fill="#56CCF2"
          />
          <path
            d="M35 17C35 14.2386 32.7614 12 30 12V16C30.5523 16 31 16.4477 31 17H35ZM35 25V17H31V25H35ZM31 25H29L29 29H31L31 25ZM25 17V25H29V17H25ZM30 12C27.2386 12 25 14.2386 25 17H29C29 16.4477 29.4477 16 30 16V12ZM55 25V17H51V25L55 25ZM55 17C55 14.2386 52.7614 12 50 12V16C50.5523 16 51 16.4477 51 17H55ZM50 12C47.2386 12 45 14.2386 45 17H49C49 16.4477 49.4477 16 50 16V12ZM45 17V25H49V17H45ZM51 25H49V29H51V25ZM45 25C45 27.2091 46.7909 29 49 29V25H45ZM51 25V29C53.2091 29 55 27.2091 55 25L51 25ZM29 25H29H25C25 27.2091 26.7909 29 29 29L29 25ZM31 25L31 29C33.2091 29 35 27.2091 35 25H31Z"
            fill="#56CCF2"
          />
          <path
            d="M40 53V63"
            stroke="#9B51E0"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.3409 35C59.2572 35 60 34.2572 60 33.3409V29C60 27.8954 59.1046 27 58 27H54.6059L25.3941 27H22C20.8954 27 20 27.8954 20 29V33.3409C20 34.2572 20.7428 35 21.6591 35C22.5754 35 23.3094 35.7448 23.4042 36.6562C23.5626 38.1784 23.9399 39.6833 24.5362 41.1229L24.7359 41.605C26.3598 45.5254 29.4746 48.6402 33.395 50.2641L33.8771 50.4638C37.7975 52.0877 42.2025 52.0877 46.1229 50.4638L46.605 50.2641C50.5254 48.6402 53.6402 45.5254 55.2641 41.605L55.4638 41.1229C56.0601 39.6833 56.4374 38.1784 56.5958 36.6562C56.6906 35.7448 57.4245 35 58.3409 35Z"
            fill="#9B51E0"
          />
          <path
            d="M54.6059 27V25V27ZM25.3941 27V29V27ZM24.5362 41.1229L22.6884 41.8883L22.6884 41.8883L24.5362 41.1229ZM24.7359 41.605L26.5836 40.8396L24.7359 41.605ZM33.395 50.2641L34.1604 48.4164H34.1604L33.395 50.2641ZM33.8771 50.4638L33.1117 52.3116H33.1117L33.8771 50.4638ZM46.1229 50.4638L45.3576 48.616H45.3576L46.1229 50.4638ZM46.605 50.2641L47.3703 52.1119H47.3704L46.605 50.2641ZM55.2641 41.605L57.1119 42.3704L57.1119 42.3703L55.2641 41.605ZM55.4638 41.1229L53.616 40.3576L53.616 40.3576L55.4638 41.1229ZM56.5958 36.6562L54.6065 36.4492L56.5958 36.6562ZM23.4042 36.6562L21.4149 36.8631L23.4042 36.6562ZM58 29V33.3409H62V29H58ZM54.6059 29H58V25H54.6059V29ZM25.3941 29L54.6059 29V25L25.3941 25V29ZM22 29H25.3941V25H22V29ZM22 33.3409V29H18V33.3409H22ZM26.384 40.3576C25.8622 39.0978 25.532 37.7811 25.3935 36.4492L21.4149 36.8631C21.5931 38.5757 22.0176 40.2688 22.6884 41.8883L26.384 40.3576ZM26.5836 40.8396L26.384 40.3576L22.6884 41.8883L22.8881 42.3704L26.5836 40.8396ZM34.1604 48.4164C30.73 46.9954 28.0045 44.27 26.5836 40.8396L22.8881 42.3704C24.715 46.7809 28.2191 50.285 32.6296 52.1119L34.1604 48.4164ZM34.6424 48.616L34.1604 48.4164L32.6296 52.1119L33.1117 52.3116L34.6424 48.616ZM45.3576 48.616C41.9272 50.037 38.0728 50.037 34.6424 48.616L33.1117 52.3116C37.5222 54.1384 42.4778 54.1384 46.8883 52.3116L45.3576 48.616ZM45.8396 48.4164L45.3576 48.616L46.8883 52.3116L47.3703 52.1119L45.8396 48.4164ZM53.4164 40.8396C51.9954 44.27 49.27 46.9954 45.8396 48.4164L47.3704 52.1119C51.7809 50.285 55.285 46.7809 57.1119 42.3704L53.4164 40.8396ZM53.616 40.3576L53.4164 40.8396L57.1119 42.3703L57.3116 41.8883L53.616 40.3576ZM54.6065 36.4492C54.468 37.7811 54.1378 39.0978 53.616 40.3576L57.3116 41.8883C57.9823 40.2689 58.4069 38.5757 58.5851 36.8631L54.6065 36.4492ZM58.5851 36.8631C58.5836 36.8771 58.5777 36.8978 58.5517 36.923C58.5368 36.9374 58.5113 36.9569 58.4728 36.9732C58.4324 36.9902 58.386 37 58.3409 37V33C56.274 33 54.7938 34.6494 54.6065 36.4492L58.5851 36.8631ZM22 25C19.7909 25 18 26.7909 18 29H22H22V25ZM21.6591 37C21.6139 37 21.5676 36.9902 21.5272 36.9732C21.4887 36.9569 21.4632 36.9374 21.4483 36.923C21.4223 36.8978 21.4164 36.8771 21.4149 36.8631L25.3935 36.4492C25.2062 34.6494 23.726 33 21.6591 33V37ZM58 33.3409C58 33.1526 58.1526 33 58.3409 33V37C60.3617 37 62 35.3617 62 33.3409H58ZM18 33.3409C18 35.3618 19.6383 37 21.6591 37V33C21.8474 33 22 33.1526 22 33.3409H18ZM62 29C62 26.7909 60.2091 25 58 25V29H58H62Z"
            fill="#9B51E0"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M30 14C31.6569 14 33 15.3431 33 17V25C33 26.1046 32.1046 27 31 27H29C27.8954 27 27 26.1046 27 25V17C27 15.3431 28.3431 14 30 14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M51 27C52.1046 27 53 26.1046 53 25V17C53 15.3431 51.6569 14 50 14C48.3431 14 47 15.3431 47 17V25C47 26.1046 47.8954 27 49 27H51Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M58.3409 35C59.2572 35 60 34.2572 60 33.3409V29C60 27.8954 59.1046 27 58 27H22C20.8954 27 20 27.8954 20 29V33.3409C20 34.2572 20.7428 35 21.6591 35C22.5754 35 23.3094 35.7448 23.4042 36.6562C23.5626 38.1784 23.9399 39.6833 24.5362 41.1229L24.7359 41.605C26.3598 45.5254 29.4746 48.6402 33.395 50.2641L33.8771 50.4638C37.7975 52.0877 42.2025 52.0877 46.1229 50.4638L46.605 50.2641C50.5254 48.6402 53.6402 45.5254 55.2641 41.605L55.4638 41.1229C56.0601 39.6833 56.4374 38.1784 56.5958 36.6562C56.6906 35.7448 57.4245 35 58.3409 35Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 53V63M33 17C33 15.3431 31.6569 14 30 14C28.3431 14 27 15.3431 27 17V25C27 26.1046 27.8954 27 29 27H31C32.1046 27 33 26.1046 33 25V17ZM53 17V25C53 26.1046 52.1046 27 51 27H49C47.8954 27 47 26.1046 47 25V17C47 15.3431 48.3431 14 50 14C51.6569 14 53 15.3431 53 17ZM24.5362 41.1229C23.9399 39.6833 23.5626 38.1784 23.4042 36.6562C23.3094 35.7448 22.5754 35 21.6591 35C20.7428 35 20 34.2572 20 33.3409V29C20 27.8954 20.8954 27 22 27H58C59.1046 27 60 27.8954 60 29V33.3409C60 34.2572 59.2572 35 58.3409 35C57.4245 35 56.6906 35.7448 56.5958 36.6562C56.4374 38.1784 56.0601 39.6833 55.4638 41.1229L55.2641 41.605C53.6402 45.5254 50.5254 48.6402 46.605 50.2641L46.1229 50.4638C42.2025 52.0877 37.7975 52.0877 33.8771 50.4638L33.395 50.2641C29.4746 48.6402 26.3598 45.5254 24.7359 41.605L24.5362 41.1229Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 17C25 14.2386 27.2386 12 30 12C32.7614 12 35 14.2386 35 17V25H45V17C45 14.2386 47.2386 12 50 12C52.7614 12 55 14.2386 55 17V25H58C60.2091 25 62 26.7909 62 29V33.3409C62 35.2844 60.4847 36.8741 58.5711 36.9929C58.3853 38.6612 57.9654 40.3098 57.3116 41.8883L57.1119 42.3704C55.285 46.7809 51.7809 50.285 47.3704 52.1119L46.8883 52.3116C45.3119 52.9645 43.6659 53.3841 42 53.5703V63C42 64.1046 41.1046 65 40 65C38.8954 65 38 64.1046 38 63V53.5703C36.3341 53.3841 34.6881 52.9645 33.1117 52.3116L32.6296 52.1119C28.2191 50.285 24.715 46.7809 22.8881 42.3704L22.6884 41.8883C22.0346 40.3098 21.6147 38.6612 21.4289 36.9929C19.5153 36.8741 18 35.2844 18 33.3409V29C18 26.7909 19.7909 25 22 25H25V17ZM29 25H31V17C31 16.4477 30.5523 16 30 16C29.4477 16 29 16.4477 29 17V25ZM22 29V33.0152C23.8874 33.1848 25.2167 34.75 25.3935 36.4492C25.532 37.7811 25.8622 39.0978 26.384 40.3576L26.5836 40.8396C28.0045 44.27 30.73 46.9955 34.1604 48.4164L34.6424 48.616C38.0728 50.037 41.9272 50.037 45.3576 48.616L45.8396 48.4164C49.27 46.9955 51.9954 44.27 53.4164 40.8396L53.616 40.3576C54.1378 39.0979 54.468 37.7811 54.6065 36.4492C54.7833 34.75 56.1126 33.1848 58 33.0152L58 29H22ZM51 25V17C51 16.4477 50.5523 16 50 16C49.4477 16 49 16.4477 49 17V25H51Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-plug', CorePlug)
export default CorePlug
