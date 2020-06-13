const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate(title) {
      if (title) {
        return `${title} - Nuxt PWA TailwindCSS`
      }
      return 'Nuxt PWA TailwindCSS'
    }
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',

    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'

    // https://github.com/nuxt-community/sentry-module
    // "@nuxtjs/sentry",

    // https://github.com/nuxt-community/analytics-module
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     // TODO: Change this id to your Google Analytics ID
    //     id: process.env.GOOGLE_ANALYTICS
    //   }
    // ]
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  vuetify: {},

  // https://nuxtjs.org/api/configuration-plugins
  plugins: [],

  // https://nuxtjs.org/api/configuration-css
  css: [],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev,
    transpile: ['vee-validate/dist/rules'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
