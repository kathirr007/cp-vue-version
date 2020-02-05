<template>
  <div class="tab-content active" :class="[selectedStatus === 'draft' ? 'active' : '']" id="not-started-mission">
    <div class="tab-content-container infinite-loader">
      <div v-for="(client, i) in allContractsByClient" :key="`contractList${i}GroupByClient`"
        class="col-md-12 client-content-container">
        <div class="col-md-12">
          <div class="client-title">
            <div class="client-logo">
              <b-img src="~/assets/lbd/img/adobe.jpg" rounded="circle" alt="Circle image"></b-img>
            </div>
            <div class="client-name">
              {{client[0].client_name}}
            </div>
          </div>
        </div>
        <div class="col-md-12" v-for="(mission) in groupBy(client, 'contract_id')" :key="mission.mission_id"
          :id="mission[0].contract_id">
          <div class="section-title-container">
            <span class="section-title">
              {{mission[0].contract_name}}
            </span>
          </div>
          <div class="card-section-list">
            <ul>
              <li v-for="mInfo in mission" :key="mInfo.mission_id" :id="mInfo.mission_id">

                <div class="col-md-12 card card-mission ch-mission">
                  <div class="col-md-1 list-image-container">
                    <div class="list-image" data-value="60" id="missionImage3657">
                      <b-img data-container="body" data-placement="bottom" data-toggle="tooltip"
                        src="~/assets/lbd/img/webedia.jpg" rounded="circle" alt="User Name">
                      </b-img>
                    </div>
                  </div>
                  <div class="col-md-6 list-head-container">
                    <div class="header">
                      <div class="status-label">
                        <span class="label" :class="getLabelClass">
                          {{mInfo.mission_status}}
                        </span>
                        <span class="dates">
                          <span>
                            May 01 2019
                          </span>
                          <i class="material-icons">
                            keyboard_arrow_right
                          </i>
                          <span>
                            Jul
                            03 2019
                          </span>
                        </span>
                      </div>
                      <strong class="primary-font text-capitalize">
                        {{mInfo.mission_name}}
                      </strong>
                      <div class="brief">
                        Editorial - Blog Articles - 400 Words
                      </div>
                      <div class="language-to">
                        <a data-container="body" data-placement="bottom" data-toggle="tooltip" href="javascript:;"
                          title="French">
                          <img src="~/assets/lbd/img/flag/fr.gif" />
                        </a>
                        <a data-container="body" data-placement="bottom" data-toggle="tooltip" href="javascript:;"
                          title="Espanol">
                          <img src="~/assets/lbd/img/flag/sp.gif" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="task-price">
                    <div class="ch-status">
                      200
                      <span>
                        ready to launch
                      </span>
                    </div>
                    <div class="numbers">
                      20
                      <span>
                        articles
                      </span>
                    </div>
                    <div class="turnover">
                      36,500.00 €
                      <span>
                        60.00 % margin
                      </span>
                    </div>
                  </div>
                  <div class="cta-container">
                    <div class="cta">
                      <ul>
                        <li>
                          <a data-container="body" data-placement="bottom" data-toggle="tooltip"
                            href="javascript:void(0);" title="Edit">
                            <i class="material-icons">
                              edit
                            </i>
                          </a>
                        </li>
                        <li>
                          <span data-target="#deleteConfirmation" data-toggle="modal">
                            <a data-container="body" data-placement="bottom" data-toggle="tooltip"
                              href="javascript:void(0);" title="Delete">
                              <i class="material-icons">
                                delete
                              </i>
                            </a>
                            <span>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <InfiniteLoading spinner="bubbles" @infinite="infiniteHandler">
        <div slot="no-more">No more Missions</div>
        <div slot="no-results">No more Missions</div>
      </InfiniteLoading>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import Vue from 'vue'
  import InfiniteLoading from 'vue-infinite-loading';
  import { mapState } from 'vuex'

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
      },
      selectedStatus: {
        type: String,
        required: true
      },
      getLabelClass: {
        type: String,
        required: true
      }
    },
    components: {
      InfiniteLoading,
    },
    data() {
      return {
        hasMissions: false,
        fetchFrom: 5,
        numberOfRecordsToFetch: 5
      }
    },
    computed: {

    },
    methods: {
      resetFetchValues(a=0, b=5){
        this.fetchFrom = a
        this.numberOfRecordsToFetch = b
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