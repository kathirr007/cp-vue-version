<template>
  <div class="wp-app layout-3">
    <!-- <MainMenu v-if="toggleMainMenu" /> -->
    <div class="wrapper">
      <sideBar />
      <div class="container-fluid page-wrap">
        <div class="row">
          <div class="col-md-12 main-panel-wrap">
            <div class="main-panel">
              <div class="container-fluid main-panel-page">
                  <nuxt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import navbar from '~/components/shared/navbar'
  import MainMenu from '../components/MainMenu.vue'
  import sideBar from '~/components/sideBar'

  export default {
    head() {
      return {
        title: "",
        meta: [
          { charset: 'utf-8' },
          { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
          { name: 'keywords', content: 'keyword 1, keyword 2'},
          { hid: 'description', name: 'description', content: 'This is the generic description.'}
        ],
        link: [
          { rel: 'icon', type:'image/png', href: '/favicon.ico' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp' },
        ],
        script: [
          // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
        ]
      }
    },
    components: {
      // navbar,
      sideBar,
      MainMenu
    },
    data() {
      return {
        toggleMainMenu: false
      }
    },
    methods: {

    },
  }
</script>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  overflow-y: auto;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* Layout-3 Changes Starts */
.layout-3.wp-app {
    .page-wrap {
        .main-panel-wrap {
            .main-panel {
                .main-panel-page {
                    padding: 0;

                    .main-container {
                        margin: 0 auto !important;

                        .no-data-container {
                            height: calc(100vh - 60px) !important;
                        }

                        .settings-wrap {
                            height: 100vh !important;
                            top: 0;
                            box-shadow: rgba(255, 255, 255, 0) 0px 0px 0px 0px inset;
                        }

                        .content {
                            .tab-content-container {

                                .contract-content-container,
                                .client-content-container {
                                    margin-top: 35px;
                                }

                                /* .contract-content-container:nth-of-type(1),
                                .client-content-container:nth-of-type(1) {
                                    margin-top: 123px;
                                } */
                            }
                        }
                    }
                }
            }
        }
    }
}

/* Layout-3 Changes Ends */

</style>
