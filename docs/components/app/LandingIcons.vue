<template lang="pug">
  .flex-1.p-4(style='max-width: 50%')
    div.flex.space-x-2.relative(
      name='fade-categories',
      tag='div',
      v-if='icons',
      style='transform: skewX(-22.5deg) translateX(-80px)'
    )
      //- .absolute.top-0.left-0.h-full(style='width: 120px; box-shadow: inset 208px 0 80px -96px #fff; z-index: 10')
      template(v-for='category, i in previewCategories')
        //- .flex.flex-col.flex-1.p-4.space-y-8.items-center
        //- transition-group.flex.flex-col.flex-1.p-4.space-y-8.items-center(
        //-   :css='false',
        //-   @before-enter='beforeIconEnter',
        //-   @enter='onIconEnter',
        //-   @leave='onIconLeave'
        //- )
        .flex.flex-col.flex-1.p-4.space-y-8.items-center
          template(v-for='icon in icons[category].slice(0, 8)')
            template(v-if='icon')
              router-link.rounded-lg.p-1.border-2.border-transparent.flex.items-center.justify-center(
                :key='icon.name',
                style='transform: skewX(22.5deg); width: 3.25rem; height: 3.25rem',
                :class='hover === icon.name && "border-gray-300 dark_border-gray-700"'
                :to='`/dir?c=${icon.categories[0]}&i=${icon.name}`'
              )
                svg-icon(
                  :ref='icon.name',
                  set='core',
                  :name='icon.name',
                  variant='path',
                  @mouseenter='hover = icon.name'
                  :transition='true',
                  :offset='icon.offset || null',
                  size='3rem',
                  stroke-width='3'
                )
</template>

<script>
// import kebabCase from 'lodash.kebabcase'
import { categories as _categories } from '@glyphs/core/meta.json'
import components from '@glyphs/core'

const categories = Object.entries(_categories).reduce((obj, [key, value]) => {
  if (_categories[key].length) {
    return { ...obj, [key]: value }
  }
  return obj
}, {})

export default {
  data: () => ({
    previewCategories: [
      'human',
      'contact',
      'editor',
      'design',
      'transport',
      'multimedia',
      'place',
      'education',
      'weather',
      'measure',
      'file',
      'medical',
      'arrow',
      'device'
    ],
    hover: null,
    // randomVariant: 'poly',
    // randomVariantTimer: null,
    icons: null
  }),

  mounted () {
    // setTimeout(this.toggleVariantTimer, 2000)
    this.icons = Object.entries(categories).reduce((obj, [category, icons]) => ({
      ...obj,
      [category]: Array.isArray(icons) && icons.map((icon) => {
        return components.find(({ name }) => name === icon)
      })
    }), {})
  },

  methods: {
    // kebabCase,
    // toggleVariantTimer () {
    //   if (this.randomVariantTimer) {
    //     clearInterval(this.randomVariantTimer)
    //     this.randomVariantTimer = null
    //   } else {
    //     this.randomVariantTimer = setInterval(this.handleVariantInterval, 720)
    //   }
    // },
    // handleVariantInterval () {
    //   const variants = (['path', 'outline', 'bold', 'mono'])
    //   const vi = variants.indexOf(this.randomVariant) + 1
    //   const i = vi === variants.length ? 0 : vi
    //   // const getRandomVariant = () => {
    //   //   const n = Math.floor(Math.random() * (variants.length))
    //   //   return variants[n]
    //   // }
    //   this.randomVariant = variants[i]
    // },
    // handleIconsInterval () {
    //   const categoryIndex = Math.floor(Math.random() * this.previewCategories.length)
    //   const category = Object.keys(this.icons)[categoryIndex]
    //   const targetIndex = Math.floor(Math.random() * 6)
    //   const newIndex = Math.floor(Math.random() * this.icons[category].slice(6).length) + 6
    //   const targetIcon = this.icons[category][targetIndex]
    //   const newIcon = this.icons[category][newIndex]
    //   this.icons[category][targetIndex] = newIcon
    //   this.icons[category][newIndex] = targetIcon
    // },
    // beforeIconEnter (el) {
    //   el.style.opacity = 0
    //   el.style.display = 'none'
    //   // const [n, ...c] = el.href.split('=').reverse()
    //   // const category = c[0].split('&')[0]
    //   // const icon = this.icons[category].find(({ name }) => name === n)
    //   // icon.offset = 1
    // },
    // onIconEnter (el, done) {
    //   // const [n, ...c] = el.href.split('=').reverse()
    //   // const category = c[0].split('&')[0]
    //   // const icon = this.icons[category].find(({ name }) => name === n)
    //   setTimeout(() => {
    //     el.style.display = 'block'
    //     el.style.opacity = 1
    //     // icon.offset = 0
    //     done()
    //   }, 2000)
    // },
    // onIconLeave (el, done) {
    //   // const [n, cat] = el.href.split('=').reverse()
    //   // const c = cat.split('&')[0]
    //   // const icon = this.icons[c].find(({ name }) => name === n)
    //   // icon.offset = 1
    //   setTimeout(() => {
    //     el.style.display = 'none'
    //     el.style.opacity = 0
    //     done()
    //   }, 2000)
    // }
  }
}
</script>
