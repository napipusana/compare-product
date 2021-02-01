import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataTabel: []
  },
  mutations: {
    addProduct (state, data) {
      state.dataTabel.push(data)
    }
  },
  actions: {

  }
})
