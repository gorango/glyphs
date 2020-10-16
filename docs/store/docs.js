import Vue from 'vue'
import groupBy from 'lodash.groupby'

export const state = () => ({
  categories: null
})

export const mutations = {
  SET_CATEGORIES (state, categories) {
    Vue.set(state, 'categories', categories)
  }
}

export const actions = {
  async fetchCategories ({ commit, state }) {
    // Avoid re-fetching in production
    if (process.dev === false && state.categories) {
      return
    }
    const docs = await this.$content({ deep: true })
      .where({ path: { $contains: 'docs' } })
      .only(['title', 'menuTitle', 'category', 'slug', 'path', 'version', 'to', 'disabled'])
      .sortBy('position', 'asc')
      .fetch()
    const categories = groupBy(docs, 'category')
    commit('SET_CATEGORIES', categories)
  }
}
