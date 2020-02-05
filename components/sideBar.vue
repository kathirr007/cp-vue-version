<template>
  <div class="sidebar">
      <div class="logo">
          <nuxt-link to="/">
              <img src="~assets/lbd/img/cp-logo.svg" alt="ContentPlace" />
          </nuxt-link>
      </div>
      <div class="sidebar-wrapper">
          <ul class="nav">
              <li>
                  <a aria-expanded="false" class="nav-link" id="popover-main-menu" href="javascript:;">
                      <span class="d-flex" data-toggle="tooltip" data-container="body" data-placement="right" title="Menu">
                          <i class="material-icons">menu</i>
                      </span>
                  </a>
                  <MainMenu />
              </li>
              <li>
                  <a href="javascript:;" class="nav-link" data-toggle="modal" data-target="#dashboardNotificationsModal">
                      <span class="d-flex" data-toggle="tooltip" data-container="body" data-placement="right" title="Notifications">
                          <i class="material-icons">notifications_none</i>
                          <span class="notification">3</span>
                      </span>
                  </a>
              </li>
          </ul>
          <div class="sidebar-footer">
              <a class="switch-workplace clearfix" href="javascript:;">
                  <i class="material-icons">crop_rotate</i>
                  <p>Switch to Workplace</p>
              </a>
              <a class="profile clearfix" href="javascript:;" data-toggle="modal" data-target="#myprofileEditLogoutModal">
                  <div class="profile_pic">
                      <b-img rounded="circle" src="~assets/lbd/img/default-avatar.png" alt="Circle image"></b-img>
                  </div>
                  <div class="profile_info">
                      <p>Clarrise</p>
                  </div>
              </a>
          </div>
      </div>
  </div>
</template>

<script>
  // import $ from 'jquery'
  import MainMenu from '../components/MainMenu.vue'
  export default {
    data() {
      return {
        openMainMenu: 0
      }
    },
    components: {
      MainMenu
    },
    methods: {
      toggleMenu(e) {
        console.log('Clicked main manu toggle...')
        this.openMainMenu = !this.openMainMenu
        this.$emit('mainMenuClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-wrapper {
    ul.nav {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      align-content: center;
      [title="Notifications"] {
        position: relative;
        .notification {
          top: -5px !important;
          right: -5px !important;
        }
      }
    }
    .profile {
      .profile_pic {
        width: 44px;
        margin: 0 auto;
        background: $main;
        border-radius: 50%;

        img {
          max-width: 100%;
          width: 44px;
          height: 44px;
          object-fit: contain;
        }

        .card-user-empty {
          width: 44px;
          height: 44px;
        }
      }

      .profile_info {
        p {
          margin-top: 5px;
          display: block;
          font-size: 12px;
          color: #9a9fa9;
          font-weight: 500;
          text-align: center;
        }
      }
    }
  }
</style>