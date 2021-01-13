
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M19 40H33L33.2235 39.9924C35.3287 39.8498 37 37.713 37 35.5788L37 15.9297C37 13.7205 35.2091 11.9297 33 11.9297C30.7909 11.9297 29 13.7205 29 15.9297L29 22.7367H27.8951C28.1959 21.447 27.8502 20.0358 26.8533 19.0211C25.3051 17.4453 22.7726 17.4229 21.1967 18.9711L21.025 19.1397C19.7297 20.4124 19 22.1521 19 23.9681C19 27.7063 22.0304 30.7367 25.7686 30.7367H29V31.5788H18C14.134 31.5788 11 34.7128 11 38.5788L11 39.9999"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 40.0001C33.075 40.0001 33.1495 40.0027 33.2235 40.0077C35.3287 40.1503 37 42.2869 37 44.4211L37 64.0702C37 66.2793 35.2091 68.0702 33 68.0702C30.7909 68.0702 29 66.2793 29 64.0702L29 57.2632H27.8951C28.1959 58.5529 27.8502 59.9641 26.8533 60.9787C25.3051 62.5546 22.7726 62.577 21.1967 61.0288L21.025 60.8601C19.7297 59.5875 19 57.8477 19 56.0318C19 52.2936 22.0304 49.2632 25.7686 49.2632H29V48.4211H18C14.134 48.4211 11 45.287 11 41.4211L11 40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M61 40H47L46.7765 40.0076C44.6713 40.1502 43 42.287 43 44.4212L43 64.0703C43 66.2795 44.7909 68.0703 47 68.0703C49.2091 68.0703 51 66.2795 51 64.0703L51 57.2633H52.1049C51.8041 58.553 52.1498 59.9642 53.1467 60.9789C54.6949 62.5547 57.2274 62.5771 58.8033 61.0289L58.975 60.8603C60.2703 59.5876 61 57.8479 61 56.0319C61 52.2937 57.9696 49.2633 54.2314 49.2633H51V48.4212H62C65.866 48.4212 69 45.2872 69 41.4212L69 40.0001"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47 39.9999C46.925 39.9999 46.8505 39.9973 46.7765 39.9923C44.6713 39.8497 43 37.7131 43 35.5789L43 15.9298C43 13.7207 44.7909 11.9298 47 11.9298C49.2091 11.9298 51 13.7207 51 15.9298L51 22.7368H52.1049C51.8041 21.4471 52.1498 20.0359 53.1467 19.0213C54.6949 17.4454 57.2274 17.423 58.8033 18.9712L58.975 19.1399C60.2703 20.4125 61 22.1523 61 23.9682C61 27.7064 57.9696 30.7368 54.2314 30.7368H51V31.5789H62C65.866 31.5789 69 34.713 69 38.5789L69 40"
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
            d="M19 40.4212L33 40.4212C35.2091 40.4212 37 42.2121 37 44.4212L37 53.2633L37 64.0703C37 66.2795 35.2091 68.0703 33 68.0703C30.7909 68.0703 29 66.2795 29 64.0703L29 57.2633L27.8951 57.2633C28.1959 58.553 27.8502 59.9642 26.8533 60.9789C25.3051 62.5547 22.7726 62.5771 21.1967 61.0289L21.025 60.8602C19.7297 59.5876 19 57.8479 19 56.0319C19 52.2937 22.0304 49.2633 25.7686 49.2633L29 49.2633L29 48.4212L18 48.4212C14.134 48.4212 11 45.2872 11 41.4212L11 40.0001L11 38.5791C11 34.7131 14.134 31.5791 18 31.5791L29 31.5791L29 30.737L25.7686 30.737C22.0304 30.737 19 27.7066 19 23.9683C19 22.1524 19.7297 20.4127 21.025 19.14L21.1967 18.9714C22.7726 17.4231 25.3051 17.4456 26.8533 19.0214C27.8502 20.036 28.1959 21.4472 27.8951 22.737L29 22.737L29 15.93C29 13.7208 30.7909 11.93 33 11.93C35.2091 11.93 37 13.7208 37 15.93L37 26.737L37 35.5791C37 37.7882 35.2091 39.5791 33 39.5791L19 39.5791L19 40.0001L19 40.4212Z"
            fill="currentColor"
          />
          <path
            d="M33 40.4212L33 38.4212L33 40.4212ZM19 40.4212L17 40.4212C17 41.5258 17.8954 42.4212 19 42.4212L19 40.4212ZM29 64.0703L27 64.0703L29 64.0703ZM29 57.2633L31 57.2633C31 56.7329 30.7893 56.2242 30.4142 55.8491C30.0391 55.474 29.5304 55.2633 29 55.2633L29 57.2633ZM27.8951 57.2633L27.8951 55.2633C27.2848 55.2633 26.7079 55.542 26.3285 56.02C25.9491 56.4981 25.8088 57.1232 25.9474 57.7175L27.8951 57.2633ZM26.8533 60.9789L28.28 62.3805L28.28 62.3805L26.8533 60.9789ZM21.1967 61.0289L22.5984 59.6022L22.5984 59.6022L21.1967 61.0289ZM21.025 60.8602L19.6234 62.2869L19.6234 62.2869L21.025 60.8602ZM29 49.2633L29 51.2633C30.1046 51.2633 31 50.3679 31 49.2633L29 49.2633ZM29 48.4212L31 48.4212C31 47.3166 30.1046 46.4212 29 46.4212L29 48.4212ZM11 41.4212L13 41.4212L11 41.4212ZM11 40.0001L9 40.0001L11 40.0001ZM11 38.5791L13 38.5791L11 38.5791ZM29 31.5791L29 33.5791C30.1046 33.5791 31 32.6837 31 31.5791L29 31.5791ZM29 30.737L31 30.737C31 30.2065 30.7893 29.6978 30.4142 29.3228C30.0391 28.9477 29.5304 28.737 29 28.737L29 30.737ZM21.025 19.14L19.6234 17.7133L19.6234 17.7133L21.025 19.14ZM21.1967 18.9714L22.5983 20.398L22.5984 20.398L21.1967 18.9714ZM26.8533 19.0214L25.4267 20.4231L25.4267 20.4231L26.8533 19.0214ZM27.8951 22.737L25.9474 22.2827C25.8088 22.8771 25.9491 23.5022 26.3285 23.9803C26.7079 24.4583 27.2848 24.737 27.8951 24.737L27.8951 22.737ZM29 22.737L29 24.737C29.5304 24.737 30.0391 24.5263 30.4142 24.1512C30.7893 23.7761 31 23.2674 31 22.737L29 22.737ZM29 15.93L27 15.93L29 15.93ZM37 15.93L39 15.93L37 15.93ZM37 26.737L35 26.737L37 26.737ZM37 35.5791L39 35.5791L37 35.5791ZM33 39.5791L33 37.5791L33 39.5791ZM19 39.5791L19 37.5791C17.8954 37.5791 17 38.4745 17 39.5791L19 39.5791ZM19 40.0001L17 40.0001L19 40.0001ZM33 38.4212L19 38.4212L19 42.4212L33 42.4212L33 38.4212ZM39 44.4212C39 41.1075 36.3137 38.4212 33 38.4212L33 42.4212C34.1046 42.4212 35 43.3166 35 44.4212L39 44.4212ZM39 53.2633L39 44.4212L35 44.4212L35 53.2633L39 53.2633ZM39 64.0703L39 53.2633L35 53.2633L35 64.0703L39 64.0703ZM33 70.0703C36.3137 70.0703 39 67.384 39 64.0703L35 64.0703C35 65.1749 34.1046 66.0703 33 66.0703L33 70.0703ZM27 64.0703C27 67.384 29.6863 70.0703 33 70.0703L33 66.0703C31.8954 66.0703 31 65.1749 31 64.0703L27 64.0703ZM27 57.2633L27 64.0703L31 64.0703L31 57.2633L27 57.2633ZM27.8951 59.2633L29 59.2633L29 55.2633L27.8951 55.2633L27.8951 59.2633ZM28.28 62.3805C29.7768 60.857 30.2926 58.7377 29.8428 56.8091L25.9474 57.7175C26.0992 58.3684 25.9236 59.0714 25.4267 59.5772L28.28 62.3805ZM19.7951 62.4556C22.1589 64.7779 25.9577 64.7443 28.28 62.3805L25.4267 59.5772C24.6526 60.3651 23.3863 60.3764 22.5984 59.6022L19.7951 62.4556ZM19.6234 62.2869L19.7951 62.4556L22.5984 59.6022L22.4267 59.4336L19.6234 62.2869ZM17 56.0319C17 58.3844 17.9453 60.6382 19.6234 62.2869L22.4267 59.4336C21.5141 58.537 21 57.3113 21 56.0319L17 56.0319ZM25.7686 47.2633C20.9259 47.2633 17 51.1891 17 56.0319L21 56.0319C21 53.3983 23.135 51.2633 25.7686 51.2633L25.7686 47.2633ZM29 47.2633L25.7686 47.2633L25.7686 51.2633L29 51.2633L29 47.2633ZM27 48.4212L27 49.2633L31 49.2633L31 48.4212L27 48.4212ZM18 50.4212L29 50.4212L29 46.4212L18 46.4212L18 50.4212ZM9 41.4212C9 46.3918 13.0294 50.4212 18 50.4212L18 46.4212C15.2386 46.4212 13 44.1826 13 41.4212L9 41.4212ZM9 40.0001L9 41.4212L13 41.4212L13 40.0001L9 40.0001ZM9 38.5791L9 40.0001L13 40.0001L13 38.5791L9 38.5791ZM18 29.5791C13.0294 29.5791 9 33.6085 9 38.5791L13 38.5791C13 35.8177 15.2386 33.5791 18 33.5791L18 29.5791ZM29 29.5791L18 29.5791L18 33.5791L29 33.5791L29 29.5791ZM27 30.737L27 31.5791L31 31.5791L31 30.737L27 30.737ZM25.7686 32.737L29 32.737L29 28.737L25.7686 28.737L25.7686 32.737ZM17 23.9683C17 28.8111 20.9259 32.737 25.7686 32.737L25.7686 28.737C23.135 28.737 21 26.602 21 23.9683L17 23.9683ZM19.6234 17.7133C17.9453 19.362 17 21.6159 17 23.9683L21 23.9683C21 22.689 21.5141 21.4633 22.4267 20.5667L19.6234 17.7133ZM19.7951 17.5447L19.6234 17.7133L22.4267 20.5667L22.5983 20.398L19.7951 17.5447ZM28.28 17.6198C25.9577 15.256 22.1589 15.2224 19.7951 17.5447L22.5984 20.398C23.3863 19.6239 24.6526 19.6351 25.4267 20.4231L28.28 17.6198ZM29.8428 23.1912C30.2926 21.2626 29.7768 19.1432 28.28 17.6198L25.4267 20.4231C25.9236 20.9288 26.0992 21.6319 25.9474 22.2827L29.8428 23.1912ZM29 20.737L27.8951 20.737L27.8951 24.737L29 24.737L29 20.737ZM27 15.93L27 22.737L31 22.737L31 15.93L27 15.93ZM33 9.92996C29.6863 9.92996 27 12.6163 27 15.93L31 15.93C31 14.8254 31.8954 13.93 33 13.93L33 9.92996ZM39 15.93C39 12.6163 36.3137 9.92996 33 9.92996L33 13.93C34.1046 13.93 35 14.8254 35 15.93L39 15.93ZM39 26.737L39 15.93L35 15.93L35 26.737L39 26.737ZM39 35.5791L39 26.737L35 26.737L35 35.5791L39 35.5791ZM33 41.5791C36.3137 41.5791 39 38.8928 39 35.5791L35 35.5791C35 36.6837 34.1046 37.5791 33 37.5791L33 41.5791ZM19 41.5791L33 41.5791L33 37.5791L19 37.5791L19 41.5791ZM21 40.0001L21 39.5791L17 39.5791L17 40.0001L21 40.0001ZM21 40.4212L21 40.0001L17 40.0001L17 40.4212L21 40.4212Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61 40.4212L47 40.4212C44.7909 40.4212 43 42.2121 43 44.4212L43 53.2633L43 64.0703C43 66.2795 44.7909 68.0703 47 68.0703C49.2091 68.0703 51 66.2795 51 64.0703L51 57.2633L52.1049 57.2633C51.8041 58.553 52.1498 59.9642 53.1467 60.9789C54.6949 62.5547 57.2274 62.5771 58.8033 61.0289L58.975 60.8602C60.2703 59.5876 61 57.8479 61 56.0319C61 52.2937 57.9696 49.2633 54.2314 49.2633L51 49.2633L51 48.4212L62 48.4212C65.866 48.4212 69 45.2872 69 41.4212L69 40.0001L69 38.5791C69 34.7131 65.866 31.5791 62 31.5791L51 31.5791L51 30.737L54.2314 30.737C57.9696 30.737 61 27.7066 61 23.9683C61 22.1524 60.2703 20.4127 58.975 19.14L58.8033 18.9714C57.2274 17.4231 54.6949 17.4456 53.1467 19.0214C52.1498 20.036 51.8041 21.4472 52.1049 22.737L51 22.737L51 15.93C51 13.7208 49.2091 11.93 47 11.93C44.7909 11.93 43 13.7208 43 15.93L43 26.737L43 35.5791C43 37.7882 44.7909 39.5791 47 39.5791L61 39.5791L61 40.0001L61 40.4212Z"
            fill="currentColor"
          />
          <path
            d="M47 40.4212L47 38.4212L47 40.4212ZM61 40.4212L63 40.4212C63 41.5258 62.1046 42.4212 61 42.4212L61 40.4212ZM51 64.0703L53 64.0703L51 64.0703ZM51 57.2633L49 57.2633C49 56.1587 49.8954 55.2633 51 55.2633L51 57.2633ZM52.1049 57.2633L52.1049 55.2633C52.7152 55.2633 53.2921 55.542 53.6715 56.02C54.0509 56.4981 54.1912 57.1232 54.0526 57.7175L52.1049 57.2633ZM53.1467 60.9789L51.72 62.3805L51.72 62.3805L53.1467 60.9789ZM58.8033 61.0289L57.4016 59.6022L57.4016 59.6022L58.8033 61.0289ZM58.975 60.8602L60.3766 62.2869L60.3766 62.2869L58.975 60.8602ZM51 49.2633L51 51.2633C49.8954 51.2633 49 50.3679 49 49.2633L51 49.2633ZM51 48.4212L49 48.4212C49 47.3166 49.8954 46.4212 51 46.4212L51 48.4212ZM69 41.4212L67 41.4212L69 41.4212ZM69 40.0001L71 40.0001L69 40.0001ZM69 38.5791L67 38.5791L69 38.5791ZM51 31.5791L51 33.5791C49.8954 33.5791 49 32.6837 49 31.5791L51 31.5791ZM51 30.737L49 30.737C49 30.2065 49.2107 29.6978 49.5858 29.3228C49.9609 28.9477 50.4696 28.737 51 28.737L51 30.737ZM58.975 19.14L60.3766 17.7133L60.3766 17.7133L58.975 19.14ZM58.8033 18.9714L57.4017 20.398L57.4016 20.398L58.8033 18.9714ZM53.1467 19.0214L54.5733 20.4231L54.5733 20.4231L53.1467 19.0214ZM52.1049 22.737L54.0526 22.2827C54.1912 22.8771 54.0509 23.5022 53.6715 23.9803C53.2921 24.4583 52.7152 24.737 52.1049 24.737L52.1049 22.737ZM51 22.737L51 24.737C50.4696 24.737 49.9609 24.5263 49.5858 24.1512C49.2107 23.7761 49 23.2674 49 22.737L51 22.737ZM51 15.93L53 15.93L51 15.93ZM43 15.93L41 15.93L43 15.93ZM43 26.737L45 26.737L43 26.737ZM43 35.5791L41 35.5791L43 35.5791ZM47 39.5791L47 37.5791L47 39.5791ZM61 39.5791L61 37.5791C62.1046 37.5791 63 38.4745 63 39.5791L61 39.5791ZM61 40.0001L63 40.0001L61 40.0001ZM47 38.4212L61 38.4212L61 42.4212L47 42.4212L47 38.4212ZM41 44.4212C41 41.1075 43.6863 38.4212 47 38.4212L47 42.4212C45.8954 42.4212 45 43.3166 45 44.4212L41 44.4212ZM41 53.2633L41 44.4212L45 44.4212L45 53.2633L41 53.2633ZM41 64.0703L41 53.2633L45 53.2633L45 64.0703L41 64.0703ZM47 70.0703C43.6863 70.0703 41 67.384 41 64.0703L45 64.0703C45 65.1749 45.8954 66.0703 47 66.0703L47 70.0703ZM53 64.0703C53 67.384 50.3137 70.0703 47 70.0703L47 66.0703C48.1046 66.0703 49 65.1749 49 64.0703L53 64.0703ZM53 57.2633L53 64.0703L49 64.0703L49 57.2633L53 57.2633ZM52.1049 59.2633L51 59.2633L51 55.2633L52.1049 55.2633L52.1049 59.2633ZM51.72 62.3805C50.2232 60.857 49.7074 58.7377 50.1572 56.8091L54.0526 57.7175C53.9008 58.3684 54.0764 59.0714 54.5733 59.5772L51.72 62.3805ZM60.2049 62.4556C57.8411 64.7779 54.0423 64.7443 51.72 62.3805L54.5733 59.5772C55.3474 60.3651 56.6137 60.3764 57.4016 59.6022L60.2049 62.4556ZM60.3766 62.2869L60.2049 62.4556L57.4016 59.6022L57.5733 59.4336L60.3766 62.2869ZM63 56.0319C63 58.3844 62.0547 60.6382 60.3766 62.2869L57.5733 59.4336C58.4859 58.537 59 57.3113 59 56.0319L63 56.0319ZM54.2314 47.2633C59.0741 47.2633 63 51.1891 63 56.0319L59 56.0319C59 53.3983 56.865 51.2633 54.2314 51.2633L54.2314 47.2633ZM51 47.2633L54.2314 47.2633L54.2314 51.2633L51 51.2633L51 47.2633ZM53 48.4212L53 49.2633L49 49.2633L49 48.4212L53 48.4212ZM62 50.4212L51 50.4212L51 46.4212L62 46.4212L62 50.4212ZM71 41.4212C71 46.3918 66.9706 50.4212 62 50.4212L62 46.4212C64.7614 46.4212 67 44.1826 67 41.4212L71 41.4212ZM71 40.0001L71 41.4212L67 41.4212L67 40.0001L71 40.0001ZM71 38.5791L71 40.0001L67 40.0001L67 38.5791L71 38.5791ZM62 29.5791C66.9706 29.5791 71 33.6085 71 38.5791L67 38.5791C67 35.8177 64.7614 33.5791 62 33.5791L62 29.5791ZM51 29.5791L62 29.5791L62 33.5791L51 33.5791L51 29.5791ZM53 30.737L53 31.5791L49 31.5791L49 30.737L53 30.737ZM54.2314 32.737L51 32.737L51 28.737L54.2314 28.737L54.2314 32.737ZM63 23.9683C63 28.8111 59.0741 32.737 54.2314 32.737L54.2314 28.737C56.865 28.737 59 26.602 59 23.9683L63 23.9683ZM60.3766 17.7133C62.0547 19.362 63 21.6159 63 23.9683L59 23.9683C59 22.689 58.4859 21.4633 57.5733 20.5667L60.3766 17.7133ZM60.2049 17.5447L60.3766 17.7133L57.5733 20.5667L57.4017 20.398L60.2049 17.5447ZM51.72 17.6198C54.0423 15.256 57.8411 15.2224 60.2049 17.5447L57.4016 20.398C56.6137 19.6239 55.3474 19.6351 54.5733 20.4231L51.72 17.6198ZM50.1572 23.1912C49.7074 21.2626 50.2232 19.1432 51.72 17.6198L54.5733 20.4231C54.0764 20.9288 53.9008 21.6319 54.0526 22.2827L50.1572 23.1912ZM51 20.737L52.1049 20.737L52.1049 24.737L51 24.737L51 20.737ZM53 15.93L53 22.737L49 22.737L49 15.93L53 15.93ZM47 9.92996C50.3137 9.92996 53 12.6163 53 15.93L49 15.93C49 14.8254 48.1046 13.93 47 13.93L47 9.92996ZM41 15.93C41 12.6163 43.6863 9.92996 47 9.92996L47 13.93C45.8954 13.93 45 14.8254 45 15.93L41 15.93ZM41 26.737L41 15.93L45 15.93L45 26.737L41 26.737ZM41 35.5791L41 26.737L45 26.737L45 35.5791L41 35.5791ZM47 41.5791C43.6863 41.5791 41 38.8928 41 35.5791L45 35.5791C45 36.6837 45.8954 37.5791 47 37.5791L47 41.5791ZM61 41.5791L47 41.5791L47 37.5791L61 37.5791L61 41.5791ZM59 40.0001L59 39.5791L63 39.5791L63 40.0001L59 40.0001ZM59 40.4212L59 40.0001L63 40.0001L63 40.4212L59 40.4212Z"
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
            d="M19 40.4212L33 40.4212C35.2091 40.4212 37 42.2121 37 44.4212L37 53.2633L37 64.0703C37 66.2795 35.2091 68.0703 33 68.0703C30.7909 68.0703 29 66.2795 29 64.0703L29 57.2633L27.8951 57.2633C28.1959 58.553 27.8502 59.9642 26.8533 60.9789C25.3051 62.5547 22.7726 62.5771 21.1967 61.0289L21.025 60.8602C19.7297 59.5876 19 57.8479 19 56.0319C19 52.2937 22.0304 49.2633 25.7686 49.2633L29 49.2633L29 48.4212L18 48.4212C14.134 48.4212 11 45.2872 11 41.4212L11 40.0001L11 38.5791C11 34.7131 14.134 31.5791 18 31.5791L29 31.5791L29 30.737L25.7686 30.737C22.0304 30.737 19 27.7066 19 23.9683C19 22.1524 19.7297 20.4127 21.025 19.14L21.1967 18.9714C22.7726 17.4231 25.3051 17.4456 26.8533 19.0214C27.8502 20.036 28.1959 21.4472 27.8951 22.737L29 22.737L29 15.93C29 13.7208 30.7909 11.93 33 11.93C35.2091 11.93 37 13.7208 37 15.93L37 26.737L37 35.5791C37 37.7882 35.2091 39.5791 33 39.5791L19 39.5791L19 40.0001L19 40.4212Z"
            fill="#F2C94C"
          />
          <path
            d="M33 40.4212L33 38.4212L33 40.4212ZM19 40.4212L17 40.4212C17 41.5258 17.8954 42.4212 19 42.4212L19 40.4212ZM29 64.0703L27 64.0703L29 64.0703ZM29 57.2633L31 57.2633C31 56.1587 30.1046 55.2633 29 55.2633L29 57.2633ZM27.8951 57.2633L27.8951 55.2633C27.2848 55.2633 26.7079 55.542 26.3285 56.02C25.9491 56.4981 25.8088 57.1232 25.9474 57.7175L27.8951 57.2633ZM26.8533 60.9789L28.28 62.3805L28.28 62.3805L26.8533 60.9789ZM21.1967 61.0289L22.5984 59.6022L22.5984 59.6022L21.1967 61.0289ZM21.025 60.8602L19.6234 62.2869L19.6234 62.2869L21.025 60.8602ZM29 49.2633L29 51.2633C30.1046 51.2633 31 50.3679 31 49.2633L29 49.2633ZM29 48.4212L31 48.4212C31 47.3166 30.1046 46.4212 29 46.4212L29 48.4212ZM11 41.4212L13 41.4212L11 41.4212ZM11 40.0001L9 40.0001L11 40.0001ZM11 38.5791L13 38.5791L11 38.5791ZM29 31.5791L29 33.5791C30.1046 33.5791 31 32.6837 31 31.5791L29 31.5791ZM29 30.737L31 30.737C31 30.2065 30.7893 29.6978 30.4142 29.3228C30.0391 28.9477 29.5304 28.737 29 28.737L29 30.737ZM21.025 19.14L19.6234 17.7133L19.6234 17.7133L21.025 19.14ZM21.1967 18.9714L22.5983 20.398L22.5984 20.398L21.1967 18.9714ZM26.8533 19.0214L25.4267 20.4231L25.4267 20.4231L26.8533 19.0214ZM27.8951 22.737L25.9474 22.2827C25.8088 22.8771 25.9491 23.5022 26.3285 23.9803C26.7079 24.4583 27.2848 24.737 27.8951 24.737L27.8951 22.737ZM29 22.737L29 24.737C29.5304 24.737 30.0391 24.5263 30.4142 24.1512C30.7893 23.7761 31 23.2674 31 22.737L29 22.737ZM29 15.93L27 15.93L29 15.93ZM37 15.93L39 15.93L37 15.93ZM37 26.737L35 26.737L37 26.737ZM37 35.5791L39 35.5791L37 35.5791ZM33 39.5791L33 37.5791L33 39.5791ZM19 39.5791L19 37.5791C17.8954 37.5791 17 38.4745 17 39.5791L19 39.5791ZM19 40.0001L17 40.0001L19 40.0001ZM33 38.4212L19 38.4212L19 42.4212L33 42.4212L33 38.4212ZM39 44.4212C39 41.1075 36.3137 38.4212 33 38.4212L33 42.4212C34.1046 42.4212 35 43.3166 35 44.4212L39 44.4212ZM39 53.2633L39 44.4212L35 44.4212L35 53.2633L39 53.2633ZM39 64.0703L39 53.2633L35 53.2633L35 64.0703L39 64.0703ZM33 70.0703C36.3137 70.0703 39 67.384 39 64.0703L35 64.0703C35 65.1749 34.1046 66.0703 33 66.0703L33 70.0703ZM27 64.0703C27 67.384 29.6863 70.0703 33 70.0703L33 66.0703C31.8954 66.0703 31 65.1749 31 64.0703L27 64.0703ZM27 57.2633L27 64.0703L31 64.0703L31 57.2633L27 57.2633ZM27.8951 59.2633L29 59.2633L29 55.2633L27.8951 55.2633L27.8951 59.2633ZM28.28 62.3805C29.7768 60.857 30.2926 58.7377 29.8428 56.8091L25.9474 57.7175C26.0992 58.3684 25.9236 59.0714 25.4267 59.5772L28.28 62.3805ZM19.7951 62.4556C22.1589 64.7779 25.9577 64.7443 28.28 62.3805L25.4267 59.5772C24.6526 60.3651 23.3863 60.3764 22.5984 59.6022L19.7951 62.4556ZM19.6234 62.2869L19.7951 62.4556L22.5984 59.6022L22.4267 59.4336L19.6234 62.2869ZM17 56.0319C17 58.3844 17.9453 60.6382 19.6234 62.2869L22.4267 59.4336C21.5141 58.537 21 57.3113 21 56.0319L17 56.0319ZM25.7686 47.2633C20.9259 47.2633 17 51.1891 17 56.0319L21 56.0319C21 53.3983 23.135 51.2633 25.7686 51.2633L25.7686 47.2633ZM29 47.2633L25.7686 47.2633L25.7686 51.2633L29 51.2633L29 47.2633ZM27 48.4212L27 49.2633L31 49.2633L31 48.4212L27 48.4212ZM18 50.4212L29 50.4212L29 46.4212L18 46.4212L18 50.4212ZM9 41.4212C9 46.3918 13.0294 50.4212 18 50.4212L18 46.4212C15.2386 46.4212 13 44.1826 13 41.4212L9 41.4212ZM9 40.0001L9 41.4212L13 41.4212L13 40.0001L9 40.0001ZM9 38.5791L9 40.0001L13 40.0001L13 38.5791L9 38.5791ZM18 29.5791C13.0294 29.5791 9 33.6085 9 38.5791L13 38.5791C13 35.8177 15.2386 33.5791 18 33.5791L18 29.5791ZM29 29.5791L18 29.5791L18 33.5791L29 33.5791L29 29.5791ZM27 30.737L27 31.5791L31 31.5791L31 30.737L27 30.737ZM25.7686 32.737L29 32.737L29 28.737L25.7686 28.737L25.7686 32.737ZM17 23.9683C17 28.8111 20.9259 32.737 25.7686 32.737L25.7686 28.737C23.135 28.737 21 26.602 21 23.9683L17 23.9683ZM19.6234 17.7133C17.9453 19.362 17 21.6159 17 23.9683L21 23.9683C21 22.689 21.5141 21.4633 22.4267 20.5667L19.6234 17.7133ZM19.7951 17.5447L19.6234 17.7133L22.4267 20.5667L22.5983 20.398L19.7951 17.5447ZM28.28 17.6198C25.9577 15.256 22.1589 15.2224 19.7951 17.5447L22.5984 20.398C23.3863 19.6239 24.6526 19.6351 25.4267 20.4231L28.28 17.6198ZM29.8428 23.1912C30.2926 21.2626 29.7768 19.1432 28.28 17.6198L25.4267 20.4231C25.9236 20.9288 26.0992 21.6319 25.9474 22.2827L29.8428 23.1912ZM29 20.737L27.8951 20.737L27.8951 24.737L29 24.737L29 20.737ZM27 15.93L27 22.737L31 22.737L31 15.93L27 15.93ZM33 9.92996C29.6863 9.92996 27 12.6163 27 15.93L31 15.93C31 14.8254 31.8954 13.93 33 13.93L33 9.92996ZM39 15.93C39 12.6163 36.3137 9.92996 33 9.92996L33 13.93C34.1046 13.93 35 14.8254 35 15.93L39 15.93ZM39 26.737L39 15.93L35 15.93L35 26.737L39 26.737ZM39 35.5791L39 26.737L35 26.737L35 35.5791L39 35.5791ZM33 41.5791C36.3137 41.5791 39 38.8928 39 35.5791L35 35.5791C35 36.6837 34.1046 37.5791 33 37.5791L33 41.5791ZM19 41.5791L33 41.5791L33 37.5791L19 37.5791L19 41.5791ZM21 40.0001L21 39.5791L17 39.5791L17 40.0001L21 40.0001ZM21 40.4212L21 40.0001L17 40.0001L17 40.4212L21 40.4212Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61 40.4212L47 40.4212C44.7909 40.4212 43 42.2121 43 44.4212L43 53.2633L43 64.0703C43 66.2795 44.7909 68.0703 47 68.0703C49.2091 68.0703 51 66.2795 51 64.0703L51 57.2633L52.1049 57.2633C51.8041 58.553 52.1498 59.9642 53.1467 60.9789C54.6949 62.5547 57.2274 62.5771 58.8033 61.0289L58.975 60.8602C60.2703 59.5876 61 57.8479 61 56.0319C61 52.2937 57.9696 49.2633 54.2314 49.2633L51 49.2633L51 48.4212L62 48.4212C65.866 48.4212 69 45.2872 69 41.4212L69 40.0001L69 38.5791C69 34.7131 65.866 31.5791 62 31.5791L51 31.5791L51 30.737L54.2314 30.737C57.9696 30.737 61 27.7066 61 23.9683C61 22.1524 60.2703 20.4127 58.975 19.14L58.8033 18.9714C57.2274 17.4231 54.6949 17.4456 53.1467 19.0214C52.1498 20.036 51.8041 21.4472 52.1049 22.737L51 22.737L51 15.93C51 13.7208 49.2091 11.93 47 11.93C44.7909 11.93 43 13.7208 43 15.93L43 26.737L43 35.5791C43 37.7882 44.7909 39.5791 47 39.5791L61 39.5791L61 40.0001L61 40.4212Z"
            fill="#F2C94C"
          />
          <path
            d="M61 40.4212L63 40.4212C63 41.5258 62.1046 42.4212 61 42.4212L61 40.4212ZM51 64.0703L53 64.0703L51 64.0703ZM51 57.2633L49 57.2633C49 56.7329 49.2107 56.2242 49.5858 55.8491C49.9609 55.474 50.4696 55.2633 51 55.2633L51 57.2633ZM52.1049 57.2633L52.1049 55.2633C52.7152 55.2633 53.2921 55.542 53.6715 56.02C54.0509 56.4981 54.1912 57.1232 54.0526 57.7175L52.1049 57.2633ZM53.1467 60.9789L51.72 62.3805L51.72 62.3805L53.1467 60.9789ZM58.8033 61.0289L57.4016 59.6022L57.4016 59.6022L58.8033 61.0289ZM58.975 60.8602L60.3766 62.2869L60.3766 62.2869L58.975 60.8602ZM51 49.2633L51 51.2633C49.8954 51.2633 49 50.3679 49 49.2633L51 49.2633ZM51 48.4212L49 48.4212C49 47.3166 49.8954 46.4212 51 46.4212L51 48.4212ZM69 41.4212L67 41.4212L69 41.4212ZM69 40.0001L71 40.0001L69 40.0001ZM69 38.5791L67 38.5791L69 38.5791ZM51 31.5791L51 33.5791C49.8954 33.5791 49 32.6837 49 31.5791L51 31.5791ZM51 30.737L49 30.737C49 30.2065 49.2107 29.6978 49.5858 29.3228C49.9609 28.9477 50.4696 28.737 51 28.737L51 30.737ZM58.975 19.14L60.3766 17.7133L60.3766 17.7133L58.975 19.14ZM58.8033 18.9714L57.4017 20.398L57.4016 20.398L58.8033 18.9714ZM53.1467 19.0214L54.5733 20.4231L54.5733 20.4231L53.1467 19.0214ZM52.1049 22.737L54.0526 22.2827C54.1912 22.8771 54.0509 23.5022 53.6715 23.9803C53.2921 24.4583 52.7152 24.737 52.1049 24.737L52.1049 22.737ZM51 22.737L51 24.737C50.4696 24.737 49.9609 24.5263 49.5858 24.1512C49.2107 23.7761 49 23.2674 49 22.737L51 22.737ZM51 15.93L53 15.93L51 15.93ZM43 15.93L41 15.93L43 15.93ZM43 26.737L45 26.737L43 26.737ZM43 35.5791L41 35.5791L43 35.5791ZM61 39.5791L61 37.5791C62.1046 37.5791 63 38.4745 63 39.5791L61 39.5791ZM61 40.0001L63 40.0001L61 40.0001ZM47 38.4212L61 38.4212L61 42.4212L47 42.4212L47 38.4212ZM41 44.4212C41 41.1075 43.6863 38.4212 47 38.4212L47 42.4212C45.8954 42.4212 45 43.3166 45 44.4212L41 44.4212ZM41 53.2633L41 44.4212L45 44.4212L45 53.2633L41 53.2633ZM41 64.0703L41 53.2633L45 53.2633L45 64.0703L41 64.0703ZM47 70.0703C43.6863 70.0703 41 67.384 41 64.0703L45 64.0703C45 65.1749 45.8954 66.0703 47 66.0703L47 70.0703ZM53 64.0703C53 67.384 50.3137 70.0703 47 70.0703L47 66.0703C48.1046 66.0703 49 65.1749 49 64.0703L53 64.0703ZM53 57.2633L53 64.0703L49 64.0703L49 57.2633L53 57.2633ZM52.1049 59.2633L51 59.2633L51 55.2633L52.1049 55.2633L52.1049 59.2633ZM51.72 62.3805C50.2232 60.857 49.7074 58.7377 50.1572 56.8091L54.0526 57.7175C53.9008 58.3684 54.0764 59.0714 54.5733 59.5772L51.72 62.3805ZM60.2049 62.4556C57.8411 64.7779 54.0423 64.7443 51.72 62.3805L54.5733 59.5772C55.3474 60.3651 56.6137 60.3764 57.4016 59.6022L60.2049 62.4556ZM60.3766 62.2869L60.2049 62.4556L57.4016 59.6022L57.5733 59.4336L60.3766 62.2869ZM63 56.0319C63 58.3844 62.0547 60.6382 60.3766 62.2869L57.5733 59.4336C58.4859 58.537 59 57.3113 59 56.0319L63 56.0319ZM54.2314 47.2633C59.0741 47.2633 63 51.1891 63 56.0319L59 56.0319C59 53.3983 56.865 51.2633 54.2314 51.2633L54.2314 47.2633ZM51 47.2633L54.2314 47.2633L54.2314 51.2633L51 51.2633L51 47.2633ZM53 48.4212L53 49.2633L49 49.2633L49 48.4212L53 48.4212ZM62 50.4212L51 50.4212L51 46.4212L62 46.4212L62 50.4212ZM71 41.4212C71 46.3918 66.9706 50.4212 62 50.4212L62 46.4212C64.7614 46.4212 67 44.1826 67 41.4212L71 41.4212ZM71 40.0001L71 41.4212L67 41.4212L67 40.0001L71 40.0001ZM71 38.5791L71 40.0001L67 40.0001L67 38.5791L71 38.5791ZM62 29.5791C66.9706 29.5791 71 33.6085 71 38.5791L67 38.5791C67 35.8177 64.7614 33.5791 62 33.5791L62 29.5791ZM51 29.5791L62 29.5791L62 33.5791L51 33.5791L51 29.5791ZM53 30.737L53 31.5791L49 31.5791L49 30.737L53 30.737ZM54.2314 32.737L51 32.737L51 28.737L54.2314 28.737L54.2314 32.737ZM63 23.9683C63 28.8111 59.0741 32.737 54.2314 32.737L54.2314 28.737C56.865 28.737 59 26.602 59 23.9683L63 23.9683ZM60.3766 17.7133C62.0547 19.362 63 21.6159 63 23.9683L59 23.9683C59 22.689 58.4859 21.4633 57.5733 20.5667L60.3766 17.7133ZM60.2049 17.5447L60.3766 17.7133L57.5733 20.5667L57.4017 20.398L60.2049 17.5447ZM51.72 17.6198C54.0423 15.256 57.8411 15.2224 60.2049 17.5447L57.4016 20.398C56.6137 19.6239 55.3474 19.6351 54.5733 20.4231L51.72 17.6198ZM50.1572 23.1912C49.7074 21.2626 50.2232 19.1432 51.72 17.6198L54.5733 20.4231C54.0764 20.9288 53.9008 21.6319 54.0526 22.2827L50.1572 23.1912ZM51 20.737L52.1049 20.737L52.1049 24.737L51 24.737L51 20.737ZM53 15.93L53 22.737L49 22.737L49 15.93L53 15.93ZM47 9.92996C50.3137 9.92996 53 12.6163 53 15.93L49 15.93C49 14.8254 48.1046 13.93 47 13.93L47 9.92996ZM41 15.93C41 12.6163 43.6863 9.92996 47 9.92996L47 13.93C45.8954 13.93 45 14.8254 45 15.93L41 15.93ZM41 26.737L41 15.93L45 15.93L45 26.737L41 26.737ZM41 35.5791L41 26.737L45 26.737L45 35.5791L41 35.5791ZM47 41.5791C43.6863 41.5791 41 38.8928 41 35.5791L45 35.5791C45 36.6837 45.8954 37.5791 47 37.5791L47 41.5791ZM61 41.5791L47 41.5791L47 37.5791L61 37.5791L61 41.5791ZM59 40.0001L59 39.5791L63 39.5791L63 40.0001L59 40.0001ZM59 40.4212L59 40.0001L63 40.0001L63 40.4212L59 40.4212Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M19 40.4209H33C35.2091 40.4209 37 42.2118 37 44.4209L37 64.07C37 66.2792 35.2091 68.07 33 68.07C30.7909 68.07 29 66.2792 29 64.07L29 57.263H27.8951C28.1959 58.5528 27.8502 59.964 26.8533 60.9786C25.3051 62.5544 22.7726 62.5769 21.1967 61.0286L21.025 60.86C19.7297 59.5873 19 57.8476 19 56.0317C19 52.2934 22.0304 49.263 25.7686 49.263H29V48.4209H18C14.134 48.4209 11 45.2869 11 41.4209L11 38.5788C11 34.7128 14.134 31.5788 18 31.5788H29V30.7367H25.7686C22.0304 30.7367 19 27.7063 19 23.9681C19 22.1521 19.7297 20.4124 21.025 19.1397L21.1967 18.9711C22.7726 17.4229 25.3051 17.4453 26.8533 19.0211C27.8502 20.0358 28.1959 21.447 27.8951 22.7367H29L29 15.9297C29 13.7205 30.7909 11.9297 33 11.9297C35.2091 11.9297 37 13.7205 37 15.9297L37 35.5788C37 37.7879 35.2091 39.5788 33 39.5788H19V40.4209Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M61 40.4209H47C44.7909 40.4209 43 42.2118 43 44.4209V64.07C43 66.2792 44.7909 68.07 47 68.07C49.2091 68.07 51 66.2792 51 64.07V57.263H52.1049C51.8041 58.5528 52.1498 59.964 53.1467 60.9786C54.6949 62.5544 57.2274 62.5769 58.8033 61.0286L58.975 60.86C60.2703 59.5873 61 57.8476 61 56.0317C61 52.2934 57.9696 49.263 54.2314 49.263H51V48.4209H62C65.866 48.4209 69 45.2869 69 41.4209V38.5788C69 34.7128 65.866 31.5788 62 31.5788H51V30.7367H54.2314C57.9696 30.7367 61 27.7063 61 23.9681C61 22.1521 60.2703 20.4124 58.975 19.1397L58.8033 18.9711C57.2274 17.4229 54.6949 17.4453 53.1467 19.0211C52.1498 20.0358 51.8041 21.447 52.1049 22.7367H51V15.9297C51 13.7205 49.2091 11.9297 47 11.9297C44.7909 11.9297 43 13.7205 43 15.9297V35.5788C43 37.7879 44.7909 39.5788 47 39.5788H61V40.4209Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M19 40.4209H33C35.2091 40.4209 37 42.2118 37 44.4209L37 64.07C37 66.2792 35.2091 68.07 33 68.07C30.7909 68.07 29 66.2792 29 64.07L29 57.263H27.8951C28.1959 58.5528 27.8502 59.964 26.8533 60.9786C25.3051 62.5544 22.7726 62.5769 21.1967 61.0286L21.025 60.86C19.7297 59.5873 19 57.8476 19 56.0317C19 52.2934 22.0304 49.263 25.7686 49.263H29V48.4209H18C14.134 48.4209 11 45.2869 11 41.4209L11 38.5788C11 34.7128 14.134 31.5788 18 31.5788H29V30.7367H25.7686C22.0304 30.7367 19 27.7063 19 23.9681C19 22.1521 19.7297 20.4124 21.025 19.1397L21.1967 18.9711C22.7726 17.4229 25.3051 17.4453 26.8533 19.0211C27.8502 20.0358 28.1959 21.447 27.8951 22.7367H29L29 15.9297C29 13.7205 30.7909 11.9297 33 11.9297C35.2091 11.9297 37 13.7205 37 15.9297L37 35.5788C37 37.7879 35.2091 39.5788 33 39.5788H19V40.4209Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M61 40.4209H47C44.7909 40.4209 43 42.2118 43 44.4209V64.07C43 66.2792 44.7909 68.07 47 68.07C49.2091 68.07 51 66.2792 51 64.07V57.263H52.1049C51.8041 58.5528 52.1498 59.964 53.1467 60.9786C54.6949 62.5544 57.2274 62.5769 58.8033 61.0286L58.975 60.86C60.2703 59.5873 61 57.8476 61 56.0317C61 52.2934 57.9696 49.263 54.2314 49.263H51V48.4209H62C65.866 48.4209 69 45.2869 69 41.4209V38.5788C69 34.7128 65.866 31.5788 62 31.5788H51V30.7367H54.2314C57.9696 30.7367 61 27.7063 61 23.9681C61 22.1521 60.2703 20.4124 58.975 19.1397L58.8033 18.9711C57.2274 17.4229 54.6949 17.4453 53.1467 19.0211C52.1498 20.0358 51.8041 21.447 52.1049 22.7367H51V15.9297C51 13.7205 49.2091 11.9297 47 11.9297C44.7909 11.9297 43 13.7205 43 15.9297V35.5788C43 37.7879 44.7909 39.5788 47 39.5788H61V40.4209Z"
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
            d="M9 41.4209C9 46.3915 13.0294 50.4209 18 50.4209H19.0298C17.7624 51.9414 17 53.8975 17 56.0317C17 58.3841 17.9453 60.638 19.6234 62.2866L19.7951 62.4553C21.7622 64.388 24.7232 64.689 27 63.3732V64.07C27 67.3837 29.6863 70.07 33 70.07C36.3137 70.07 39 67.3837 39 64.07V44.4209C39 42.6713 38.2511 41.0966 37.0564 39.9999C38.2511 38.9031 39 37.3284 39 35.5788L39 15.9297C39 12.616 36.3137 9.92969 33 9.92969C29.6863 9.92969 27 12.616 27 15.9297V16.6265C24.7232 15.3108 21.7622 15.6118 19.7951 17.5444L19.6234 17.7131C17.9453 19.3618 17 21.6156 17 23.9681C17 26.1022 17.7624 28.0583 19.0298 29.5788H18C13.0294 29.5788 9 33.6082 9 38.5788L9 41.4209ZM18 46.4209C15.2386 46.4209 13 44.1823 13 41.4209V38.5788C13 35.8174 15.2386 33.5788 18 33.5788H29C30.1046 33.5788 31 32.6834 31 31.5788V30.7367C31 30.2063 30.7893 29.6976 30.4142 29.3225C30.0391 28.9474 29.5304 28.7367 29 28.7367H25.7686C23.135 28.7367 21 26.6017 21 23.9681C21 22.6887 21.5141 21.463 22.4267 20.5664L22.5984 20.3978C23.3863 19.6237 24.6526 19.6349 25.4267 20.4228C25.9236 20.9286 26.0992 21.6316 25.9474 22.2825C25.8088 22.8768 25.9491 23.5019 26.3285 23.98C26.7079 24.458 27.2848 24.7367 27.8951 24.7367H29C29.5304 24.7367 30.0391 24.526 30.4142 24.1509C30.7893 23.7758 31 23.2671 31 22.7367V15.9297C31 14.8251 31.8954 13.9297 33 13.9297C34.1046 13.9297 35 14.8251 35 15.9297L35 35.5788C35 36.6834 34.1046 37.5788 33 37.5788H19C17.8954 37.5788 17 38.4742 17 39.5788V40.4209C17 41.5255 17.8954 42.4209 19 42.4209H33C34.1046 42.4209 35 43.3163 35 44.4209V64.07C35 65.1746 34.1046 66.07 33 66.07C31.8954 66.07 31 65.1746 31 64.07V57.263C31 56.1585 30.1046 55.263 29 55.263H27.8951C27.2848 55.263 26.7079 55.5417 26.3285 56.0197C25.9491 56.4978 25.8088 57.1229 25.9474 57.7173C26.0992 58.3681 25.9236 59.0712 25.4267 59.5769C24.6526 60.3649 23.3863 60.3761 22.5984 59.602L22.4267 59.4333C21.5141 58.5367 21 57.311 21 56.0317C21 53.398 23.135 51.263 25.7686 51.263H29C30.1046 51.263 31 50.3676 31 49.263V48.4209C31 47.3163 30.1046 46.4209 29 46.4209H18Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71 41.4209C71 46.3915 66.9706 50.4209 62 50.4209H60.9702C62.2376 51.9414 63 53.8975 63 56.0317C63 58.3841 62.0547 60.638 60.3766 62.2866L60.2049 62.4553C58.2378 64.388 55.2768 64.689 53 63.3732V64.07C53 67.3837 50.3137 70.07 47 70.07C43.6863 70.07 41 67.3837 41 64.07V44.4209C41 42.6713 41.7489 41.0966 42.9436 39.9999C41.7489 38.9031 41 37.3284 41 35.5788V15.9297C41 12.616 43.6863 9.92969 47 9.92969C50.3137 9.92969 53 12.616 53 15.9297V16.6265C55.2768 15.3108 58.2378 15.6118 60.2049 17.5444L60.3766 17.7131C62.0547 19.3618 63 21.6156 63 23.9681C63 26.1022 62.2376 28.0583 60.9702 29.5788H62C66.9706 29.5788 71 33.6082 71 38.5788V41.4209ZM62 46.4209C64.7614 46.4209 67 44.1823 67 41.4209V38.5788C67 35.8174 64.7614 33.5788 62 33.5788H51C49.8954 33.5788 49 32.6834 49 31.5788V30.7367C49 30.2063 49.2107 29.6976 49.5858 29.3225C49.9609 28.9474 50.4696 28.7367 51 28.7367H54.2314C56.865 28.7367 59 26.6017 59 23.9681C59 22.6887 58.4859 21.463 57.5733 20.5664L57.4016 20.3978C56.6137 19.6236 55.3474 19.6349 54.5733 20.4228C54.0764 20.9286 53.9009 21.6316 54.0526 22.2825C54.1912 22.8768 54.0509 23.5019 53.6715 23.98C53.2921 24.458 52.7152 24.7367 52.1049 24.7367H51C50.4696 24.7367 49.9609 24.526 49.5858 24.1509C49.2107 23.7758 49 23.2671 49 22.7367V15.9297C49 14.8251 48.1046 13.9297 47 13.9297C45.8954 13.9297 45 14.8251 45 15.9297L45 35.5788C45 36.6834 45.8954 37.5788 47 37.5788H61C62.1046 37.5788 63 38.4742 63 39.5788V40.4209C63 41.5255 62.1046 42.4209 61 42.4209H47C45.8954 42.4209 45 43.3163 45 44.4209V64.07C45 65.1746 45.8954 66.07 47 66.07C48.1046 66.07 49 65.1746 49 64.07V57.263C49 56.1585 49.8954 55.263 51 55.263H52.1049C52.7152 55.263 53.2921 55.5417 53.6715 56.0197C54.0509 56.4978 54.1912 57.1229 54.0526 57.7173C53.9009 58.3681 54.0764 59.0712 54.5733 59.5769C55.3474 60.3649 56.6137 60.3761 57.4016 59.602L57.5733 59.4333C58.4859 58.5367 59 57.311 59 56.0317C59 53.398 56.865 51.263 54.2314 51.263H51C49.8954 51.263 49 50.3676 49 49.263V48.4209C49 47.3163 49.8954 46.4209 51 46.4209H62Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBrain = forwardRef((props, ref) => {
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

CoreBrain.displayName = 'CoreBrain'

export default CoreBrain
