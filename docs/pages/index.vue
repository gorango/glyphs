<template lang="pug">
  .overflow-x-hidden
    section.flex.w-full.mx-auto.mt-16(style='max-width: 1440px')
      .flex-1.p-4.flex.items-center
        .flex.space-x-2
            div.text-gray-700.dark_text-gray-500
              div.my-2.font-black.text-4xl.dark_text-gray-400
                | The Mightiest Icons on the Web
              //- div.text-center.mt-8.font-light.text-2xl.dark_text-gray-400
                | A truly open source toolkit for creating and #[br] maintaining large icon sets
              //- p.text-2xl.font-light May just be the mightiest set of icons on the web

              .my-8

              div.my-4.p-2.text-xl.flex.items-center(
                href='#figma',
                style='width: max-content'
              )
                svg-icon.mr-3.text-3xl.text-gray-800.dark_text-gray-100(set='brands', name='figma', variant='color')
                span Thousands of editable icons #[span.text-black.dark_text-gray-300 designed in Figma]
                //- svg-icon.ml-3.text-3xl.text-gray-800.dark_text-gray-100(set='rounded', name='angle', variant='path', rotate='180')

              div.my-4.p-2.text-xl.flex.items-center(
                href='#web',
                style='width: max-content'
              )
                svg-icon.mr-3.text-3xl.text-gray-800.dark_text-gray-100(set='brands', name='web-components', variant='color')
                span #[span.text-black.dark_text-gray-300 Web components] for use with any application
                //- svg-icon.ml-3.text-3xl.text-gray-800.dark_text-gray-100(set='rounded', name='angle', variant='path', rotate='180')

              div.my-4.p-2.text-xl.flex.items-center(
                href='#cli',
                style='width: max-content'
              )
                svg-icon.mr-3.text-3xl.text-gray-800.dark_text-gray-100(set='rounded', name='laptop', variant='poly')
                span #[span.text-black.dark_text-gray-300 CLI utility] to download SVGs from Figma
                //- svg-icon.ml-3.text-3xl.text-gray-800.dark_text-gray-100(set='rounded', name='angle', variant='path', rotate='180')

              a.my-4.p-2.text-xl.flex.items-center.rounded-lg.shadow-md.transition-all.duration-300.cursor-pointer(
                @click='focusSearch(); $router.push("dir")',
                style='width: max-content',
                :class=`{'bg-gray-900 hover_bg-gray-1000': $colorMode.value === 'dark', 'bg-white hover_bg-gray-200': $colorMode.value === 'light' }`
              )
                svg-icon.mr-3.text-3xl.text-gray-800.dark_text-gray-100(set='rounded', name='search', variant='poly')
                span Categorized & tagged for easy #[span.text-black.dark_text-gray-300 search]
                svg-icon.ml-3.text-3xl.text-gray-800.dark_text-gray-100(set='rounded', name='angle', variant='path', rotate='90')

              router-link.my-4.p-2.text-xl.flex.items-center.rounded-lg.shadow-md.transition-all.duration-300(
                to='docs',
                style='width: max-content',
                :class=`{'bg-gray-900 hover_bg-gray-1000': $colorMode.value === 'dark', 'bg-white hover_bg-gray-200': $colorMode.value === 'light' }`
              )
                svg-icon.mr-3.text-3xl.text-gray-800.dark_text-gray-100(set='rounded', name='note-pad', variant='poly')
                span Growing #[span.text-black.dark_text-gray-300 documentation] and guides
                svg-icon.ml-3.text-3xl.text-gray-800.dark_text-gray-100(set='rounded', name='angle', variant='path', rotate='90')

      landing-icons

    div.py-6
      div.bg-center.bg-repeat-x(
        :style="{ height: '190px', backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1440 190' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1440' height='190' fill='none'/%3E%3Cg stroke-width='2'%3E%3Cg stroke='%23${$colorMode.value === 'dark' ? '4A5568' : 'E2E8F0'}'%3E%3Cpath d='M0 95.4893C650 -54.5107 790 245.489 1440 95.4893'/%3E%3Cpath d='M0 95.4893C650 15.4893 790 175.489 1440 95.4893'/%3E%3Cpath d='M0 95.4893C650 -214.511 790 405.489 1440 95.4893'/%3E%3C/g%3E%3Cpath d='M0 95.4893C650 -134.511 790 325.489 1440 95.4893' stroke='%23${$colorMode.value === 'dark' ? 'A0AEC0' : 'A0AEC0'}'/%3E%3C/g%3E%3C/svg%3E\")` }"
      )

    //- landing-features

    section#updates
      .flex.w-full.mx-auto(style='max-width: 1440px')
        .p-4.text-center.mx-auto.w-full.max-w-2xl
          h2.font-black.text-3xl.my-4 Access the Source
          p.text-xl.my-3 Join us in Figma and GitHub to contribute to ongoing development and request new icons & features.
          div.flex.flex-col.items-center.mt-8.w-56.mx-auto
            a.whitespace-no-wrap.mt-3.py-2.pl-4.pr-5.shadow-md.border-2.border-transparent.rounded-lg.text-lg.flex.flex-no-wrap.items-center(
              style='width: min-content',
              :class=`{
                'bg-white hover_bg-gray-200 text-gray-800': $colorMode.value === 'light',
                'bg-gray-900 hover_bg-gray-1000 text-white': $colorMode.value === 'dark'
              }`
              href='https://www.figma.com/file/2TsY9yqFso1zrvF8LNcVE7',
              target='_blank'
            )
              svg-icon.mr-3(set='brands', name='figma', size='1.5rem', variant='color')
              span.text-xl Figma File
            a.whitespace-no-wrap.mt-3.py-2.pl-4.pr-5.shadow-md.border-2.border-transparent.rounded-lg.text-lg.flex.flex-no-wrap.items-center(
              style='width: min-content',
              :class=`{
                'bg-white hover_bg-gray-200 text-gray-800': $colorMode.value === 'light',
                'bg-gray-900 hover_bg-gray-1000 text-white': $colorMode.value === 'dark'
              }`
              href='https://github.com/gorango/glyphs',
              target='_blank'
            )
              svg-icon.mr-3(set='brands', name='github', size='1.5rem', variant='bold')
              span.text-xl GitHub Repo
    .my-24
</template>

<script>
export default {
  data: () => ({
    hover: null,
    typerRepeat: 0
  }),

  methods: {
    focusSearch () {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: '/' }))
    }
  }
}
</script>
