module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt to Netlify' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'maclassbody'
    },
    htmlAttrs: {
      class: 'has-navbar-fixed-top',
    },
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  /*
   ** Global CSS
   */
  css: [
    /*'@/assets/main.css',*/
    { src: '@/assets/scss/main.sass', lang: 'sass' },
    //{ src: 'bulma/bulma.sass', lang: 'sass' },
    { src: '@/assets/scss/app.scss',lang: 'scss' }

  ],

  /*
   ** Nuxt.js modules
   */

  modules: [
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: 'http://localhost: 3000',
    browserBaseURL: '/api'
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: [
      require('postcss-cssnext')()
    ]
  }
}
