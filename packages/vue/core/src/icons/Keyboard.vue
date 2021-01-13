
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    :width="size"
    :height="size"
    :transform="transform"
  >
    <slot></slot>
    <g>      
      <template v-if="variant === 'path'">
        <path
          d="M12 33.5C12 31.2909 13.7909 29.5 16 29.5H64C66.2091 29.5 68 31.2909 68 33.5V61.5C68 63.7091 66.2091 65.5 64 65.5H16C13.7909 65.5 12 63.7091 12 61.5V33.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M27 29.5V26C27 23.7909 28.7909 22 31 22H50C52.2091 22 54 20.2091 54 18V14.5"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M21 36.5H19V38.5H21V36.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M31 36.5H29V38.5H31V36.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M41 36.5H39V38.5H41V36.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M51 36.5H49V38.5H51V36.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M61 36.5H59V38.5H61V36.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M26 46.5H24V48.5H26V46.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M36 46.5H34V48.5H36V46.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M46 46.5H44V48.5H46V46.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M56 46.5H54V48.5H56V46.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M21 56.5H19V58.5H21V56.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M51 56.5H29V58.5H51V56.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M61 56.5H59V58.5H61V56.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'bold'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 11C55.6569 11 57 12.3431 57 14V17.5C57 21.366 53.866 24.5 50 24.5H31C30.4477 24.5 30 24.9477 30 25.5V29C30 30.6569 28.6569 32 27 32C25.3431 32 24 30.6569 24 29V25.5C24 21.634 27.134 18.5 31 18.5H50C50.5523 18.5 51 18.0523 51 17.5V14C51 12.3431 52.3431 11 54 11Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 29H16C13.7909 29 12 30.7909 12 33V61C12 63.2091 13.7909 65 16 65H64C66.2091 65 68 63.2091 68 61V33C68 30.7909 66.2091 29 64 29H30C30 30.6569 28.6569 32 27 32C25.3431 32 24 30.6569 24 29ZM22.5 35.5C22.5 34.9477 22.0523 34.5 21.5 34.5H18.5C17.9477 34.5 17.5 34.9477 17.5 35.5V38.5C17.5 39.0523 17.9477 39.5 18.5 39.5H21.5C22.0523 39.5 22.5 39.0523 22.5 38.5V35.5ZM32.5 35.5C32.5 34.9477 32.0523 34.5 31.5 34.5H28.5C27.9477 34.5 27.5 34.9477 27.5 35.5V38.5C27.5 39.0523 27.9477 39.5 28.5 39.5H31.5C32.0523 39.5 32.5 39.0523 32.5 38.5V35.5ZM22.5 45.5C22.5 44.9477 22.9477 44.5 23.5 44.5H26.5C27.0523 44.5 27.5 44.9477 27.5 45.5V48.5C27.5 49.0523 27.0523 49.5 26.5 49.5H23.5C22.9477 49.5 22.5 49.0523 22.5 48.5V45.5ZM22.5 55.5C22.5 54.9477 22.0523 54.5 21.5 54.5H18.5C17.9477 54.5 17.5 54.9477 17.5 55.5V58.5C17.5 59.0523 17.9477 59.5 18.5 59.5H21.5C22.0523 59.5 22.5 59.0523 22.5 58.5V55.5ZM37.5 35.5C37.5 34.9477 37.9477 34.5 38.5 34.5H41.5C42.0523 34.5 42.5 34.9477 42.5 35.5V38.5C42.5 39.0523 42.0523 39.5 41.5 39.5H38.5C37.9477 39.5 37.5 39.0523 37.5 38.5V35.5ZM37.5 45.5C37.5 44.9477 37.0523 44.5 36.5 44.5H33.5C32.9477 44.5 32.5 44.9477 32.5 45.5V48.5C32.5 49.0523 32.9477 49.5 33.5 49.5H36.5C37.0523 49.5 37.5 49.0523 37.5 48.5V45.5ZM27.5 55.5C27.5 54.9477 27.9477 54.5 28.5 54.5H51.5C52.0523 54.5 52.5 54.9477 52.5 55.5V58.5C52.5 59.0523 52.0523 59.5 51.5 59.5H28.5C27.9477 59.5 27.5 59.0523 27.5 58.5V55.5ZM52.5 35.5C52.5 34.9477 52.0523 34.5 51.5 34.5H48.5C47.9477 34.5 47.5 34.9477 47.5 35.5V38.5C47.5 39.0523 47.9477 39.5 48.5 39.5H51.5C52.0523 39.5 52.5 39.0523 52.5 38.5V35.5ZM42.5 45.5C42.5 44.9477 42.9477 44.5 43.5 44.5H46.5C47.0523 44.5 47.5 44.9477 47.5 45.5V48.5C47.5 49.0523 47.0523 49.5 46.5 49.5H43.5C42.9477 49.5 42.5 49.0523 42.5 48.5V45.5ZM62.5 55.5C62.5 54.9477 62.0523 54.5 61.5 54.5H58.5C57.9477 54.5 57.5 54.9477 57.5 55.5V58.5C57.5 59.0523 57.9477 59.5 58.5 59.5H61.5C62.0523 59.5 62.5 59.0523 62.5 58.5V55.5ZM57.5 35.5C57.5 34.9477 57.9477 34.5 58.5 34.5H61.5C62.0523 34.5 62.5 34.9477 62.5 35.5V38.5C62.5 39.0523 62.0523 39.5 61.5 39.5H58.5C57.9477 39.5 57.5 39.0523 57.5 38.5V35.5ZM57.5 45.5C57.5 44.9477 57.0523 44.5 56.5 44.5H53.5C52.9477 44.5 52.5 44.9477 52.5 45.5V48.5C52.5 49.0523 52.9477 49.5 53.5 49.5H56.5C57.0523 49.5 57.5 49.0523 57.5 48.5V45.5Z"
          fill="currentColor"
        />
      </template>
      <template v-if="variant === 'poly'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.5 14C55.5 13.1716 54.8284 12.5 54 12.5C53.1716 12.5 52.5 13.1716 52.5 14V17.5C52.5 18.8807 51.3807 20 50 20L31 20C27.9624 20 25.5 22.4624 25.5 25.5V29H28.5V25.5C28.5 24.1193 29.6193 23 31 23L50 23C53.0376 23 55.5 20.5376 55.5 17.5V14Z"
          fill="#EB5757"
        />
        <rect
          x="12"
          y="29"
          width="56"
          height="36"
          rx="4"
          fill="#828282"
          stroke="#828282"
          :stroke-width="strokeWidth"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M19 36V34C17.8954 34 17 34.8954 17 36H19ZM21 36H23C23 34.8954 22.1046 34 21 34V36ZM19 38H17C17 39.1046 17.8954 40 19 40V38ZM21 38V40C22.1046 40 23 39.1046 23 38H21ZM29 36V34C27.8954 34 27 34.8954 27 36H29ZM31 36H33C33 34.8954 32.1046 34 31 34V36ZM29 38H27C27 39.1046 27.8954 40 29 40V38ZM31 38V40C32.1046 40 33 39.1046 33 38H31ZM26 46H28C28 44.8954 27.1046 44 26 44V46ZM24 46V44C22.8954 44 22 44.8954 22 46H24ZM26 48L26 50C27.1046 50 28 49.1046 28 48H26ZM24 48H22C22 49.1046 22.8954 50 24 50L24 48ZM19 56V54C17.8954 54 17 54.8954 17 56H19ZM21 56H23C23 54.8954 22.1046 54 21 54V56ZM19 58H17C17 59.1046 17.8954 60 19 60V58ZM21 58V60C22.1046 60 23 59.1046 23 58H21ZM41 36L43 36C43 34.8954 42.1046 34 41 34V36ZM39 36V34C37.8954 34 37 34.8954 37 36H39ZM41 38V40C42.1046 40 43 39.1046 43 38L41 38ZM39 38H37C37 39.1046 37.8954 40 39 40V38ZM34 46V44C32.8954 44 32 44.8954 32 46H34ZM36 46H38C38 44.8954 37.1046 44 36 44V46ZM34 48H32C32 49.1046 32.8954 50 34 50V48ZM36 48V50C37.1046 50 38 49.1046 38 48H36ZM51 56L53 56C53 54.8954 52.1046 54 51 54V56ZM29 56V54C27.8954 54 27 54.8954 27 56H29ZM51 58V60C52.1046 60 53 59.1046 53 58L51 58ZM29 58H27C27 59.1046 27.8954 60 29 60V58ZM49 36V34C47.8954 34 47 34.8954 47 36H49ZM51 36H53C53 34.8954 52.1046 34 51 34V36ZM49 38H47C47 39.1046 47.8954 40 49 40V38ZM51 38V40C52.1046 40 53 39.1046 53 38H51ZM46 46L48 46C48 44.8954 47.1046 44 46 44V46ZM44 46V44C42.8954 44 42 44.8954 42 46H44ZM46 48V50C47.1046 50 48 49.1046 48 48L46 48ZM44 48H42C42 49.1046 42.8954 50 44 50V48ZM59 56V54C57.8954 54 57 54.8954 57 56H59ZM61 56H63C63 54.8954 62.1046 54 61 54V56ZM59 58H57C57 59.1046 57.8954 60 59 60L59 58ZM61 58L61 60C62.1046 60 63 59.1046 63 58H61ZM61 36H63C63 34.8954 62.1046 34 61 34V36ZM59 36V34C57.8954 34 57 34.8954 57 36H59ZM61 38V40C62.1046 40 63 39.1046 63 38H61ZM59 38H57C57 39.1046 57.8954 40 59 40V38ZM54 46V44C52.8954 44 52 44.8954 52 46H54ZM56 46H58C58 44.8954 57.1046 44 56 44V46ZM54 48H52C52 49.1046 52.8954 50 54 50V48ZM56 48V50C57.1046 50 58 49.1046 58 48H56ZM19 38H21V34H19V38ZM21 38V36H17V38H21ZM21 36H19V40H21V36ZM19 36V38H23V36H19ZM29 38H31V34H29V38ZM31 38V36H27V38H31ZM31 36H29V40H31V36ZM29 36V38H33V36H29ZM26 44H24V48H26V44ZM28 48V46H24V48H28ZM24 50H26L26 46H24L24 50ZM22 46V48H26V46H22ZM19 58H21V54H19V58ZM21 58V56H17V58H21ZM21 56H19V60H21V56ZM19 56V58H23V56H19ZM41 34H39V38H41V34ZM43 38V36L39 36V38L43 38ZM39 40H41V36H39V40ZM37 36V38H41V36H37ZM34 48H36V44H34V48ZM36 48V46H32V48H36ZM36 46H34V50H36V46ZM34 46V48H38V46H34ZM51 54H29V58H51V54ZM53 58V56L49 56V58L53 58ZM29 60H51V56H29V60ZM27 56V58H31V56H27ZM49 38H51V34H49V38ZM51 38V36H47V38H51ZM51 36H49V40H51V36ZM49 36V38H53V36H49ZM46 44H44V48H46V44ZM48 48V46L44 46V48L48 48ZM44 50H46V46H44V50ZM42 46V48H46V46H42ZM59 58H61V54H59V58ZM61 58V56H57V58H61ZM61 56H59L59 60H61L61 56ZM59 56V58H63V56H59ZM61 34H59V38H61V34ZM63 38V36H59V38H63ZM59 40H61V36H59V40ZM57 36V38H61V36H57ZM54 48H56V44H54V48ZM56 48V46H52V48H56ZM56 46H54V50H56V46ZM54 46V48H58V46H54Z"
          fill="#EB5757"
        />
      </template>
      <template v-if="variant === 'duo'">
        <path
          d="M12 33.5C12 31.2909 13.7909 29.5 16 29.5H64C66.2091 29.5 68 31.2909 68 33.5V61.5C68 63.7091 66.2091 65.5 64 65.5H16C13.7909 65.5 12 63.7091 12 61.5V33.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M21 36.5H19V38.5H21V36.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M31 36.5H29V38.5H31V36.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M24 46.5H26V48.5H24V46.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M21 56.5H19V58.5H21V56.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M39 36.5H41V38.5H39V36.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M36 46.5H34V48.5H36V46.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M29 56.5H51V58.5H29V56.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M51 36.5H49V38.5H51V36.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M44 46.5H46V48.5H44V46.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M61 56.5H59V58.5H61V56.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M59 36.5H61V38.5H59V36.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M56 46.5H54V48.5H56V46.5Z"
          fill="currentColor"
          fill-opacity="0.25"
        />
        <path
          d="M27 29.5V26C27 23.7909 28.7909 22 31 22H50C52.2091 22 54 20.2091 54 18V14.5M16 65.5H64C66.2091 65.5 68 63.7091 68 61.5V33.5C68 31.2909 66.2091 29.5 64 29.5H16C13.7909 29.5 12 31.2909 12 33.5V61.5C12 63.7091 13.7909 65.5 16 65.5ZM19 36.5H21V38.5H19V36.5ZM29 36.5H31V38.5H29V36.5ZM26 46.5H24V48.5H26V46.5ZM19 56.5H21V58.5H19V56.5ZM41 36.5H39V38.5H41V36.5ZM34 46.5H36V48.5H34V46.5ZM51 56.5H29V58.5H51V56.5ZM49 36.5H51V38.5H49V36.5ZM46 46.5H44V48.5H46V46.5ZM59 56.5H61V58.5H59V56.5ZM61 36.5H59V38.5H61V36.5ZM54 46.5H56V48.5H54V46.5Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
      <template v-if="variant === 'outline'">
        <path
          d="M19 34C17.8954 34 17 34.8954 17 36V38C17 39.1046 17.8954 40 19 40H21C22.1046 40 23 39.1046 23 38V36C23 34.8954 22.1046 34 21 34H19Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M29 34C27.8954 34 27 34.8954 27 36V38C27 39.1046 27.8954 40 29 40H31C32.1046 40 33 39.1046 33 38V36C33 34.8954 32.1046 34 31 34H29Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M39 34C37.8954 34 37 34.8954 37 36V38C37 39.1046 37.8954 40 39 40H41C42.1046 40 43 39.1046 43 38V36C43 34.8954 42.1046 34 41 34H39Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M49 34C47.8954 34 47 34.8954 47 36V38C47 39.1046 47.8954 40 49 40H51C52.1046 40 53 39.1046 53 38V36C53 34.8954 52.1046 34 51 34H49Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M59 34C57.8954 34 57 34.8954 57 36V38C57 39.1046 57.8954 40 59 40H61C62.1046 40 63 39.1046 63 38V36C63 34.8954 62.1046 34 61 34H59Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M24 44C22.8954 44 22 44.8954 22 46V48C22 49.1046 22.8954 50 24 50H26C27.1046 50 28 49.1046 28 48V46C28 44.8954 27.1046 44 26 44H24Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M34 44C32.8954 44 32 44.8954 32 46V48C32 49.1046 32.8954 50 34 50H36C37.1046 50 38 49.1046 38 48V46C38 44.8954 37.1046 44 36 44H34Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M44 44C42.8954 44 42 44.8954 42 46V48C42 49.1046 42.8954 50 44 50H46C47.1046 50 48 49.1046 48 48V46C48 44.8954 47.1046 44 46 44H44Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M54 44C52.8954 44 52 44.8954 52 46V48C52 49.1046 52.8954 50 54 50H56C57.1046 50 58 49.1046 58 48V46C58 44.8954 57.1046 44 56 44H54Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M19 54C17.8954 54 17 54.8954 17 56V58C17 59.1046 17.8954 60 19 60H21C22.1046 60 23 59.1046 23 58V56C23 54.8954 22.1046 54 21 54H19Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M29 54C27.8954 54 27 54.8954 27 56V58C27 59.1046 27.8954 60 29 60H51C52.1046 60 53 59.1046 53 58V56C53 54.8954 52.1046 54 51 54H29Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          d="M59 54C57.8954 54 57 54.8954 57 56V58C57 59.1046 57.8954 60 59 60H61C62.1046 60 63 59.1046 63 58V56C63 54.8954 62.1046 54 61 54H59Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54 12C55.1046 12 56 12.8954 56 14V17.5C56 20.8137 53.3137 23.5 50 23.5H31C29.8954 23.5 29 24.3954 29 25.5V27H64C67.3137 27 70 29.6863 70 33V61C70 64.3137 67.3137 67 64 67H16C12.6863 67 10 64.3137 10 61V33C10 29.6863 12.6863 27 16 27H25V25.5C25 22.1863 27.6863 19.5 31 19.5H50C51.1046 19.5 52 18.6046 52 17.5V14C52 12.8954 52.8954 12 54 12ZM16 31H64C65.1046 31 66 31.8954 66 33V61C66 62.1046 65.1046 63 64 63H16C14.8954 63 14 62.1046 14 61V33C14 31.8954 14.8954 31 16 31Z"
          stroke="currentColor"
          :stroke-linecap="strokeLinecap"
          :stroke-linejoin="strokeLinejoin"
        />
      </template>
    </g>
  </svg>
</template>

<script>
import Vue from 'vue'
import { transform } from '../utils'

export default {
  name: 'node_modules/@glyphs/core',

  props: {
    size: { type: String, default: '40', },
    color: { type: String, default: 'currentColor', },
    variant: { type: String, default: '', },
    colors: { type: [String], default: ['#000000', '#C4C4C4'], },
    strokeWidth: { type: String, default: '3', },
    strokeLinecap: { type: String, default: 'round', },
    strokeLinejoin: { type: String, default: 'round', },
    rotate: { type: String, default: '0', },
    flip: { type: String, default: '' }
  },

  computed: {
    transform () {
      return transform(this.rotate, this.flip)
    }
  }
}
</script>
