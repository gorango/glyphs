<template>
  <span
    :class="{ [variant]: true }"
    :style="iconStyle"
    v-html="svg"
  >
  </span>
</template>

<script>
import kebabCase from 'lodash.kebabcase'

export default {
  name: 'SvgIcon',

  props: {
    set: { type: String, default: 'rounded' },
    name: { type: String, required: true, default: 'heart' },
    variant: { type: String, default: 'path' },
    strokeWidth: { type: [String, Number], default: 3 },
    size: { type: String, default: 'auto' },
    rotate: { type: [String, Number], default: 0 },
    flip: { type: String, default: '' }
  },

  data: () => ({
    svg: null,
    isDashSet: null
  }),

  computed: {
    iconName () {
      return kebabCase(this.name)
    },
    iconStyle () {
      const rotateMap = { n: 0, nne: 22.5, ne: 45, ene: 67.5, e: 90, ese: 112.5, se: 135, sse: 157.5, s: 180, ssw: 202.5, sw: 225, wsw: 247.5, w: 270, wnw: 292.5, nw: 315, nnw: 337.5 }
      const scaleMap = { v: 'scaleX', x: 'scaleX', h: 'scaleY', y: 'scaleY', a: 'scale', xy: 'scale', yx: 'scale', hv: 'scale', vh: 'scale' }
      const rotation = (value) => {
        if (isNaN(value)) {
          return rotateMap[value]
        }
        return value
      }
      const fontSize = this.size || 'auto'
      const strokeWidth = this.strokeWidth
      const stroke = 'inherit'
      const rotate = this.rotate && !['0', 'n'].includes(this.rotate) && `rotate(${rotation(this.rotate)}deg)`
      const scale = this.flip && scaleMap[this.flip] + '(-1)'
      const transform = (rotate && scale) ? `${rotate} ${scale}` : ((rotate || scale) || '')

      return {
        fontSize,
        strokeWidth,
        stroke,
        transform
      }
    }
  },

  mounted () {
    [
      'name',
      'variant',
      'set',
      'rotate',
      'flip'
    ].forEach((prop) => {
      this.$watch(prop, this.loadIcon, {
        immediate: prop === 'name'
      })
    })
  },

  methods: {
    loadIcon () {
      this.waitUntilVisible(this.$el, '500px', async () => {
        try {
          this.svg = require(`!html-loader!../web-component/sets/${this.set}/svg/${this.variant}/${this.iconName}.svg`)
        } catch (error) {
          this.svg = null
        }
      })
    },

    waitUntilVisible (el, rootMargin, cb) {
      if (typeof window !== 'undefined' && window.IntersectionObserver) {
        const io = new window.IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              io.disconnect()
              cb()
            }
          })
        }, { rootMargin })

        io.observe(el)
      } else {
        cb() // no support for IntersectionObserver
      }
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  width: 1em;
  height: 1em;

  contain: strict;
  box-sizing: content-box !important;
}

svg {
  display: block;
  overflow: visible;

  height: 100%;
  width: 100%;
}

:not(.color), :not(.poly) {
  & > svg *[stroke] {
    stroke: currentColor;
  }
}

:not(.color), :not(.poly) {
  & > svg *[fill] {
    fill: currentColor;
  }
}
</style>
