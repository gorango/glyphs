import Vue from 'vue'
// import kebabCase from 'lodash.kebabcase'
// import debounce from 'lodash.debounce'

const meta = {
  rounded: require('@glyphs/rounded/meta.json'),
  brands: require('@glyphs/brands/meta.json'),
  flags: require('@glyphs/flags/meta.json')
}
const components = {
  rounded: require('@glyphs/rounded'),
  brands: require('@glyphs/brands'),
  flags: require('@glyphs/flags')
}

export const state = () => ({
  selectSet: false,
  shouldSort: false
})

export const mutations = {
  // SET_CATEGORIES (state, categories) {
  // }
  hideSet () {
    Vue.set(state, 'selectSet', false)
  }
}

export const actions = {
}

export const getters = {
  setsSelection (state, getters) {
    const res = Object.entries(components).map(([set, obj]) => {
      return { label: set, count: Object.keys(obj).length }
    })
    res.splice(1, 0, { label: 'edgy' }, { label: 'simple' })
    return res
  },

  set (state, getters, { route }) {
    return (route && route.query.s) || 'rounded'
  },

  selectedSet (state, { setsSelection, set }, { route }) {
    return setsSelection.find(({ label }) => label === set)
  },

  icon (state, getters, { route }) {
    return route && route.query.i
  },

  variant (state, { set }, { route }) {
    return (route && route.query.v) || meta[set].variants[0]
  },

  components (state, { set }, { route }) {
    return components[set]
  },

  stroke (state, getters, { route }) {
    return (route && route.query.w) || (
      (route.query.v === 'path' || !route.query.v)
        ? '3'
        : route.query.v === 'outline'
          ? '1'
          : '1.5'
    )
  },

  isWideScreen (state, getters, { route }) {
    return typeof window !== 'undefined' && window.innerWidth > 1600
  },

  categories ({ shouldSort }, { set }, { route }) {
    const setCategories = meta[set].categories
    return Object.entries(setCategories)
      .sort(([keyA], [keyB]) => shouldSort ? keyA > keyB ? 1 : keyB > keyA ? -1 : 0 : 0)
      .reduce((obj, [key, value]) => {
        if (setCategories[key].length) {
          return { ...obj, [key]: value }
        }
        return obj
      }, {})
  },

  variants (state, { set }, { route }) {
    return meta[set].variants
  },

  icons ({ shouldSort }, { iconComponents, set }, { route }) {
    const { query } = route || {}

    let result = Object.keys(components[set])
      .map(key => ({ name: key, ...components[set][key] }))
      .filter(({ variants }) => Object.keys(variants).length)

    if (query.q && iconComponents) {
      result = iconComponents.filter(({ name, terms, categories }) => {
        return name.includes(query.q) || terms.filter(term => term.includes(query.q)).length || categories.find(c => query.q.includes(c))
      })
      return {
        query: result
      }
    }

    const sorted = Object.entries(meta[set].categories)
      .sort(([keyA], [keyB]) => shouldSort ? keyA > keyB ? 1 : keyB > keyA ? -1 : 0 : 0)
      .reduce((obj, [category, icons]) => {
        return {
          ...obj,
          [category]: icons.map((icon) => {
            return iconComponents.find(({ name }) => name === icon)
          })
        }
      }, {})

    return sorted
  }
}
