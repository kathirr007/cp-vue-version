<template>
    <div>
        <div class="no-data-container" v-if="(allContractsByClient.length > 0)">
            <div class="no-data-placeholder">
                <h2>
                    Play with filters or type a keyword
                </h2>
                <p>
                    Check out on the left side!
                </p>
            </div>
        </div>
        <div class="content" v-else>
          <client-only>
            <!-- <ongoingMissions
              :allContractsByClient="allContractsByClient"
              :missionStatus="missionStatus"
              :startFrom="startFrom"
              :numberOfRecords="numberOfRecords"
              :selectedStatus="selectedStatus"
              :getLabelClass="getLabelClass"
            />
            <notStartedMissions
              :allContractsByClient="allContractsByClient"
              :missionStatus="missionStatus"
              :startFrom="startFrom"
              :numberOfRecords="numberOfRecords"
              :selectedStatus="selectedStatus"
              :getLabelClass="getLabelClass"
            />
            <pausedMissions
              :allContractsByClient="allContractsByClient"
              :missionStatus="missionStatus"
              :startFrom="startFrom"
              :numberOfRecords="numberOfRecords"
              :selectedStatus="selectedStatus"
              :getLabelClass="getLabelClass"
            />
            <validatedMissions
              :allContractsByClient="allContractsByClient"
              :missionStatus="missionStatus"
              :startFrom="startFrom"
              :numberOfRecords="numberOfRecords"
              :selectedStatus="selectedStatus"
              :getLabelClass="getLabelClass"
            />
            <deletedMissions
              :allContractsByClient="allContractsByClient"
              :missionStatus="missionStatus"
              :startFrom="startFrom"
              :numberOfRecords="numberOfRecords"
              :selectedStatus="selectedStatus"
              :getLabelClass="getLabelClass"
            /> -->

            <keep-alive>
              <transition name="slideUp" mode="out-in">
                <component
                  :is="activeStatus"
                  :allContractsByClient="allContractsByClient"
                  :missionStatus="missionStatus"
                  :startFrom="startFrom"
                  :numberOfRecords="numberOfRecords"
                  :selectedStatus="selectedStatus"
                  :getLabelClass="getLabelClass"
                />
              </transition>
            </keep-alive>

          </client-only>
        </div>
    </div>
</template>
<script type="text/javascript">
  import axios from 'axios'
  import Vue from 'vue'
  import InfiniteLoading from 'vue-infinite-loading';
  import notStartedMissions from './notStartedMissions';
  import ongoingMissions from './ongoingMissions';
  import pausedMissions from './pausedMissions';
  import validatedMissions from './validatedMissions';
  import deletedMissions from './deletedMissions';
  import MultiComponentMixin from '~/mixins/MultiComponentMixin'
  import { mapState } from 'vuex'

  const groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  Vue.use(InfiniteLoading, {
    props: {
      spinner: 'default',
      /* other props need to configure */
      forceUseInfiniteWrapper: 'infinite-loader'
      // distance: 500
    },
    system: {
      throttleLimit: 50,
      /* other settings need to configure */
    },
  });

  export default {
    mixins: [MultiComponentMixin],
    props: {
      /* allMissions: {
        type: Array,
        required: true
      }, */
      allContractsByClient: {
        type: Object,
        required: true
      },
      /* allMissionsByContract: {
        type: Array,
        required: true
      }, */
      missionStatus: {
        type: String,
        required: true
      },
      startFrom: {
        type: Number,
        required: true
      },
      numberOfRecords: {
        type: Number,
        required: true
      }
    },
    components: {
      InfiniteLoading,
      notStartedMissions,
      ongoingMissions,
      pausedMissions,
      validatedMissions,
      deletedMissions,
    },
    data() {
      return {
        hasMissions: false,
        fetchFrom: 5,
        numberOfRecordsToFetch: 5,
        activeStatus: "ongoingMissions",
        steps: ['ongoingMissions', 'notStartedMissions', 'pausedMissions', 'validatedMissions', 'deletedMissions']
      }
    },
    computed: {
      ...mapState({
        prodMissions: state => state.missions.missions.prodMissions,
        techMissions: state => state.missions.missions.techMissions,
        allMissions: state => state.missions.missions.all,
      }),
      selectedStatus() {
        return this.missionStatus || "ongoing"
      },
      getLabelClass() {
        if(this.selectedStatus === "ongoing") {
          return "ongoing"
        } else if(this.selectedStatus === "draft") {
          return "draft"
        } else if(this.selectedStatus === "closed") {
          return "closed"
        } else if(this.selectedStatus === "validated") {
          return "validate"
        } else if(this.selectedStatus === "deleted") {
          return "delete"
        }
      },
      getActiveComponent() {
        if(this.selectedStatus === "ongoing") {
          return "ongoingMissions"
        } else if(this.selectedStatus === "draft") {
          return "notStartedMissions"
        } else if(this.selectedStatus === "closed") {
          return "pausedMissions"
        } else if(this.selectedStatus === "validated") {
          return "validatedMissions"
        } else if(this.selectedStatus === "deleted") {
          return "deletedMissions"
        }
      }
    },
    methods: {
      resetFetchValues(a=0, b=5, status){
        this.fetchFrom = a
        this.numberOfRecordsToFetch = b

        this.activeStatus = this.getActiveComponent
      },
      infiniteHandler($state) {
        // console.log(this.prodCards)
        const filter = {}
        filter.client_secret='%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi'
        filter.startFrom= this.fetchFrom
        filter.numberOfRecords=5
        filter.mission_status=this.selectedStatus
        this.$store.dispatch('missions/fetchMoreMissions', filter)
          .then(data => {
            // debugger
            if(data == undefined) {
              $state.complete()
              return
            }
            // console.log(response)
            // console.log(typeof((response.data)))
            // console.log(response.data)
            // console.log(response.data.length)
            // console.log(response.data.prodCards)
            // console.log(response.data.prodCards.length > 0)
            if (data.length > 1) {
              // let prodCards = response.data.prodCards
              // let techCards = response.data.techCards
              $state.loaded();
              this.numberOfRecordsToFetch += 5;
              this.fetchFrom = this.numberOfRecordsToFetch;
              // this.cards.push(...prodCards, ...techCards);
              // this.techCards.push(...response.data.techCards);
            } else {
              $state.complete();
            }
          })
          .catch(error => {
            console.error(error);
          });
      },
      groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tab-content-container .client-content-container {
    margin-top: 35px;
  }

  .card-section-list ul li .card-mission {
    padding: 15px;
  }

  .card-section-list ul li .ch-mission .task-price,
  .card-section-list ul li .task-price {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-panel-container .content .tab-content {
    display: none;

    &.active {
      display: block;
    }
  }

  .wp-app .wrapper .page-wrap .main-panel-wrap .main-panel .main-panel-page .main-container .main-panel-container .content .client-content-container .client-title .client-name {
    font-size: 20px;
  }

  .card-section-list ul li .card-mission .list-image-container,
  .card-section-list ul li .card-mission .list-head-container,
  .card-section-list ul li .card .task-price .ch-status,
  .card-section-list ul li .card-mission .task-price .numbers,
  .card-section-list ul li .card-mission .task-price .turnover {
    width: auto;
  }

  .card-section-list ul li .ch-mission .task-price {
    width: 100%;
    justify-content: space-between;
  }

  .turnover {
    margin: 0;
  }
/*   .infinite-loader {
    height: calc(100vh);
    overflow: hidden;
    overflow-y: auto;
  } */
</style>