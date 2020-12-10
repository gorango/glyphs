import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selection: 0,
    loading: false,
  },

  mutations: {
    setLoading (state, loading) {
      Vue.set(state, 'loading', loading)
    },
    setSelection (state, selection) {
      Vue.set(state, 'selection', selection)
    }
  },

  actions: {
    post (store, { type, value }) {
      parent.postMessage({ pluginMessage: { type, value } }, '*')
    }
  }
})
