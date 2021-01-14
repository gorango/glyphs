
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M30 68H6V24H38V29.7895"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 40H74V68H30V40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M11.6077 18L21.9884 23.9969"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16 13.6077L21.9915 23.9915"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22.0001 12L21.9969 23.9884"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22.0085 23.9915L28.0001 13.6077"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.3924 18L22.0085 23.9915"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 58V34"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="1 8"
          />
          <path
            d="M30 54H74"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 68V40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.8565 31.2584C39.0983 27.2231 44.9018 27.2231 47.1436 31.2584L51.8168 39.6702C51.899 39.8182 51.7921 40 51.6228 40H42C37.5136 40 34.6776 35.1803 36.8565 31.2584Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.1435 31.2584C64.9017 27.2231 59.0982 27.2231 56.8564 31.2584L52.1832 39.6702C52.101 39.8182 52.2079 40 52.3772 40H62C66.4864 40 69.3224 35.1803 67.1435 31.2584Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.4856 28.8302C33.5482 26.9176 35.0433 25.495 36.7494 24.5626C36.2569 24.2085 35.6528 24 35 24H9C7.34315 24 6 25.3431 6 27V65C6 66.6569 7.34315 68 9 68H25V40C25 37.2386 27.2386 35 30 35H31.1381C30.9667 32.9653 31.3722 30.8344 32.4856 28.8302ZM38 45V63H35V45H38ZM22 31.5C23.3807 31.5 24.5 32.6193 24.5 34V34.4444C24.5 35.8252 23.3807 36.9444 22 36.9444C20.6193 36.9444 19.5 35.8252 19.5 34.4444V34C19.5 32.6193 20.6193 31.5 22 31.5ZM22 39.0556C23.3807 39.0556 24.5 40.1748 24.5 41.5556V42.4444C24.5 43.8252 23.3807 44.9444 22 44.9444C20.6193 44.9444 19.5 43.8252 19.5 42.4444V41.5556C19.5 40.1748 20.6193 39.0556 22 39.0556ZM22 47.0556C23.3807 47.0556 24.5 48.1748 24.5 49.5556V50.4444C24.5 51.8252 23.3807 52.9444 22 52.9444C20.6193 52.9444 19.5 51.8252 19.5 50.4444V49.5556C19.5 48.1748 20.6193 47.0556 22 47.0556ZM22 55.0556C23.3807 55.0556 24.5 56.1748 24.5 57.5556V58C24.5 59.3807 23.3807 60.5 22 60.5C20.6193 60.5 19.5 59.3807 19.5 58V57.5556C19.5 56.1748 20.6193 55.0556 22 55.0556Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0001 9.5C23.3805 9.5 24.4997 10.6189 24.5001 11.9994V12.0006L24.5008 14.6673L25.8347 12.3583L25.8353 12.3571C26.5259 11.1618 28.0545 10.7524 29.2501 11.4426C30.4456 12.1329 30.8554 13.6614 30.1654 14.8571L30.1648 14.8583L28.8321 17.168L31.1418 15.8353L31.1429 15.8346C32.3386 15.1447 33.8672 15.5545 34.5574 16.75C35.1971 17.858 34.8923 19.2521 33.8928 20H10.1073C9.10779 19.2521 8.80301 17.858 9.44269 16.75C10.1329 15.5545 11.6615 15.1447 12.8572 15.8346L12.8583 15.8353L15.168 17.168L13.8353 14.8583L13.8347 14.8571C13.1448 13.6614 13.5545 12.1329 14.7501 11.4426C15.9456 10.7524 17.4743 11.1618 18.1648 12.3571L18.1654 12.3583L19.4994 14.6673L19.5001 12.0006V11.9994C19.5004 10.6189 20.6196 9.5 22.0001 9.5Z"
            fill="currentColor"
          />
          <rect
            x="30"
            y="40"
            width="44"
            height="28"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 54H74"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 40V68"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.8564 31.2584C39.0983 27.2231 44.9017 27.2231 47.1436 31.2584L51.8168 39.6702C51.899 39.8182 51.792 40 51.6228 40V40H42C37.5135 40 34.6776 35.1803 36.8564 31.2584V31.2584Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.1436 31.2584C64.9017 27.2231 59.0983 27.2231 56.8564 31.2584L52.1832 39.6702C52.101 39.8182 52.208 40 52.3772 40V40H62C66.4865 40 69.3224 35.1803 67.1436 31.2584V31.2584Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38 24H6V68H30V40H38V38.4369C36.1329 36.6949 35.4502 33.7897 36.8564 31.2584C37.1732 30.6882 37.5611 30.1986 38 29.7895V24Z"
            fill="#6FCF97"
          />
          <path
            d="M6 24V22C4.89543 22 4 22.8954 4 24H6ZM38 24H40C40 22.8954 39.1046 22 38 22V24ZM6 68H4C4 69.1046 4.89543 70 6 70V68ZM30 68V70C31.1046 70 32 69.1046 32 68H30ZM30 40V38C28.8954 38 28 38.8954 28 40H30ZM38 40V42C39.1046 42 40 41.1046 40 40H38ZM38 38.4369H40C40 37.8824 39.7698 37.3528 39.3644 36.9746L38 38.4369ZM36.8564 31.2584L38.6047 32.2297V32.2297L36.8564 31.2584ZM38 29.7895L39.3636 31.2526C39.7695 30.8743 40 30.3444 40 29.7895H38ZM6 26H38V22H6V26ZM8 68V24H4V68H8ZM30 66H6V70H30V66ZM28 40V68H32V40H28ZM38 38H30V42H38V38ZM36 38.4369V40H40V38.4369H36ZM35.1081 30.2871C33.2189 33.6876 34.1537 37.5836 36.6356 39.8993L39.3644 36.9746C38.112 35.8061 37.6814 33.8917 38.6047 32.2297L35.1081 30.2871ZM36.6364 28.3265C36.0439 28.8787 35.5263 29.5344 35.1081 30.2871L38.6047 32.2297C38.8201 31.8421 39.0783 31.5185 39.3636 31.2526L36.6364 28.3265ZM36 24V29.7895H40V24H36Z"
            fill="#6FCF97"
          />
          <path
            d="M22 34V58"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="1 8"
          />
          <path
            d="M22 12L24 11.9995C23.9997 10.8951 23.1044 10 22 10C20.8956 10 20.0003 10.8951 20 11.9995L22 12ZM22.0031 23.9884L20.0031 23.9889C20.0033 24.8939 20.6113 25.686 21.4855 25.9203C22.3596 26.1545 23.2822 25.7725 23.7349 24.9889L22.0031 23.9884ZM21.9969 23.9884L20.2651 24.9889C20.7178 25.7725 21.6404 26.1545 22.5145 25.9203C23.3887 25.686 23.9967 24.8939 23.9969 23.9889L21.9969 23.9884ZM16 13.6077L17.7318 12.6072C17.1794 11.651 15.9564 11.3235 15 11.8756C14.0436 12.4278 13.7158 13.6507 14.2677 14.6072L16 13.6077ZM21.9915 23.9915L20.992 25.7238C21.7759 26.1761 22.7658 26.0457 23.4057 25.4057C24.0457 24.7658 24.1761 23.7759 23.7238 22.992L21.9915 23.9915ZM11.6077 18L12.6072 16.2677C11.6507 15.7158 10.4278 16.0436 9.87564 17C9.32346 17.9564 9.65098 19.1794 10.6072 19.7318L11.6077 18ZM21.9884 23.9969L21.9889 25.9969C22.8939 25.9967 23.686 25.3887 23.9203 24.5145C24.1545 23.6404 23.7725 22.7178 22.9889 22.2651L21.9884 23.9969ZM10 24L9.99948 22C8.89501 22.0003 7.99986 22.8958 8 24.0003C8.00014 25.1047 8.89553 26 10 26L10 24ZM34 24V26C35.1045 26 35.9999 25.1047 36 24.0003C36.0001 22.8958 35.105 22.0003 34.0005 22L34 24ZM22.0116 23.9969L21.0111 22.2651C20.2275 22.7178 19.8455 23.6404 20.0797 24.5145C20.314 25.3887 21.1061 25.9967 22.0111 25.9969L22.0116 23.9969ZM32.3923 18L33.3928 19.7318C34.349 19.1794 34.6765 17.9564 34.1244 17C33.5722 16.0436 32.3493 15.7158 31.3928 16.2677L32.3923 18ZM22.0085 23.9915L20.2762 22.992C19.8239 23.7759 19.9543 24.7658 20.5943 25.4057C21.2342 26.0457 22.2241 26.1761 23.008 25.7238L22.0085 23.9915ZM28 13.6077L29.7323 14.6072C30.2842 13.6507 29.9564 12.4278 29 11.8756C28.0436 11.3235 26.8206 11.651 26.2682 12.6072L28 13.6077ZM20 12.0005L20.0031 23.9889L24.0031 23.9879L24 11.9995L20 12.0005ZM23.9969 23.9889L24 12.0005L20 11.9995L19.9969 23.9879L23.9969 23.9889ZM14.2682 14.6081L20.2651 24.9889L23.7287 22.988L17.7318 12.6072L14.2682 14.6081ZM23.7238 22.992L17.7323 12.6081L14.2677 14.6072L20.2592 24.9911L23.7238 22.992ZM10.6081 19.7323L20.992 25.7238L22.9911 22.2592L12.6072 16.2677L10.6081 19.7323ZM22.9889 22.2651L12.6081 16.2682L10.6072 19.7318L20.988 25.7287L22.9889 22.2651ZM10.0005 26L21.9889 25.9969L21.9879 21.9969L9.99948 22L10.0005 26ZM10 26H34V22H10V26ZM22.0111 25.9969L33.9995 26L34.0005 22L22.0121 21.9969L22.0111 25.9969ZM31.3919 16.2682L21.0111 22.2651L23.012 25.7287L33.3928 19.7318L31.3919 16.2682ZM23.008 25.7238L33.3919 19.7323L31.3928 16.2677L21.0089 22.2592L23.008 25.7238ZM26.2677 12.6081L20.2762 22.992L23.7408 24.9911L29.7323 14.6072L26.2677 12.6081ZM23.7349 24.9889L29.7318 14.6081L26.2682 12.6072L20.2713 22.988L23.7349 24.9889Z"
            fill="#EB5757"
          />
          <rect
            x="30"
            y="40"
            width="44"
            height="28"
            fill="#9B51E0"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 54H74"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52 40V68"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.8564 31.2584C39.0983 27.2231 44.9017 27.2231 47.1436 31.2584L51.8168 39.6702C51.899 39.8182 51.792 40 51.6228 40V40H42C37.5135 40 34.6776 35.1803 36.8564 31.2584V31.2584Z"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M67.1436 31.2584C64.9017 27.2231 59.0983 27.2231 56.8564 31.2584L52.1832 39.6702C52.101 39.8182 52.208 40 52.3772 40V40H62C66.4865 40 69.3224 35.1803 67.1436 31.2584V31.2584Z"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M38 24H6V68H30V40H38V38.4369C36.1329 36.6949 35.4502 33.7897 36.8564 31.2584C37.1732 30.6882 37.5611 30.1986 38 29.7895V24Z"
            fill="currentColor"
            fill-opacity="0.25"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 58V34"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
            stroke-dasharray="1 8"
          />
          <path
            d="M22.0031 23.9884L22 12L21.9969 23.9884L16 13.6077L21.9915 23.9915L11.6077 18L21.9884 23.9969L10 24H34L22.0116 23.9969L32.3923 18L22.0085 23.9915L28 13.6077L22.0031 23.9884Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 40H74V68H30V40Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36.8564 31.2584C39.0983 27.2231 44.9017 27.2231 47.1436 31.2584L51.8168 39.6702C51.899 39.8182 51.792 40 51.6228 40H42C37.5135 40 34.6776 35.1803 36.8564 31.2584Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M67.1436 31.2584C64.9017 27.2231 59.0983 27.2231 56.8564 31.2584L52.1832 39.6702C52.101 39.8182 52.208 40 52.3772 40H62C66.4865 40 69.3224 35.1803 67.1436 31.2584Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 54H74M52 68V40M30 40H74V68H30V40ZM51.6228 40H42C37.5135 40 34.6776 35.1803 36.8564 31.2584C39.0983 27.2231 44.9017 27.2231 47.1436 31.2584L51.8168 39.6702C51.899 39.8182 51.792 40 51.6228 40ZM52.3772 40H62C66.4865 40 69.3224 35.1803 67.1436 31.2584C64.9017 27.2231 59.0983 27.2231 56.8564 31.2584L52.1832 39.6702C52.101 39.8182 52.208 40 52.3772 40Z"
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
            d="M24 34C24 32.8954 23.1046 32 22 32C20.8954 32 20 32.8954 20 34V34.4444C20 35.549 20.8954 36.4444 22 36.4444C23.1046 36.4444 24 35.549 24 34.4444V34Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 41.5556C24 40.451 23.1046 39.5556 22 39.5556C20.8954 39.5556 20 40.451 20 41.5556V42.4444C20 43.549 20.8954 44.4444 22 44.4444C23.1046 44.4444 24 43.549 24 42.4444V41.5556Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 49.5556C24 48.451 23.1046 47.5556 22 47.5556C20.8954 47.5556 20 48.451 20 49.5556V50.4444C20 51.549 20.8954 52.4444 22 52.4444C23.1046 52.4444 24 51.549 24 50.4444V49.5556Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 57.5556C24 56.451 23.1046 55.5556 22 55.5556C20.8954 55.5556 20 56.451 20 57.5556V58C20 59.1046 20.8954 60 22 60C23.1046 60 24 59.1046 24 58V57.5556Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 10C23.1044 10 23.9997 10.8951 24 11.9995L24.0012 16.5315L26.2677 12.6081L26.2682 12.6072C26.8206 11.651 28.0436 11.3235 29 11.8756C29.9564 12.4278 30.2842 13.6507 29.7323 14.6072L29.7318 14.6081L27.4673 18.5327L31.3928 16.2677C32.3493 15.7158 33.5722 16.0436 34.1244 17C34.6765 17.9564 34.349 19.1794 33.3928 19.7318L29.4685 21.9988L38 22C39.1046 22 40 22.8954 40 24V26.4847C43.2749 25.6412 47.015 26.9087 48.8919 30.2871L52 35.8817L55.1081 30.2871C58.112 24.8802 65.888 24.8802 68.8919 30.2871C70.3272 32.8708 70.1384 35.7453 68.8609 38H74C75.1046 38 76 38.8954 76 40V68C76 69.1046 75.1046 70 74 70H6C4.89543 70 4 69.1046 4 68V24C4 22.8954 4.89543 22 6 22L14.5315 21.9988L10.6072 19.7318C9.65098 19.1794 9.32346 17.9564 9.87564 17C10.4278 16.0436 11.6507 15.7158 12.6072 16.2677L16.5327 18.5327L14.2677 14.6072C13.7158 13.6507 14.0436 12.4278 15 11.8756C15.9564 11.3235 17.1794 11.651 17.7318 12.6072L19.9988 16.5315L20 11.9995C20.0003 10.8951 20.8956 10 22 10ZM54 42V52H72V42H54ZM62 38C64.9615 38 66.8335 34.8185 65.3953 32.2297C63.9154 29.566 60.0846 29.566 58.6047 32.2297L55.399 38H62ZM36 26V28.9918C35.6767 29.3748 35.3823 29.7976 35.1231 30.2603L35.1081 30.2871C35.0632 30.3681 35.0198 30.4492 34.978 30.5307C33.6857 33.0502 33.9016 35.8159 35.1391 38H30C28.8954 38 28 38.8954 28 40V66H8V26H36ZM32 42H50V52H32V42ZM45.3953 32.2297L48.601 38H42C39.1128 38 37.2611 34.9761 38.5027 32.4256C38.5347 32.3599 38.5687 32.2946 38.6047 32.2297C40.0846 29.566 43.9154 29.566 45.3953 32.2297ZM54 66H72V56H54V66ZM50 56V66H32V56H50Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGifts = forwardRef((props, ref) => {
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

CoreGifts.displayName = 'CoreGifts'

export default CoreGifts
