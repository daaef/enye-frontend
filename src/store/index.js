import { createStore } from 'vuex'

export default createStore({
  state: {
    profiles: []
  },
  mutations: {
    setProfile(state, profile){
      state.profile = profile;
      console.log('clicked profile is', profile)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    profile(state){
      return state.profiles
    }
  }
})
