<script>
import kebabCase from 'lodash.kebabcase'

export default {
  name: 'SvgIcon',

  props: {
    set: {
      type: String,
      default: 'core'
    },
    name: {
      type: String,
      required: true,
      default: null
    },
    variant: {
      type: String,
      default: 'path'
    },
    strokeWidth: {
      type: [String, Number],
      default: 3
    },
    size: {
      type: String,
      default: 'auto'
    },
    rotate: {
      type: [String, Number],
      default: 0
    },
    flip: {
      type: String,
      default: ''
    },
    offset: {
      type: [String, Number],
      default: null
    },
    transition: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    svg: null,
    isDashSet: null
  }),

  computed: {
    iconName () {
      return kebabCase(this.name)
    }
  },

  mounted () {
    ;[
      'name',
      'variant',
      'set',
      'rotate',
      'flip',
      'offset'
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
          this.svg = require(`@glyphs/${this.set}/${this.variant}/${this.iconName}.svg?inline`)
          // this.svg = await import(/* webpackChunkName: `${this.set}-${this.variant}` */ `@glyphs/${this.set}/${this.variant}/${this.iconName}.svg?inline`)
          if (this.variant === 'path' && this.offset !== null) {
            this.isDashSet = false
            await this.$nextTick()
            this.initDasharray()
            this.toggleDashoffset()
          } else {
            this.resetDashoffset()
          }
        } catch (error) {
          this.svg = null
        }
      })
    },

    waitUntilVisible (el, rootMargin, cb) {
      if (typeof window !== 'undefined' && window.IntersectionObserver) {
        const io = new window.IntersectionObserver((entries, observer) => {
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
    },

    initDasharray () {
      const svg = this.$el && this.$el.children && this.$el.children[0]
      if (!svg || !this.variant === 'path') {
        return
      }
      ;[...svg.children].forEach((child) => {
        child.style.transition = this.transition && 'stroke-dashoffset .5s ease'
        if (child.hasAttribute('stroke-dasharray')) {
          child.style.strokeDasharray = ''
        } else if (child.attributes.stroke) {
          child.style.strokeDasharray = child.getTotalLength()
        }
      })
      this.isDashSet = true
    },

    toggleDashoffset () {
      const svg = this.$el && this.$el.children && this.$el.children[0]
      if (!(this.isDashSet && svg)) {
        return
      }
      ;[...svg.children].forEach((child, i) => {
        if (child.attributes.stroke) {
          const len = child.getTotalLength()
          const offset = Number(this.offset)
          child.style.strokeDashoffset = offset ? len * offset : 0
          child.style.transitionDelay = `${i * 100}ms`
        }
      })
    },

    resetDashoffset () {
      const svg = this.$el && this.$el.children && this.$el.children[0]
      if (!svg) {
        return
      }
      this.isDashSet = null
      ;[...svg.children].forEach((child, i) => {
        if (child.attributes.stroke) {
          child.style.transition = ''
          child.style.strokeDasharray = ''
          child.style.strokeDashoffset = ''
          child.style.transitionDelay = ''
        }
      })
    }
  },

  render (h) {
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

    return h(
      'span',
      {
        on: {
          click: this.toggleDashoffset
        },
        class: {
          [this.variant]: true
        },
        style: {
          fontSize,
          strokeWidth,
          stroke,
          transform
        }
      },
      [
        h(this.svg)
      ]
    )
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

/* .path path {
  stroke-linecap: round
} */

.path, .duo, .outline, .solid, .bold, .mono {
  & > svg *[stroke] {
    stroke: currentColor;
  }
}

.path, .duo, .outline, .solid, .bold, .mono {
  & > svg *[fill] {
    fill: currentColor;
  }
}
</style>
