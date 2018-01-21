import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loaded: true,
    user: false,
    jwtToken: false,
  },
  mutations: {
    setJWT(state, token) {
      // save jwt in localstorage
      localStorage.setItem('jwtToken', token)

      // refresh axios authorization header
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      // save in store for faster access
      state.jwtToken = token
    },
    setUser(state, user) {
      state.user = user
    },
    logout(state) {
      // clear local storage token
      localStorage.removeItem('jwtToken')

      // clear axios auth header
      axios.defaults.headers.common['Authorization'] = null

      // empty user store
      state.jwtToken = false
      state.user = false
    },
  },
})

export default store