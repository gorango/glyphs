<script>
import kebabCase from 'lodash/kebabcase'
import camelCase from 'lodash/camelcase'
// import components from '@glyphs/rounded/icons-meta.json'
import {
  questionCircle,
  eye,
  eyeSlash,
  seekStep,
  arrowLineEnd,
  play
} from '../../assets/rounded/index.js'

const icons = {
  questionCircle,
  eye,
  eyeSlash,
  seekStep,
  arrowLineEnd,
  play
}

async function getSvg (path, name) {
  // const res = await import(`${path}`)
  // return import(`../../assets/${name}.svg`).then((res) => {
  //   console.log(res)
  //   return res
  // })
  // const res = require(`../../assets/${name}.svg`)
  const res = require(`${path}`)
  console.log(res)
  return res.default
}

export default {
  name: 'Icon',

  props: {
    set: {
      type: String,
      default: 'rounded'
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
    async loadIcon () {
      try {
        // const path = `@glyphs/${this.set}/${this.variant}/${this.iconName}.svg`
        // this.svg = await getSvg(`@glyphs/${this.set}/${this.variant}/${this.iconName}.svg`, this.iconName)
        // const res = await import(`@glyphs/${this.set}/${this.variant}/${this.iconName}.svg`)
        // const res = require(`../../assets/${this.iconName}.svg`)
        // const res = await import(`../../assets/${this.iconName}.svg`)
        // const res = await import(`../../assets/${this.iconName}.svg`)
        // const res = await require.ensure(`@glyphs/${this.set}/${this.variant}/${this.iconName}.svg`)
        // const res = require(`@glyphs/${this.set}/${this.variant}/${this.iconName}.svg`)
        // const res = await import(`../../assets/rounded/index.js`)
        const res = icons[camelCase(this.iconName)]
        console.log(res)
        this.svg = res
      } catch (error) {
        console.log(error)
        this.svg = null
      }
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

<style>
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

  .path > svg *[stroke],
  .outline > svg *[stroke],
  .solid > svg *[stroke],
  .bold > svg *[stroke],
  .mono > svg *[stroke] {
    stroke: currentColor;
  }

  .path > svg *[fill],
  .outline > svg *[fill],
  .solid > svg *[fill],
  .bold > svg *[fill],
  .mono > svg *[fill] {
    fill: currentColor;
  }
</style>
