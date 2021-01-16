export default async function ({ store, app }) {
  if (process.server) {
    await store.dispatch('docs/fetchCategories')
  }
  // Spa Fallback
  if (process.client && !store.state.docs.categories) {
    await store.dispatch('docs/fetchCategories')
  }
  // Hot reload on development
  if (process.client && process.dev) {
    window.onNuxtReady(() => {
      window.$nuxt.$on('content:update', async () => {
        await store.dispatch('docs/fetchCategories')
      })
    })
  }
}
