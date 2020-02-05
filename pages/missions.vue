<template>
  <div class="row main-container">
    <div class="overlay-main-container"></div>
    <div class="col-md-4 tab-panel-container">
      <!-- tab panel content -->
      <tabPanelLeft
        @MissionStatusCheck="getMissions($event)"
      >

      </tabPanelLeft>
    </div>
    <div class="col-md-8 main-panel-container">
      <!-- <div v-for="(client, i) in allContractsByClient" :key="`contractList${i}GroupByClient`">
          {{client[0].client_name}}
          <ul>
            <li v-for="(mission, i) in groupBy(client, 'contract_id')" :key="mission.mission_id" :id="mission[0].contract_id">
              {{
                mission[0].contract_name
              }}
              <ul>
                <li v-for="mInfo in mission" :key="mInfo.mission_id" :id="mInfo.mission_id">
                  {{mInfo.mission_name}}
                </li>
              </ul>
            </li>
          </ul>
      </div> -->
      <mainPanelContainer
        :missionStatus="missionStatus"
        :allContractsByClient="allContractsByClient"
        :startFrom="startFrom"
        :numberOfRecords="numberOfRecords" ref="mainPanelContainer"
      />
      <!-- <mainPanelContainer
        :allContractsByClient="allContractsByClient"
        :missionStatus="missionStatus"
        :allMissionsByContract="allMissionsByContract"
      /> -->
    </div>
  </div>
</template>

<script>
  // import {$} from '~/assets/jquery.js'
  import axios from 'axios'
  import Vue from 'vue'
  import missionsList from 'assets/missions-list.json'
  import InfiniteLoading from 'vue-infinite-loading';
  import tabPanelLeft from '~/components/missions/tabPanelLeft';
  import mainPanelContainer from '~/components/missions/mainPanelContainer';
  import { mapState } from 'vuex'

  const groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  export default {
    layout: 'layout-03',
    head() {
      return {
        title: "LBD | Vue Version | Missions"
      }
    },
    components: {
      tabPanelLeft,
      mainPanelContainer
    },
    data(){
      return {
        prerender: 25,
        // prodMissions: [],
        // techMissions: [],
        prodCards: [],
        techCards: [],
        startFrom:0,
        numberOfRecords: 10,
        posts: [],
        numberPosts: 6,
        cards:[],
        missionStatus: '',
        missionsList: missionsList.data,
        prodMission: missionsList.data.prodMission,
        techMission: missionsList.data.techMission,
        ongoingMissions: missionsList.data.prodMission.filter((mission) => {
          return mission.mission_status == "ongoing"
        }),
        missionsAll: [...missionsList.data.prodMission, ...missionsList.data.techMission],
        allMissionsByClient: null,
        startFrom: 0,
        numberOfRecords: 5
      }
    },
    computed: {
      ...mapState({
        prodMissions: state => state.missions.missions.prodMissions,
        techMissions: state => state.missions.missions.techMissions,
        // allMissions: state => state.missions.missions.all,
      }),
      currentPage: {
        get() {
          // debugger
          return this.$store.state.blogs.pagination.pageNum
        },
        set(value) {
          // debugger
          this.$store.commit('blogs/setPage', value)
        }
      },
      allMissions() {
        return [...this.prodMissions, ...this.techMissions]
      },
      allContractsByClient() {
        // return groupBy(this.allMissions, "client_id")
        return groupBy(this.allMissions, "client_id")
      },
      allMissionsByContract() {
        // return groupBy(this.allMissions, "client_id")
        const allClients = Object.values(this.allContractsByClient)
        return allClients.map((client) => {
          return groupBy(client, "contract_id")
        })
      },
    },
    async fetch({store}) {
      const filter = {}
      // const {pageNum, pageSize} = query

      /* if(pageNum && pageSize) {
        filter.pageNum = parseInt(pageNum, 10)
        filter.pageSize = parseInt(pageSize, 10)

        store.commit('blogs/setPage', filter.pageNum)
      } else {

        // filter.pageNum = 1
        // filter.pageSize = 5
        filter.pageNum = store.state.blogs.pagination.pageNum
        filter.pageSize = store.state.blogs.pagination.pageSize
      } */
        filter.client_secret='%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi'
        filter.startFrom=0
        filter.numberOfRecords=5
        filter.mission_status="ongoing"
        // await store.dispatch('missions/fetchBlogs', filter)
        await store.dispatch('missions/fetchMissions', filter)
      // await store.dispatch('blogs/fetchFeaturedBlogs', { 'filter[featured]': true })
    },
    methods: {
      getMissions(status) {
        // debugger
        this.missionStatus = status
        const filter = {}
        filter.client_secret='%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi'
        filter.startFrom=this.startFrom
        filter.numberOfRecords=this.numberOfRecords
        filter.mission_status=this.missionStatus
        this.$store.dispatch('missions/fetchMissions', filter)
        this.$refs.mainPanelContainer.resetFetchValues(5, 5, this.missionStatus)
      },
      getContract(contracts, contractId) {
        contracts.filter((contract) => contract.contract_id === contract_id)
      },
      groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      }
    },

    created(){
      console.log("Created...")
    },
    mounted() {
      console.log("Mounted...")
      // var mainFilter = "client_id"
      // var secFilter = "contract_id"
      // this.allContractsByClient = groupBy(this.allMissions, mainFilter)
    },

  }
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
  .card {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem;
    margin-bottom: 1.5rem;

    /* &:not(:last-child){
      margin-bottom: 1.5rem;
    } */
  }

  .scroller {
    height: 100%;
    overflow-y: auto;
  }

  .user {
    height: 32%;
    padding: 0 12px;
    display: flex;
    align-items: center;
  }
</style>