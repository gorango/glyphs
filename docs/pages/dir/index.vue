<template lang="pug">
.flex
    //- client-only
    .flex.mx-auto.w-full(:style='!expandLayout && "max-width: 1440px"')
      div.hidden.md_flex.flex-col.sticky.self-start.bg-gray-100.dark_bg-gray-800.pt-3.w-64(style='top: 72px; max-height: calc(100vh - 72px)')
        .px-4
          p.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600.whitespace-no-wrap Set
          //- dir-set-picker(v-model='showSelect')
          div.relative(v-click-outside='hideSet')
            a.cursor-pointer.w-full.px-2.py-1.rounded-lg.border-2.border-gray-500.dark_border-gray-700.border-transparent.flex.items-center.outline-none(
              :class=`{
                'bg-gray-900 hover_bg-gray-800': $colorMode.value === 'dark',
                'bg-gray-200 hover_bg-gray-300': $colorMode.value === 'light',
              }`,
              :style='showSelect && "border-bottom-color: transparent"',
              tabindex='0',
              @click='showSelect = !showSelect'
            )
              //- @focusout='showSelect = false'
              span.capitalize {{ selectedSet.label }}
              span.text-gray-600.ml-2 ({{ selectedSet.count }})
              .flex-auto
              svg-icon.text-3xl(set='rounded', name='caret', :rotate='showSelect ? "0" : "180"')
            template(v-if='showSelect')
              .absolute.top-0.overflow-hidden.inset-x-0.bg-gray-200.dark_bg-gray-800.rounded-lg.border-2.border-gray-500.dark_border-gray-700.flex.flex-col.z-10(
              )
                template(v-for='option in setsSelection')
                  a.cursor-pointer.w-full.p-2.flex.items-center.w-full(
                    @click='changeSet(option)',
                    :class=`{
                      'bg-gray-400 dark_bg-gray-900': option.label === selectedSet.label,
                      'hover_bg-gray-700': $colorMode.value === 'dark',
                      'hover_bg-gray-300': $colorMode.value === 'light',
                    }`
                  )
                    span.capitalize {{ option.label }}
                    span.text-gray-600.ml-2 ({{ option.count || 'Coming Soon' }})

        .px-4.flex.items-center.mt-4.mb-2
          p.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Categories
          .flex-auto
          a.cursor-pointer.rounded-lg.flex.items-center.border-2.border-transparent(
            :class=`{
              'hover_bg-gray-200 focus_bg-gray-200': $colorMode.value === 'light',
              'hover_bg-gray-700 focus_bg-gray-700': $colorMode.value === 'dark',
              'bg-gray-300 dark_bg-gray-800 border-gray-700 dark_border-gray-500': shouldSort
            }`
            @click='shouldSort = !shouldSort'
          )
            svg-icon(name='sort-alpha-up', size='1.5em')
        nav.flex-auto.overflow-y-scroll.flex.flex-col.px-4.pb-4(:class='activeColor && `text-${activeColor}-500 dark_text-${activeColor}-400`')
          template(v-for='category in Object.keys(categories)')
            nuxt-link.flex.items-center.capitalize.py-1.transform.text-gray-600.dark_text-gray-500(
              :ref='category',
              style='transform; transform-origin: 0 50%'
              :to=`{
                query: Object.entries($route.query)
                  .filter(([key]) => !["q", "c"].includes(key))
                  .reduce(
                    (obj, [key, val]) => ({ ...obj, [key]: val }),
                    { c: category }
                    //- ...($route.query.c === category ? {} : { c: category })
                  )
              }`,
              :replace='!$route.query.c'
            )
              span {{ category }}
              //- .flex-auto
              //- span.text-xs.ml-2.text-gray-500.rounded-lg.px-1 {{ icons[category].length }}

      section.flex-1.flex.flex-col.relative
        div.lg-hidden.mr-6.fixed.z-20.p-1.pl-5
          button.w-8.h-8.p-1.bg-gray-200.hover_bg-gray-300.dark_bg-gray-800.rounded-lg.border-2.border-gray-300.dark_border-gray-700.flex.items-center
            svg-icon(name='bars-offset', size='1.5rem')
        nav.flex.p-3.bg-gray-100.dark_bg-gray-800.px-4.w-full.z-20.sticky.self-start(style='top: 72px')
          div.mr-6
            p.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Variants
            .flex.space-x-2(:class='activeColor && `text-${activeColor}-500 dark_text-${activeColor}-400`')
              template(v-for='variant, i in variants')
                //- @mouseenter='previewVariant = variant',
                button.w-11.h-11.p-1.bg-gray-200.hover_bg-gray-300.dark_bg-gray-800.rounded-lg.border-2.border-gray-300.dark_border-gray-700.flex.items-center(
                  @mouseenter='previewVariant = variant',
                  @click='resetPreview(); $router.push({ query: { ...$route.query, v: variant, ...(variant === "outline" ? {w: "1"} : variant === "path" ? {w: "3"} : {w: null}) } })',
                  :class=`{
                    'hover_bg-gray-700': $colorMode.value === 'dark',
                    'bg-gray-300': $route.query.v === variant || (!i && !$route.query.v),
                    'border-gray-700': $route.query.v === variant || (!i && !$route.query.v)
                  }`
                )
                  svg-icon.text-3xl(
                    :set='set',
                    :name='kebabCase(icon)',
                    :variant='variant',
                    :stroke-width='variant === "outline" ? 1 : null'
                  )
          div.hidden.sm_block.mr-6
            div.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Size
            .flex.space-x-2
              input-scrub.bg-gray-200.dark_bg-gray-900.rounded-lg.p-2.w-16.text-center(
                style='cursor: col-resize; height: 44px',
                :value='gridSize',
                @input='handleGridSize',
                :min='24',
                :max='80',
                steps='2',
                :friction='10',
              )
          div.hidden.sm_block.mr-6(v-if='["path", "outline"].includes(variant)')
            div.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Stroke
            .flex.space-x-2
              input-scrub.bg-gray-200.dark_bg-gray-900.rounded-lg.p-2.w-16.text-center(
                style='cursor: col-resize; height: 44px',
                :value='stroke',
                @input='handleStrokeWidth',
                :min='0.5',
                :max='6',
                steps='0.1',
                :friction='10',
              )
          div.hidden.sm_block.mr-6(v-click-outside='hideColor')
            div.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Color
            .relative
              button.p-1.bg-gray-200.hover_bg-gray-300.dark_bg-gray-800.dark_hover_bg-gray-700.rounded-lg.border-2.border-gray-300.dark_border-gray-700.flex.items-center.outline-none(
                @click='showColor = !showColor',
              )
                svg-icon.text-3xl(name='palette')
                svg-icon(name='caret', rotate='s', size='1.25rem', stroke-width='5')

              template(v-if='showColor')
                .absolute.p-4.left-0.z-20.mt-2.rounded-lg.bg-gray-200.dark_bg-gray-800.border-2.border-gray-300.dark_border-gray-700(
                  style='top: 100%; left: 50%; transform: translateX(-50%)'
                )
                  .flex.space-x-2
                    template(v-for="color in ['pink', 'purple', 'indigo', 'blue', 'teal', 'green', 'orange', 'red', null]")
                      a.rounded-full.p-3.overflow-hidden.cursor-pointer(
                        @mouseenter='changeColor(color)',
                        @click='showColor = false',
                        :class='color ? `bg-${color}-500 hover_bg-${color}-700` : `bg-gray-800 dark_bg-gray-300`'
                      )
          //- .flex-auto
          //- div(v-if='isWideScreen')
          //-   div.text-center.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Grid
          //-   button.p-1.bg-gray-200.hover_bg-gray-300.dark_bg-gray-800.dark_hover_bg-gray-700.rounded-lg.border-2.border-gray-300.dark_border-gray-700.flex.items-center.outline-none(
          //-     @click='expandLayout = !expandLayout'
          //-   )
          //-     rounded-icon(:name='expandLayout ? "arrows-compress-duo" : "arrows-expand-duo"', rotate='e', size='2rem', stroke-width='5')

        article(ref='article', :class='activeColor && `text-${activeColor}-500 dark_text-${activeColor}-400`')
          div.w-full.relative
            template(v-for='children, category in icons')
                div.flex.flex-wrap.justify-center.items-start.p-4.pt-0(:ref='`category.${category}`')
                  div.category-headline.py-1.w-full.bg-gray-100.dark_bg-gray-800.z-10.text-center.sticky.self-start(:id='category')
                    template(v-if='!$route.query.q')
                      h4.text-lg.w-full.text-gray-700.dark_text-gray-400.capitalize.my-1.mx-1 {{ category }}
                    template(v-else)
                      h4.text-lg.w-full.text-gray-700.dark_text-gray-400.capitalize.my-1.mx-1 Search results for '{{ $route.query.q }}'
                  template(v-for='child in children')
                    template(v-if='child && child.variants')
                      .mt-3.flex.flex-col.p-3.m-1.cursor-pointer.rounded-lg.border-2.w-full(
                        @click='selectIcon(child)',
                        :class=`{
                          'bg-gray-200 dark_bg-gray-900 hover_bg-gray-200 dark_hover_bg-gray-900 border-gray-400 dark_border-gray-1000': child.name === icon,
                          'bg-gray-100 dark_bg-gray-800 hover_bg-gray-200 dark_hover_bg-gray-900 border-gray-300 dark_border-gray-700': child.name !== icon,
                        }`,
                        :style='`width: ${(gridSize) * 2}px`',
                      )
                        svg-icon.self-center(:set='set', :name='child.name', :variant='variant', :size='`${gridSize}px`', :stroke-width='stroke')
                        .relative.opacity-25.dark_opacity-50.text-center.mt-1(v-if='gridSize > 44')
                          p.text-xs.truncate {{ kebabCase(child.name) }}

      client-only
        dir-icon(
          :components='components',
          :icon='icon',
          :set='set',
          :stroke='stroke',
          :variant='variant',
          :selectedSet='selectedSet',
          :activeColor='activeColor',
          :previewVariant='previewVariant',
          @handleStrokeWidth='handleStrokeWidth',
          @resetPreview='resetPreview',
        )
</template>

<script>
import kebabCase from 'lodash.kebabcase'
import debounce from 'lodash.debounce'

const meta = {
  rounded: require('@glyphs/rounded/meta.json'),
  edgy: require('@glyphs/edgy/meta.json'),
  brands: require('@glyphs/brands/meta.json'),
  flags: require('@glyphs/flags/meta.json')
}
const components = {
  rounded: require('@glyphs/rounded'),
  edgy: require('@glyphs/edgy'),
  brands: require('@glyphs/brands'),
  flags: require('@glyphs/flags')
}

export default {
  data: () => ({
    expandLayout: false,
    gridSize: 48,
    previewVariant: null,
    scrollLoaded: false,
    showSelect: false,
    shouldSort: false,
    showColor: false,
    activeColor: null
  }),

  head: {
    title: 'Directory'
  },

  computed: {
    setsSelection () {
      const res = Object.entries(components).map(([set, obj]) => {
        return { label: set, count: Object.keys(obj).length }
      })
      res.splice(2, 0, { label: 'simple' })
      return res
    },
    set () {
      return this.$route.query.s || 'rounded'
    },
    selectedSet () {
      return this.setsSelection.find(({ label }) => label === this.set)
    },
    icon () {
      return this.$route.query.i
    },
    variant () {
      return this.$route.query.v || meta[this.set].variants[0]
    },
    components () {
      return components[this.set]
    },
    stroke () {
      return this.$route.query.w || (
        (this.$route.query.v === 'path' || !this.$route.query.v)
          ? '3'
          : this.$route.query.v === 'outline'
            ? '1'
            : '1.5'
      )
    },
    isWideScreen () {
      return typeof window !== 'undefined' && window.innerWidth > 1600
    },
    categories () {
      const setCategories = meta[this.set].categories
      return Object.entries(setCategories)
        .sort(([keyA], [keyB]) => this.shouldSort ? keyA > keyB ? 1 : keyB > keyA ? -1 : 0 : 0)
        .reduce((obj, [key, value]) => {
          if (setCategories[key].length) {
            return { ...obj, [key]: value }
          }
          return obj
        }, {})
    },
    variants () {
      return meta[this.set].variants
    },
    iconComponents () {
      const result = Object.keys(components[this.set])
        .map(key => ({ name: key, ...components[this.set][key] }))
        .filter(({ variants }) => Object.keys(variants).length)
      return result
    },
    icons () {
      const { query } = this.$route || {}
      let result = this.iconComponents
      if (query.q && this.iconComponents) {
        result = this.iconComponents.filter(({ name, terms, categories }) => {
          return name.includes(query.q) || terms.filter(term => term.includes(query.q)).length || categories.find(c => query.q.includes(c))
        })
        return {
          query: result
        }
      }
      const sorted = Object.entries(meta[this.set].categories)
        .sort(([keyA], [keyB]) => this.shouldSort ? keyA > keyB ? 1 : keyB > keyA ? -1 : 0 : 0)
        .reduce((obj, [category, icons]) => {
          return {
            ...obj,
            [category]: icons.map((icon) => {
              return this.iconComponents.find(({ name }) => name === icon)
            })
          }
        }, {})
      return sorted
    }
  },

  watch: {
    '$route.query.c': {
      async handler (val) {
        if (val in this.categories) {
          await this.$nextTick()
          const target = this.$refs[`category.${val}`]
          // console.log(target[0])
          if (target && this.$refs.article) {
            setTimeout(() => { window.scrollTo(0, target[0].offsetTop + 0) })
          }
        } else if (this.$refs.article) {
          setTimeout(() => { window.scrollTo(0, 0) })
        }
      },
      immediate: true
    },
    '$route.query.s': {
      handler (val) {
        this.showRandomIcon()
      }
    },
    '$route.fullPath': {
      handler (val) {
        // eslint-disable-next-line
        const [_, query] = val.split('?')
        if (!query) {
          this.showRandomIcon()
        }
      }
    }
  },

  mounted () {
    // this.$nextTick().then(() => { this.scrollLoaded = true })
    window.addEventListener('scroll', this.handleArticleScroll)
    setTimeout(() => {
      this.scrollLoaded = true
      this.handleArticleScroll({ target: this.$refs.article })
      // this.injectShadowStyle()
    }, 1000)
    this.showRandomIcon()
  },

  methods: {
    debounce,
    kebabCase,

    resetPreview () {
      this.previewVariant = null
    },

    showRandomIcon () {
      if (this.$route.query.i) {
        return
      }
      const categories = Object.keys(meta[this.set].categories)
      const randomCategory = Math.floor(Math.random() * (categories.length - 2)) + 1
      const category = categories[randomCategory]
      const icons = meta[this.set].categories[category]
      const randomIcon = Math.floor(Math.random() * (icons.length))
      const icon = icons[randomIcon]
      this.$router.replace({ query: { ...this.$route.query, i: icon } })
    },

    selectIcon (icon) {
      const { name } = icon
      if (window.innerWidth < 1280) {
        this.$router.push({ path: `/dir/${kebabCase(name)}`, query: { s: this.set, v: this.variant } })
      } else {
        this.resetPreview()
        this.$router.push({ query: { ...this.$route.query, i: name } })
      }
    },

    // async injectShadowStyle () {
    //   const selectedIcon = this.$refs.selectedIcon
    //   const sheet = new CSSStyleSheet()
    //   await sheet.replace('.icon-inner { transition: transform .2s ease }')
    //   if (selectedIcon && selectedIcon.shadowRoot) {
    //     selectedIcon.shadowRoot.adoptedStyleSheets = [
    //       ...selectedIcon.shadowRoot.adoptedStyleSheets,
    //       sheet
    //     ]
    //   }
    // },

    handleArticleScroll ({ target }) {
      target = document.body

      const categories = Object.entries(this.$refs).reduce((arr, [name, ref]) => name.startsWith('category') ? [...arr, ...ref] : arr, [])
      const containerOffset = 164
      const containerHeight = window.innerHeight - containerOffset

      categories.forEach((category) => {
        const { top: t, bottom: b, height } = category.getBoundingClientRect()
        const top = t - containerOffset
        const bottom = b - containerOffset
        let portion
        if (top >= 0 && top <= containerHeight && bottom >= 0 && bottom <= containerHeight) {
          portion = height / containerHeight
        } else if (bottom >= 0 && bottom <= containerHeight) {
          portion = bottom / containerHeight
        } else if (top >= 0 && top <= containerHeight) {
          portion = (containerHeight - top) / containerHeight
        } else if (top <= 0 && bottom >= 0) {
          portion = 1
        }
        const ref = this.$refs[category.firstChild.textContent]
        if (!ref) {
          return
        }
        const nav = ref.length ? ref[0].$el : ref.$el
        if (!nav) {
          return
        }
        const inactiveClass = `text-gray-600 dark_text-gray-500 ${this.$colorMode.value === 'light' ? 'hover_text-gray-800' : 'hover_text-gray-300'}`
        const activeClass = 'text-grey-800 dark_text-grey-400'
        if (portion) {
          nav.classList.remove(...inactiveClass.split(' '))
          nav.classList.add(...activeClass.split(' '))
          // nav.classList.add('scale-105')
          nav.style.paddingLeft = `${portion * 20}px`
        } else {
          nav.classList.remove(...activeClass.split(' '))
          nav.classList.add(...inactiveClass.split(' '))
          // nav.classList.remove('scale-105')
          nav.style.paddingLeft = 0
        }
      })
    },

    handleGridSize: debounce(function (value) {
      this.gridSize = value
    }, 5),

    _debounceRoute: debounce(function (value) {
      this.$router.replace({ query: { ...this.$route.query, w: value } })
    }, 10),

    handleStrokeWidth (value) {
      // this.gridSize = value
      const w = parseFloat(this.$route.query.w)
      if (!w || w !== value) {
        this._debounceRoute(value)
      }
    },

    changeColor (color) {
      this.activeColor = color
      // document.documentElement.style.setProperty('--color-primary-500', color)
    },

    hideColor () {
      this.showColor = false
    },

    hideSet () {
      // const ref = this.$refs
      // console.log(ref)
      // ref.hideSet()
      if (this.showSelect) {
        this.showSelect = false
      }
    },

    changeSet (set = {}) {
      const routeSet = this.$route.query.s
      if (set.count && routeSet !== set.label) {
        this.$router.push({ query: { s: set.label } })
        this.showSelect = false
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
  box-shadow: -405px 0 0 400px #4A5568;
  border-radius: 50%;
}
.dark-mode input[type="range"]::-webkit-slider-thumb {
  box-shadow: -405px 0 0 400px #A0AEC0;
}
/* .selected-icon { transition: transform 50ms ease } */

.category-headline {
  top: 164px
}
@media (max-width: 768px) {
  .category-headline {
    top: 72px
  }
}
</style>
