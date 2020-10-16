export const state = () => ({
  categories: {},
  releases: [],
  settings: {
    title: 'Just Icons Docs',
    defaultBranch: '',
    filled: false
  }
})

export const getters = {
  settings (state) {
    return state.settings
  }
}

export const mutations = {
  SET_SETTINGS (state, settings) {
    state.settings = Object.assign({}, settings, { filled: true })
  }
}

export const actions = {
  async fetchSettings ({ commit }) {
    try {
      const settings = await this.$content('settings').fetch()
      commit('SET_SETTINGS', settings)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('You can add a `settings.json` file inside the `content/` folder to customize this theme.')
    }
  }
}
