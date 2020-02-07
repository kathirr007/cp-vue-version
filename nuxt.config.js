/* eslint-disable */
module.exports = {
  server: {
    // port: 3100, // default 3000
    port: process.env.PORT || 3800,
  },
  mode: 'universal',
  // mode: 'spa',
  /*
  ** Headers of the page
  */
 head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' }
      // { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css' }
      // { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css' }
    ],
    script: [
      {src: 'https://kit.fontawesome.com/df4e4a88c4.js', crossorigin :'anonymous'},
      // {src: 'https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js', crossorigin :'anonymous'}
      // {src: 'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js', crossorigin :'anonymous'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1e2b46' },
  /*
  ** Global CSS
  */
  css: [
        // '@assets/lbd/css/lbd-bundle.css',
    // '@assets/lbd/css/bootstrap.min.css',
    // '@assets/lbd/css/bootstrap-table.min.css',
    // '@assets/lbd/css/font-awesome.min.css',
    // '@assets/lbd/css/jquery-ui.min.css',
    // '@assets/lbd/css/jquery.mCustomScrollbar.min.css',
    '@assets/plugins/vue-multiselect.min.css',
    '@assets/lbd/css/material-icons.css',
    '@/assets/scss/light-bootstrap-dashboard.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/filters'},
    {src: '~/plugins/vuelidate'},
    {src: '~/plugins/integrations'},
    {src: '~/plugins/vueMultiSelect'},
    // {src: '~/plugins/jquery.min', ssr: false},
    {src: '~/plugins/toasted', ssr: false},
    // {src: '~/plugins/prettyCheckbox', ssr: false},
    {src: '~/plugins/paginate', ssr: false},
    {src: '~/plugins/infiniteloading', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Style resources
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/lbdcss/b4-assets/mixins/_background-variant.scss', // use underscore "_" & also file extension ".scss"
      '~/assets/scss/lbdcss/b4-assets/mixins/_hover.scss',
      // '~/assets/scss/lbdcss/b4-assets/utilities/_background.scss',
      '~/assets/scss/lbdcss/workplace/_variables.scss',
      ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
