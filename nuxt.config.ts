export default defineNuxtConfig({
  compatibilityDate: '2026-10-27',
  modules: ['vuetify-nuxt-module', '@nuxt/eslint'],
  vuetify: {
    moduleOptions: {
      prefixComposables: true
    }
  },
  css: ['~/assets/main.scss'],
})