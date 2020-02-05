<template>
  <div class="tab-panel">
    <div class="container-fluid">
      <div class="row">
        <div class="mb-3">
          <h3 class="fw700 text-main">Missions</h3>
        </div>
      </div>
      <div class="row">
        <div class="tab-panel-search full-width">
          <div class="search-input mb-3">
            <input type="search" class="form-control" name="company" required placeholder="Search a Keyword..." />
          </div>
        </div>
      </div>
    </div>
    <div class="page-filter">
      <div class="status-list-container">
        <div class="status-title">Mission Status</div>
        <div class="status-list">
          <ul class="btn-group btn-group-justified" data-toggle="buttons">
            <li>
              <a href="#not-started-mission" class="btn btn-default" :class="{ 'active': missionStatus === 'draft' }" data-toggle="tab">
                <input
                  @change.prevent="emitMissionStatusCheck($event)"
                  type="radio"
                  id="not-started"
                  v-model="missionStatus"
                  name="mission-tabs"
                  value="draft"
                />
                <i class="material-icons">hourglass_empty</i>
                <p>Not Started</p>
              </a>
            </li>
            <li>
              <a href="#ongoing-mission" class="btn btn-default" :class="{ 'active': missionStatus == 'ongoing' }" data-toggle="tab">
                <input
                  @change.prevent="emitMissionStatusCheck($event)"
                  type="radio"
                  id="ongoing"
                  v-model="missionStatus"
                  name="mission-tabs"
                  value="ongoing"
                  checked
                />
                <i class="material-icons">play_arrow</i>
                <p>Ongoing</p>
              </a>
            </li>
            <li>
              <a href="#paused-mission" class="btn btn-default" :class="{ 'active': missionStatus == 'closed' }" data-toggle="tab">
                <input
                  @change.prevent="emitMissionStatusCheck($event)"
                  type="radio"
                  id="paused"
                  v-model="missionStatus"
                  name="mission-tabs"
                  value="closed"
                />
                <i class="material-icons">pause</i>
                <p>Paused</p>
              </a>
            </li>
            <li>
              <a href="#closed-mission" class="btn btn-default" :class="{ 'active': missionStatus == 'validated' }" data-toggle="tab">
                <input
                  @change.prevent="emitMissionStatusCheck($event)"
                  type="radio"
                  id="closed"
                  v-model="missionStatus"
                  name="mission-tabs"
                  value="validated"
                />
                <i class="material-icons">check_box</i>
                <p>Validated/Closed</p>
              </a>
            </li>
            <li>
              <a href="#deleted-mission" class="btn btn-default" :class="{ 'active': missionStatus == 'deleted' }" data-toggle="tab">
                <input
                  @change.prevent="emitMissionStatusCheck($event)"
                  type="radio"
                  id="deleted"
                  v-model="missionStatus"
                  name="mission-tabs"
                  value="deleted"
                />
                <i class="material-icons">delete</i>
                <p>Deleted</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <filterListContainer />
      <filterListDisplay /> -->
    </div>
  </div>
</template>

<script>
  import filterListContainer from '~/components/missions/filterListContainer'
  import filterListDisplay from '~/components/missions/filterListDisplay'
  export default {
    components: {
      filterListContainer,
      filterListDisplay
    },
    data() {
      return {
        missionStatus: "ongoing",
        missionStatuses: [
          { name: "Not Started", icon: "business", link: "clients" },
          { name: "Ongoing", icon: "monetization_on", link: "quotes" },
          { name: "Paused", icon: "assignment", link: "contracts" },
          { name: "Validated/Closed", icon: "alarm", link: "missions" },
          { name: "Deleted", icon: "delete", value:'deleted', link: "quiz & survey" }
        ],
      }
    },
    methods: {
      emitMissionStatusCheck($event) {
        // console.log(this.missionStatus)
        this.$emit('MissionStatusCheck', $event.target.value)
        // console.log(typeof($event.target.value), $event.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
// @import 'vue-multiselect/dist/vue-multiselect.min.css'
.tab-panel-container{
  .tab-panel {
    position: fixed;
    width: 31.9%;
    height: calc(100vh);
    background: #FCFDFD;
    z-index: 1;
    overflow-x: hidden;
    padding: 15px;
    .left-panel-padding-bottom {
      // padding-bottom: 200px;

    }

    .navbar-default {
      background: none;
      padding: 0;
      border: none;

      .navbar-header {}

      .production-owner {
        margin: 0 0 30px;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -30px;
          width: 100%;
          height: 2px;
          background: #edeff1;
        }
      }
    }
  }
}
.page-filter {
  .status-list-container {
    margin: 0px 0 20px;

    .status-title {
      font-weight: 600;
      color: $main;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .status-list {
      ul {
        width: 100%;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;

        li {
          width: 31.50%;
          float: left;
          height: 99px;
          margin: 0 10px 10px 0;
          list-style-type: none;

          a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 22px 0 0 0;
            background: #F3F5F7;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            color: #A7ABB4;
            border: none;
            text-align: center;
            -webkit-transition: all .2s ease;
            -moz-transition: all .2s ease;
            -o-transition: all .2s ease;
            transition: all .2s ease;
            position: relative;

            input[type='radio'] {
              // display: none;
              position: absolute;
              top: 0;
              bottom: 0;
              height: 100%;
              width: 100%;
              left: 0;
              opacity: 0;
              cursor: pointer;
            }

            p {
              font-size: 14px;
            }

            &:hover,
            &:focus,
            &.active {
              color: #fff;
              background: #448AFF;
              opacity: 1;

              p {
                color: #fff;
              }
            }
          }

          &:nth-child(3n),
          &:last-child,
          &:only-child {
            margin: 0 0 10px 0;
          }
        }
      }
    }
  }
  .card-status-list-container {
    margin: 0px 0 20px;

    .status-title {
      font-weight: 600;
      color: $main;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .status-list {
      ul {
        padding: 0;
        margin-top: 0;
        list-style-type: none;
        width: 100%;
        flex-wrap: wrap;

        li {
          width: 100%;
          a {

            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            margin-bottom: 15px;
            color: $main;
            border: none;
            text-align: left;
            -webkit-transition: all .2s ease;
            -moz-transition: all .2s ease;
            -o-transition: all .2s ease;
            transition: all .2s ease;
            min-height: 45px;
            align-items: center;
            padding-right: 45px;

            &:before {
              content: '\f054';
              position: absolute;
              right: 15px;
              font-family: FontAwesome;
              color: #D7D9DC;
              font-size: 8px;
            }

            input[type='radio'] {
              display: none;

            }

            img.icon {
              margin-right: 15px;
            }

            &:hover,
            &:focus,
            &.active {
              color: #fff;
              background: #448AFF;
              opacity: 1;

              &:before {
                color: #fff;
              }

              p {
                color: #fff;
              }
            }
          }
        }

        li:nth-child(3) {
          margin: 0 0 10px 0;
        }
      }
    }
  }

}


</style>