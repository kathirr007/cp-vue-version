/* eslint-disable */
import Vue from 'vue'

export const state = () => ({
  items: {
    all: [],
    featured: [],
    drafts: [],
    published: [],
  },
  item: {},
  missions: {
    prodMissions: [],
    techMissions: [],
    all: [],
  },
  mission: {},
  pagination: {
    count: 0, // Count of all of our published blogs
    pageCount: 0, // How many pages we want to display
    pageSize: 5, // How many items we want to display per page
    pageNum: 1  // Current page
  }
})

export const actions = {
  // /api/v1/blogs?pageNum=1&pageSize=2
  fetchBlogs({commit, state}, filter) {
    const url = this.$applyParamsToUrl('/api/v1/blogs', filter)
    return this.$axios.$get(url)
      .then(data => {
        const { blogs, count, pageCount } = data
        commit('setBlogs', {resource: 'all', blogs})
        commit('setPagination', {count, pageCount})
        return state.items.all
      })
      .catch(err => Promise.reject(err))
  },
  // /api/v1/blogs?pageNum=1&pageSize=2
  // http://contentplace.x1.fr/cards?client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi&startFrom=${this.startFrom}&numberOfRecords=10
  fetchMissions({commit, state}, filter) {
    const url = this.$applyParamsToUrl('http://contentplace.x1.fr/missions', filter)
    return this.$axios.$get(url)
    .then(data => {
        // debugger
        const {prodMission=[], techMission} = data.data
        // debugger
        commit('setMissions', {resource: 'all', prodMission, techMission})
        commit('setProdMissions', {resource: 'prodMissions', prodMission})
        commit('setTechMissions', {resource: 'techMissions', techMission})
        // commit('setPagination', {count, pageCount})

        // debugger;

        return state.missions.all
      })
      .catch(err => Promise.reject(err))
  },
  fetchMoreMissions({commit, state}, filter) {
    const url = this.$applyParamsToUrl('http://contentplace.x1.fr/missions', filter)
    return this.$axios.$get(url)
    .then(data => {
        // debugger
        if(data.status === 204) return

        const {prodMission=[], techMission=[]} = data.data
        // debugger
        commit('setMoreProdMissions', {resource: 'prodMissions', prodMission})
        commit('setMoreTechMissions', {resource: 'techMissions', techMission})
        commit('setMoreMissions', {resource: 'all', prodMission, techMission})
        // commit('setPagination', {count, pageCount})

        // debugger;

        return state.missions.all
      })
      .catch(err => Promise.reject(err))
  },
}

export const mutations = {
  setMissions(state, {resource, prodMission, techMission}) {
    // debugger
    state.missions[resource] = [...prodMission, ...techMission]
  },
  setProdMissions(state, {resource, prodMission}) {
    // debugger
    state.missions[resource] = prodMission
  },
  setTechMissions(state, {resource, techMission}) {
    // debugger
    state.missions[resource] = techMission
  },
  setMoreMissions(state, {resource, prodMission, techMission}) {
    state.missions[resource].push(...prodMission, ...techMission)
  },
  setMoreProdMissions(state, {resource, prodMission}) {
    // debugger
    state.missions[resource].push(...prodMission)
  },
  setMoreTechMissions(state, {resource, techMission}) {
    // debugger
    state.missions[resource].push(...techMission)
  },
  setPage(state, currentPage) {
    Vue.set(state.pagination, 'pageNum', currentPage)
  },
  setPagination(state, {count, pageCount}) {
    Vue.set(state.pagination, 'count', count)
    Vue.set(state.pagination, 'pageCount', pageCount)
  }
}
