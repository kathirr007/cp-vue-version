<template>
<!-- <transition appear name="slideUp" mode="out-in"> -->
  <b-popover target="popover-main-menu" class="" variant="light" triggers="focus">
    <ul class="main-nav">
      <li v-for="(item ,i) in mainMenu" :key="i" class="menu-item">
          <nuxt-link :to="item.link" class="nav-link">
              <i class="material-icons">{{item.icon}}</i>
              {{item.name}}
          </nuxt-link>
      </li>
    </ul>
  </b-popover>
<!-- </transition> -->

</template>

<script>
  export default {
    // name: MainMenu
    data() {
      return {
        mainMenu: [
          {
            name: "clients", icon: "business", link: "clients"
          },
          {
            name: "quotes", icon: "monetization_on", link: "quotes"
          },
          {
            name: "contracts", icon: "assignment", link: "contracts"
          },
          {
            name: "missions", icon: "alarm", link: "missions"
          },
          {
            name: "quiz & survey", icon: "assignment_turned_in", link: "quiz & survey"
          },
          {
            name: "contributors", icon: "face", link: "contributors"
          },
          {
            name: "admin", icon: "settings", link: "admin"
          }
        ]
      }
    },
    methods: {
      onClose() {
        this.$emit('closeMainMenu')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-item {
    text-transform: capitalize;
  }
  .main-nav {
    // display: none;
    // position: fixed;
    // top: 26px;
    // left: 96px;
    // margin: 0;
    // padding: 0;
    // width: 230px;
    // border-radius: 4px;
    // -webkit-filter: drop-shadow(0 1px 2px rgba(63, 63, 68, 0.3));
    // -moz-filter: drop-shadow(0 1px 2px rgba(63, 63, 68, 0.3));
    // -ms-filter: drop-shadow(0 1px 2px rgba(63, 63, 68, 0.3));
    // -o-filter: drop-shadow(0 1px 2px rgba(63, 63, 68, 0.3));
    // filter: drop-shadow(0 1px 2px rgba(63, 63, 68, 0.3));
    // box-shadow: none;
    // border: 0;
    // background: #fff;
    // z-index: 9;

    // &:before,
    // &:after {
    //   border-bottom: 11px solid transparent;
    //   border-top: 11px solid transparent;
    //   border-right: 11px solid rgba(0, 0, 0, 0);
    //   content: '';
    //   display: inline-block;
    //   position: absolute;
    //   left: -12px;
    //   top: 74px;
    // }
    padding: 0;
    margin: 0;

    &:after {
      border-right: 11px solid #ffffff;
      left: -11px;
    }

    li {
      width: 100%;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flex;
      display: -o-flex;
      display: flex;
      margin: 0;

      a,
      i {
        color: #9a9fa9;
      }

      a {
        padding: 10px 20px;
        margin: 0;
        width: 100%;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        align-items: center;
        font-weight: 600;
      }

      i {
        font-size: 20px;
        margin: 0 15px 0 0;
      }

      &:hover {
        background: $selected;
        color: #ffffff;

        a,
        i {
          color: #ffffff;
        }
      }

      /* &:first-child {
        padding-top: 5px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        padding-bottom: 5px;
      } */
    }
  }
</style>