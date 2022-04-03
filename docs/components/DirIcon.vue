<template lang="pug">
  aside.hidden.xl_block.pt-3.overflow-y-scroll.px-6.pb-6.w-full.sticky.self-start(
    style='top: 72px; max-height: calc(100vh - 72px); width: 384px; max-width: 384px'
  )
    .flex.justify-between
      div.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Icon Name
      template(v-if='copy.name')
        div.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Copied
    .flex.space-x-2.mt-2
      .cursor-pointer.flex.items-center.justify-between.w-full.p-2.pl-4.bg-gray-200.dark_bg-gray-900.rounded-lg.border-2.border-gray-300.dark_border-gray-700(
        @click='selectCopy("name")',
        ref='name'
      )
        span.text-md(ref='iconName') {{ kebabCase(icon) }}

    .flex.mt-2.justify-center.relative(:class='activeColor && `text-${activeColor}-500 dark_text-${activeColor}-400`')
      .absolute.top-0.right-0.p-2
        template(v-if='components[icon]')
          a.mb-2.flex.items-center.justify-center.bg-gray-200.hover_bg-gray-300.dark_bg-gray-800.dark_hover_bg-gray-700.rounded-lg.border-2.border-gray-300.dark_border-gray-700.text-gray-700.dark_text-gray-400.cursor-pointer(
            title='View in Figma',
            target='_blank',
            rel='noreferrer noopener',
            :href='`https://figma.com/file/${figmaIds[set]}?node-id=${components[icon].variants[variant]}`',
          )
            svg-icon(set='brands', name='figma', variant='color', size='1.5rem')
        button.mb-2.flex.items-center.justify-center.bg-gray-200.hover_bg-gray-300.dark_bg-gray-800.dark_hover_bg-gray-700.text-gray-700.dark_text-gray-400.rounded-lg.border-2.border-gray-300.dark_border-gray-700.cursor-pointer(
          title='Download SVG',
          @click='downloadIcon',
        )
          svg-icon(name='arrow-line-end', rotate='180', size='1.5rem')
        //- router-link.mb-2.flex.items-center.justify-center.bg-gray-200.hover_bg-gray-300.dark_bg-gray-800.dark_hover_bg-gray-700.rounded-lg.border-2.border-gray-300.dark_border-gray-700.text-gray-700.dark_text-gray-400.cursor-pointer(
        //-   :to='`/dir/${kebabCase(icon)}`'
        //-   title='Icon Page'
        //- )
          svg-icon(name='arrow-external', size='1.5em')
      //- template(v-if='previewVariant === "figma"')
        div.relative.overflow-hidden.rounded-lg.w-full(style='padding-top: 256px')
          iframe.absolute.inset-0.w-full.h-full(:src='`https://www.figma.com/embed?embed_host=astra&url=${components[icon].variants[variant].source}`')
      //- template(v-else)
      svg-icon.selected-icon(
        :class="{ 'invisible': iconEnter }",
        :set='set',
        ref='selectedIcon',
        :name='kebabCase(icon)',
        :variant='previewVariant || variant',
        size='16rem',
        :transition='!iconEnter',
        :flip='previewFlip',
        :offset='previewOffset',
        :rotate='previewRotate',
        :stroke-width='stroke'
      )

    div.mt-4.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Search Terms
    div.flex-auto.flex.flex-wrap.items-center.mt-2(v-if='components[icon]')
      template(v-for='term, i in components[icon].terms')
        nuxt-link.text-gray-700.dark_text-gray-300.text-xs(
          :to='{ query: Object.entries($route.query).filter(([key]) => !["q", "c"].includes(key)).reduce((obj, [key, val]) => ({ ...obj, [key]: val }), { q: term }) }'
        )
          span.hover_opacity-100.hover_underline(
            :class='(!$route.query.q || ($route.query.q && !($route.query.q.includes(term) || term.includes($route.query.q)))) ? "opacity-75" : "underline"'
          ) {{ term }}
          template(v-if='i !== components[icon].terms.length - 1')
            | ,&nbsp;
    div.mt-4.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Categories
    template(v-if='components[icon]')
      div.flex.text-sm
        template(v-for='category in components[icon].categories')
          nuxt-link.px-2.py-1.mr-2.capitalize.bg-gray-200.dark_bg-gray-800.dark_hover_bg-gray-700.rounded-lg.border-2.border-gray-300.dark_border-gray-700.text-gray-700.dark_text-gray-400(
            tag='button',
            :to='{ query: Object.entries($route.query).filter(([key]) => !["q", "c"].includes(key)).reduce((obj, [key, val]) => ({ ...obj, [key]: val }), { c: category }) }'
          )
            | {{ category }}
    .flex.mt-4.mb-2
      div.mr-3
        div.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Flip
        .flex.space-x-2
          button.p-1.flex.items-center.bg-gray-200.dark_bg-gray-800.rounded-lg.border-2.border-gray-300.dark_border-gray-700(
            aria-label='Flip icon horizantally',
            @click='handleFlip("y")'
          )
            svg-icon.self-center(name='flip-1', variant='path', size='2rem', :rotate='previewRotate + 90')
          button.p-1.flex.items-center.bg-gray-200.dark_bg-gray-800.rounded-lg.border-2.border-gray-300.dark_border-gray-700(
            aria-label='Flip icon vertically',
            @click='handleFlip("x")'
          )
            svg-icon.self-center(name='flip-1', variant='path', size='2rem', :rotate='previewRotate')
      div.mr-3
        div.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Rotate
        input-scrub.bg-gray-200.dark_bg-gray-900.rounded-lg.p-2.w-16.text-center(
          style='cursor: col-resize; height: 44px',
          aria-label='Change rotation',
          :value='previewRotate',
          @input='handleRotate',
          :steps='1',
          :shift='22.5',
          :friction='1',
        )
      div.mr-3(v-if='["path", "duo", "line", "outline"].includes(variant)')
        div.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Stroke
        input-scrub.bg-gray-200.dark_bg-gray-900.rounded-lg.p-2.w-16.text-center(
          style='cursor: col-resize; height: 44px',
          aria-label='Change stroke width',
          :value='stroke',
          @input='$emit("handleStrokeWidth", $event)',
          :min='0.5',
          :max='6',
          :steps='0.1',
          :friction='5',
        )
      //- div.mr-3(v-if='["path"].includes(variant)')
        div.mb-2.uppercase.text-xs.tracking-wider.text-gray-500.dark_text-gray-600 Dash
        input-scrub.bg-gray-200.dark_bg-gray-900.rounded-lg.p-2.w-16.text-center(
          style='cursor: col-resize; height: 44px',
          aria-label='Change dash offset',
          :value='previewOffset',
          @input='previewOffset = $event',
          :min='-2',
          :max='2',
          steps='0.1',
          :friction='20',
        )
    div.mt-6.mb-2
      div.flex.items-end.space-x-3
        a.cursor-pointer.hover_underline.text-xs(@click='showCode = "svg"', :class='showCode === "svg" ? "text-gray-700 dark_text-gray-400" : "text-gray-500 dark_text-gray-600"') SVG
        a.cursor-pointer.hover_underline.text-xs(@click='showCode = "wc"', :class='showCode === "wc" ? "text-gray-700 dark_text-gray-400" : "text-gray-500 dark_text-gray-600"') HTML
        .flex-auto
        template(v-if='copy.code')
          span.text-xs.tracking-wider.uppercase Copied

      .flex.relative.mt-2
        div.cursor-pointer.w-full.rounded-lg.bg-gray-200.dark_bg-gray-900.text-gray-800.dark_text-gray-300.border-2.border-gray-300.dark_border-gray-700.relative(
          @click='selectCopy("code")',
          ref='code'
        )
          template(v-if='icon')
            prism(lang='html', :code='prismaCode')

    div.my-3(v-if='showCode === "wc"')
      router-link.hover_underline.text-gray-500.dark_text-gray-600.flex.items-center(to='docs/web/getting-started')
        svg-icon.mr-1(name='question-circle', size='1.5rem', stroke-width='5')
        | Web component docs
</template>

<script>
import kebabCase from 'lodash.kebabcase'
import debounce from 'lodash.debounce'

const figmaIds = {
  core: 'wyQQBVAU7cNf2eb5qGI9EK',
  brands: 'zOm4MinTTApgF6q8mpjs41',
  flags: 'PVl3fCowhWp7nqIyGBrqCq'
}

const svgs = {
  core: require('@glyphs/core/map.json'),
  brands: require('@glyphs/brands/map.json'),
  flags: require('@glyphs/flags/map.json')
}

export default {
  props: {
    components: {
      type: Object,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    set: {
      type: String,
      default: null
    },
    stroke: {
      type: [Number, String],
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    selectedSet: {
      type: Object,
      default: null
    },
    activeColor: {
      type: String,
      default: null
    },
    previewVariant: {
      type: String,
      default: null
    }
  },

  data: () => ({
    figmaIds,
    previewFlip: null,
    previewRotate: 0,
    previewOffset: null,
    iconEnter: false,
    rotate: null,
    flip: null,
    copy: {
      name: false,
      code: false
    },
    showCode: 'svg'
  }),

  computed: {
    wcCode () {
      const start = `<${this.selectedSet.label}-${this.kebabCase(this.icon)}\n  variant="${this.previewVariant || this.variant}"`
      const rotate = this.previewRotate ? `\n  rotate="${this.previewRotate}"` : ''
      const flip = this.previewFlip ? `\n  flip="${this.previewFlip}"` : ''
      const stroke = ['path', 'duo', 'outline'].reduce((b, v) => b || [this.variant, this.previewVariant].includes(v), 0) ? `\n  stroke-width="${this.stroke}"` : ''
      const end = `\n></${this.selectedSet.label}-${this.kebabCase(this.icon)}>`
      return start + (rotate && rotate) + (flip && flip) + (stroke && stroke) + end
    },
    svgCode () {
      const component = this.components[this.icon]
      const variant = component.variants[this.previewVariant] || component.variants[this.variant]
      const svg = svgs[this.selectedSet.label][variant]
      return svg
    },
    prismaCode () {
      switch (this.showCode) {
        case 'svg':
          return this.svgCode
        case 'wc':
          return this.wcCode
        default:
          return null
      }
    }
  },

  watch: {
    '$route.query.i': {
      handler (val) {
        const variant = this.$route.query.v
        const set = this.$route.query.s
        if ((variant && variant !== 'path') || set === 'edgy') {
          this.previewOffset = null
          this.iconEnter = false
          return
        }
        this.iconEnter = true
        this.previewOffset = 1
        setTimeout(() => {
          this.iconEnter = false
          this.previewOffset = 0
        }, 500)
      },
      immediate: true
    }
  },

  methods: {
    kebabCase,

    async copyToClipboard (text, type) {
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text)
        success.call(this)
        return
      }
      await navigator.clipboard.writeText(text)
      success.call(this)

      function success () {
        this.copy[type] = true
        setTimeout(() => {
          this.copy[type] = false
        }, 3000)
      }
    },

    selectCopy (type) {
      const ref = this.$refs[type]
      const sel = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(ref)
      sel.removeAllRanges()
      sel.addRange(range)
      const text = sel.toString()
      this.copyToClipboard(text, type)
    },

    downloadIcon () {
      const component = this.components[this.icon]
      const variant = this.previewVariant || this.variant
      const id = component && component.variants[variant]
      const svg = svgs[this.set][id]
      if (svg) {
        const blob = new Blob([svg], { type: 'image/svg+xml' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = `${kebabCase(this.icon)}_${variant}`
        link.click()
        URL.revokeObjectURL(link.href)
      }
    },

    resetPreview () {
      // this.$emit('resetPreview')
      // this.previewVariant = null
      this.previewFlip = null
      this.previewRotate = 0
      const query = Object.keys(this.$route.query)
        .filter(key => key !== 'w')
        .reduce((obj, key) => ({ ...obj, [key]: this.$route.query[key] }), {})
      this.$router.push({ query })
    },

    handleFlip (dir) {
      const newFlip = this.previewFlip
        ? this.previewFlip.includes(dir)
          ? this.previewFlip.replace(dir, '') // eslint-disable-line
          : this.previewFlip + dir // eslint-disable-line
        : dir
      this.previewFlip = newFlip
    },

    handleRotate: debounce(function (value) {
      this.previewRotate = value
    }, 5)
  }
}

function fallbackCopyTextToClipboard (text) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.position = 'fixed'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  document.execCommand('copy')
}
</script>
