<template lang="pug">
  div
    #figma
    section.flex.w-full.mx-auto.mt-24(style='max-width: 1440px')
      .flex-1.p-8.flex.flex-col
        h2.font-black.text-3xl.my-4 Designed in Figma
        p.text-xl.my-3 All icons are built using only basic shapes (like squares, lines, stars) and combined with simple logical operators. This makes modifying icons simple and intuitive.
        p.text-xl.my-3 Using Figma's components system, one icon easily becomes several distinct ones, which continue to receive any new updates from their parents.
        .flex.mt-8.space-x-2
          router-link.py-2.pl-4.pr-5.shadow-md.bg-white.dark_bg-gray-900.hover_bg-gray-900.dark_hover_bg-gray-1000.border-2.border-transparent.rounded-lg.text-lg(
            to='docs/figma/overview'
          )
            .flex.items-center
              svg-icon.mr-3(name='book-open', size='1.5rem', stroke-width='5')
              span Documentation
          //- a.py-2.px-4.shadow-md.bg-white.dark_bg-gray-700.hover_bg-gray-200.dark_hover_bg-gray-900.text-gray-800.dark_text-white.border-2.border-transparent.rounded-lg.text-lg(
          //-   href='https://www.figma.com/file/2TsY9yqFso1zrvF8LNcVE7/glyphs?node-id=0%3A1',
          //-   target='_blank'
          //- )
            .flex.items-center
              span Source File
              svg-icon.ml-2(name='arrow-external', size='1.5rem', stroke-width='5')
      .flex-1.p-4
        div.text-gray-1000.dark_text-gray-200.bg-white.dark_bg-gray-900.shadow-xl.rounded-lg(
          @click='toggleAnimTimer',
          v-html='require(`@/assets/scene/scene-${sceneIndex}.svg?raw`)'
        )
        input.mt-4.w-full.overflow-hidden.appearance-none.bg-gray-400.dark_bg-gray-700.rounded-lg.outline-none(
          type='range',
          min='1',
          max='116',
          :value='sceneIndex',
          @input='handleRangeInput'
        )
    div.py-8
    section#web.w-full.mt-24
      .p-4.w-full.mx-auto(style='max-width: 720px')
        h2.my-4.font-black.text-3xl.text-center Universal Web Components
        //- - var iconTag = '<[icon-set]-icon>'
        //- p.text-xl.my-3 Integrate into any website with a single line of code and use the #[code.text-blue-800 #{iconTag}] tag like you would any other HTML tag.
        p.text-xl.my-3 Integrate into any website with a single line of code and use the icon tag like you would any other HTML tag. Use with JavaScript frameworks including Vue, React, Angular, or any other.
        .my-2.flex.space-x-3
          //- template(v-for='set in ["rounded", "brand", "flag"]')
            a.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 {{ set }}
        prism(lang='html', code='<script type="module" src="https://unpkg.com/@glyphs/rounded-icon@0.0.5/dist/rounded-icon/rounded-icon.esm.js"></script>')
      //- template(v-if='contentWeb')
      //-   nuxt-content.mb-4(:document='contentWeb')

      //- .p-4.w-full.mx-auto(style='max-width: 720px')
        .flex.space-x-4
          prism.flex-1(lang='html', code='<rounded-icon\n  name="arrow"\n  variant="path"\n  rotate="90"\n  flip="xy"\n  stroke-width="3"\n  style="font-size: 8rem;\n   color: var(--color-gray-100);"\n></rounded-icon>')
          .flex-1.flex.items-center.justify-center.rounded-lg.bg-white.dark_bg-gray-900.shadow-md
            svg-icon(name='arrow', size='8rem')

      //- .mt-8.flex.justify-center
        router-link.py-2.pl-4.pr-5.shadow-md.bg-white.dark_bg-gray-900.hover_bg-gray-900.dark_hover_bg-gray-1000.border-2.border-transparent.rounded-lg.text-lg(
          to='docs/web/getting-started'
        )
          .flex.items-center
            svg-icon.mr-3(name='cog', size='1.5rem', stroke-width='5')
            span Get Started
      //- .p-8.w-full.mx-auto(style='max-width: 720px')
        h2.font-bold.text-2xl.my-3 Style & Variants
        p.my-3.text-lg
          | Most icon sets come with several #[prism(:inline='true') variant]s that provide different styles.
          | The component inherits #[prism(:inline='true', lang='css') font-size] and #[prism(:inline='true', lang='css') color] properties making it blend into its DOM environment.
        .flex
          prism.flex-1(lang='html', code='<rounded-icon\n  name="arrow"\n  variant="path"\n  style="font-size: 8rem;\n   color: --color-primary-500;"\n></rounded-icon>')
          .flex-1.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem')
        .my-16
        h2.font-bold.text-2xl.my-3 Rotate & Flip
        .flex
          prism.flex-1(lang='html', code='<rounded-icon\n  name="arrow"\n  rotate="90"\n  flip="xy"\n></rounded-icon>')
          .flex-1.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem')
        .my-16
        h2.font-bold.text-2xl.my-3 Stroke & Dash
        .flex
          prism.flex-1(lang='html', code='<rounded-icon\n  name="arrow"\n  style="font-size: 8rem"\n  variant="path"\n></rounded-icon>')
          .flex-1.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem')
      //- .w-full.flex.space-x-4.overflow-x-auto.p-4
        .w-64
          h2.font-bold.text-xl.my-3 Size
          prism(lang='html', code='<rounded-icon\n  name="arrow"\n  style="font-size: 8rem"\n></rounded-icon>')
          .w-64.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem')
        .w-64
          h2.font-bold.text-xl.my-3 Variants
          prism(lang='html', code='<rounded-icon\n  name="arrow"\n  variant="poly"\n></rounded-icon>')
          .w-64.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem')
        .w-64
          h2.font-bold.text-xl.my-3 Rotate
          prism(lang='html', code='<rounded-icon\n  name="arrow"\n  rotate="90"\n></rounded-icon>')
          .w-64.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem')
        .w-64
          h2.font-bold.text-xl.my-3 Flip
          prism(lang='html', code='<rounded-icon\n  name="arrow"\n  flip="xy"\n></rounded-icon>')
          .w-64.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem')
        .w-64
          h2.font-bold.text-xl.my-3 Stroke
          prism(lang='html', code='<rounded-icon\n  name="arrow"\n  stroke-width="1"\n></rounded-icon>')
          .w-64.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem', stroke-width='1')
        .w-64
          h2.font-bold.text-xl.my-3 Color
          prism(lang='html', code='<rounded-icon\n  name="arrow"\n  style="color: forrestgreen"\n></rounded-icon>')
          .w-64.flex.items-center.justify-center.bg-grey-300.dark_bg-grey-900
            svg-icon(name='arrow', size='8rem')
      client-only
        .p-4.mx-auto.w-full(style='max-width: 960px')
          iframe(
            height='360'
            style='width: 100%;'
            scrolling='no'
            title='KKzyNgR'
            :src='`https://codepen.io/gorango/embed/KKzyNgR?height=360&theme-id=${$colorMode.value}&default-tab=html,result`'
            name='codepen'
            frameborder='no'
            loading='lazy'
            allowtransparency='true'
            allowfullscreen='true'
          )
            | See the Pen #[a(href='https://codepen.io/gorango/pen/KKzyNgR') KKzyNgR] by Goran Spasojevic
            | (#[a(href='https://codepen.io/gorango') @gorango]) on #[a(href='https://codepen.io') CodePen].

    div.py-8
    #cli
    section.flex.w-full.mx-auto.mt-24(style='max-width: 1440px')
      .flex-1.p-4
        video.shadow-xl.rounded-lg.overflow-hidden(muted, autoplay, loop)
          source(src='@/assets/cli.mp4', type='video/mp4')
          | Sorry! Your browser does not support the video tag.
      .flex-1.px-8.flex.flex-col
        h2.font-black.text-3xl.my-4 Export & Sync
        p.text-xl.my-3 Dedicated CLI tool to export & sync icons using Figma's REST API.
        p.text-xl.my-3 Easily publish custom design assets and web components.
        p.text-xl.my-3 Windows, Mac, and Linux application coming soon.
        .flex.mt-8.space-x-2
          router-link.py-2.pl-4.pr-5.shadow-md.bg-white.dark_bg-gray-900.hover_bg-gray-900.dark_hover_bg-gray-1000.border-2.border-transparent.rounded-lg.text-lg(
            to='docs/cli/install'
          )
            .flex.items-center
              svg-icon.mr-3(name='cli', size='1.5rem', variant='bold')
              span Install
          //- a.py-2.px-4.shadow-md.bg-white.dark_bg-gray-700.hover_bg-gray-200.dark_hover_bg-gray-900.text-gray-800.dark_text-white.border-2.border-transparent.rounded-lg.text-lg(
          //-   href='https://github.com/glyphs',
          //-   target='_blank'
          //- )
            .flex.items-center
              span Source Code
              svg-icon.ml-2(name='arrow-external', size='1.5rem', stroke-width='5')
    div.py-6.mt-24
      div.bg-center.bg-repeat-x(
        :style="{ height: '190px', backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1440 190' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1440' height='190' fill='none'/%3E%3Cg stroke-width='2'%3E%3Cg stroke='%23${$colorMode.value === 'dark' ? '4A5568' : 'E2E8F0'}'%3E%3Cpath d='M0 95.4893C650 -54.5107 790 245.489 1440 95.4893'/%3E%3Cpath d='M0 95.4893C650 15.4893 790 175.489 1440 95.4893'/%3E%3Cpath d='M0 95.4893C650 -214.511 790 405.489 1440 95.4893'/%3E%3C/g%3E%3Cpath d='M0 95.4893C650 -134.511 790 325.489 1440 95.4893' stroke='%23${$colorMode.value === 'dark' ? 'A0AEC0' : 'A0AEC0'}'/%3E%3C/g%3E%3C/svg%3E\")` }"
      )
</template>

<script>
export default {
  data: () => ({
    sceneIndex: 1,
    sceneDirection: 1,
    animTimer: null
  }),

  mounted () {
    setTimeout(this.toggleAnimTimer, 2000)
  },

  beforeDestroy () {
    clearInterval(this.animTimer)
  },

  methods: {
    handleRangeInput ({ target: { value } }) {
      clearInterval(this.animTimer)
      this.sceneIndex = +value
    },
    toggleAnimTimer () {
      if (this.animTimer) {
        clearInterval(this.animTimer)
        this.animTimer = null
      } else {
        this.animTimer = setInterval(this.handleAnimInterval, 240)
      }
    },
    handleAnimInterval () {
      if (this.sceneDirection > 0) {
        /* eslint-disable-next-line */
        if (this.sceneIndex === 116) {
          this.sceneDirection = -1
          this.sceneIndex = this.sceneIndex - 1
        } else {
          this.sceneIndex = this.sceneIndex + 1
        }
      } else {
        /* eslint-disable-next-line */
        if (this.sceneIndex === 1) {
          this.sceneDirection = 1
          this.sceneIndex = this.sceneIndex + 1
        } else {
          this.sceneIndex = this.sceneIndex - 1
        }
      }
    }
  }
}
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  width: 15px;
  -webkit-appearance: none;
  appearance: none;
  height: 15px;
  cursor: ew-resize;
  background: #FFF;
  box-shadow: -405px 0 0 400px #cbd5e0;
  border-radius: 50%;
}

#figma, #web, #cli {
  /* display: block;
  position: relative; */
  /* Fix anchor scrollTo */
  &::before {
    display: block;
    content: " ";
    margin-top: -144px;
    height: 144px;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
