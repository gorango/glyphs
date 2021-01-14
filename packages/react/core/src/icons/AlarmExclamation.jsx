
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M31.3272 23.6087C36.7603 21.3583 42.8648 21.3583 48.2978 23.6087C53.7308 25.8592 58.0474 30.1757 60.2978 35.6087C62.5482 41.0418 62.5482 47.1463 60.2978 52.5793C58.0474 58.0123 53.7308 62.3288 48.2978 64.5793C42.8648 66.8297 36.7603 66.8297 31.3272 64.5793C25.8942 62.3289 21.5777 58.0123 19.3272 52.5793C17.0768 47.1463 17.0768 41.0418 19.3272 35.6087C21.5777 30.1757 25.8942 25.8592 31.3272 23.6087Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M15.8125 67.916L24.0451 59.6831"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.8125 67.9153L55.5803 59.6831"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M62.7598 13.2126C59.5905 11.8998 56.0295 11.8998 52.8603 13.2126C51.5909 13.7384 50.4261 14.4575 49.4013 15.3343C48.3389 16.2434 48.8686 17.8605 50.1656 18.3829C50.2497 18.4167 50.3336 18.451 50.4175 18.4858C57.2088 21.2988 62.6044 26.6945 65.4175 33.4858C65.7445 34.2752 66.7451 34.5533 67.324 33.9248C68.344 32.8173 69.1725 31.5299 69.7598 30.1121C71.0725 26.9428 71.0725 23.3819 69.7598 20.2126C68.447 17.0433 65.929 14.5253 62.7598 13.2126Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30.463 15.2247C31.5503 16.1305 31.0128 17.7713 29.6953 18.2878C29.5312 18.3522 29.3675 18.4182 29.2043 18.4858C22.413 21.2988 17.0173 26.6945 14.2043 33.4858C13.9277 34.1534 13.0748 34.3731 12.5901 33.8371C11.6068 32.7495 10.8064 31.4927 10.2346 30.1122C8.92181 26.943 8.92181 23.382 10.2346 20.2128C11.5473 17.0435 14.0653 14.5255 17.2346 13.2128C20.4038 11.9 23.9648 11.9 27.1341 13.2128C28.35 13.7164 29.4701 14.3975 30.463 15.2247Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38.828 35.2476L39.5574 46.9175C39.572 47.1512 39.7658 47.3333 40 47.3333C40.2343 47.3333 40.4281 47.1512 40.4427 46.9175L41.1721 35.2476C41.2143 34.5715 40.6774 34 40 34C39.3227 34 38.7858 34.5715 38.828 35.2476Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.0001 52.3335C39.5398 52.3335 39.1667 52.7066 39.1667 53.1668C39.1667 53.6271 39.5398 54.0002 40.0001 54.0002C40.4603 54.0002 40.8334 53.6271 40.8334 53.1668C40.8334 52.7066 40.4603 52.3335 40.0001 52.3335Z"
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
            d="M62.7598 13.2126C59.5905 11.8998 56.0295 11.8998 52.8603 13.2126C51.5909 13.7384 50.4261 14.4575 49.4013 15.3343C48.3389 16.2434 48.8686 17.8605 50.1656 18.3829C50.2497 18.4167 50.3337 18.451 50.4175 18.4858C57.2088 21.2988 62.6044 26.6945 65.4175 33.4858C65.7445 34.2752 66.7451 34.5533 67.324 33.9248C68.344 32.8173 69.1725 31.5299 69.7598 30.1121C71.0725 26.9428 71.0725 23.3819 69.7598 20.2126C68.447 17.0433 65.929 14.5253 62.7598 13.2126Z"
            fill="currentColor"
          />
          <path
            d="M30.463 15.2247C31.5503 16.1305 31.0128 17.7713 29.6953 18.2878C29.5312 18.3522 29.3675 18.4182 29.2043 18.4858C22.413 21.2988 17.0173 26.6945 14.2043 33.4858C13.9277 34.1534 13.0748 34.3731 12.5901 33.8371C11.6068 32.7495 10.8064 31.4927 10.2346 30.1123C8.92181 26.943 8.92181 23.382 10.2346 20.2128C11.5473 17.0435 14.0653 14.5255 17.2346 13.2128C20.4038 11.9 23.9648 11.9 27.1341 13.2128C28.35 13.7164 29.4701 14.3975 30.463 15.2247Z"
            fill="currentColor"
          />
          <path
            d="M40.6667 53.1667C40.6667 53.5349 40.3682 53.8333 40 53.8333C39.6319 53.8333 39.3334 53.5349 39.3334 53.1667C39.3334 52.7985 39.6319 52.5 40 52.5C40.3682 52.5 40.6667 52.7985 40.6667 53.1667Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0798 57.4055L13.6911 65.7945C12.5196 66.9661 12.5196 68.8656 13.6912 70.0371C14.8628 71.2087 16.7623 71.2086 17.9339 70.037L26.2981 61.6725C27.8267 62.8479 29.5149 63.8285 31.3274 64.5793C36.7604 66.8297 42.8649 66.8297 48.2979 64.5793C50.1104 63.8285 51.7987 62.8478 53.3274 61.6724L61.6912 70.0362C62.8628 71.2078 64.7623 71.2078 65.9338 70.0362C67.1054 68.8646 67.1054 66.9651 65.9338 65.7935L57.5456 57.4053C58.6526 55.9307 59.5803 54.3117 60.2979 52.5793C62.5484 47.1462 62.5484 41.0417 60.2979 35.6087C58.0475 30.1757 53.731 25.8591 48.2979 23.6087C42.8649 21.3583 36.7604 21.3583 31.3274 23.6087C25.8943 25.8591 21.5778 30.1757 19.3274 35.6087C17.0769 41.0417 17.0769 47.1462 19.3274 52.5793C20.045 54.3118 20.9728 55.9308 22.0798 57.4055ZM40 32.5C38.4574 32.5 37.2347 33.8015 37.3309 35.3411L38.0603 47.011C38.1243 48.0353 38.9737 48.8333 40 48.8333C41.0264 48.8333 41.8758 48.0353 41.9398 47.011L42.6692 35.3411C42.7654 33.8015 41.5426 32.5 40 32.5ZM40 50.8333C38.7114 50.8333 37.6667 51.878 37.6667 53.1667C37.6667 54.4553 38.7114 55.5 40 55.5C41.2887 55.5 42.3334 54.4553 42.3334 53.1667C42.3334 51.878 41.2887 50.8333 40 50.8333Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.7598 13.2126C59.5905 11.8998 56.0295 11.8998 52.8603 13.2126C51.5909 13.7384 50.4261 14.4575 49.4013 15.3343C48.3389 16.2434 48.8686 17.8605 50.1656 18.3829C50.2497 18.4167 50.3336 18.451 50.4175 18.4858C57.2088 21.2988 62.6044 26.6945 65.4175 33.4858C65.7445 34.2752 66.7451 34.5533 67.324 33.9248C68.344 32.8173 69.1725 31.5299 69.7598 30.1121C71.0725 26.9428 71.0725 23.3819 69.7598 20.2126C68.447 17.0433 65.929 14.5253 62.7598 13.2126ZM30.463 15.2247C31.5503 16.1305 31.0128 17.7713 29.6953 18.2879C29.5312 18.3522 29.3675 18.4182 29.2043 18.4858C22.413 21.2988 17.0173 26.6945 14.2043 33.4858C13.9277 34.1534 13.0748 34.3731 12.5901 33.8371C11.6068 32.7495 10.8064 31.4927 10.2346 30.1122C8.92181 26.943 8.92181 23.382 10.2346 20.2128C11.5473 17.0435 14.0653 14.5255 17.2346 13.2128C20.4038 11.9 23.9648 11.9 27.1341 13.2128C28.35 13.7164 29.4701 14.3975 30.463 15.2247Z"
            fill="#4F4F4F"
          />
          <path
            d="M62.3983 69.3295C63.1793 70.1105 64.4457 70.1105 65.2267 69.3295C66.0078 68.5484 66.0078 67.2821 65.2267 66.501L62.3983 69.3295ZM56.9946 58.2689C56.2135 57.4878 54.9472 57.4878 54.1661 58.2689C53.3851 59.0499 53.3851 60.3163 54.1661 61.0973L56.9946 58.2689ZM14.3983 66.502C13.6172 67.283 13.6172 68.5494 14.3983 69.3304C15.1794 70.1114 16.4457 70.1114 17.2267 69.3303L14.3983 66.502ZM25.4594 61.0974C26.2404 60.3163 26.2404 59.05 25.4593 58.269C24.6782 57.4879 23.4119 57.488 22.6309 58.269L25.4594 61.0974ZM65.2267 66.501L56.9946 58.2689L54.1661 61.0973L62.3983 69.3295L65.2267 66.501ZM17.2267 69.3303L25.4594 61.0974L22.6309 58.269L14.3983 66.502L17.2267 69.3303Z"
            fill="#4F4F4F"
          />
          <path
            d="M31.3272 23.609C36.7603 21.3585 42.8647 21.3585 48.2978 23.609C53.7308 25.8594 58.0473 30.1759 60.2978 35.609C62.5482 41.042 62.5482 47.1465 60.2978 52.5795C58.0473 58.0126 53.7308 62.3291 48.2978 64.5795C42.8647 66.83 36.7603 66.83 31.3272 64.5795C25.8942 62.3291 21.5777 58.0126 19.3272 52.5795C17.0768 47.1465 17.0768 41.042 19.3272 35.609C21.5777 30.1759 25.8942 25.8594 31.3272 23.609Z"
            fill="#F2F2F2"
            stroke="#BDBDBD"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.828 35.2476L39.5574 46.9175C39.572 47.1512 39.7658 47.3333 40 47.3333C40.2342 47.3333 40.4281 47.1512 40.4427 46.9175L41.172 35.2476C41.2143 34.5715 40.6774 34 40 34C39.3226 34 38.7857 34.5715 38.828 35.2476ZM40 52.3333C39.5398 52.3333 39.1667 52.7064 39.1667 53.1667C39.1667 53.6269 39.5398 54 40 54C40.4603 54 40.8334 53.6269 40.8334 53.1667C40.8334 52.7064 40.4603 52.3333 40 52.3333Z"
            fill="#EB5757"
          />
          <path
            d="M39.5574 46.9175L38.0603 47.011L39.5574 46.9175ZM38.828 35.2476L37.3309 35.3411L38.828 35.2476ZM40.4427 46.9175L38.9456 46.8239L40.4427 46.9175ZM41.172 35.2476L42.6691 35.3411V35.3411L41.172 35.2476ZM41.0544 46.8239L40.3251 35.154L37.3309 35.3411L38.0603 47.011L41.0544 46.8239ZM40 45.8333C40.5579 45.8333 41.0196 46.2671 41.0544 46.8239L38.0603 47.011C38.1243 48.0353 38.9737 48.8333 40 48.8333V45.8333ZM38.9456 46.8239C38.9804 46.2671 39.4421 45.8333 40 45.8333V48.8333C41.0263 48.8333 41.8757 48.0353 41.9398 47.011L38.9456 46.8239ZM39.675 35.154L38.9456 46.8239L41.9398 47.011L42.6691 35.3411L39.675 35.154ZM40 35.5C39.8122 35.5 39.6632 35.3415 39.675 35.154L42.6691 35.3411C42.7653 33.8015 41.5426 32.5 40 32.5V35.5ZM40.3251 35.154C40.3368 35.3415 40.1879 35.5 40 35.5V32.5C38.4574 32.5 37.2347 33.8015 37.3309 35.3411L40.3251 35.154ZM40.6667 53.1667C40.6667 53.5349 40.3682 53.8333 40 53.8333V50.8333C38.7114 50.8333 37.6667 51.878 37.6667 53.1667H40.6667ZM40 52.5C40.3682 52.5 40.6667 52.7985 40.6667 53.1667H37.6667C37.6667 54.4553 38.7114 55.5 40 55.5V52.5ZM39.3334 53.1667C39.3334 52.7985 39.6318 52.5 40 52.5V55.5C41.2887 55.5 42.3334 54.4553 42.3334 53.1667H39.3334ZM40 53.8333C39.6318 53.8333 39.3334 53.5349 39.3334 53.1667H42.3334C42.3334 51.878 41.2887 50.8333 40 50.8333V53.8333Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M62.7598 13.2126C59.5905 11.8998 56.0295 11.8998 52.8603 13.2126C51.5909 13.7384 50.4261 14.4575 49.4013 15.3343C48.3389 16.2434 48.8686 17.8605 50.1656 18.3829C50.2497 18.4167 50.3337 18.451 50.4175 18.4858C57.2088 21.2988 62.6044 26.6945 65.4175 33.4858C65.7445 34.2752 66.7451 34.5533 67.324 33.9248C68.344 32.8173 69.1725 31.5299 69.7598 30.1121C71.0725 26.9428 71.0725 23.3819 69.7598 20.2126C68.447 17.0433 65.929 14.5253 62.7598 13.2126Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.463 15.2247C31.5503 16.1305 31.0128 17.7713 29.6953 18.2878C29.5312 18.3522 29.3675 18.4182 29.2043 18.4858C22.413 21.2988 17.0173 26.6945 14.2043 33.4858C13.9277 34.1534 13.0748 34.3731 12.5901 33.8371C11.6068 32.7495 10.8064 31.4927 10.2346 30.1122C8.92181 26.943 8.92181 23.382 10.2346 20.2128C11.5473 17.0435 14.0653 14.5255 17.2346 13.2128C20.4038 11.9 23.9648 11.9 27.1341 13.2128C28.35 13.7164 29.4701 14.3975 30.463 15.2247Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31.3274 23.6087C36.7604 21.3583 42.8649 21.3583 48.2979 23.6087C53.731 25.8591 58.0475 30.1757 60.2979 35.6087C62.5484 41.0417 62.5484 47.1462 60.2979 52.5793C58.0475 58.0123 53.731 62.3288 48.2979 64.5793C42.8649 66.8297 36.7604 66.8297 31.3274 64.5793C25.8943 62.3288 21.5778 58.0123 19.3274 52.5793C17.0769 47.1462 17.0769 41.0417 19.3274 35.6087C21.5778 30.1757 25.8943 25.8591 31.3274 23.6087Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.8281 35.2474L39.5574 46.9173C39.572 47.151 39.7659 47.3331 40.0001 47.3331C40.2343 47.3331 40.4281 47.151 40.4428 46.9173L41.1721 35.2474C41.2144 34.5713 40.6775 33.9998 40.0001 33.9998C39.3227 33.9998 38.7858 34.5713 38.8281 35.2474Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40.0001 52.3331C39.5399 52.3331 39.1668 52.7062 39.1668 53.1665C39.1668 53.6267 39.5399 53.9998 40.0001 53.9998C40.4603 53.9998 40.8334 53.6267 40.8334 53.1665C40.8334 52.7062 40.4603 52.3331 40.0001 52.3331Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M63.8125 67.9149L55.5804 59.6827M15.8125 67.9158L24.0451 59.6828M52.8603 13.2126C56.0295 11.8998 59.5905 11.8998 62.7598 13.2126C65.929 14.5253 68.447 17.0433 69.7598 20.2126C71.0725 23.3819 71.0725 26.9428 69.7598 30.1121C69.1725 31.5299 68.344 32.8173 67.324 33.9248C66.7451 34.5533 65.7445 34.2752 65.4175 33.4858C62.6044 26.6945 57.2088 21.2988 50.4175 18.4858C50.3337 18.451 50.2497 18.4167 50.1656 18.3829C48.8686 17.8605 48.3389 16.2434 49.4013 15.3343C50.4261 14.4575 51.5909 13.7384 52.8603 13.2126ZM29.2043 18.4858C29.3675 18.4182 29.5312 18.3522 29.6953 18.2878C31.0128 17.7713 31.5503 16.1305 30.463 15.2247C29.4701 14.3975 28.35 13.7164 27.1341 13.2128C23.9648 11.9 20.4038 11.9 17.2346 13.2128C14.0653 14.5255 11.5473 17.0435 10.2346 20.2128C8.92181 23.382 8.92181 26.943 10.2346 30.1122C10.8064 31.4927 11.6068 32.7495 12.5901 33.8371C13.0748 34.3731 13.9277 34.1534 14.2043 33.4858C17.0173 26.6945 22.413 21.2988 29.2043 18.4858ZM19.3274 35.6087C21.5778 30.1757 25.8943 25.8591 31.3274 23.6087C36.7604 21.3583 42.8649 21.3583 48.2979 23.6087C53.731 25.8591 58.0475 30.1757 60.2979 35.6087C62.5484 41.0417 62.5484 47.1462 60.2979 52.5793C58.0475 58.0123 53.731 62.3288 48.2979 64.5793C42.8649 66.8297 36.7604 66.8297 31.3274 64.5793C25.8943 62.3288 21.5778 58.0123 19.3274 52.5793C17.0769 47.1462 17.0769 41.0417 19.3274 35.6087ZM39.5574 46.9173L38.8281 35.2474C38.7858 34.5713 39.3227 33.9998 40.0001 33.9998C40.6775 33.9998 41.2144 34.5713 41.1721 35.2474L40.4428 46.9173C40.4281 47.151 40.2343 47.3331 40.0001 47.3331C39.7659 47.3331 39.572 47.151 39.5574 46.9173ZM39.1668 53.1665C39.1668 52.7062 39.5399 52.3331 40.0001 52.3331C40.4603 52.3331 40.8334 52.7062 40.8334 53.1665C40.8334 53.6267 40.4603 53.9998 40.0001 53.9998C39.5399 53.9998 39.1668 53.6267 39.1668 53.1665Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
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
            d="M63.5251 11.3648C59.8658 9.84909 55.7542 9.84909 52.0949 11.3648C50.6294 11.9719 49.2843 12.8022 48.101 13.8147C46.9171 14.8277 46.6251 16.2894 46.9714 17.5381C47.3026 18.7322 48.2031 19.7486 49.4184 20.238C49.4964 20.2695 49.5743 20.3013 49.6521 20.3335C55.9534 22.9436 60.9597 27.9499 63.5697 34.2511C63.9795 35.2403 64.824 35.9387 65.7972 36.1788C66.8018 36.4266 67.9661 36.1798 68.7951 35.2798C69.9728 34.001 70.9295 32.5144 71.6075 30.8775C73.1233 27.2181 73.1233 23.1066 71.6075 19.4472C70.0918 15.7879 67.1845 12.8806 63.5251 11.3648ZM53.6256 15.0604C56.3048 13.9506 59.3152 13.9506 61.9944 15.0604C64.6736 16.1701 66.8022 18.2987 67.912 20.978C69.0218 23.6572 69.0218 26.6675 67.912 29.3467C67.5954 30.1109 67.196 30.8303 66.7246 31.494C63.587 24.7906 58.0505 19.4827 51.1829 16.638C51.1343 16.6179 51.0858 16.5979 51.0372 16.5781C51.8193 15.961 52.6888 15.4484 53.6256 15.0604Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.8994 11.365C24.2401 9.84925 20.1285 9.84925 16.4692 11.365C12.8099 12.8807 9.90255 15.7881 8.38681 19.4474C6.87106 23.1067 6.87106 27.2183 8.38681 30.8776C9.04699 32.4714 9.97126 33.9227 11.1066 35.1784C12.761 37.0082 15.3226 36.0121 16.052 34.2511C18.6621 27.9499 23.6684 22.9436 29.9697 20.3335C30.1211 20.2708 30.273 20.2096 30.4253 20.1499C31.6592 19.6661 32.5739 18.6418 32.9082 17.437C33.2583 16.175 32.9549 14.6975 31.7432 13.6881C30.5967 12.7329 29.3033 11.9465 27.8994 11.365ZM17.9999 15.0605C20.6791 13.9507 23.6895 13.9507 26.3687 15.0605C27.255 15.4277 28.081 15.9062 28.8298 16.4793C28.6992 16.5313 28.5689 16.5842 28.4389 16.638C21.6814 19.4371 16.2126 24.6211 13.0499 31.1728C12.6731 30.6001 12.3484 29.9893 12.0823 29.3469C10.9726 26.6677 10.9726 23.6573 12.0823 20.9781C13.1921 18.2989 15.3207 16.1703 17.9999 15.0605Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.0001 32.4998C38.4575 32.4998 37.2348 33.8013 37.331 35.3409L38.0604 47.0109C38.1244 48.0351 38.9738 48.8331 40.0001 48.8331C41.0264 48.8331 41.8758 48.0351 41.9398 47.0109L42.6692 35.3409C42.7654 33.8013 41.5427 32.4998 40.0001 32.4998Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.0001 50.8331C38.7114 50.8331 37.6668 51.8778 37.6668 53.1665C37.6668 54.4551 38.7114 55.4998 40.0001 55.4998C41.2888 55.4998 42.3334 54.4551 42.3334 53.1665C42.3334 51.8778 41.2888 50.8331 40.0001 50.8331ZM40.6668 53.1665C40.6668 53.5347 40.3683 53.8331 40.0001 53.8331C39.6319 53.8331 39.3334 53.5347 39.3334 53.1665C39.3334 52.7983 39.6319 52.4998 40.0001 52.4998C40.3683 52.4998 40.6668 52.7983 40.6668 53.1665Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.1457 53.3446C61.1958 55.6379 59.9082 57.7487 58.3431 59.617L65.2267 66.5006C66.0078 67.2817 66.0078 68.548 65.2267 69.3291C64.4457 70.1101 63.1793 70.1101 62.3983 69.3291L55.5295 62.4603C53.6138 64.0997 51.4362 65.4441 49.0633 66.427C43.1402 68.8804 36.4851 68.8804 30.562 66.427C28.1891 65.4441 26.0116 64.0998 24.096 62.4604L17.2267 69.3299C16.4457 70.111 15.1794 70.111 14.3983 69.33C13.6173 68.549 13.6172 67.2826 14.3983 66.5016L21.2824 59.6172C19.7172 57.7489 18.4295 55.638 17.4796 53.3446C15.0262 47.4215 15.0262 40.7664 17.4796 34.8433C19.933 28.9202 24.6389 24.2144 30.562 21.7609C36.4851 19.3075 43.1402 19.3075 49.0633 21.7609C54.9864 24.2144 59.6923 28.9202 62.1457 34.8433C64.5991 40.7664 64.5991 47.4215 62.1457 53.3446ZM54.1661 58.2685L54.1849 58.25C55.9906 56.4167 57.4463 54.2374 58.4502 51.8139C60.4976 46.8709 60.4976 41.317 58.4502 36.3741C56.4027 31.4311 52.4755 27.5039 47.5326 25.4565C42.5896 23.409 37.0357 23.409 32.0927 25.4565C27.1497 27.5039 23.2226 31.4311 21.1751 36.3741C19.1277 41.317 19.1277 46.8709 21.1751 51.8139C22.1786 54.2365 23.6336 56.4151 25.4384 58.2479L25.4593 58.2686C25.4718 58.281 25.484 58.2936 25.4961 58.3063C27.3622 60.1861 29.5981 61.6982 32.0927 62.7315C37.0357 64.7789 42.5896 64.7789 47.5326 62.7315C50.0282 61.6978 52.2649 60.1849 54.1315 58.304C54.1371 58.2981 54.1427 58.2923 54.1483 58.2866C54.1542 58.2805 54.1602 58.2745 54.1661 58.2685Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreAlarmExclamation = forwardRef((props, ref) => {
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

CoreAlarmExclamation.displayName = 'CoreAlarmExclamation'

export default CoreAlarmExclamation