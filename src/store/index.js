import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      habits: [
        'Wake up early'
      ]
    }
  },
  getters: {
  },
  mutations: {
    setInitData(state, data) {
      if (data !== null)
        state.data = JSON.parse(data)
    }
  },
  actions: {
  }
})

// const setDataToLocalStorage = (data) => {
//   localStorage.setItem('habit-management', JSON.stringify(data))
// }