<template lang="pug">
  .mx-auto.w-full.pt-16(style='max-width: 600px')
    h1.text-4xl.font-black(v-if='error.statusCode === 404') Page not found
    h1(v-else) An error occurred ({{ error.statusCode }})
    .flex.space-x-2.mt-8
      a.underline.cursor-pointer(@click='$router.go(-1)') Go Back
      span |
      nuxt-link.underline(to='/') Home page
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
